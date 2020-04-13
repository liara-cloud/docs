import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار برنامه‌های WordPress - WordPress deployment</title>
    </Head>

    <h1>استقرار برنامه‌های وردپرس</h1>
    <p>
    وردپرس یک سیستم مدیریت محتوا (CMS) برای راه اندازی و ایجاد سایت‌ها و وبلاگ‌ها است. وردپرس در ابتدا تنها یک سیستم رایگان وبلاگ‌نویسی بود که امکانات خوبی را در اختیار وبلاگ نویسان قرار می‌داد و سپس به صورت یک سامانه مدیریت محتوا یا نرم‌افزار متن باز برای مدیریت محتوای سایت‌ها معرفی شد.
وردپرس با زبان برنامه‌نویسی پی اچ پی نوشته شده و توسط MySQL پشتیبانی می‌شود.
    </p>

    <p>
      شما می‌توانید از بخش ایجاد برنامه، وارد بخش «برنامه‌های آماده» شوید و با یک کلیک وردپرس را تهیه و نصب کنید.
    </p>

    <ZoomableImage src="/static/wp-one-click-app.png" />

    <h3>شخصی‌سازی تنظیمات <span className="code">php.ini</span></h3>
    <p>
      با ورود به بخش
      {' '}
      <Link href="/apps/environment-variables">تنظیمات برنامه</Link>
      ،
      این امکان را دارید که تنظیمات
      <span className="code">php.ini</span>
      را تغییر و گسترش دهید.
      برای مثال، ممکن است بخواهید که «حداکثر حجم مجاز برای آپلود فایل» در سایت وردپرسی‌تان را شخصی‌سازی کنید.
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
  </Layout>
)
