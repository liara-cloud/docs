import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های NodeJS - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#nodejs-version">انتخاب نسخه‌ی NodeJS</a>
      </li>
      <li>
        <a href="#build-script">ES6 و build کردن برنامه</a>
      </li>
      <li>
        <a href="#proxy">تنظیمات TrustedProxies</a>
      </li>
      <li>
        <a href="#graphql-error">رفع خطای GET query missing در GraphQL</a>
      </li>
      <li>
        <a href="#timezone">تنظیم منطقه‌ی زمانی (TimeZone)</a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
    </ul>

    <h3 id="nodejs-version">انتخاب نسخه‌ی NodeJS</h3>
    <p>
      به‌صورت پیش‌فرض، برنامه‌ی شما روی نسخه‌ی ۱۶ این پلتفرم اجرا می‌شود. در
      صورتی که قصد دارید نسخه دیگری را برای اجرای برنامه‌ی‌تان استفاده کنید
      می‌توانید داخل فایل <span className="code">liara.json</span> بخش زیر را
      اضافه کنید: (فایل زیر برای یک برنامه تستی در نظر گرفته شده است.)
    </p>
    <Highlight className="json">
      {`{
  "platform": "node",
  "app": "nodejs-starter",
  "port": 8000,
  "node": {
    "version": "14"
  }
}`}
    </Highlight>
    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌شود:</p>
    <ul>
      <li>8</li>
      <li>10</li>
      <li>12</li>
      <li>14</li>
      <li>
        <b>16 (پیش‌فرض)</b>
      </li>
    </ul>

    <h3 id="build-script">ES6 و build کردن برنامه</h3>
    <p>
      اگر برنامه‌ی‌تان را با ES6 و یا بالاتر نوشته‌اید و برنامه‌ی‌تان قبل از
      اجرا شدن، نیاز به build شدن دارد، باید یک اسکریپت دیگر با نام
      <span className="code">build</span>
      تعریف کنید و دستورات لازم برای build شدن برنامه‌ی‌تان را داخل{" "}
      <span className="code">package.json</span> تعریف کنید.
      <br />
      برای نمونه:
    </p>
    <Highlight className="json">
      {`{
  "scripts": {
    "start": "node build/server.js",
    "build": "gulp build"
  }
}`}
    </Highlight>

    <h3 id="proxy">تنظیمات TrustedProxies</h3>
    <p>
      با توجه به این نکته که تمامی درخواست‌ها توسط{" "}
      <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank">
        Reverse proxy
      </a>{" "}
      لیارا به برنامه‌ی شما هدایت می‌شود باید در زمان استفاده از فریم‌ورک‌های
      مختلف برای مشاهده‌ی IP واقعی کاربران و بسیاری از قابلیت‌های دیگر تعیین
      کنید که برنامه‌ی شما در پشت یک Reverse proxy راه‌اندازی شده است.
    </p>

    <h4>فریم‌ورک Express</h4>
    <Highlight className="javascript">
      {`const app = express();
app.set("trust proxy", 1);`}
    </Highlight>

    <h4>فریم‌ورک Koa</h4>
    <Highlight className="javascript">
      {`const app = new Koa({ proxy: true });
// or
const app = new Koa();
app.proxy = true;`}
    </Highlight>

    <h3 id="graphql-error">
      رفع خطای <span className="code">GET query missing</span> در GraphQL
    </h3>
    <p>
      قابلیت Playground در Apollo Server در محیط Production به‌صورت پیش‌فرض
      غیرفعال است. برای فعال‌سازی، لازم است تا فیلدهای
      <span className="code">introspection</span>و
      <span className="code">playground</span>
      را برابر با <span className="code">true</span>
      تنظیم و سپس دیپلوی کنید.
    </p>
    <Highlight className="javascript">
      {`const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(\`🚀 Server ready at \${url}\`);
});`}
    </Highlight>
    <p>
      منبع:{" "}
      <a
        href="https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/#enabling-graphql-playground-in-production"
        target="_blank"
      >
        Enabling GraphQL Playground in production
      </a>
    </p>

    <h3 id="timezone">تنظیم منطقه‌ی زمانی (TimeZone)</h3>
    <p>
      به صورت پیش‌فرض، منطقه‌ی زمانی بر روی Asia/Tehran تنظیم شده است. برای
      تغییر مقدار پیش‌فرض، می‌توانید از پارامتر
      <span className="code">timezone</span>
      در فایل <span className="code">liara.json</span>
      استفاده کنید. برای نمونه:
    </p>
    <Highlight className="json">
      {`{
  "platform": "node",
  "app": "nodejs-starter",
  "port": 8000,
  "node": {
    "timezone": "America/Los_Angeles"
  }
}`}
    </Highlight>

    <h3 id="cors">رفع خطای CORS</h3>
    <h4>فریم‌ورک Express</h4>
    <p>
      با وجود انواع مختلف فریم‌ورک‌ها، برای رفع خطای CORS راه حل‌های متفاوتی
      وجود دارد. برای مثال در فریم‌ورک Express باید طبق{" "}
      <a
        href="https://expressjs.com/en/resources/middleware/cors.html"
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
    <Highlight className="javascript">{`const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())`}</Highlight>

    <h4>فریم‌ورک Fastify</h4>
    <p>
      به‌منظور رفع خطای CORS در فریم‌ورک Fastify باید به‌شکل زیر از افزونه‌ی{" "}
      <a
        href="https://github.com/fastify/fastify-express"
        target="_blank"
        rel="noopener"
      >
        fastify-express
      </a>{" "}
      و پکیج{" "}
      <a
        href="https://www.npmjs.com/package/cors"
        target="_blank"
        rel="noopener"
      >
        cors
      </a>{" "}
      در برنامه‌ی خود استفاده کنید:
    </p>
    <Highlight className="javascript">{`await fastify.register(require('fastify-express'))
fastify.use(require('cors')())`}</Highlight>
    <p>
      برای کسب اطلاعات بیشتر می‌توانید{" "}
      <a
        href="https://www.fastify.io/docs/latest/Middleware/"
        target="_blank"
        rel="noopener"
      >
        مستندات رسمی
      </a>{" "}
      این فریم‌ورک را مطالعه کنید.
    </p>
  </Layout>
);
