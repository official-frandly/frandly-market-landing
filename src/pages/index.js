import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Jackpot from "sections/jackpot";
import CallToAction from "sections/call-to-action";
import Featured from "sections/featured";
import Pricing from "sections/pricing";
import Testimonials from "sections/testimonials";
import Blogs from "sections/blogs";
import News from "sections/news";

import FAQ from "sections/faq";
import Subscribe from "sections/subscribe";
import Contact from "sections/contact";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="프랜들리 마켓" />
          <Banner />
          <Services />
          <Jackpot />
          <CallToAction />
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
