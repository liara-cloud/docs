import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import Notice from "../../components/Notice";

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
      <a href="https://github.com/strapi">Strapi</a> یک headless CMS متن‌باز است
      که برای توسعه وب‌سایت‌ها، برنامه‌های موبایل، سایت‌های تجاری و حتی APIها به
      کار می‌رود. Strapi به شما این امکان را می‌دهد که بدون دانستن چیزخاصی در
      مورد بک‌اند یا دیتابیس‌ها، APIهای خود را خلق کنید. این سیستم APIها را بر
      اساس مدل‌های محتوایی، به صورت خودکار می‌سازد و در نهایت داده را بیش از
      پیش، ساده‌تر به نمایش می‌گذارد.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#strapi-sqlite">استقرار برنامه Strapi با دیتابیس SQLite</a>
      </li>
      <li>
        <a href="#strapi-mongodb">اتصال برنامه Strapi به دیتابیس MongoDB</a>
      </li>
      <li>
        <a href="#strapi-s3">
          اتصال برنامه Strapi به فضای ذخیره‌سازی ابری لیارا
        </a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
    </ul>

    <h3 id="strapi-sqlite">استقرار برنامه Strapi با دیتابیس SQLite</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/strapi/strapi-sqlite.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/strapi-getting-started/tree/master">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>
    <p>
      شما می‌توانید برنامه‌ی Strapi خود را با ایجاد برنامه‌ی{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> در پنل
      کاربری لیارا و اجرای دستور
      <span className="code">liara deploy --port 3000</span>
      در مسیر اصلی پروژه، بر روی لیارا مستقر کنید.
    </p>
    <p>
      در ابتدا، باید متغیرهای محیطی موجود در فایل{" "}
      <span className="code">.env</span> برنامه Strapi خود را طبق مستندات{" "}
      <Link href="/app-deploy/nodejs/envs">متغیرهای محیطی</Link> به برنامه
      NodeJS اضافه کنید. به عنوان مثال، متغیرهای زیر با مقادیر فرضی زیر، حتماً
      باید به برنامه اضافه شوند:
    </p>
    <Highlight className="plaintext">
      {`APP_KEYS=qDSFzezRjBb9CWRgYTNKAQ==,a425msyZKCQLciHemU5XjA==,nRmH9IqqkiKahdd9wE+AXg==,szU9KUlV56pzOVDYynbdKA==
API_TOKEN_SALT=KHPr2aDzbEhFe56iBRLa6w==
ADMIN_JWT_SECRET=thazfV/lEGoPPZAqlJGsJg==
TRANSFER_TOKEN_SALT=X7FvBRJ+T4ddz3yM2ZMv8g==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=qvyu4YsbaS03suqri3sZVQ==`}
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

    <p>
      برای استفاده از دیتابیس SQLite باید در نظر داشته باشید که فایل سیستم
      برنامه‌های لیارا، به صورت پیش‌فرض،{" "}
      <Link href="/app-features/file-system">Read-Only</Link> است بنابراین پس از
      اتمام عملیات استقرار امکان ذخیره‌سازی فایل‌های جدید در کنار فایل‌های پروژه
      وجود ندارد. حال برای استفاده از دیتابیس SQLite باید طبق مستندات{" "}
      <Link href="/app-deploy/nodejs/disks">استفاده از دیسک‌ها</Link>، یک دیسک
      جدید ایجاد کرده و دیسک ایجاد شده را به مسیر نگهداری داده‌های دیتابیس مونت
      کنید. همچنین برای آپلود media به دیسک دومی نیز، نیاز دارید که باید آن را
      نیز مانند دیسک اول، ایجاد کنید:
    </p>
    <Highlight className="json">{`{
    "disks": [
        {
            "name": "database",
            "mountTo": "/app/.tmp"
        },
        {
            "name": "media",
            "mountTo": "/app/public/uploads"
        }
    ]
}`}</Highlight>
    <p>
      در نهایت پس از ثبت متغیرهای محیطی و اتصال دیسک‌ها، می‌توانید با اجرای
      دستور <span className="code">liara deploy --port 3000</span> برنامه Strapi
      خود را بدون هیچ مشکلی، در لیارا مستقر کنید.
    </p>

    <h3 id="strapi-mongodb">اتصال برنامه Strapi به دیتابیس MongoDB</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/strapi/strapi-mongodb.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/strapi-getting-started/tree/mongodb-conf">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>
    <p>
      برای اتصال برنامه Strapi خود، فقط کافیست تا در کنار برنامه NodeJS، یک
      دیتابیس <a href="/databases/mongodb/install">MongoDB</a> نیز، ایجاد کنید.
      سپس می‌توانید با استفاده از نرم‌افزار MongoDB Compass (یا هر ابزار دیگری)
      به MongoDB متصل شوید و یک دیتابیس جدید به نام strapi ایجاد کنید. در نهایت،
      محتوای <span className="code">config/database.js</span> برنامه Strapiتان،
      باید مانند قطعه کد زیر باشد:
    </p>
    <Highlight className="js">
      {`module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'localhost'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', ''),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
`}
    </Highlight>
    <p>
      در ادامه، باید متغیرهای محیطی مربوط به دیتابیس را به برنامه NodeJS اضافه
      کنید؛ بهتر است که هم دیتابیس و هم برنامه NodeJS در یک{" "}
      <a href="/app-features/private-network">شبکه خصوصی</a> قرار داده شوند تا
      از طریق اطلاعات شبکه خصوصی به دیتابیس متصل شوید؛ مثلاً:
    </p>
    <Highlight className="plaintext">
      {`DATABASE_HOST=mongodb
DATABASE_PORT=27017
DATABASE_NAME=strapi
DATABASE_USERNAME=root
DATABASE_PASSWORD=YDwHkbMjooP62S5Q5msD563s`}
    </Highlight>
    <p>
      پس از اتمام کارهای فوق، می‌توانید برنامه خود را با اجرای دستور{" "}
      <span className="code">liara deploy --port 3000</span> در لیارا مستقر
      کنید.
    </p>
    <Notice variant="warning">
      توجه داشته باشید که Strapi v4 از دیتابیس MongoDB پشتیبانی نمی‌کند و شما
      می‌توانید تنها در Strapi v3 از این دیتابیس استفاده کنید.
    </Notice>

    <h3 id="strapi-s3">اتصال برنامه Strapi به فضای ذخیره‌سازی ابری لیارا</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/strapi/strapi-s3.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/strapi-getting-started/tree/use-s3">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <p>
      برای اتصال برنامه Strapi خود به{" "}
      <a href="/buckets/about">فضای ذخیره‌سازی ابری لیارا</a> در ابتدا باید پکیج
      زیر را با استفاده از <span className="code">npm</span> نصب کنید:
    </p>
    <Highlight className="shell">
      {`npm install @strapi/provider-upload-aws-s3`}
    </Highlight>
    <p>
      در ادامه، بایستی قطعه کد زیر را به فایل{" "}
      <span className="code">config/plugins.js</span> اضافه کنید:
    </p>

    <Highlight className="js">
      {`module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('LIARA_ACCESS_KEY_ID'),
          secretAccessKey: env('LIARA_ACCESS_SECRET'),
          region: env('LIARA_REGION'),
          endpoint: env('LIARA_ENDPOINT'), // Add endpoint variable here
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('LIARA_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });`}
    </Highlight>

    <p>
      همچنین بایستی در فایل <span className="code">config/middlewares.js</span>{" "}
      قطعه کد زیر را به آرایه‌های img-src و media-src اضافه کنید:
    </p>
    <Highlight className="shell">
      {`'NAME.storage.iran.liara.space',`}
    </Highlight>
    <p>
      در کد فوق، به جای <span className="code">NAME</span> باید نام باکت خود را
      وارد کنید. در نهایت کافیست تا متغیرهای محیطی مربوط به باکت را به برنامه
      NodeJS که Strapi روی آن مستقر است، اضافه کنید؛ به عنوان مثال:
    </p>
    <Highlight className="plaintext">
      {`LIARA_ACCESS_KEY_ID=73f8u0nhgrseognt
LIARA_ACCESS_SECRET=bea78f17-904e-4e64-8d2e-f009834e41f1
LIARA_REGION=us-east-1
LIARA_ENDPOINT=https://storage.iran.liara.space
LIARA_BUCKET=strapi-bucket`}
    </Highlight>
    <p>
      سپس، می‌توانید با استفاده از دستور{" "}
      <span className="code">liara deploy --port 3000</span> برنامه Strapi خود
      را در لیارا مستقر کنید.
    </p>

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
      <a href="https://docs.strapi.io/" target="_blank" rel="noopener">
        مستندات رسمی
      </a>{" "}
      این سیستم مدیریت محتوا را مطالعه کنید.
    </p>
  </Layout>
);
