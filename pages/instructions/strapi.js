import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Strapi - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="strapi" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Strapi</h1>
        <span className="page-description">(Strapi Apps)</span>
      </div>
    </div>

    <p>
      Strapi یک CMS مبتنی بر Node.js است که با بسیاری از قابلیت‌ها مانند سادگی و
      تغییر‌پذیری ارائه می‌شود. حال شما می‌توانید برنامه‌ی Strapi خود را با
      ایجاد برنامه‌ی{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> در پنل
      کاربری لیارا و اجرای دستور
      <span className="code">liara deploy --port 3000</span>
      در مسیر اصلی پروژه، بر روی لیارا مستقر کنید.
    </p>
    <p>
      توجه داشته باشید که برای مواجه نشدن با خطای Read-only filesystem باید{" "}
      <Link href="/app-deploy/nodejs/envs">متغیرهای محیطی</Link> زیر را تنظیم
      کنید.
    </p>
    <Highlight className="plaintext">
      {`JWT_SECRET
API_TOKEN_SALT`}
    </Highlight>
    <p>
      برای دیپلوی برنامه‌های Strapi نیازی به ایجاد تغییر در فایل{" "}
      <span className="code">package.json</span> نیست و لیارا به‌طور کامل از این
      CMS پشتیبانی می‌کند بنابراین تغییری در بخش{" "}
      <span className="code">scripts</span> ایجاد نکنید.
    </p>
    <Highlight className="json">{`"scripts": {
    "develop": "strapi develop",
    "start": "strapi start",
    "build": "strapi build",
    "strapi": "strapi"
},`}</Highlight>

    <h3 id="sqlite">استفاده از دیتابیس SQLite</h3>
    <p>
      برای استفاده از دیتابیس SQLite باید در نظر داشته باشید که فایل سیستم
      برنامه‌های لیارا، <Link href="/app-features/file-system">Read-Only</Link>{" "}
      است بنابراین پس از اتمام عملیات استقرار امکان ذخیره‌سازی فایل‌های جدید در
      کنار فایل‌های پروژه وجود ندارد. حال برای استفاده از دیتابیس SQLite باید
      طبق مستندات{" "}
      <Link href="/app-deploy/nodejs/disks">استفاده از دیسک‌ها</Link>، یک دیسک
      جدید ایجاد کرده و دیسک ایجاد شده را به مسیر نگهداری داده‌های دیتابیس مونت
      کنید.
    </p>
    <Highlight className="json">{`{
    "platform": "node",
    "port": 8000,
    "disks": [
        {
            "name": "disk",
            "mountTo": "/app/.tmp"
        }
    ]
}`}</Highlight>

    <h3 id="cors">رفع خطای CORS</h3>
    <p>
      CORS به‌صورت پیش‌فرض در برنامه‌های Strapi فعال است اما درصورتی که تغییراتی
      در پیکربندی این برنامه به‌وجود آورده باشید باید از صحیح بودن origin وارد
      شده نیز اطمینان حاصل کنید:
    </p>
    <Highlight className="javascript">{`// config/middleware.js
module.exports = {
  settings: {
    cors: {
      origin: ["https://example.com", 'https://subdomain.example.com'],
    },
  },
};`}</Highlight>
    <p>
      به‌منظور کسب اطلاعات بیشتر می‌توانید{" "}
      <a
        href="https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/middlewares.html#cors"
        target="_blank"
        rel="noopener"
      >
        مستندات رسمی
      </a>{" "}
      این سیستم مدیریت محتوا را مطالعه کنید.
    </p>

    <h3 id="buckets">اتصال به ذخیره‌سازی ابری</h3>
    <p>
      برای اتصال برنامه‌های Strapi به ذخیره‌سازی ابری لیارا می‌توانید از پلاگین{" "}
      <a
        href="https://market.strapi.io/providers/@strapi-provider-upload-aws-s3"
        target="_blank"
        rel="noopener"
      >
        Amazon S3
      </a>{" "}
      استفاده کرده و به‌شکل زیر این پلاگین را در فایل{" "}
      <span className="code">config/plugins.js</span> پیکربندی کنید:
    </p>
    <Highlight className="javascript">
      {`module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('LIARA_ACCESS_KEY_ID'),
        secretAccessKey: env('LIARA_ACCESS_SECRET'),
        endpoint: env('LIARA_ENDPOINT'),
        params: {
          Bucket: env('LIARA_BUCKET'),
        },
      },
    },
  },
  // ...
});`}
    </Highlight>
  </Layout>
);
