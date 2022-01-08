import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Notice from '../../components/Notice';
import Layout from '../../components/Layout';
import Asciinema from '../../components/Asciinema';

export default () => (
    <Layout>
        <Head>
            <title>استقرار ArangoDB - سرویس ابری لیارا</title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/arangodb.svg"
                alt="arangodb"
            />
            <div className="page-title">
                <h1>استقرار ArangoDB</h1>
                <span className="page-description">(Docker Apps)</span>
            </div>
        </div>

        <Notice variant="warning">
            در حال حاضر ArangoDB به‌صورت مستقیم در لیارا پشتیبانی نمی‌شود اما
            شما می‌توانید این دیتابیس را را طبق دستورالعمل زیر در لیارا مستقر
            کنید.
        </Notice>

        <p>
            <a href="https://hub.docker.com/_/arangodb" target="_blank">
                ArangoDB
            </a>{' '}
            یک دیتابیس متن باز و native multi-model است که برای استقرار آن در
            لیارا باید یک{' '}
            <Link href="/app-deploy/docker/getting-started">
                برنامه‌ی Docker
            </Link>{' '}
            ایجاد کرده و مراحل زیر را دنبال کنید.
        </p>

        <h3>
            ۱) ایجاد دیسک و تنظیم{' '}
            <span className="code">ARANGO_ROOT_PASSWORD</span>
        </h3>
        <p>
            در قدم اول باید طبق مستندات{' '}
            <Link href="/app-deploy/docker/disks#create-new-disk">
                ساخت یک دیسک جدید
            </Link>{' '}
            عمل کرده و دو دیسک با نام و فضای دلخواه ایجاد کنید. سپس طبق{' '}
            <Link href="/app-deploy/docker/envs">مستندات تنظیم متغیرها</Link>،
            متغیر زیر را تنظیم کرده و بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
        </p>
        <Highlight className="plaintext">{`ARANGO_ROOT_PASSWORD=secure-password`}</Highlight>

        <Notice variant="warning">
            توجه داشته باشید که از یک رمز عبور قوی به‌عنوان جایگزین مقدار{' '}
            <span className="code">secure-password</span> استفاده کنید.
        </Notice>

        <h3>
            ۲) پیکربندی فایل <span className="code">liara.json</span>
        </h3>
        <p>
            در قدم بعد باید طبق مستندات{' '}
            <Link href="/app-deploy/docker/deploy-image">
                استقرار Image از DockerHub
            </Link>{' '}
            عمل کرده و پس از ایجاد فایل <span className="code">liara.json</span>{' '}
            در مسیر دلخواه، آن را به شکل زیر پیکربندی کنید.
        </p>

        <Highlight className="json">
            {`{
  "image": "arangodb:3.8.1",
  "port": 8529,
  "disks": [
      {
          "name": "disk-name1",
          "mountTo": "/var/lib/arangodb3"
      },
      {
          "name": "disk-name2",
          "mountTo": "/var/lib/arangodb3-apps"
      }
  ]
}`}
        </Highlight>
        <Notice variant="warning">
            توجه داشته باشید که مقادیر <span className="code">disk-name</span>{' '}
            را با نام دیسک‌های ایجاد شده در مرحله‌ی قبل، جایگزین کنید.
        </Notice>
        <h3>۳) استقرار ArangoDB</h3>
        <p>
            در قدم آخر برای استقرار ArangoDB بر روی لیارا کافیست دستور زیر را در
            مسیر فایل <span className="code">liara.json</span> اجرا کنید.
        </p>
        <Highlight className="bash">{`$ liara deploy`}</Highlight>

        <h3>۴) دسترسی به ArangoDB</h3>
        <p>
            پس از تکمیل فرایند استقرار و اجرای ArangoDB می‌توانید در از طریق{' '}
            <Link href="/app-features/private-network">شبکه‌ی خصوصی</Link> بر
            روی پورت <span className="code">8592</span> به دیتابیس خود دسترسی
            داشته باشید.
        </p>
        <h3>استقرار سریع</h3>
        <p>
            همچنین شما می‌توانید تمام مراحل فوق را با استفاده از{' '}
            <Link href="/cli/install">لیارا CLI</Link> انجام دهید:
        </p>
        <Highlight className="bash">
            {`$ liara deploy --app arango-db \\
               --image arangodb:3.8.1 \\
               --port 8529 \\
               --disks arango:/var/lib/arangodb3 \\
               --disks arango-apps:/var/lib/arangodb3-apps \\
               --detach`}
        </Highlight>
        <Asciinema id="454514" />
    </Layout>
);
