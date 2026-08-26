import React, { forwardRef } from 'react';
import './Skeleton.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the skeleton card layout. Defaults to '312px'.
   */
  width?: string | number;
  /**
   * Height of the skeleton card layout. Defaults to '176px'.
   */
  height?: string | number;
  /**
   * Enable shimmer pulse animation. Defaults to true.
   */
  animated?: boolean;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className = '',
      width = '312px',
      height = '176px',
      animated = true,
      style,
      ...props
    },
    ref
  ) => {
    const animatedClass = animated ? 'pulse-skeleton--animated' : '';

    return (
      <div
        ref={ref}
        aria-busy="true"
        aria-label="Loading content"
        className={`pulse-skeleton ${animatedClass} ${className}`.trim()}
        style={{ width, height, ...style }}
        {...props}
      >
        {/* Top Header Title Line Placeholder */}
        <div className="pulse-skeleton__block pulse-skeleton__title" />

        {/* Middle Body/Description Box Placeholder */}
        <div className="pulse-skeleton__block pulse-skeleton__body" />

        {/* Status/Warning Icons Row Placeholder (Square, Triangle, Circle) */}
        <div className="pulse-skeleton__icons">
          <div className="pulse-skeleton__block pulse-skeleton__icon pulse-skeleton__icon--square" />
          <div className="pulse-skeleton__block pulse-skeleton__icon pulse-skeleton__icon--triangle" />
          <div className="pulse-skeleton__block pulse-skeleton__icon pulse-skeleton__icon--circle" />
        </div>

        {/* Bottom Button Pill Placeholder */}
        <div className="pulse-skeleton__block pulse-skeleton__button" />
      </div>
    );
  }
);

Skeleton.displayName = 'Skeleton';
