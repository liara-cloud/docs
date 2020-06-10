import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>VueJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک VueJS</h1>
    <span className="pageDescription">(VueJS Framework)</span>

    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه هستند و به برنامه‌نویسان کمک میکنند
      تا بدونن دقیقا چه اتفاقاتی در نرم‌افزار رخ داده. به صورت خلاصه شما
      میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید.
    </p>

    <ZoomableImage src="/static/vue-logs.png" />
    <br />

    <Link href="/apps/vue/liarajson">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
