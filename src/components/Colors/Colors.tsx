import React, { forwardRef } from 'react';
import './Colors.css';

export interface ColorSwatchItem {
  shade: string;
  hex: string;
  isDarkText?: boolean;
  standalone?: boolean;
}

export interface ColorPaletteCategory {
  id: 'primary' | 'secondary' | 'danger' | 'warning';
  title: string;
  swatches: ColorSwatchItem[];
}

export const COLOR_PALETTES: ColorPaletteCategory[] = [
  {
    id: 'primary',
    title: 'Primary',
    swatches: [
      { shade: '900', hex: '#29470B' },
      { shade: '800', hex: '#39660C' },
      { shade: '700', hex: '#4C7A0D' },
      { shade: '600', hex: '#56870B' },
      { shade: '500', hex: '#60A800' },
      { shade: '300', hex: '#79BF24' },
      { shade: '100', hex: '#CAE0B8', isDarkText: true },
      { shade: '50', hex: '#E9F2E3', isDarkText: true },
    ],
  },
  {
    id: 'secondary',
    title: 'Secondary',
    swatches: [
      { shade: '900', hex: '#000000' },
      { shade: '800', hex: '#555555' },
      { shade: '700', hex: '#666666' },
      { shade: '600', hex: '#999999' },
      { shade: '500', hex: '#C8C8C8', isDarkText: true },
      { shade: '300', hex: '#DCDCDC', isDarkText: true },
      { shade: '100', hex: '#EEEEEE', isDarkText: true },
      { shade: '50', hex: '#F7F7F7', isDarkText: true, standalone: true },
    ],
  },
  {
    id: 'danger',
    title: 'Danger',
    swatches: [
      { shade: '900', hex: '#7A0000' },
      { shade: '600', hex: '#B30000' },
      { shade: '500', hex: '#FF0000' },
      { shade: '300', hex: '#FF9E88', isDarkText: true },
      { shade: '100', hex: '#E9C4C4', isDarkText: true },
      { shade: '50', hex: '#FFE5E5', isDarkText: true },
    ],
  },
  {
    id: 'warning',
    title: 'Warning',
    swatches: [{ shade: '500', hex: '#D98E00' }],
  },
];

export interface ColorsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Filter palette to display a specific category ('primary' | 'secondary' | 'danger' | 'warning' | 'all'). Defaults to 'primary'.
   */
  category?: 'primary' | 'secondary' | 'danger' | 'warning' | 'all';
}

export const Colors = forwardRef<HTMLDivElement, ColorsProps>(
  ({ className = '', category = 'primary', ...props }, ref) => {

    const activePalettes =
      category === 'all'
        ? COLOR_PALETTES
        : COLOR_PALETTES.filter((p) => p.id === category);

    return (
      <div ref={ref} className={`pulse-colors-container ${className}`.trim()} {...props}>
        {activePalettes.map((palette) => (
          <div key={palette.id} className="pulse-colors-group">
            <h3 className="pulse-colors-group__title">{palette.title}</h3>
            <div className="pulse-colors-bar">
              {palette.swatches.map((swatch, idx) => {
                const textColor = swatch.isDarkText ? '#1a1a1a' : '#ffffff';
                const isSingle = palette.swatches.length === 1;

                return (
                  <div
                    key={`${palette.id}-${swatch.shade}-${idx}`}
                    className={`pulse-colors-swatch ${
                      swatch.standalone ? 'pulse-colors-swatch--standalone' : ''
                    } ${isSingle ? 'pulse-colors-swatch--single' : ''}`.trim()}
                    style={{
                      backgroundColor: swatch.hex,
                      color: textColor,
                    }}
                    title={`${palette.title} ${swatch.shade}: ${swatch.hex}`}
                  >
                    <span className="pulse-colors-swatch__label">{swatch.shade}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Colors.displayName = 'Colors';
