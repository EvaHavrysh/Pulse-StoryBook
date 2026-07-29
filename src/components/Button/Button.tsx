import React, { forwardRef } from 'react';
import { Typography } from '../Typography/Typography';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual variant of the button.
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the button should take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * Whether the button is in a loading state. Displays a spinner and disables interaction.
   */
  loading?: boolean;
  /**
   * Optional icon to render on the left side of the text.
   */
  iconLeft?: React.ReactNode;
  /**
   * Optional icon to render on the right side of the text.
   */
  iconRight?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      loading = false,
      disabled = false,
      iconLeft,
      iconRight,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isPending = loading;
    const isBtnDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isBtnDisabled}
        className={`pulse-button pulse-button--${variant} pulse-button--${size} ${
          fullWidth ? 'pulse-button--full-width' : ''
        } ${isPending ? 'pulse-button--loading' : ''} ${className}`}
        aria-busy={loading}
        {...props}
      >
        {isPending && (
          <span className="pulse-button__spinner" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle
                className="pulse-button__spinner-track"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle
                className="pulse-button__spinner-head"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="80"
                strokeDashoffset="60"
              />
            </svg>
          </span>
        )}

        {!isPending && iconLeft && (
          <span className="pulse-button__icon pulse-button__icon--left" aria-hidden="true">
            {iconLeft}
          </span>
        )}

        <span className="pulse-button__content">
          <Typography variant="body" as="span" color="inherit" fontWeight="inherit">
            {children}
          </Typography>
        </span>

        {!isPending && iconRight && (
          <span className="pulse-button__icon pulse-button__icon--right" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
