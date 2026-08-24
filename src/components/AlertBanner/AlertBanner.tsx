import React, { forwardRef } from 'react';
import './AlertBanner.css';

export interface AlertBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Main title text. Defaults to "Tornado Warning 🌪️"
   */
  title?: string;
  /**
   * Body / description subtext. Defaults to "Severe tornado detected nearby.\nTake shelter immediately!"
   */
  description?: string;
  /**
   * Timestamp string on top-right. Defaults to "9:41 AM"
   */
  timestamp?: string;
  /**
   * Custom left icon. Defaults to tornado with green leaves SVG.
   */
  icon?: React.ReactNode;
}

const TornadoIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Dark Funnel body */}
    <path
      d="M14 18C14 18 22 14 28 14C34 14 42 18 42 18C42 18 38 27 32 32C28 35 27 39 26 46C25.5 49 24 50 23 50C22 50 22 46 24 40C25.5 36 27 32 24 27C20 21 14 18 14 18Z"
      fill="#444444"
    />
    {/* Top funnel rim */}
    <ellipse cx="28" cy="16" rx="15" ry="4" fill="#000000" />
    
    {/* Swirl rings */}
    <path d="M12 21C17 24.5 39 24.5 44 21" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M14 21.5C18 24.5 38 24.5 42 21.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    
    <path d="M16 30C20 33 36 33 40 30" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M17.5 30.5C21 33 35 33 38.5 30.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />

    <path d="M20 39C23 41.5 33 41.5 36 39" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M21 39.5C23.5 41.5 32.5 41.5 35 39.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

    {/* Floating Green Leaves */}
    <path d="M44 23C46.5 22 48.5 24.5 47.5 27C45 27 43 24.5 44 23Z" fill="#7cb342" />
    <path d="M10 34C8 33 6 35.5 7 37.5C9.5 37.5 11 35 10 34Z" fill="#7cb342" />
    <path d="M13 43C11.5 42 10 44 11 45.5C13 45.5 14.5 43.5 13 43Z" fill="#7cb342" />
    <path d="M41 33C42.5 32 44 33.5 43.5 35C42 35 40.5 33.5 41 33Z" fill="#7cb342" />
  </svg>
);

export const AlertBanner = forwardRef<HTMLDivElement, AlertBannerProps>(
  (
    {
      className = '',
      title = 'Tornado Warning 🌪️',
      description = 'Severe tornado detected nearby.\nTake shelter immediately!',
      timestamp = '9:41 AM',
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={`pulse-alert-banner ${className}`.trim()} {...props}>
        <div className="pulse-alert-banner__icon">
          {icon ?? <TornadoIcon />}
        </div>
        <div className="pulse-alert-banner__content">
          <div className="pulse-alert-banner__header">
            <h4 className="pulse-alert-banner__title">{title}</h4>
            {timestamp && <span className="pulse-alert-banner__timestamp">{timestamp}</span>}
          </div>
          {description && <p className="pulse-alert-banner__description">{description}</p>}
        </div>
      </div>
    );
  }
);

AlertBanner.displayName = 'AlertBanner';
