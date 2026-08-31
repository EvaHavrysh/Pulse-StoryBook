import React, { forwardRef } from 'react';
import './Typography.css';

export interface TypographyItem {
  id: string;
  label: string;
  className: string;
  sampleText: string;
}

export const TYPOGRAPHY_SCALE: TypographyItem[] = [
  {
    id: 'large-heading',
    label: 'LARGE HEADING (40PX)',
    className: 'pulse-typography--large-heading',
    sampleText: 'Used for hero sections, onboarding screens, and large marketing titles.',
  },
  {
    id: 'heading',
    label: 'HEADING (32PX)',
    className: 'pulse-typography--heading',
    sampleText: 'Used for main screen titles and primary headers.',
  },
  {
    id: 'sub-heading',
    label: 'SUB HEADING (18PX)',
    className: 'pulse-typography--sub-heading',
    sampleText: 'Used for section titles and grouping content.',
  },
  {
    id: 'notification',
    label: 'NOTIFICATION (16PX)',
    className: 'pulse-typography--notification',
    sampleText: 'Used for system alerts, success messages, and pop-up banners.',
  },
  {
    id: 'impact',
    label: 'IMPACT (16PX)',
    className: 'pulse-typography--impact',
    sampleText: 'USED FOR HIGHLIGHTS, BADGES, AND IMPORTANT CALLOUTS.',
  },
  {
    id: 'body',
    label: 'BODY (14PX)',
    className: 'pulse-typography--body',
    sampleText: 'Used for standard paragraphs, descriptions, and long-read text blocks.',
  },
  {
    id: 'subtext',
    label: 'SUBTEXT (12PX)',
    className: 'pulse-typography--subtext',
    sampleText: 'Used for captions, dates, hints, and secondary interface data.',
  },
];

export interface TypographyShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional custom typography items list override.
   */
  items?: TypographyItem[];
}

export const Typography = forwardRef<HTMLDivElement, TypographyShowcaseProps>(
  ({ className = '', items = TYPOGRAPHY_SCALE, ...props }, ref) => {
    return (
      <div ref={ref} className={`pulse-typography-showcase ${className}`.trim()} {...props}>
        {items.map((item) => (
          <div key={item.id} className="pulse-typography-item">
            <span className="pulse-typography-item__label">{item.label}</span>
            <p className={`pulse-typography-item__sample ${item.className}`.trim()}>
              {item.sampleText}
            </p>
          </div>
        ))}
      </div>
    );
  }
);

Typography.displayName = 'Typography';
