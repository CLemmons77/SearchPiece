import React from "react";
import DarkToggle from "../assets/circle-half-stroke-solid.svg";
import Bars from "../assets/bars-solid.svg";
import Close from "../assets/xmark-solid.svg";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  let navigate = useNavigate();

  const openMenu = () => {
    document.body.classList += " menu--open";
  };
  const closeMenu = () => {
    document.body.classList.remove("menu--open");
  };

  const toggleContrast = () => {
    document.body.classList.toggle("dark-theme");
  };

  return (
    <nav>
      <div className="nav__container">
        <h1 className="nav__title">SearchPiece</h1>
        <ul className="nav__links">
          <li className="nav__list--item">
            <a className="nav__link link__hover-effect" onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li className="nav__list--item">
            <a className="nav__btn btn__hover-effect" onClick={() => navigate("/search")}>
              <button className="nav__btn--click">
                Library
              </button>
            </a>
          </li>
          <li className="nav__link" onClick={toggleContrast}>
            <a href="#" className="nav__link--anchor link__hover-effect click">
              <img className="fa-adjust" src={DarkToggle} alt="toggle" />
            </a>
          </li>
        </ul>
        <button class="btn__menu" onClick={openMenu}>
          <img className="fa-bars" src={Bars} alt="menu" />
        </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <img src={Close} alt="close-menu" className="fa-times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/search" className="menu__link" onClick={closeMenu}>
                Library
              </a>
            </li>
            <li className="menu__link" onClick={toggleContrast}>
              <a href="/" class="nav__link--anchor link__hover-effect click">
                <img
                  src={DarkToggle}
                  alt="darkmode-toggle"
                  className="fa-adjust"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
