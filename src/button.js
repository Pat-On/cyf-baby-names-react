import React from "react";

const button = (props) => {
  return (
    <button className={props.className} onClick={props.clickFunction}>
      {props.info}
    </button>
  );
};

export default button;
