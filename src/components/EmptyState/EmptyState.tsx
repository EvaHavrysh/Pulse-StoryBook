import React, { forwardRef } from 'react';
import './EmptyState.css';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Primary title displayed inside the empty state container.
   */
  title?: string;
  /**
   * Optional secondary descriptive message.
   */
  description?: string;
  /**
   * Custom icon element override. Defaults to shield check outline SVG.
   */
  icon?: React.ReactNode;
  /**
   * Optional call-to-action button or node at bottom.
   */
  action?: React.ReactNode;
}

const DefaultShieldCheckIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M24 6C15 6 10 11 10 11V23C10 32.5 16.5 40 24 43C31.5 40 38 32.5 38 23V11C38 11 33 6 24 6Z" />
    <path d="M17.5 23.5L22 28L30.5 18" strokeWidth="2.6" />
  </svg>
);

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className = '',
      title = 'No active alerts.',
      description,
      icon,
      action,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={`pulse-empty-state ${className}`.trim()} {...props}>
        <div className="pulse-empty-state__icon-wrapper">
          {icon ?? <DefaultShieldCheckIcon />}
        </div>
        {title && <h3 className="pulse-empty-state__title">{title}</h3>}
        {description && <p className="pulse-empty-state__description">{description}</p>}
        {action && <div className="pulse-empty-state__action">{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
