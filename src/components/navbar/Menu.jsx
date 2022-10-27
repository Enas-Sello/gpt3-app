import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500}>
          What is GPT?
        </Link>
      </li>
      <li>
        <Link to="AI" smooth={true} duration={500}>
          Open AI
        </Link>
      </li>
      <li>
        <Link to="Studies" smooth={true} duration={500}>
          Case Studies
        </Link>
      </li>
      <li>
        <Link to="Library" smooth={true} duration={500}>
          Library
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
