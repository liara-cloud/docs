import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>Django سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Django</h1>
    <span className="pageDescription">(Django Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/django.mp4"
      controls="controls"
      className="block w-full"
    ></video>

    <p>
      در این بخش به شما کمک میکنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      Django را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا میشوید و میتوانید از آن‌ها در پروژه‌ی‌تان استفاده کنید.
    </p>

    <Link href="/app-deploy/django/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
