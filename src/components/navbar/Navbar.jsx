import React from 'react';
import './navbar.css';
import logo from '../../assets/GPT-3.png';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';
import Menu from './Menu';
const Navbar = () => {
  const [mobmenu, setmobMenu] = useState(false);
  return (
    <div className="nav-links">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="GPT-3" />
        </div>
        <div className="menu">
          <Menu />
        </div>
        <div className="account">
          <button>sign in</button>
          <button>sign up</button>
        </div>
        {/* mobile */}
        <div className="mobile-menu">
          {/* open and close  */}
          {mobmenu ? (
            <RiCloseFill
              color="#fff"
              size={27}
              onClick={() => setmobMenu(false)}
            />
          ) : (
            <RiMenu3Fill
              color="#fff"
              size={27}
              onClick={() => setmobMenu(true)}
            />
          )}
          {mobmenu && (
            <div className="scale-up-center mobile-menu-container">
              <div className="mobile-link">
                <Menu />
                <div className="mobli-account">
                  <button>sign in</button>
                  <button>sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
