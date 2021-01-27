import React from "react";
import Category from "./Components/Category/Category";
import styled from "styled-components";

function Nav() {
  return (
    <WrapNav>
      <Category />
    </WrapNav>
  );
}

export default Nav;

const WrapNav = styled.div`
  height: 266px;
  padding-top: 58px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;
