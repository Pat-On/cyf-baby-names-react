import React from "react";

const spanElement = (props) => {
  return (
    <div className="container">
      {props.dataNames.map((name) => {
        return (
          <div className="element" key={name.js}>
            {name.name}
          </div>
        );
      })}
    </div>
  );
};

export default spanElement;
