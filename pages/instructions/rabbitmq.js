import Layout from "../../components/Layout"
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-highlight"

export default () => (
    <Layout>
        <Head>
            <title>
                استقرار RabbitMQ - سرویس ابری لیارا
            </title>
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

        <p>
            RabbitMQ یک نرم افزار برای انتقال پیام بین سیستم‌ها یا به عبارتی Message broker software است که با استفاده
            از آن می‌توانیم بین سیستم های مختلف پیام ارسال کنیم و عملیات صف‌بندی را به‌خوبی انجام دهیم.
        </p>

        <p>
            برای استقرار این برنامه، ابتدا لازم است که از بخش «برنامه‌ها» یک برنامه از نوع <Link
                href="/app-deploy/docker/getting-started">Docker</Link> با نام و پلن دلخواه‌تان بسازید.
            <br />
            سپس دو دیسک طبق مستندات «<Link href="/app-deploy/docker/disks">استفاده از دیسک‌ها</Link>» بسازید.
        </p>
        <p>
            سپس طبق مستندات «<Link href="/app-deploy/docker/envs">تنظیم متغیرها (Environment Variables)</Link>» متغیرهای
            زیر را تنظیم کنید.
            <Highlight>
                {`RABBITMQ_USERNAME=[نام کاربری دلخواه]
RABBITMQ_PASSWORD=[گذرواژه دلخواه]
RABBITMQ_VM_MEMORY_HIGH_WATERMARK=0.6
RABBITMQ_DISK_FREE_ABSOLUTE_LIMIT=100000000`}
            </Highlight>
        </p>
        <p>
            در مرحله بعد یک فایل<span className="code">liara.json</span> طبق راهنمایی زیر بسازید و مشخصات مربوطه را در
            این فایل وارد نمایید.
            <Highlight>
                {`{
  "image": "bitnami/rabbitmq:[نسخه مورد نظر]",
  "app": "[نام برنامه‌ای که ساخته‌اید]",
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
        </p>
        <p>
            در نهایت، CMD و یا ترمینال
            را در پوشه‌ای که <span className="code">liara.json</span>
            را داخل آن قرار دادید باز کرده و سپس
            دستور زیر را برای استقرار و اجرای برنامه وارد کنید:
        </p>
        <pre>
            <code>$ liara deploy</code>
        </pre>
        <p>
            <Link href="/cli/install">
                راهنمای نصب Liara CLI
            </Link>
        </p>
        <h3>توجه داشته باشید که</h3>
        <ul>
            <li>
                بین برنامه‌ها و دیتابیس‌ها شبکه‌ی خصوصی برقرار است که در صورت استقرار
                میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از RabbitMQ، بسیار کاربردی است.
            </li>
            <li>
                در صفحه‌ی <Link href="/app-features/logs">لاگ‌ها</Link> امکان دنبال‌کردن زنده‌ی
                لاگ‌های‌تان را دارید.
            </li>
            <li>
                بهتر است برای تعیین نسخه از <span className="code">latest</span> استفاده نکنید بلکه به صورت صریح شماره
                نسخه مورد نظر را وارد نمایید.
            </li>
            <li>
                برای اطلاع از تنظیمات بیشتر و نسخه‌های مختلف می‌توانید از مستندات مربوطه در <Link
                    href="https://hub.docker.com/r/bitnami/rabbitmq">Bitnami RabbitMQ</Link> استفاده کنید.
            </li>
        </ul>
    </Layout>
);
