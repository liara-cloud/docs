import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از دیسک‌ها در برنامه‌های .Net Core - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="netcore" />
      <div className="page-title">
        <h1>پلتفرم .Net</h1>
        <span className="page-description">(.Net Platform)</span>
      </div>
    </div>

    <h3>استفاده از دیسک‌ها</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#create-new-disk">ساخت یک دیسک جدید</a>
      </li>
      <li>
        <a href="#mount-disk">اتصال دیسک به مسیر مورد نظر</a>
      </li>
      <li>
        <a href="#mount-disks">اتصال چند دیسک به مسیرهای مختلف</a>
      </li>
      <li>
        <a href="#increase-tmp-size">افزایش فضای مسیر /tmp</a>
      </li>
    </ul>

    <p>
      <Link href="/app-features/file-system">فایل سیستم برنامه‌های لیارا</Link>{" "}
      Read-Only است یعنی بعد از استقرار برنامه تنها می‌توانیم فایل‌ها و
      دایرکتوری‌ها را مشاهده کنیم و امکان ایجاد هیچ گونه تغییری در این فایل
      سیستم وجود ندارد.
    </p>
    <p>
      حال در این تجربه‌ی جدید که امنیت بیشتر از مزیت‌های آن است، درصورت نیاز به
      ذخیره‌ی فایل‌هایی مانند فایل‌های رسانه در کنار سورس‌کد برنامه در مسیری
      مشخص باید از دیسک‌ها استفاده کرد که آموزش ایجاد دیسک و نحوه‌ی اتصال آن به
      مسیر مورد نظر به شرح زیر است:
    </p>

    <Notice variant="warning">
      توجه داشته باشید که با وجود Read-Only بودن فایل‌سیستم برنامه‌های لیارا،
      دایرکتوری <span className="code">/tmp</span> از این قاعده مستثنی است و شما
      می‌توانید از این دایرکتوری که در همه پلن‌های ارائه شده، فضایی برابر ۱۰۰
      مگابایت دارد، برای ذخیره لاگ‌ها، فایل‌ها آپلودی موقتی و غیره استفاده کنید.{" "}
      <a href="#increase-tmp-size">توضیحات بیشتر</a>
    </Notice>

    <h3 id="create-new-disk">ساخت یک دیسک جدید</h3>

    <h4>ساخت یک دیسک جدید در پنل کاربری</h4>
    <ZoomableImage src="/static/create-new-disk.gif" />

    <h4>ساخت یک دیسک جدید با لیارا CLI</h4>
    <Asciinema id="455808" />

    <h3 id="mount-disk">اتصال دیسک به مسیر مورد نظر</h3>

    <p>
      توجه داشته باشید که فایل‌های ذخیره شده در دیسک‌ها با استقرار نسخه‌های جدید
      برنامه به‌روزرسانی نخواهند شد و باید با استفاده از{" "}
      <Link href="/storage/disks/ftp">دسترسی FTP</Link> یا به‌صورت نرم‌افزاری
      فایل‌های مورد نظر خود را بر روی دیسک مربوطه آپلود کنید.
    </p>

    <h4>
      اتصال دیسک به مسیر مورد نظر در فایل{" "}
      <span className="code">liara.json</span>
    </h4>

    <p>
      برای اتصال دیسک ایجاد شده در مرحله‌ی قبل به مسیر{" "}
      <span className="code">MyStaticFiles</span> باید قطعه کد زیر را در فایل ‌
      <span className="code">liara.json</span> قرار داده و با اجرای دستور{" "}
      <span className="code">liara deploy</span> سورس‌کد خود را بر روی برنامه‌ی
      تهیه شده مستقر کنید.
    </p>

    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "data",
      "mountTo": "MyStaticFiles"
    }
  ]
}`}
    </Highlight>

    <h4>اتصال دیسک به مسیر مورد نظر در زمان استقرار</h4>

    <p>
      به‌منظور اتصال دیسک به مسیر مورد نظر در زمان استقرار بایستی{" "}
      <span className="code">disks</span> را به شکل زیر در دستور{" "}
      <Link href="/cli/deploy">liara deploy</Link> مشخص کنید:
    </p>

    <Highlight className="bash">{`$ liara deploy --disks data:MyStaticFiles`}</Highlight>

    <h3 id="mount-disks">اتصال چند دیسک به مسیرهای مختلف</h3>

    <h4>
      اتصال چند دیسک به مسیرهای مختلف در فایل{" "}
      <span className="code">liara.json</span>
    </h4>
    <p>
      به‌دلیل امکان تعیین اندازه برای هر دیسک می‌توانید از فضای قابل رزرو پلن
      تهیه شده‌ی خود برای ایجاد چندین دیسک استفاده کرده و آن‌ها را به شکل زیر به
      مسیرهای مختلفی متصل کنید:
    </p>

    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "data",
      "mountTo": "MyStaticFiles"
    },
    {
      "name": "logs",
      "mountTo": "logs"
    }
  ]
}`}
    </Highlight>

    <h4>اتصال چند دیسک به مسیرهای مختلف در زمان استقرار</h4>
    <Highlight className="bash">{`$ liara deploy --disks data:MyStaticFiles --disks logs:logs`}</Highlight>

    <h3 id="increase-tmp-size">
      افزایش فضای مسیر <span className="code">/tmp</span>
    </h3>

    <p>
      در تمام پلن‌های لیارا ۱۰۰ مگابایت فضا به مسیر{" "}
      <span className="code">/tmp</span> برنامه اختصاص داده شده است اما شما
      می‌توانید دیسکی با فضای دلخواه ایجاد کرده و آن را به این مسیر متصل کنید:
    </p>

    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "data",
      "mountTo": "MyStaticFiles"
    },
    {
      "name": "logs",
      "mountTo": "logs"
    },
    {
      "name": "temp",
      "mountTo": "/tmp"
    }
  ]
}`}
    </Highlight>

    <p>
      همچنین شما می‌توانید این فرایند را با استفاده از{" "}
      <Link href="/cli/install">لیارا CLI</Link> انجام دهید:
    </p>
    <Highlight className="bash">
      {`$ liara disk:create --name temp --size 1
$ liara deploy --disks data:MyStaticFiles \\
               --disks logs:logs \\
               --disks temp:/tmp`}
    </Highlight>

    <Link href="/app-deploy/netcore/domain">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
