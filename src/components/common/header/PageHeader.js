import React from "react";
import { Link } from "components/base/link";
import styled from "styled-components";

function PageHeader(props) {
  return (
    <Styled.PageHeader>
      <span className="nav__label">
        <Link path="/" ml={2} label="홈" classnames="nav__label" />
      </span>
      <span className="nav__label">
        <Link path="/news" ml={2} label="뉴스" />
      </span>
      <span className="nav__label">
        <Link path="/education" ml={2} label="교육자료" />
      </span>
      <span className="nav__label">
        <a href="" target="_blank" className="nav__label_an">
          입점 신청하기
        </a>
      </span>
    </Styled.PageHeader>
  );
}
const Styled = {
  PageHeader: styled.header`
    background: #e9e9e9;
    padding: 10px;
    .nav__label {
      cursor: pointer;

      &:hover,
      &:hover a {
        color: blue;
      }
    }
    .nav__label_an {
      color: black;
    }
  `,
};

export default PageHeader;
