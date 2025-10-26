// client/src/components/FounderProfile.jsx
import React from 'react';
import '../styles/FounderProfile.css';

const FounderProfile = ({ name, title, description, quote, imageColor }) => {
  return (
    <div className="founder-profile">
      <div className="profile-image-placeholder" style={{ backgroundColor: imageColor }}>
        {/* This div is a placeholder for an actual image */}
      </div>
      <div className="profile-content">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-title">{title}</p>
        <p className="profile-description">{description}</p>
        <blockquote className="profile-quote">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
};

export default FounderProfile;