import React, { forwardRef } from 'react';
import './SosButton.css';

export type SosButtonState = 'default' | 'countdown' | 'sent' | 'blocked';
export type SosContentMode = 'text' | 'siren';

export interface SosButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /**
   * Current state variant: 'default' | 'countdown' | 'sent' | 'blocked'. Defaults to 'default'.
   */
  state?: SosButtonState;
  /**
   * Content mode for default state: 'text' ("SOS") | 'siren' (Siren Beacon Icon). Defaults to 'text'.
   */
  contentMode?: SosContentMode;
  /**
   * Countdown seconds remaining (for countdown state). Defaults to 15.
   */
  countdownSeconds?: number;
  /**
   * Total maximum seconds for progress ring. Defaults to 15.
   */
  maxSeconds?: number;
  /**
   * Click event handler.
   */
  onClick?: () => void;
}

const SirenIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 19h16" />
    <path d="M5 19V15a7 7 0 0 1 14 0v4" fill="currentColor" fillOpacity="0.25" />
    <line x1="12" y1="3" x2="12" y2="5" />
    <line x1="5" y1="7" x2="6.8" y2="8.8" />
    <line x1="19" y1="7" x2="17.2" y2="8.8" />
  </svg>
);

export const SosButton = forwardRef<HTMLButtonElement, SosButtonProps>(
  (
    {
      className = '',
      state = 'default',
      contentMode = 'text',
      countdownSeconds = 15,
      maxSeconds = 15,
      onClick,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const radius = 46;
    const circumference = 2 * Math.PI * radius;
    const progressOffset =
      state === 'countdown'
        ? circumference - (countdownSeconds / maxSeconds) * circumference
        : 0;

    return (
      <div className="pulse-sos-wrapper">
        {state === 'countdown' && (
          <>
            <div className="pulse-sos-radar-ring" />
            <div className="pulse-sos-radar-ring pulse-sos-radar-ring--delay" />
          </>
        )}

        <button
          ref={ref}
          type="button"
          disabled={disabled || state === 'blocked'}
          onClick={onClick}
          className={`pulse-sos-button pulse-sos-button--${state} ${className}`.trim()}
          {...props}
        >
          {state === 'countdown' && (
            <svg className="pulse-sos-ring-svg" viewBox="0 0 100 100">
              <circle className="pulse-sos-ring-bg" cx="50" cy="50" r={radius} fill="none" />
              <circle
                className="pulse-sos-ring-progress"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
              />
            </svg>
          )}

          {state === 'default' && (
            contentMode === 'siren' ? <SirenIcon /> : 'SOS'
          )}
          {state === 'countdown' && countdownSeconds}
          {state === 'sent' && 'Sent'}
          {state === 'blocked' && 'SOS'}
        </button>
      </div>
    );
  }
);

SosButton.displayName = 'SosButton';
