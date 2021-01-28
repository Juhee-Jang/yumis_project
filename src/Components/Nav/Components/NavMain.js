import React from "react";
import cloverLogo from "../../../Image/Nav/cloverLogo.png";
import noticeIcon from "../../../Image/Nav/noticeIcon.svg";
import mypageIcon from "../../../Image/Nav/mypageIcon.svg";
import styled from "styled-components";

function NavMain() {
  return (
    <WrapNavMain>
      <WrapProfile>
        <SignUp>회원가입</SignUp>
        <SignIn>로그인</SignIn>
      </WrapProfile>
      <WrapIcons>
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
      </WrapIcons>
    </WrapNavMain>
  );
}

export default NavMain;

const WrapNavMain = styled.div``;

const WrapProfile = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 59px;
  padding: 0 121px;

  @media screen and (max-width: 1000px) {
    padding: 0px;
  }
`;

const SignUp = styled.a`
  color: rgb(68, 68, 68);
  font-size: 16px;
  font-weight: bold;
`;

const SignIn = styled(SignUp.withComponent("a"))`
  margin-left: 30px;
`;

const WrapIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 1050px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
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
