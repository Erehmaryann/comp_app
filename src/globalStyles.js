import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro, sans-serif'
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  color: #fff;
  background: ${({ primary }) => (primary ? "transparent" : "#01AAE4")};
  height: 40px;
  width: 244px;
  border: 1px solid #ffffff;
  font-size: 14px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

export default GlobalStyle;
