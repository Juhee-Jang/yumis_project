import React from "react";
import CategoryIcon from "../../../Image/Nav/categoryIcon.svg";
import styled from "styled-components";

function Category() {
  return (
    <WrapCategory>
      <Icon src={CategoryIcon} alt="categoryIcon" />
      카테고리
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
  border-top: 1px solid rgb(221, 221, 221);
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
