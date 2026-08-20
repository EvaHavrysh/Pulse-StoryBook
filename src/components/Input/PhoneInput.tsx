import React, { useState, forwardRef } from 'react';
import './Input.css';

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

const ALL_COUNTRIES: CountryOption[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', dialCode: '+39' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱', dialCode: '+48' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
  { code: 'UA', name: 'Ukraine', flag: '🇺🇦', dialCode: '+380' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
];

const sortCountriesWithUsPinned = (list: CountryOption[]): CountryOption[] => {
  const us = list.find((c) => c.code === 'US');
  const others = list
    .filter((c) => c.code !== 'US')
    .sort((a, b) => a.name.localeCompare(b.name));
  return us ? [us, ...others] : others;
};

export type PhoneInputState = 'default' | 'disabled' | 'active' | 'success' | 'error' | 'dropdownOpen';

export interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  /**
   * Floating label text cutting into top border. Defaults to "Phone number".
   */
  label?: string;
  /**
   * Phone input visual state.
   */
  state?: PhoneInputState;
  /**
   * Input text value.
   */
  value?: string;
  /**
   * Currently selected country object.
   */
  selectedCountry?: CountryOption;
  /**
   * List of available countries. Pinned US + A-Z sorted by default.
   */
  countries?: CountryOption[];
  /**
   * Show typing cursor line.
   */
  showCursor?: boolean;
  /**
   * Disabled state.
   */
  disabled?: boolean;
  /**
   * Country selection callback.
   */
  onCountrySelect?: (country: CountryOption) => void;
  /**
   * Value change callback.
   */
  onChange?: (value: string) => void;
}

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 1l4 4 4-4" />
  </svg>
);

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pulse-phone-search-icon">
    <circle cx="7" cy="7" r="5" />
    <path d="M11 11l3.5 3.5" />
  </svg>
);

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      className = '',
      label = 'Phone number',
      state = 'default',
      value: propValue,
      selectedCountry: propCountry,
      countries = ALL_COUNTRIES,
      showCursor = false,
      disabled = false,
      onCountrySelect,
      onChange,
      ...props
    },
    ref
  ) => {
    const sortedCountryList = sortCountriesWithUsPinned(countries);

    const [selectedCountryState, setSelectedCountryState] = useState<CountryOption>(
      propCountry || sortedCountryList[0]
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(state === 'dropdownOpen');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [userTypedText, setUserTypedText] = useState<string | null>(null);

    const currentCountry = propCountry || selectedCountryState;
    const isBtnDisabled = disabled || state === 'disabled';
    const isOpen = state === 'dropdownOpen' || isDropdownOpen;

    // Derived text value ensures instantaneous reactive updating on country click
    const phoneText =
      userTypedText !== null
        ? userTypedText
        : propValue !== undefined
        ? propValue
        : currentCountry.dialCode;

    const handleCountryClick = () => {
      if (isBtnDisabled) return;
      setIsDropdownOpen((prev) => !prev);
    };

    const handleSelectCountry = (country: CountryOption) => {
      setSelectedCountryState(country);
      setIsDropdownOpen(false);

      // Instantly update text layer to match selected country's dial code!
      const newDialCode = country.dialCode;
      setUserTypedText(newDialCode);

      if (onCountrySelect) {
        onCountrySelect(country);
      }
      if (onChange) {
        onChange(newDialCode);
      }
    };

    const filteredCountries = sortedCountryList.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.dialCode.includes(searchQuery) ||
        c.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div
        className={`pulse-input-container ${
          state !== 'default' && state !== 'dropdownOpen' ? `pulse-input-container--state-${state}` : ''
        } ${isOpen ? 'pulse-input-container--dropdown-open' : ''} ${
          isBtnDisabled ? 'pulse-input-container--disabled' : ''
        } ${className}`.trim()}
      >
        {/* Floating Notch Label */}
        {label && <label className="pulse-input-label">{label}</label>}

        {/* Input Frame */}
        <div className="pulse-input-frame">
          {/* Left Country Selector Button */}
          <button
            type="button"
            disabled={isBtnDisabled}
            className="pulse-phone-country-btn"
            onClick={handleCountryClick}
          >
            <span className="pulse-phone-flag">{currentCountry.flag}</span>
            <span className={`pulse-phone-chevron ${isOpen ? 'pulse-phone-chevron--open' : ''}`}>
              <ChevronDownIcon />
            </span>
          </button>

          {/* Vertical Divider */}
          <div className="pulse-phone-divider" />

          {/* Phone Number Input */}
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, height: '100%' }}>
            <input
              ref={ref}
              disabled={isBtnDisabled}
              value={phoneText}
              className="pulse-input-control"
              onChange={(e) => {
                const newVal = e.target.value;
                setUserTypedText(newVal);
                if (onChange) onChange(newVal);
              }}
              {...props}
            />
            {showCursor && (state === 'active' || state === 'default') && (
              <span className="pulse-input-cursor" aria-hidden="true" />
            )}
          </div>
        </div>

        {/* Country Dropdown Menu (Seamless Attached Card) */}
        {isOpen && (
          <div className="pulse-phone-dropdown">
            {/* Search Bar */}
            <div className="pulse-phone-search-row">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search for countries"
                value={searchQuery}
                className="pulse-phone-search-input"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Pinned US + A-Z Sorted Country List with Custom Scrollbar */}
            <ul className="pulse-phone-list">
              {filteredCountries.map((c) => (
                <li
                  key={c.code}
                  className={`pulse-phone-option ${
                    c.code === currentCountry.code ? 'pulse-phone-option--selected' : ''
                  }`}
                  onClick={() => handleSelectCountry(c)}
                >
                  <span className="pulse-phone-flag">{c.flag}</span>
                  <span>{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
