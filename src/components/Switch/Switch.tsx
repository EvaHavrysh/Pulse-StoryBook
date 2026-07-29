import React, { forwardRef } from 'react';
import { Typography } from '../Typography/Typography';
import './Switch.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The text label displayed next to the switch.
   */
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className = '', label, disabled = false, id, ...props }, ref) => {
    const defaultId = React.useId();
    const switchId = id || defaultId;

    return (
      <label className={`pulse-switch ${disabled ? 'pulse-switch--disabled' : ''} ${className}`} htmlFor={switchId}>
        <span className="pulse-switch__wrapper">
          <input
            type="checkbox"
            id={switchId}
            ref={ref}
            disabled={disabled}
            className="pulse-switch__input"
            {...props}
          />
          <span className="pulse-switch__track">
            <span className="pulse-switch__thumb" />
          </span>
        </span>
        {label && <Typography variant="body" as="span" className="pulse-switch__label">{label}</Typography>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
