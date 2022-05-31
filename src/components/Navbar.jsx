import React from "react";
import "../styles/styles.scss";
// import NavLogo from "../assets/images/logo_n2.png";
import NavLogo from "../assets/images/logo_2.png";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__container">
          <div className="nav__logo">
            <a className="link" href="#home">
              <img src={NavLogo} alt="Logo zakładu" />
            </a>
          </div>
          <div className="nav__links">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="link" href="#about">
                  O nas
                </a>
              </li>
              <li className="nav__item">
                <a className="link" href="#services">
                  Usługi
                </a>
              </li>
              <li className="nav__item">
                <a className="link" href="info">
                  Informacje
                </a>
              </li>
              <li className="nav__item">
                <a className="link" href="contact">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__phone">
            <FiPhoneCall className="nav__phone-icon" />
            <span className="nav__phone-number">012 345 678</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
