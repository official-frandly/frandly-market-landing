import React from "react";
import { Box, Container, Flex, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import styled from "styled-components";
import callImage from "assets/call-image.png";
import { setting } from "lib/config";
const CallToAction = () => {
  return (
    <Styled.CallToAction>
      <Box as="section" sx={styles.callToAction}>
        <Container>
          <Flex sx={styles.flex}>
            <Box sx={styles.content}>
              <Text as="span">마켓 입점</Text>
              <Heading as="h3">
                {setting.brandName_ko} 마켓 입점을 망설이고 계시나요?
              </Heading>
              <Text as="p">
                Get your tests that supplies best design system guidelines ever.
                Get your tests delivered at let home collect sample. 3개월 무료
                체험중이니 지금 신청해보세요.
              </Text>

              <a
                href={setting.importPointAddress}
                className="partnership__btn"
                target="_blank"
              >
                입점 신청하기
              </a>
            </Box>
            <Box sx={styles.images}>
              <Image src={callImage} alt="call image" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Styled.CallToAction>
  );
};

export default CallToAction;
const Styled = {
  CallToAction: styled.div`
    padding-top: 41px;

    .partnership__btn {
      display: inline-block;
      vertical-align: middle;
      background: #02073e;
      color: #fff;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 700;
      padding: 6.5px 19px;
      letter-spacing: -0.16px;
      transition: all 500ms ease;
      &:hover {
        opacity: 0.8;
      }
    }
  `,
};
const styles = {
  callToAction: {
    mt: ["-90px", null, null, null, "0"],
    py: ["50px", null, null, null, "110px", null, "140px"],
  },
  flex: {
    flexWrap: "wrap",
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 38.5%"],
    textAlign: ["center", null, null, null, "left"],
    pt: ["80px", null, null, null, "0"],
    maxWidth: ["100%", null, null, "80%", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["30px", null, null, null, "0"],
    span: {
      fontSize: "18px",
      fontWeight: 700,
      color: "primary",
      display: "block",
      lineHeight: 1,
    },
    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: "20px",
      mb: "30px",
    },
    p: {
      color: "#02073E",
      fontSize: ["16px", null, null, "18px"],
      lineHeight: ["2", null, null, 2.33],
      mb: "30px",
    },
  },
  button: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  images: {
    flex: ["0 0 100%", null, null, null, "0 0 61.5%"],
  },
};
