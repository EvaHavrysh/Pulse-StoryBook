import React, { forwardRef, useState, useEffect } from 'react';
import './SearchInput.css';

export type SearchInputState = 'default' | 'active' | 'disabled';

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Visual state of the search input: 'default' | 'active' | 'disabled'.
   */
  state?: SearchInputState;
  /**
   * Placeholder text displayed in default empty state. Defaults to "Search".
   */
  placeholder?: string;
  /**
   * Current input value.
   */
  value?: string;
  /**
   * Whether to display the simulated blinking typing cursor line.
   */
  showCursor?: boolean;
  /**
   * Disabled state.
   */
  disabled?: boolean;
  /**
   * Change handler callback.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchIcon = () => (
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
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
);

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className = '',
      state: controlledState,
      placeholder = 'Search',
      value: controlledValue,
      showCursor,
      disabled = false,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string>(controlledValue ?? '');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalValue(controlledValue);
      }
    }, [controlledValue]);

    const effectiveState =
      controlledState !== undefined
        ? controlledState
        : isFocused || currentValue.length > 0
        ? 'active'
        : 'default';

    const shouldShowCursor =
      showCursor !== undefined
        ? showCursor
        : effectiveState === 'active' && currentValue.length > 0;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div
        className={`pulse-search-container pulse-search-container--state-${effectiveState} ${className}`.trim()}
      >
        <div className="pulse-search-frame">
          <span className="pulse-search-icon">
            <SearchIcon />
          </span>
          <div className="pulse-search-input-wrapper">
            <input
              ref={ref}
              type="text"
              disabled={disabled || effectiveState === 'disabled'}
              placeholder={placeholder}
              value={currentValue}
              className="pulse-search-control"
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            />
            {shouldShowCursor && <span className="pulse-search-cursor" aria-hidden="true" />}
          </div>
        </div>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
