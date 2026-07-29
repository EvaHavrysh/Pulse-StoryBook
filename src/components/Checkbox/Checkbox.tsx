import React, { forwardRef, useEffect, useRef } from 'react';
import { Typography } from '../Typography/Typography';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The text label displayed next to the checkbox.
   */
  label?: string;
  /**
   * Whether the checkbox is in an indeterminate state (neither checked nor unchecked, e.g. parent checkbox in nested lists).
   */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, disabled = false, indeterminate = false, checked, id, ...props }, ref) => {
    const defaultId = React.useId();
    const checkboxId = id || defaultId;
    
    // Internal ref to handle the indeterminate state
    const localRef = useRef<HTMLInputElement>(null);
    
    // Merge external ref and local ref
    const resolvedRef = (ref || localRef) as React.RefObject<HTMLInputElement>;

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, resolvedRef]);

    return (
      <label className={`pulse-checkbox ${disabled ? 'pulse-checkbox--disabled' : ''} ${className}`} htmlFor={checkboxId}>
        <span className="pulse-checkbox__wrapper">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref || resolvedRef}
            checked={checked}
            disabled={disabled}
            className="pulse-checkbox__input"
            {...props}
          />
          <span className="pulse-checkbox__box">
            {/* Indeterminate dash state */}
            {indeterminate ? (
              <svg className="pulse-checkbox__icon pulse-checkbox__icon--indeterminate" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            ) : (
              /* Checked checkmark state */
              <svg className="pulse-checkbox__icon pulse-checkbox__icon--checkmark" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </span>
        {label && <Typography variant="body" as="span" className="pulse-checkbox__label">{label}</Typography>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
