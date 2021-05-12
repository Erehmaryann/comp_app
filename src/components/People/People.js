import React from "react";
import { PeopleBody, PeopleMobile } from "./People.elements";
import allPersons from "../../images/people1.png";
import mobilePersons from "../../images/people.png";

const People = () => {
  return (
    <>
      <PeopleBody>
        <img src={allPersons} alt="people" />
      </PeopleBody>
      <PeopleMobile>
        <img src={mobilePersons} alt="people" />
      </PeopleMobile>
    </>
  );
};

export default People;
