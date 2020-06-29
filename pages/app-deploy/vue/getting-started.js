import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>VueJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های VueJS</h1>
    <span className="pageDescription">(VueJS Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/react.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <p>
      در این بخش به شما کمک میکنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      VueJS را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا میشوید و میتوانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      شما میتوانید برنامه‌هایی که با{" "}
      <span className="code">vue cli</span>
      ساخته‌شده‌اند را روی لیارا مستقر کنید.
    </p>
    <Notice variant="info">
      برنامه‌های NuxtJS را باید در{" "}
      <Link href="/app-deploy/nodejs/getting-started">پلتفرم NodeJS</Link> مستقر
      کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/vue/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
