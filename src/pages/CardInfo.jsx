import React, { useEffect, useState } from "react";
import { cards } from "../data";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CardInfo = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [cardData, setCardData] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchCardInfo = async () => {
    const { data } = await axios.get("https://apitcg.com/api/one-piece/cards", {
      headers: {
        Authorization: `x-api-key ${apiKey}`,
      },
    });
    setCardData(data);
  };

  useEffect(() => {
    fetchCardInfo();
  }, [])

  return (
    <section>
      <div className="header__container" key={cardData.code}>
        <div className="header__text card__container--border">
          <h1>{cardData.name}</h1>
          <h2>{cardData.set}</h2>
          <h2>{cardData.cardNumber}</h2>
        </div>
        <div className="header__img--container">
          <figure className="card__img--wrapper">
            <img src={cardData.images} alt="card image" className="card__img" />
          </figure>
        </div>
        <div className="card__info--text">
          <h3>
            <b>Card Type:</b> {cardData.type}
          </h3>
          <h3>
            <b>Color:</b> {cardData.color}
          </h3>
          <h3>
            <b>Rarity:</b> {cardData.rarity}
          </h3>
          <h3>
            <b>Life:</b> {cardData.life}
          </h3>
          <h3>
            <b>Attribute:</b> {cardData.attribute}
          </h3>
          <h3>
            <b>Cost:</b> {cardData.cost}
          </h3>
          <h3>
            <b>Power:</b> {cardData.power}
          </h3>
          <h3>
            <b>Counter:</b> {cardData.counter}
          </h3>
          <h3>
            <b>Type:</b> {cardData.family}
          </h3>
          <h3 className="card__info--ability">
            <b>Ability:</b> {cardData.ability}
          </h3>
          <h3 className="card__info--ability">
            <b>Trigger:</b> {cardData.trigger}
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
