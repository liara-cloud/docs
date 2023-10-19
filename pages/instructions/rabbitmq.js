import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Asciinema from "../../components/Asciinema";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار RabbitMQ - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="rabbitmq" />
      <div className="page-title">
        <h1>استقرار RabbitMQ</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر RabbitMQ به‌صورت مستقیم در لیارا پشتیبانی نمی‌شود اما شما
      می‌توانید این نرم‌افزار را طبق دستورالعمل زیر در لیارا مستقر کنید.
    </Notice>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/rabbitmq/rabbitmq.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      <a
        href="https://hub.docker.com/r/bitnami/rabbitmq"
        rel="noopener"
        target="_blank"
      >
        RabbitMQ
      </a>{" "}
      یک نرم افزار برای انتقال پیام بین سیستم‌ها یا به عبارتی Message broker
      software است که با استفاده از آن می‌توانیم بین سیستم های مختلف پیام ارسال
      کنیم و عملیات صف‌بندی را به‌خوبی انجام دهیم.
    </p>

    <h2>قدم اول: ساخت برنامه داکر</h2>
    <p>
      برای استقرار RabbitMQ درابتدا باید یک برنامه{" "}
      <Link href="https://liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D8%AF%D8%A7%DA%A9%D8%B1-docker/">
        Docker
      </Link>{" "}
      با نام و پلن دلخواه‌تان بسازید.
    </p>

    <Notice variant="info">
      {" "}
      برای ساخت یک برنامه داکر{" "}
      <Link href="/app-deploy/docker/getting-started/">اینجا</Link> کلیک کنید.
    </Notice>

    <h2>قدم دوم: ساخت دیسک</h2>
    <p>
      در اینجا باید طبق مستندات{" "}
      <Link href="/app-deploy/docker/disks#create-new-disk">
        ساخت یک دیسک جدید
      </Link>{" "}
      عمل کرده و یک دیسک با نام و فضای دلخواه ایجاد کنید.
    </p>

    <h2>قدم سوم: پیکربندی فایل liara.json</h2>
    <p>
      در این مرحله باید طبق مستندات{" "}
      <Link href="/app-deploy/docker/deploy-image">
        استقرار Image از DockerHub
      </Link>{" "}
      عمل کرده و پس از ایجاد فایل <span className="code">liara.json</span> در
      مسیر دلخواه، آن را به شکل زیر پیکربندی کنید.
    </p>
    <Highlight className="json">
      {`{
    "app":"rabbitmq-app", // در اینجا، باید شناسه برنامه خود را مشخص کنید
    "image": "rabbitmq:3.12-management", // در اینجا، نسخه دقیق برنامه را وارد کنید
    "port": 15672,
    "disks": [
        {
            "name": "rabbit", // در اینجا، شناسه دیسک خود را وارد کنید
            "mountTo": "/var/lib/rabbitmq"
        }
    ]
}`}
    </Highlight>
    <h2>قدم چهارم: استقرار برنامه</h2>
    <p>
      در قدم آخر برای استقرار RabbitMQ بر روی لیارا کافیست دستور زیر را در مسیر
      فایل <span className="code">liara.json</span> اجرا کنید.
    </p>
    <Highlight className="bash">{`$ liara deploy`}</Highlight>
    <h5>توجه داشته باشید که</h5>
    <ul>
      <li>
        بین برنامه‌ها و دیتابیس‌ها شبکه‌ی خصوصی برقرار است که در صورت استقرار
        میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از RabbitMQ، بسیار کاربردی
        است.
      </li>
      <li>
        در صفحه‌ی <Link href="/app-features/logs">لاگ‌ها</Link> امکان دنبال‌کردن
        زنده‌ی لاگ‌های‌تان را دارید.
      </li>
      <li>
        بهتر است برای تعیین نسخه از <span className="code">latest</span> استفاده
        نکنید بلکه به صورت صریح شماره نسخه مورد نظر را وارد نمایید.
      </li>
    </ul>
  </Layout>
);
