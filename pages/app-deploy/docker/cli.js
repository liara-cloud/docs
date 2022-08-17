import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Docker با استفاده از ابزار Liara CLI - سرویس
        ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Liara CLI)</span>
      </div>
    </div>

    <h3>استقرار با Liara CLI</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/docker/docker-cli.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Link href="/app-deploy/docker/deploy-image">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
