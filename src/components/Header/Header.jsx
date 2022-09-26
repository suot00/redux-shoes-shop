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
const Header = () => {
  const linkStyle = {
    color: "black",
  };
  const iconStyle = {
    margin: "10px",
  };
  return (
    <HeaderMain>
      <Logo>
        <img src={LOGO} alt="logo" style={{ cursor: "pointer" }} />
      </Logo>
      <HeaderContainer style={{ display: "flex" }}>
        <ItemList>
          <Link style={linkStyle} to="/">
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
        <ShoppingCartOutlined style={iconStyle} />

        <HeartOutlined style={iconStyle} />

        <UserOutlined style={iconStyle} />
      </UserButton>
    </HeaderMain>
  );
};

export default Header;
