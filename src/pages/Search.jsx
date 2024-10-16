import React from "react";
import CardResult from "../components/ui/CardResult";

const Search = () => {
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
                <form action="" onSubmit="onSearchButtonClick(event)">
                  <input
                    class="library__search--input"
                    type="search"
                    placeholder="Search by name, cardset, or color"
                    id="search"
                  />
                  <button className="library__search--btn btn__hover-effect">
                    Search
                  </button>
                </form>
              </div>
              <select id="filter" onChange="filterAnime(event)">
                <option className="filter__option" value="" disabled selected>
                  Sort
                </option>
                <option className="filter__option" value="ALPHABET_ASCEND">
                  Alphabetical: Ascending
                </option>
                <option className="filter__option" value="ALPHABET_DESCEND">
                  Alphabetical: Descending
                </option>
                <option className="filter__option" value="RATING">
                  Rarity
                </option>
              </select>
            </div>
          </div>
          <CardResult />
        </div>
      </section>
    </>
  );
};

export default Search;
