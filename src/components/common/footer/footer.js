/** @jsx jsx */
import React from "react";
import { jsx, Box, Text, Container, Image } from "theme-ui";
import { Link } from "components/base/link";
import Logo from "components/common/logo/logo";
import logoLight from "assets/logo-light.svg";
import styled from "styled-components";
import logoImage from "assets/logo_not_bg.png";

export default function Footer() {
  return (
    <Styled.Footer>
      <Box as="footer" sx={styles.footer}>
        <Container sx={styles.container}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: ["column", null, null, null, null, "row"],
            }}
          >
            {/* <Logo image={logoLight} /> */}
            <Image src={logoImage} className="footer__logo_image" />
            <h3 className="footer__title">Frandly</h3>
            <Text
              as="p"
              sx={{
                color: "#ffffff",
                opacity: "0.7",
                fontSize: "14px",
                mt: ["10px", null, null, null, null, "0"],
              }}
            >
              Copyright by {new Date().getFullYear()} Frandly, Inc
            </Text>
          </Box>
          <Box sx={styles.linksWrap}>
            <Link path="/">Home</Link>
            <Link path="/">Advertise</Link>
            <Link path="/">Supports</Link>
            <Link path="/">Marketing</Link>
            <Link path="/">FAQ</Link>
          </Box>
        </Container>
      </Box>
    </Styled.Footer>
  );
}

const Styled = {
  Footer: styled.div`
    .footer__title {
      color: white;
      margin-right: 20px;
      font-size: 20px;
    }
    .footer__logo_image {
      width: 15px;
      margin-right: 10px;
    }
  `,
};
const styles = {
  footer: {
    py: ["40px", null, null, null, null, "30px", "40px"],
    backgroundColor: "#020718",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#ffffff",
      opacity: "0.05",
    },
  },
  container: {
    display: "flex",
    flexDirection: ["column", null, null, null, null, "row"],
    justifyContent: ["center", null, null, null, null, "space-between"],
    alignItems: "center",
    position: "relative",
    flexWrap: "wrap",
  },
  linksWrap: {
    mt: ["15px", null, null, null, null, "0"],
    display: "flex",
    flexWrap: "wrap",
    a: {
      fontSize: ["14px", null, null, null, "16px"],
      color: "#ffffff",
      transition: "all 500ms ease",
      "&:hover": { opacity: 0.7 },
    },
    "a+a": { ml: ["15px", null, null, null, "35px"] },
  },
};
