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
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/node.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      NodeJS را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      در حال حاضر، این نسخه‌ها از NodeJS در سرویس ابری لیارا پشتیبانی می‌شود:
    </p>

    <ul>
      <li>8</li>
      <li>10</li>
      <li>12</li>
      <li>
        <b>14 (پیش‌فرض)</b>
      </li>
      <li>16</li>
    </ul>

    <div className="platforms">
      <Link href="/instructions/nestjs">
        <a>
          <PlatformIcon platform="nest" />
          <span>NestJS</span>
        </a>
      </Link>
      <Link href="/instructions/nextjs">
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

    <Link href="/app-deploy/nodejs/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
