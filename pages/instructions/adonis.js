import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Notice from '../../components/Notice';
import Layout from '../../components/Layout';

export default () => (
    <Layout>
        <Head>
            <title>استقرار برنامه‌های AdonisJS - سرویس ابری لیارا</title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/adonisjs.svg"
                alt="Adonisjs"
            />
            <div className="page-title">
                <h1>استقرار برنامه‌های AdonisJS</h1>
                <span className="page-description">(AdonisJS Apps)</span>
            </div>
        </div>
        <p>
            AdonisJS یکی دیگر از فریم‌ورک‌های NodeJS است که تمام ابزارهای مورد
            نیاز برای توسعه‌ی وب و API را در یک مجموعه ارا‌ئه می‌کند. حال شما
            می‌توانید پروژه‌های AdonisJS خود را با ایجاد برنامه‌های{' '}
            <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی
            لیارا دیپلوی کنید.
        </p>
        <p>
            توجه داشته باشید که برای دیپلوی برنامه‌های AdonisJS باید بخش{' '}
            <span className="code">scripts</span> فایل{' '}
            <span className="code">package.json</span> را به شکل زیر تغییر دهید.
        </p>
        <Highlight className="json">{`"scripts": {
  "dev": "node ace serve --watch",
  "build": "node ace build --production",
  "start": "node build/server.js"
},`}</Highlight>

        <p>
            در قدم بعد وارد تنظیمات برنامه شده و طبق مستندات{' '}
            <Link href="/app-deploy/nodejs/liarajson">تنظیم متغیرها</Link>،
            متغیر زیر را تنظیم کرده و بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
        </p>

        <Highlight className="plaintext">{`ENV_SILENT=true`}</Highlight>

        <Notice variant="info">
            برای کسب اطلاعات بیشتر می‌توانید مستندات{' '}
            <a
                href="https://adonisjs.com/docs/4.1/configuration-and-env#_disabling_the_env_file"
                target="_blank"
            >
                Disabling the .env file
            </a>{' '}
            فریم‌ورک AdonisJS را مطالعه کنید.
        </Notice>

        <p>
            در نهایت برای استقرار پروژه‌ی AdonisJS بر روی لیارا باید دستور
            <span className="code">liara deploy --port 3000</span>
            را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
        </p>
    </Layout>
);
