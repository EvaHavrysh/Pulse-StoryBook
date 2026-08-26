import React, { forwardRef } from 'react';
import { Skeleton } from '../Skeleton/Skeleton';
import { MainButton } from '../MainButton/MainButton';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title text (16px). Defaults to "Emergency Alert".
   */
  title?: string;
  /**
   * Description text (12px). Defaults to "High wind advisory in effect. Secure loose objects and stay indoors until conditions improve."
   */
  description?: string;
  /**
   * Button text. Defaults to "View Details".
   */
  buttonLabel?: string;
  /**
   * Loading state toggle. When true, displays the Skeleton component. Defaults to false.
   */
  isLoading?: boolean;
  /**
   * Enable shimmer animation when in loading state. Defaults to true.
   */
  animatedLoading?: boolean;
  /**
   * Click handler for card's interactive button.
   */
  onButtonClick?: () => void;
}

const WarningIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className = '',
      title = 'Emergency Alert',
      description = 'High wind advisory in effect. Secure loose objects and stay indoors until conditions improve.',
      buttonLabel = 'View Details',
      isLoading = false,
      animatedLoading = true,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    if (isLoading) {
      return (
        <Skeleton
          ref={ref}
          className={className}
          animated={animatedLoading}
          width="312px"
          height="176px"
          {...props}
        />
      );
    }

    return (
      <div ref={ref} className={`pulse-card ${className}`.trim()} {...props}>
        <div className="pulse-card__header">
          <h3 className="pulse-card__title">{title}</h3>
        </div>

        <p className="pulse-card__description">{description}</p>

        <div className="pulse-card__icons">
          <span className="pulse-card__icon-badge" title="Warning">
            <WarningIcon />
          </span>
          <span className="pulse-card__icon-badge" title="Status OK">
            <CheckCircleIcon />
          </span>
          <span className="pulse-card__icon-badge" title="Info">
            <InfoCircleIcon />
          </span>
        </div>

        <div className="pulse-card__footer">
          <MainButton
            label={buttonLabel}
            onClick={onButtonClick}
            className="pulse-card__button"
          />
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';
