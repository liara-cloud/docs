import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات راه‌اندازی وردپرس - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="wordpress" />
      <div className="page-title">
        <h1>وردپرس پلاس</h1>
        <span className="page-description">(WordPress plus)</span>
      </div>
    </div>

    <h2>راه‌اندازی و پیکربندی وردپرس</h2>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#setup">راه‌اندازی وردپرس</a>
      </li>
      <li>
        <a href="#php-version">انتخاب نسخه‌ی PHP</a>
      </li>
      <li>
        <a href="#php-ini-customization">شخصی‌سازی تنظیمات php.ini</a>
      </li>
      <li>
        <a href="#extensions">لیست اکستنشن‌های نصب شده</a>
      </li>
    </ul>

    <h3 id="setup">راه‌اندازی وردپرس</h3>

    <p>
      برای راه‌اندازی برنامه وردپرس در لیارا می‌توانید از منوی سرویس{" "}
      <a
        href="https://console.liara.ir/wp-plus"
        target="_blank"
        rel="noopener noreferrer"
      >
        وردپرس پلاس
      </a>
      ، روی گزینه‌ی <strong>راه‌اندازی وردپرس</strong> کلیک کنید. در بخش{" "}
      <strong>شناسه‌ی سایت</strong>، یک شناسه‌ی یکتا برای این سرویس انتخاب کنید
      و از بخش <strong>انتخاب پلن</strong>، پلن‌های مورد نظرتان را انتخاب کنید.
      درنهایت روی گزینه‌ی <strong>راه‌اندازی و نصب وردپرس</strong> کلیک کنید و
      منتظر بمانید تا برنامه به‌طور کامل راه‌اندازی شود.
    </p>

    <p>
      <strong>راهنما:</strong> برای نصب قالب با استفاده از بسته نصب آسان
      (duplicator)، <Link href="/wp-plus/duplicator">مستندات</Link> مربوطه را
      مطالعه کنید.
    </p>
    {/* <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p> 
    <video
      src="https://files.liara.ir/liara/wordpress/create-wordpress.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video> 
    <ZoomableImage src="/static/wp-add.jpg" /> 
    <ZoomableImage src="/static/wp-install.png" /> */}

    <h3 id="php-version">انتخاب نسخه‌ی PHP</h3>
    <p>
      در زمان راه‌اندازی برنامه‌های وردپرس پلاس می‌توانید نسخه‌ی PHP مورد نظر
      خود را انتخاب کنید و درصورتی که بعد از راه‌اندازی، نیاز به به‌روزرسانی
      نسخه‌ی PHP وجود داشت می‌توانید از منوی تنظیمات، نسخه‌ی دیگری از PHP را
      برای اجرای برنامه وردپرس خود انتخاب کنید.
    </p>

    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌کنیم:</p>
    <ul>
      <li>7.4</li>
      <li>8.1</li>
    </ul>

    <h3 id="php-ini-customization">
      شخصی‌سازی تنظیمات <spapn className="code">php.ini</spapn>
    </h3>
    <p>
      برای شخصی‌سازی تنظیمات <strong>php.ini</strong> می‌توانید وارد{" "}
      <strong>تنظیمات</strong> برنامه شوید و پیکربندی پیش‌فرض را نسبت به
      نیازمندی‌تان ویرایش کنید. برای مثال برای افزایش{" "}
      <strong>حداکثر حجم مجاز برای آپلود فایل</strong> به{" "}
      <strong>۲۵۶ مگابایت</strong> می‌توانید مقادیر{" "}
      <strong>upload_max_filesize</strong> و <strong>post_max_size</strong> را
      به‌شکل زیر ویرایش کنید:
    </p>
    <Highlight className="plaintext">
      {`file_uploads = On
memory_limit = 64M
upload_max_filesize = 256M
post_max_size = 256M
max_execution_time = 600`}
    </Highlight>

    <h3 id="extensions">لیست اکستنشن‌های نصب شده</h3>
    <p>در برنامه‌های وردپرس پلاس، اکستنشن‌های PHP زیر نصب شده‌ است:</p>
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
