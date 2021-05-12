import React from "react";
import { Nav, HeaderBody } from "./Header.elements";
import Navbar from "../../components/Navbar/Navbar";
import counter from "../../images/cta-largeCounter.png";

// import Company from "../../pages/CompanyPage/Company";
// import { Switch, Route } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Nav>
        <Navbar />
        <HeaderBody>
          <p>The world is amazing. We help you see more of it.</p>
          <img
            src={counter}
            alt="cta-large-primary-counter"
            style={{ width: "270px", marginTop: "1.5rem" }}
          />
        </HeaderBody>
      </Nav>
    </>
  );
};

export default Header;
