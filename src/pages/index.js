import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/sections/banner";
import Services from "components/sections/services";
import Jackpot from "components/sections/jackpot";
import CallToAction from "components/sections/call-to-action";
import Partnership from "components/sections/partnership";
import Featured from "components/sections/featured";
import Pricing from "components/sections/pricing";
import Testimonials from "components/sections/testimonials";
import Blogs from "components/sections/blogs";
import News from "components/sections/news";
import FAQ from "components/sections/faq";
import Subscribe from "components/sections/subscribe";
import Contact from "components/sections/contact";
import Education from "components/sections/education";
import { setting } from "lib/config";
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title={setting.brandName_ko + " 마켓"} />
          <Banner />
          <Services />
          <Jackpot />
          <Partnership />
          <Featured />
          {/* <Pricing /> */}
          <CallToAction />
          <Testimonials />
          {/* <News /> */}
          <Education />
          <FAQ />
          <Contact />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
