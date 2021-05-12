import React from "react";
import { Container } from "../../globalStyles";

import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Img,
  ImgWrapper,
  Subtitle,
  Heading,
  NumbImg,
  NumbImgMobile,
} from "./InfoSection.elements";

const InfoSection = ({
  imgStart,
  linkLabel,
  description,
  headline /*primary*/,
  img,
  alt,
  start,
  numbs,
  numb,
}) => {
  return (
    <>
      <InfoSec>
        <Container style={{ padding: "0" }}>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                {/* <TopLine>{topLine}</TopLine> */}
                <Heading>{headline}</Heading>
                <Subtitle> {description} </Subtitle>
                <Link
                  to="/learn-more"
                  style={{
                    fontSize: "16px",
                    lineHeight: "23px",
                    textDecoration: "underline",
                    color: "#01aae4",
                  }}
                >
                  {linkLabel}
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
            <NumbImg src={numbs} alt="" />
            <NumbImgMobile src={numb} alt="" />
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
