import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ImgUpload from "./ImgUpload";
import styled from "styled-components";

function Comment() {
  const { register, handleSubmit, errors } = useForm();
  const ImgBoxs = ["ImgBox1", "ImgBox2", "ImgBox3"];
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState([]);

  const onSubmit = (data) => {
    // formData를 생성해줌
    const formData = new FormData();

    formData.append("selectedFiles", selectedFiles);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    console.log(
      `"후기 데이터 -" 제목 : ${data.title} 내용 : ${data.content} 파일 개수 : ${selectedFiles.length} 파일 원본 이름 : [${selectedFiles}]`
    );
  };

  const handleChangeFile = (e) => {
    setSelectedFiles([...selectedFiles, e.target.files[0].name]);

    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    console.log("imageUrl: ", imageUrl);
    setFileUrl([...fileUrl, imageUrl]);
  };

  return (
    <WrapComment>
      <Header>
        <Title>싱글 직장인 와인 파티</Title>
        <SubTitle>20대 후반~30대 초반</SubTitle>
      </Header>
      <Content onSubmit={handleSubmit(onSubmit)}>
        <WrapMeeting>
          <MeetingDate>모임 일자</MeetingDate>
          <Date>2월 10일 토요일 오후 5시</Date>
        </WrapMeeting>
        <Info>
          후기를 작성해주세요.
          <br /> 소정의 포인트가 지급됩니다.
        </Info>
        <WrapReviewTitle>
          <ReviewTitle>제목</ReviewTitle>
          <Input
            type="text"
            autoComplete="off"
            name="title"
            placeholder="제목을 입력하세요."
            ref={register({
              required: true,
            })}
          />
          {errors.title && ""}
        </WrapReviewTitle>
        <WrapReviewContent>
          <ReviewContent>내용</ReviewContent>
          <TextArea
            name="content"
            placeholder="내용을 입력하세요. 30자~500자 등록 가능"
            ref={register({
              required: true,
            })}
          />
          {errors.content && ""}
        </WrapReviewContent>
        <WrapAddImages>
          {ImgBoxs.map((idx) => (
            <ImgUpload
              key={idx}
              uploadId={idx}
              handleChangeFile={handleChangeFile}
              fileUrl={fileUrl}
            />
          ))}
        </WrapAddImages>
        <WrapWriteButton>
          <WriteButton>후기 작성</WriteButton>
        </WrapWriteButton>
        <WrapEditButton>
          <LookButton>후기 보기</LookButton>
          <EditButton>후기 수정</EditButton>
        </WrapEditButton>
        <WrapRegistButton>
          <CancelButton>취소</CancelButton>
          <RegistButton type="submit" value="등록하기" />
        </WrapRegistButton>
      </Content>
    </WrapComment>
  );
}

export default Comment;

const WrapComment = styled.div`
  margin-bottom: 40px;
  border-radius: 10px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  box-shadow: rgba(194, 194, 194, 0.4) 0px 4px 15px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 20px;
  background: rgb(146, 168, 209);
`;

const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const SubTitle = styled.p`
  color: white;
  font-size: 16px;
`;

const Content = styled.form`
  padding: 40px 20px 20px 40px;
`;

const WrapMeeting = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: bolder;
`;

const MeetingDate = styled.span`
  display: inline-block;
  margin-right: 20px;
`;

const Date = styled(MeetingDate.withComponent("span"))``;

const Info = styled.p`
  margin: 5px 0px;
  font-size: 14px;
`;

const WrapReviewTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ReviewTitle = styled.div`
  margin-top: 5px;
  margin-right: 20px;
  width: 50px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 13px 20px;
  width: 100%;
  background: rgb(253, 253, 253);
  border: 1px solid rgb(187, 187, 187);
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 14px;
`;

const WrapReviewContent = styled(WrapReviewTitle.withComponent("div"))``;

const ReviewContent = styled(ReviewTitle.withComponent("div"))`
  padding-bottom: 20px;
`;

const TextArea = styled(Input.withComponent("textarea"))`
  height: 150px;
`;

const WrapAddImages = styled.div`
  margin-top: 20px;
  margin-left: 65px;
  display: flex;
`;

const WrapWriteButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const WriteButton = styled.button`
  margin: 16px 20px 20px 0px;
  padding: 8px 22px;
  min-width: 100px;
  border: none;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bolder;
  background: rgb(249, 167, 167);
`;

const WrapEditButton = styled(WrapWriteButton.withComponent("div"))``;

const LookButton = styled(WriteButton.withComponent("button"))``;

const EditButton = styled(WriteButton.withComponent("button"))`
  background: rgb(139, 174, 239);
`;

const WrapRegistButton = styled(WrapWriteButton.withComponent("div"))``;

const CancelButton = styled(WriteButton.withComponent("button"))`
  padding: 8px 25px;
`;

const RegistButton = styled(WriteButton.withComponent("input"))`
  padding: 8px 25px;
  background: rgb(139, 174, 239);
`;
