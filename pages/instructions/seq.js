import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import Asciinema from "../../components/Asciinema";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Seq - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="seq" />
      <div className="page-title">
        <h1>استقرار Seq</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <p>
      <a href="https://hub.docker.com/r/datalust/seq" target="_blank">
        Seq
      </a>{" "}
      را می‌توان سروری برای تجزیه و تحلیل هوشمند لاگ برنامه‌های{" "}
      <Link href="/app-deploy/netcore/getting-started">ASP.Net Core</Link>، Java
      و <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> دانست که
      برای استقرار آن در لیارا باید یک{" "}
      <Link href="/app-deploy/docker/getting-started">برنامه‌ی Docker</Link>{" "}
      ایجاد کرده و مراحل زیر را دنبال کنید.
    </p>

    <h3>
      ۱) ایجاد دیسک و تنظیم <span className="code">ACCEPT_EULA</span>
    </h3>
    <p>
      در قدم اول باید طبق مستندات{" "}
      <Link href="/app-deploy/docker/disks#create-new-disk">
        ساخت دیسک جدید
      </Link>{" "}
      عمل کرده و یک دیسک با نام و فضای دلخواه ایجاد کنید. سپس طبق{" "}
      <Link href="/app-deploy/docker/envs">مستندات تنظیم متغیرها</Link>، متغیر
      زیر را تنظیم کرده و بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
    </p>
    <Highlight className="plaintext">{`ACCEPT_EULA=Y`}</Highlight>

    <h3>
      ۲) پیکربندی فایل <span className="code">liara.json</span>
    </h3>
    <p>
      در قدم بعد باید طبق مستندات{" "}
      <Link href="/app-deploy/docker/deploy-image">
        استقرار Image از DockerHub
      </Link>{" "}
      عمل کرده و پس از ایجاد فایل <span className="code">liara.json</span> در
      مسیر دلخواه، آن را به شکل زیر پیکربندی کنید.
    </p>

    <Highlight className="json">
      {`{
  "image": "datalust/seq:2021.2",
  "port": 80,
  "disks": [
    {
      "name": "disk-name",
      "mountTo": "/data"
    }
  ]
}`}
    </Highlight>
    <Notice variant="warning">
      توجه داشته باشید که مقدار <span className="code">disk-name</span> را با
      نام دیسک ایجاد شده در مرحله‌ی قبل، جایگزین کنید.
    </Notice>
    <h3>۳) استقرار Seq</h3>
    <p>
      در قدم آخر برای استقرار Seq بر روی لیارا کافیست دستور زیر را در مسیر فایل{" "}
      <span className="code">liara.json</span> اجرا کنید.
    </p>
    <Highlight className="bash">{`$ liara deploy`}</Highlight>

    <Notice variant="warning">
      توجه داشته باشید که حتما پس از راه‌اندازی Seq، وارد تنظیمات کاربران شده و
      authentication را فعال کنید.
    </Notice>

    <h3>استقرار سریع</h3>
    <p>
      همچنین شما می‌توانید تمام مراحل فوق را با استفاده از{" "}
      <Link href="/cli/install">لیارا CLI</Link> انجام دهید:
    </p>
    <Highlight className="bash">
      {`$ liara deploy --app seq-server \\
               --image datalust/seq:2021.2 \\
               --port 80 \\
               --disks data:/data \\
               --detach`}
    </Highlight>
    <Asciinema id="454252" />
  </Layout>
);
