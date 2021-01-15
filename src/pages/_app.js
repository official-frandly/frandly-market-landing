// import { useEffect } from "react";
// import Router from "next/router";
// import { initGA, logPageView } from "analytics";
// import "swiper/swiper-bundle.min.css";
// import "rc-drawer/assets/index.css";
// import "typeface-dm-sans";
import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import store from "store";
import Core from "containers/base/Core";
import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";
// import "styles/main.scss";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return (
    <Container>
      {/* <Provider store={store}> */}
      <Core />
      <Component {...pageProps} />
      {/* </Provider> */}
    </Container>
  );
}

// import App, { Container } from 'next/app';
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from 'store';
// import 'styles/main.scss';
// import Core from 'containers/base/Core';

// // _error 페이지 만들기
// export default class MyApp extends App {

//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Container>
//         <Provider store={store}>
//           <Core />
//           <Component {...pageProps} />
//         </Provider>
//       </Container>
//     );
//   }
// }
