import React, { useEffect, useState } from "react";
import CardResult from "../components/ui/CardResult";
import Spinner from "../assets/spinner-solid.svg";
import { cards } from "../data";

const Search = () => {
  const [cardList, setCardList] = useState(cards);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchCards = () => {
    filterCards(searchValue);
  };


  const filterCards = (filter) => {
    if (filter === "ALPHABET_ASCEND") {
      setCardList(
        cards.slice().sort((a, b) => a.cardName.localeCompare(b.cardName))
      );
    }
    if (filter === "ALPHABET_DESCEND") {
      setCardList(
        cards.slice().sort((a, b) => b.cardName.localeCompare(a.cardName))
      );
    }
    if (filter === "CARD_NUMBER") {
      setCardList(
        cards.slice().sort((a, b) => b.cardNumber.localeCompare(a.cardNumber))
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    filterCards();
    searchCards()
  }, []);

  return (
    <>
      <section id="search">
        <div className="library__container">
          <div className="library__search">
            <h1 className="library__search--title">
              Explore the library of One Piece cards!
            </h1>
            <div className="library__header">
              <div className="library__search">
                <input
                  class="library__search--input"
                  type="search"
                  placeholder="Search by name, cardset, or color"
                  id="search"
                  value={searchValue}
                  onSubmit={(e) => setSearchValue(e.target.value)}
                  onKeyPress={(event) => {
                    event.key === "Enter" && searchCards();
                  }}
                />
                <button
                  className="library__search--btn btn__hover-effect"
                  onClick={() => searchCards()}
                >
                  Search
                </button>
              </div>
              <select id="filter" onChange={(e) => filterCards(e.target.value)}>
                <option
                  className="filter__option"
                  value="DEFAULT"
                  disabled
                  selected
                >
                  Sort
                </option>
                <option className="filter__option" value="ALPHABET_ASCEND">
                  Alphabetical: Ascending
                </option>
                <option className="filter__option" value="ALPHABET_DESCEND">
                  Alphabetical: Descending
                </option>
                <option className="filter__option" value="CARD_NUMBER">
                  Card Number
                </option>
              </select>
            </div>
          </div>
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
                cardList
                  .slice(0, 15)
                  .map((card) => <CardResult card={card} key={card.id} />)
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Search;
