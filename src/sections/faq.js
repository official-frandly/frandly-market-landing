import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/base/link";
import BlockTitle from "components/common/block-title/block-title";
import Accordion from "components/common/accordion/accordion";
import styled from "styled-components";
const accordionData = [
  {
    isExpanded: false,
    title: "입점 신청을 하려면 어떻게 해야하나요?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: true,
    title:
      "저희 상점도 프랜들리에 올라가는 사진들 처럼 이쁘게 찍고싶은데 어떻게 해야하나요?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "입점할 때 주의 사항이 있나요?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "프랜들리 박스를 구매하고싶은데 어떻게 해야하나요?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "상점 결산은 어디서 하나요?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Styled.FAQ id="faq">
      <Box as="section">
        <Container>
          <BlockTitle title="자주묻는 질문" text="Ask your question and meet" />
          <Flex sx={styles.flex}>
            <Box sx={styles.faqWrapper}>
              <Accordion items={accordionData} />
            </Box>
            <Box sx={styles.content}>
              <Heading as="h3">
                추가적인 질문이 더 남았나요? <br /> 문의하기 버튼을 눌러 질문을
                남겨주세요.
              </Heading>
              <Text as="p">
                If your question is not list here, please feel free to make a
                manual support. 간단한 모달창띄우기
              </Text>
              <Link sx={styles.askButton} path="#">
                문의하기
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Styled.FAQ>
  );
};

export default FAQ;

const Styled = {
  FAQ: styled.div`
    padding-top: 61px;
  `,
};
const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
