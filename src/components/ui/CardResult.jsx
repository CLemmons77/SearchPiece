import React, { useEffect, useState } from "react";
import axios from "axios";

const CardResult = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchCards = async (name) => {
    const { data } = await axios.get(
      `https://apitcg.com/api/one-piece/cards?property=${name}`
    );
    setCards(data);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div class="anime__card">
      {cards.map((card) => (
        <div class="anime__card--container">
          <figure class="anime__poster--wrapper">
            <img
              src="${anime.images.jpg.image_url}"
              alt=""
              class="anime__poster"
            />
          </figure>
          <h3 class="anime__title"></h3>
          <p>
            <b>Cardset:</b>{card.cardset}
          </p>
          <p>
            <b>Power:</b>{card.power}
          </p>
          <p>
            <b>Cost:</b>{card.cost}
          </p>
          <p>
            <b>Color:</b>{card.color}
          </p>
          <p>
            <b>Rarity:</b> <span class="anime__score">{card.rarity}</span>
          </p>
          <p>
            <b>Family:</b> <span class="anime__score">{card.family}</span>
          </p>
          <p>
            <b>Ability:</b>{card.ability}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardResult;
