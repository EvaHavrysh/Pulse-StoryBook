import React, { forwardRef, useState, useEffect } from 'react';
import './SearchInput.css';

export type SearchInputState = 'default' | 'active' | 'disabled';

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  state?: SearchInputState;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
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
      <div className={`search-container ${effectiveState} ${className}`.trim()}>
        <span className="search-icon">
          <SearchIcon />
        </span>
        <input
          ref={ref}
          type="text"
          disabled={disabled}
          placeholder={placeholder}
          value={currentValue}
          className="search-input"
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
