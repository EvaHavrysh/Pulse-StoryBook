import React, { forwardRef, useEffect, useRef } from 'react';
import L from 'leaflet';
import './InteractiveMapCard.css';

export interface InteractiveMapCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Latitude for map center & marker. Defaults to 58.1072 (Wollaston Lake, Canada).
   */
  latitude?: number;
  /**
   * Longitude for map center & marker. Defaults to -103.1718 (Wollaston Lake, Canada).
   */
  longitude?: number;
  /**
   * Initial map zoom level. Defaults to 15.
   */
  zoom?: number;
  /**
   * Static text label overlay at the bottom badge. Defaults to "You are here".
   */
  label?: string;
  /**
   * Map view style variant. Options: 'hybrid' (satellite + roads/labels), 'satellite', 'street'. Defaults to 'hybrid'.
   */
  mapType?: 'hybrid' | 'satellite' | 'street';
  /**
   * Custom tile layer URL override.
   */
  tileUrl?: string;
  /**
   * Custom attribution text override.
   */
  attribution?: string;
  /**
   * Whether map panning, zooming, and dragging are enabled. Defaults to true.
   */
  interactive?: boolean;
  /**
   * Card width in pixels or CSS string. Defaults to 298.
   */
  width?: string | number;
  /**
   * Card height in pixels or CSS string. Defaults to 329.
   */
  height?: string | number;
}

export const InteractiveMapCard = forwardRef<HTMLDivElement, InteractiveMapCardProps>(
  (
    {
      className = '',
      latitude = 58.1072,
      longitude = -103.1718,
      zoom = 15,
      label = 'You are here',
      mapType = 'hybrid',
      tileUrl,
      attribution,
      interactive = true,
      width = 298,
      height = 329,
      style,
      ...props
    },
    ref
  ) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const markerInstanceRef = useRef<L.Marker | null>(null);

    useEffect(() => {
      if (!mapContainerRef.current) return;

      // Avoid re-initialization if map already exists
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setView([latitude, longitude], zoom);
        if (markerInstanceRef.current) {
          markerInstanceRef.current.setLatLng([latitude, longitude]);
        }
        return;
      }

      // Create Leaflet Map Instance
      const map = L.map(mapContainerRef.current, {
        center: [latitude, longitude],
        zoom,
        zoomControl: false,
        dragging: interactive,
        touchZoom: interactive,
        scrollWheelZoom: interactive,
        doubleClickZoom: interactive,
        boxZoom: interactive,
        keyboard: interactive,
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      // Add Tile Layers based on mapType or tileUrl prop
      if (tileUrl) {
        L.tileLayer(tileUrl, {
          attribution: attribution ?? '&copy; OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);
      } else if (mapType === 'street') {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: attribution ?? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        }).addTo(map);
      } else {
        // Satellite base layer
        const satAttr = attribution ?? '&copy; Esri, Maxar, Earthstar Geographics';
        L.tileLayer(
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          {
            attribution: satAttr,
            maxZoom: 18,
          }
        ).addTo(map);

        // Add Road and Label overlays for 'hybrid'
        if (mapType === 'hybrid') {
          L.tileLayer(
            'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',
            { maxZoom: 18, opacity: 0.85 }
          ).addTo(map);
          L.tileLayer(
            'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
            { maxZoom: 18, opacity: 0.95 }
          ).addTo(map);
        }
      }

      // Create Custom Green Location Dot Marker
      const locationDotIcon = L.divIcon({
        className: 'pulse-map-card__marker',
        html: '<div class="pulse-map-card__location-dot" aria-label="User location marker"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const marker = L.marker([latitude, longitude], {
        icon: locationDotIcon,
        interactive: false,
      }).addTo(map);

      markerInstanceRef.current = marker;

      // Force Leaflet to recalculate container size
      setTimeout(() => {
        map.invalidateSize();
      }, 100);

      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
          markerInstanceRef.current = null;
        }
      };
    }, []);

    // Update center and marker if props change after init
    useEffect(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setView([latitude, longitude], zoom);
        if (markerInstanceRef.current) {
          markerInstanceRef.current.setLatLng([latitude, longitude]);
        }
      }
    }, [latitude, longitude, zoom]);

    // Handle interactive toggle prop changes
    useEffect(() => {
      const map = mapInstanceRef.current;
      if (!map) return;
      if (interactive) {
        map.dragging.enable();
        map.touchZoom.enable();
        map.scrollWheelZoom.enable();
        map.doubleClickZoom.enable();
        map.boxZoom.enable();
        map.keyboard.enable();
      } else {
        map.dragging.disable();
        map.touchZoom.disable();
        map.scrollWheelZoom.disable();
        map.doubleClickZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
      }
    }, [interactive]);

    const formattedWidth = typeof width === 'number' ? `${width}px` : width;
    const formattedHeight = typeof height === 'number' ? `${height}px` : height;

    return (
      <div
        ref={ref}
        className={`pulse-map-card ${className}`.trim()}
        style={{
          width: formattedWidth,
          height: formattedHeight,
          ...style,
        }}
        {...props}
      >
        <div ref={mapContainerRef} className="pulse-map-card__map" />

        {label && (
          <div className="pulse-map-card__overlay" role="status" aria-live="polite">
            <span className="pulse-map-card__badge-text">{label}</span>
          </div>
        )}
      </div>
    );
  }
);

InteractiveMapCard.displayName = 'InteractiveMapCard';
