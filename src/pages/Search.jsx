import React from "react";
import CardResult from "../components/ui/CardResult";

const Search = () => {
  return (
    <>
      <section id="search">
        <div class="library__container">
          <div class="library__search">
            <h1 class="library__search--title">
              Explore the library of One Piece cards!
            </h1>
            <div class="library__header">
              <div class="library__search">
                <form action="" onsubmit="onSearchButtonClick(event)">
                  <input
                    class="library__search--input"
                    type="search"
                    placeholder="Search by name, cardset, or color"
                    id="search"
                  />
                  <button class="library__search--btn btn__hover-effect">
                    Search
                  </button>
                </form>
              </div>
              <select id="filter" onchange="filterAnime(event)">
                <option class="filter__option" value="" disabled selected>
                  Sort
                </option>
                <option class="filter__option" value="ALPHABET_ASCEND">
                  Alphabetical: Ascending
                </option>
                <option class="filter__option" value="ALPHABET_DESCEND">
                  Alphabetical: Descending
                </option>
                <option class="filter__option" value="RATING">
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
