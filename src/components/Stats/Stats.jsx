import React from 'react';
import './Stats.css';

const statsData = [
  {
    number: '20',
    description: 'Skilled<br/>Speakers', // Sử dụng <br/> để xuống dòng
  },
  {
    number: '3',
    description: 'Days Full<br/>of Inspiration',
  },
  {
    number: '15',
    description: 'Unique<br/>Workshops',
  },
  {
    number: '2X',
    description: 'Networking<br/>with Industry',
  },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-item" key={index}>
            <span className="stat-number">{stat.number}</span>
            <p 
              className="stat-description"
              dangerouslySetInnerHTML={{ __html: stat.description }}
            ></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;