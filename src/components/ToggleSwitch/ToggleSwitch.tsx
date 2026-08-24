import React, { forwardRef, useState } from 'react';
import './ToggleSwitch.css';

export type ToggleSwitchVariant = 'active' | 'inactive' | 'disabled';

export interface ToggleSwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * Explicit variant representation: 'active' (On) | 'inactive' (Off) | 'disabled' (Muted).
   * If omitted, calculated dynamically from `checked` & `disabled` props.
   */
  variant?: ToggleSwitchVariant;
  /**
   * Controlled toggle state.
   */
  checked?: boolean;
  /**
   * Default checked state for uncontrolled usage.
   */
  defaultChecked?: boolean;
  /**
   * Disabled interactive state.
   */
  disabled?: boolean;
  /**
   * Callback fired when toggled.
   */
  onChange?: (checked: boolean) => void;
}

export const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleSwitchProps>(
  (
    {
      className = '',
      variant: explicitVariant,
      checked: controlledChecked,
      defaultChecked = false,
      disabled = false,
      onChange,
      onClick,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
    const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

    const effectiveVariant: ToggleSwitchVariant =
      explicitVariant !== undefined
        ? explicitVariant
        : disabled
        ? 'disabled'
        : isChecked
        ? 'active'
        : 'inactive';

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || effectiveVariant === 'disabled') return;

      const nextChecked = !isChecked;
      if (controlledChecked === undefined) {
        setInternalChecked(nextChecked);
      }
      onChange?.(nextChecked);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={effectiveVariant === 'active'}
        disabled={disabled || effectiveVariant === 'disabled'}
        onClick={handleClick}
        className={`pulse-toggle-switch pulse-toggle-switch--${effectiveVariant} ${className}`.trim()}
        {...props}
      >
        <span className="pulse-toggle-switch__thumb" aria-hidden="true" />
      </button>
    );
  }
);

ToggleSwitch.displayName = 'ToggleSwitch';
