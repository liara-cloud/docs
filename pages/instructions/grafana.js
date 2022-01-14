import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Asciinema from "../../components/Asciinema";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Grafana - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="grafana" />
      <div className="page-title">
        <h1>استقرار Grafana</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر Grafana به‌صورت مستقیم در لیارا پشتیبانی نمی‌شود اما شما
      می‌توانید این پلتفرم را طبق دستورالعمل زیر در لیارا مستقر کنید.
    </Notice>

    <p>
      گرافانا پلتفرمی بسیار محبوب و ساده برای تحلیل و نمایش داده‌های به دست آمده
      از پایگاه‌های داده خصوصا دیتابیس‌های سری زمانی (Time-series Databases)
      است. گرافانا از دیتابیس‌های مختلفی از جمله InfluxDB و Prometheus پشتیبانی
      می‌کند.
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
      در مرحله بعد یک فایل<span className="code"> liara.json</span> طبق راهنمایی
      زیر بسازید و مشخصات مربوطه را در این فایل وارد نمایید.
      <Highlight>
        {`{
  "image": "grafana/grafana:[نسخه مورد نظر]",
  "app": "[نام برنامه‌ای که ساخته‌اید]",
  "port": 3000,
  "disks": [
    {
      "name": "[نام دیسک]",
      "mountTo": "/var/lib/grafana"
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
        میکروسرویس‌ها، ارتباط درون‌شبکه‌ای و استفاده از Grafana، بسیار کاربردی
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
        در <Link href="https://hub.docker.com/r/grafana/grafana">Grafana</Link>{" "}
        استفاده کنید.
      </li>
    </ul>
    <h3>استقرار سریع</h3>
    <p>
      همچنین شما می‌توانید تمام مراحل فوق را با استفاده از{" "}
      <Link href="/cli/install">لیارا CLI</Link> انجام دهید:
    </p>
    <Highlight className="bash">
      {`$ liara deploy --app grafana-platform \\
               --image grafana/grafana:8.0.0 \\
               --port 3000 \\
               --disks grafana:/var/lib/grafana \\
               --detach`}
    </Highlight>
    <Asciinema id="454560" />
  </Layout>
);
