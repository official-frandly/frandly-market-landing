import React from "react";
import { Button, Input, Box, Container, Heading, Text } from "theme-ui";
import styled from "styled-components";

const Contact = () => {
  return (
    <Styled.Contact>
      <Box as="section" sx={styles.subscribe}>
        <Container>
          <Heading as="h3">프랜들리를 구독하세요!</Heading>
          <Text as="p">
            구독하기를 통해 프랜들리의 최신 이벤트와 정보를 받아볼 수 있습니다.
          </Text>

          {/* <Box as="form" sx={styles.form}>
            <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
              Email
            </Box>
            <Input
              placeholder="Enter your email"
              type="email"
              id="subscribeEmail"
              className="contact__email"
              // sx={styles.input}
              value="frandly-support@gmail.com"
              readOnly
            />
          </Box> */}

          <Box as="form" sx={styles.form}>
            <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
              Email
            </Box>
            <Input
              placeholder="Enter your email"
              type="email"
              id="subscribeEmail"
              sx={styles.input}
            />
            <Button type="submit" sx={styles.button}>
              구독하기
            </Button>
          </Box>
        </Container>
      </Box>
    </Styled.Contact>
  );
};

export default Contact;

const Styled = {
  Contact: styled.div`
    .contact__email {
      text-align: center;
      background: rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 0.8);
    }
  `,
};

const styles = {
  subscribe: {
    py: ["80px", null, null, null, "80px", "100px", "140px"],
    backgroundColor: "#020718",
    h3: {
      textAlign: "center",
      fontSize: ["23px", null, null, null, null, "30px", "36px"],
      lineHeight: [1.5, null, null, "1"],
      color: "#fff",
      letterSpacing: ["-0.5px"],
      mb: ["0px", null, null, "15px"],
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
    },
    p: {
      fontSize: ["16px"],
      color: "#fff",
      opacity: ".6",
      letterSpacing: ["-0.5px"],
      textAlign: "center",
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
      mt: ["10px", null, null, "0"],
    },
  },
  form: {
    width: ["100%"],
    maxWidth: ["555px"],
    mx: ["auto"],
    display: ["flex"],
    flexWrap: ["wrap"],
    mt: ["30px", null, null, null, "60px"],
  },
  input: {
    width: ["100%"],
    maxWidth: ["100%", null, "370px", "380px"],
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255, .08)",
    outline: "none",
    color: "rgba(255,255,255, .8)",
    fontSize: "16px",
    pl: ["0px", null, null, "30px"],
    height: ["50px", null, null, "60px"],
    mr: ["0px", null, null, "15px"],
    textAlign: ["center", null, null, "left"],
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["18px"],
    color: "#020718",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["100%", null, null, "auto"],
    mt: ["10px", null, null, "0"],
    mx: ["auto", null, null, "0"],
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "0.8",
    },
  },
};
