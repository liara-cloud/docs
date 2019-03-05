import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Gist from 'react-gist'
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
        liara deploy --wordpress
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

    {/* TODO: php.ini settings */}
    {/* TODO: Apache settings */}

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
  </Layout>
)