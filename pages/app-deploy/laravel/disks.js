import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از دیسک‌ها در برنامه‌های Laravel - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/laravel.svg"
        alt="laravel"
      />
      <div className="page-title">
        <h1>استفاده از دیسک‌ها در برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#create-new-disk">ساخت یک دیسک جدید</a></li>
      <li><a href="#mount-disk">اتصال دیسک به مسیر مورد نظر در فایل liara.json</a></li>
      <li><a href="#mount-disks">اتصال چند دیسک به مسیرهای مختلف در فایل liara.json</a></li>
      <li><a href="#increase-tmp-size">افزایش فضای مسیر /tmp</a></li>
      <li><a href="#storage-link">لینک‌کردن پوشه‌ی storage به پوشه‌ی public</a></li>
    </ul>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/laravel-disks.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      <Link href="/app-features/file-system">فایل سیستم برنامه‌های لیارا</Link> Read-Only است یعنی بعد از استقرار برنامه تنها می‌توانیم فایل‌ها و دایرکتوری‌ها را مشاهده کنیم و امکان ایجاد هیچ گونه تغییری در این فایل سیستم وجود ندارد.
    </p>
    <p>
      حال در این تجربه‌ی جدید که امنیت بیشتر از مزیت‌های آن است، درصورت نیاز به ذخیره‌ی فایل‌هایی مانند فایل‌های رسانه در کنار سورس‌کد برنامه در مسیری مشخص باید از دیسک‌ها استفاده کرد که آموزش ایجاد دیسک و نحوه‌ی اتصال آن به مسیر مورد نظر به شرح زیر است:
    </p>

    <Notice variant="warning">
      توجه داشته باشید که با وجود Read-Only بودن فایل‌سیستم برنامه‌های لیارا، دایرکتوری <span className="code">/tmp</span> از این قاعده مستثنی است و شما می‌توانید از این دایرکتوری که در همه پلن‌های ارائه شده، فضایی برابر ۱۰۰ مگابایت دارد، برای ذخیره لاگ‌ها، فایل‌ها آپلودی موقتی و غیره استفاده کنید.
      {' '}
      <a href="#increase-tmp-size">
        توضیحات بیشتر
      </a>
    </Notice>

    <h3 id="create-new-disk">ساخت یک دیسک جدید</h3>

    <ZoomableImage src="/static/create-new-disk.gif" />

    <h3 id="mount-disk">اتصال دیسک به مسیر مورد نظر در فایل <span className="code">liara.json</span></h3>

    <p>
      برای اتصال دیسک ایجاد شده در مرحله‌ی قبل به مسیر <span className="code">storage</span> باید قطعه کد زیر را در فایل ‌<span className="code">liara.json</span> قرار داده و با اجرای دستور <span className="code">liara deploy</span> سورس‌کد خود را بر روی برنامه‌ی تهیه شده مستقر کنید.
    </p>

    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "data",
      "mountTo": "storage"
    }
  ]
}`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که فایل‌های ذخیره شده در دیسک‌ها با استقرار نسخه‌های جدید برنامه به‌روزرسانی نخواهند شد و باید با استفاده از <Link href="/storage/disks/ftp">دسترسی FTP</Link> یا به‌صورت نرم‌افزاری فایل‌های مورد نظر خود را بر روی دیسک مربوطه آپلود کنید.
    </Notice>

    <h3 id="mount-disks">اتصال چند دیسک به مسیرهای مختلف در فایل <span className="code">liara.json</span></h3>
    <p>
      به‌دلیل امکان تعیین اندازه برای هر دیسک می‌توانید از فضای قابل رزرو پلن تهیه شده‌ی خود برای ایجاد چندین دیسک استفاده کرده و آن‌ها را به شکل زیر به مسیرهای مختلفی متصل کنید:
    </p>

    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "data",
      "mountTo": "storage"
    },
    {
      "name": "uploads",
      "mountTo": "public/uploads"
    }
  ]
}`}
    </Highlight>

    <h3 id="increase-tmp-size">افزایش فضای مسیر <span className="code">/tmp</span></h3>

    <p>
      در تمام پلن‌های لیارا ۱۰۰ مگابایت فضا به مسیر <span className="code">/tmp</span> برنامه  اختصاص داده شده است اما شما می‌توانید دیسکی با فضای دلخواه ایجاد کرده و آن را به این مسیر متصل کنید:
    </p>

    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "data",
      "mountTo": "storage"
    },
    {
      "name": "uploads",
      "mountTo": "public/uploads"
    },
    {
      "name": "temp",
      "mountTo": "/tmp"
    }
  ]
}`}
    </Highlight>

    <h3 id="storage-link">
      لینک‌کردن پوشه‌ی <span className="code">storage</span> به پوشه‌ی{" "}
      <span className="code">public</span>
    </h3>
    <p>
      برای دسترسی به فایل‌های پوشه‌های
      <span className="code">storage</span>، طبق مستندات لاراول باید این پوشه به
      پوشه‌ی <span className="code">public</span> لینک شود.
      لیارا به‌صورت خودکار، در زمان استقرار، دستور
      <span className="code">php artisan storage:link</span>
      را اجرا می‌کند و نیازی نیست که اقدام خاصی انجام دهید.
    </p>

    <Link href="/app-deploy/laravel/domain">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
