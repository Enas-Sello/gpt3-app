import React from 'react';
import './possibility.css'
import possibility from '../../assets/Feature-Image.png';
const Possibility = () => {
  return (
    <div className="possibility section__margin section__padding">
      <div className="left">
        <img src={possibility} alt="Possibility" />
      </div>
      <div className="right">
        <a>Request Early Access to Get Started</a>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#">Request Early Access to Get Started</a>
      </div>
    </div>
  );
};

export default Possibility;
