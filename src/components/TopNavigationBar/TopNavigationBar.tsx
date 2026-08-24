import React, { forwardRef } from 'react';
import './TopNavigationBar.css';

export interface TopNavigationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Location label text. Defaults to "Ottawa, Canada"
   */
  location?: string;
  /**
   * Callback fired when back arrow is clicked.
   */
  onBackClick?: () => void;
  /**
   * Custom back icon override.
   */
  backIcon?: React.ReactNode;
  /**
   * Custom location pin icon override.
   */
  pinIcon?: React.ReactNode;
}

const BackArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const LocationPinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const TopNavigationBar = forwardRef<HTMLDivElement, TopNavigationBarProps>(
  (
    {
      className = '',
      location = 'Ottawa, Canada',
      onBackClick,
      backIcon,
      pinIcon,
      ...props
    },
    ref
  ) => {
    return (
      <header ref={ref} className={`pulse-top-nav-bar ${className}`.trim()} {...props}>
        <button
          type="button"
          aria-label="Go back"
          className="pulse-top-nav-bar__back-btn"
          onClick={onBackClick}
        >
          {backIcon ?? <BackArrowIcon />}
        </button>

        <div className="pulse-top-nav-bar__center">
          <span className="pulse-top-nav-bar__pin-icon">
            {pinIcon ?? <LocationPinIcon />}
          </span>
          <span className="pulse-top-nav-bar__location">{location}</span>
        </div>
      </header>
    );
  }
);

TopNavigationBar.displayName = 'TopNavigationBar';
