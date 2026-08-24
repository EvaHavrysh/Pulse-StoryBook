import React, { forwardRef, useState } from 'react';
import './BinaryChoiceSwitch.css';

export type BinaryChoiceValue = 'no' | 'yes';

export interface BinaryChoiceSwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> {
  /**
   * Controlled value: 'no' | 'yes'.
   */
  value?: BinaryChoiceValue;
  /**
   * Initial value when uncontrolled. Defaults to 'no'.
   */
  defaultValue?: BinaryChoiceValue;
  /**
   * Callback fired when selected option changes.
   */
  onChange?: (value: BinaryChoiceValue) => void;
  /**
   * Custom label for the left option. Defaults to "No".
   */
  noLabel?: string;
  /**
   * Custom label for the right option. Defaults to "Yes".
   */
  yesLabel?: string;
  /**
   * Disabled state.
   */
  disabled?: boolean;
}

export const BinaryChoiceSwitch = forwardRef<HTMLDivElement, BinaryChoiceSwitchProps>(
  (
    {
      className = '',
      value: controlledValue,
      defaultValue = 'no',
      onChange,
      noLabel = 'No',
      yesLabel = 'Yes',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<BinaryChoiceValue>(defaultValue);
    const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;

    const handleSelect = (val: BinaryChoiceValue) => {
      if (disabled) return;
      if (controlledValue === undefined) {
        setInternalValue(val);
      }
      onChange?.(val);
    };

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-disabled={disabled}
        className={`pulse-binary-switch ${disabled ? 'pulse-binary-switch--disabled' : ''} ${className}`.trim()}
        {...props}
      >
        {/* Sliding Volumetric Green Background */}
        <div
          className={`pulse-binary-switch__slider pulse-binary-switch__slider--${selectedValue}`}
          aria-hidden="true"
        />

        {/* Left Option ("No") */}
        <button
          type="button"
          role="radio"
          aria-checked={selectedValue === 'no'}
          disabled={disabled}
          className={`pulse-binary-switch__option ${
            selectedValue === 'no' ? 'pulse-binary-switch__option--active' : ''
          }`}
          onClick={() => handleSelect('no')}
        >
          {noLabel}
        </button>

        {/* Right Option ("Yes") */}
        <button
          type="button"
          role="radio"
          aria-checked={selectedValue === 'yes'}
          disabled={disabled}
          className={`pulse-binary-switch__option ${
            selectedValue === 'yes' ? 'pulse-binary-switch__option--active' : ''
          }`}
          onClick={() => handleSelect('yes')}
        >
          {yesLabel}
        </button>
      </div>
    );
  }
);

BinaryChoiceSwitch.displayName = 'BinaryChoiceSwitch';
