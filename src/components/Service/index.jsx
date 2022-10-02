import React from "react";
import {
  ServiceContainer,
  ServiceTitle,
} from "../../assets/style/styleService/index";
const Service = () => {
  return (
    <ServiceContainer>
      <ServiceTitle>
        <img
          style={{
            width: "56px",
            height: "29px",
            marginTop: "15px",
          }}
          src={require("../../assets/img/streamline-icon-logged-out-1@140x140 1.png")}
        />
        <div>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            Good sneakers
          </h3>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginLeft: "-.5em",
              marginTop: "0.5em",
            }}
          >
            take you good places
          </h3>
          <p style={{ fontSize: "14px", marginTop: "2em", color: "#000000" }}>
            look no further, this is where you find the best pair!
          </p>
        </div>
      </ServiceTitle>
      <img
        style={{ width: "1104px", height: "327px", marginTop: "5em" }}
        src={require("../../assets/img/Group 30.png")}
      />
    </ServiceContainer>
  );
};

export default Service;
