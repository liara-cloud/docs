import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های Docker - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>پلتفرم Docker</h1>
        <span className="page-description">(Docker Platform)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>

    <ul className="mt-0">
      <li>
        <a href="#dockerfile-path">مشخص کردن مسیر Dockerfile</a>
      </li>
      <li>
        <a href="#supercronic">پیکربندی Supercronic</a>
      </li>
      <li>
        <a href="#limits">محدودیت‌ها</a>
      </li>
    </ul>

    <h3 id="dockerfile-path">مشخص کردن مسیر Dockerfile</h3>

    <p>
      گاهی اوقات ممکن است بخواهید چندین پروژه که در یک
      <span className="code">monorepo</span>
      قرار دارند را با
      <span className="code">Dockerfile</span>
      های مختلفی دیپلوی کنید یا از نام و مسیر دلخواه برای
      <span className="code">Dockerfile</span>
      تان استفاده کنید. برای این کار می‌توانید از یکی از دو روش زیر استفاده
      کنید:
    </p>
    <p>
      ۱) یک فایل با نام
      <span className="code">liara.json</span>
      در ریشه‌ پروژه‌تان ایجاد کرده و قطعه‌کد زیر را درون این فایل قرار بدید:
    </p>

    <Highlight className="json">
      {`{
  "platform": "docker",
  "build": {
     "dockerfile": "path/to/Dockerfile"
  }
}
`}
    </Highlight>

    <p>
      ۲) در دستور
      <span className="code">liara deploy</span>
      مسیر
      <span className="code">Dockerfile</span>
      را با پارامتر
      <span className="code">--dockerfile</span>
      مشخص کنید.
    </p>

    <Highlight className="bash">
      {`liara deploy --platform=docker --dockerfile="path/to/Dockerfile"`}
    </Highlight>

    <h3 id="supercronic">پیکربندی Supercronic</h3>
    <p>
      گاهی اوقات ممکن است بخواهید کار خاصی در زمان خاص و یا به‌صورت دوره‌ای اجرا
      شود. برای این کار در پلتفرم Docker می‌توانید از{" "}
      <a
        href="https://github.com/aptible/supercronic"
        target="_blank"
        rel="noopener"
      >
        Supercronic
      </a>{" "}
      استفاده کنید.
    </p>

    <p>
      برای استفاده از Supercronic در لیارا تنها کافیست قطعه‌کد زیر را به{" "}
      <span className="code">Dockerfile</span> پروژه‌ی خود اضافه کنید:
    </p>

    <Highlight className="dockerfile">
      {`COPY --from=liaracloud/supercronic:v0.1.11 \\
     /usr/local/bin/supercronic /usr/local/bin/supercronic`}
    </Highlight>

    <p>
      همچنین باید فایل <span className="code">crontab</span> را در مسیر اصلی
      پروژه‌ی خود ایجاد کرده و به‌شکل زیر Jobهای مورد نظر خود را اضافه کنید:
    </p>

    <Highlight className="plaintext">
      {`* * * * * cd $ROOT && echo $(date) >> /tmp/time.txt`}
    </Highlight>

    <p>
      درنهایت باید یک فایل با نام <span className="code">entrypoint.sh</span> در
      مسیر اصلی پروژه ایجاد کنید و به‌شکل زیر supercronic و برنامه‌تان را اجرا
      کنید:
    </p>

    <Highlight className="bash">
      {`#!/bin/bash

supercronic /usr/src/app/crontab &

daphne -b 0.0.0.0 -p 80 routeprinter:app`}
    </Highlight>

    <h3 id="limits">محدودیت‌ها</h3>
    <h4>
      {" "}
      استفاده از <span className="code">VOLUME</span>
      در Dockerfile
    </h4>
    <p>
      <Link href="/app-features/file-system">فایل سیستم برنامه‌های لیارا</Link>{" "}
      Read-Only است و شما نمی‌توانید از دستور
      <span className="code">VOLUME</span>
      در Dockerfile استفاده کنید و به‌جای آن باید از قابلیت «
      <Link href="/app-deploy/docker/disks">دیسک‌ها</Link>» استفاده کنید. لازم
      است که این عبارت را قبل از استقرار حذف کنید. چنانچه از{" "}
      <Link href="/app-deploy/docker/deploy-image">Image‌های DockerHub</Link> هم
      استفاده کنید، باید نظیر به‌نظیر
      <span className="code">VOLUME</span>
      هایی که در آن Image تعریف شده، دیسک بسازید و دیسک را در همان مسیر mount
      کنید.
      <br />
      برای مثال، Dockerfile زیر را در نظر بگیرید:
      <Highlight className="dockerfile">
        {`FROM ubuntu

RUN echo hello

VOLUME /path/to/data`}
      </Highlight>
      این فایل برای این‌که بتواند در لیارا مستقر شود، باید خطی که در آن
      <span className="code">VOLUME</span>
      تعریف شده، حذف شود.
      <h4>
        استفاده از <span className="code">EXPOSE</span>
        در Dockerfile
      </h4>
      لیارا از این قسمت از Dockerfile شما صرف‌نظر می‌کند. شما باید حتما پورتی که
      مدنظرتان است را با پارامتر
      <span className="code">--port</span>
      تنظیم کنید. تنها به‌پورت‌های HTTP می‌توانید از خارج از شبکه‌ی لیارا متصل
      شوید. برای مثال اگر یک سرویس مانند RabbitMQ را مستقر کنید، به‌این سرویس
      تنها در شبکه‌ی خصوصی لیارا دسترسی خواهید داشت.
    </p>
  </Layout>
);
