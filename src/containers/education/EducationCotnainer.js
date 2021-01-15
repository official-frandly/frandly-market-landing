import React from "react";
import styled from "styled-components";
import { PageHeader } from "components/common/header";
import { PlainTemplate } from "components/base/template";

function EducationContainer(props) {
  return (
    <Styled.EducationContainer>
      <PlainTemplate header={<PageHeader />}>EducationContainer</PlainTemplate>
    </Styled.EducationContainer>
  );
}
const Styled = {
  EducationContainer: styled.div``,
};

export default EducationContainer;
