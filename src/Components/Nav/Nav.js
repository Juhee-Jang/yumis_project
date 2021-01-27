import React from "react";
import NavMain from "./Components/NavMain";
import Category from "./Components/Category";
import styled from "styled-components";

function Nav() {
  return (
    <WrapNav>
      <NavMain />
      <Category />
    </WrapNav>
  );
}

export default Nav;

const WrapNav = styled.div`
  padding-top: 58px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;
