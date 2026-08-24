import React, { forwardRef } from 'react';
import defaultForestFireImg from '../../assets/forest_fire_night.png';
import './EmergencyGuideCard.css';

export interface EmergencyGuideCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title of the guide card. Defaults to "Fire Emergency Guide"
   */
  title?: string;
  /**
   * Body copy for emergency instructions. Defaults to "Drop to the floor, cover your nose with a damp cloth, and follow the nearest exit signs immediately."
   */
  bodyText?: string;
  /**
   * Header photo source. Defaults to the nighttime forest fire blaze image.
   */
  imageSrc?: string;
  /**
   * Alt text for header photo.
   */
  imageAlt?: string;
}

export const EmergencyGuideCard = forwardRef<HTMLDivElement, EmergencyGuideCardProps>(
  (
    {
      className = '',
      title = 'Fire Emergency Guide',
      bodyText = 'Drop to the floor, cover your nose with a damp cloth, and follow the nearest exit signs immediately.',
      imageSrc = defaultForestFireImg,
      imageAlt = 'Nighttime forest fire emergency',
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={`pulse-emergency-guide-card ${className}`.trim()} {...props}>
        <div className="pulse-emergency-guide-card__media">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="pulse-emergency-guide-card__body">
          <h3 className="pulse-emergency-guide-card__title">{title}</h3>
          <p className="pulse-emergency-guide-card__text">{bodyText}</p>
        </div>
      </div>
    );
  }
);

EmergencyGuideCard.displayName = 'EmergencyGuideCard';
