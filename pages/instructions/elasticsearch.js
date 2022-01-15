import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import DatabaseIcon from "../../components/DatabaseIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Elasticsearch - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <DatabaseIcon database="elastic" />
      <div className="page-title">
        <h1>استقرار Elasticsearch</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <Notice variant="danger">
      در حال حاضر استقرار Elasticsearch در لیارا امکان‌پذیر نیست و ما در حال
      بررسی و رفع مشکل استقرار این موتور جستجو و تحلیلگر توزیع شده در لیارا
      هستیم.
    </Notice>

    <p>
      Elasticsearch یک موتور جستجو و تحلیلگر توزیع شده است که با رابط کاربری وب
      (HTTP) و الگوی استاندارد JSON برای انتقال داده ها کار می‌کند.
    </p>

    <p>
      برای استقرار این برنامه، ابتدا لازم است که از بخش «برنامه‌ها» یک برنامه از
      نوع <Link href="/app-deploy/docker/getting-started">Docker</Link> با نام و
      پلن دلخواه‌تان بسازید.
      <br />
      سپس یک دیسک طبق مستندات «
      <Link href="/app-deploy/docker/disks">استفاده از دیسک‌ها</Link>» بسازید.
    </p>
    <p>
      سپس طبق مستندات «
      <Link href="/app-deploy/docker/envs">
        تنظیم متغیرها (Environment Variables)
      </Link>
      » متغیرهای زیر را تنظیم کنید.
      <Highlight>
        {`ELASTIC_USERNAME=[نام کاربری دلخواه]
ELASTIC_PASSWORD=[گذرواژه دلخواه]
discovery.type=single-node
path.repo=/usr/share/elasticsearch/backups
xpack.security.enabled=true`}
      </Highlight>
    </p>
    <p>
      در مرحله بعد یک فایل<span className="code">liara.json</span> طبق راهنمایی
      زیر بسازید و مشخصات مربوطه را در این فایل وارد نمایید.
      <Highlight>
        {`{
  "image": "elasticsearch:[نسخه مورد نظر]",
  "app": "[نام برنامه‌ای که ساخته‌اید]",ساخته‌اید
  "port": 9200,
  "disks": [
    {
      "name": "[نام دیسک]",
      "mountTo": "/usr/share/elasticsearch"
    }
  ]
}`}
      </Highlight>
    </p>
    <p>
      در نهایت، CMD و یا ترمینال را در پوشه‌ای که{" "}
      <span className="code">liara.json</span>
      را داخل آن قرار دادید باز کرده و سپس دستور زیر را برای استقرار و اجرای
      برنامه وارد کنید:
    </p>
    <pre>
      <code>$ liara deploy</code>
    </pre>
    <p>
      <Link href="/cli/install">راهنمای نصب Liara CLI</Link>
    </p>
    <h4>توجه داشته باشید که</h4>
    <ul>
      <li>
        بین برنامه‌ها و دیتابیس‌ها شبکه‌ی خصوصی برقرار است که در صورت استقرار
        میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از Elasticsearch، بسیار
        کاربردی است.
      </li>
      <li>
        در صفحه‌ی <Link href="/app-features/logs">لاگ‌ها</Link> امکان دنبال‌کردن
        زنده‌ی لاگ‌های‌تان را دارید.
      </li>
      <li>
        بهتر است برای تعیین نسخه از <span className="code">latest</span> استفاده
        نکنید بلکه به صورت صریح شماره نسخه مورد نظر را وارد نمایید.
      </li>
      <li>
        برای اطلاع از تنظیمات بیشتر و نسخه‌های مختلف می‌توانید از مستندات مربوطه
        در{" "}
        <Link href="https://hub.docker.com/r/elastic/elasticsearch">
          Elasticsearch
        </Link>{" "}
        استفاده کنید.
      </li>
    </ul>
  </Layout>
);
