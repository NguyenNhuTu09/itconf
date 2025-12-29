import React from 'react';
import { EventType } from '../../types/eventTypes';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './EventSpeakers.css';

interface EventSpeakersProps {
  speakers: EventType['speakers'];
}

const EventSpeakers: React.FC<EventSpeakersProps> = ({ speakers }) => {
  return (
    <div className="event-speakers event-speakers-container">
      <div className="two-col-section speakers-two-col">
        <div className="two-col-heading-right speakers-heading">
          <h2 className="section-title">SPEAKERS</h2>
        </div>

        <div className="two-col-content">
          <div className="speakers-grid">
            {speakers.map((speaker, index) => (
              <article key={index} className="speaker-card">
            <div className="speaker-inner">
              <div
                className="speaker-background"
                style={{ backgroundImage: `url(${speaker.image})` }}
                role="img"
                aria-label={speaker.name}
              />

              <div className="speaker-overlay">
                <div className="speaker-socials">
                  <a href="#" aria-label="twitter"><FaTwitter /></a>
                  <a href="#" aria-label="facebook"><FaFacebookF /></a>
                  <a href="#" aria-label="linkedin"><FaLinkedinIn /></a>
                  <a href="#" aria-label="instagram"><FaInstagram /></a>
                </div>
              </div>
            </div>

            <div className="speaker-meta">
              <p className="speaker-role">{speaker.role}</p>
              <div className="speaker-title-row">
                <h3 className="speaker-name">{speaker.name}</h3>
                <a className="speaker-action" href="#" aria-label={`View ${speaker.name}`}>
                  <FiArrowRight />
                </a>
              </div>
            </div>

            <a className="speaker-link" href="#" aria-label={`View ${speaker.name}`} />
          </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSpeakers;
