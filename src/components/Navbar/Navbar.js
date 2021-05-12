import React, { useState, useEffect } from "react";
import {
  // Nav,
  NavbarContainer,
  NavBrand,
  NavToggle,
  NavLinks,
  MobileNavItem,
  NavMenu,
  NavItemBtn,
  NavBtnLink,
  NavQuote,
} from "./Navbar.elements";
import { FaTimes } from "react-icons/fa";
import { Button } from "../../globalStyles";
import logo from "../../images/logo.png";
import quote from "../../images/Vector-8.png";
import menu from "../../images/Vector-7.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const toggle = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* <Nav> */}
      <NavbarContainer>
        <NavQuote>
          <img src={quote} alt="" />
        </NavQuote>
        <NavBrand>
          <NavLinks to="/">
            <img src={logo} alt="Hopper-Logo-Horizontal_Cora" />
          </NavLinks>
        </NavBrand>
        <NavToggle onClick={toggle}>
          {click ? (
            <FaTimes color="#fff" />
          ) : (
            <img src={menu} alt="nav-mobile" />
          )}
        </NavToggle>
        <NavMenu onClick={toggle} click={click}>
          <MobileNavItem>
            <NavLinks exact to="/" activeClassName="selected">
              COMPANY
            </NavLinks>
          </MobileNavItem>

          <MobileNavItem>
            <NavLinks exact to="/" activeClassName="selected">
              PEOPLE
            </NavLinks>
          </MobileNavItem>

          <MobileNavItem>
            <NavLinks exact to="/" activeClassName="selected">
              |
            </NavLinks>
          </MobileNavItem>

          <MobileNavItem>
            <NavLinks exact to="/" activeClassName="selected">
              SUPPORT
              <i
                className="fas fa-level-up-alt"
                style={{ paddingLeft: "0.6rem" }}
              />
            </NavLinks>
          </MobileNavItem>

          <NavItemBtn>
            {button ? (
              <NavBtnLink exact to="/">
                <Button primary>Send app to your phone</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink exact to="/">
                <Button>Send app to your phone</Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
        </NavMenu>
      </NavbarContainer>
      {/* </Nav> */}
    </>
  );
};

export default Navbar;
