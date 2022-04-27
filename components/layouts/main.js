import Head from "next/head";
import React from "react";
import MainHeader from "./header";
import MainFooter from "./footer";

function MainLayout({ headerProps = {}, children }) {
  return (
    <>
      <Head>
        <title>News App</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="News App by Yeremia Joy" />
        <link rel="icon" href="/news-logo.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
      </Head>
      <MainHeader {...headerProps} />
      <main className="main-layout">{children}</main>
      <MainFooter />
    </>
  );
}

export default MainLayout;
