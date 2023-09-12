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
        <a href="#cache-status">مشخص کردن وضعیت Cache</a>
      </li>
      <li>
        <a href="#arg">شخصی سازی ARG در هنگام بیلد</a>
      </li>
      <li>
        <a href="#commands">اجرا کردن دستورات با Args</a>
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
      در ریشه‌ پروژه‌تان ایجاد کرده و نمونه قطعه‌کد زیر را درون این فایل قرار
      بدید:
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

    <h3 id="cache-status">مشخص کردن وضعیت Cache</h3>

    <p>
      می‌توانید مشخص کنید که در هنگام فرآیند بیلد از کش استفاده شود یا خیر. برای
      این کار می‌توانید از یکی از دو روش زیر استفاده کنید:
    </p>
    <p>
      ۱) یک فایل با نام
      <span className="code">liara.json</span>
      در ریشه‌ پروژه‌تان ایجاد کرده و نمونه قطعه‌کد زیر را درون این فایل قرار
      بدید:
    </p>

    <Highlight className="json">
      {`{
  "platform": "docker",
  "build": {
    "cache": false // default true
  }
}
`}
    </Highlight>

    <p>
      ۲) در دستور
      <span className="code">liara deploy</span>
      وضعیت
      <span className="code">Cache</span>
      را با پارامتر
      <span className="code">--cache</span>
      مشخص کنید.
    </p>

    <Highlight className="bash">
      {`liara deploy --platform=docker --cache=false`}
    </Highlight>

    <h3 id="arg">شخصی سازی ARG در هنگام بیلد</h3>

    <p>
      شما می‌توانید در هنگام بیلد ARG‌های‌تان را با استفاده از یکی از دو روش‌های
      زیر شخصی سازی کنید:
    </p>
    <p>
      ۱) یک فایل با نام
      <span className="code">liara.json</span>
      در ریشه‌ پروژه‌تان ایجاد کرده و نمونه قطعه‌کد زیر را درون این فایل قرار
      بدید:
    </p>

    <Highlight className="json">
      {`{
  "platform": "docker",
  "build": {
    "args": ["APP_VERSION=2.0.0"]
  }
}
`}
    </Highlight>

    <p>
      ۲) در دستور
      <span className="code">liara deploy</span>
      با پارامتر
      <span className="code">build-arg</span>
      ARG‌های‌تان را شخصی سازی کنید.
    </p>

    <Highlight className="bash">
      {`liara deploy --platform=docker --build-arg="APP_VERSION=2.0.0"`}
    </Highlight>

    <h3 id="commands">اجرا کردن دستورات با Args</h3>

    <p>
      برای مقداردهی build argها در زمان استقرار، می‌توانید از یکی از دو روش زیر
      استفاده کنید:
    </p>
    <p>
      ۱) یک فایل با نام
      <span className="code">liara.json</span>
      در ریشه‌ پروژه‌تان ایجاد کرده و نمونه قطعه‌کد زیر را درون این فایل قرار
      بدید:
    </p>

    <Highlight className="json">
      {`{
  "platform": "docker",
  "args": [
    "sh",
    "-c",
    "sleep 10 && /entrypoint.sh run"
  ]
}
`}
    </Highlight>

    <p>
      ۲) در دستور
      <span className="code">liara deploy</span>
      دستورات‌تان را با پارامتر
      <span className="code">--args</span>
      مشخص کنید.
    </p>

    <Highlight className="bash">
      {`liara deploy --platform=docker --args="sh -c sleep 10 && /entrypoint.sh run"`}
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
