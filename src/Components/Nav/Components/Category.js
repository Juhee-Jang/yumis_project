import React from "react";
import CategoryIcon from "../../../Image/Nav/categoryIcon.svg";
import styled from "styled-components";

function Category() {
  return (
    <WrapCategory>
      <Icon src={CategoryIcon} alt="categoryIcon" />
      <CategoryText>카테고리</CategoryText>
    </WrapCategory>
  );
}

export default Category;

const WrapCategory = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 230px;
  height: 69px;
  font-size: 20px;
  font-weight: 500;
  border-top: 1px solid ${(props) => props.theme.borderColor};

  @media screen and (max-width: 1000px) {
    padding: 0px;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const CategoryText = styled.div`
  display: inline-block;
  width: 150px;
`;
