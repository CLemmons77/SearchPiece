import React from "react";
import { useNavigate } from "react-router-dom";


const CardResult = ({ cardData }) => {
  let navigate = useNavigate();

  return (
    <div className="anime__card" key={cardData.id} onClick={() => navigate(`/${cardData.id}`)}>
      <div className="anime__card--container">
        <figure className="anime__poster--wrapper">
          <img src={cardData.images} alt="card image" className="anime__poster" />
        </figure>
        <h3 className="anime__title">{cardData.name}</h3>
        <p>
          <b>Cardset:</b> {cardData.set}
        </p>
        <p>
          <b>Card Type:</b> {cardData.type}
        </p>
        <p>
          <b>Color:</b> {cardData.color}
        </p>
        <p>
          <b>Rarity:</b> {cardData.rarity}
        </p>
        <p>
          <b>Life:</b> {cardData.life}
        </p>
        <p>
          <b>Cost:</b> {cardData.cost}
        </p>
        <p>
          <b>Power:</b> {cardData.power}
        </p>
        <p>
          <b>Type:</b> {cardData.family}
        </p>
        <p>
          <b>Ability:</b> {cardData.ability}
        </p>
        <p>
          <b>Trigger:</b> {cardData.trigger}
        </p>
      </div>
    </div>
  );
};

export default CardResult;
