import React, { forwardRef } from 'react';
import { StatusBadge, StatusBadgeVariant } from '../StatusBadge/StatusBadge';
import './StatusContactCard.css';

export interface StatusContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Contact name. Defaults to "Mom"
   */
  name?: string;
  /**
   * Status variant: 'safe' | 'danger'. Defaults to 'safe'
   */
  status?: StatusBadgeVariant;
  /**
   * Status badge label override.
   */
  statusLabel?: string;
  /**
   * Subtext timestamp at bottom left. Defaults to "Updated 5m ago"
   */
  updatedText?: string;
  /**
   * Custom avatar element override. Defaults to user outline SVG inside green circle.
   */
  avatar?: React.ReactNode;
}

const DefaultUserAvatarIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const StatusContactCard = forwardRef<HTMLDivElement, StatusContactCardProps>(
  (
    {
      className = '',
      name = 'Mom',
      status = 'safe',
      statusLabel,
      updatedText = 'Updated 5m ago',
      avatar,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={`pulse-status-contact-card ${className}`.trim()} {...props}>
        <div className="pulse-status-contact-card__top">
          <div className="pulse-status-contact-card__user">
            <div className="pulse-status-contact-card__avatar">
              {avatar ?? <DefaultUserAvatarIcon />}
            </div>
            <h3 className="pulse-status-contact-card__name">{name}</h3>
          </div>
          <StatusBadge variant={status} label={statusLabel} />
        </div>
        {updatedText && (
          <p className="pulse-status-contact-card__timestamp">{updatedText}</p>
        )}
      </div>
    );
  }
);

StatusContactCard.displayName = 'StatusContactCard';
