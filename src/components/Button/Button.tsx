import React, { forwardRef } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonState = 'normal' | 'hover' | 'active' | 'disabled';
export type ButtonIconPosition = 'left' | 'right' | 'none';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button: 'primary' | 'secondary' | 'tertiary'.
   */
  variant?: ButtonVariant;
  /**
   * Visual state of the button: 'normal' | 'hover' | 'active' | 'disabled'.
   * Can be used to simulate/force specific states for previews or testing.
   */
  state?: ButtonState;
  /**
   * Position of the icon: 'left' | 'right' | 'none'.
   */
  icon?: ButtonIconPosition;
  /**
   * Custom element for left icon. Defaults to chevron left '<' when icon='left'.
   */
  iconLeft?: React.ReactNode;
  /**
   * Custom element for right icon. Defaults to chevron right '>' when icon='right'.
   */
  iconRight?: React.ReactNode;
  /**
   * Size of the button: 'small' | 'medium' | 'large'.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Full width container mode.
   */
  fullWidth?: boolean;
  /**
   * Loading state with animated spinner.
   */
  loading?: boolean;
}

const DefaultChevronLeft = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13L5 8l5-5" />
  </svg>
);

const DefaultChevronRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3l5 5-5 5" />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      state = 'normal',
      icon = 'none',
      iconLeft,
      iconRight,
      size = 'medium',
      fullWidth = false,
      loading = false,
      disabled = false,
      children = 'Button',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isBtnDisabled = disabled || state === 'disabled' || loading;

    // Resolve icon rendering based on `icon` prop or custom icon nodes
    const effectiveIconPos =
      icon !== 'none'
        ? icon
        : iconLeft
        ? 'left'
        : iconRight
        ? 'right'
        : 'none';

    const renderLeftIcon =
      !loading &&
      effectiveIconPos === 'left' &&
      (iconLeft || <DefaultChevronLeft />);

    const renderRightIcon =
      !loading &&
      effectiveIconPos === 'right' &&
      (iconRight || <DefaultChevronRight />);

    return (
      <button
        ref={ref}
        type={type}
        disabled={isBtnDisabled}
        className={`pulse-button pulse-button--${variant} pulse-button--state-${state} pulse-button--${size} ${
          fullWidth ? 'pulse-button--full-width' : ''
        } ${loading ? 'pulse-button--loading' : ''} ${className}`}
        aria-busy={loading}
        {...props}
      >
        {loading && (
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

        {renderLeftIcon && (
          <span className="pulse-button__icon pulse-button__icon--left" aria-hidden="true">
            {renderLeftIcon}
          </span>
        )}

        <span className="pulse-button__content">{children}</span>

        {renderRightIcon && (
          <span className="pulse-button__icon pulse-button__icon--right" aria-hidden="true">
            {renderRightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
