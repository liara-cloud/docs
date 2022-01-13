import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات استقرار Image از DockerHub - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>استقرار Image از DockerHub</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/docker-image.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      برای استقرار مستقیم imageهای build شده از DockerHub یا هر رجیستری‌های
      عمومی دیگر در لیارا می‌توانید از پارامتر{" "}
      <span className="code">--image</span> در زمان اجرای دستور{" "}
      <span className="code">liara deploy</span> استفاده کنید. روش دیگر این است
      که یک فایل با نام{" "}
      <Link href="/app-deploy/docker/liarajson">liara.json</Link> در مسیر اصلی
      پروژه ایجاد کرده و پس از تنظیم مشخصه‌های مورد نیاز مانند قطعه کد زیر،
      دستور <span className="code">liara deploy</span>
      را اجرا کنید:
    </p>
    <Highlight className="json">
      {`{
  "image": "getmeili/meilisearch:v0.23.0",
  "app": "search-app",
  "port": 7700,
  "disks": [
    {
      "name": "data",
      "mountTo": "/data.ms"
    }
  ]
}
`}
    </Highlight>

    <p>
      همچنین شما می‌توانید به‌شکل زیر و بدون نیاز به فایل{" "}
      <Link href="/app-deploy/docker/liarajson">liara.json</Link>، ایمیج مورد
      نظرتان را به‌طور مستقیم در برنامه‌های Docker لیارا مستقر کنید.
    </p>

    <Highlight className="bash">{`$ liara deploy --app search-app \\
               --image getmeili/meilisearch:v0.23.0 \\
               --port 7700 \\
               --disks data:/data.ms`}</Highlight>

    <Notice variant="warning">
      توصیه می‌کنیم حتما در زمان استقرار image از تگ مشخصی استفاده کرده و تا حد
      امکان از تگ <span className="code">latest</span> استفاده نکنید چون با
      تغییر نسخه‌ی image ممکن است برنامه‌ی شما دچار مشکل شود.
    </Notice>

    <p>
      توجه داشته باشید که در لیارا به‌جای مفهوم Volume از مفهوم Disk استفاده
      می‌کنیم که کاربردهای آن‌ها کاملا یکسان است.{" "}
      <Link href="/app-deploy/docker/disks">توضیحات بیشتر</Link>
    </p>
    <Link href="/app-deploy/docker/envs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
