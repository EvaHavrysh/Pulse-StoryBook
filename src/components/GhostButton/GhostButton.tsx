import React, { forwardRef } from 'react';
import './GhostButton.css';

import type { ButtonState, IconPosition } from '../MainButton/MainButton';

export type { ButtonState, IconPosition };

export interface GhostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

export const GhostButton = forwardRef<HTMLButtonElement, GhostButtonProps>(
  (
    {
      className = '',
      label = 'Button',
      state = 'default',
      iconPosition = 'none',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const isEffectiveDisabled = disabled || state === 'disabled';
    const hasIcon = iconPosition !== 'none';

    return (
      <button
        ref={ref}
        type="button"
        disabled={isEffectiveDisabled}
        className={`pulse-ghost-button ${state !== 'default' ? `pulse-ghost-button--${state}` : ''} ${
          hasIcon ? 'pulse-ghost-button--has-icon' : ''
        } ${className}`.trim()}
        {...props}
      >
        {iconPosition === 'left' && (
          <span className="pulse-ghost-button__icon">
            <LeftChevron />
          </span>
        )}
        <span>{label}</span>
        {iconPosition === 'right' && (
          <span className="pulse-ghost-button__icon">
            <RightChevron />
          </span>
        )}
      </button>
    );
  }
);

GhostButton.displayName = 'GhostButton';
