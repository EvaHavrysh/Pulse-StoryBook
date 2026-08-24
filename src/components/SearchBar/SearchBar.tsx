import React, { forwardRef, useState } from 'react';
import './SearchBar.css';

export type SearchBarState = 'default' | 'active';

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  /**
   * Explicit visual state variant: 'default' (Darker gray border) | 'active' (Lighter gray border).
   */
  variantState?: SearchBarState;
  /**
   * Controlled input value.
   */
  value?: string;
  /**
   * Default value for uncontrolled usage.
   */
  defaultValue?: string;
  /**
   * Placeholder text. Defaults to "Search".
   */
  placeholder?: string;
  /**
   * Callback fired when input value changes.
   */
  onChange?: (value: string) => void;
}

const MagnifyingGlassIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
);

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className = '',
      variantState: explicitVariant,
      value: controlledValue,
      defaultValue = '',
      placeholder = 'Search',
      onChange,
      onFocus,
      onBlur,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string>(defaultValue);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

    const effectiveVariant: SearchBarState =
      explicitVariant !== undefined
        ? explicitVariant
        : isFocused || currentValue.length > 0
        ? 'active'
        : 'default';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (controlledValue === undefined) {
        setInternalValue(val);
      }
      onChange?.(val);
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
        className={`pulse-search-bar pulse-search-bar--${effectiveVariant} ${
          disabled ? 'pulse-search-bar--disabled' : ''
        } ${className}`.trim()}
      >
        <span className="pulse-search-bar__icon">
          <MagnifyingGlassIcon />
        </span>
        <input
          ref={ref}
          type="text"
          disabled={disabled}
          value={currentValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="pulse-search-bar__input"
          {...props}
        />
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
