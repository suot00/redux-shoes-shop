import React from "react";
import {
  AboutMain,
  AboutLeft,
  AboutRight,
  TitleItem,
  DescItem,
  PriceItem,
  Button,
  Ellipse,
  AboutBottom,
} from "../../assets/style/styleAbout";
import SneakerItem from "../../assets/img/Rectangle 4.png";
import Item1 from "../../assets/img/Adidas-Superstar 1.png";
import Item2 from "../../assets/img/Nike-React-Element 1.png";
import Item3 from "../../assets/img/Vans-Old-Skool 1.png";
import NextIcon from "../../assets/img/next 1.png";
const AboutPage = () => {
  return (
    <>
      <AboutMain>
        <AboutLeft>
          <TitleItem>Puma Running SX</TitleItem>
          <DescItem>
            The shoe that moved mountains for eternity and still does so with a
            swift touch of modernism
          </DescItem>
          <PriceItem>62, 000RWF</PriceItem>
          <Button>Add To Card</Button>
        </AboutLeft>
        <AboutRight>
          <Ellipse>
            <img
              style={{ width: "568px", height: "384px" }}
              src={SneakerItem}
              alt="Sneaker"
            />
          </Ellipse>
        </AboutRight>
      </AboutMain>
      <AboutBottom>
        <img style={{ width: "96px", height: "96px" }} src={Item1} alt="" />
        <img
          style={{
            width: "96px",
            height: "96px",
            marginLeft: "1em",
            marginRight: "1em",
          }}
          src={Item2}
          alt=""
        />
        <img
          style={{ width: "96px", height: "96px", marginRight: "1em" }}
          src={Item3}
          alt=""
        />
        <span style={{ width: "131px", height: "48px" }}>
          Find that sneaker you want
        </span>
        <img src={NextIcon} alt="" />
      </AboutBottom>
    </>
  );
};

export default AboutPage;
