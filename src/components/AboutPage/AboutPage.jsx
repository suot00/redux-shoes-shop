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
} from "../../assets/style/styleAbout";
import SneakerItem from "../../assets/img/Rectangle 4.png";
const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;
