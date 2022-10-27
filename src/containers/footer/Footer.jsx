import React from 'react';
import './footer.css';
import logo from '../../assets/GPT-3.png'
const Footer = () => {
  return (
    <div className="footer section__padding ">
      <h2 className="gradient__text">
        Do you want to step in to the future before others
      </h2>
      <button>Request Early Access</button>
      <div className='containt'>
        <div>
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div>
          <h5>Links</h5>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5>Get in touch</h5>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <footer>© 2021 GPT-3. All rights reserved.</footer>
    </div>
  );
};

export default Footer;
