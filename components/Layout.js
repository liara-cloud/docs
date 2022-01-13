import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Footer from "./Footer";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <Fragment>
      <Head>
        <meta name="theme-color" content="#2C333F" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <main>
        <Header setSearchOpen={setSearchOpen}  />
        {useRouter().pathname === "/404" ? (
          <article>{children}</article>
        ) : (
          <div className="wrapper">
            <Sidebar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <article className="article">{children}</article>
          </div>
        )}
      </main>
      <Footer />
    </Fragment>
  );
};
