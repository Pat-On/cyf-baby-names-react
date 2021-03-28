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

  const searchNameFunction = (e) => {
    e.preventDefault();
    const query = e.target.value;
    const filteredName = jsonData.filter((item) => {
      return item.name.toUpperCase().includes(query.toUpperCase());
    });
    arrOfNamesHandler(filteredName);
  };

  return (
    <div className="App">
      <SearchBar searchFunction={searchNameFunction} />
      <SpanElement dataNames={arrOfNames} />
    </div>
  );
}

export default App;
