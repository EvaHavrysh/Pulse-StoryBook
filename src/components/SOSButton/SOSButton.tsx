import React, { forwardRef, useState, useEffect, useRef } from 'react';
import './SOSButton.css';

export type SOSButtonState = 'default' | 'countdown' | 'sent' | 'offline' | 'icon';
export type SOSButtonSize = 'small' | 'medium' | 'large' | 1 | 2 | 3;

export interface SOSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual state variation: 'default' | 'countdown' | 'sent' | 'offline' | 'icon'.
   * If omitted, the button manages state internally upon click.
   */
  state?: SOSButtonState;
  /**
   * Starting countdown number to display when state is 'countdown'. Defaults to 15.
   */
  countdownValue?: number;
  /**
   * Progress percentage (0 - 100) for the countdown ring.
   * If omitted, automatically calculated based on remaining countdown time.
   */
  progress?: number;
  /**
   * Whether the countdown should automatically tick down using setTimeout. Defaults to true.
   */
  autoCountdown?: boolean;
  /**
   * Label text displayed when in 'sent' state. Defaults to 'Sent'.
   */
  sentLabel?: string;
  /**
   * Callback fired when the countdown reaches 0.
   */
  onCountdownComplete?: () => void;
  /**
   * Callback fired when internal state changes.
   */
  onStateChange?: (newState: SOSButtonState) => void;
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

const RadarPulseWaves = () => (
  <div className="pulse-sos-button__radar" aria-hidden="true">
    <span className="pulse-sos-button__radar-ring pulse-sos-button__radar-ring--1" />
    <span className="pulse-sos-button__radar-ring pulse-sos-button__radar-ring--2" />
    <span className="pulse-sos-button__radar-ring pulse-sos-button__radar-ring--3" />
  </div>
);

const CircularProgressRing = ({ progress = 100 }: { progress?: number }) => {
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
        style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }}
      />
    </svg>
  );
};

export const SOSButton = forwardRef<HTMLButtonElement, SOSButtonProps>(
  (
    {
      className = '',
      state: controlledState,
      countdownValue = 15,
      progress,
      autoCountdown = true,
      sentLabel = 'Sent',
      onCountdownComplete,
      onStateChange,
      size = 3,
      disabled = false,
      onClick,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Uncontrolled state management fallback when controlledState is omitted
    const [internalState, setInternalState] = useState<SOSButtonState | null>(null);
    const effectiveState = controlledState !== undefined ? controlledState : (internalState ?? 'default');

    const [currentCount, setCurrentCount] = useState<number>(countdownValue);
    const initialCountRef = useRef<number>(countdownValue);

    // Synchronize internal state when entering countdown state or when countdownValue prop updates
    useEffect(() => {
      if (effectiveState === 'countdown') {
        setCurrentCount(countdownValue);
        initialCountRef.current = countdownValue > 0 ? countdownValue : 15;
      }
    }, [effectiveState, countdownValue]);

    // Recursive setTimeout countdown tick
    useEffect(() => {
      if (effectiveState !== 'countdown' || !autoCountdown || currentCount <= 0) {
        return;
      }

      const timer = setTimeout(() => {
        setCurrentCount((prev) => {
          const next = prev - 1;
          if (next === 0) {
            onCountdownComplete?.();
            if (controlledState === undefined) {
              setInternalState('sent');
            }
            onStateChange?.('sent');
          }
          return next;
        });
      }, 1000);

      return () => clearTimeout(timer);
    }, [effectiveState, autoCountdown, currentCount, onCountdownComplete, onStateChange, controlledState]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;

      // Uncontrolled state interaction sequence
      if (controlledState === undefined) {
        if (effectiveState === 'default' || effectiveState === 'icon') {
          setInternalState('countdown');
          onStateChange?.('countdown');
        } else if (effectiveState === 'countdown' || effectiveState === 'sent') {
          setInternalState('default');
          onStateChange?.('default');
        }
      }

      onClick?.(e);
    };

    // Calculate ring progress: fallback to calculated percentage based on current count
    const calculatedProgress =
      initialCountRef.current > 0
        ? (currentCount / initialCountRef.current) * 100
        : 0;

    const displayProgress =
      progress !== undefined ? progress : Math.max(0, Math.min(100, calculatedProgress));

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

      switch (effectiveState) {
        case 'countdown':
          return autoCountdown ? currentCount : countdownValue;
        case 'sent':
          return sentLabel;
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
        onClick={handleClick}
        className={`pulse-sos-button pulse-sos-button--state-${effectiveState} ${sizeClass} ${className}`.trim()}
        {...props}
      >
        {effectiveState === 'countdown' && <RadarPulseWaves />}
        {effectiveState === 'countdown' && <CircularProgressRing progress={displayProgress} />}
        <span
          className="pulse-sos-button__content"
          style={effectiveState === 'sent' ? { fontSize: '24px', fontWeight: 800 } : undefined}
        >
          {renderContent()}
        </span>
      </button>
    );
  }
);

SOSButton.displayName = 'SOSButton';
