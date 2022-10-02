import React from "react";
import LOGO from "../../assets/img/Group 3.png";
import { FooterContainer } from "../../assets/style/styleFooter/index.js";
const Footer = () => {
  return (
    <FooterContainer>
      <img
        style={{ width: "96px", height: "36px", marginBottom: "2em" }}
        src={LOGO}
      />
      <h4
        style={{
          fontSize: "16px",
          width: "576px",
          height: "72px",
          marginBottom: "4em",
          lineHeight: "24px",
        }}
      >
        We don’t just sell shoes, we sell memories and collectibles. We collect
        the best in the best with an attention to all little details. we know
        that shoes speaks louder than words that’s why we’ve mastered the
        science of good sneakers.
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "2em",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Don’t missout on once-in-a-while-deals:</p>
          <img src={require("../../assets/img/Group 23.png")} />
          <img
            style={{ margin: "0 1em 0 1em" }}
            src={require("../../assets/img/Group 24.png")}
          />
          <img src={require("../../assets/img/Group 25.png")} />
        </div>
        <p style={{ margin: "0 1em 0 1em" }}>Support line: +250 788 467 808</p>
        <p>Copyright 2021 © Sneaker City ltd</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
