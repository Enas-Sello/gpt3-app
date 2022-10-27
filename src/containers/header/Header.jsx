import React from 'react';
import './header.css';
import Illustration from '../../assets/Header-Illustration.png';
import Signup from '../../assets/Signup.png';
const Header = () => {
  return (
    <div id="home" className="head">
      <div className="left">
        <h3>Let’s Build Something amazing with GPT-3 OpenAI</h3>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="form">
          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="Signup">
          <img src={Signup} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="right">
        <img src={Illustration} alt="" />
      </div>
    </div>
  );
};

export default Header;
