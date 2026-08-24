import React, { forwardRef, useEffect, useRef } from 'react';
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
   * Whether to play subtle alarm audio during countdown. Defaults to true.
   */
  playAudio?: boolean;
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
      playAudio = true,
      onClick,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const audioIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if (state === 'countdown' && playAudio) {
        let ctx: AudioContext | null = null;
        try {
          const AudioCtx =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          if (AudioCtx) {
            ctx = new AudioCtx();
            if (ctx.state === 'suspended') {
              ctx.resume().catch(() => {});
            }
          }
        } catch {
          ctx = null;
        }

        const playBeep = () => {
          if (!ctx || ctx.state === 'closed') return;
          try {
            if (ctx.state === 'suspended') {
              ctx.resume().catch(() => {});
            }
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.18);
          } catch {
            // Ignore audio errors gracefully
          }
        };

        // Play initial beep
        playBeep();

        // Repeat every 500ms seamlessly
        audioIntervalRef.current = setInterval(playBeep, 500);

        return () => {
          if (audioIntervalRef.current) {
            clearInterval(audioIntervalRef.current);
            audioIntervalRef.current = null;
          }
          if (ctx && ctx.state !== 'closed') {
            ctx.close().catch(() => {});
          }
        };
      }
    }, [state, playAudio]);

    return (
      <div className="pulse-sos-wrapper">
        {state === 'countdown' && (
          <>
            <div className="pulse-sos-radar-wave pulse-sos-radar-wave--1" />
            <div className="pulse-sos-radar-wave pulse-sos-radar-wave--2" />
            <div className="pulse-sos-radar-wave pulse-sos-radar-wave--3" />
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
          {state === 'default' && (contentMode === 'siren' ? <SirenIcon /> : 'SOS')}
          {state === 'countdown' && countdownSeconds}
          {state === 'sent' && 'Sent'}
          {state === 'blocked' && 'SOS'}
        </button>
      </div>
    );
  }
);

SosButton.displayName = 'SosButton';
