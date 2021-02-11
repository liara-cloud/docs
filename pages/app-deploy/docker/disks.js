import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از دیسک‌ها در برنامه‌های Docker - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/docker.svg"
        alt="docker"
      />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>استفاده از دیسک‌ها</h3>
    <p>
      فایل سیستم برنامه‌های لیارا،{" "}
      <a href="/app-features/file-system">Read-Only</a> است. به عبارتی، بعد از
      عملیات استقرار، امکان ذخیره‌سازی فایل‌های جدید در کنار فایل‌های پروژه،
      وجود ندارد. به همین دلیل از قابلیتی تحت عنوان <b>دیسک‌ها</b> در اینجا
      استفاده می‌کنیم تا بتوانیم اطلاعات را ذخیره کنیم.
    </p>
    <p>
      به صورت خلاصه روند کار بدین‌صورت خواهد‌بود که ابتدا یک دیسک به اندازه
      دلخواه ایجاد می‌کنید، و سپس دایرکتوری مد‌نظرتان را به آن دیسک متصل کنید تا
      اطلاعات آن همیشه محفوظ بماند. برای مثال فرض کنید می‌خواهید کل دایرکتوری{" "}
      <span className="code">files</span> را به یک دیسک متصل کنید تا داده‌های آن
      همیشه محفوظ باقی‌بماند.
    </p>
    <p>
      <b>گام اول)</b> ساخت یک دیسک جدید در منوی <b>دیسک‌های</b> پنل لیارا:{" "}
    </p>
    <ZoomableImage src="/static/laravel-create-disk.gif" />

    <p>
      <b>گام دوم)</b> اضافه کردن بخش اتصال دیسک به دایرکتوری در فایل{" "}
      <span className="code">liara.json</span>
    </p>
    <Highlight className="json">
      {`{
  "platform": "node",
  "app": "docker-starter",
  "port": 8000,
  "disks": [
    {
      "name": "disk1",
      "mountTo": "/app/files"
    }
  ]
}`}
    </Highlight>
    <p>
      همانطور که در فایل بالا می‌بینید، دیسک با شناسه{" "}
      <span className="code">disk1</span> به دایرکتوری{" "}
      <span className="code">files</span> برنامه متصل شده‌است. از حالا به بعد هر
      دیتایی داخل دایرکتوری <span className="code">files</span> قرار بگیرد در هر
      استقرار یا ری‌استارت پاک نخواهد شد. توجه داشته باشید که در این‌جا
      دایرکتوری <span className="code">/app</span> همان{" "}
      <span className="code">working directory</span> است و شما می‌توانید هر
      مسیر دیگری را وارد کنید.
    </p>
    <Notice variant="info">
      همانطور که می‌بینید، <span className="code">disks</span> در فایل بالا یک
      آرایه است که یعنی شما می‌تواند دیسک‌های جدیدتری ایجاد و دایرکتوری‌های
      دیگری را به آن‌ها متصل کنید.
      <Highlight className="json">
        {`{
  "disks": [
    {
      "name": "disk1",
      "mountTo": "/app/files"
    },
    {
      "name": "disk2",
      "mountTo": "/app/logs"
    }
  ]
}`}
      </Highlight>
    </Notice>
    <br />
    <Link href="/app-deploy/docker/domain">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
