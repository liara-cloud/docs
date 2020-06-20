import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>PHP سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>برنامه‌های PHP</h1>
    <span className="pageDescription">(PHP Apps)</span>
    <h3>پیکربندی ENV‌ها</h3>
    <p>
      متغیرهای محیطی یا همان Environment Variables ها به شما کمک میکنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند.
    </p>
    <p>
      شما با ابزارهای مختلفی میتوانید در زبان PHP مقادیر ENV ها را مدیریت کنید.
      ولی به صورت خیلی ساده و برای نمونه توضیح میدهیم که چطور میتوانید یک ENV را
      از بخش تنظیمات برنامه اضافه کنید و در برنامه‌ی‌تان آن را بخوانید. به همین
      شیوه شما میتوانید از ENV ها در پروژه‌ی‌تان استفاده کنید.
    </p>
    <p>
      برای افزودن یک ENV کافیست که به بخش تنظیمات برنامه‌ی‌تان بروید و یک key به
      عنوان اسم و یک value به عنوان مقدار اضافه کنید، و با زدن دکمه{" "}
      <b>ثبت تغییرات</b> یک ENV به برنامه‌ی‌تان اضافه کنید. برای نمونه، ENV ای
      با عنوان LIARA_URL و مقدار https://liara.ir را به این صورت اضافه کنید.
    </p>
    <ZoomableImage src="/static/php-env.png" />
    <p> حالا به راحتی میتوانید از‌ آن در برنامه‌ی‌‌تان استفاده کنید:</p>
    <Highlight className="php">
      {`<?php
echo getenv('LIARA_URL');
`}
    </Highlight>
    <p>
      بعد از کلیک روی دکمه <b>ثبت تغییرات</b> برنامه‌ی‌ شما به صورت خودکار
      ریستارت میشود و در استقرار جدید این متغیر‌های محیطی در داخل برنامه قابل
      استفاده میشوند. به این شیوه که LIARA_URL را اضافه کردید میتوانید هر ENV
      دیگری را نیز به پروژه اضافه کنید.
    </p>
    <Link href="/app-deploy/php/logs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
