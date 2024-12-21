import React, { useEffect, useState } from "react";
import CardResult from "../components/ui/CardResult";
import Spinner from "../assets/spinner-solid.svg";
import { cards } from "../data";

const Search = () => {
  const [cardList, setCardList] = useState(cards);
  const [itemCount, setItemCount] = useState(24);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("DEFAULT");

  const sortCards = (sortOption, cardsToSort) => {
    let sortedCards = [...cardsToSort];
    setLoading(true);
    if (sortOption === "ALPHABET_ASCEND") {
      sortedCards.sort((a, b) => a.cardName.localeCompare(b.cardName));
    } else if (sortOption === "ALPHABET_DESCEND") {
      sortedCards.sort((a, b) => b.cardName.localeCompare(a.cardName));
    } else if (sortOption === "CARD_NUMBER") {
      sortedCards.sort((a, b) => a.cardNumber.localeCompare(b.cardNumber));
    }
    setLoading(false);
    return sortedCards;
  };

  const searchCards = () => {
    const searchStr = searchValue.toLowerCase();
    let filteredCards = cards.filter((card) => {
      setLoading(true);
      if (card.cardName.toLowerCase().includes(searchStr)) return true;
      if (Array.isArray(card.cardSets)) {
        if (card.cardSets.some((set) => set.toLowerCase().includes(searchStr)))
          return true;
      } else {
        if (card.cardSets.toLowerCase().includes(searchStr)) return true;
      }
      if (Array.isArray(card.colors)) {
        if (
          card.colors.some((color) => color.toLowerCase().includes(searchStr))
        )
          return true;
      } else {
        if (card.colors.toLowerCase().includes(searchStr)) return true;
      }
      return false;
    });
    let sortedAndFilteredCards = sortCards(sortValue, filteredCards);
    setCardList(sortedAndFilteredCards);
    setLoading(false);
  };

  useEffect(() => {
    searchCards();
  }, [searchValue, sortValue]);

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
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  className="library__search--btn btn__hover-effect"
                  onClick={searchCards}
                >
                  Search
                </button>
              </div>
              <select
                id="filter"
                onChange={(e) => setSortValue(e.target.value)}
                value={sortValue}
              >
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
                  .slice(0, itemCount)
                  .map((card) => <CardResult card={card} key={card.id} />)
              )}
            </div>
            {itemCount !== 300 && (
              <div className="see__more">
                <button
                  className="library__search--btn btn__hover-effect"
                  onClick={() => setItemCount(itemCount + 16)}
                >
                  See More
                </button>
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default Search;
