import React, { forwardRef, useEffect, useRef, useState } from 'react';
import './PhoneInput.css';

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export const DEFAULT_COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱' },
  { code: 'UA', name: 'Ukraine', dialCode: '+380', flag: '🇺🇦' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
];

export interface PhoneInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Floating label on top border. Defaults to "Phone number"
   */
  label?: string;
  /**
   * Phone number input value.
   */
  value?: string;
  /**
   * Initial default phone value.
   */
  defaultValue?: string;
  /**
   * Input state variant. Options: 'default' | 'active' | 'success' | 'error'. Defaults to 'default'
   */
  variant?: 'default' | 'active' | 'success' | 'error';
  /**
   * Disabled state toggle. Defaults to false.
   */
  disabled?: boolean;
  /**
   * Initial default country code (e.g. 'US', 'PL', 'UA', 'GB'). Defaults to 'US'.
   */
  defaultCountryCode?: string;
  /**
   * Whether the country dropdown is open by default. Defaults to false.
   */
  defaultOpen?: boolean;
  /**
   * Custom countries list override.
   */
  countries?: Country[];
  /**
   * Callback fired when phone value or country changes.
   */
  onChange?: (value: string, country: Country) => void;
  /**
   * Input container width in pixels or CSS string. Defaults to 320.
   */
  width?: string | number;
}

const ChevronIcon = () => (
  <svg
    className="pulse-phone-input__chevron"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="pulse-phone-input__search-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const PhoneInput = forwardRef<HTMLDivElement, PhoneInputProps>(
  (
    {
      className = '',
      label = 'Phone number',
      value: controlledValue,
      defaultValue = '+1',
      variant = 'default',
      disabled = false,
      defaultCountryCode = 'US',
      defaultOpen = false,
      countries = DEFAULT_COUNTRIES,
      onChange,
      width = 320,
      style,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [selectedCountry, setSelectedCountry] = useState<Country>(() => {
      return countries.find((c) => c.code === defaultCountryCode) ?? countries[0];
    });

    const [phoneNumber, setPhoneNumber] = useState<string>(
      controlledValue ?? defaultValue
    );
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Synchronize controlled value
    useEffect(() => {
      if (controlledValue !== undefined) {
        setPhoneNumber(controlledValue);
      }
    }, [controlledValue]);

    // Handle outside clicks to close dropdown
    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen && !defaultOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      }
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isOpen, defaultOpen]);

    const handleToggleDropdown = () => {
      if (disabled) return;
      setIsOpen((prev) => !prev);
    };

    const handleSelectCountry = (country: Country) => {
      setSelectedCountry(country);
      setIsOpen(false);
      setSearchQuery('');

      // Replace or update prefix in phone number
      const oldDialCode = selectedCountry.dialCode;
      let newPhone = phoneNumber;
      if (newPhone.startsWith(oldDialCode)) {
        newPhone = newPhone.replace(oldDialCode, country.dialCode);
      } else if (!newPhone.startsWith('+')) {
        newPhone = `${country.dialCode} ${newPhone}`.trim();
      } else {
        newPhone = country.dialCode;
      }

      setPhoneNumber(newPhone);
      if (onChange) {
        onChange(newPhone, country);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setPhoneNumber(val);
      if (onChange) {
        onChange(val, selectedCountry);
      }
    };

    const filteredCountries = countries.filter((c) => {
      const q = searchQuery.toLowerCase().trim();
      return (
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q)
      );
    });

    const formattedWidth = typeof width === 'number' ? `${width}px` : width;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={`pulse-phone-input pulse-phone-input--variant-${variant} ${
          isFocused ? 'pulse-phone-input--focused' : ''
        } ${isOpen ? 'pulse-phone-input--open' : ''} ${
          disabled ? 'pulse-phone-input--disabled' : ''
        } ${className}`.trim()}
        style={{ width: formattedWidth, ...style }}
        {...props}
      >
        {/* Main Box */}
        <div className="pulse-phone-input__box">
          {label && <label className="pulse-phone-input__label">{label}</label>}

          {/* Left Flag & Country Selector */}
          <button
            type="button"
            className="pulse-phone-input__country-btn"
            onClick={handleToggleDropdown}
            disabled={disabled}
            aria-label="Select country"
            aria-expanded={isOpen}
          >
            <span className="pulse-phone-input__flag-icon">{selectedCountry.flag}</span>
            <ChevronIcon />
          </button>

          {/* Vertical Divider */}
          <div className="pulse-phone-input__divider" />

          {/* Phone Number Field */}
          <div className="pulse-phone-input__field-wrapper">
            <input
              type="tel"
              className="pulse-phone-input__field"
              value={phoneNumber}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={disabled}
              placeholder="+1 234 567 89 00"
            />
          </div>
        </div>

        {/* Country Dropdown Panel */}
        {isOpen && (
          <div className="pulse-phone-input__dropdown" role="listbox">
            {/* Search Input */}
            <div className="pulse-phone-input__search-wrapper">
              <SearchIcon />
              <input
                type="text"
                className="pulse-phone-input__search-input"
                placeholder="Search for countries"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            {/* Scrollable Country List */}
            <ul className="pulse-phone-input__list">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => (
                  <li
                    key={c.code}
                    className={`pulse-phone-input__list-item ${
                      selectedCountry.code === c.code
                        ? 'pulse-phone-input__list-item--selected'
                        : ''
                    }`.trim()}
                    onClick={() => handleSelectCountry(c)}
                    role="option"
                    aria-selected={selectedCountry.code === c.code}
                  >
                    <span className="pulse-phone-input__flag-icon">{c.flag}</span>
                    <span className="pulse-phone-input__country-name">{c.name}</span>
                    <span className="pulse-phone-input__country-code">{c.dialCode}</span>
                  </li>
                ))
              ) : (
                <div className="pulse-phone-input__no-results">No countries found</div>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
