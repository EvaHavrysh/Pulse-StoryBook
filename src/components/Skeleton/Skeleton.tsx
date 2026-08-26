import React, { forwardRef } from 'react';
import './Skeleton.css';

export type SkeletonVariant =
  | 'title'
  | 'description'
  | 'iconSquare'
  | 'iconTriangle'
  | 'iconCircle'
  | 'button'
  | 'card';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Skeleton element variant. Defaults to 'title'.
   * Options: 'title' | 'description' | 'iconSquare' | 'iconTriangle' | 'iconCircle' | 'button' | 'card'
   */
  variant?: SkeletonVariant;
  /**
   * Optional custom width.
   */
  width?: string | number;
  /**
   * Optional custom height.
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
      variant = 'title',
      width,
      height,
      animated = true,
      style,
      ...props
    },
    ref
  ) => {
    const animatedClass = animated ? 'pulse-skeleton--animated' : '';

    if (variant === 'card') {
      return (
        <div
          ref={ref}
          aria-busy="true"
          aria-label="Loading content"
          className={`pulse-skeleton-card ${animatedClass} ${className}`.trim()}
          style={{ width: width || '312px', height: height || '176px', ...style }}
          {...props}
        >
          <div className="pulse-skeleton__block pulse-skeleton__title" />
          <div className="pulse-skeleton__block pulse-skeleton__body" />
          <div className="pulse-skeleton__icons">
            <div className="pulse-skeleton__block pulse-skeleton__icon pulse-skeleton__icon--square" />
            <div className="pulse-skeleton__block pulse-skeleton__icon pulse-skeleton__icon--triangle" />
            <div className="pulse-skeleton__block pulse-skeleton__icon pulse-skeleton__icon--circle" />
          </div>
          <div className="pulse-skeleton__block pulse-skeleton__button" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        aria-busy="true"
        aria-label="Loading placeholder"
        className={`pulse-skeleton__block pulse-skeleton--${variant} ${animatedClass} ${className}`.trim()}
        style={{ width, height, ...style }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
