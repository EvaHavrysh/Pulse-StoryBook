import React, { forwardRef, useState } from 'react';
import './TextInput.css';

export interface TextInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Floating label on top border. Defaults to "Other"
   */
  label?: string;
  /**
   * Input value string.
   */
  value?: string;
  /**
   * Initial default value.
   */
  defaultValue?: string;
  /**
   * Placeholder text. Defaults to "Type here..."
   */
  placeholder?: string;
  /**
   * Input state variant. Options: 'default' | 'active' | 'success' | 'error'. Defaults to 'default'
   */
  variant?: 'default' | 'active' | 'success' | 'error';
  /**
   * Disabled state toggle. Defaults to false.
   */
  disabled?: boolean;
  /**
   * Whether to render a multi-line textarea instead of a single-line input. Defaults to false.
   */
  multiline?: boolean;
  /**
   * Number of visible text lines when multiline is true. Defaults to 4.
   */
  rows?: number;
  /**
   * Change callback for input or textarea element.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * Container width in pixels or CSS string. Defaults to 320.
   */
  width?: string | number;
}

export const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  (
    {
      className = '',
      label = 'Other',
      value: controlledValue,
      defaultValue = '',
      placeholder = 'Type here...',
      variant = 'default',
      disabled = false,
      multiline = false,
      rows = 4,
      onChange,
      width = 320,
      style,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState<string>(
      controlledValue ?? defaultValue
    );
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleValueChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      if (controlledValue === undefined) {
        setInputValue(e.target.value);
      }
      if (onChange) {
        onChange(e);
      }
    };

    const currentValue = controlledValue !== undefined ? controlledValue : inputValue;
    const formattedWidth = typeof width === 'number' ? `${width}px` : width;

    return (
      <div
        ref={ref}
        className={`pulse-text-input pulse-text-input--variant-${variant} ${
          isFocused ? 'pulse-text-input--focused' : ''
        } ${multiline ? 'pulse-text-input--multiline' : ''} ${
          disabled ? 'pulse-text-input--disabled' : ''
        } ${className}`.trim()}
        style={{ width: formattedWidth, ...style }}
        {...props}
      >
        <div className="pulse-text-input__box">
          {label && <label className="pulse-text-input__label">{label}</label>}

          {multiline ? (
            <textarea
              className="pulse-text-input__field"
              value={currentValue}
              onChange={handleValueChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={disabled}
              placeholder={placeholder}
              rows={rows}
            />
          ) : (
            <input
              type="text"
              className="pulse-text-input__field"
              value={currentValue}
              onChange={handleValueChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={disabled}
              placeholder={placeholder}
            />
          )}
        </div>
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
