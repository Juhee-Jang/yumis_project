import React from "react";
import CategoryIcon from "../../../Image/Nav/categoryIcon.svg";
import styled from "styled-components";

function Category() {
  return (
    <WrapCategory>
      <Link>
        <Icon src={CategoryIcon} alt="categoryIcon" />
        카테고리
      </Link>
    </WrapCategory>
  );
}

export default Category;

const WrapCategory = styled.div`
  height: 69px;
  font-size: 20px;
  font-weight: 500;
  border-top: 1px solid rgb(221, 221, 221);
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 20px 230px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
