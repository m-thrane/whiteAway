import React from 'react';
import '../App.css';
import logo from '../whiteawayLogo.png';

  const Header = ({ header }) => {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <img src={logo} className="whithawayLogo" alt="logo" />
          </div>
          <div className="cart">
            <button className="cart-button">cart (0)</button>
          </div>
        </div>
      </header>
    )
  };

export default Header
