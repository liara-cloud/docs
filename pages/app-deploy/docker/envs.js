import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تنظیم متغیرها (Environment Variables) در برنامه‌های Docker -
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>پلتفرم Docker</h1>
        <span className="page-description">(Docker Platform)</span>
      </div>
    </div>

    <h3>تنظیم متغیرها (Environment Variables)</h3>
    <p>
      متغیرهای محیطی یا همان Environment Variables کمک می‌کنند تا برنامه‌ی شما
      در هر محیط، اطلاعات مربوط به همان محیط را دریافت کند.{" "}
      <Link href="/app-features/environment-variables">توضیحات بیشتر</Link>
    </p>
    <h4>تنظیم متغیرهای محیطی با لیارا CLI</h4>
    <p>
      برای افزودن یک متغیر محیطی باعنوان <span className="code">LIARA_URL</span>{" "}
      و مقدار https://liara.ir می‌توانید از دستور{" "}
      <Link href="/cli/env">liara env</Link> استفاده کرده و به‌شکل زیر متغیر
      مورد نظرتان را تنظیم کنید:
    </p>
    <Highlight className="bash">{`$ liara env:set LIARA_URL=https://liara.ir`}</Highlight>
    <h4>تنظیم متغیرهای محیطی در پنل کاربری</h4>
    <p>
      برای افزودن یک متغیر محیطی باید وارد تنظیمات برنامه شده و یک KEY به عنوان
      اسم و یک value به عنوان مقدار اضافه کنید و با کلیک بر روی دکمه‌ی{" "}
      <strong>ثبت تغییرات</strong>، یک متغیر محیطی به برنامه‌ی شما اضافه خواهد
      شد.
    </p>
    <ZoomableImage src="/static/node-env.png" />
    <p>
      پس از کلیک بر روی دکمه <strong>ثبت تغییرات</strong>، برنامه‌ی‌ شما به صورت
      خودکار ری‌استارت می‌شود و این متغیر محیطی در استقرار جدید قابل استفاده
      خواهد بود.
    </p>
    <Link href="/app-deploy/docker/logs" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
