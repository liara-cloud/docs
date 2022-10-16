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

        <div className="md:flex items-start justify-between mt-10">
          <div className="os-container mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/windows.svg" id="icon-os" width={122} />
            <button>
              <a href="https://desktop.liara.ir/releases/Liara-Desktop-latest-win-x64.exe.zip">
                <img src="/static/download.svg" width={20} />
                ویندوز (x64)
              </a>
            </button>
            <button>
              <a href="http://desktop.liara.ir/releases/Liara-Desktop-latest-win-arm64.exe.zip">
                <img src="/static/download.svg" width={20} />
                ویندوز (arm64)
              </a>
            </button>
          </div>
          <div className="os-container  mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/linux.svg" id="icon-os" width={105} />
            <button className="">
              <a href="http://desktop.liara.ir/releases/Liara-Desktop-latest-linux-amd64.deb.zip">
                <img src="/static/download.svg" width={20} />
                لینوکس (x64)
              </a>
            </button>
            <button>
              <a href="http://desktop.liara.ir/releases/Liara-Desktop-latest-linux-arm64.deb.zip">
                <img src="/static/download.svg" width={20} />
                لینوکس (arm64)
              </a>
            </button>
          </div>
          <div className="os-container mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/mac.svg" id="icon-os" width={105} />
            <button>
              <a href="http://desktop.liara.ir/releases/Liara-Desktop-latest-mac-x64.dmg.zip">
                <img src="/static/download.svg" width={20} />
                مک (x64)
              </a>
            </button>
            <button>
              <a href="http://desktop.liara.ir/releases/Liara-Desktop-latest-mac-arm64.dmg.zip">
                <img src="/static/download.svg" width={20} />
                مک (arm64)
              </a>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
