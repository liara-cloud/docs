import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";

const links = {
  win_x64:
    "https://desktop.liara.ir/releases/Liara-Desktop-latest-win-x64.exe.zip",
  win_arm64:
    "https://desktop.liara.ir/releases/Liara-Desktop-latest-win-arm64.exe.zip",
  linux_x64:
    "https://desktop.liara.ir/releases/Liara-Desktop-latest-linux-amd64.deb.zip",
  linux_arm64:
    "https://desktop.liara.ir/releases/Liara-Desktop-latest-linux-arm64.deb.zip",
  mac_x64:
    "https://desktop.liara.ir/releases/Liara-Desktop-latest-mac-x64.dmg.zip",
  mac_arm64:
    "https://desktop.liara.ir/releases/Liara-Desktop-latest-mac-arm64.dmg.zip",
};

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

        <div className="md:grid grid-cols-3 items-start justify-between mt-10">
          <div className="os-container mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/windows.svg" id="icon-os" width={90} />
            <div>
              <a href={links.win_x64}>
                <img src="/static/download.svg" width={16} />
                ویندوز (x64)
              </a>
              <a href={links.win_arm64}>
                <img src="/static/download.svg" width={16} />
                ویندوز (arm64)
              </a>
            </div>
          </div>
          <div className="os-container mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/linux.svg" id="icon-os" width={80} />
            <div>
              <a href={links.linux_x64}>
                <img src="/static/download.svg" width={16} />
                لینوکس (x64)
              </a>
              <a href={links.linux_arm64}>
                <img src="/static/download.svg" width={16} />
                لینوکس (arm64)
              </a>
            </div>
          </div>
          <div className="os-container mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/mac.svg" id="icon-os" width={80} />
            <div>
              <a href={links.mac_x64}>
                <img src="/static/download.svg" width={16} />
                مک (x64)
              </a>
              <a href={links.mac_arm64}>
                <img src="/static/download.svg" width={16} />
                مک (arm64)
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
