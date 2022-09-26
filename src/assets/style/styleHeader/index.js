import styled from "styled-components";

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
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
`;

export { HeaderMain, HeaderContainer, ItemList, Logo, UserButton };
