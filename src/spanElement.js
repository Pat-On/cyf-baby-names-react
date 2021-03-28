import React from "react";

const spanElement = (props) => {
  return (
    <div className="container">
      {props.dataNames.map((name) => {
        const arrOfClasses = ["element"];
        if (name.sex === "f") arrOfClasses.push("girl");
        if (name.sex === "m") arrOfClasses.push("boy");
        return (
          <div
            onClick={(e) => props.choosingElement(e, name.id)}
            className={arrOfClasses.join(" ")}
            key={name.id}
          >
            {name.name}
          </div>
        );
      })}
    </div>
  );
};

export default spanElement;
