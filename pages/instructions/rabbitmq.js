import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Asciinema from "../../components/Asciinema";

export default () => (
  <Layout>
    <Head>
      <title>استقرار RabbitMQ - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/rabbitmq.svg"
        alt="rabbitmq"
      />
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

    <p>
      برای استقرار RabbitMQ باید یک برنامه{" "}
      <Link href="/app-deploy/docker/getting-started">Docker</Link> با نام و پلن
      دلخواه‌تان بسازید ایجاد کرده و مراحل زیر را دنبال کنید.
    </p>
    <p>
      در قدم اول باید طبق مستندات{" "}
      <Link href="/app-deploy/docker/disks#create-new-disk">
        ساخت یک دیسک جدید
      </Link>{" "}
      عمل کرده و دو دیسک با نام و فضای دلخواه ایجاد کنید. سپس طبق مستندات{" "}
      <Link href="/app-deploy/docker/envs">تنظیم متغیرها</Link>، متغیرهای زیر را
      تنظیم کرده و بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
    </p>
    <Highlight className="config">
      {`RABBITMQ_USERNAME=[نام کاربری دلخواه]
RABBITMQ_PASSWORD=[گذرواژه دلخواه]
RABBITMQ_VM_MEMORY_HIGH_WATERMARK=0.6
RABBITMQ_DISK_FREE_ABSOLUTE_LIMIT=100000000`}
    </Highlight>
    <p>
      در مرحله بعد طبق مستندات{" "}
      <Link href="/app-deploy/docker/deploy-image">
        استقرار Image از DockerHub
      </Link>{" "}
      عمل کرده و پس از ایجاد فایل <span className="code">liara.json</span> در
      مسیر دلخواه، آن را به شکل زیر پیکربندی کنید.
    </p>
    <Highlight>
      {`{
  "image": "bitnami/rabbitmq:3.9",
  "app": "rabbitmq-app",
  "port": 15672,
  "disks": [
    {
      "name": "[نام دیسک اول]",
      "mountTo": "/opt/bitnami/rabbitmq"
    },
    {
      "name": "[نام دیسک دوم]",
      "mountTo": "/bitnami"
    }
  ]
}`}
    </Highlight>
    <p>
      در قدم آخر برای استقرار RabbitMQ بر روی لیارا کافیست دستور زیر را در مسیر
      فایل <span className="code">liara.json</span> اجرا کنید.
    </p>
    <Highlight className="bash">{`$ liara deploy`}</Highlight>
    <h3>استقرار سریع</h3>
    <p>
      همچنین شما می‌توانید تمام مراحل فوق را با استفاده از{" "}
      <Link href="/cli/install">لیارا CLI</Link> انجام دهید:
    </p>
    <Highlight className="bash">
      {`$ liara deploy --app rabbitmq-app \\
                --port 15672 \\
                --image bitnami/rabbitmq:3.9 \\
                --disks rabbitmq:/opt/bitnami/rabbitmq \\
                --disks bitnami:/bitnami \\
                --detach`}
    </Highlight>
    <Asciinema id="455609" />
    <h3>توجه داشته باشید که</h3>
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
