import React from "react";
import CompanyInfo from "./Components/CompanyInfo";
import HomePageInfo from "./Components/HomePageInfo";
import styled from "styled-components";

function footer() {
  return (
    <WrapFooter>
      <HomePageInfo />
      <CompanyInfo />
    </WrapFooter>
  );
}

export default footer;

const WrapFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 180px 94px 233px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;
