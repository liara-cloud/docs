import Head from "next/head";
import Layout from "../../../components/Layout";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات WordPress - سرویس ابری لیارا</title>
    </Head>


    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/wordpress.svg"
        alt="wordpress"
      />
      <div className="page-title">
        <h1>برنامه‌های آماده WordPress</h1>
        <span className="page-description">(WordPress one-click app)</span>
      </div>
    </div>

    <h3>نصب و راه‌اندازی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#setup">نصب و اجرا</a></li>
      <li><a href="#php-ini-customization">شخصی‌سازی تنظیمات php.ini</a></li>
      <li><a href="#extensions">لیست اکستنشن‌های نصب شده</a></li>
    </ul>

    <h3 id="setup">نصب و اجرا</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/wordpress.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      کافیست از بخش <b>برنامه‌های آماده</b> روی WORDPRESS کلیک کنید و سپس شناسه
      برنامه‌‌ی موردنظرتان را وارد کنید، مثلا{" "}
      <span className="code">my-blog</span>. سپس در بخش <b>انتخاب دیتابیس</b>{" "}
      می‌توانید انتخاب کنید که به صورت خودکار دیتابیس توسط لیارا ایجاد شود یا
      این که خودتان یک دیتابیس اجرا کنید و WordPress را به آن متصل کنید. توصیه
      ما این است که اجازه دهید لیارا به صورت خودکار برای شما دیتابیس بسازد زیرا
      فرایند را بسیار ساده و سریع‌تر می‌کند و همچنین به صورت خودکار برنامه
      WordPress شما به دیتابیس‌ متصل می‌شود و شما می‌توانید به صورت مستقیم بدون
      درگیری با بخش‌های مرتبط با کانفیگ دیتابیس، وارد پنل WordPress شوید.
    </p>
    <ZoomableImage src="/static/wp-add.jpg" />

    <p>
      بعد از طی کردن مراحل بالا و با کلیک روی دکمه <b>ایجاد برنامه،</b> وارد
      صفحه ‌ای شبیه زیر می‌شوید:
    </p>
    <ZoomableImage src="/static/wp-install.png" />
    <p>بعد از اتمام موفقیت‌آمیز، می‌توانید لینک برنامه‌ی‌تان را مشاهده کنید.</p>

    <h3 id="php-ini-customization">
      شخصی‌سازی تنظیمات <span className="code">php.ini</span>
    </h3>
    <p>
      با ورود به بخش{" "}
      <a href="/app-features/environment-variables">تنظیمات برنامه</a>، این
      امکان را دارید که تنظیمات
      <span className="code">php.ini</span>
      را تغییر و گسترش دهید. برای مثال، ممکن است بخواهید که «حداکثر حجم مجاز
      برای آپلود فایل» در سایت وردپرسی‌تان را شخصی‌سازی کنید.
    </p>
    <pre>
      <code>
        {`file_uploads = On
memory_limit = 64M
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 600`}
      </code>
    </pre>

    <Notice variant="info">
      شما می‌توانید به هر برنامه آماده‌ای که در لیارا ایجاد می‌کنید، دامنه
      اختصاصی متصل کنید. کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کنید و طبق مستندات، دامنه‌ اختصاصی را به برنامه متصل کنید.
    </Notice>

    <h3 id="extensions">لیست اکستنشن‌های نصب شده</h3>
    <p>در برنامه‌ی آماده‌ی وردپرس، اکستنشن‌های PHP زیر نصب شده‌اند:</p>
    <pre>
      <code>{`[PHP Modules]
bcmath
Core
ctype
curl
date
dom
exif
fileinfo
filter
ftp
gd
hash
iconv
imagick
ionCube Loader
json
libxml
mbstring
mysqli
mysqlnd
openssl
pcre
PDO
pdo_sqlite
Phar
posix
readline
redis
Reflection
session
SimpleXML
soap
sodium
SourceGuardian
SPL
sqlite3
standard
tokenizer
xml
xmlreader
xmlwriter
Zend OPcache
zip
zlib

[Zend Modules]
SourceGuardian
Zend OPcache
the ionCube PHP Loader + ionCube24`}</code>
    </pre>
  </Layout>
);
