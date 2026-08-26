import React, { forwardRef } from 'react';
import './MainButton.css';

export type ButtonState = 'default' | 'hover' | 'active' | 'disabled';
export type IconPosition = 'none' | 'left' | 'right';

export interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button label text. Defaults to 'Button'.
   */
  label?: string;
  /**
   * Forced state variant for Storybook display.
   */
  state?: ButtonState;
  /**
   * Position of chevron icon ('none' | 'left' | 'right').
   */
  iconPosition?: IconPosition;
  /**
   * Stretch button to 100% full width of container without shrinking on active click.
   */
  fullWidth?: boolean;
}

const LeftChevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const RightChevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      className = '',
      label = 'Button',
      state = 'default',
      iconPosition = 'none',
      fullWidth = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const isEffectiveDisabled = disabled || state === 'disabled';
    const hasIcon = iconPosition !== 'none';
    const isFullWidth = fullWidth || className.includes('pulse-card__button');

    return (
      <button
        ref={ref}
        type="button"
        disabled={isEffectiveDisabled}
        className={`pulse-main-button ${state !== 'default' ? `pulse-main-button--${state}` : ''} ${
          hasIcon ? 'pulse-main-button--has-icon' : ''
        } ${isFullWidth ? 'pulse-main-button--full-width' : ''} ${className}`.trim()}
        {...props}
      >
        {iconPosition === 'left' && (
          <span className="pulse-main-button__icon">
            <LeftChevron />
          </span>
        )}
        <span>{label}</span>
        {iconPosition === 'right' && (
          <span className="pulse-main-button__icon">
            <RightChevron />
          </span>
        )}
      </button>
    );
  }
);

MainButton.displayName = 'MainButton';
