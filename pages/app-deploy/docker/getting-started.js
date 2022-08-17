import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
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
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه Docker را با استفاده از
      ابزار <Link href="/app-deploy/docker/desktop">Liara Desktop</Link>، بر روی
      سرویس ابری لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح
      می‌دهید یا تصمیم داشته باشید با{" "}
      <Link href="/cicd/about">راه‌اندازی CI/CD</Link>، مسئولیت استقرار برنامه‌ی
      خود را به سرویس <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/docker/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی هاست ابری Docker لیارا آشنا خواهید شد و می‌توانید
      از آن‌ها در برنامه‌ی‌تان استفاده کنید.
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

    <Link href="/app-deploy/docker/desktop">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
