import React, { forwardRef } from 'react';
import './StatusBadge.css';

export type StatusBadgeVariant = 'safe' | 'danger';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Status variant: 'safe' (Green tint) | 'danger' (Red tint). Defaults to 'safe'.
   */
  variant?: StatusBadgeVariant;
  /**
   * Custom label text override. If omitted, defaults to "Safe" or "Danger" based on variant.
   */
  label?: string;
}

export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className = '', variant = 'safe', label, ...props }, ref) => {
    const defaultLabel = variant === 'safe' ? 'Safe' : 'Danger';
    const displayLabel = label ?? defaultLabel;

    return (
      <span
        ref={ref}
        className={`pulse-status-badge pulse-status-badge--${variant} ${className}`.trim()}
        {...props}
      >
        <span className="pulse-status-badge__dot" aria-hidden="true" />
        <span className="pulse-status-badge__text">{displayLabel}</span>
      </span>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';
