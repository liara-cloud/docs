import Layout from '../../components/Layout'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>Liara | استقرار پروژه‌های Laravel - Laravel deployment</title>
    </Head>

    <h1>استقرار پروژه‌های Laravel</h1>
    <p>
      پروژه‌ی شما باید دارای فایل
      <span className="code">composer.json</span>
      باشد تا بتواند در لیارا مستقر شود.
      <br />
      در حال حاظر، لیارا از Laravel > 5.1 پشتیبانی می‌کند.
    </p>
    
    <h3>شروع عملیات استقرار</h3>
    <p>
      در ابتدا مطمئن شوید که
      <span className="code">@liara/cli</span>
      را روی کامپیوترتان نصب کرده‌اید.
      {' '}
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر</Link>
      <br/>
      سپس دستور زیر را داخل پروژه‌ی‌تان اجرا کنید:
    </p>
    <pre>
      <code>
        liara deploy
      </code>
    </pre>

    <h3>امنیت</h3>
    <p>
      لاراول داده‌های حساس شما را رمزنگاری می‌کند. برای رمزنگاری نیاز به یک کلید
      {' '}
      دارد که شما باید آن را ایجاد کرده و از طریق پنل تنظیمات آن را در اختیار پروژه‌یتان قرار دهید.
      {' '}
      برای ایجاد یک کلید رمزنگاری، دستور زیر را در کامیپوتر خودتان و یا در محیط
      {' '}
      <Link href="/projects/console">کنسول لیارا</Link>
      {' '}
      وارد نمایید.
    </p>
    <pre>
      <code>
        php artisan key:generate --show
      </code>
    </pre>
    <p>
      این دستور خروجی‌ای مانند کد زیر خواهد داشت:
    </p>
    <pre>
      <code>
        base64:XZdGUGUxUjN0WJwI8FpYDyQFyKnmB8n8rX0oEkYTIa0=
      </code>
    </pre>
    <p>
      کلیدی که برای شما تولید شده‌است را کپی کرده و در پنل تنظیمات پروژه‌یتان با عنوان
      <span className="code">APP_KEY</span>
      وارد کنید:
    </p>
    <pre>
      <code>
{`APP_KEY=base64:XZdGUGUxUjN0WJwI8FpYDyQFyKnmB8n8rX0oEkYTIa0=`}
      </code>
    </pre>
    <p>
      هر پروژه‌ای یک بخش تنظیمات دارد که از طریق آن می‌توانید متغیرهای لازم را برای پروژه تعریف کنید.
      (<Link href="/projects/environment-variables" title="مستندات متغیرها">اطلاعات بیشتر</Link>)
    </p>

    <h3>پکیج‌ها به صورت خودکار نصب می‌شوند</h3>
    <p>
      لیارا به صورت خودکار پکیج‌هایی که در فایل‌های
      <span className="code">composer.json</span>
      و
      <span className="code">package.json</span>
      لیست شده‌اند را برای شما نصب می‌کند.
      پس نیازی ندارید که به دنبال اجرای دستورات
      <span className="code">composer install</span>
      و یا
      <span className="code">npm install</span>
      باشید.
      از آن‌جایی که اجرای این دستورات زمان‌بر است، برای سرعت بیشتر، این دستورات را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر نمانید.
    </p>

    <h3>فایل‌های CSS و JS به صورت خودکار build می‌شوند</h3>
    <p>
      همان‌طور که اطلاع دارید، در پروژه‌های لاراولی با اجرای دستور
      <span className="code">npm run production</span>
      فایل‌های
      SASS
      به
      CSS
      تبدیل می‌شوند و همین‌طور کدهای جاوا اسکریپت
      ES6
      به بالا به 
      ES5
      تبدیل شده و
      یک‌پارچه می‌شوند.
      <br/>
      هر زمان که پروژه‌ی‌تان را روی لیارا مستقر می‌کنید، ما این دستور را برای‌تان اجرا می‌کنیم
      تا مطمئن شویم که فایل‌های CSS و JS
      شما به صورت صحیح در اختیار کاربران‌تان قرار گیرند.
    </p>

    <h3>تنظیمات TrustedProxies</h3>
    <p>
      تمامی درخواست‌ها به سمت پروژه‌ی شما توسط
      {' '}
      <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank">Reverse proxy</a>
      {' '}
      های لیارا
      هدایت می‌شوند. برای این که در پروژه‌ی‌تان بتوانید به آی‌پی واقعی کاربر دسترسی داشته باشید
      و یا این که از قابلیت Signed URL های Laravel استفاده کنید، لازم است که تغییراتی را در فایل
      <span className="code">app/Http/Middleware/TrustProxies.php</span>
      اعمال کنید.
    </p>
    <p>
      در این فایل، یک متغیر با نام
      <span className="code">$proxies</span>
      وجود دارد. فقط کافیست که مقدار آن را به
      <span className="code">*</span>
      تغییر دهید.
    </p>
<pre>
  <code>
{`<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Fideloper\Proxy\TrustProxies as Middleware;

class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var array|string
     */
    protected $proxies = '*';

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers = Request::HEADER_X_FORWARDED_ALL;
}`}
  </code>
</pre>

    <h3>اتصال به دیتابیس</h3>
    <p>
      شما می‌توانید از بخش «دیتابیس‌ها»، یک دیتابیس
      MySQL یا MongoDB
      ایجاد کنید.
      بعد از ایجاد دیتابیس، در لیست دیتابیس‌ها، روی دیتابیس موردنظرتان کلیک کنید تا
      اطلاعات اتصال به آن برای‌تان نمایش داده شود.
      <br/>

      هر پروژه‌ای یک بخش تنظیمات دارد که از طریق آن می‌توانید متغیرهای لازم را برای پروژه تعریف کنید.
      (<Link href="/projects/environment-variables" title="مستندات متغیرها">اطلاعات بیشتر</Link>)

      <br/>
      برای این‌که پروژه‌ی‌ شما بتواند به دیتابیسی که ساختید متصل شود، باید متغیرهای زیر را ایجاد کرده و مقدار دهی کنید:
    </p>
    <pre>
      <code>
{`DB_CONNECTION=mysql
DB_HOST=s1.liara.ir
DB_PORT=12345
DB_DATABASE=my_database
DB_USERNAME=root
DB_PASSWORD=123456`}
      </code>
    </pre>
    <p>
      توجه کنید که متغیرهای بالا، صرفا جهت نمونه آورده شده‌اند و شما باید مقادیر را با اطلاعات دیتابیسی که ساختید پر کنید.
      <br/>
      نکته‌ی دیگری که باید به آن توجه کنید این است که در مثال بالا، فرض بر این بوده است که شما به سرور دیتابیس‌تان متصل شده و یک دیتابیس با نام
      <span className="code">my_database</span>
      ساخته‌اید.
    </p>

    <h3>اجرای Migration ها</h3>
    <p>
      از آن‌جایی که کنترل تغییرات دیتابیس باید در اختیار خود شما باشد،
      ما migration ها را اجرا نمی‌کنیم و شما باید هر زمان که نیاز داشتید آن‌ها را اجرا کنید.
      <br/>
      برای اجرا
      migration
      ها، کافیست به کنسول پروژه‌ی‌تان متصل شوید
      (<Link href="/projects/console" title="مستندات کنسول">اطلاعات بیشتر درمورد کنسول</Link>)
      و دستور مربوطه را اجرا کنید:
    </p>
    <pre>
      <code>
        php artisan migrate
      </code>
    </pre>

    <h3>ذخیره‌ی فایل‌ها</h3>
    <p>
      لیارا یک فضای ابری نامحدود برای ذخیره‌ی فایل‌هایتان در اختیار شما قرار می‌دهد.
      <br />
      فقط کافیست که SDK لیارا را در پروژه‌یتان نصب کرده و شروع به استفاده کنید.
      {' '}
      <Link href="/storage/laravel">اطلاعات بیشتر</Link>
    </p>

    <h3>ایجاد CronJob</h3>
    <p>
      گاهی اوقات نیاز است کار خاصی در زمان خاصی و به صورت دوره‌ای انجام شود، مثلا تهیه‌ی فایل پشتیبان از پایگاه داده، ارسال ایمیل و خبرنامه و کارهایی نظیر این.
      برای تعریف کران‌جاب‌هایتان، می‌توانید فیدی به نام
      <span className="code">cron</span>
      را به فایل liara.json
      پروژه‌ی‌تان اضافه کنید.
    </p>
<pre>
  <code>
{`{
  "cron": [
    "* * * * * cd $ROOT && php artisan schedule:run >> /dev/null 2>&1"
  ]
}`}
  </code>
</pre>
    <p>
      همان‌طور که مشاهده می‌کنید، فیلد
      <span className="code">cron</span>
      یک آرایه است و این یعنی می‌توانید یک یا چند کران‌جاب تعریف کنید.
    </p>

    <h3>کار با Queue ها</h3>
    <p>
      یکی از امکانات مهم Laravel، قابلیت تعریف صف (Queue) است. از امروز از این قابلیت لاراول هم پشتیبانی می‌کنیم. در پتلفرم لاراول، Supervisor نصب شده و شما با ایجاد یک فایل به نام supervisor.conf در ریشه‌ی پروژه‌تان، می‌توانید تنظیمات صف‌های مختلف‌تان را در آن وارد کنید. و در نهایت با یک‌بار دیپلوی‌کردن، صف‌های شما شروع به کار خواهند کرد.
    </p>
    <p>
      Supervisor برنامه‌ی بسیار مفیدی است که سعی می‌کند صف‌های شما را همیشه در حال اجرا نگه‌دارد. اگر به هر دلیلی صف‌های‌تان به خطا بخورند و خاموش شوند، Supervisor آن‌ها را دوباره ایجاد و فعال می‌کند.
    </p>
    <p>
      از بخش
      {' '}
      <Link href="/projects/console">خط فرمان (کنسول)</Link>
      {' '}
      پروژه‌ی‌تان هم می‌توانید با supervisorctl کار کنید و وضعیت صف‌های‌تان را مشاهده کنید.
    </p>
    <pre>
      <code>
{`$ supervisorctl status`}
      </code>
    </pre>
    <p>
      یک نمونه کانفیگ ساده برای یک صف با نام sms که وظیفه‌ی ارسال پیامک به کاربران را به عهده دارد:
    </p>
    <pre>
      <code>
{`[program:scheduler]
process_name=%(program_name)s_%(process_num)02d
command=php $ROOT/artisan queue:work --queue=sms --tries=3
autostart=true
autorestart=true
numprocs=1
user=www-data
redirect_stderr=true
stdout_logfile=/tmp/sms-queue.log`}
      </code>
    </pre>
    <p>
      برای اطلاعات بیشتر می‌توانید به لینک‌های زیر مراجعه کنید:
      <ul>
        <li><a href="http://supervisord.org/" target="_blank">مستندات Supervisor</a></li>
        <li><a href="https://laravel.com/docs/queues#supervisor-configuration" target="_blank">مستندات لاراول درباره‌ی Supervisor</a></li>
      </ul>
    </p>

    <h3>لیست اکستنشن‌های نصب شده</h3>
    <p>
      در پلتفرم لاراول، اکستنشن‌های PHP زیر نصب شده‌اند:
    </p>
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
Zend OPcache`}
  </code>
</pre>
  </Layout>
)