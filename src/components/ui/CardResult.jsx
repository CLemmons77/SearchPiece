import React from "react";


const CardResult = ({ card }) => {

  return (
    <div className="anime__card" key={card.id}>
      <div className="anime__card--container">
        <figure className="anime__poster--wrapper">
          <img src={card.imageUrl} alt="card image" className="anime__poster" />
        </figure>
        <h3 className="anime__title">{card.cardName}</h3>
        <p>
          <b>Cardset:</b> {card.cardSets}
        </p>
        <p>
          <b>Card Type:</b> {card.cardType}
        </p>
        <p>
          <b>Color:</b> {card.colors}
        </p>
        <p>
          <b>Rarity:</b> {card.rarity}
        </p>
        <p>
          <b>Life:</b> {card.life}
        </p>
        <p>
          <b>Cost:</b> {card.cost}
        </p>
        <p>
          <b>Power:</b> {card.power}
        </p>
        <p>
          <b>Type:</b> {card.types}
        </p>
        <p>
          <b>Ability:</b> {card.effects}
        </p>
      </div>
    </div>
  );
};

export default CardResult;
