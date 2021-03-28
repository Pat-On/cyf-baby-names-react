import React from "react";

const SearchBar = (props) => {
  return (
    <input onChange={props.searchFunction} type="text" placeholder="Search.." />
  );
};

export default SearchBar;
