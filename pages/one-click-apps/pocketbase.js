import Head from "next/head";
import Highlight from "react-highlight";

import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>مستندات نصب و راه‌اندازی PocketBase - لیارا</Head>

    <div className="page-head">
      <PlatformIcon platform="pocketbase" />
      <div className="page-title">
        <h1>مستندات نصب و راه‌اندازی PocketBase</h1>
        <span className="page-description">(PocketBase one-click app)</span>
      </div>
    </div>

    <p>
      <strong>PocketBase</strong> یک پلتفرم Backend-as-a-service (BAAS) است که
      به توسعه دهندگان کمک می‌کند تا بدون نگرانی در رابطه با زیر ساخت سرور و
      مدیریت پایگاه داده، برنامه‌ی وب و موبایل پیاده سازی کنند.
    </p>
    <p>
      بوسیله‌ PocketBase، توسعه دهندگان می‌توانند به راحتی با استفاده از رابط
      کاربری و یا RESTful API، پایگاه داده ایجاد کرده و آن را مدیریت کنند،
      کاربران را احراز هویت کرده و توابع مورد نیاز رو ایجاد کنند. PocketBase از
      فریمورک‌های رایج از جمله React, React Native, Vuejs و Angular و همچنین
      زبان‌های برنامه‌نویسی مانند Python و JavaScript پشتیبانی می‌کند.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/pocketbase/create-pocketbase-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده PocketBase باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>برنامه‌های آماده</strong> کلیک کنید. سپس
      برنامه‌ی PocketBase را انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر
      بگیرید، همچنین پلن مورد نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی{" "}
      <strong>ایجاد برنامه</strong> کلیک کنید.
    </p>

    <Notice variant="info">
      برای اتصال دامنه‌ی اختصاصی به این برنامه کافیست به{" "}
      <a href="/domains" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کرده و طبق مستندات، دامنه‌ اختصاصی مورد نظرتان را به برنامه متصل
      کنید.
    </Notice>
  </Layout>
);
