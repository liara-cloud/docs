import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Django - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>برنامه‌های Django</h1>
        <span className="page-description">(Django Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/django.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      Django را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <Link href="/app-deploy/django/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
