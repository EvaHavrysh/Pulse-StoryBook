import React, { forwardRef } from 'react';
import './Input.css';

export type InputState = 'default' | 'disabled' | 'active' | 'success' | 'error';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'onChange'> {
  /**
   * Floating label text cutting into top border. Defaults to "Other".
   */
  label?: string;
  /**
   * Input visual state: 'default' | 'disabled' | 'active' | 'success' | 'error'.
   */
  state?: InputState;
  /**
   * Placeholder text. Defaults to "Type here...".
   */
  placeholder?: string;
  /**
   * Input value.
   */
  value?: string;
  /**
   * Multiline / expanded textarea box.
   */
  multiline?: boolean;
  /**
   * Textarea rows if multiline is true.
   */
  rows?: number;
  /**
   * Simulate active typing cursor line.
   */
  showCursor?: boolean;
  /**
   * Disabled state.
   */
  disabled?: boolean;
  /**
   * Change event handler.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TextInput = forwardRef<HTMLInputElement & HTMLTextAreaElement, TextInputProps>(
  (
    {
      className = '',
      label = 'Other',
      state = 'default',
      placeholder = 'Type here...',
      value,
      multiline = false,
      rows = 4,
      showCursor = false,
      disabled = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const isBtnDisabled = disabled || state === 'disabled';
    const activeStateClass = state !== 'default' ? `pulse-input-container--state-${state}` : '';
    const multilineFrameClass = multiline ? 'pulse-input-frame--multiline' : '';

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div
        className={`pulse-input-container ${activeStateClass} ${
          isBtnDisabled ? 'pulse-input-container--disabled' : ''
        } ${className}`.trim()}
      >
        {/* Floating Notch Label */}
        {label && <label className="pulse-input-label">{label}</label>}

        {/* Input Frame */}
        <div className={`pulse-input-frame ${multilineFrameClass}`}>
          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              disabled={isBtnDisabled}
              placeholder={placeholder}
              value={value}
              rows={rows}
              className="pulse-input-control"
              onChange={handleInputChange}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
              <input
                ref={ref as React.Ref<HTMLInputElement>}
                disabled={isBtnDisabled}
                placeholder={placeholder}
                value={value}
                className="pulse-input-control"
                onChange={handleInputChange}
                {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
              />
              {showCursor && state === 'active' && <span className="pulse-input-cursor" aria-hidden="true" />}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
