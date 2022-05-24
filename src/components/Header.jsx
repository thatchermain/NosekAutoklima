import React from "react";
import "../styles/styles.scss";

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__wrapper--overlay">
          <div className="header__container">
            <div className="header__content">
              <h1 className="header__title">
                Nosek <br />
                {/* <span className="header__title header__title--span-red">
                  auto
                </span>
                <span className="header__title header__title--span-blue">
                  klima
                </span> */}
              </h1>
              <h1 className="header__title header__title--color">autoklima</h1>
              <div className="header__title--services">
                <h2 className="header__title header__title--service">
                  Klimatyzacja
                </h2>
                <br />
                <h2 className="header__title header__title--service">
                  Stacja kontroli pojazdów
                </h2>
              </div>
              <button className="header__button">Dowiedz się wiecej</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
