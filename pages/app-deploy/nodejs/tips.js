import Layout from "../../../components/Layout";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های NodeJS - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/nodejs.svg"
        alt="nodejs"
      />
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#nodejs-version">انتخاب نسخه‌ی NodeJS</a></li>
      <li><a href="#build-script">ES6 و build کردن برنامه</a></li>
      <li><a href="#graphql-error">رفع خطای GET query missing در GraphQL</a></li>
      <li><a href="#adonisjs">استقرار فریم‌ورک AdonisJS</a></li>
      <li><a href="#timezone">تنظیم منطقه‌ی زمانی (TimeZone)</a></li>
    </ul>

    <h3 id="nodejs-version">انتخاب نسخه‌ی NodeJS</h3>
    <p>
      به‌صورت پیش‌فرض، برنامه‌ی شما روی نسخه‌ی ۱۴ این پلتفرم اجرا می‌شود. در
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
    "version": "12"
  }
}`}
    </Highlight>
    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌شود:</p>
    <ul>
      <li>8</li>
      <li>10</li>
      <li>12</li>
      <li><b>14 (پیش‌فرض)</b></li>
      <li>16</li>
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

    <h3 id="graphql-error">رفع خطای <span className="code">GET query missing</span> در GraphQL</h3>
    <p>
      قابلیت Playground در Apollo Server
      در محیط Production
      به‌صورت پیش‌فرض غیرفعال است. برای فعال‌سازی، لازم است تا فیلدهای
      <span className="code">introspection</span>
      و
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
      منبع:
      {' '}
      <a href="https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/#enabling-graphql-playground-in-production" target="_blank">Enabling GraphQL Playground in production</a>
    </p>

    <h3 id="adonisjs">استقرار فریم‌ورک AdonisJS</h3>
    <p>
      اگر از فریم‌ورک AdonisJS استفاده می‌کنید، نیاز به تنظیمات خاصی ندارید و
      مطابق با مواردی که در بالا گفته شد، می‌توانید برنامه‌ی‌تان را در لیارا
      مستقر کنید. تنها خطای خاصی که ممکن است با آن مواجه شوید این است که این
      فریم‌ورک وجود یک فایل
      <span className="code">.env</span>
      را در ریشه‌ی برنامه الزامی می‌داند. اما چون در لیارا، شما متغیرهای‌تان را
      از بخش «تنظیمات برنامه» وارد می‌کنید، ممکن است با خطای زیر مواجه شوید:
    </p>
    <pre>
      <code>Error: ENOENT: no such file or directory, open '/app/.env'</code>
    </pre>
    <p>
      برای رفع این مشکل، فقط کافیست که متغیر زیر را هم از بخش تنظیمات برنامه،
      وارد کنید و بعد ذخیره کنید:
    </p>
    <pre>
      <code>{`ENV_SILENT=true`}</code>
    </pre>
    <p>
      این مورد در مستندات AdonisJS هم با عنوان{" "}
      <a
        href="https://adonisjs.com/docs/4.1/configuration-and-env#_disabling_the_env_file"
        target="_blank"
        rel="noopener"
      >
        Disabling the .env file
      </a>{" "}
      گفته شده‌است.
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
  </Layout>
);
