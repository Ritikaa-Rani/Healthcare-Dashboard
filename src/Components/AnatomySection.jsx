import React from 'react';
import bodyImage from '../assets/human-body.png';
import './AnatomySection.css'; 

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <img src={bodyImage} alt="Anatomy" className="anatomy-image" />

      <div className="indicator heart">
        ❤️ Healthy Heart
      </div>

      <div className="indicator leg">
        🦵 Healthy Leg
      </div>
    </div>
  );
};

export default AnatomySection;
