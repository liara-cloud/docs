import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های PHP - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/php.svg"
        alt="php"
      />
      <div className="page-title">
        <h1>برنامه‌های PHP</h1>
        <span className="page-description">(PHP Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h3>استقرار برنامه‌های PHP</h3>
    <p>
      توجه داشته باشید که لازم است در ریشه‌ی برنامه‌ی‌تان حداقل یک فایل با نام
      <span className="code">index.php</span>
      داشته باشید. در غیر این صورت دستور liara deploy نمی‌تواند پلتفرم
      برنامه‌ی‌تان را تشخیص دهد و لازم خواهد بود با استفاده از پارامتر
      <span className="code">--platform=php</span>
      پلتفرم‌تان را مشخص کنید.
    </p>

    <Notice variant="info">
      اگر می‌خواهید از پلتفرم PHP برای استقرار WordPress استفاده کنید، توصیه
      می‌کنیم که از قابلیت «برنامه‌های آماده» لیارا استفاده کنید. می‌توانید از
      بخش ایجاد برنامه، وارد بخش برنامه‌های آماده شوید و با یک کلیک وردپرس به
      همراه دیتابیس را تهیه و نصب کنید.
    </Notice>

    <h3>تنظیم TimeZone</h3>
    <p>
      برای تنظیم TimeZone به ایران می‌توانید در برنامه‌ی‌تان از این تابع PHP
      استفاده کنید:
    </p>
    <Highlight className="php">
      {`<?php
date_default_timezone_set("Asia/tehran");`}
    </Highlight>

    <h3>تنظیمات اختصاصی php.ini</h3>
    <p>
      از طریق ایجاد یک فایل با نام
      <span className="code">liara_php.ini</span>
      داخل ریشه‌ی برنامه‌ی‌تان می‌توانید تنظیمات PHP را شخصی‌سازی کنید. برای
      مثال، ممکن است بخواهید که حداکثر حجم مجاز برای آپلود فایل در سایت‌تان را
      شخصی‌سازی کنید. پس لازم است که فایل
      <span className="code">liara_php.ini</span>
      را به برنامه‌ی‌تان اضافه کرده و محتویات آن را برابر تکه‌کد قرار دهید:
    </p>
    <pre>
      <code>
        {`file_uploads = On
memory_limit = 128M
upload_max_filesize = 64M
post_max_size = 128M
max_execution_time = 600`}
      </code>
    </pre>
    <p>
      بعد از اضافه کردن این فایل، در استقرار بعدی برنامه شما با این تنظیمات شروع
      به کار خواهد کرد.
    </p>

    <h3>تنظیمات اختصاصی htaccess</h3>
    <p>
      از آن‌جایی که در لیارا برنامه‌های PHP به وسیله Apache اجرا می‌شوند، شما
      می‌توانید تنظیمات دلخواه وب‌سروری خود را در فایل‌های{" "}
      <span className="code">.htaccess</span> قرار دهید. برای نمونه فرض کنید
      می‌خواهید از انتهای همه URL ها php. را حذف کنید. کافیست یک فایل htaccess.
      به ریشه برنامه‌ی‌تان اضافه کنید و سپس مقادیر زیر را در آن قرار دهید. بعد
      از اضافه کردن می‌توانید لینکی مثل{" "}
      <span className="code">https://liara.ir/about.php</span> را به صورت{" "}
      <span className="code">https://liara.ir/about</span> مشاهده کنید.
    </p>
    <pre>
      <code>
        {`<IfModule mod_rewrite.c>

    RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME}\.php -f
    RewriteRule ^(.*)$ $1.php [NC,L]

</IfModule>`}
      </code>
    </pre>
    <p>
      {" "}
      شما می‌توانید هر تنظیمی که از قبل در htaccess. برنامه‌ی‌تان داشتید را به
      لیارا نیز منتقل کنید. اگر مشکلی در این مورد برخوردید حتما با پشتیبانی
      لیارا در میان بگذارید.
    </p>

    <h3>لیست اکستنشن‌های نصب شده</h3>
    <p>در پلتفرم PHP اکستنشن‌های PHP زیر نصب شده‌اند:</p>
    <pre>
      <code>
        {`[PHP Modules]
amqp
apcu
bcmath
calendar
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
gettext
gmp
gnupg
hash
iconv
igbinary
imagick
imap
intl
json
ldap
libxml
mbstring
mcrypt
memcached
mongodb
mysqli
mysqlnd
openssl
pcntl
pcre
PDO
pdo_dblib
pdo_mysql
pdo_pgsql
pdo_sqlite
pgsql
Phar
posix
readline
redis
Reflection
session
SimpleXML
soap
sockets
sodium
SPL
sqlite3
standard
tokenizer
xml
xmlreader
xmlwriter
yaml
Zend OPcache
zip
zlib
[Zend Modules]
SourceGuardian
Zend OPcache
the ionCube PHP Loader + ionCube24`}
      </code>
    </pre>
  </Layout>
);
