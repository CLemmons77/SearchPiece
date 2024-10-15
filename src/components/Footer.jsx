import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  let navigate = useNavigate();

  return (
    <footer id="footer">
        <div class="footer__container">
          <h3 class="footer__title">SearchPiece</h3>
          <ul class="footer__links">
            <li class="footer__list--item">
              <a class="footer__link link__hover-effect" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li class="footer__list--item">
              <a class="footer__link link__hover-effect" onClick={() => navigate("/search")}>
                Library
              </a>
            </li>
          </ul>
          <div class="footer__copyright">Copyright © 2024 Caleb Lemmons</div>
        </div>
      </footer>
  )
}

export default Footer