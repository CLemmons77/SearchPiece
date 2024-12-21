import React from "react";
import { cards } from "../data";
import { useNavigate, useParams } from "react-router-dom";

const CardInfo = () => {
  let navigate = useNavigate();
  const { imageName } = useParams();

  const card = cards.find((card) => card.imageName === imageName);

  return (
    <section>
      <div className="header__container" key={card.imageName}>
        <div className="header__text card__container--border">
          <h1>{card.cardName}</h1>
          <h2>{card.cardSets}</h2>
          <h2>{card.cardNumber}</h2>
        </div>
        <div className="header__img--container">
          <figure className="card__img--wrapper">
            <img src={card.imageUrl} alt="card image" className="card__img" />
          </figure>
        </div>
        <div className="card__info--text">
          <h3>
            <b>Card Type:</b> {card.cardType}
          </h3>
          <h3>
            <b>Color:</b> {card.colors}
          </h3>
          <h3>
            <b>Rarity:</b> {card.rarity}
          </h3>
          <h3>
            <b>Life:</b> {card.life}
          </h3>
          <h3>
            <b>Attribute:</b> {card.attributes}
          </h3>
          <h3>
            <b>Cost:</b> {card.cost}
          </h3>
          <h3>
            <b>Power:</b> {card.power}
          </h3>
          <h3>
            <b>Counter:</b> {card.counter}
          </h3>
          <h3>
            <b>Type:</b> {card.types}
          </h3>
          <h3 className="card__info--ability">
            <b>Ability:</b> {card.effects}
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
