import React from "react";
import plusIcon from "../../../Image/Mypage/Comment/plus.svg";
import styled from "styled-components";

function ImgUpload({ handleChangeFile, uploadId, fileUrl }) {
  return (
    <WrapImgUpload htmlFor={uploadId}>
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        id={uploadId}
        onChange={handleChangeFile}
      />
      <img src={fileUrl[uploadId]} />
      <PlusIcon src={plusIcon} alt="사진 추가 플러스 버튼" />
      <Text>사진 첨부</Text>
    </WrapImgUpload>
  );
}

export default ImgUpload;

const WrapImgUpload = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 100px;
  height: 100px;
  border: 2px dashed rgb(187, 187, 187);
  box-sizing: border-box;
  border-radius: 5px;

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const PlusIcon = styled.img`
  width: 24px;
  margin-bottom: 8px;
`;

const Text = styled.p``;
