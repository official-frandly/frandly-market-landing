import React from "react";
import { Box, Container, Flex, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import styled from "styled-components";
import callImage from "assets/call-image.png";
import { setting } from "lib/config";
const Partnership = () => {
  return (
    <Styled.Partnership>
      <Box as="section" sx={styles.callToAction}>
        <Container>
          <Flex sx={styles.flex}>
            <Box sx={styles.content}>
              <Text as="span">마켓 제휴</Text>
              <Heading as="h3">
                {setting.partnerNickname} 제휴, 신청하세요.
              </Heading>
              <Text as="p">
                본사에서 직접 사진을 찍어주고, 포토샵과 상품 업로드를 진행
                해드립니다. Get your tests delivered at let home collect sample
                from the victory of the
              </Text>

              <a
                href={setting.importPointAddress}
                target="_blank"
                className="partnership__btn"
              >
                제휴 신청하기
              </a>
            </Box>
            <Box sx={styles.images}>
              <Image src={callImage} alt="call image" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Styled.Partnership>
  );
};

export default Partnership;
const Styled = {
  Partnership: styled.div`
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
