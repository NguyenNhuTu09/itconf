import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { EventType } from '../../types/eventTypes';
import './EventInfo.css';

interface EventInfoProps {
  event: EventType;
}

const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
  return (
    <div className="event-info-section">
      {/* Event Title */}
      <h1 className="event-page-title">{event.title}</h1>

      {/* Event Meta Info */}
      <div className="event-page-meta">
        <div className="meta-item">
          <FiCalendar />
          <span>{event.date}</span>
        </div>
        <div className="meta-item">
          <FiMapPin />
          <span>{event.location}</span>
        </div>
      </div>

      {/* Event Description */}
      <div className="event-page-description">
        <h2>EVENT DESCRIPTION</h2>
        <div className="description-content">
          <p>{event.description}</p>
          
          <p>In the realm of design, AI has the ability to assist designers in creating more user-friendly and intuitive interfaces. By analyzing user data and behavior patterns, AI algorithms can identify areas where the user experience can be improved and suggest design changes accordingly.</p>
          
          <p>In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the development process and free up developers to focus on more complex problems.</p>
          
          <h3>How AI can help the UI/UX process</h3>
          <ul>
            <li>AI can help the UI/UX process by automating many of the repetitive tasks involved in design, such as color palette generation, typography selection, and layout optimization.</li>
            <li>AI algorithms can also analyze user behavior data to identify patterns and suggest improvements to the user interface that can help to increase engagement and conversion rates.</li>
            <li>Another way that AI can help designers is by providing them with predictive analytics. This can help designers to stay ahead of the curve and anticipate user needs before they arise.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;