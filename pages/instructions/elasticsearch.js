import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';
import Asciinema from '../../components/Asciinema';

export default () => (
    <Layout>
        <Head>
            <title>استقرار Elasticsearch - سرویس ابری لیارا</title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/elastic.svg"
                alt="elastic"
            />
            <div className="page-title">
                <h1>استقرار Elasticsearch</h1>
                <span className="page-description">(Docker Apps)</span>
            </div>
        </div>

        <p>
            <a
                href="https://hub.docker.com/r/elastic/elasticsearch"
                target="_blank"
                rel="noopener"
            >
                Elasticsearch
            </a>{' '}
            یک موتور جستجو و تحلیلگر توزیع شده است که پروتکل ارتباطی آن HTTP و
            برای انتقال داده ها از JSON استفاده می‌کند. برای استقرار
            Elasticsearch باید یک برنامه{' '}
            <Link href="/app-deploy/docker/getting-started">Docker</Link> با نام
            و پلن دلخواه‌تان بسازید ایجاد کرده و مراحل زیر را دنبال کنید.
        </p>
        <p>
            در قدم اول باید طبق مستندات{' '}
            <Link href="http://localhost:3005/app-deploy/docker/disks#create-new-disk">
                ساخت یک دیسک جدید
            </Link>{' '}
            عمل کرده و یک دیسک با نام و فضای دلخواه ایجاد کنید. سپس طبق مستندات{' '}
            <Link href="/app-deploy/docker/envs">تنظیم متغیرها</Link>، متغیرهای
            زیر را تنظیم کرده و بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
            <Highlight className="config">
                {`ELASTIC_USERNAME=[نام کاربری دلخواه]
ELASTIC_PASSWORD=[گذرواژه دلخواه]
discovery.type=single-node
path.repo=/usr/share/elasticsearch/backups
xpack.security.enabled=true`}
            </Highlight>
        </p>
        <p>
            در مرحله بعد طبق مستندات{' '}
            <Link href="/app-deploy/docker/deploy-image">
                استقرار Image از DockerHub
            </Link>{' '}
            عمل کرده و پس از ایجاد فایل <span className="code">liara.json</span>{' '}
            در مسیر دلخواه، آن را به شکل زیر پیکربندی کنید.
            <Highlight className="json">
                {`{
  "image": "elasticsearch:7.0.0",
  "app": "elastic-app",
  "port": 9200,
  "disks": [
    {
      "name": "data",
      "mountTo": "/usr/share/elasticsearch"
    }
  ]
}`}
            </Highlight>
        </p>
        <p>
            در قدم آخر برای استقرار Elasticsearch بر روی لیارا کافیست دستور زیر
            را در مسیر فایل <span className="code">liara.json</span> اجرا کنید.
        </p>
        <Highlight className="bash">{`$ liara deploy`}</Highlight>
        <h3>استقرار سریع</h3>
        <p>
            همچنین شما می‌توانید تمام مراحل فوق را با استفاده از{' '}
            <Link href="/cli/install">لیارا CLI</Link> انجام دهید:
        </p>
        <Highlight className="bash">
            {`$ liara deploy --app elastic-app \\
                --port 9200 \\
                --image elasticsearch:7.0.0 \\
                --disks data:/usr/share/elasticsearch \\
                --detach`}
        </Highlight>
        <Asciinema id="455571" />
        <h3>توجه داشته باشید که</h3>
        <ul>
            <li>
                بین برنامه‌ها و دیتابیس‌ها شبکه‌ی خصوصی برقرار است که در صورت
                استقرار میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از
                Elasticsearch، بسیار کاربردی است.
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
