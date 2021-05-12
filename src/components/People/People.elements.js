import styled from "styled-components";

export const PeopleBody = styled.div`
  width: 99%;
  margin: 3rem auto;
  & img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none !important;
    visibility: hidden !important;
  }
`;
export const PeopleMobile = styled.div`
  @media screen and (max-width: 768px) {
    width: 99%;
    margin: 3rem auto;
    & img {
      width: 100%;
    }
  }
  @media screen and (min-width: 769px) {
    display: none !important;
    visibility: hidden !important;
  }
`;
