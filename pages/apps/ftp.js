import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات FTP</title>
    </Head>
    <h1>دسترسی به دیسک‌ها با FTP</h1>
    <span className="pageDescription">(FTP)</span>
    <p>
      برای مدیریت فایل‌ها و دایرکتوری‌های موجود در دیسک‌های پروژه‌تان، میتوانید
      از دسترسی FTP که لیارا در اختیار شما می‌گذارد استفاده کنید. همچنین این
      قابلیت را هم دارید که برای هر دیسک، حداکثر ۱۰ کاربر تعریف کنید تا هر کدام
      از اعضای تیم‌تان دسترسی منحصر به خودش را داشته باشد.
    </p>
    <h3>ایجاد دسترسی FTP</h3>
    <p>
      برای این کار ابتدا به بخش دیسک‌های پروژه‌تان در پنل بروید و روی دیسک
      مدنظرتان کلیک کنید. سپس وارد قسمت <b>دسترسی FTP</b> شوید. و در این صفحه بر
      روی دکمه ایجاد دسترسی FTP کلیک کنید:
    </p>
    <ZoomableImage src="/static/ftp/1.png" alt="صفحه‌ی خالی دسترسی FTP" />
    <p>در پنجره باز شده، نام کاربری مدنظرتان را وارد کنید:</p>
    <ZoomableImage src="/static/ftp/2.png" alt="صفحه‌ی ساخت دسترسی FTP" />
    <Notice variant="info">
      توجه داشته باشید که نام کاربری باید بین ۵ الی ۱۶ کاراکتر و تنها شامل حروف
      کوچک، عدد و ـ و همچنین یکتا باشد.
    </Notice>
    <p>
      پس از وارد کردن نام کاربری مدنظرتان در صورت در دسترس بودن نام کاربری بر
      روی دکمه ایجاد دسترسی کلیک کنید:
    </p>
    <ZoomableImage src="/static/ftp/3.png" alt="صفحه‌ی دسترسی‌ها ‌FTP" />
    <p>
      همان‌طور که مشاهده می‌کنید، دسترسی FTP با نام کاربری
      <span className="code">ftp_user</span>
      ایجاد شده است:
    </p>
    <ZoomableImage src="/static/ftp/4.png" alt="صفحه‌ی ساخت دیسک" />
    <Notice variant="info">
      با کلیک بر روی دکمه‌ی "ایجاد دسترسی FTP" می‌توانید دسترسی‌های بیشتری ایجاد
      کنید.
    </Notice>
    <h3>اتصال به دیسک</h3>
    <p>
      برای اتصال به دیسک از طریق FTP، می‌توانید از نرم‌افزار FileZilla و یا
      WinSCP استفاده کنید.
    </p>
    <h4>اتصال از طریق WinSCP</h4>
    <p>
      برای دانلود WinSCP می‌توانیداز لینک روبرو استفاده کنید:{" "}
      <a
        href="https://files.liara.ir/liara/WinSCP.5.17.5.Build.10414.zip"
        target="_blank"
      >
        دانلود WinSCP
      </a>{" "}
    </p>
    <p>
      بعد از دانلود و نصب WinSCP، هنگامی که نرم‌افزار را اجرا کنید با پنجره زیر
      روبرو خواهید شد که همانند تصویر نام کاربری، رمز عبور، هاست و پورتی که در
      صفحه‌ی دسترسی FTP در اختیارتان قرار گرفت را وارد کنید و متصل شوید:
    </p>
    <ZoomableImage
      src="/static/ftp/winscp-1.jpg"
      alt="پنجره اتصال از طریق WinSCP"
    />
    <p>
      اگر اطلاعات را بدرستی وارد کرده باشید با پنجره‌ای همانند پنجره زیر روبرو
      خواهید شد:
    </p>
    <ZoomableImage
      src="/static/ftp/winscp-2.jpg"
      alt="پنجره متصل به FTP در WinSCP"
    />
    <h4>اتصال از طریق FileZilla</h4>
    <p>
      برای دانلود FileZilla برای ویندوز، با توجه به معماری سیستم‌تان یکی از دو
      نسخه زیر را دانلود و نصب کنید:
    </p>

    <p>
      <a
        href="https://files.liara.ir/liara/FileZilla.3.48.1.x86.zip"
        target="_blank"
      >
        دانلود FileZilla برای ویندوز 32bit
      </a>
    </p>
    <p>
      <a
        href="https://files.liara.ir/liara/FileZilla.3.48.1.x64.zip"
        target="_blank"
      >
        دانلود FileZilla برای ویندوز 64bit
      </a>
    </p>

    <p>
      برای نصب FileZilla در لینوکس با توجه به توزیع لینوکس‌تان از یکی از
      دستورهای زیر استفاده کنید:
    </p>
    <p style={{ direction: "ltr" }}>
      Debian based:
      <span className="code">sudo apt install filezilla</span>
    </p>
    <p style={{ direction: "ltr" }}>
      RedHat based:
      <span className="code">sudo dnf install filezilla</span>
    </p>

    <p>
      بعد از دانلود و نصب FileZilla، در پنجره اصلی وارد بخش{" "}
      <span className="code">Site Manager</span> شوید:
    </p>
    <ZoomableImage
      src="/static/ftp/filezilla-1.jpg"
      alt="بخش Site Manager در FileZilla"
    />

    <p>
      در پنجره باز شده، نام کاربری، رمز عبور، هاست و پورتی که در صفحه‌ی دسترسی
      FTP در اختیارتان قرار گرفت را وارد کنید:
    </p>
    <ZoomableImage
      src="/static/ftp/filezilla-2.jpg"
      alt="تب General در Site Manager FileZilla"
    />

    <p>
      همچنین برای ارسال و دریافت دیتا نیاز داریم داریم تا{" "}
      <span className="code">Transfer mode</span>را در تب{" "}
      <span className="code">Transfer Settings</span> بر روی حالت{" "}
      <span className="code">Passive</span> قرار دهیم:
    </p>
    <ZoomableImage
      src="/static/ftp/filezilla-3.jpg"
      alt="بخش Transfer Settings در FileZilla"
    />
    <p>
      بعد از این تنظیمات بر روی دکمه connect کلیک کنید تا به دیسک‌تان متصل
      بشوید. اگر اطلاعات و تنظیمات را به درستی تنظیم کرده باشید با پنجره‌ای
      همانند پنجره زیر روبرو خواهید شد:
    </p>
    <ZoomableImage
      src="/static/ftp/filezilla-4.jpg"
      alt="پنجره متصل به FTP در FileZilla"
    />

    <br></br>
    <Notice variant="info">
      توجه کنید اگر دسترسی‌ای را پاک کنید اتصال کاربری که از طریق آن دسترسی متصل
      شده است قطع نمی‌شود.
    </Notice>
  </Layout>
);
