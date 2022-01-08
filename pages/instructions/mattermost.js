import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';
import Notice from '../../components/Notice';
import Asciinema from '../../components/Asciinema';

export default () => (
    <Layout>
        <Head>
            <title>استقرار Mattermost - سرویس ابری لیارا</title>
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

        <Notice variant="warning">
            در حال حاضر Mattermost به‌صورت مستقیم در لیارا پشتیبانی نمی‌شود اما
            شما می‌توانید این پلتفرم را طبق دستورالعمل زیر در لیارا مستقر
            کنید.
        </Notice>

        <p>
            <a
                href="https://hub.docker.com/r/mattermost/mattermost-prod-app"
                target="_blank"
                rel="noopener"
            >
                Mattermost
            </a>{' '}
            نرم‌افزاری برای چت و گفتگوی درون تیمی یا سازمانی است که می‌تواند
            جایگزین خوبی برای Slack باشد. برای استقرار Mattermost باید یک برنامه{' '}
            <Link href="/app-deploy/docker/getting-started">Docker</Link> با نام
            و پلن دلخواه‌تان بسازید ایجاد کرده و مراحل زیر را دنبال کنید.
        </p>

        <p>
            در قدم اول باید طبق مستندات{' '}
            <Link href="/app-deploy/docker/disks#create-new-disk">
                ساخت یک دیسک جدید
            </Link>{' '}
            عمل کرده و پنج دیسک با نام و فضای دلخواه ایجاد کنید و همچنین یک{' '}
            <Link href="/databases/postgresql/install">دیتابیس PostgreSQL</Link>{' '}
            راه‌اندازی کنید. سپس طبق مستندات{' '}
            <Link href="/app-deploy/docker/envs">تنظیم متغیرها</Link>، متغیرهای
            زیر را تنظیم کرده و بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
        </p>

        <Highlight className="config">
            {`DB_HOST=[نام سرویس دیتابیس]
MM_DBNAME=[نام دیتابیس]
MM_USERNAME=[نام کاربری دیتابیس]
MM_PASSWORD=[گذرواژه دیتابیس]`}
        </Highlight>
        <p>
            در مرحله بعد طبق مستندات{' '}
            <Link href="/app-deploy/docker/deploy-image">
                استقرار Image از DockerHub
            </Link>{' '}
            عمل کرده و پس از ایجاد فایل <span className="code">liara.json</span>{' '}
            در مسیر دلخواه، آن را به شکل زیر پیکربندی کنید.
        </p>
        <Highlight className="json">
            {`{
    "image": "mattermost/mattermost-prod-app:v5.31.9",
    "app": "mattermost-app",
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
        <p>
            در قدم آخر برای استقرار Mattermost بر روی لیارا کافیست دستور زیر را
            در مسیر فایل <span className="code">liara.json</span> اجرا کنید.
        </p>
        <Highlight className="bash">{`$ liara deploy`}</Highlight>
        <h3>استقرار سریع</h3>
        <p>
            همچنین شما می‌توانید تمام مراحل فوق را با استفاده از{' '}
            <Link href="/cli/install">لیارا CLI</Link> انجام دهید:
        </p>
        <Highlight className="bash">
            {`$ liara deploy --app mattermost-app \\
                --port 8000 \\
                --image mattermost/mattermost-prod-app:v5.31.9 \\
                --disks data:/mattermost/data \\
                --disks config:/mattermost/config \\
                --disks client-plugins:/mattermost/client/plugins \\
                --disks plugins:/mattermost/plugins \\
                --disks logs:/mattermost/logs \\
                --detach`}
        </Highlight>
        <Asciinema id="455586" />
        <h3>توجه داشته باشید که</h3>
        <ul>
            <li>
                بین برنامه‌ها و دیتابیس‌ها شبکه‌ی خصوصی برقرار است که در صورت
                استقرار میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از
                Mattermost، بسیار کاربردی است.
            </li>
            <li>
                در صفحه‌ی <Link href="/app-features/logs">لاگ‌ها</Link> امکان
                دنبال‌کردن زنده‌ی لاگ‌های‌تان را دارید.
            </li>
            <li>
                بهتر است برای تعیین نسخه از <span className="code">latest</span>{' '}
                استفاده نکنید بلکه به صورت صریح شماره نسخه مورد نظر را وارد
                نمایید.
            </li>
        </ul>
    </Layout>
);
