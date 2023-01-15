import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های FastAPI - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="fastapi" />
      <div className="page-title">
        <h1>استقرار برنامه‌های FastAPI</h1>
        <span className="page-description">(FastAPI Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر برنامه‌های FastAPI به‌صورت مستقیم در لیارا پشتیبانی نمی‌شوند
      اما شما می‌توانید پروژه‌های توسعه داده شده با این فریم‌ورک را طبق
      دستورالعمل زیر در لیارا مستقر کنید.
    </Notice>

    <p>
      <a href="https://fastapi.tiangolo.com/" target="_blank">
        FastAPI
      </a>{" "}
      یک فریم‌ورک مدرن است که با زبان Python توسعه داده شده اما عملکردی نظیر
      NodeJS و Go را ارائه می‌دهد.
    </p>

    <p>
      طبق مستندات{" "}
      <a href="https://fastapi.tiangolo.com/deployment/docker/" target="_blank">
        استقرار FastAPI بر روی Docker
      </a>
      ، اگر پروژه‌ای با ساختار زیر داشته باشید:
    </p>

    <Highlight className="plaintext">
      {`.
├── app
│   ├── __init__.py
│   └── main.py
└── requirements.txt`}
    </Highlight>

    <p>
      باید برای استقرار این پروژه در لیارا، یک فایل با نام
      <span className="code">Dockerfile</span>
      در کنار فایل <span className="code">requirements.txt</span> برنامه‌ی‌تان
      بسازید و قطعه‌کد زیر را در این فایل قرار دهید:
    </p>
    <Highlight className="dockerfile">
      {`FROM python:3.9

WORKDIR /usr/src/app

COPY ./requirements.txt ./requirements.txt

RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "80"]`}
    </Highlight>

    <p>
      در نهایت می‌توانید دستور زیر را در مسیر اصلی پروژه اجرا کنید:{" "}
      <Link href="/cli/install">راهنمای نصب Liara CLI</Link>
    </p>
    <Highlight className="bash">
      $ liara deploy --platform docker --port 80
    </Highlight>

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
