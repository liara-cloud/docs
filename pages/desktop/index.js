import React from "react";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function Desktop() {
  return (
    <Layout>
      <Head>
        <title>اپلیکیشن لیارا دسکتاپ - سرویس ابری لیارا</title>
      </Head>
      <div className="page-head">
        <div className="page-title">
          <h1>لیارا Desktop</h1>
          <span className="page-description">(لیارا Desktop)</span>
        </div>
      </div>{" "}
    </Layout>
  );
}
