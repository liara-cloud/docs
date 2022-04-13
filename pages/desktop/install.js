import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";

export default function Desktop() {
  return (
    <Layout>
      <Head>
        <title>مستندات نصب و راه‌اندازی نرم‌افزار دسکتاپ لیارا</title>
      </Head>
      <div className="page-head">
        <div className="page-title">
          <h1>نرم‌افزار دسکتاپ لیارا</h1>
          <span className="page-description">(Liara Desktop)</span>
        </div>
      </div>

      <img
        src="/static/liara-desktop.jpg"
        style={{ border: "none", marginTop: 28, marginBottom: 16 }}
      />

      <section>
        <h1>نصب برنامه</h1>
        <p>
          نرم‌افزار دسکتاپ این امکان را به شما می‌دهد که با Drag & Drop، پروژه‌ی
          خود را در هاست ابری لیارا مستقر کنید.
        </p>
      </section>
      <section className="download">
        <h3>لینک های دانلود</h3>
        <div />
        <button className="windows">
          <a href="https://desktop.liara.ir/releases/Liara-Desktop-latest-win-x64.exe.zip">
            <img src="/static/windows.svg" width="20" />
            دانلود برای ویندوز
          </a>
        </button>

        <Notice>نسخه مک و لینوکس لیارا دسکتاپ بزودی منتشر می‌شود.</Notice>
      </section>
    </Layout>
  );
}
