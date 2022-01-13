import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های Laravel - سرویس ابری لیارا
      </title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>
    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#php-version">انتخاب نسخه‌ی PHP</a>
      </li>
      <li>
        <a href="#php-ini-customization">تنظیمات اختصاصی php.ini</a>
      </li>
      <li>
        <a href="#auto-build-assets">
          فایل‌های CSS و JS به صورت خودکار build می‌شوند
        </a>
      </li>
      <li>
        <a href="#deploy-lumen">استقرار برنامه‌های Lumen</a>
      </li>
      <li>
        <a href="#queues">کار با Queue ها</a>
      </li>
      <li>
        <a href="#apps">لینک‌کردن پوشه‌ی storage به پوشه‌ی public</a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
      <li>
        <a href="#http-security-headers">تنظیم هدرهای امنیتی HTTP</a>
      </li>
      <li>
        <a href="#optimization">بهینه کردن لاراول برای استقرار</a>
      </li>
      <li>
        <a href="#trusted-proxies">
          تنظیمات TrustedProxies (برای مشاهده IP واقعی کاربران)
        </a>
      </li>
      <li>
        <a href="#logs">مدیریت لاگ‌ها در Laravel</a>
      </li>
      <li>
        <a href="#enable-caching">فعال‌سازی Caching</a>
      </li>
      <li>
        <a href="#using-ignition-and-faker-packages">
          استفاده از پکیج‌های Ignition و Faker
        </a>
      </li>
      <li>
        <a href="#timezone">تنظیم منطقه‌ی زمانی (TimeZone)</a>
      </li>
      <li>
        <a href="#extensions">لیست اکستنشن‌های نصب شده</a>
      </li>
    </ul>
    <h3 id="php-version">انتخاب نسخه‌ی PHP</h3>
    <p>
      به‌صورت پیش‌فرض، برنامه‌ی شما در نسخه‌ی PHP 7.4 اجرا می‌شود. در صورتی که
      قصد دارید نسخه دیگری را برای اجرای برنامه‌ی‌تان استفاده کنید می‌توانید
      داخل فایل <span className="code">liara.json</span> بخش زیر را اضافه کنید:
      (فایل زیر برای یک برنامه تستی در نظر گرفته شده است.)
    </p>
    <Highlight className="json">
      {`{
  "platform": "laravel",
  "app": "laravel-starter",
  "laravel": {
    "phpVersion": "8.0"
  }
}`}
    </Highlight>
    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌کنیم:</p>
    <ul>
      <li>7.2</li>
      <li>7.3</li>
      <li>
        <b>7.4 (پیش‌فرض)</b>
      </li>
      <li>8.0</li>
    </ul>
    <h3 id="php-ini-customization">تنظیمات اختصاصی php.ini</h3>
    <p>
      از طریق ایجاد یک فایل با نام
      <span className="code">liara_php.ini</span>
      داخل ریشه‌ی برنامه‌ی‌تان می‌توانید تنظیمات PHP را شخصی‌سازی کنید. برای
      مثال، ممکن است بخواهید که حداکثر حجم مجاز برای آپلود فایل در سایت
      لاراولی‌تان را شخصی‌سازی کنید. پس لازم است که فایل
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
    <Notice variant="info">
      وب‌سرور Apache ابتدا فایل‌های آپلودی را در پوشه‌ی
      <span className="code">/tmp</span>
      ذخیره می‌کند و سپس لاراول آن فایل را به storage خودش منتقل می‌کند. پوشه‌ی{" "}
      <span className="code">/tmp</span>
      در فایل‌سیستم هر برنامه، قابل نوشتن است و درواقع{" "}
      <Link href="/app-features/file-system">ReadOnly</Link> نیست، اما محدودیت
      ۱۰۰ مگابایتی دارد. این محدودیت به‌این معناست که اگر کاربران شما فایل‌های
      بزرگ‌تر از ۱۰۰ مگابایت را بخواهند آپلود کنند، با خطا مواجه خواهند شد. برای
      رفع این محدودیت، می‌توانید از قابلیت{" "}
      <Link href="/app-deploy/laravel/disks">دیسک‌ها</Link> استفاده کنید و دیسکی
      با اندازه‌ی دلخواه‌تان بسازید و به‌پوشه‌ی
      <span className="code">/tmp</span>
      متصل کنید.
    </Notice>
    <h3 id="auto-build-assets">
      فایل‌های CSS و JS به صورت خودکار build می‌شوند
    </h3>
    <p>
      همان‌طور که اطلاع دارید، در برنامه‌های لاراولی با اجرای دستور
      <span className="code">npm run production</span>
      فایل‌های SASS به CSS تبدیل می‌شوند و همین‌طور کدهای جاوا اسکریپت ES6 به
      بالا به ES5 تبدیل شده و یک‌پارچه می‌شوند.
      <br />
      هر زمان که برنامه‌ی‌تان را روی لیارا مستقر می‌کنید، ما این دستور را
      برای‌تان اجرا می‌کنیم تا مطمئن شویم که فایل‌های CSS و JS شما به صورت صحیح
      در اختیار کاربران‌تان قرار گیرند.
    </p>
    <p>
      اما اگر از Laravel فقط برای ساخت یک API استفاده کرده‌اید و یا به طور کلی
      نیازی به این ندارید که لیارا پکیج‌های npm را برای‌تان نصب و فایل‌های CSS و
      JavaScript تان را build کند، می‌توانید در فایل{" "}
      <Link href="/app-deploy/laravel/liarajson">liara.json</Link> برنامه، یک
      فیلد با نام laravel و داخل آن یک فیلد با نام
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
      با این تغییر، هر بار که دیپلوی کنید، لیارا از اجرای دستورات npm خودداری
      می‌کند.
    </p>
    <h3 id="deploy-lumen">استقرار برنامه‌های Lumen</h3>
    <p>
      به‌منظور استقرار پروژه‌های توسعه داده شده با فریم‌ورک Lumen در برنامه‌های
      Laravel لیارا تنها کافیست که ابزار{" "}
      <Link href="/cli/install">Liara CLI</Link> را با اجرای دستور زیر به آخرین
      نسخه به‌روزرسانی کرده:
    </p>
    <Highlight className="bash">{`npm i -g @liara/cli`}</Highlight>
    <p>
      و درنهایت دستور <span className="code">liara deploy</span> را در مسیر اصلی
      پروژه اجرا کنید.
    </p>
    <h3 id="queues">کار با Queue ها</h3>
    <p>
      یکی از امکانات مهم Laravel، قابلیت تعریف صف (Queue) است. در پلتفرم لاراول،
      Supervisor نصب شده و شما با ایجاد یک فایل به نام{" "}
      <span className="code">supervisor.conf</span> در ریشه‌ی برنامه‌، می‌توانید
      تنظیمات صف‌های مختلف‌تان را در آن وارد کنید. و در نهایت با یک‌بار
      دیپلوی‌کردن، صف‌های شما شروع به کار خواهند کرد.
    </p>
    <p>
      Supervisor برنامه‌ی بسیار مفیدی است که سعی می‌کند صف‌های شما را همیشه در
      حال اجرا نگه‌دارد. اگر به هر دلیلی صف‌های‌تان به خطا بخورند و خاموش شوند،
      Supervisor آن‌ها را دوباره ایجاد و فعال می‌کند.
    </p>
    <p>
      از بخش <Link href="/apps/console">خط فرمان (کنسول)</Link> برنامه‌ی‌تان هم
      می‌توانید با supervisorctl کار کنید و وضعیت صف‌های‌تان را مشاهده کنید.
    </p>
    <pre>
      <code>{`$ supervisorctl status`}</code>
    </pre>
    <p>
      یک نمونه کانفیگ ساده برای یک صف با نام sms که وظیفه‌ی ارسال پیامک به
      کاربران را به عهده دارد:
    </p>
    <Highlight className="ini">
      {`[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/artisan queue:work
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
user=www-data
redirect_stderr=true
stdout_logfile=/tmp/laravel-worker.log`}
    </Highlight>
    <p>برای اطلاعات بیشتر می‌توانید به لینک‌های زیر مراجعه کنید:</p>
    <ul>
      <li>
        <a href="http://supervisord.org/" target="_blank">
          مستندات Supervisor
        </a>
      </li>
      <li>
        <a
          href="https://laravel.com/docs/queues#supervisor-configuration"
          target="_blank"
        >
          مستندات لاراول درباره‌ی Supervisor
        </a>
      </li>
    </ul>
    <h3 id="apps">
      لینک‌کردن پوشه‌ی <span className="code">storage</span> به پوشه‌ی{" "}
      <span className="code">public</span>
    </h3>
    <p>
      برای دسترسی به فایل‌های پوشه‌های
      <span className="code">storage</span>، طبق مستندات لاراول باید این پوشه به
      پوشه‌ی <span className="code">public</span> لینک شود. لیارا به‌صورت
      خودکار، در زمان استقرار، دستور
      <span className="code">php artisan storage:link</span>
      را اجرا می‌کند و نیازی نیست که اقدام خاصی انجام دهید.
    </p>
    <h3 id="cors">رفع خطای CORS</h3>
    <p>
      برای رفع خطای CORS در برنامه‌های Laravel، دو راه حل مختلف پیش روی شما قرار
      دارد. در راه حل اول می‌توانید پکیج{" "}
      <a href="https://github.com/fruitcake/laravel-cors" target="_blank">
        laravel-cors
      </a>{" "}
      را با اجرای دستور زیر در پروژه‌ی خود نصب کرده و طبق{" "}
      <a
        href="https://github.com/fruitcake/laravel-cors#global-usage"
        target="_blank"
      >
        مستندات
      </a>
      ، CORS را در پروژه‌ی خود فعال کنید.
    </p>
    <Highlight className="bash">{`composer require fruitcake/laravel-cors`}</Highlight>
    <p>
      {" "}
      در راه حل دوم می‌توانید تنظیمات مربوط به CORS را در فایل{" "}
      <span className="code">public/.htaccess</span> پروژه‌ی خود اضافه کنید:
    </p>
    <Highlight className="htaccess">
      {`Header set Access-Control-Allow-Origin "*"

<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>`}
    </Highlight>
    <h3 id="http-security-headers">تنظیم هدرهای امنیتی HTTP</h3>
    <p>
      برای جلوگیری از حملاتی مانند Clickjacking، XSS، SSL Striping می‌توانید
      هدرهای امنیتی را مانند مثال زیر در فایل{" "}
      <span className="code">public/.htaccess</span>
      تنظیم کرده و نحوه‌ی برقراری ارتباط با سایت را برای مرورگرها تعیین کنید:
    </p>
    <Highlight className="plaintext">
      {`<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains; preload"

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>`}
    </Highlight>
    <Notice variant="warning">
      توجه داشته باشید که قبل از فعال‌سازی HSTS با تنظیم هدر{" "}
      <span className="code">Strict-Transport-Security</span> باید SSL را فعال
      کرده باشید. <Link href="/domains/ssl">تهیه‌ی SSL رایگان</Link>
    </Notice>
    <h3 id="optimization">بهینه کردن لاراول برای استقرار</h3>
    <p>
      Laravel برای دیپلوی در محیط‌های production با اجرای چند دستور ساده
      می‌تواند عملکرد بهتری داشته باشد. دستور اول
      <span className="code">php artisan config:cache</span> است که وظیفه کش
      کردن کانفیگ‌فایل‌ها را به عهده دارد و دستور دوم{" "}
      <span className="code">php artisan route:cache</span> است که وظیفه کش کردن
      فایل‌های route را به عهده دارد. برای این که این دستورات به صورت خودکار
      توسط لیارا در هر استقرار اجرا شود کافیست که در فایل{" "}
      <span className="code">liara.json</span> این فیلد‌ها را اضافه کنیم:
    </p>
    <Highlight className="json">
      {`{
  "platform": "laravel",
  "app": "laravel-starter",
  "laravel": {
    "configCache": true,
    "routeCache": true
  }
}`}
    </Highlight>
    <Notice variant="info">
      می‌توانید هر فیلد را که خواستید استفاده کنید، مثلا فقط از{" "}
      <span className="code">"configCache": true</span> استفاده کنید و فیلد دیگر
      را قرار ندهید.
    </Notice>
    <Notice variant="danger">
      توجه داشته باشید که طبق{" "}
      <a
        href="https://laravel.com/docs/5.8/deployment#optimization"
        target="_blank"
      >
        مستندات لاراول
      </a>
      ، استفاده از دستور php artisan route:cache تنها زمانی امکان‌پذیر است که
      شما از Closure ها برای تعریف route ها استفاده نکرده باشید و فقط از
      Controller استفاده کرده باشید.
    </Notice>
    <h3 id="trusted-proxies">
      تنظیمات TrustedProxies (برای مشاهده IP واقعی کاربران)
    </h3>
    <p>
      تمامی درخواست‌ها به سمت برنامه‌ی شما توسط{" "}
      <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank">
        Reverse proxy
      </a>{" "}
      های لیارا هدایت می‌شوند. برای این که در برنامه‌ی‌تان بتوانید به آی‌پی
      واقعی کاربر دسترسی داشته باشید و یا این که از قابلیت Signed URL های
      Laravel استفاده کنید، لازم است که تغییراتی را در فایل
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
namespace App\\Http\\Middleware;
use Illuminate\\Http\\Request;
use Fideloper\\Proxy\\TrustProxies as Middleware;
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
    <Notice variant="info">
      اگر از فریم‌ورک{" "}
      <a href="https://laravel-livewire.com/" target="_blank">
        Livewire
      </a>{" "}
      در برنامه‌ی لاراولی خود استفاده می‌کنید، باید حتما تنظیمات مرتبط با{" "}
      <a href="#trusted-proxies">TrustedProxies</a> را انجام بدهید.
    </Notice>
    <h3 id="logs">مدیریت لاگ‌ها در Laravel</h3>
    <p>
      لاگ‌ها وظیفه دارند اتفاقات رخ داده در نرم‌افزار مثل error ها یا exception
      ها و حتی اطلاعاتی که خود برنامه‌نویس به دلخواه خود در بخش‌های مختلف
      نرم‌افزار درنظرگرفته را، ثبت کنند. Laravel روش‌های مختلفی برای لاگ‌ کردن
      دارد که اصطلاحا به آن‌ها Channel Drivers میگوید. برای آشنایی بیشتر به{" "}
      <a href="https://laravel.com/docs/master/logging" target="_blank">
        مستندات لاراول درباره‌ی Logs
      </a>{" "}
      مراجعه کنید.
    </p>
    <p>
      برای نمونه اگر قصد دارید Log ها را روی Console بریزید، تا در پنل لاگ‌های
      داشبورد لیارا قابل مشاهده باشد می‌توانید از درایور
      <span className="code">errorlog</span>
      استفاده کنید. اگر قصد دارید Log ها را داخل یک فایل نگه‌دارید از درایور{" "}
      <span className="code">single</span> استفاده کنید. اگر قصد دارید Log ها را
      بر اساس روز در فایل‌های مجزایی نگه‌داری کنید تا حجم هر فایل برای بررسی
      زیاد نشود می‌توانید از درایور <span className="code">daily</span> استفاده
      کنید. تصمیم نحوه‌ نگه‌داری Log ها با شماست و در صورتی که قصد تغییر آن را
      دارید به راحتی از طریق بخش تنظیمات برنامه می‌توانید نام درایور موردنظر
      خودتون رو به env ها اضافه کنید:
    </p>{" "}
    <Highlight className="json">{`LOG_CHANNEL=daily`}</Highlight>
    <p>یا</p>
    <Highlight className="json">{`LOG_CHANNEL=errorlog`}</Highlight>
    <Notice variant="info">
      Laravel قابلیت خوبی برای استفاده همزمان از چند درایور دارد. اگر شما از
      درایور <span className="code">stack</span> اسفتاده کنید می‌توانید همزمان
      Log ها را به چند درایور ارسال کنید. مثلا هم داخل فایل نگه‌داری شود و هم به
      Console ریخته شود تا در پنل لیارا قابل مشاهده باشد. درباره این درایور در{" "}
      <a
        href="https://laravel.com/docs/master/logging#building-log-stacks"
        target="_blank"
      >
        مستندات Laravel
      </a>{" "}
      بیشتر بخوانید.
    </Notice>
    <Notice variant="info">
      برنامه‌های Laravel ای در لیارا به صورت پیشفرض با درایور{" "}
      <span className="code">errorlog</span> مستقر می‌شوند.
    </Notice>
    <Notice variant="info">
      در برنامه تستی آموزش راه‌اندازی Laravel در لیارا، از درایور stack برای لاگ
      همزمان داخل فایل و کنسول استفاده شده است. می‌توانید{" "}
      <a
        href="https://github.com/liara-cloud/laravel-getting-started"
        target="_blank"
      >
        کد‌های آن ‌را
      </a>{" "}
      برای بررسی بیشتر مطالعه کنید.
    </Notice>
    <h3 id="enable-caching">فعال‌سازی Caching</h3>
    <p>
      برای فعال‌سازی Caching در برنامه‌های Laravel باید تنظیمات مربوطه را در
      فایل <span className="code">public/.htaccess</span> برنامه وارد کنید:
    </p>
    <pre>
      <code>
        {`<IfModule mod_deflate.c>
 AddOutputFilterByType DEFLATE text/plain
 AddOutputFilterByType DEFLATE text/html
 AddOutputFilterByType DEFLATE text/xml
 AddOutputFilterByType DEFLATE text/css
 AddOutputFilterByType DEFLATE text/javascript
 AddOutputFilterByType DEFLATE application/xml
 AddOutputFilterByType DEFLATE application/xhtml+xml
 AddOutputFilterByType DEFLATE application/rss+xml
 AddOutputFilterByType DEFLATE application/atom_xml
 AddOutputFilterByType DEFLATE application/javascript
 AddOutputFilterByType DEFLATE application/x-javascript
 AddOutputFilterByType DEFLATE application/x-shockwave-flash
</IfModule>


<IfModule mod_expires.c>
 ExpiresActive On
 ExpiresByType text/css "access plus 1 month"
 ExpiresByType text/javascript "access plus 1 month"
 ExpiresByType text/html "access plus 1 month"
 ExpiresByType application/javascript "access plus 1 month"
 ExpiresByType image/gif "access plus 1 month"
 ExpiresByType image/jpeg "access plus 1 month"
 ExpiresByType image/png "access plus 1 month"
 ExpiresByType image/x-icon "access plus 1 month"
</IfModule>
<ifmodule mod_headers.c>
 <filesmatch "\\.(ico|jpe?g|png|gif|swf)$">
  Header set Cache-Control "max-age=2592000, public"
 </filesmatch>
 <filesmatch "\\.(css)$">
  Header set Cache-Control "max-age=604800, public"
 </filesmatch>
 <filesmatch "\\.(js)$">
  Header set Cache-Control "max-age=216000, private"
 </filesmatch>
</ifmodule>`}
      </code>
    </pre>
    <p>
      در قدم بعد باید قطعه کد زیر را به فایل{" "}
      <span className="code">webpack.mix.js</span> اضافه کنید:
    </p>
    <pre>
      <code>
        {`if (mix.inProduction()) {
    mix.version();
}`}
      </code>
    </pre>
    <p>
      درنهایت باید فایل‌های Asset را مانند مثال زیر در برنامه‌ی خود فراخوانی
      کنید:
    </p>
    <pre>
      <code>{`<script src="{{ mix('js/app.js') }}"></script>`}</code>
    </pre>
    <h3 id="using-ignition-and-faker-packages">
      استفاده از پکیج‌های Ignition و Faker
    </h3>
    <p>
      شما برای استفاده از پکیج‌های{" "}
      <a href="https://github.com/facade/ignition" target="_blank">
        Ignition
      </a>{" "}
      و{" "}
      <a href="https://github.com/FakerPHP/Faker" target="_blank">
        Faker
      </a>{" "}
      در لیارا باید ابتدا این پکیج‌ها را از بخش{" "}
      <span className="code">require-dev</span> فایل{" "}
      <span className="code">composer.json</span> به بخش{" "}
      <span className="code">require</span> انتقال دهید:
    </p>
    <Highlight className="json">
      {`"require": {
        ...
        "facade/ignition": "^2.5",
        "fakerphp/faker": "^1.9.1",
},`}
    </Highlight>
    <p>سپس برای اعمال این تغییرات، دستور زیر را در لوکال خود اجرا کنید:</p>
    <code>{`composer update`}</code>
    <p>
      حال با اجرای دستور <span className="code">liara deploy</span>، فرایند
      استقرار آغاز خواهد شد.
    </p>
    <h3 id="timezone">تنظیم منطقه‌ی زمانی (TimeZone)</h3>
    <p>
      به صورت پیش‌فرض، منطقه‌ی زمانی بر روی Asia/Tehran تنظیم شده است. برای
      تغییر مقدار پیش‌فرض، می‌توانید از پارامتر
      <span className="code">timezone</span>
      در فایل <span className="code">liara.json</span>
      استفاده کنید. برای نمونه:
    </p>
    <Highlight className="json">
      {`{
  "platform": "laravel",
  "app": "laravel-starter",
  "laravel": {
    "timezone": "America/Los_Angeles"
  }
}`}
    </Highlight>
    <h3 id="extensions">لیست اکستنشن‌های نصب شده</h3>
    <p>در پلتفرم لاراول، اکستنشن‌های PHP زیر نصب شده‌اند:</p>
    <pre>
      <code>
        {`[PHP Modules]
amqp
apcu
bcmath
bz2
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
libxml
mbstring
memcached
mongodb
msgpack
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
shmop
SimpleXML
soap
sockets
sodium
SPL
sqlite3
standard
sysvmsg
sysvsem
sysvshm
tokenizer
xml
xmlreader
xmlwriter
xsl
yaml
Zend OPcache
zip
zlib

[Zend Modules]
Zend OPcache`}
      </code>
    </pre>
  </Layout>
);
