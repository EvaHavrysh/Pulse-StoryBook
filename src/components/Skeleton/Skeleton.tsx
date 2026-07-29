import React from 'react';
import './Skeleton.css';

export interface SkeletonProps {
  /**
   * The custom width of the skeleton (e.g. '100%', '200px', or a number like 40).
   */
  width?: string | number;
  /**
   * The custom height of the skeleton (e.g. '1rem', '20px', or a number like 40).
   */
  height?: string | number;
  /**
   * Whether the skeleton should be shaped as a circle (useful for avatars).
   */
  circle?: boolean;
  /**
   * Additional custom classes to apply to the skeleton.
   */
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  circle = false,
  className = '',
}) => {
  const inlineStyles: React.CSSProperties = {};

  if (width !== undefined) {
    inlineStyles.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height !== undefined) {
    inlineStyles.height = typeof height === 'number' ? `${height}px` : height;
  }
  if (circle) {
    inlineStyles.borderRadius = '50%';
    // For circles, if width or height is provided, match them to keep it square
    if (width !== undefined && height === undefined) {
      inlineStyles.height = typeof width === 'number' ? `${width}px` : width;
    } else if (height !== undefined && width === undefined) {
      inlineStyles.width = typeof height === 'number' ? `${height}px` : height;
    }
  }

  return (
    <div
      className={`pulse-skeleton ${circle ? 'pulse-skeleton--circle' : ''} ${className}`}
      style={inlineStyles}
      aria-hidden="true"
    />
  );
};

Skeleton.displayName = 'Skeleton';
