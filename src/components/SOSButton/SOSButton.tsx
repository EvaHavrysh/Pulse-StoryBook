import React, { forwardRef } from 'react';
import './SOSButton.css';

export type SOSButtonState = 'default' | 'countdown' | 'sent' | 'offline' | 'icon';
export type SOSButtonSize = 'small' | 'medium' | 'large' | 1 | 2 | 3;

export interface SOSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual state variation: 'default' | 'countdown' | 'sent' | 'offline' | 'icon'.
   */
  state?: SOSButtonState;
  /**
   * Countdown number to display when state is 'countdown'. Defaults to 5.
   */
  countdownValue?: number;
  /**
   * Progress percentage (0 - 100) for the countdown ring. Defaults to 75.
   */
  progress?: number;
  /**
   * Button size option: 'small' | 'medium' | 'large' or 1 | 2 | 3.
   */
  size?: SOSButtonSize;
  /**
   * Custom label or icon children override.
   */
  children?: React.ReactNode;
}

const SirenIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', margin: 'auto' }}
    aria-hidden="true"
  >
    {/* 3 Top Light Rays */}
    <line x1="12" y1="2" x2="12" y2="4.2" />
    <line x1="4.8" y1="4.8" x2="6.8" y2="6.8" />
    <line x1="19.2" y1="4.8" x2="17.2" y2="6.8" />
    {/* Main Alarm Dome Body */}
    <path d="M7 16.5v-4a5 5 0 0 1 10 0v4" />
    {/* Bottom Horizontal Base Bar */}
    <rect x="5" y="16.5" width="14" height="3" rx="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const CircularProgressRing = ({ progress = 75 }: { progress?: number }) => {
  const strokeWidth = 4;
  const size = 100;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      className="pulse-sos-button__progress-svg"
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      {/* Background track ring */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#f8d7da"
        strokeWidth={strokeWidth}
      />
      {/* Active red progress arc */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#b80000"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
    </svg>
  );
};

export const SOSButton = forwardRef<HTMLButtonElement, SOSButtonProps>(
  (
    {
      className = '',
      state = 'default',
      countdownValue = 5,
      progress = 75,
      size = 3,
      disabled = false,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Map size parameters to CSS modifier classes
    const sizeClass =
      size === 1 || size === 'small'
        ? 'pulse-sos-button--size-1'
        : size === 2 || size === 'medium'
        ? 'pulse-sos-button--size-2'
        : 'pulse-sos-button--size-3';

    const renderContent = () => {
      if (children !== undefined) {
        return children;
      }

      switch (state) {
        case 'countdown':
          return countdownValue;
        case 'sent':
          return 'Sent';
        case 'offline':
          return 'SOS';
        case 'icon':
          return <SirenIcon />;
        case 'default':
        default:
          return 'SOS';
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`pulse-sos-button pulse-sos-button--state-${state} ${sizeClass} ${className}`.trim()}
        {...props}
      >
        {state === 'countdown' && <CircularProgressRing progress={progress} />}
        <span className="pulse-sos-button__content">{renderContent()}</span>
      </button>
    );
  }
);

SOSButton.displayName = 'SOSButton';
