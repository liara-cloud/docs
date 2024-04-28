import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function Desktop() {
  return (
    <Layout>
      <Head>
        <title>مستندات استقرار با مرورگر لیارا</title>
      </Head>
      <div className="page-head">
        <div className="page-title">
          <h1>استقرار با مرورگر در لیارا</h1>
          <span className="page-description">(Liara Drag & Drop)</span>
        </div>
      </div>
      <img
        src="/static/liara-browser.jpg"
        style={{ border: "none", marginTop: 28, marginBottom: 16 }}
      />
      <section>
        <h2>روش استفاده</h2>
        <p>
          برای استقرار برنامه‌های خود از طریق مرورگر در لیارا، تنها کافیست تا
          پوشه پروژه خود را درون یک فایل zip قرار بدهید. به طوری که پسوند آن
          حتماً <span className="code">.zip</span> باشد. در نهایت کافیست تا فایل
          را آپلود کرده و استقرار برنامه خود را، شروع کنید.
        </p>

        <h2>توضیحات و نکات تکمیلی</h2>
        <h4>فایل gitignore.</h4>
        <p>
          در نظر داشته باشید که تمام فایل‌ها و دایرکتوری‌هایی که در فایل
          gitignore. تعریف شده‌اند و یا به صورت کلی، قصد ندارید در لیارا، آپلود
          کنید؛ باید از فایل zip حذف شوند و فایل zip نهایی، نباید شامل این
          فایل‌ها و دایرکتوری‌ها باشد.
        </p>

        <h2>نوع سیستم‌عامل</h2>
        <p>
          تفاوتی نمی‌کند که از چه سیستم‌عاملی استفاده می‌کنید. تنها کافیست تا
          مرورگر خود را درون آن، بالا بیاورید و عملیات استقرار را، آغاز کنید.
        </p>
      </section>
      <section className="download">
        <div className="md:grid grid-cols-3 items-start justify-between mt-10">
          <div className="os-container mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/windows.svg" id="icon-os" width={90} />
          </div>
          <div className="os-container mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/linux.svg" id="icon-os" width={80} />
          </div>
          <div className="os-container mt-14 md:mt-1 flex flex-col items-center justify-start">
            <img src="/static/mac.svg" id="icon-os" width={80} />
          </div>
        </div>
      </section>

      <section>
        <h4>فایل liara.json</h4>
        <p>
          در استقرار با مرورگر، دیگر نیازی به ایجاد فایل liara.json در مسیر اصلی
          پروژه نیست. چرا که در حین استقرار با مرورگر، می‌توانید تنظیمات و
          پیکربندی‌های مربوط به پروژه خود را، مشخص کنید.
        </p>
      </section>
    </Layout>
  );
}
