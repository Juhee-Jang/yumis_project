import React from "react";
import cloverLogo from "../../../Image/Nav/cloverLogo.png";
import kakaoPlusLogo from "../../../Image/Footer/kakaoPlus.png";
import appStore from "../../../Image/Footer/appstore.svg";
import playStore from "../../../Image/Footer/playstore.svg";
import styled from "styled-components";

function HomePageInfo() {
  return (
    <WrapHomePageInfo>
      <CloverLogo src={cloverLogo} alt="클로버 메인로고" />
      <Text>
        주식회사 홍익인간
        <br />
        대표자 : 이양록
        <br />
        개인정보보호책임자 : 이성진 (연락처 : OOO-OOOO-OOOO)
        <br />
        사업자등록번호 : 778-86-01090
        <br />
        대표번호 : OOO-OOOO-OOOO
        <br />
        카카오톡 플러스친구 바로가기
        <br />
        업무시간 : 평일 OO~OO, 점심시간 OO~OO 제외, 주말/공휴일 제외)
        <br />
        통신판매업등록번호 : 2019-화성동부-0202
        <br />
        주소 : 경기도 화성시 동탄기흥로 590, 동탄센트럴에이스타워 B동 518호
      </Text>
      <KakaoPlus>
        <KakaoPlusLogo src={kakaoPlusLogo} alt="카카오플러스 친구추가" />
        <Link>카카오톡 플러스친구 바로가기</Link>
      </KakaoPlus>
      <DownloadStore>
        <AppStore src={appStore} alt="앱스토어 다운로드" />
        <PlayStore src={playStore} alt="플레이스토어 다운로드" />
      </DownloadStore>
      <CopyrightText>Copyright All Rights Reserver.</CopyrightText>
    </WrapHomePageInfo>
  );
}

export default HomePageInfo;

const WrapHomePageInfo = styled.div``;

const CloverLogo = styled.img`
  width: 180px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 180%;
`;

const KakaoPlus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 18px;
`;

const KakaoPlusLogo = styled.img`
  width: 40px;
`;

const Link = styled.a`
  text-decoration: underline;
`;

const DownloadStore = styled.div`
  margin-top: 20px;
`;

const AppStore = styled.img`
  margin-right: 20px;
`;

const PlayStore = styled(AppStore.withComponent("img"))``;

const CopyrightText = styled.div`
  margin-top: 40px;
`;
