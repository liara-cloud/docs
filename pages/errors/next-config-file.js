import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>خطای Could not modify config file - سرویس ابری لیارا</title>
    </Head>

    <h1>خطای Could not modify config file</h1>
    <p>
      لیارا به‌صورت خودکار فایل <span className="code">next.config.js</span>{" "}
      برنامه‌ی شما را پیدا کرده و در این فایل، تنظیماتی را اضافه می‌کند تا
      برنامه برای اجرا در{" "}
      <Link href="/app-deploy/nextjs/getting-started">پلتفرم NextJS</Link> آماده
      شود. حال درصورتی که با خطای{" "}
      <span className="code">Could not modify config file</span> مواجه شدید،
      نیاز هست دستورالعمل زیر را دنبال کنید.
    </p>

    <h3>✔️ راه حل</h3>
    <p>
      برای رفع این خطا باید ابتدا یک فایل با نام{" "}
      <span className="code">liara.json</span> در ریشه برنامه‌تان بسازید و
      قطعه‌کد زیر را در این فایل اضافه کنید:
    </p>

    <Highlight className="json">
      {`{
  "next": {
    "modifyConfig": false
  }
}`}
    </Highlight>

    <p>
      در مرحله‌ی بعد نیاز هست قطعه‌کد زیر را متناسب با نسخه‌ی NextJS پروژه‌تان،
      به فایل <span className="code">next.config.js</span> اضافه کنید:
    </p>

    <p style={{ direction: "ltr" }}>
      <strong>{"NextJS >= 12.2"}</strong>
    </p>
    <Highlight className="json">
      {`module.exports = {
  output: 'standalone',
}`}
    </Highlight>

    <p style={{ direction: "ltr" }}>
      <strong>{"NextJS < 12.2"}</strong>
    </p>

    <Highlight className="json">
      {`module.exports = {
  experimental: {
    outputStandalone: true,
  },
}`}
    </Highlight>

    <p>درنهایت باید مجددا برنامه‌ی خود را در لیارا مستقر کنید.</p>
  </Layout>
);
