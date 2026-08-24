import React, { forwardRef } from 'react';
import './EmptyState.css';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text displayed inside empty state. Defaults to "No active alerts."
   */
  text?: string;
  /**
   * Icon displayed above text. Defaults to shield with checkmark SVG.
   */
  icon?: React.ReactNode;
}

const ShieldCheckIcon = () => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M24 6C15 6 10 11 10 11V23C10 32.5 16.5 40 24 43C31.5 40 38 32.5 38 23V11C38 11 33 6 24 6Z" />
    <path d="M18 23.5L22 27.5L30 18" strokeWidth="2.6" />
  </svg>
);

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className = '', text = 'No active alerts.', icon, ...props }, ref) => {
    return (
      <div ref={ref} className={`pulse-empty-state ${className}`.trim()} {...props}>
        <div className="pulse-empty-state__icon">
          {icon ?? <ShieldCheckIcon />}
        </div>
        <p className="pulse-empty-state__text">{text}</p>
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
