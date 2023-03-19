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
        <script
          async
          defer
          data-website-id="da7a8997-effb-43ea-a5e3-9a7627cc540e"
          src="https://meta.liara.ir/umami.js"
        ></script>
      </Head>

      <main>
        <Header setSearchOpen={setSearchOpen} />
        <div className="wrapper">
          <Sidebar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          <article className="article">{children}</article>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
