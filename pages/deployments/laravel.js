import Layout from '../../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import Notice from '../../components/Notice'
import ZoomableImage from '../../components/ZoomableImage'
import Highlight from 'react-highlight'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار برنامه‌های Laravel - Laravel deployment</title>
    </Head>

    <h1>استقرار برنامه‌های Laravel</h1>
    <p>
      برنامه‌ی شما باید دارای فایل
      <span className="code">composer.json</span>
      باشد تا بتواند در لیارا مستقر شود.
      <br />
      در حال حاضر، لیارا از Laravel >= 5.5 پشتیبانی می‌کند.
    </p>
    
    <h3>شروع عملیات استقرار</h3>
    <p>
      در ابتدا مطمئن شوید که
      <span className="code">@liara/cli</span>
      را روی کامپیوترتان نصب کرده‌اید.
      {' '}
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر</Link>
      <br/>
      سپس دستور زیر را داخل برنامه‌ی‌تان اجرا کنید:
    </p>
    <pre>
      <code>
        liara deploy
      </code>
    </pre>
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که برنامه‌ی شما را باید به عنوان یک برنامه‌ی
      Laravel
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --platform=laravel
      </code>
    </pre>

    <h3>امنیت</h3>
    <p>
      لاراول داده‌های حساس شما را رمزنگاری می‌کند. برای رمزنگاری نیاز به یک کلید
      {' '}
      دارد که شما باید آن را ایجاد کرده و از طریق پنل تنظیمات آن را در اختیار برنامه‌ی‌تان قرار دهید.
      {' '}
      برای ایجاد یک کلید رمزنگاری، دستور زیر را در کامیپوتر خودتان و یا در محیط
      {' '}
      <Link href="/apps/console">کنسول لیارا</Link>
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
      کلیدی که برای شما تولید شده‌است را کپی کرده و در پنل تنظیمات برنامه‌ی‌تان با عنوان
      <span className="code">APP_KEY</span>
      وارد کنید:
    </p>
    <pre>
      <code>
{`APP_KEY=base64:XZdGUGUxUjN0WJwI8FpYDyQFyKnmB8n8rX0oEkYTIa0=`}
      </code>
    </pre>
    <p>
      هر برنامه‌ای یک بخش تنظیمات دارد که از طریق آن می‌توانید متغیرهای لازم را برای برنامه تعریف کنید.
      (<Link href="/apps/environment-variables" title="مستندات متغیرها">اطلاعات بیشتر</Link>)
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
      همان‌طور که اطلاع دارید، در برنامه‌های لاراولی با اجرای دستور
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
      هر زمان که برنامه‌ی‌تان را روی لیارا مستقر می‌کنید، ما این دستور را برای‌تان اجرا می‌کنیم
      تا مطمئن شویم که فایل‌های CSS و JS
      شما به صورت صحیح در اختیار کاربران‌تان قرار گیرند.
    </p>
    <p>
      اما اگر از Laravel
      فقط برای ساخت یک API استفاده کرده‌اید و یا به طور کلی نیازی به این ندارید
      که لیارا پکیج‌های npm
      را برای‌تان نصب و فایل‌های CSS و JavaScript تان را build کند،
      می‌توانید در فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      برنامه، یک فیلد با نام laravel و داخل آن یک فیلد با نام
      <span className="code">buildAssets</span>
      بسازید و این قابلیت را غیر فعال کنید.
    </p>
    <Highlight className="json">
{`{
  "laravel": {
    "buildAssets": false
  }
}`}
    </Highlight>
    <p>
      با این تغییر، هر بار که دیپلوی کنید، لیارا از اجرای دستورات npm خودداری می‌کند.
    </p>

    <h3>تنظیمات TrustedProxies</h3>
    <p>
      تمامی درخواست‌ها به سمت برنامه‌ی شما توسط
      {' '}
      <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank">Reverse proxy</a>
      {' '}
      های لیارا
      هدایت می‌شوند. برای این که در برنامه‌ی‌تان بتوانید به آی‌پی واقعی کاربر دسترسی داشته باشید
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
    <Highlight className="php">
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
    </Highlight>
    <h3>تنظیمات مربوط به HTTPS</h3>
    <p>
      ممکن است با انجام تنظیمات بخش
      TrustedProxies
      همچنان با مشکلاتی مانند عدم نمایش تصاویر و یا عدم لودشدن فایل‌های
      CSS و JavaScript
      رو به رو شوید. در چنین شرایطی، پیشنهاد می‌کنیم تکه کد زیر را در متد
      <span className="code">boot()</span>
      فایل
      <span className="code">AppServiceProvider</span>
      قرار دهید:
    </p>
    <Highlight className="php">
{`if($this->app->environment('production')) {
  \\URL::forceScheme('https');
}`}
    </Highlight>
    <p>
      کد بالا به سادگی چک می‌کند که اگر متغیر
      <span className="code">APP_ENV</span>
      برابر
      <span className="code">production</span>
      باشد، لاراول حتما از https برای نمایش تصاویر و سایر asset ها استفاده کند.
      این متغیر به صورت پیش‌فرض برابر
      production
      است، مگر این که از بخش
      {' '}
      <Link href="/apps/environment-variables">متغیرهای لیارا</Link>
      {' '}
      مقدار آن را تغییر داده باشید.
      با توجه به صلاح‌دید خودتان، یا این تکه کد را تغییر دهید یا مقدار متغیر را.
    </p>

    <h3>اتصال به دیتابیس</h3>
    <p>
      شما می‌توانید از بخش «دیتابیس‌ها»، یک دیتابیس
      MySQL یا MongoDB
      ایجاد کنید.
      بعد از ایجاد دیتابیس، در لیست دیتابیس‌ها، روی دیتابیس موردنظرتان کلیک کنید تا
      اطلاعات اتصال به آن برای‌تان نمایش داده شود.
      <br/>

      هر برنامه‌ای یک بخش تنظیمات دارد که از طریق آن می‌توانید متغیرهای لازم را برای برنامه تعریف کنید.
      (<Link href="/apps/environment-variables" title="مستندات متغیرها">اطلاعات بیشتر</Link>)

      <br/>
      برای این‌که برنامه‌ی شما بتواند به دیتابیسی که ساختید متصل شود، باید متغیرهای زیر را ایجاد کرده و مقدار دهی کنید:
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
      ها، کافیست به کنسول برنامه‌ی‌تان متصل شوید
      (<Link href="/apps/console" title="مستندات کنسول">اطلاعات بیشتر درمورد کنسول</Link>)
      و دستور مربوطه را اجرا کنید:
    </p>
    <pre>
      <code>
        php artisan migrate
      </code>
    </pre>

    <h3>ذخیره‌ی فایل‌ها</h3>
    <p>
      معمولا در برنامه‌های لاراول، از پوشه‌ی Storage
      برای ذخیره‌ی داده‌ها استفاده می‌شود.
      از آن‌جایی که فایل‌سیستم در لیارا موقتی است، لازم است که این پوشه را به عنوان
      {' '}
      <Link href="/apps/disks">دیسک</Link>
      {' '}
      در فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      برنامه‌ی‌تان به لیارا معرفی کنید:
    </p>
    <pre>
      <code>
{`{
  "disks": [
    {
      "name": "mydisk",
      "mountTo": "storage"
    }
  ]
}`}
      </code>
    </pre>
    <p>
      توجه داشته باشید که از بخش دیسک‌ها، باید دیسک
      <span className="code">mydisk</span>
      را با اندازه‌ی دلخواه‌تان ساخته باشید.
    </p>

    <h3>شخصی‌سازی تنظیمات <span className="code">php.ini</span></h3>
    <p>
      از طریق ایجاد یک فایل با نام
      <span className="code">liara_php.ini</span>
      داخل ریشه‌ی برنامه‌ی‌تان می‌توانید تنظیمات
      PHP
      را شخصی‌سازی کنید.
      برای مثال، ممکن است بخواهید که حداکثر حجم مجاز برای آپلود فایل در سایت لاراولی‌تان را شخصی‌سازی کنید.
      پس لازم است که فایل
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
      و حالا با اجرای دستور
      <span className="code">liara deploy</span>
      تنظیمات شما روی سرور قرار می‌گیرد.
    </p>

    <h3>مشاهده‌ی لاگ‌ها</h3>
    <p>
      به صورت پیش‌فرض لاگ‌های لاراول در فایلی به نام laravel.log ذخیره می‌شوند.
      برای این که لاگ‌های برنامه‌ی‌تان در صفحه‌ی لاگ‌های پنل کاربری لیارا نمایش داده شوند،
      لازم است که متغیر زیر را در بخش متغیرها اضافه کنید:
    </p>
    <pre>
      <code>
{`LOG_CHANNEL=errorlog`}
      </code>
    </pre>
    <ZoomableImage src="/static/laravel-log-channel.png" alt="صفحه‌ی لاگ‌های لاراول" />
    <p>
      با این environment variable،
      لاراول لاگ‌های خود را به
      stdout و stderr
      منتقل می‌کند و لیارا این امکان را پیدا می‌کند تا لاگ‌های‌تان را در پنل کاربری نمایش دهد.
    </p>

    <h3>ایجاد CronJob</h3>
    <p>
      گاهی اوقات نیاز است کار خاصی در زمان خاصی و به صورت دوره‌ای انجام شود، مثلا تهیه‌ی فایل پشتیبان از پایگاه داده، ارسال ایمیل و خبرنامه و کارهایی نظیر این.
      برای تعریف کران‌جاب‌هایتان، می‌توانید فیدی به نام
      <span className="code">cron</span>
      را به فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      برنامه‌ی‌تان اضافه کنید.
    </p>
    <Highlight className="json">
{`{
  "cron": [
    "* * * * * cd /var/www/html && php artisan schedule:run >> /dev/null 2>&1"
  ]
}`}
    </Highlight>
    <p>
      همان‌طور که مشاهده می‌کنید، فیلد
      <span className="code">cron</span>
      یک آرایه است و این یعنی می‌توانید یک یا چند کران‌جاب تعریف کنید.
    </p>

    <h3>کار با Queue ها</h3>
    <p>
      یکی از امکانات مهم Laravel، قابلیت تعریف صف (Queue) است. از امروز از این قابلیت لاراول هم پشتیبانی می‌کنیم. در پتلفرم لاراول، Supervisor نصب شده و شما با ایجاد یک فایل به نام supervisor.conf در ریشه‌ی برنامهتان، می‌توانید تنظیمات صف‌های مختلف‌تان را در آن وارد کنید. و در نهایت با یک‌بار دیپلوی‌کردن، صف‌های شما شروع به کار خواهند کرد.
    </p>
    <p>
      Supervisor برنامه‌ی بسیار مفیدی است که سعی می‌کند صف‌های شما را همیشه در حال اجرا نگه‌دارد. اگر به هر دلیلی صف‌های‌تان به خطا بخورند و خاموش شوند، Supervisor آن‌ها را دوباره ایجاد و فعال می‌کند.
    </p>
    <p>
      از بخش
      {' '}
      <Link href="/apps/console">خط فرمان (کنسول)</Link>
      {' '}
      برنامه‌ی‌تان هم می‌توانید با supervisorctl کار کنید و وضعیت صف‌های‌تان را مشاهده کنید.
    </p>
    <pre>
      <code>
{`$ supervisorctl status`}
      </code>
    </pre>
    <p>
      یک نمونه کانفیگ ساده برای یک صف با نام sms که وظیفه‌ی ارسال پیامک به کاربران را به عهده دارد:
    </p>
    <Highlight className="ini">
{`[program:scheduler]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/artisan queue:work --queue=sms --tries=3
autostart=true
autorestart=true
numprocs=1
user=www-data
redirect_stderr=true
stdout_logfile=/tmp/sms-queue.log`}
    </Highlight>
    <p>
      برای اطلاعات بیشتر می‌توانید به لینک‌های زیر مراجعه کنید:
      <ul>
        <li><a href="http://supervisord.org/" target="_blank">مستندات Supervisor</a></li>
        <li><a href="https://laravel.com/docs/queues#supervisor-configuration" target="_blank">مستندات لاراول درباره‌ی Supervisor</a></li>
      </ul>
    </p>

    <h3>کش‌کردن تنظیمات و route ها</h3>
    <p>
      فریم‌ورک Laravel،
      دستوراتی را برای افزایش عملکرد این فریم‌ورک در اختیار گذاشته است که با اجرای آن‌ها در محیط production
      سرعت برنامه‌ی‌تان افزایش می‌یابد. لیارا این امکان را فراهم کرده که این دستورات بعد از هر بار دیپلوی‌، به طور خودکار
      روی برنامه‌ی‌تان اجرا شوند.
    </p>
    <p>
      دستور اول، دستور
      <span className="code">php artisan config:cache</span>
      است که تنظیمات لاراول را کش می‌کند. برای فعال‌کردن این قابلیت، از فیلد
      <span className="code">configCache</span>
      در فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      استفاده کنید:
    </p>
    <Highlight className="json">
{`{
  "laravel": {
    "configCache": true
  }
}`}
    </Highlight>
    <p>
      دستور دوم، دستور
      <span className="code">php artisan route:cache</span>
      است که تنظیمات لاراول را کش می‌کند. برای فعال‌کردن این قابلیت، از فیلد
      <span className="code">routeCache</span>
      در فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      استفاده کنید:
    </p>
    <Highlight className="json">
{`{
  "laravel": {
    "routeCache": true
  }
}`}
    </Highlight>
    <p>
      این امکان هم وجود دارد که این دو قابلیت را هم‌زمان فعال کنید:
    </p>
    <Highlight className="json">
{`{
  "laravel": {
    "configCache": true,
    "routeCache": true
  }
}`}
    </Highlight>

    <Notice variant="danger">
      توجه داشته باشید که طبق
      {' '}
      <a href="https://laravel.com/docs/5.8/deployment#optimization" target="_blank">مستندات لاراول</a>،
      {' '}
      استفاده از دستور
      route:cache
      تنها زمانی امکان‌پذیر است که شما از Closure
      ها برای تعریف route ها استفاده نکرده باشید و فقط از Controller
      استفاده کرده باشید.
    </Notice>

    <h3>نمونه‌ی فایل liara.json برای لاراول</h3>
    <p>
      در نهایت، فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      برای یک برنامه‌ی لاراولی ممکن است به این شکل نهایی شود:
    </p>
    <Highlight className="php">
{`{
  "cron": [
    "* * * * * cd /var/www/html && php artisan schedule:run >> /dev/null 2>&1"
  ],
  "laravel": {
    "routeCache": true,
    "configCache": true,
    "buildAssets": true
  }
}`}
    </Highlight>

    <h3>اجرای خودکار دستورات دلخواه</h3>
    <p>
      بعد از اتمام عملیات
      build
      به صورت خودکار برنامه‌ی‌تان اجرا می‌شود. اما ممکن است قبل از اجرای برنامه نیاز داشته باشید که دستوراتی
      به صورت خودکار روی سرور اجرا شوند. بدین منظور، می‌تونید از
      <span className="code">postBuildCommands</span>
      استفاده کنید. برای مثال، می‌توانید
      migration
      ها را به صورت خودکار اجرا کنید و یا این که ماژول‌های Apache را فعال کنید.
    </p>
    <Highlight className="json">
{`{
  "laravel": {
    "postBuildCommands": [
      "echo 'Hello World!'",
      "php artisan migrate",
      "a2enmod expires"
    ]
  }
}`}
    </Highlight>
    <p>
      همان‌طور که مشاهده می‌کنید،
      <span className="code">postBuildCommands</span>
      آرایه است که شما می‌توانید به هر تعدادی دستور که مایل بودید، به آن اضافه کنید.
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
