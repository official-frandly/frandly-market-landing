import React from "react";
import { Link } from "components/base/link";
import styled from "styled-components";

function PageHeader(props) {
  return (
    <Styled.PageHeader>
      <Link path="/" ml={2} label="홈" />
      <Link path="/education" ml={2} label="교육자료" />
      <a href="" target="_blank">
        입점 신청하기
      </a>
    </Styled.PageHeader>
  );
}
const Styled = {
  PageHeader: styled.header`
    background: gray;
    padding: 10px;
  `,
};

export default PageHeader;
