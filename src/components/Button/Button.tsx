import React, { forwardRef } from 'react';
import './Button.css';

export type ButtonVariant = 'primary';
export type ButtonState = 'normal' | 'hover' | 'active' | 'disabled';
export type ButtonIconPosition = 'left' | 'right' | 'none';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button. Starts with 'primary'.
   */
  variant?: ButtonVariant;
  /**
   * Explicit visual state: 'normal' | 'hover' | 'active' | 'disabled'.
   */
  state?: ButtonState;
  /**
   * Icon positioning: 'left' | 'right' | 'none'.
   */
  icon?: ButtonIconPosition;
  /**
   * Custom element for left icon. Defaults to chevron left '<'.
   */
  iconLeft?: React.ReactNode;
  /**
   * Custom element for right icon. Defaults to chevron right '>'.
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
}

const DefaultChevronLeft = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
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
    strokeLinecap="square"
    strokeLinejoin="miter"
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
      disabled = false,
      children = 'Button',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isBtnDisabled = disabled || state === 'disabled';

    const effectiveIconPos =
      icon !== 'none'
        ? icon
        : iconLeft
        ? 'left'
        : iconRight
        ? 'right'
        : 'none';

    const renderLeftIcon =
      effectiveIconPos === 'left' && (iconLeft || <DefaultChevronLeft />);

    const renderRightIcon =
      effectiveIconPos === 'right' && (iconRight || <DefaultChevronRight />);

    const stateClass = state !== 'normal' ? `pulse-button--state-${state}` : '';

    return (
      <button
        ref={ref}
        type={type}
        disabled={isBtnDisabled}
        className={`pulse-button pulse-button--${variant} ${stateClass} pulse-button--${size} ${
          fullWidth ? 'pulse-button--full-width' : ''
        } ${className}`.trim()}
        {...props}
      >
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
