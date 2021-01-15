import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/base/seo";
import Layout from "components/base/template/layout";
import Banner from "components/common/sections/banner";
import Services from "components/common/sections/services";
import Jackpot from "components/common/sections/jackpot";
import CallToAction from "components/common/sections/call-to-action";
import Partnership from "components/common/sections/partnership";
import Featured from "components/common/sections/featured";
import Pricing from "components/common/sections/pricing";
import Testimonials from "components/common/sections/testimonials";
import Blogs from "components/common/sections/blogs";
import News from "components/common/sections/news";
import FAQ from "components/common/sections/faq";
import Subscribe from "components/common/sections/subscribe";
import Contact from "components/common/sections/contact";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="프랜들리 마켓" />
          <Banner />
          <Services />
          <Jackpot />
          <Partnership />
          <Featured />
          {/* <Pricing /> */}
          <CallToAction />
          <Testimonials />
          <News />
          <FAQ />
          <Contact />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
