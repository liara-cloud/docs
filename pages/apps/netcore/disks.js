import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>ASP.Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>پلتفرم ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Platform)</span>

    <h3>استفاده از دیسک‌ها</h3>
    <p>
      فایل‌سیستم و یا اصطلاحا ذخیره کردن اطلاعات در فولدر‌ها در لیارا، به خاطر
      معماری ابری آن، موقت میباشد. یعنی اگر شما فایل ویدیویی‌ای را مثلا در فولدر
      MyStaticFiles پروژه‌ی‌تان ذخیره کنید در استقرار بعدی یا ریستارت شدن
      برنامه، آن فایل ویدیویی‌ای از بین میرود. به همین دلیل از مفهومی تحت عنوان{" "}
      <b>دیسک‌ها</b> در اینجا استفاده میکنیم تا اطلاعات را بتوانیم به صورت دائمی
      ذخیره کنیم.
    </p>
    <p>
      به صورت خلاصه روند کار بدین‌صورت خواهد‌بود که ما ابتدا یک دیسک به اندازه
      دلخواه میسازیم، و سپس آن دایرکتوری خاصی که مد‌نظرمان است را به آن دیسک
      متصل میکنیم تا اطلاعات آن همیشه محفوظ بماند. برای مثال در پروژه تستی‌مان
      قصد داریم کل دایرکتوری MyStaticFiles پروژه تستی‌مان را به یک دیسک متصل
      کنیم تا داده‌های آن همیشه محفوظ باقی‌بماند.
    </p>
    <p>
      <b>گام اول)</b> ساخت یک دیسک جدید در منوی <b>دیسک‌های</b> پنل لیارا:{" "}
    </p>
    <ZoomableImage src="/static/laravel-create-disk.gif" />

    <p>
      <b>گام دوم)</b> اضافه کردن پوشه مد‌نظرمان به فایل{" "}
      <span className="code">liara.json</span>
    </p>
    <Highlight className="json">
      {`{
  "platform": "netcore",
  "app": "dotnets-starter",
  "port": "5000",
  "disks": [
    {
      "name": "disk1",
      "mountTo": "MyStaticFiles"
    }
  ]
}`}
    </Highlight>
    <p>
      همانطور که در فایل بالا میبینید، دیسک با شناسه disk1 را به دایرکتوری
      MyStaticFiles پروژه‌ی‌مان متصل کرده‌ایم. از حالا به بعد هر فایلی داخل
      دایرکتوری MyStaticFiles قرار بگیرد در هر استقرار یا ریستارت پاک نخواهد شد.
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
      "mountTo": "MyStaticFiles"
    },
    {
      "name": "disk2",
      "mountTo": "Logs"
    }
  ]
}`}
      </Highlight>
    </Notice>
    <Notice variant="info">
      همانطور که در فایل‌های بالا میبینید آدرس دهی‌ها از ریشه هر پروژه داده شده
      است.
    </Notice>
    <br />

    <Link href="/apps/netcore/domain">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
