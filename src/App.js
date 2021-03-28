import "./App.css";
import React, { useState } from "react";

import SpanElement from "./spanElement";
import SearchBar from "./SearchBar";
import Button from "./button";

const jsonData = require("../src/data/babyNamesData.json");

jsonData.sort((a, b) => {
  if (a.name[0] < b.name[0]) return -1;
  if (a.name[0] > b.name[0]) return 1;
  else return 0;
});

function App() {
  const [arrOfNames, arrOfNamesHandler] = useState(jsonData);
  const [arrOfFavorite, arrOfFavoriteHandler] = useState([]);
  const [girlsBoysEverybody, girlsBoysEverybodyHandler] = useState(3);

  const onlyGirls = (e) => {
    const onlyGirls = jsonData.filter((item) => item.sex === "f");
    arrOfNamesHandler(onlyGirls);
    girlsBoysEverybodyHandler(1);
  };

  const onlyBoys = (e) => {
    const onlyBoys = jsonData.filter((item) => item.sex === "m");
    arrOfNamesHandler(onlyBoys);
    girlsBoysEverybodyHandler(2);
  };

  const everybody = (e) => {
    arrOfNamesHandler(jsonData);
    girlsBoysEverybodyHandler(3);
  };

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
    let arr = [];
    switch (girlsBoysEverybody) {
      case 1:
        arr = jsonData.filter((item) => item.sex === "f");
        break;
      case 2:
        arr = jsonData.filter((item) => item.sex === "m");
        break;
      case 3:
        arr = [...jsonData];
        break;
    }
    const query = e.target.value;
    const filteredName = arr.filter((item) => {
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
      <SearchBar searchFunction={searchNameFunction} />
      <Button
        className={girlsBoysEverybody === 1 ? "active" : null}
        clickFunction={onlyGirls}
        info="Girls"
      />
      <Button
        className={girlsBoysEverybody === 2 ? "active" : null}
        clickFunction={onlyBoys}
        info="Boys"
      />
      <Button
        className={girlsBoysEverybody === 3 ? "active" : null}
        clickFunction={everybody}
        info="All"
      />
      {favorites}

      <SpanElement
        choosingElement={choosingFavoritesName}
        dataNames={arrOfNames}
      />
    </div>
  );
}

export default App;
