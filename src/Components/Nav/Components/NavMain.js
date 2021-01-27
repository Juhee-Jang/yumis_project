import React from "react";
import cloverLogo from "../../../Image/Nav/cloverLogo.png";
import noticeIcon from "../../../Image/Nav/noticeIcon.svg";
import mypageIcon from "../../../Image/Nav/mypageIcon.svg";
import styled from "styled-components";

function NavMain() {
  return (
    <WrapNavMain>
      <CloverLogo>
        <img src={cloverLogo} alt="클로버 메인로고" />
      </CloverLogo>
      <InfoIcons>
        <NoticeIcon>
          <img src={noticeIcon} alt="알림 아이콘" />
        </NoticeIcon>
        <MypageIcon>
          <img src={mypageIcon} alt="마이페이지 아이콘" />
        </MypageIcon>
      </InfoIcons>
    </WrapNavMain>
  );
}

export default NavMain;

const WrapNavMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 230px;
`;

const CloverLogo = styled.a`
  img {
    height: 34px;
  }
`;

const InfoIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
`;

const NoticeIcon = styled(CloverLogo.withComponent("a"))``;

const MypageIcon = styled(CloverLogo.withComponent("a"))``;
