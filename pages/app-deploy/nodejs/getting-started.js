import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های NodeJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>پلتفرم NodeJS</h1>
        <span className="page-description">(NodeJS Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه NodeJS را با استفاده از
      ابزار <Link href="/app-deploy/nodejs/desktop">Liara Desktop</Link>، بر روی
      سرویس ابری لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح
      می‌دهید یا تصمیم داشته باشید با{" "}
      <Link href="/cicd/about">راه‌اندازی CI/CD</Link>، مسئولیت استقرار برنامه‌ی
      خود را به سرویس <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/nodejs/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی هاست ابری NodeJS لیارا آشنا خواهید شد و می‌توانید
      از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      در حال حاضر، این نسخه‌ها از NodeJS در هاست ابری NodeJS لیارا پشتیبانی
      می‌شود:
    </p>

    <ul>
      <li>8</li>
      <li>10</li>
      <li>12</li>
      <li>14</li>
      <li>
        <b>16 (پیش‌فرض)</b>
      </li>
      <li>18</li>
    </ul>

    <div className="platforms">
      <Link href="/instructions/nestjs">
        <a>
          <PlatformIcon platform="nest" />
          <span>NestJS</span>
        </a>
      </Link>
      <Link href="/app-deploy/nextjs/getting-started">
        <a>
          <PlatformIcon platform="next" />
          <span>NextJS</span>
        </a>
      </Link>
      <Link href="/instructions/nuxtjs">
        <a>
          <PlatformIcon platform="nuxt" />
          <span>NuxtJS</span>
        </a>
      </Link>
      <Link href="/instructions/fastify">
        <a>
          <PlatformIcon platform="fastify" />
          <span>Fastify</span>
        </a>
      </Link>
      <Link href="/instructions/svelte">
        <a>
          <PlatformIcon platform="svelte" />
          <span>Svelte</span>
        </a>
      </Link>
      <Link href="/instructions/remix">
        <a>
          <PlatformIcon platform="remix" />
          <span>Remix</span>
        </a>
      </Link>
      <Link href="/instructions/blitzjs">
        <a>
          <PlatformIcon platform="blitz" />
          <span>BlitzJS</span>
        </a>
      </Link>
      <Link href="/instructions/strapi">
        <a>
          <PlatformIcon platform="strapi" />
          <span>Strapi</span>
        </a>
      </Link>
      <Link href="/instructions/adonis">
        <a>
          <PlatformIcon platform="adonisjs" />
          <span>Adonis</span>
        </a>
      </Link>
    </div>

    <Notice variant="info">
      اگر قصد دارید نسخه‌ی پیش‌فرض NodeJS را تغییر دهید می‌توانید مستندات{" "}
      <Link href="/app-deploy/nodejs/tips#nodejs-version">
        انتخاب نسخه‌ی NodeJS
      </Link>{" "}
      را در توضیحات و نکات تکمیلی این پلتفرم مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/nodejs/desktop">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
