import styled from "styled-components";

const AboutMain = styled.div`
  width: 100%;
  display: flex;
  padding: 2em;
  background: linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 5em;
`;
const TitleItem = styled.h1`
  width: 403px;
  height: 176px;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 88px;
  margin-bottom: 0.5em;
`;

const DescItem = styled.p`
  width: 448px;
  height: 48px;
  margin-bottom: 0.5em;
`;

const PriceItem = styled.span`
  width: 141px;
  height: 32px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 2em;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 44px;
  background-color: #d90429;
  color: white;
`;

const AboutRight = styled.div`
  display: flex;
  width: 50%;
`;
const Ellipse = styled.div`
  width: 464px;
  height: 464px;
  background: linear-gradient(319.66deg, #f3e7e9 15.18%, #efeef5 71.58%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AboutBottom = styled.div`
  width: 643.02px;
  height: 128px;
  background: #ffffff;
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.08);
  margin-top: -5em;
  margin-left: 15.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  AboutMain,
  AboutLeft,
  TitleItem,
  DescItem,
  PriceItem,
  Button,
  AboutRight,
  Ellipse,
  AboutBottom,
};
