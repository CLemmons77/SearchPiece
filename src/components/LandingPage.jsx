import React from "react";
import LandingImage from "../assets/landing-page-image.gif";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <section id="landing__page">
      <header>
        <div className="header__container">
          <div className="header__text">
            <h1>
              Looking for a specific <b class="secnd__color">One Piece TCG</b>{" "}
              card?
            </h1>
            <h2>Explore the library of cards!</h2>
            <div className="header__search">
              <a className="search__btn btn__hover-effect" onClick={() => navigate("/search")}>
                Search Our Library
              </a>
            </div>
          </div>
          <div className="header__img--container">
            <figure className="header__img--wrapper">
              <img
                src={LandingImage}
                alt="landing page image"
                className="header__img"
              />
            </figure>
          </div>
        </div>
      </header>
    </section>
  );
};

export default LandingPage;
