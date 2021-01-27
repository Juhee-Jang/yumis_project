import React from "react";
import CompanyInfo from "./Components/CompanyInfo";
import HomePageInfo from "./Components/HomePageInfo";
import styled from "styled-components";

function footer() {
  return (
    <WrapFooter>
      <CompanyInfo />
      <HomePageInfo />
    </WrapFooter>
  );
}

export default footer;

const WrapFooter = styled.div`
  display: flex;
  padding: 40px 180px 94px 233px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;
