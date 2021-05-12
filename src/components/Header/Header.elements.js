import styled from "styled-components";
import bg from "../../images/header.png";
import bg1 from "../../images/header-1.png";

export const Nav = styled.header`
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    background: url(${bg1});
    background-size: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  padding-top: 2rem;
`;
export const HeaderBody = styled.div`
  & p {
    font-size: 42px;
    color: #fff;
  }
  width: 650px;
  margin: auto;
  text-align: center;
  padding: 140px 0;

  @media screen and (max-width: 768px) {
    display: none !important;
    visibility: hidden !important;
  }
`;
