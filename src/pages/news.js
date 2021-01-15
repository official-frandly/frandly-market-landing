import React from "react";
import Layout from "components/base/template/layout";
import styled from "styled-components";
import { PageHeader } from "components/common/header";

function News(props) {
  return (
    <Styled.News>
      <PageHeader />
      news
    </Styled.News>
  );
}

const Styled = {
  News: styled.div``,
};

export default News;
