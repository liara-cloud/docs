import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Docker - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/docker.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک
      برنامه‌ی Docker را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک
      ویژگی در لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده
      کنید.
    </p>

    <div className="platforms">
      <Link href="/instructions/golang">
        <a>
          <PlatformIcon platform="go" />
          <span>Go</span>
        </a>
      </Link>
      <Link href="/instructions/nginx">
        <a>
          <PlatformIcon platform="nginx" />
          <span>Nginx</span>
        </a>
      </Link>
      <Link href="/instructions/fastapi">
        <a>
          <PlatformIcon platform="fastapi" />
          <span>FastAPI</span>
        </a>
      </Link>
    </div>

    <Link href="/app-deploy/docker/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
