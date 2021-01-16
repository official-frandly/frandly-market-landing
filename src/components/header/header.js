/** @jsx jsx */
import { jsx, Container, Flex, Image } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/logo";
import logoImage from "assets/banner-logo.png";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
import logoDark from "assets/logo-dark.svg";
import styled from "styled-components";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <Styled.Header sx={styles.header} className={className}>
        {/* <header > */}
        <Container sx={styles.container}>
          {/* <Logo image={logoDark} /> */}

          <ScrollLink
            activeClass="active"
            sx={styles.nav.navLink}
            to={"banner"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div>
              <span className="title__logo">
                <Image className="logo" src={logoImage} alt="logo image" />
                Frandly market
              </span>
              {/* <h2>Frandly</h2> */}
            </div>
          </ScrollLink>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
            {/* <Link path="/" ml={2} label="서비스" sx={styles.nav.navLink} /> */}
            {/* <Link
              path="/education"
              ml={2}
              label="교육자료"
              sx={styles.nav.navLink}
            /> */}
            {/* <Link path="/news" ml={2} label="뉴스" sx={styles.nav.navLink} /> */}
          </Flex>
          <span className="qa__number">입점 문의 02-651-5513</span>
          {/* <Link
            path="/"
            ml={2}
            label="입점 신청하기"
            sx={styles.headerBtn}
            variant="buttons.primary"
          /> */}
          <a href="https://www.naver.com" target="_blank" sx={styles.headerBtn}>
            입점 신청하기
          </a>
          <MobileDrawer />
        </Container>
        {/* </header> */}
      </Styled.Header>
    </DrawerProvider>
  );
}
const Styled = {
  Header: styled.header`
    .title__logo {
      position: relative;
      font-size: 30px;
      font-weight: bold;
      top: 2px;
    }
    .qa__number {
      display: inline-block;
      margin-right: 10px;
      color: #103d4b;
      font-size: 14px;
    }
    .logo {
      position: relative;
      width: 40px;
      top: -3px;
      margin-right: 7px;
    }
  `,
};

const styles = {
  headerBtn: {
    backgroundColor: "black",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    color: "#ffffff",
    padding: "6.5px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "25px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: [null, null, null, null, null, null, "1420px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    mx: "auto",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    navLink: {
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "#0066C5",
      },
      // "&:hover, &.active": {
      //   color: "#0066C5",
      // },
    },
  },
};
