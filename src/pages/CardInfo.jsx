import React from "react";
import { cards } from "../data";
import { useParams } from "react-router-dom";

const CardInfo = () => {
  const { imageName } = useParams();

  return (
    <section>
      {cards.imageName === imageName && cards.map((card) => (
        <div className="header__container" key={card.imageName}>
          <div className="header__text card__container--border">
            <h1>{card.cardName}</h1>
            <h2>{card.cardSets}</h2>
          </div>
          <div className="header__img--container">
            <figure className="card__img--wrapper">
              <img
                src={card.imageUrl}
                alt="card image"
                className="card__img"
              />
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
              <b>Type:</b> {card.types}
            </h3>
            <h3>
              <b>Ability:</b> {card.effects}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardInfo;
