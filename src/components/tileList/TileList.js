import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.data.map((obj, index) => {
        return <Tile obj={obj} key={index} />;
      })}
    </div>
  );
};
