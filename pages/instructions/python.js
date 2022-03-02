import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Python - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="python" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Python</h1>
        <span className="page-description">(Python Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر برنامه‌های Python به‌صورت مستقیم در لیارا پشتیبانی نمی‌شوند
      اما شما می‌توانید پروژه‌های توسعه داده شده با این زبان برنامه‌نویسی را طبق
      دستورالعمل زیر در لیارا مستقر کنید.
    </Notice>

    <Notice variant="info">
      توجه داشته باشید که برای استقرار برنامه‌های Python در لیارا باید به نحوه‌ی
      نوشتن <span className="code">Dockerfile</span> آشنا باشید.
    </Notice>

    <p>
      برای استقرار برنامه‌های Python در لیارا باید در ابتدا از بخش{" "}
      <strong>برنامه‌ها</strong>، یک{" "}
      <Link href="/app-deploy/docker/getting-started">برنامه Docker</Link> با
      شناسه و پلن دلخواه‌تان ایجاد کنید. سپس یک فایل با نام
      <span className="code">Dockerfile</span>
      در ریشه‌ی برنامه‌تان بسازید و برنامه‌ی خود را Dockerize‌ کنید.
    </p>

    <p>درنهایت دستور زیر را در مسیر اصلی پروژه‌ی خود اجرا کنید:</p>
    <Highlight className="bash">{`$ liara deploy`}</Highlight>
    <p>
      <Link href="/cli/install">راهنمای نصب Liara CLI</Link>
    </p>

    <h5>توجه داشته باشید که</h5>
    <ul>
      <li>
        اگر با خطای Read-only Filesystem مواجه شدید، لازم است مستندات{" "}
        <Link href="/app-features/file-system">فایل‌سیستم</Link> برنامه‌های
        لیارا را مطالعه کنید.
      </li>
      <li>
        بین برنامه‌ها و دیتابیس‌ها{" "}
        <Link href="/app-features/private-network">شبکه‌ی خصوصی</Link> برقرار
        است که در صورت استقرار Microservice‌ها و ارتباط درون‌شبکه‌ای، بسیار
        کاربردی است.
      </li>
      <li>
        در صفحه‌ی <Link href="/app-features/logs">لاگ‌ها</Link> امکان دنبال‌کردن
        زنده‌ی لاگ‌های‌تان را دارید.
      </li>
      <li>
        برای تنظیم Environment Variableها نیز می‌توانید مستندات{" "}
        <Link href="/app-features/environment-variables">متغیرهای محیطی</Link>{" "}
        را مطالعه کنید.
      </li>
    </ul>
  </Layout>
);
