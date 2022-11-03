import Link from "next/link";
import Head from "next/head";
import Layout from "./Layout";
import Notice from "./Notice";
import PlatformIcon from "./PlatformIcon";
import ZoomableImage from "./ZoomableImage";

export default function Domain({ platform }) {
  const platforms = [
    { lCase: "nodejs", uCase: "NodeJS", icon: "nodejs", next: "email" },
    { lCase: "django", uCase: "Django", icon: "django", next: "email" },
    { lCase: "flask", uCase: "Flask", icon: "flask", next: "email" },
    { lCase: "laravel", uCase: "Laravel", icon: "laravel", next: "email" },
    { lCase: "php", uCase: "PHP", icon: "php", next: "email" },
    { lCase: "netcore", uCase: ".Net", icon: "netcore", next: "email" },
    { lCase: "react", uCase: "React", icon: "react", next: "tips" },
    { lCase: "vue", uCase: "Vue", icon: "vue", next: "tips" },
    { lCase: "static", uCase: "Static", icon: "HTML5", next: "tips" },
    { lCase: "angular", uCase: "Angular", icon: "angularjs", next: "tips" },
    { lCase: "docker", uCase: "Docker", icon: "docker", next: "tips" },
  ];

  const type = platforms.find(type => type.lCase === platform);

  return (
    <Layout>
      <Head>
        <title>
          مستندات اتصال دامنه به برنامه‌های {type.uCase} - سرویس ابری لیارا
        </title>
      </Head>

      <div className="page-head">
        <PlatformIcon platform={type.icon} />
        <div className="page-title">
          <h1>پلتفرم {type.uCase}</h1>
          <span className="page-description">({type.uCase} Platform)</span>
        </div>
      </div>

      <h2>اتصال دامنه به برنامه‌های {type.uCase}</h2>

      <h4>فهرست عناوین:</h4>
      <ul className="mt-0">
        <li>
          <a href="#add-domain">اضافه کردن دامنه</a>
        </li>
        <li>
          <a href="#add-www">ساخت زیردامنه‌ی www</a>
        </li>
        <li>
          <a href="#enable-ssl">تهیه گواهی SSL</a>
        </li>
        <li>
          <a href="#add-subdomain">اضافه کردن زیردامنه‌ی دلخواه</a>
        </li>
      </ul>

      {/* <Notice variant="warning">
        در حال حاضر به‌دلیل اختلال در زیرساخت کشور امکان استفاده از سرویس
        Cloudflare وجود ندارد و به‌عنوان جایگزین می‌توانید از{" "}
        <a
          href="https://console.liara.ir/zones"
          target="_blank"
          rel="noopener noreferrer"
        >
          سرویس DNS لیارا
        </a>{" "}
        استفاده کنید.
      </Notice> */}

      <h3 id="add-domain">اضافه کردن دامنه</h3>

      <h5 id="add-domain">سرویس DNS لیارا</h5>
      <video
        src="https://files.liara.ir/liara/domain/dns.mp4"
        controls="controls"
        className="block w-full"
        width="100%"
      ></video>

      <h5 id="add-domain">سرویس DNS کلودفلر</h5>
      <video
        src="https://files.liara.ir/liara/domain/domain.mp4"
        controls="controls"
        className="block w-full"
        width="100%"
      ></video>

      <p>
        برای اتصال دامنه به برنامه مورد نظرتان در لیارا باید وارد این برنامه
        شوید و از منوی سمت راست، روی گزینه‌ی <strong>دامنه‌ها</strong> کلیک
        کنید. سپس روی گزینه‌ی{" "}
        <strong>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ display: "inline" }}
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
          افزودن دامنه
        </strong>{" "}
        کلیک کرده و نام دامنه‌تان (مثلا: example.com) را وارد کنید. درنهایت با
        کلیک روی گزینه‌ی <strong>ایجاد دامنه</strong>، دامنه شما در لیارا اضافه
        می‌شود و همچنین به صفحه‌ی <strong>مدیریت دامنه</strong> هدایت می‌شوید.
      </p>

      {/* <ZoomableImage src="https://files.liara.ir/docs/domain/add-domain.gif" /> */}

      <p>
        در این مرحله باید رکوردهای DNS درخواست شده را با استفاده از یک سرویس DNS
        مانند Cloudflare بر روی دامنه‌تان تنظیم کنید. درنهایت پس از ثبت رکوردهای
        DNS می‌توانید بر روی گزینه‌ی{" "}
        <strong>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ display: "inline" }}
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>{" "}
          بررسی وضعیت رکوردها
        </strong>{" "}
        کلیک کنید و با تغییر تیک‌های قرمز رنگ به سبز، یعنی اتصال دامنه‌ی شما به
        لیارا با موفقیت صورت گرفته است.
      </p>

      {/* <ZoomableImage src="https://files.liara.ir/docs/domain/check-dns-records.gif" /> */}

      <Notice variant="info">
        ۱. توجه داشته باشید که درصورت استفاده از CDN باید گواهی SSL را نیز از
        سرویس‌دهنده‌ی DNS فعلی‌تان تهیه کنید.
        <br />
        ۲. درصورت استفاده از CDN می‌توانید تیک قرمز رنگ و خطای تنظیم نشدن
        رکوردها را نادیده بگیرید.
        <br />
        ۳. در سرویس Cloudflare، تنظیمات SSL را همیشه روی Flexible تنظیم کنید.
      </Notice>

      <h3 id="add-www">ساخت زیردامنه‌ی www</h3>

      <p>
        درصورتی که ریشه دامنه‌تان (مثلا: example.com) را در لیارا اضافه کرده
        باشید می‌توانید در صفحه‌ی مدیریت این دامنه، زیردامنه‌ی{" "}
        <span className="code">www</span> را تنها با یک کلیک در لیارا اضافه
        کنید.
      </p>

      {/* <ZoomableImage src="https://files.liara.ir/docs/domain/add-www-subdomain.gif" /> */}

      <h3 id="enable-ssl">تهیه گواهی SSL</h3>

      <p>
        لیارا این امکان را به شما می‌دهد تا برای دامنه‌ها و زیردامنه‌های
        اختصاصی‌ خود تنها با یک کلیک و بدون هیچ تنظیماتی، SSL رایگان تهیه کنید.
        تمدید SSL نیز در زمان مناسب و به صورت خودکار توسط لیارا انجام خواهد شد.
      </p>

      <p>
        برای تهیه‌ی و فعال‌سازی گواهی SSL باید در صفحه‌ی{" "}
        <strong>مدیریت دامنه</strong>، روی گزینه‌ی{" "}
        <strong>تهیه گواهی SSL</strong> کلیک کنید.
      </p>

      {/* <ZoomableImage src="https://files.liara.ir/docs/domain/enable-ssl.gif" /> */}

      <p>
        درنهایت وب‌سایت شما بعد از فعال شدن موفقیت‌آمیز گواهی SSL بر روی پروتکل
        HTTPS در دسترس قرار می‌گیرد.
      </p>

      <h3 id="add-subdomain">اضافه کردن زیردامنه‌ی دلخواه</h3>

      <p>
        حال درصورتی که قصد داشته باشید زیردامنه‌‌ی دیگری (مثلا:{" "}
        <span className="code">api</span>) را به برنامه‌ی خود متصل کنید، باید
        طبق مراحل <strong>اضافه کردن دامنه</strong>، وارد این برنامه شوید و از
        منوی سمت راست، روی گزینه‌ی <strong>دامنه‌ها</strong> کلیک کنید. سپس روی
        گزینه‌ی{" "}
        <strong>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ display: "inline" }}
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
          افزودن دامنه
        </strong>{" "}
        کلیک کرده و نام دامنه‌تان را به‌صورت{" "}
        <span className="code">api.example.com</span> وارد کنید. درنهایت با کلیک
        روی گزینه‌ی <strong>ایجاد دامنه</strong>، زیردامنه‌ی شما در لیارا اضافه
        می‌شود و همچنین به صفحه‌ی <strong>مدیریت دامنه</strong> هدایت می‌شوید.
      </p>

      <ZoomableImage src="https://files.liara.ir/docs/domain/add-api-subdomain.gif" />

      <p>
        در این مرحله نیز باید رکوردهای DNS درخواست شده را با استفاده از یک سرویس
        DNS مانند Cloudflare بر روی دامنه‌تان تنظیم کنید. درنهایت پس از ثبت
        رکوردهای DNS می‌توانید بر روی گزینه‌ی{" "}
        <strong>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ display: "inline" }}
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>{" "}
          بررسی وضعیت رکوردها
        </strong>{" "}
        کلیک کنید و با تغییر تیک‌های قرمز رنگ به سبز، یعنی اتصال دامنه‌ی شما به
        لیارا با موفقیت صورت گرفته است.
      </p>

      <Notice variant="info">
        ۱. توجه داشته باشید که درصورت استفاده از CDN باید گواهی SSL را نیز از
        سرویس‌دهنده‌ی DNS فعلی‌تان تهیه کنید.
        <br />
        ۲. درصورت استفاده از CDN می‌توانید تیک قرمز رنگ و خطای تنظیم نشدن
        رکوردها را نادیده بگیرید.
        <br />
        ۳. در سرویس Cloudflare، تنظیمات SSL را همیشه روی Flexible تنظیم کنید.
      </Notice>

      <h3 id="faq">
        از دامنه‌های
        <span className="code">.ir</span>
        هم پشتیبانی می‌کنید؟
      </h3>
      <p>
        بله. محدودیتی از لحاظ TLD وجود ندارد و می‌توانید از هر پسوند دلخواهی
        استفاده کنید.
      </p>

      <h3>
        حتی بعد از تغییر DNS ها، وضعیت همچنان «در انتظار تغییر DNS ها...» است.
      </h3>
      <p>
        تغییر DNS های دامنه‌های <span className="code">.ir</span>
        ممکن است بین ۴ تا ۷۲ ساعت زمان‌بر باشد. سرعت اعمال این تغییرات وابسته به
        nic.ir است، بنابراین باید صبور باشید. معمولا دامنه‌های{" "}
        <span className="code">.com</span> خیلی سریع‌تر از{" "}
        <span className="code">.ir</span> به‌روز می‌شوند. در صورتی که بعد از طی
        این مدت، باز هم مورد رفع نشد، از طریق تیکت به پشتیبانی لیارا اطلاع دهید.
      </p>
      <Notice variant="info">
        برای مشاهده وضعیت DNS های دامنه‌ی‌تان در سراسر جهان، می‌توانید از وبسایت{" "}
        <a href="https://dnschecker.org/" target="_blank">
          dnschecker.org
        </a>{" "}
        استفاده کنید.
      </Notice>

      <br />

      <Link href={`/app-deploy/${type.lCase}/${type.next}`}>
        متوجه شدم، برو گام بعدی!
      </Link>
    </Layout>
  );
}
