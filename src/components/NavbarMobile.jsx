import React, { useState } from "react";
import "../styles/styles.scss";
import NavLogo from "../assets/images/JN-logo2.png";
import { GiGearStickPattern } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

import "../styles/styles.scss";
const NavbarMobile = () => {
  const [showMobile, setShowMobile] = useState(false);

  const toggleMobile = () => {
    setShowMobile(!showMobile);
    console.log(showMobile);
  };

  return (
    <nav className="nav-mobile">
      <div className="nav-mobile__wrapper">
        <div className="nav-mobile__container">
          <div className="nav-mobile__logo">
            <a href="#home">
              <img src={NavLogo} alt="Logo zakładu" />
            </a>
          </div>
          {!showMobile ? (
            <AiOutlineMenu
              className="nav-mobile__toggler"
              onClick={toggleMobile}
            />
          ) : (
            <VscChromeClose
              className="nav-mobile__toggler"
              onClick={toggleMobile}
            />
          )}
        </div>

        {/* mobilenav  */}

        <div
          className={
            showMobile
              ? `nav-mobile__list nav-mobile__list--active`
              : `nav-mobile__list nav-mobile__list--hidden`
          }
        >
          <ul className="nav-mobile__list">
            <li
              className="nav-mobile__item"
              onClick={() => setShowMobile(false)}
            >
              <a className="link" href="#about">
                O nas
              </a>
            </li>
            <li
              className="nav-mobile__item"
              onClick={() => setShowMobile(false)}
            >
              <a className="link" href="#services">
                Usługi
              </a>
            </li>
            <li
              className="nav-mobile__item"
              onClick={() => setShowMobile(false)}
            >
              <a className="link" href="#info">
                Informacje
              </a>
            </li>
            <li
              className="nav-mobile__item"
              onClick={() => setShowMobile(false)}
            >
              <a className="link" href="#contact">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        {/* mobilenav  */}
      </div>
    </nav>
  );
};

export default NavbarMobile;
