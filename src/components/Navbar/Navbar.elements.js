import styled from "styled-components";
import { Container } from "../../globalStyles";
import { NavLink, Link } from "react-router-dom";
// import bg from "../../images/header.png";
// import bg1 from "../../images/header-1.png";

// export const Nav = styled.header`
//   background: url(${bg});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   background-attachment: fixed;
//   height: 100vh;

//   @media screen and (max-width: 768px) {
//     background: url(${bg1});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     background-attachment: fixed;
//   }
//   padding-top: 2rem;
// `;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  // ${Container};
`;

export const NavBrand = styled.div`
  & img {
    height: 35px;
    width: 132px;
  }
`;
export const NavToggle = styled.div`
  & img {
    height: 12px;
    width: 18px;
  }
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 64px;
    right: 0;
    cursor: pointer;
    // margin-right: 3rem;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: linear-gradient(180deg, #cec7bd 11.14%, #dbd6cf 100%);
  }
`;
export const MobileNavItem = styled.li`
 height: 80px;
 border-bottom: 2px solid transparent;

 @media screen and (max-width:960px){
   width: 100%;

   &:hover{
    border-bottom: none;
 }
`;
export const NavLinks = styled(NavLink)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem 4rem 2rem 1rem;
    width: 100%;
    display: table;
  }

  &:hover {
    transition: all 0.3s ease;
  }
`;
export const NavQuote = styled.div`
  & img {
    height: 20px;
    width: 20px;
  }
  @media screen and (min-width: 1000px) {
    display: none !important;
    visibility: hidden !important;
  }
`;
export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
