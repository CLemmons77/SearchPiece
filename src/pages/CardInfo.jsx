import React from "react";
import { cards } from "../data";
import { useNavigate, useParams } from "react-router-dom";

const CardInfo = () => {
  let navigate = useNavigate();
  const { imageName } = useParams();

  console.log(imageName);

  return (
    <section>
      <div className="header__container" key={cards.imageName}>
        <div className="header__text card__container--border">
          <h1>{cards.cardName}</h1>
          <h2>{cards.cardSets}</h2>
          <h2>{cards.cardNumber}</h2>
        </div>
        <div className="header__img--container">
          <figure className="card__img--wrapper">
            <img src={cards.imageUrl} alt="card image" className="card__img" />
          </figure>
        </div>
        <div className="card__info--text">
          <h3>
            <b>Card Type:</b> {cards.cardType}
          </h3>
          <h3>
            <b>Color:</b> {cards.colors}
          </h3>
          <h3>
            <b>Rarity:</b> {cards.rarity}
          </h3>
          <h3>
            <b>Life:</b> {cards.life}
          </h3>
          <h3>
            <b>Attribute:</b> {cards.attributes}
          </h3>
          <h3>
            <b>Cost:</b> {cards.cost}
          </h3>
          <h3>
            <b>Power:</b> {cards.power}
          </h3>
          <h3>
            <b>Counter:</b> {cards.counter}
          </h3>
          <h3>
            <b>Type:</b> {cards.types}
          </h3>
          <h3>
            <b>Ability:</b> {cards.effects}
          </h3>
        </div>
      </div>
        <div className="header__search">
          <a
            className="search__btn btn__hover-effect card__back--btn"
            onClick={() => navigate("/search")}
          >
            Back to Search
          </a>
        </div>
    </section>
  );
};

export default CardInfo;
