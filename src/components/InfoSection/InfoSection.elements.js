import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 43px 0;
`;
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "reow")};
`;
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  padding-top: 0;
  max-width: 540px;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    padding-left: 1rem;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2.5rem;
  line-height: 1.1;
  color: #000;
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 24px;
  color: #878787;
`;
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const Img = styled.img`
  max-width: 100%;
  padding-right: 0;
  border: 0;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
export const NumbImg = styled.img`
  margin: 3rem auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none !important;
    visibility: hidden !important;
  }
`;
export const NumbImgMobile = styled.img`
  @media screen and (max-width: 768px) {
    margin: 3rem auto;
    width: 87%;
  }
  @media screen and (min-width: 769px) {
    display: none !important;
    visibility: hidden !important;
  }
`;
