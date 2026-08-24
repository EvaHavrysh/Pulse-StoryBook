import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react';
import './SearchInput.css';

export type SearchInputState = 'default' | 'active' | 'disabled';

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Visual state of the search input: 'default' | 'active' | 'disabled'.
   */
  state?: SearchInputState;
  /**
   * Placeholder text displayed in default state. Defaults to "Search".
   */
  placeholder?: string;
  /**
   * Current input value.
   */
  value?: string;
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
      disabled = false,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const [internalValue, setInternalValue] = useState<string>(controlledValue ?? '');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalValue(controlledValue);
      }
    }, [controlledValue]);

    // Dynamic state switching: switch to 'active' on focus or when text is present
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

    const handleFrameClick = () => {
      if (!disabled && effectiveState !== 'disabled') {
        inputRef.current?.focus();
      }
    };

    return (
      <div
        className={`pulse-search-container pulse-search-container--state-${effectiveState} ${className}`.trim()}
      >
        <div className="pulse-search-frame" onClick={handleFrameClick}>
          <span className="pulse-search-icon">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
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
        </div>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
