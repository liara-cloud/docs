import Head from "next/head";
import Script from "next/script";
import { Fragment, useState } from "react";
import Footer from "./Footer";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const telegramStyle = {
    width: "55px",
    position: "fixed",
    left: "30px",
    bottom: "30px",
    border: "1px solid #2aabee",
    padding: "9px",
    borderRadius: "45px",
    zIndex: 99,
  };

  return (
    <Fragment>
      <Head>
        <meta name="theme-color" content="#2C333F" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <Script
          strategy="lazyOnload"
          data-website-id="da7a8997-effb-43ea-a5e3-9a7627cc540e"
          src="https://meta.liara.ir/umami.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PGMNBH9V')`,
          }}
        />
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGMNBH9V"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
        }}
      />

      <main>
        <Header setSearchOpen={setSearchOpen} />

        <a
          href="https://t.me/liaracommunity"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img style={telegramStyle} src={"/static/telegram.svg"} />
        </a>

        <div className="wrapper">
          <Sidebar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          <article className="article">{children}</article>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
