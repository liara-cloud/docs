import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>زبان NodeJS</h1>
    <span className="pageDescription">(NodeJS Language)</span>

    <h3>استفاده از دیسک‌ها</h3>
    <p>
      فایل‌سیستم و یا اصطلاحا ذخیره کردن اطلاعات در فولدر‌ها در لیارا، به خاطر
      معماری ابری آن، موقت میباشد. یعنی اگر شما فایل ویدیویی‌ای را مثلا در فولدر
      files پروژه‌ی‌تان ذخیره کنید در استقرار بعدی یا ریستارت شدن برنامه، آن
      فایل ویدیویی‌ای از بین میرود. به همین دلیل از مفهومی تحت عنوان{" "}
      <b>دیسک‌ها</b> در اینجا استفاده میکنیم تا اطلاعات را بتوانیم به صورت دائمی
      ذخیره کنیم.
    </p>
    <p>
      به صورت خلاصه روند کار بدین‌صورت خواهد‌بود که ما ابتدا یک دیسک به اندازه
      دلخواه میسازیم، و سپس آن دایرکتوری خاصی که مد‌نظرمان است را به آن دیسک
      متصل میکنیم تا اطلاعات آن همیشه محفوظ بماند. برای مثال در پروژه تستی‌مان
      قصد داریم کل دایرکتوری files پروژه تستی‌مان را به یک دیسک متصل کنیم تا
      داده‌های آن همیشه محفوظ باقی‌بماند.
    </p>
    <p>
      <b>گام اول)</b> ساخت یک دیسک جدید در منوی <b>دیسک‌های</b> پنل لیارا:{" "}
      <br />
      <ZoomableImage src="/static/laravel-create-disk.gif" />
    </p>
    <p>
      <b>گام دوم)</b> اضافه کردن پوشه مد‌نظرمان به فایل{" "}
      <span className="code">liara.json</span>
    </p>
    <Highlight className="json">
      {`{
  "platform": "node",
  "app": "nodejs-starter",
  "port": 8000,
  "disks": [
    {
      "name": "disk1",
      "mountTo": "files"
    }
  ]
}`}
    </Highlight>
    <p>
      همانطور که در فایل بالا میبینید، دیسک با شناسه disk1 را به دایرکتوری files
      پروژه‌ی‌مان متصل کرده‌ایم. از حالا به بعد هر فایلی داخل دایرکتوری files
      قرار بگیرد در هر استقرار یا ریستارت پاک نخواهد شد.
    </p>
    <Notice variant="info">
      همانطور که میبینید، بخش disks در فایل بالا یک آرایه میباشد که یعنی شما
      میتواند دیسک‌های جدیدتری بسازید و دایرکتوری های دیگری را به آن ها متصل
      کنید.
      <Highlight className="json">
        {`{
  "disks": [
    {
      "name": "disk1",
      "mountTo": "files"
    },
    {
      "name": "disk2",
      "mountTo": "logs"
    }
  ]
}`}
      </Highlight>
    </Notice>
    <Notice variant="info">
      همانطور که در فایل‌های بالا میبینید آدرس دهی‌ها از ریشه هر پروژه NodeJS ای
      داده شده است.
    </Notice>
    <br />
    <Link href="/apps/nodejs/domain">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
