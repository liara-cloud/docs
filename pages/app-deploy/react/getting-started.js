import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های React - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <ProjectIcon platform="react" />
      <div className="page-title">
        <h1>برنامه‌های ReactJS</h1>
        <span className="page-description">(ReactJS Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/react.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      ReactJS را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>
    <p>
      شما می‌توانید برنامه‌هایی که با{" "}
      <span className="code">create-react-app</span>
      ساخته‌شده‌اند را روی لیارا مستقر کنید.
    </p>
    <Notice variant="info">
      برنامه‌های NextJS را باید در{" "}
      <Link href="/app-deploy/nodejs/getting-started">پلتفرم NodeJS</Link> مستقر
      کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/react/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
