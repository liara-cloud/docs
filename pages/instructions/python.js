import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار اسکریپت‌های Python - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="python" />
      <div className="page-title">
        <h1>استقرار اسکریپت‌های Python</h1>
        <span className="page-description">(Python Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر برنامه‌های{" "}
      <Link href="/app-deploy/django/getting-started">Django</Link> و{" "}
      <Link href="/app-deploy/flask/getting-started">Flask</Link> به‌صورت مستقیم
      در لیارا پشتیبانی می‌شوند اما برای استقرار اسکریپت‌های خام Python بایستی
      مستندات زیر را دنبال کنید.
    </Notice>

    <Notice variant="info">
      توجه داشته باشید که برای استقرار اسکریپت‌های Python در لیارا باید به
      نحوه‌ی نوشتن <span className="code">Dockerfile</span> آشنا باشید.
    </Notice>

    <p>
      برای استقرار اسکریپت‌های Python در لیارا باید در ابتدا از بخش{" "}
      <strong>برنامه‌ها</strong>، یک{" "}
      <Link href="/app-deploy/docker/getting-started">برنامه Docker</Link> با
      شناسه و پلن دلخواه‌تان ایجاد کنید. سپس یک فایل با نام
      <span className="code">Dockerfile</span>
      در ریشه‌ی برنامه‌تان بسازید و برنامه‌ی خود را Dockerize‌ کنید. برای مثال
      می‌توانید از قطعه‌کد زیر الگو بگیرید:
    </p>

    <Highlight className="dockerfile">
      {`FROM python:3.11

ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

RUN apt-get update && apt-get install build-essential -y

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade pip && \\
    pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "main.py"]`}
    </Highlight>

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
