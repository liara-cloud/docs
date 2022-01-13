import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های NextJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/next.svg"
        alt="nextjs"
      />
      <div className="page-title">
        <h1>استقرار برنامه‌های NextJS</h1>
        <span className="page-description">(NextJS Apps)</span>
      </div>
    </div>

    <p>
      NextJS یک فریم‌ورک مبتنی بر React است که بسیاری از قابلیت‌ها مانند SSR را
      برای شما به ارمغان می‌آورد و شما می‌توانید برنامه‌های NextJS خود را با
      ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا
      دیپلوی کنید.
    </p>
    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های NextJs نیازی به ایجاد تغییر در
      فایل <span className="code">package.json</span> نیست و لیارا به‌طور کامل
      از این فریم‌ورک پشتیبانی می‌کند بنابراین تغییری در بخش{" "}
      <span className="code">scripts</span> ایجاد نکنید.
    </p>
    <Highlight className="json">{`"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
},`}</Highlight>

    <p>
      حالت استاندارد npm scripts در برنامه‌های NextJS به‌شکل بالا است. در نهایت
      دستور
      <span className="code">liara deploy --port 3000 --platform node</span>
      را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
    </p>

    <h3>Static HTML Export</h3>
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
      preloading و dynamic imports پشتیبانی می‌کند.
    </p>
    <p>
      برای استفاده از این قابلیت بایستی اسکریپت build برنامه‌ی خود را در فایل{" "}
      <span className="code">package.json</span> به‌شکل زیر تغییر دهید.
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
      و درنهایت دستور <span className="code">npm run build</span> را اجرا کنید
      تا خروجی‌های نهایی در مسیر پیش‌فرض <span className="code">out</span> قرار
      بگیرند.
    </p>
    <p>
      حال برای استقرار خروجی نهایی در لیارا کافیست که یک برنامه‌ی{" "}
      <Link href="/app-deploy/static/getting-started">Static</Link> در پنل
      کاربری خود ایجاد کرده و برنامه‌ی خود را با اجرای دستور{" "}
      <span className="code">liara deploy --path out</span> بر روی لیارا مستقر
      کنید.
    </p>

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
