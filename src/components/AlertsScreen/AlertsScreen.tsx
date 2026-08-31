import React, { forwardRef } from 'react';
import { Card } from '../Card/Card';
import { Skeleton } from '../Skeleton/Skeleton';
import { EmptyState } from '../EmptyState/EmptyState';
import { MainButton } from '../MainButton/MainButton';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';
import { BottomNavigationBar } from '../BottomNavigationBar/BottomNavigationBar';
import type { BottomNavTab } from '../BottomNavigationBar/BottomNavigationBar';
import './AlertsScreen.css';

export interface AlertsScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Screen variant tab: 'loading' | 'active' | 'empty'. Defaults to 'active'.
   */
  view?: 'loading' | 'active' | 'empty';
  /**
   * Screen title at top. Defaults to "Alerts".
   */
  title?: string;
  /**
   * Callback fired when "Show on map" button is clicked on an alert card.
   */
  onShowMap?: (alertTitle: string) => void;
  /**
   * Callback fired when "Go to main page" button is clicked in empty state.
   */
  onNavigateMain?: () => void;
  /**
   * Callback fired when "Check safety tips" button is clicked in empty state.
   */
  onCheckTips?: () => void;
  /**
   * Callback fired when bottom navigation bar tab is clicked.
   */
  onTabChange?: (tab: BottomNavTab) => void;
  /**
   * Container width in pixels or CSS string. Defaults to 375.
   */
  width?: string | number;
  /**
   * Container height in pixels or CSS string. Defaults to 680.
   */
  height?: string | number;
}

export const ACTIVE_ALERTS_DATA = [
  {
    id: 'flood-watch',
    title: 'Flood Watch',
    description:
      'High water levels expected in British Columbia coastal regions. Move valuable items to upper floors.',
  },
  {
    id: 'storm-warning',
    title: 'Storm Warning',
    description:
      'Severe storm approaching your area in 15 minutes. Seek shelter immediately.',
  },
  {
    id: 'power-outage',
    title: 'Power Outage Alert',
    description:
      'Scheduled blackout expected in your area from 2:00 PM to 6:00 PM. Charge your devices and prepare backup power sources.',
  },
];

export const AlertsScreen = forwardRef<HTMLDivElement, AlertsScreenProps>(
  (
    {
      className = '',
      view = 'active',
      title = 'Alerts',
      onShowMap,
      onNavigateMain,
      onCheckTips,
      onTabChange,
      width = 375,
      height = 680,
      style,
      ...props
    },
    ref
  ) => {
    const formattedWidth = typeof width === 'number' ? `${width}px` : width;
    const formattedHeight = typeof height === 'number' ? `${height}px` : height;

    return (
      <div
        ref={ref}
        className={`pulse-alerts-screen ${className}`.trim()}
        style={{ width: formattedWidth, height: formattedHeight, ...style }}
        {...props}
      >
        {/* Header Title */}
        <div className="pulse-alerts-screen__header">
          <h1 className="pulse-alerts-screen__title">{title}</h1>
        </div>

        {/* Screen Content Body */}
        <div className="pulse-alerts-screen__body">
          {/* TAB 1: LOADING STATE */}
          {view === 'loading' && (
            <div className="pulse-alerts-screen__skeleton-list">
              <Skeleton variant="card" width="100%" height="176px" animated />
              <Skeleton variant="card" width="100%" height="176px" animated />
              <Skeleton variant="card" width="100%" height="176px" animated />
            </div>
          )}

          {/* TAB 2: ACTIVE ALERTS (DEFAULT) */}
          {view === 'active' && (
            <div className="pulse-alerts-screen__cards-list">
              {ACTIVE_ALERTS_DATA.map((alert) => (
                <Card
                  key={alert.id}
                  title={alert.title}
                  description={alert.description}
                  buttonLabel="Show on map"
                  onButtonClick={() => onShowMap?.(alert.title)}
                  style={{ width: '100%' }}
                />
              ))}
            </div>
          )}

          {/* TAB 3: EMPTY STATE */}
          {view === 'empty' && (
            <div className="pulse-alerts-screen__empty-wrapper">
              <div className="pulse-alerts-screen__empty-center">
                <EmptyState text="No active alerts." />
              </div>
              <div className="pulse-alerts-screen__empty-actions">
                <MainButton
                  label="Go to main page"
                  onClick={onNavigateMain}
                  className="pulse-alerts-screen__action-btn"
                />
                <SecondaryButton
                  label="Check safety tips"
                  onClick={onCheckTips}
                  className="pulse-alerts-screen__action-btn"
                />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="pulse-alerts-screen__bottom-nav-wrapper">
          <BottomNavigationBar
            activeTab="notifications"
            notificationBadge={view === 'loading' ? 10 : undefined}
            onTabChange={onTabChange}
          />
        </div>
      </div>
    );
  }
);

AlertsScreen.displayName = 'AlertsScreen';
