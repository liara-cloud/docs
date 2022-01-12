import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های PHP - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <ProjectIcon platform="php" />
      <div className="page-title">
        <h1>برنامه‌های PHP</h1>
        <span className="page-description">(PHP Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/php.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در این بخش به شما کمک می‌کنیم که در سریع‌ترین زمان ممکن برنامه PHP ای‌ که
      نوشتید را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک قابلیت مهم
      در لیارا آشنا می‌شوید و می‌توانید از آن‌ها در استقرار برنامه‌ی‌تان استفاده
      کنید.
    </p>
    {/* <Notice variant="info"> */}
    <p> لیارا از PHP 7.2 برای اجرای برنامه‌های شما استفاده می‌کند.</p>

    <Link href="/app-deploy/php/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
