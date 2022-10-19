import styled from "styled-components";

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1em;
  background: #ffffff;
  border-bottom: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
`;
const ItemList = styled.div`
  margin: 1em;
`;

const UserButton = styled.div`
  height: 50px;
  padding: 10px 20px;
  position: relative;
`;

export { HeaderMain, HeaderContainer, ItemList, Logo, UserButton };
