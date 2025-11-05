import React from 'react';
import { FiMap, FiExternalLink } from 'react-icons/fi';
import './EventLocation.css';

interface EventLocationProps {
  title: string;
  address: string;
  rating?: number;
  reviews?: number;
  // optional custom query for the maps URL (will be encoded)
  mapQuery?: string;
}

const EventLocation: React.FC<EventLocationProps> = ({
  title,
  address,
  rating = 4.5,
  reviews = 1943,
  mapQuery
}) => {
  const query = encodeURIComponent(mapQuery || address || title);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section className="event-location" aria-label="Event location">
      <h2>
        <FiMap /> LOCATION:
      </h2>

      <div className="location-embed">
        <div className="map-frame">
          {/* interactive iframe - users can pan/zoom inside */}
          <iframe
            title={`Map of ${title}`}
            src={embedSrc}
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* small info card overlay similar to reference */}
          <div className="map-info-card" role="region" aria-label="Location information">
            <div className="map-info-top">
              <h3>{title}</h3>
              <button
                className="view-map-btn"
                onClick={() => window.open(mapsUrl, '_blank', 'noopener')}
                aria-label="View larger map on Google Maps"
              >
                <FiExternalLink />
              </button>
            </div>
            <p className="map-address">{address}</p>
            <div className="rating">
              <span className="stars">{"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}</span>
              <span className="rating-number">{rating}</span>
              <span className="reviews">· {reviews.toLocaleString()} reviews</span>
            </div>
            <a className="view-larger-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">View larger map</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventLocation;