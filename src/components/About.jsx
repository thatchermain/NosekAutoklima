import React from "react";
import AboutImg from "../assets/images/maxserwis-nosek.jpg";
import AboutImg2 from "../assets/images/nosek-maxserwis.jpg";
import headerimg from "../assets/images/logo_n2.png";
import "../styles/styles.scss";
import Exp from "../assets/images/exp.png";
import Team from "../assets/images/team.png";
import Happy from "../assets/images/happy.png";
import Services from "../assets/images/services.png";

const About = () => {
  return (
    <section id="about">
      <div className="about__wrapper">
        <div className="about__wrapper--overlay">
          <div className="about__container">
            <h2 className="section__title section__title--dark">
              kim jesteśmy
            </h2>
            <div className="about__content">
              <div className="about__content--inner">
                <p className="about__paragraph">
                  Zajmujemy się montażem i serwisem klimatyzacji samochodowych,
                  a także mechaniką pojazdową oraz elektromechaniką pojazdową.
                  Nasza firma znajduje się w Woli Rzędzińskiej (koło Tarnowa).
                  Mapka oraz dokładny adres można zobaczyć w zakładce Kontakt.
                  <br />
                  <br />
                  Serwis jest czynny od Poniedziałku do Piątku w godzinach 8.00
                  do ok. 17.00. W sezonie letnim pracujemy znacznie dłużej, a
                  także w Soboty.
                  <br />
                </p>
              </div>
              <div className="about__cards">
                <div className="about__card">
                  <img src={Exp} alt="" className="about__card-icon" />
                  <hr />
                  <p className="about__card-description">
                    Ponad 20 lat doświadczenia
                  </p>
                </div>
                {/* <div className="about__card">
                  <img src={Team} alt="" className="about__card-icon" />
                  <hr />
                  <p className="about__card-description">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div> */}
                <div className="about__card">
                  <img src={Services} alt="" className="about__card-icon" />
                  <hr />
                  <p className="about__card-description">
                    Szeroki wachlarz usług
                  </p>
                </div>
                <div className="about__card">
                  <img src={Happy} alt="" className="about__card-icon" />
                  <hr />
                  <p className="about__card-description">
                    Setki zadowolonych klientów
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
