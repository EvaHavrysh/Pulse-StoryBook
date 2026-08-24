import React, { forwardRef, useState } from 'react';
import './BottomNavigationBar.css';

export type BottomNavTab = 'home' | 'notifications' | 'community' | 'profile';

export interface BottomNavigationBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Controlled active tab ID.
   */
  activeTab?: BottomNavTab;
  /**
   * Initial active tab for uncontrolled interactive state. Defaults to 'home'.
   */
  defaultActiveTab?: BottomNavTab;
  /**
   * Callback fired when tab selection changes.
   */
  onTabChange?: (tab: BottomNavTab) => void;
}

const HomeIcon = ({ active }: { active: boolean }) =>
  active ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9.5L12 2.5L21 9.5V20.5C21 21.3284 20.3284 22 19.5 22H15V14H9V22H4.5C3.67157 22 3 21.3284 3 20.5V9.5Z" fill="currentColor" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );

const BellIcon = ({ active }: { active: boolean }) =>
  active ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5C8.686 2.5 6 5.186 6 8.5C6 15 3 17 3 17H21C21 17 18 15 18 8.5C18 5.186 15.314 2.5 12 2.5Z" fill="currentColor" />
      <path d="M14 18.5C14 19.6046 13.1046 20.5 12 20.5C10.8954 20.5 10 19.6046 10 18.5H14Z" fill="currentColor" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );

const CommunityIcon = ({ active }: { active: boolean }) =>
  active ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="7" r="3.5" fill="currentColor" />
      <circle cx="6" cy="11" r="2.5" fill="currentColor" />
      <circle cx="18" cy="11" r="2.5" fill="currentColor" />
      <path d="M4 19.5C4 16.8 7.5 15.5 12 15.5C16.5 15.5 20 16.8 20 19.5V20.5H4V19.5Z" fill="currentColor" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3" />
      <circle cx="6" cy="11" r="2.5" />
      <circle cx="18" cy="11" r="2.5" />
      <path d="M5 19a7 7 0 0 1 14 0" />
    </svg>
  );

const UserIcon = ({ active }: { active: boolean }) =>
  active ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13.5C7.58172 13.5 4 17.0817 4 21.5H20C20 17.0817 16.4183 13.5 12 13.5Z" fill="currentColor" />
      <circle cx="12" cy="7" r="4.5" fill="currentColor" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

export const BottomNavigationBar = forwardRef<HTMLDivElement, BottomNavigationBarProps>(
  (
    {
      className = '',
      activeTab: controlledTab,
      defaultActiveTab = 'home',
      onTabChange,
      ...props
    },
    ref
  ) => {
    const [internalTab, setInternalTab] = useState<BottomNavTab>(defaultActiveTab);
    const activeTab = controlledTab !== undefined ? controlledTab : internalTab;

    const handleSelect = (tab: BottomNavTab) => {
      if (controlledTab === undefined) {
        setInternalTab(tab);
      }
      onTabChange?.(tab);
    };

    return (
      <nav ref={ref} className={`pulse-bottom-bar ${className}`.trim()} {...props}>
        {/* 1. Home */}
        <button
          type="button"
          aria-label="Home"
          className={`pulse-bottom-bar__item ${
            activeTab === 'home' ? 'pulse-bottom-bar__item--active' : ''
          }`}
          onClick={() => handleSelect('home')}
        >
          <span className="pulse-bottom-bar__icon">
            <HomeIcon active={activeTab === 'home'} />
          </span>
        </button>

        {/* 2. Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className={`pulse-bottom-bar__item ${
            activeTab === 'notifications' ? 'pulse-bottom-bar__item--active' : ''
          }`}
          onClick={() => handleSelect('notifications')}
        >
          <span className="pulse-bottom-bar__icon">
            <BellIcon active={activeTab === 'notifications'} />
          </span>
        </button>

        {/* 3. Community */}
        <button
          type="button"
          aria-label="Community"
          className={`pulse-bottom-bar__item ${
            activeTab === 'community' ? 'pulse-bottom-bar__item--active' : ''
          }`}
          onClick={() => handleSelect('community')}
        >
          <span className="pulse-bottom-bar__icon">
            <CommunityIcon active={activeTab === 'community'} />
          </span>
        </button>

        {/* 4. Profile */}
        <button
          type="button"
          aria-label="Profile"
          className={`pulse-bottom-bar__item ${
            activeTab === 'profile' ? 'pulse-bottom-bar__item--active' : ''
          }`}
          onClick={() => handleSelect('profile')}
        >
          <span className="pulse-bottom-bar__icon">
            <UserIcon active={activeTab === 'profile'} />
          </span>
        </button>
      </nav>
    );
  }
);

BottomNavigationBar.displayName = 'BottomNavigationBar';
