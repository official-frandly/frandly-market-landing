import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import serviceImage1 from "assets/service-1.png";
import serviceImage2 from "assets/service-2.png";
import serviceImage3 from "assets/service-3.png";
import serviceImage4 from "assets/service-4.png";
import serviceImage5 from "assets/service-5.png";
import serviceImage6 from "assets/service-6.png";
// Learn more 버튼 클릭시 모달 뜨면서 next버튼 눌러서 이동하는 설명서 뜨게하기
const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      "Get your info tests delivered at home collect a sample from the your progress tests.",
    heading: "실시간 상품 업로드",
    path: "#",
  },
  {
    image: serviceImage2,
    text:
      "Get your info tests delivered at home collect a sample from the your progress tests.",
    heading: "실시간 문의 답변",
    path: "#",
  },
  {
    image: serviceImage3,
    text:
      "Get your info tests delivered at home collect a sample from the your progress tests.",
    heading: "반응형 판매자 가이드",
    path: "#",
  },
  {
    image: serviceImage4,
    text:
      "Get your info tests delivered at home collect a sample from the your progress tests.",
    heading: "홍보, 마케팅 전략",
    path: "#",
  },
  {
    image: serviceImage5,
    text:
      "Get your info tests delivered at home collect a sample from the your progress tests.",
    heading: "웹 기반 프로세스",
    path: "#",
  },
  {
    image: serviceImage6,
    text:
      "Get your info tests delivered at home collect a sample from the your progress tests.",
    heading: "온라인 지원",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="프랜들리 마켓의 기능"
          text="프랜들리 마켓의 편안한 기능을 바로 만나보세요"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
