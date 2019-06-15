import Head from 'next/head'
import Link from 'next/link'
import Gist from 'react-gist'
import Layout from '../../components/Layout'
import Notice from '../../components/Notice'
import ZoomableImage from '../../components/ZoomableImage'

export default () => (
  <Layout>
    <Head>
      <title>Liara | استقرار پروژه‌های WordPress - WordPress deployment</title>
    </Head>

    <h1>استقرار پروژه‌های وردپرس</h1>
    <p>
    وردپرس یک سیستم مدیریت محتوا (CMS) برای راه اندازی و ایجاد سایت‌ها و وبلاگ‌ها است. وردپرس در ابتدا تنها یک سیستم رایگان وبلاگ‌نویسی بود که امکانات خوبی را در اختیار وبلاگ نویسان قرار می‌داد و سپس به صورت یک سامانه مدیریت محتوا یا نرم‌افزار متن باز برای مدیریت محتوای سایت‌ها معرفی شد.
وردپرس با زبان برنامه‌نویسی پی اچ پی نوشته شده و توسط MySQL پشتیبانی می‌شود.
    </p>
    <p>
      پروژه‌هایی که با
      WordPress
      ساخته می‌شوند، به راحتی می‌توانند روی لیارا مستقر شوند.
    </p>

    <Notice variant="info">
      با استفاده از قابلیت «برنامه‌های آماده‌ی لیارا»، نیازی نیست که مراحل زیر را
      برای یک پروژه‌ی وردپرسی تازه طی کنید.
      می‌توانید از بخش ایجاد پروژه، وارد بخش برنامه‌های آماده شوید و با یک کلیک وردپرس را تهیه و نصب کنید.
    </Notice>

    <h3>شروع عملیات استقرار</h3>
    <p>
      در ابتدا مطمئن شوید که
      <span className="code">@liara/cli</span>
      را روی کامپیوترتان نصب کرده‌اید.
      {' '}
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر</Link>
      <br/>
      و حالا کافیست که وارد پوشه‌ای که وردپرس در آن قرار دارد شوید و دستور زیر را وارد کنید:
    </p>
    <pre>
      <code>
        liara deploy
      </code>
    </pre>
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که پروژه‌ی شما را باید به عنوان یک پروژه‌ی وردپرسی
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --platform=wordpress
      </code>
    </pre>

    <h3>تنظیمات وردپرس</h3>
    <p>
      وردپرس نیاز به یک دیتابیس MySQL
      دارد تا نوشته‌های شما را در آن ذخیره کند. از بخش دیتابیس‌های لیارا،
      یک دیتابیس MySQL
      تهیه کنید. با کلیک بر روی دیتابیس ساخته شده، می‌توانید جزئیات آن را مشاهده کنید.
    </p>
    <p>
      و حالا، از طریق بخش پروژه‌ها، روی پروژه‌ی‌تان کلیک کرده و در پنل تنظیمات، موارد زیر را وارد کنید:
    </p>
    <pre>
      <code>
{`WORDPRESS_DB_HOST=s1.liara.ir:__PORT__
WORDPRESS_DB_USER=root
WORDPRESS_DB_PASSWORD=__SECRET__`}
      </code>
    </pre>
    <p>
      توجه داشته باشید که باید به جای،
      <span className="code">__PORT__</span>
      پورت دیتابیسی که ساختید را وارد کنید.
      و همین‌طور به جای
      <span className="code">__SECRET__</span>
      باید رمز عبور دیتابیسی که ساختید را وارد کنید.
    </p>
    <ZoomableImage src="/static/wordpress-settings.png" alt="تنظیمات دیتابیس وردپرس" />
    <p>
      به صورت پیش‌فرض، وردپرس در دیتابیسی با نام
      <span className="code">wordpress</span>
      نصب می‌شود. اما اگر نام دیگری را برای دیتابیس خود انتخاب کرده‌اید، می‌توانید متغیر زیر را در بخش تنظیمات
      وارد کنید:
    </p>
    <pre>
      <code>
{`WORDPRESS_DB_NAME=wordpress`}
      </code>
    </pre>
    <p>
      به جای
      <span className="code">wordpress</span>
      باید نام دیتابیس دلخواه‌تان را وارد کنید.
    </p>
    <p>
      توجه کنید که بعد از سفارش دیتابیس از طریق پنل لیارا، باید از طریق خط فرمان کامپیوترتان
      به سرور دیتابیس متصل شده و با دستور زیر دیتابیس مد نظرتان را بسازید:
    </p>
    <pre>
      <code>
{`CREATE DATABASE wordpress;`}
      </code>
    </pre>

    <h3>تنظیمات HTTPS</h3>
    <p>
      برای این که وردپرس در صورت فعال‌بودن HTTPS
      به درستی کار کند و فایل‌های‌تان را نمایش دهد، باید تکه کد زیر را در فایل
      <span className="code">wp-config.php</span>
      قرار داده و دوباره دستور
      <span className="code">liara deploy</span>
      را وارد کنید:
    </p>
    <Gist id="398f628977d47eebd50a7d681efd4eb9" />

    <h3>آپلود فایل در پنل وردپرس</h3>
    <p>
      لیارا به صورت خودکار برای پروژه‌های وردپرسی،
      {' '}
      <Link href="/projects/volumes" title="مستندات Volume">Volume</Link>
      {' '}
      تعریف می‌کند.
      و این یعنی فایل‌هایی که آپلود می‌کنید و یا یک افزونه و یا پوسته نصب می‌کنید،
      بین استقرارها ثابت می‌مانند و از بین نمی‌روند.
    </p>

    <h3>شخصی‌سازی تنظیمات <span className="code">php.ini</span></h3>
    <p>
      از طریق ایجاد یک فایل با نام
      <span className="code">liara_php.ini</span>
      داخل ریشه‌ی پروژه‌ی‌تان می‌توانید تنظیمات
      PHP
      را شخصی‌سازی کنید.
      برای مثال، ممکن است بخواهید که حداکثر حجم مجاز برای آپلود فایل در سایت وردپرسی‌تان را شخصی‌سازی کنید.
      پس لازم است که فایل
      <span className="code">liara_php.ini</span>
      را به پروژه‌ی‌تان اضافه کرده و محتویات آن را برابر تکه‌کد قرار دهید:
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
    <p>
      و حالا با اجرای دستور
      <span className="code">liara deploy</span>
      تنظیمات شما روی سرور قرار می‌گیرد.
    </p>

    <h3>تنظیمات <span className="code">.htaccess</span></h3>
    <p>
      اگر صفحات مختلف سایت وردپرسی شما نمایش داده نمی‌شوند و با خطای 404
      مواجه می‌شوید، احتمالا به دلیل تنظیمات Permalink سایت شماست.
      برای رفع این مشکل، یا باید از طریق پنل وردپرس تنظیمات را اصلاح کنید و یا اگر
      قصد استفاده از Pretty URLs
      را دارید، یک فایل با نام
      <span className="code">.htaccess</span>
      در پروژه‌ی‌تان بسازید و محتویات زیر را داخل آن قرار دهید:
    </p>
    <pre>
      <code>
{`# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress`}
      </code>
    </pre>
    <p>
      و حالا دستور
      <span className="code">liara deploy</span>
      را وارد کنید. مشکل باید رفع شده باشد.
    </p>
  </Layout>
)