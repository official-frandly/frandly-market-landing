import React from "react";
import styled from "styled-components";
import { PageHeader } from "components/common/header";
import { PlainTemplate } from "components/base/template";

function NewsContainer(props) {
  return (
    <Styled.NewsContainer>
      <PlainTemplate header={<PageHeader />}>NewsContainer</PlainTemplate>
    </Styled.NewsContainer>
  );
}
const Styled = {
  NewsContainer: styled.div``,
};

export default NewsContainer;
