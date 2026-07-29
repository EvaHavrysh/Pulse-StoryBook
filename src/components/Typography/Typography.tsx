import React from 'react';
import './Typography.css';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The text hierarchy variant.
   */
  variant?: 'heading' | 'subheading' | 'impact' | 'body' | 'subtext';
  /**
   * The HTML tag or custom element to render. Default varies by variant.
   */
  as?: React.ElementType;
  /**
   * Custom font weight override.
   */
  fontWeight?: React.CSSProperties['fontWeight'];
  /**
   * Custom text color (CSS color, hex, rgb, or variable).
   */
  color?: string;
}

const defaultElementMap: Record<string, React.ElementType> = {
  heading: 'h3',
  subheading: 'h4',
  impact: 'div',
  body: 'p',
  subtext: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  fontWeight,
  color,
  children,
  className = '',
  style,
  ...props
}) => {
  const Component = as || defaultElementMap[variant] || 'span';

  const inlineStyles: React.CSSProperties = {
    ...style,
  };

  if (fontWeight !== undefined) {
    inlineStyles.fontWeight = fontWeight;
  }

  if (color !== undefined) {
    inlineStyles.color = color;
  }

  return (
    <Component
      className={`pulse-typography pulse-typography--${variant} ${className}`}
      style={inlineStyles}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';
