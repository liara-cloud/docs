import Layout from "../../components/Layout"
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-highlight"

export default () => (
    <Layout>
        <Head>
            <title>
                استقرار Prestashop - سرویس ابری لیارا
            </title>
        </Head>

        <h1>استقرار Prestashop</h1>
        <p>
            پرستاشاپ یک سامانه فروشگاه ساز اینترنتی است که به صورت رایگان در دسترس قرار گرفته است. این سیستم با برنامه
            نویسی PHP و دیتابیس MySQL طراحی و برنامه‌نویسی شده است که با نصب آن می‌توانید فروشگاه خود را در زمانی کوتاه
            ایجاد کنید.
        </p>

        <p>
            برای استقرار این برنامه، ابتدا لازم است که از بخش «برنامه‌ها» یک برنامه از نوع <Link
            href="/app-deploy/docker/getting-started">Docker</Link> با نام و پلن دلخواه‌تان بسازید.
        </p>
        <p>
            در مرحله بعد یک پایگاه داده MySQL یا MariaDB طبق مستندات «<Link href="/databases/mysql-mariadb/install">دیتابیس
            MySQL / MariaDB</Link>» بسازید.
        </p>
        <p>
            سپس دو دیسک طبق مستندات «<Link href="/app-deploy/docker/disks">استفاده از دیسک‌ها</Link>» بسازید.
        </p>
        <p>
            سپس طبق مستندات «<Link href="/app-deploy/docker/envs">تنظیم متغیرها (Environment Variables)</Link>» متغیرهای
            زیر را تنظیم کنید.
            <Highlight>
                {`PRESTASHOP_DATABASE_HOST=[نام سرویس دیتابیس]
PRESTASHOP_DATABASE_NAME=[نام دیتابیس]
PRESTASHOP_DATABASE_USER=[نام کاربری دیتابیس]
PRESTASHOP_DATABASE_PASSWORD=[گذرواژه دیتابیس]`}
            </Highlight>
        </p>
        <p>
            در مرحله بعد یک فایل<span className="code">liara.json</span> طبق راهنمایی زیر بسازید و مشخصات مربوطه را در
            این فایل وارد نمایید.
            <Highlight>
                {`{
  "image": "bitnami/prestashop:[نسخه مورد نظر]",
  "app": "[نام برنامه‌ای که ساخته‌اید]",
  "port": 8080,
  "disks": [
    {
      "name": "[نام دیسک اول]",
      "mountTo": "/opt/bitnami/prestashop"
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
                میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از Prestashop، بسیار کاربردی است.
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
                href="https://hub.docker.com/r/bitnami/prestashop">Bitnami Prestashop</Link> استفاده کنید.
            </li>
        </ul>
    </Layout>
);
