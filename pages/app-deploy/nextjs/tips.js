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
        <a href="#next-cache">افزایش فضای مسیر Cache</a>
      </li>
      <li>
        <a href="#next-isr">استفاده از قابلیت ISR</a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
      <li>
        <a href="#next-static-assets">Static Assets</a>
      </li>
    </ul>

    <h3 id="next-public-envs">بیلد متغیر‌های محیطی برای مرورگر</h3>
    <p>
      با اضافه شدن قابلیت لود متغیرهای محیطی در برنامه‌های NextJS، این امکان
      فراهم شده تا با قرار دادن پیشوند{" "}
      <span className="code">NEXT_PUBLIC_</span> برای متغیرها، در سمت مرورگر نیز
      به متغیرهای محیطی دسترسی پیدا کنید. برای تعریف و استفاده از این متغیرها در
      لیارا، می‌بایست متغیر‌های برنامه‌تان را در بخش تنظیمات پنل برنامه‌تان با
      پیشوند <span className="code">NEXT_PUBLIC_</span> تعریف کرده تا در هنگام
      بیلد، به آن‌ها دسترسی داشته باشید.
    </p>
    <Notice variant="warning">
      توجه داشته باشید که متغیر‌های تعریف شده در بخش تنظیمات پنل برنامه‌تان، بر
      متغیر‌های فایل
      <span className="code">.env.production</span> اولویت دارد.
    </Notice>

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
      همچنین اگر شما از Next Image استفاده می‌کنید باید هاست‌های‌تان را در فایل{" "}
      <span className="code">next.config.js</span>
      اضافه کنید. برای مثال نمونه کد زیر به تمام هاست‌ها اجازه دسترسی می‌دهد که
      شما می‌توانید این مورد به صورت دلخواه تغییر بدید.
    </p>
    <Highlight className="json">
      {`module.exports = {
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
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

    <h3 id="next-cache">افزایش فضای مسیر Cache</h3>
    <p>
      فریم‌ورک Next.js به‌صورت پیش‌فرض فایل‌های کش (Cache) را در مسیر
      <span className="code">.next/cache</span>
      ذخیره می‌کند. در لیارا به‌دلیل{" "}
      <a href="/app-features/file-system">ReadOnly</a> بودن فایل سیستم این مسیر
      قابل نوشتن نیست. به‌همین دلیل این مسیر به مسیر
      <span className="code">/tmp</span>
      لینک شده است.
      <span className="code">/tmp</span>
      در فایل‌سیستم هر برنامه، قابل نوشتن است و درواقع{" "}
      <Link href="/app-features/file-system">ReadOnly</Link> نیست، اما محدودیت
      ۱۰۰ مگابایتی دارد. این محدودیت به‌این معناست که اگر حجم فایل‌های کش شما
      بزرگ‌تر از ۱۰۰ مگابایت باشد، با خطا مواجه خواهید شد. برای رفع این محدودیت،
      می‌توانید از قابلیت <Link href="/app-deploy/nodejs/disks">دیسک‌ها</Link>{" "}
      استفاده کنید و دیسکی با اندازه‌ی دلخواه‌تان بسازید و به‌پوشه‌ی
      <span className="code">/tmp</span>
      متصل کنید.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که استفاده از ماژول{" "}
      <a
        href="https://nextjs.org/docs/pages/api-reference/components/image"
        target="_blank"
      >
        next/image
      </a>{" "}
      باعث افزایش مصرف منابع RAM برنامه‌‌ی شما می‌شود. ولی می‌توانید طبق{" "}
      <a
        href="https://nextjs.org/docs/pages/api-reference/components/image#minimumcachettl"
        target="_blank"
      >
        مستندات
      </a>{" "}
      Next.js تنظیمات minimumCacheTTL را اعمال کنید تا فایل‌های کش (Cache) برای
      مدت بیشتری نگهداری شوند.
    </Notice>

    <h3 id="next-isr">استفاده از قابلیت ISR</h3>
    <p>
      برای استفاده از{" "}
      <a
        href="https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"
        target="_blank"
      >
        قابلیت ISR
      </a>{" "}
      فریم‌ورک Next.js در پلتفرم لیارا نیاز است به مسیری که صفحات ساخته شده در
      آن ذخیره می‌شوند، <Link href="/app-deploy/nodejs/disks">دیسک</Link> مونت
      کنید. چرا که فایل سیستم لیارا{" "}
      <a href="/app-features/file-system">ReadOnly</a> است و امکان نوشتن در آن
      مسیر به‌صورت پیش‌فرض وجود ندارد.
      <br />
      اگر از مسیر <span className="code">pages</span> برای ساخت صفحات استفاده
      می‌کنید، نیاز است دیسک را به مسیر{" "}
      <span className="code">.next/server/pages</span> مونت کنید. ولی در صورت
      استفاده از مسیر <span className="code">app</span> نیاز است دیسک را به مسیر{" "}
      <span className="code">.next/server/app</span> مونت کنید.
    </p>

    <Notice variant="info">
      لازم به ذکر است که با هر بار دیپلوی یا ری‌استارت برنامه‌تون، فایل‌های کش
      (Cache) شده و صفحات ساخته شده در این مسیرها حذف خواهند شد.
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

    <h3 id="next-static-assets">Static Assets</h3>
    <p>
      در Next.js می‌توانید فایل‌های استاتیک مانند تصاویر را در یک پوشه به نام
      <span className="code">public</span> در مسیر اصلی پروژه قرار دهید. سپس
      فایل‌های موجود در مسیر
      <span className="code">public</span> از طریق روت دامنه با شروع از{" "}
      <span className="code">(/)</span> در دسترس هستند. برای مثال اگر شما یک
      فایل به نام <span className="code">example.png</span> در پوشه‌ی{" "}
      <span className="code">public</span> داشته باشید، می‌توانید طبق مسیر زیر
      به این فایل دسترسی داشته باشید:
    </p>

    <Highlight className="bash">{`https://yourdomain.com/example.png`}</Highlight>

    <p>
      برای دسترسی به فایل <span className="code">example.png</span> در سورس‌کد:
    </p>

    <Highlight className="javascript">
      {`
import Image from 'next/image'

export function Example() {
  return <Image src="/example.png" width="64" height="64" />
}`}
    </Highlight>

    <p>
      {" "}
      پوشه <span className="code">public</span> برای <strong>robots.txt</strong>{" "}
      ،<strong>favicon.ico</strong> ،<strong>Google Site Verification</strong>{" "}
      مفید است. نام این پوشه حتما باید <span className="code">public</span>{" "}
      نام‌گذاری شود و نام آن را نمی توان تغییر داد و تنها مسیری است که برای
      ارائه فایل‌های استاتیک استفاده می شود.
    </p>

    <p>
      توجه داشته باشید که فقط فایل‌های استاتیکی که در پوشه‌ی{" "}
      <span className="code">public</span> در زمان <strong>Build</strong> هستند
      توسط Next.js ارائه می شوند. فایل‌های اضافه شده در زمان اجرا، در دسترس
      نخواهند بود. برای ذخیره‌ی دائمی فایل‌ها، توصیه می‌‌شود از سرویس
      <Link href="/buckets/about"> ذخیره‌ سازی ابری</Link> لیارا استفاده کنید.
    </p>
  </Layout>
);
