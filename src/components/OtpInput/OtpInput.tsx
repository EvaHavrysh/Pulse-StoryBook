import React, { forwardRef, useRef, useState } from 'react';
import './OtpInput.css';

export type OtpInputVariant = 'default' | 'disabled' | 'active' | 'success' | 'error';

export interface OtpInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Number of OTP input boxes. Defaults to 4.
   */
  length?: number;
  /**
   * Explicit visual state variant: 'default' | 'disabled' | 'active' | 'success' | 'error'.
   */
  variant?: OtpInputVariant;
  /**
   * Controlled string value (e.g. "3509").
   */
  value?: string;
  /**
   * Default initial value when uncontrolled.
   */
  defaultValue?: string;
  /**
   * Disabled interactive state.
   */
  disabled?: boolean;
  /**
   * Callback fired when value changes.
   */
  onChange?: (value: string) => void;
  /**
   * Callback fired when all boxes are filled.
   */
  onComplete?: (value: string) => void;
}

export const OtpInput = forwardRef<HTMLDivElement, OtpInputProps>(
  (
    {
      className = '',
      length = 4,
      variant: explicitVariant,
      value: controlledValue,
      defaultValue = '',
      disabled = false,
      onChange,
      onComplete,
      ...props
    },
    ref
  ) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [internalValue, setInternalValue] = useState<string>(defaultValue);

    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

    const isEffectiveDisabled = disabled || explicitVariant === 'disabled';
    const effectiveVariant: OtpInputVariant =
      explicitVariant !== undefined
        ? explicitVariant
        : disabled
        ? 'disabled'
        : 'default';

    const getDigits = (): string[] => {
      const arr = currentValue.split('');
      while (arr.length < length) {
        arr.push('');
      }
      return arr.slice(0, length);
    };

    const digits = getDigits();

    const updateValue = (newDigits: string[]) => {
      const valStr = newDigits.join('').slice(0, length);
      if (controlledValue === undefined) {
        setInternalValue(valStr);
      }
      onChange?.(valStr);
      if (valStr.length === length && newDigits.every((d) => d !== '')) {
        onComplete?.(valStr);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      if (isEffectiveDisabled) return;

      const rawVal = e.target.value;
      const lastChar = rawVal.slice(-1);

      if (!/^\d*$/.test(lastChar)) return;

      const newDigits = [...digits];
      newDigits[index] = lastChar;
      updateValue(newDigits);

      if (lastChar && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (isEffectiveDisabled) return;

      if (e.key === 'Backspace') {
        if (!digits[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
          const newDigits = [...digits];
          newDigits[index - 1] = '';
          updateValue(newDigits);
        } else if (digits[index]) {
          const newDigits = [...digits];
          newDigits[index] = '';
          updateValue(newDigits);
        }
      } else if (e.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
      if (isEffectiveDisabled) return;
      e.preventDefault();
      const pastedText = e.clipboardData.getData('text').trim();
      const numericText = pastedText.replace(/\D/g, '').slice(0, length);

      if (numericText) {
        const newDigits = numericText.split('');
        while (newDigits.length < length) {
          newDigits.push('');
        }
        updateValue(newDigits);
        const nextFocusIndex = Math.min(numericText.length, length - 1);
        inputRefs.current[nextFocusIndex]?.focus();
      }
    };

    return (
      <div
        ref={ref}
        onPaste={handlePaste}
        className={`pulse-otp-container pulse-otp-container--${effectiveVariant} ${className}`.trim()}
        {...props}
      >
        {digits.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => (inputRefs.current[idx] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            disabled={isEffectiveDisabled}
            value={digit}
            onChange={(e) => handleInputChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="pulse-otp-box"
            aria-label={`Digit ${idx + 1} of ${length}`}
          />
        ))}
      </div>
    );
  }
);

OtpInput.displayName = 'OtpInput';
