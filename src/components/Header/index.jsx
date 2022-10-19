import React from "react";
import LOGO from "../../assets/img/Group 3.png";
import {
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import {
  HeaderMain,
  HeaderContainer,
  Logo,
  UserButton,
  ItemList,
} from "../../assets/style/styleHeader/index.js";
import { Link } from "react-router-dom";
import { Button } from "antd";
const Header = ({ countCartItems }) => {
  const linkStyle = {
    color: "black",
  };
  const iconStyle = {
    margin: "10px",
  };
  return (
    <HeaderMain>
      <Logo>
        <Link to="/">
          <img src={LOGO} alt="logo" style={{ cursor: "pointer" }} />
        </Link>
      </Logo>
      <HeaderContainer style={{ display: "flex" }}>
        <ItemList>
          <Link style={linkStyle} to="/newArrivals">
            New Arrivals
          </Link>
        </ItemList>
        <ItemList>
          <Link style={linkStyle} to="/men">
            Men
          </Link>
        </ItemList>
        <ItemList>
          <Link style={linkStyle} to="/women">
            Women
          </Link>
        </ItemList>
        <ItemList>
          <Link style={linkStyle} to="/kid">
            Kid
          </Link>
        </ItemList>
      </HeaderContainer>
      <UserButton>
        <Link style={linkStyle} to="/shoppingCart">
          <ShoppingCartOutlined style={iconStyle} />
          {countCartItems ? (
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "40px",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: "red",
                padding: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {countCartItems}
            </span>
          ) : (
            ""
          )}
        </Link>

        <HeartOutlined style={iconStyle} />

        <UserOutlined style={iconStyle} />
      </UserButton>
    </HeaderMain>
  );
};

export default Header;
