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
  title: `مستندات`,
  desc: `سرویس ابری لیارا ارائه دهنده خدمات ابری  platform as a service یا PaaS و database as a service یا DBaaS در ایران.`,
  openGraph: openGraphImage.src,
  keyWords: `
  سرویس ابری لیارا، ارائه دهنده خدمات ابری PaaS و DBaaS، سرویس ابری ساعتی، PaaS ساعتی، DBaaS ساعتی، object storage ساعتی، سرویس ابری PaaS، سرویس ابری DBaaS، سرویس ابری object storage، سرویس ابری PaaS در ایران، سرویس ابری DBaaS در ایران، سرویس ابری object storage در ایران، سرویس platform as a service، سرویس database as a service`,
};
