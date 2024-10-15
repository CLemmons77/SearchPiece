import React, { useEffect, useState } from "react";
import axios from "axios";

const CardResult = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCards = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://api.cardtrader.com/api/v2/games/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJjYXJkdHJhZGVyLXByb2R1Y3Rpb24iLCJzdWIiOiJhcHA6MTIzOTkiLCJhdWQiOiJhcHA6MTIzOTkiLCJleHAiOjQ4ODQ3MDYxMzEsImp0aSI6ImEzNDg3YjM3LTAzNGUtNGE3MC1hYWM1LWJhOGY2Yzk0NzEzMSIsImlhdCI6MTcyOTAzMjUzMSwibmFtZSI6IkNhbGVibGVnbzcgQXBwIDIwMjQxMDE1MTg0ODUwIn0.OT1lFZpV2mOVSgWd3TzuhMMSptXBesGcrwnuIMXHTMFJcezprFiQNllbq9U8C23L35SM2nl5NQZ0lFL58V-KydEWPQFhFytSUDyngdMXVRtc-d_GxWzATWThA9OMpI7jDhFuveVeOaYixeE9Qdfrg4fYNFcLfbbkot9Nd_SEiTnYmlQ_tGmGf9N-KsJ1IJnGBKrWjsMCsDU9docHqaqtEH31CXqQPYR8apis3HRLw-NjELC0Xr3f1KY5C5NIyZ5Uce5upPvRrVIeAuzfwwMcU4k5DECS6CQ_2VeTDlNHCX0ExAzLv9kN6Fzsef5pFSsEK7l_uYK2wWtU-EZKWXadTQ",
        },
      }
    );
    setCards(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div class="anime__card">
      {
    //   loading ? (
    //     <div class="result">
    //       <img class="fas fa-spinner results__loading--spinner" />
    //     </div>
    //   ) : 
      cards.map((card) => (
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
              <b>Cardset:</b>
              {card.cardset}
            </p>
            <p>
              <b>Power:</b>
              {card.power}
            </p>
            <p>
              <b>Cost:</b>
              {card.cost}
            </p>
            <p>
              <b>Color:</b>
              {card.color}
            </p>
            <p>
              <b>Rarity:</b> <span class="anime__score">{card.rarity}</span>
            </p>
            <p>
              <b>Family:</b> <span class="anime__score">{card.family}</span>
            </p>
            <p>
              <b>Ability:</b>
              {card.ability}
            </p>
          </div>
        ))
      }
    </div>
  );
};

export default CardResult;
