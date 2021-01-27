import React, { useState } from "react";
import Comment from "./Components/Comment";
import styled from "styled-components";

function Mypage() {
  const [currentIndex, setCurrentIndex] = useState(4);

  const handleClickCurrent = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  return (
    <WrapMypage>
      <Title>마이페이지</Title>
      <MenuTabs>
        {MENUTAB.map((el, index) => {
          return (
            <MenuList
              key={index}
              index={index}
              clickIndex={currentIndex}
              onClick={() => handleClickCurrent(index)}
            >
              {el.menu}
            </MenuList>
          );
        })}
      </MenuTabs>
      <WrapMenuContent>{CONTENT[currentIndex]}</WrapMenuContent>
    </WrapMypage>
  );
}

export default Mypage;

const WrapMypage = styled.div`
  margin: 0px auto;
  width: 880px;
`;

const Title = styled.p`
  margin: 66px 0px 40px;
  color: rgb(51, 51, 51);
  font-size: 30px;
  font-weight: bold;
`;

const MenuTabs = styled.div`
  margin: 20px 0px 60px;
  height: 43px;
`;

const MenuList = styled.li`
  display: inline-block;
  margin-right: 60px;
  width: auto;
  color: rgb(34, 34, 34);
  font-size: 14px;
  font-weight: ${({ index, clickIndex }) =>
    index === clickIndex ? "bolder" : "normal"};
  text-decoration: none;
`;

const WrapMenuContent = styled.div``;

const MENUTAB = [
  {
    id: 1,
    menu: "신청 내역",
  },
  {
    id: 2,
    menu: "찜한 모임",
  },
  {
    id: 3,
    menu: "포인트",
  },
  {
    id: 4,
    menu: "내 정보",
  },
  {
    id: 5,
    menu: "후기 관리",
  },
  {
    id: 6,
    menu: "문의 내역",
  },
];

const CONTENT = {
  0: <Comment />,
  1: <Comment />,
  2: <Comment />,
  3: <Comment />,
  4: <Comment />,
  5: <Comment />,
  6: <Comment />,
};
