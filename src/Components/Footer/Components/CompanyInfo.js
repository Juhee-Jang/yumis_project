import React from "react";
import styled from "styled-components";

function CompanyInfo() {
  return (
    <WrapCompanyInfo>
      <Event>
        <EventTitle>행사 바로가기</EventTitle>
        <Link href="/">행사 검색하기</Link>
        <Link href="/">마감임박 행사</Link>
        <Link href="/">지역별 행사</Link>
        <Link href="/">요일별 행사</Link>
      </Event>
      <ServiceCenter>
        <ServiceCenterTitle>고객센터</ServiceCenterTitle>
        <Link href="/">공지사항</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">1:1 문의</Link>
        <Link href="/">제휴 문의</Link>
        <Link href="/">개인정보처리방침</Link>
        <Link href="/">이용약관</Link>
      </ServiceCenter>
    </WrapCompanyInfo>
  );
}

export default CompanyInfo;

const WrapCompanyInfo = styled.div`
  display: flex;
  margin-top: 43px;
`;

const Event = styled.div`
  margin-right: 110px;
`;

const EventTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Link = styled.a`
  display: block;
  margin-top: 20px;
  font-size: 16px;
  text-decoration: none;
  color: rgb(34, 34, 34);
`;

const ServiceCenter = styled.div``;

const ServiceCenterTitle = styled(EventTitle.withComponent("p"))``;
