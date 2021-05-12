import React from "react";
import { companyObjOne, companyObjTwo } from "./Data";
import { InfoSection } from "../../components";
import Graph from "../../Graph/Graph";

const Company = () => {
  return (
    <>
      <InfoSection {...companyObjOne} />
      <Graph />
      <InfoSection {...companyObjTwo} />
    </>
  );
};

export default Company;
