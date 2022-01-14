import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Yii - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="yii" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Yii</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر برنامه‌های Yii به‌صورت مستقیم در لیارا پشتیبانی نمی‌شوند اما
      شما می‌توانید پروژه‌های توسعه داده شده با این فریم‌ورک را طبق دستورالعمل
      زیر در لیارا مستقر کنید.
    </Notice>

    <p>
      Yii یک فریم‌ورک قدرتمند و در عین حال انعطاف‌پذیر است که برای استقرار آن در
      لیارا باید یک{" "}
      <Link href="/app-deploy/php/getting-started">برنامه‌ی PHP</Link> ایجاد
      کرده و مراحل زیر را دنبال کنید.
    </p>

    <h3>
      ۱) تنظیم <span className="code">APACHE_DOCUMENT_ROOT</span>
    </h3>
    <p>
      ساختار فریم‌ورک Yii به‌گونه‌ای است که فایل‌های وب برنامه در پوشه‌ی web
      قرار داده می‌شوند بنابراین باید طبق{" "}
      <Link href="/app-deploy/php/envs">مستندات تنظیم متغیرها</Link>، متغیر زیر
      را تنظیم کرده و بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
    </p>
    <Highlight className="ini">{`APACHE_DOCUMENT_ROOT=web/`}</Highlight>

    <h3>
      ۲) اتصال دیسک به <span className="code">assetManager basePath</span>
    </h3>
    <p>
      حال برای مواجه نشدن با خطای The directory is not writable باید طبق مستندات{" "}
      <Link href="/app-deploy/php/disks#create-new-disk">
        استفاده از دیسک‌ها
      </Link>
      ، یک دیسک با نام و اندازه دلخواه ایجاد کرده و در قدم بعد دیسک ایجاد شده را
      در فایل <Link href="/app-deploy/php/disks#mount-disks">liara.json</Link>{" "}
      به مسیر assetManager basePath مونت کنید.
      <Highlight>
        {`{
  "platform": "php",
  "disks": [
    {
      "name": "disk-name",
      "mountTo": "web/assets"
    }
  ]
}`}
      </Highlight>
    </p>

    <h3>۳) استقرار پروژه</h3>
    <p>
      در قدم آخر برای استقرار پروژه‌ی خود بر روی لیارا کافیست طبق مستندات{" "}
      <Link href="/app-deploy/php/deploy">استقرار برنامه‌های PHP</Link> عمل کرده
      و دستور زیر را در مسیر اصلی پروژه اجرا کنید.
    </p>
    <Highlight className="bash">{`$ liara deploy`}</Highlight>
  </Layout>
);
