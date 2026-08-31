import React, { forwardRef, useState } from 'react';
import './ChangeProfilePhoto.css';

export interface ChangeProfilePhotoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title text displayed in top bar. Defaults to "Change profile photo"
   */
  title?: string;
  /**
   * Subtitle text displayed under title. Defaults to "Your gallery"
   */
  subtitle?: string;
  /**
   * Label for the camera tile. Defaults to "Take a photo"
   */
  takePhotoLabel?: string;
  /**
   * List of gallery photo image URLs.
   */
  photos?: string[];
  /**
   * Index of currently selected photo.
   */
  selectedPhotoIndex?: number;
  /**
   * Callback fired when close button (X) is clicked.
   */
  onClose?: () => void;
  /**
   * Callback fired when "Take a photo" camera tile is clicked.
   */
  onTakePhoto?: () => void;
  /**
   * Callback fired when a photo tile is tapped/selected.
   */
  onSelectPhoto?: (photoUrl: string, index: number) => void;
  /**
   * Card width in pixels or CSS string. Defaults to 375.
   */
  width?: string | number;
  /**
   * Card height in pixels or CSS string. Defaults to 680.
   */
  height?: string | number;
}

// Default curated portrait photos matching reference design
export const DEFAULT_GALLERY_PHOTOS: string[] = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
];

const CloseXIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CameraIcon = () => (
  <svg
    className="pulse-photo-picker__camera-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const ChangeProfilePhoto = forwardRef<HTMLDivElement, ChangeProfilePhotoProps>(
  (
    {
      className = '',
      title = 'Change profile photo',
      subtitle = 'Your gallery',
      takePhotoLabel = 'Take a photo',
      photos = DEFAULT_GALLERY_PHOTOS,
      selectedPhotoIndex,
      onClose,
      onTakePhoto,
      onSelectPhoto,
      width = 375,
      height = 680,
      style,
      ...props
    },
    ref
  ) => {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(selectedPhotoIndex);

    const handlePhotoClick = (url: string, index: number) => {
      setSelectedIndex(index);
      if (onSelectPhoto) {
        onSelectPhoto(url, index);
      }
    };

    const formattedWidth = typeof width === 'number' ? `${width}px` : width;
    const formattedHeight = typeof height === 'number' ? `${height}px` : height;

    return (
      <div
        ref={ref}
        className={`pulse-photo-picker ${className}`.trim()}
        style={{
          width: formattedWidth,
          height: formattedHeight,
          ...style,
        }}
        {...props}
      >
        {/* Header Bar */}
        <div className="pulse-photo-picker__header">
          <button
            type="button"
            className="pulse-photo-picker__close-btn"
            onClick={onClose}
            aria-label="Close photo picker"
          >
            <CloseXIcon />
          </button>
          <div className="pulse-photo-picker__title-container">
            <h2 className="pulse-photo-picker__title">{title}</h2>
            <span className="pulse-photo-picker__subtitle">{subtitle}</span>
          </div>
        </div>

        {/* Scrollable Gallery Body */}
        <div className="pulse-photo-picker__body">
          <div className="pulse-photo-picker__grid">
            {/* Top-Left Camera Tile (Spans 2 rows) */}
            <button
              type="button"
              className="pulse-photo-picker__camera-tile"
              onClick={onTakePhoto}
              aria-label={takePhotoLabel}
            >
              <CameraIcon />
              <span className="pulse-photo-picker__camera-label">{takePhotoLabel}</span>
            </button>

            {/* Gallery Photo Tiles */}
            {photos.map((photoUrl, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={`photo-${idx}`}
                  type="button"
                  className={`pulse-photo-picker__photo-tile ${
                    isSelected ? 'pulse-photo-picker__photo-tile--selected' : ''
                  }`.trim()}
                  onClick={() => handlePhotoClick(photoUrl, idx)}
                  aria-label={`Select photo ${idx + 1}`}
                >
                  <img src={photoUrl} alt={`Gallery option ${idx + 1}`} loading="lazy" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

ChangeProfilePhoto.displayName = 'ChangeProfilePhoto';
