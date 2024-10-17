import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../assets/spinner-solid.svg";

const CardResult = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCards = async (game_id) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.cardtrader.com/api/v2/blueprints?game_id=8`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJjYXJkdHJhZGVyLXByb2R1Y3Rpb24iLCJzdWIiOiJhcHA6MTIzOTkiLCJhdWQiOiJhcHA6MTIzOTkiLCJleHAiOjQ4ODQ3MDYxMzEsImp0aSI6ImEzNDg3YjM3LTAzNGUtNGE3MC1hYWM1LWJhOGY2Yzk0NzEzMSIsImlhdCI6MTcyOTAzMjUzMSwibmFtZSI6IkNhbGVibGVnbzcgQXBwIDIwMjQxMDE1MTg0ODUwIn0.OT1lFZpV2mOVSgWd3TzuhMMSptXBesGcrwnuIMXHTMFJcezprFiQNllbq9U8C23L35SM2nl5NQZ0lFL58V-KydEWPQFhFytSUDyngdMXVRtc-d_GxWzATWThA9OMpI7jDhFuveVeOaYixeE9Qdfrg4fYNFcLfbbkot9Nd_SEiTnYmlQ_tGmGf9N-KsJ1IJnGBKrWjsMCsDU9docHqaqtEH31CXqQPYR8apis3HRLw-NjELC0Xr3f1KY5C5NIyZ5Uce5upPvRrVIeAuzfwwMcU4k5DECS6CQ_2VeTDlNHCX0ExAzLv9kN6Fzsef5pFSsEK7l_uYK2wWtU-EZKWXadTQ",
        },
      }
    );
    console.log(data);
    setCards(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <section id="results">
      <div className="anime__cards">
        {loading ? (
          <div className="result">
            <figure>
              <img
                className="fa-spinner results__loading--spinner"
                src={Spinner}
              />
            </figure>
          </div>
        ) : (
          cards.map((card) => (
            <div className="anime__card" key={card.id}>
              <div className="anime__card--container">
                <figure className="anime__poster--wrapper">
                  <img src={card.image} alt="" className="anime__poster" />
                </figure>
                <h3 className="anime__title">{card.name}</h3>
                <p>
                  <b>Cardset:</b>
                  {card.cardset}
                </p>
                <p>
                  <b>Color:</b>
                  {card.color}
                </p>
                <p>
                  <b>Ability:</b>
                  {card.ability}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CardResult;
