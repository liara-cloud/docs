import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Static - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="HTML5" />
      <div className="page-title">
        <h1>پلتفرم Static</h1>
        <span className="page-description">(Static Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه Static
      (HTML/CSS/JavaScript) را با استفاده از ابزار{" "}
      <Link href="/app-deploy/static/desktop">Liara Desktop</Link>، بر روی سرویس
      ابری لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح
      می‌دهید یا تصمیم داشته باشید با{" "}
      <Link href="/cicd/about">راه‌اندازی CI/CD</Link>، مسئولیت استقرار برنامه‌ی
      خود را به سرویس <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/static/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی پلتفرم Static لیارا آشنا خواهید شد و می‌توانید از
      آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <div className="platforms">
      <Link href="/instructions/gatsbyjs">
        <a>
          <PlatformIcon platform="gatsby" />
          <span>GatsbyJS</span>
        </a>
      </Link>
      <Link href="/instructions/gridsome">
        <a>
          <PlatformIcon platform="gridsome" />
          <span>Gridsome</span>
        </a>
      </Link>
      <Link href="/instructions/eleventy">
        <a>
          <PlatformIcon platform="eleventy" />
          <span>Eleventy</span>
        </a>
      </Link>
      <Link href="/instructions/hugo">
        <a>
          <PlatformIcon platform="hugo" />
          <span>Hugo</span>
        </a>
      </Link>
      <Link href="/instructions/jekyll">
        <a>
          <PlatformIcon platform="jekyll" />
          <span>Jekyll</span>
        </a>
      </Link>
    </div>

    <br />

    <Link href="/app-deploy/static/desktop">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
