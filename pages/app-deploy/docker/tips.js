import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های Docker - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3> توضیحات و نکات تکمیلی</h3>

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
      برای مثال برای راه‌اندازی یک{" "}
      <Link href="/instructions/asgi">ASGI server</Link> می‌توانید به‌شکل زیر
      عمل کنید:
    </p>

    <Highlight className="dockerfile">{`FROM python:3.9

WORKDIR /usr/src/app

COPY --from=liaracloud/supercronic:v0.1.11 \\
     /usr/local/bin/supercronic /usr/local/bin/supercronic

COPY ./requirements.txt ./requirements.txt

RUN python -m pip install --upgrade pip \\
    && pip install --no-cache-dir --upgrade -r ./requirements.txt \\
    && python -m pip install daphne

COPY . .

RUN chmod +x /usr/src/app/entrypoint.sh

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]`}</Highlight>
    <p>
      سپس می‌توانید یک فایل با نام <span className="code">crontab</span> در مسیر
      اصلی پروژه‌ی خود ایجاد کرده و به‌شکل زیر Jobهای مورد نظر خود را اضافه
      کنید:
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
