import React from "react";
import Head from "next/head";
import openGraphImage from "../../public/static/seo/openGraph.jpg";
export default function Seo({ title, desc, keyWords, openGraph, url }) {
  return (
    <Head>
      <title>{title} - سرویس ابری لیارا</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="enamad" content="" />
      <meta property="og:locale" content="fa_IR" />
      <meta property="og:site_name" content="سرویس ابری لیارا" />
      <meta property="og:image" content={openGraph} />
      <meta name="twitter:image" content={openGraph} />
      <meta name="twitter:card" content={`summary_large_image`} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta property="og:image:width" content={`900`} />
      <meta property="og:image:height" content={`450`} />
      <meta property="twitter:description" content={desc} />
      <meta name="keywords" content={keyWords} />
    </Head>
  );
}

Seo.defaultProps = {
  lang: `fa`,
  meta: [],
  title: ``,
  desc: ``,
  openGraph: openGraphImage.src,
  keyWords: ``,
};
