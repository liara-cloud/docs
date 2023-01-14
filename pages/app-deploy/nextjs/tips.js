import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های NextJS - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="next" />
      <div className="page-title">
        <h1>پلتفرم NextJS</h1>
        <span className="page-description">(NextJS Platform)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#next-public-envs">نحوه‌ی استفاده از متغیرهای NEXT_PUBLIC</a>
      </li>
      <li>
        <a href="#static-html-export">قابلیت Static HTML Export</a>
      </li>
      <li>
        <a href="#next-config">
          جلوگیری از اعمال تغییرات در فایل next.config.js
        </a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
    </ul>

    <h3 id="next-public-envs">نحوه‌ی استفاده از متغیرهای NEXT_PUBLIC</h3>
    <p>
      با اضافه شدن قابلیت لود متغیرهای محیطی از فایل env به برنامه‌های NextJS،
      این امکان فراهم شده تا با قرار دادن پیشوند{" "}
      <span className="code">NEXT_PUBLIC_</span> برای متغیرها، در سمت مرورگر نیز
      به متغیرهای محیطی دسترسی پیدا کنید. برای تعریف و استفاده از متغیرهای{" "}
      <span className="code">NEXT_PUBLIC</span> در لیارا باید یک فایل با نام{" "}
      <span className="code">.env.production</span> در مسیر اصلی پروژه‌ی خود
      تعریف کنید و متغیرهای مورد نظر خود را در این فایل مقداردهی کنید.
    </p>

    <h3 id="static-html-export">قابلیت Static HTML Export</h3>
    <p>
      قابلیت{" "}
      <a
        href="https://nextjs.org/docs/advanced-features/static-html-export"
        target="_blank"
      >
        Static HTML Export
      </a>{" "}
      این امکان را فراهم کرده تا شما از برنامه‌های NextJS خود، خروجی static HTML
      بگیرید و دیگر نیازی به سرور NodeJS نخواهید داشت. همچنین خروجی نهایی تقریبا
      از تمام ویژگی‌های ارائه شده در NextJS مانند dynamic routes، prefetching،
      preloading و dynamic imports پشتیبانی می‌کند اما این روش مناسب صفحه‌های
      لندینگ، وبلاگ‌ها، سامانه‌های خبری و وبسایت‌های مشابه است زیرا باید
      داده‌های وبسایت در زمان build در دسترس باشند.
    </p>
    <p>
      برای استفاده از این قابلیت باید اسکریپت build برنامه‌ی خود را در فایل{" "}
      <span className="code">package.json</span> به‌شکل زیر ویرایش کنید:
    </p>
    <Highlight className="json">
      {`"scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "lint": "next lint"
},`}
    </Highlight>
    <p>
      همچنین توجه داشته باشید در زمان استفاده از قابلیت Static HTML Export،
      امکان بهینه‌سازی تصاویر وجود ندارد بنابراین باید قابلیت بهینه‌سازی تصاویر
      را در فایل <span className="code">next.config.js</span> غیرفعال کنید:
    </p>
    <Highlight className="json">
      {`module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}`}
    </Highlight>
    <p>
      درنهایت دستور <span className="code">npm run build</span> را اجرا کنید تا
      خروجی‌های نهایی در مسیر پیش‌فرض <span className="code">out</span> قرار
      بگیرند.
    </p>
    <p>
      حال برای استقرار خروجی نهایی در لیارا کافیست که یک برنامه‌ی{" "}
      <Link href="/app-deploy/static/getting-started">Static</Link> در پنل
      کاربری خود ایجاد کرده و برنامه‌ی خود را با اجرای دستور{" "}
      <span className="code">liara deploy --path out</span> بر روی لیارا مستقر
      کنید.
    </p>

    <h3 id="next-config">جلوگیری از اعمال تغییرات در فایل next.config.js</h3>
    <p>
      لیارا به‌صورت خودکار فایل
      <span className="code">next.config.js</span>
      برنامه‌ی شما را پیدا کرده و در این فایل، تنظیماتی را اضافه می‌کند تا
      برنامه برای اجرا آماده شود. چنانچه قصد جلوگیری از اعمال این تغییرات را
      دارید، باید فایل <span className="code">liara.json</span> زیر را به‌ریشه‌ی
      برنامه‌ی‌تان اضافه کنید:
    </p>
    <Highlight className="json">
      {`{
  "next": {
    "modifyConfig": false
  }
}
`}
    </Highlight>
    <Notice variant="warning">
      توجه داشته باشید که فقط و فقط این قابلیت را زمانی غیرفعال کنید که کاملا
      به‌نتایج آن آگاه باشید.
    </Notice>

    <h3 id="cors">رفع خطای CORS</h3>
    <p>
      با وجود انواع مختلف فریم‌ورک‌ها، برای رفع خطای CORS راه حل‌های متفاوتی
      وجود دارد. برای مثال در فریم‌ورک NextJS باید طبق{" "}
      <a
        href="https://nextjs.org/docs/api-routes/api-middlewares#connectexpress-middleware-support"
        target="_blank"
      >
        مستندات رسمی
      </a>{" "}
      این فریم‌ورک، پکیج{" "}
      <a href="https://www.npmjs.com/package/cors" target="_blank">
        cors
      </a>{" "}
      را نصب کرده:
    </p>
    <Highlight className="bash">{`$ npm i cors`}</Highlight>
    <p>و به‌شکل زیر از آن در برنامه‌ی خود استفاده کنید:</p>
    <Highlight className="javascript">{`import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}

export default handler`}</Highlight>
  </Layout>
);
