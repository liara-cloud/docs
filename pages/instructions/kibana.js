import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Asciinema from "../../components/Asciinema";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Kibana - سرویس ابری لیارا</title>
    </Head>
    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/kibana.svg"
        alt="kibana"
      />
      <div className="page-title">
        <h1>استقرار Kibana</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر Kibana به‌صورت مستقیم در لیارا پشتیبانی نمی‌شود اما شما
      می‌توانید این پلتفرم را طبق دستورالعمل زیر در لیارا مستقر کنید.
    </Notice>

    <p>
      Kibana یک پلتفرم است که با استفاده از آن می‌توان ساز و کارهایی مثل ایجاد
      گزارش، ایجاد نوتیفیکشن، مانیتورینگ بخش‌های مختلف رویدادها و ... را در
      اختیار داشت. داده‌های kibana از طریق beats جمع آوری شده و با logstash به
      elasticsearch منتقل می‌شود سپس kibana امکان رصد و مانیتورینگ را می‌دهد.
    </p>
    <p>
      برای استقرار این برنامه، ابتدا لازم است که از بخش «برنامه‌ها» یک برنامه از
      نوع <Link href="/app-deploy/docker/getting-started">Docker</Link> با نام و
      پلن دلخواه‌تان بسازید.
      <br />
      سپس دو دیسک طبق مستندات «
      <Link href="/app-deploy/docker/disks">استفاده از دیسک‌ها</Link>» بسازید.
    </p>
    <p>
      سپس طبق مستندات «
      <Link href="/app-deploy/docker/envs">
        تنظیم متغیرها (Environment Variables)
      </Link>
      » متغیر زیر را تنظیم کنید.
      <Highlight>
        {`KIBANA_ELASTICSEARCH_URL=[آدرس سرور الستیک سرچ شما یا نام برنامه الستیک سرچ مستقر شده شما در لیارا]`}
      </Highlight>
    </p>
    <p>
      در مرحله بعد یک فایل<span className="code">liara.json</span> طبق راهنمایی
      زیر بسازید و مشخصات مربوطه را در این فایل وارد نمایید.
      <Highlight>
        {`{
  "image": "bitnami/kibana:[نسخه مورد نظر]",
  "app": "[نام برنامه‌ای که ساخته‌اید]",
  "port":5601,
  "disks": [
    {
      "name": "[نام دیسک اول]",
      "mountTo": "/opt/bitnami/kibana"
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
    <h3>توجه داشته باشید که</h3>
    <ul>
      <li>
        بین برنامه‌ها و دیتابیس‌ها شبکه‌ی خصوصی برقرار است که در صورت استقرار
        میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از Kibana، بسیار کاربردی
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
      <li>
        برای اطلاع از تنظیمات بیشتر و نسخه‌های مختلف می‌توانید از مستندات مربوطه
        در{" "}
        <Link href="https://hub.docker.com/r/bitnami/kibana">
          Bitnami Kibana
        </Link>{" "}
        استفاده کنید.
      </li>
    </ul>

    <h3>استقرار سریع</h3>
    <p>
      همچنین شما می‌توانید تمام مراحل فوق را با استفاده از{" "}
      <Link href="/cli/install">لیارا CLI</Link> انجام دهید:
    </p>
    <Highlight className="bash">
      {`$ liara deploy --app kibana-platform \\
               --image bitnami/kibana:7 \\
               --port 5601 \\
               --disks kibana:/opt/bitnami/kibana \\
               --disks bitnami:/bitnami \\
               --detach`}
    </Highlight>
    <Asciinema id="454553" />
  </Layout>
);
