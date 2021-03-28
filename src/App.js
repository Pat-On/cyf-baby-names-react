import "./App.css";
import React, { useState } from "react";

import SpanElement from "./spanElement";
import SearchBar from "./SearchBar";

const jsonData = require("../src/data/babyNamesData.json");

jsonData.sort((a, b) => {
  if (a.name[0] < b.name[0]) return -1;
  if (a.name[0] > b.name[0]) return 1;
  else return 0;
});

function App() {
  const [arrOfNames, arrOfNamesHandler] = useState(jsonData);
  const [arrOfFavorite, arrOfFavoriteHandler] = useState([]);

  const choosingFavoritesName = (e, id) => {
    const query = id;
    const arrayOfNamesCopy = [...arrOfNames];
    const indexPosition = arrayOfNamesCopy.findIndex(
      (item) => item.id === query
    );

    const element = arrayOfNamesCopy.splice(indexPosition, 1);

    const newArrayOfFavorites = [...arrOfFavorite, ...element];

    arrOfNamesHandler(arrayOfNamesCopy);
    arrOfFavoriteHandler(newArrayOfFavorites);
  };

  const removeFavoriteNameToList = (e, id) => {
    const query = id;
    const arrayOfNamesCopy = [...arrOfFavorite];
    const indexPosition = arrayOfNamesCopy.findIndex(
      (item) => item.id === query
    );
    const element = arrayOfNamesCopy.splice(arrayOfNamesCopy[indexPosition], 1);
    const newArrayOfNames = [...arrOfNames, ...element];

    arrOfNamesHandler(newArrayOfNames);
    arrOfFavoriteHandler(arrayOfNamesCopy);
  };

  const searchNameFunction = (e) => {
    e.preventDefault();
    const query = e.target.value;
    const filteredName = jsonData.filter((item) => {
      return item.name.toUpperCase().includes(query.toUpperCase());
    });
    arrOfNamesHandler(filteredName);
  };

  let favorites = null;
  if (arrOfFavorite.length > 0) {
    favorites = (
      <div>
        <span>Favorites: </span>{" "}
        <SpanElement
          choosingElement={removeFavoriteNameToList}
          dataNames={arrOfFavorite}
        />
      </div>
    );
  }
  return (
    <div className="App">
      {favorites}
      <SearchBar searchFunction={searchNameFunction} />
      <SpanElement
        choosingElement={choosingFavoritesName}
        dataNames={arrOfNames}
      />
    </div>
  );
}

export default App;
