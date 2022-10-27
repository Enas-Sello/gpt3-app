import React from 'react';
import './brand.css';
import google from '../../assets/google.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
import slack from '../../assets/slack.png';
const Brand = () => {
  return (
    <div className="brand">
      <a>
        <img src={google} alt="google" />
      </a>
      <a>
        <img src={atlassian} alt="atlassian" />
      </a>
      <a>
        <img src={dropbox} alt="dropbox" />
      </a>
      <a>
        <img src={shopify} alt="shopify" />
      </a>
      <a>
        <img src={slack} alt="slack" />
      </a>
    </div>
  );
};

export default Brand;
