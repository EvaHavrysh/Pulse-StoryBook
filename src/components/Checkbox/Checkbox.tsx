import React, { forwardRef, useState } from 'react';
import './Checkbox.css';

export type CheckboxState = 'unchecked' | 'checked' | 'minus' | 'plus';

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  /**
   * Current state of the checkbox: 'unchecked' | 'checked' | 'minus' | 'plus'.
   * Also accepts boolean (true = 'checked', false = 'unchecked').
   */
  state?: CheckboxState | boolean;
  /**
   * Initial state when uncontrolled. Defaults to 'unchecked'.
   */
  defaultState?: CheckboxState | boolean;
  /**
   * Optional adjacent text label.
   */
  label?: React.ReactNode;
  /**
   * Disabled interactive state.
   */
  disabled?: boolean;
  /**
   * Whether clicking cycles through all 4 states ('unchecked' -> 'checked' -> 'minus' -> 'plus' -> 'unchecked').
   */
  cycleAllStates?: boolean;
  /**
   * Callback fired when state changes.
   */
  onChange?: (state: CheckboxState) => void;
}

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
  </svg>
);

const MinusIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="8" x2="12" y2="8" />
  </svg>
);

const PlusIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="3.5" x2="8" y2="12.5" />
    <line x1="3.5" y1="8" x2="12.5" y2="8" />
  </svg>
);

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    {
      className = '',
      state: controlledState,
      defaultState = 'unchecked',
      label,
      disabled = false,
      cycleAllStates = false,
      onChange,
      onClick,
      ...props
    },
    ref
  ) => {
    const normalizeState = (val: CheckboxState | boolean): CheckboxState => {
      if (typeof val === 'boolean') return val ? 'checked' : 'unchecked';
      return val;
    };

    const [internalState, setInternalState] = useState<CheckboxState>(normalizeState(defaultState));
    const currentState = controlledState !== undefined ? normalizeState(controlledState) : internalState;

    const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
      if (disabled) return;

      let nextState: CheckboxState;
      if (cycleAllStates) {
        if (currentState === 'unchecked') nextState = 'checked';
        else if (currentState === 'checked') nextState = 'minus';
        else if (currentState === 'minus') nextState = 'plus';
        else nextState = 'unchecked';
      } else {
        nextState = currentState === 'checked' ? 'unchecked' : 'checked';
      }

      if (controlledState === undefined) {
        setInternalState(nextState);
      }
      onChange?.(nextState);
      onClick?.(e);
    };

    return (
      <label
        ref={ref}
        className={`pulse-checkbox-container ${
          disabled ? 'pulse-checkbox-container--disabled' : ''
        } ${className}`.trim()}
        onClick={handleClick}
        {...props}
      >
        <span className={`pulse-checkbox pulse-checkbox--${currentState}`}>
          {currentState === 'checked' && (
            <span className="pulse-checkbox__icon">
              <CheckIcon />
            </span>
          )}
          {currentState === 'minus' && (
            <span className="pulse-checkbox__icon">
              <MinusIcon />
            </span>
          )}
          {currentState === 'plus' && (
            <span className="pulse-checkbox__icon">
              <PlusIcon />
            </span>
          )}
        </span>
        {label && <span className="pulse-checkbox__label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
