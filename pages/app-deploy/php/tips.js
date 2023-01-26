import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های PHP - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="php" />
      <div className="page-title">
        <h1>پلتفرم PHP</h1>
        <span className="page-description">(PHP Platform)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#deploy-php">استقرار برنامه‌های PHP</a>
      </li>
      <li>
        <a href="#php-version">انتخاب نسخه‌ی PHP</a>
      </li>
      <li>
        <a href="#timezone">تنظیم منطقه‌ی زمانی (TimeZone)</a>
      </li>
      <li>
        <a href="#php-ini">تنظیمات اختصاصی php.ini</a>
      </li>
      <li>
        <a href="#htaccess">تنظیمات اختصاصی htaccess</a>
      </li>
      <li>
        <a href="#queues">کار با Queue ها</a>
      </li>
      <li>
        <a href="#http-security-headers">تنظیم هدرهای امنیتی HTTP</a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
      <li>
        <a href="#default-php-modules">لیست اکستنشن‌های نصب شده</a>
      </li>
    </ul>

    <h3 id="deploy-php">استقرار برنامه‌های PHP</h3>
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
      می‌کنیم که از محصول <Link href="/wp-plus/install">«وردپرس پلاس»</Link>{" "}
      لیارا استفاده کنید.
    </Notice>

    <h3 id="php-version">انتخاب نسخه‌ی PHP</h3>
    <p>
      به‌صورت پیش‌فرض، برنامه‌ی شما با استفاده از PHP 8.0 اجرا می‌شود. در صورتی
      که قصد دارید نسخه دیگری را برای اجرای برنامه‌ی‌تان استفاده کنید می‌توانید
      در فایل <Link href="/app-deploy/php/liarajson">liara.json</Link> بخش زیر
      را اضافه کنید: (فایل زیر برای یک برنامه تستی در نظر گرفته شده است.)
    </p>
    <Highlight className="json">
      {`{
  "php": {
    "version": "7.2"
  }
}`}
    </Highlight>
    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌شود:</p>
    <ul>
      <li>7.2</li>
      <li>7.3</li>
      <li>7.4</li>
      <li>
        <b>8.0 (پیش‌فرض)</b>
      </li>
      <li>8.1</li>
    </ul>

    <h3 id="timezone">تنظیم منطقه‌ی زمانی (TimeZone)</h3>
    <p>
      به صورت پیش‌فرض، منطقه‌ی زمانی بر روی Asia/Tehran تنظیم شده است. برای
      تغییر مقدار پیش‌فرض، می‌توانید از پارامتر
      <span className="code">timezone</span>
      در فایل <Link href="/app-deploy/php/liarajson">liara.json</Link> استفاده
      کنید. برای نمونه:
    </p>
    <Highlight className="json">
      {`{
  "php": {
    "timezone": "America/Los_Angeles"
  }
}`}
    </Highlight>
    <h3 id="php-ini">تنظیمات اختصاصی php.ini</h3>
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

    <h3 id="htaccess">تنظیمات اختصاصی htaccess</h3>
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
    RewriteCond %{REQUEST_FILENAME}\\.php -f
    RewriteRule ^(.*)$ $1.php [NC,L]

</IfModule>`}
      </code>
    </pre>
    <p>
      {" "}
      شما می‌توانید هر تنظیمی که از قبل در htaccess. برنامه‌ی‌تان داشتید را به
      لیارا نیز منتقل کنید. اگر در این قسمت با مشکلی مواجه شدید، از طریق تیکت،
      مسأله را با پشتیبانی لیارا مطرح کنید.
    </p>

    <h3 id="queues">کار با Queue ها</h3>
    <p>
      Supervisor در پلتفرم PHP لیارا نصب شده و شما با ایجاد یک فایل به نام{" "}
      <span className="code">supervisor.conf</span> در ریشه‌ی برنامه‌، می‌توانید
      تنظیمات صف‌های مختلف‌تان را در آن وارد کنید. در نهایت با یک‌بار
      دیپلوی‌کردن، صف‌های شما شروع به کار خواهند کرد.
    </p>
    <p>
      Supervisor برنامه‌ی بسیار مفیدی است که سعی می‌کند صف‌های شما را همیشه در
      حال اجرا نگه‌دارد. اگر به هر دلیلی صف‌های‌تان به خطا بخورند و خاموش شوند،
      Supervisor آن‌ها را دوباره ایجاد و فعال می‌کند.
    </p>
    <p>
      از بخش <Link href="/apps/console">خط فرمان (کنسول)</Link> برنامه‌ی‌تان هم
      می‌توانید با <span className="code">supervisorctl</span> کار کنید و وضعیت
      صف‌های‌تان را مشاهده کنید.
    </p>
    <pre>
      <code>{`$ supervisorctl status`}</code>
    </pre>
    <p>یک نمونه کانفیگ ساده برای تعریف صف:</p>
    <Highlight className="ini">
      {`[program:php-worker]
process_name=%(program_name)s_%(process_num)02d
command=cd $ROOT && php queues.php
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
user=www-data
redirect_stderr=true
stdout_logfile=/tmp/php-worker.log`}
    </Highlight>
    <p>برای کسب اطلاعات بیشتر می‌توانید به لینک زیر مراجعه کنید:</p>
    <ul>
      <li>
        <a href="http://supervisord.org/" target="_blank">
          مستندات Supervisor
        </a>
      </li>
    </ul>

    <h3 id="http-security-headers">تنظیم هدرهای امنیتی HTTP</h3>
    <p>
      برای جلوگیری از حملاتی مانند Clickjacking، XSS، SSL Striping می‌توانید
      هدرهای امنیتی را مانند مثال زیر در فایل{" "}
      <span className="code">.htaccess</span>
      تنظیم کرده و نحوه‌ی برقراری ارتباط با سایت را برای مرورگرها تعیین کنید:
    </p>

    <Highlight className="plaintext">
      {`<IfModule mod_headers.c>
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains; preload"
</IfModule>`}
    </Highlight>

    <Notice variant="warning">
      توجه داشته باشید که قبل از فعال‌سازی HSTS با تنظیم هدر{" "}
      <span className="code">Strict-Transport-Security</span> باید SSL را فعال
      کرده باشید. <Link href="/domains/ssl">تهیه‌ی SSL رایگان</Link>
    </Notice>

    <h3 id="cors">رفع خطای CORS</h3>
    <p>
      درصورتی که در برنامه‌ی PHP با خطای CORS مواجه شده‌اید، توصیه می‌شود قطعه
      کد زیر را به{" "}
      <Link href="/app-deploy/php/tips#htaccess">تنظیمات اختصاصی htaccess</Link>{" "}
      پروژه‌ی خود اضافه کنید.
    </p>

    <Highlight className="ini">{`<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
`}</Highlight>

    <p>
      برای کسب اطلاعات بیشتر{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
        target="_blank"
        rel="noopener"
      >
        مستندات CORS
      </a>{" "}
      را مطالعه کنید.
    </p>

    <h3 id="default-php-modules">لیست اکستنشن‌های نصب شده</h3>
    <p>در پلتفرم PHP اکستنشن‌های PHP زیر نصب شده‌اند:</p>
    <pre>
      <code>
        {`[PHP Modules]
amqp
apcu
ast
bcmath
bz2
calendar
Core
ctype
curl
date
dba
dom
ds
enchant
ev
exif
fileinfo
filter
ftp
gd
gettext
gmp
gnupg
grpc
hash
iconv
igbinary
imagick
imap
intl
json
ldap
libxml
mailparse
mbstring
mcrypt
memcached
mongodb
msgpack
mysqli
mysqlnd
openssl
pcntl
pcov
pcre
PDO
pdo_mysql
pdo_pgsql
pdo_sqlite
pgsql
Phar
posix
pspell
rdkafka
readline
redis
Reflection
session
shmop
SimpleXML
snmp
soap
sockets
sodium
SourceGuardian
SPL
sqlite3
standard
swoole
sysvmsg
sysvsem
sysvshm
tidy
tokenizer
uploadprogress
uuid
xml
xmlreader
xmlrpc
xmlwriter
xsl
yaml
Zend OPcache
zip
zlib

[Zend Modules]
SourceGuardian
Zend OPcache`}
      </code>
    </pre>
  </Layout>
);
