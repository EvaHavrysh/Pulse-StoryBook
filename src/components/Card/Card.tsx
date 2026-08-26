import React, { forwardRef } from 'react';
import { Skeleton } from '../Skeleton/Skeleton';
import { MainButton } from '../MainButton/MainButton';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title text (16px bold). Defaults to "Flood Watch".
   */
  title?: string;
  /**
   * Description text (12px). Defaults to "High water levels expected in British Columbia coastal regions. Move valuable items to upper floors."
   */
  description?: string;
  /**
   * Button text (English). Defaults to "Show on map".
   */
  buttonLabel?: string;
  /**
   * Loading state toggle. When true, displays the Skeleton loading state. Defaults to false.
   */
  isLoading?: boolean;
  /**
   * Enable shimmer animation when in loading state. Defaults to true.
   */
  animatedLoading?: boolean;
  /**
   * Click handler for card's full-width button.
   */
  onButtonClick?: () => void;
}

const WarningTriangleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c00000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className = '',
      title = 'Flood Watch',
      description = 'High water levels expected in British Columbia coastal regions. Move valuable items to upper floors.',
      buttonLabel = 'Show on map',
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
          variant="card"
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
          <span className="pulse-card__warning-icon" title="Warning">
            <WarningTriangleIcon />
          </span>
        </div>

        <p className="pulse-card__description">{description}</p>

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
