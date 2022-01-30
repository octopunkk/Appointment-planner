import React from "react";

export const Tile = (props) => {
  let valuesArr = Object.values(props.obj);
  console.log(valuesArr);
  return (
    <div className="tile-container">
      <p className="tile-title">{valuesArr[0]}</p>
      {valuesArr.map((value, i) => {
        return (
          i !== 0 && (
            <p className="tile" key={i}>
              {value}
            </p>
          )
        );
      })}
    </div>
  );
};
