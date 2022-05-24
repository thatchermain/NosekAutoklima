import React from "react";
import "../styles/styles.scss";
import NavLogo from "../assets/images/JN-logo2.png";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__container">
          <div className="nav__logo">
            <img src={NavLogo} alt="Logo zakładu" />
          </div>
          <div className="nav__links">
            <ul className="nav__list">
              <li className="nav__item">O nas</li>
              <li className="nav__item">Usługi</li>
              <li className="nav__item">Informacje</li>
              <li className="nav__item">Kontakt</li>
            </ul>
          </div>
          <div className="nav__phone">
            <FiPhoneCall className="nav__phone-icon" />
            <span className="nav__phone-number">+48 012 345 678</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
