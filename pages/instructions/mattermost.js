import Layout from "../../components/Layout"
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-highlight"

export default () => (
    <Layout>
        <Head>
            <title>
                استقرار Mattermost - سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/mattermost.svg"
                alt="mattermost"
            />
            <div className="page-title">
                <h1>استقرار Mattermost</h1>
                <span className="page-description">(Docker Apps)</span>
            </div>
        </div>
        
        <p>
            اگر با Slack کار کرده باشید، Mattermost می‌تواند جایگزین خوبی برای آن باشد. Mattermost نرم‌افزاری برای چت و
            گفتگوی درون تیمی یا سازمانی است.
        </p>

        <p>
            برای استقرار این برنامه، ابتدا لازم است که از بخش «برنامه‌ها» یک برنامه از نوع <Link
                href="/app-deploy/docker/getting-started">Docker</Link> با نام و پلن دلخواه‌تان بسازید.
        </p>
        <p>
            در مرحله بعد یک پایگاه داده PostgreSQL طبق مستندات «<Link href="/databases/postgresql/install">دیتابیس
                PostgreSQL</Link>» بسازید.
        </p>
        <p>
            سپس پنج دیسک طبق مستندات «<Link href="/app-deploy/docker/disks">استفاده از دیسک‌ها</Link>» بسازید.
        </p>
        <p>
            سپس طبق مستندات «<Link href="/app-deploy/docker/envs">تنظیم متغیرها (Environment Variables)</Link>» متغیرهای
            زیر را تنظیم کنید.
            <Highlight>
                {`DB_HOST=[نام سرویس دیتابیس]
MM_DBNAME=[نام دیتابیس]
MM_USERNAME=[نام کاربری دیتابیس]
MM_PASSWORD=[گذرواژه دیتابیس]`}
            </Highlight>
        </p>
        <p>
            در مرحله بعد یک فایل<span className="code">liara.json</span> طبق راهنمایی زیر بسازید و مشخصات مربوطه را در
            این فایل وارد نمایید.
            <Highlight>
                {`{
    "image": "mattermost/mattermost-prod-app:[نسخه مورد نظر]",
    "app": "[نام برنامه]",
    "port": 8000,
    "disks":[
        {
            "name":"[نام دیسک اول]",
            "mountTo":"/mattermost/client/plugins"
        },
        {
            "name":"[نام دیسک دوم]",
            "mountTo":"/mattermost/config"
        },
        {
            "name":"[نام دیسک سوم]",
            "mountTo":"/mattermost/data"
        },
        {
            "name":"[نام دیسک چهارم]",
            "mountTo":"/mattermost/logs"
        },
        {
            "name":"[نام دیسک پنجم]",
            "mountTo":"/mattermost/plugins"
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
                میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از Mattermost، بسیار کاربردی است.
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
                    href="https://hub.docker.com/r/mattermost/mattermost-prod-app">Mattermost</Link> استفاده کنید.
            </li>
        </ul>
    </Layout>
);
