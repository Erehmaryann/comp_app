import React from "react";
import { GraphBody, GraphImg } from "./Graph.elements";
import infoGraph from "../images/infograph.png";

export const Graph = () => {
  return (
    <>
      <GraphBody>
        <GraphImg src={infoGraph} alt="infograph" />
      </GraphBody>
    </>
  );
};
export default Graph;
