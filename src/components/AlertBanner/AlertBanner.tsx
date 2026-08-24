import React, { forwardRef } from 'react';
import './AlertBanner.css';

export interface AlertBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Main title text. Defaults to "Tornado Warning 🌪️"
   */
  title?: string;
  /**
   * Body / description subtext. Defaults to "Severe tornado detected nearby. Take shelter immediately!"
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
    width="44"
    height="44"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Dark Funnel body */}
    <path
      d="M10 14C10 14 18 10 24 10C30 10 38 14 38 14C38 14 34 22 28 26C24 28.5 24 32 23 38C22.5 41 21 42 20 42C19 42 19 38 21 33C22.5 29.5 24 26 21 22C17 17 10 14 10 14Z"
      fill="#2d2d2d"
    />
    {/* Top funnel disk */}
    <ellipse cx="24" cy="12" rx="14" ry="3.5" fill="#111111" />
    {/* Horizontal white swirl rings */}
    <path d="M8 16C12 19.5 36 19.5 40 16" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M12 24C16 27 32 27 36 24" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M16 32C19 34.5 29 34.5 32 32" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
    {/* Flying green leaves */}
    <path d="M39 19C41 18 43 20 42 22C40 22 38 20 39 19Z" fill="#68d391" />
    <path d="M7 29C5 28 3 30 4 32C6 32 8 30 7 29Z" fill="#68d391" />
    <path d="M10 38C12 37 14 39 13 41C11 41 9 39 10 38Z" fill="#68d391" />
  </svg>
);

export const AlertBanner = forwardRef<HTMLDivElement, AlertBannerProps>(
  (
    {
      className = '',
      title = 'Tornado Warning 🌪️',
      description = 'Severe tornado detected nearby. Take shelter immediately!',
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
