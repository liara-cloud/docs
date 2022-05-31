import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های NextJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="next" />
      <div className="page-title">
        <h1>استقرار برنامه‌های NextJS</h1>
        <span className="page-description">(NextJS Apps)</span>
      </div>
    </div>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#deploy">استقرار برنامه‌های NextJS</a>
      </li>
      <li>
        <a href="#next-public-envs">نحوه‌ی استفاده از متغیرهای NEXT_PUBLIC</a>
      </li>
      <li>
        <a href="#static-html-export">قابلیت Static HTML Export</a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
    </ul>

    <h3 id="deploy">استقرار برنامه‌های NextJS</h3>

    <p>
      NextJS یک فریم‌ورک مبتنی بر React است که امکان پیاده‌سازی وبسایت‌های SSR و
      SSG را برای شما فراهم می‌کند. حال شما می‌توانید برنامه‌های NextJS خود را
      با ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/docker/getting-started">Docker</Link> بر روی لیارا
      مستقر کنید.
    </p>

    <p>
      در قدم اول، یک فایل با نام <span className="code">Dockerfile</span> در
      ریشه‌ی برنامه‌‌ی‌تان بسازید و سپس قطعه‌کد زیر را در این فایل قرار دهید:
    </p>

    <Highlight className="dockerfile">
      {`FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./ 
RUN npm ci

# If using yarn with a \`yarn.lock\` comment out above and use below instead
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# If using yarn comment out above and use below instead
# RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]`}
    </Highlight>

    <p>
      در قدم بعد، قطعه‌کد زیر را به فایل{" "}
      <span className="code">next.config.js</span> اضافه کنید:
    </p>

    <Highlight className="javascript">
      {`module.exports = {
  // ... rest of the configuration.
  experimental: {
    outputStandalone: true,
  },
}`}
    </Highlight>
    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های NextJs نیازی به ایجاد تغییر در
      فایل <span className="code">package.json</span> نیست بنابراین تغییری در
      بخش <span className="code">scripts</span> ایجاد نکنید.
    </p>
    <Highlight className="json">
      {`"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
},`}
    </Highlight>

    <p>
      در مرحله‌ی آخر دستور
      <span className="code">liara deploy --port 3000 --platform docker</span>
      را در مسیر اصلی پروژه‌ی خود اجرا کنید تا برنامه‌ی شما در لیارا مستقر و
      اجرا شود.
    </p>

    <h3 id="next-public-envs">نحوه‌ی استفاده از متغیرهای NEXT_PUBLIC</h3>
    <p>
      با اضافه شدن قابلیت لود متغیرهای محیطی از فایل env به برنامه‌های NextJS،
      این امکان فراهم شده تا با قرار دادن پیشوند{" "}
      <span className="code">NEXT_PUBLIC_</span> برای متغیرها، در فرانت‌اند
      برنامه نیز به متغیرهای محیطی دسترسی پیدا کنید. برای تعریف و استفاده از
      متغیرهای <span className="code">NEXT_PUBLIC</span> در لیارا باید یک فایل
      با نام <span className="code">.env.production</span> در مسیر اصلی پروژه‌ی
      خود تعریف کنید و متغیرهای مورد نظر خود را در این فایل مقداردهی کنید.
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

    {/* <h3 id="read-only">رفع خطای Read-only filesystem</h3>

    <p>
      در صورتی که برنامه‌تان برای ایجاد تغییر در مسیر{" "}
      <span className="code">/app/.next</span> با خطای Read-only filesystem
      مواجه شد باید با استفاده از قابلیت{" "}
      <Link href="app-deploy/nodejs/disks">دیسک‌ها</Link> ، یک دیسک به مسیر{" "}
      <span className="code">/app/.next</span> مونت کنید:
    </p>

    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "disk-name",
      "mountTo": "/app/.next"
    }
  ]
}`}
    </Highlight>

    <p>
      همچنین باید فایل <span className="code">package.json</span> پروژه‌تان را
      به‌شکل زیر ویرایش کنید:
    </p>

    <Highlight className="json">
      {`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "rm -rf /app/.next/ && next start",
  "lint": "next lint"
},`}
    </Highlight>

    <p>
      درنهایت می‌توانید با اجرای دستور{" "}
      <span className="code">liara deploy --platform node --port 3000</span>،
      پروژه‌ی خود را بر روی برنامه‌های NodeJS لیارا مستقر کنید.
    </p> */}
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
