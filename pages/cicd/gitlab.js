import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات CI/CD در GitLab - لیارا</title>
    </Head>

    <h1>فرآیند CI/CD</h1>
    <span className="page-description">
      (Continuous integration and Continuous Delivery)
    </span>

    <Notice variant="warning">
      از این پس برای کاربران جدید GitLab امکان راه‌اندازی فرایند CI/CD نیست زیرا
      برای استفاده از Shared runnerهای رایگان این سرویس باید حساب کاربری خود را
      تایید کنید. به‌همین علت توصیه می‌کنیم پروژه‌ی خود را به سرویس GitHub
      انتقال داده و فرایند CI/CD را با استفاده از GitHub Actions راه‌اندازی
      کنید. <Link href="/cicd/github">توضیحات بیشتر...</Link>
    </Notice>

    <h3>راه‌اندازی CI/CD به وسیله GitLab</h3>
    <p>
      برای راه‌اندازی CI/CD در GitLab از قابلیت{" "}
      <a href="https://docs.gitlab.com/ee/ci/" target="_blank">
        GitLab CI
      </a>{" "}
      استفاده خواهیم کرد و شما نیز باید مراحل زیر را دنبال کنید.
    </p>
    <p>
      یک فایل با نام <span className="code">.gitlab-ci.yml</span> در مسیر اصلی
      پروژه‌ی خود ایجاد کرده و قطعه‌کد زیر را در این فایل قرار دهید:
    </p>
    <Highlight className="yaml">
      {`image: node:16-alpine

stages:
  - update-production

deploy:
  stage: update-production
  only:
    - master
  script:
    - npm i -g @liara/cli@3
    - export http_proxy=http://proxy.liara.ir:6666
    - liara deploy --app APP_NAME --api-token $TOKEN --detach
`}
    </Highlight>
    <Notice variant="info">
      در مثال فوق باید مقدار APP_NAME را با شناسه‌ی برنامه‌تان در لیارا جایگزین
      کنید.
    </Notice>
    <Notice variant="info">
      در صورت نیاز به تنظیم پورتی مانند ۳۰۰۰ که برنامه‌ی شما روی آن اجرا می‌شود
      لازم است پارامتر
      <span className="code">--port=3000</span>
      را هم برای دستور
      <span className="code">liara deploy</span>
      تنظیم کنید.
    </Notice>

    <Notice variant="warning">
      ۱) ایران در لیست تحریم سرویس GitLab قرار دارد بنابراین برای استقرار
      پروژه‌های خود در لیارا باید از پروکسی‌ای که در قطعه‌کد فوق قرار داده شده
      استفاده کنید.
      <br />
      ۲) اگر از سرویس Gitlab.com استفاده نمی‌کنید و GitLab را بر روی سرورهای
      شخصی راه‌اندازی کرده‌اید، نیازی به تنظیم پروکسی نیست.
    </Notice>
    <p>
      همان‌طور که مشاهده می کنید، در قطعه‌کد فوق تمام مراحل لازم برای استقرار یک
      پروژه در لیارا تعریف شده است. در ابتدا ابزار{" "}
      <Link href="/cli/install">Liara CLI</Link> نصب شده و پس از تنظیم پروکسی
      برای استقرار پروژه، دستور <span className="code">liara deploy</span> اجرا
      می‌شود.
    </p>
    <p>
      پس از شخصی‌سازی مقدار APP_NAME در فایل{" "}
      <span className="code">.gitlab-ci.yml</span> باید{" "}
      <a href="https://console.liara.ir/API" target="_blank">
        کلید دسترسی به API
      </a>{" "}
      حساب‌تان را در بخش Variables تنظیمات CI/CD ریپازیتوری GitLab اضافه کنید.
    </p>
    <p>
      برای این کار وارد تنظیمات CI/CD ریپازیتوری شوید و کمی به پایین اسکرول
      کنید. در بخش Variables بر روی گزینه‌ی Expand کلیک کنید تا گزینه‌ی Add
      Variable نمایش داده شود.
    </p>
    <ZoomableImage src="/static/gitlab-ci-cd-variables-settings.png" />
    <p>
      حال برای تعریف یک Variable جدید، روی گزینه‌ی <strong>Add Variable</strong>{" "}
      کلیک کنید. نام (Key) این Variable را <strong>TOKEN</strong> و مقدار آن را
      از صفحه‌ی{" "}
      <a href="https://console.liara.ir/API" target="_blank">
        کلید دسترسی به API
      </a>{" "}
      کپی کرده و در بخش Value قرار دهید. پس از انتخاب گزینه‌های{" "}
      <strong>Protect variable</strong> و <strong>Mask variable</strong>، بر روی
      گزینه‌ی <strong>Add variable</strong> کلیک کنید.
    </p>
    <ZoomableImage src="/static/add-token-variable-in-gitlab-cicd-settings.png" />
    <p>
      در آخر با Push کردن فایل <span className="code">.gitlab-ci.yml</span> در
      ریپازیتوری GitLab متوجه خواهید شد که یک Pipeline به‌صورت خودکار در منوی
      CI/CD ریپازیتوری شما اجرا شده است و شما نیز می‌توانید مراحل استقرار
      پروژه‌ی خود را در صفحه‌ی <strong>تاریخچه</strong> دنبال کنید.
    </p>
  </Layout>
);
