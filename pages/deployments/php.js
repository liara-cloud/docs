import Layout from '../../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import Notice from '../../components/Notice'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار پروژه‌های PHP - PHP deployment</title>
    </Head>

    <h1>استقرار پروژه‌های PHP</h1>
    <p>
      اگر شما از فریم‌ورک خاصی مانند Laravel
      استفاده نمی‌کنید و ساختار پروژه‌ی‌تان را خودتان مشخص کرده‌اید و اصطلاحا
      Pure PHP
      کد زده‌اید، از این پلتفرم می‌توانید استفاده کنید.
    </p>
    <Notice variant="info">
      برای لاراول حتما از پلتفرم اختصاصی لاراول استفاده کنید:
      {' '}
      <Link href="/deployments/laravel">اطلاعات بیشتر</Link>
    </Notice>
    <p>
      توجه داشته باشید که لازم است در ریشه‌ی پروژه‌ی‌تان حداقل یک فایل با نام
      <span className="code">index.php</span>
      داشته باشید. در غیر این صورت لیارا نمی‌تواند پلتفرم پروژه‌ی‌تان را تشخیص دهد
      و لازم خواهد بود با استفاده از پارامتر
      <span className="code">--platform</span>
      پلتفرم‌تان را مشخص کنید. در ادامه توضیحات مربوطه ارائه شده است.
    </p>

    <Notice variant="info">
      اگر می‌خواهید از پلتفرم
      PHP
      برای استقرار
      WordPress
      استفاده کنید، توصیه می‌کنیم که از قابلیت «برنامه‌های آماده» لیارا استفاده کنید.
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
      سپس دستور زیر را داخل پروژه‌ی‌تان اجرا کنید:
    </p>
    <pre>
      <code>
        liara deploy
      </code>
    </pre>
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که پروژه‌ی شما را باید به عنوان یک پروژه‌ی
      PHP
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --platform=php
      </code>
    </pre>

    <h3>پکیج‌ها به صورت خودکار نصب می‌شوند</h3>
    <p>
      لیارا به صورت خودکار پکیج‌هایی که در فایل‌های
      <span className="code">composer.json</span>
      لیست شده‌اند را برای شما نصب می‌کند.
      پس نیازی ندارید که به دنبال اجرای دستورات
      <span className="code">composer install</span>
      باشید.
      از آن‌جایی که اجرای این دستورات زمان‌بر است، برای سرعت بیشتر، این دستورات را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر نمانید.
    </p>

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
      شما می‌توانید به هر صورت که مایل هستید اطلاعات دیتابیس را به پروژه‌ی‌تان بدهید. ما پیشنهاد می‌کنیم
      متغیری مانند زیر را در بخش تنظیمات پروژه ایجاد و مقداردهی کنید:
    </p>
    <pre>
      <code>
{`DATABASE_URL=mysql://root:PASSWORD@HOST:PORT/my_database`}
      </code>
    </pre>
    <p>
      توجه کنید که متغیر بالا، صرفا جهت نمونه آورده شده و شما باید مقدار آن را با اطلاعات دیتابیسی که ساختید پر کنید.
      نکته‌ی دیگری که باید به آن توجه کنید این است که در مثال بالا، فرض بر این بوده است که شما به سرور دیتابیس‌تان متصل شده و یک دیتابیس با نام
      <span className="code">my_database</span>
      ساخته‌اید.
    </p>

    {/* TODO: Talk about django's s3 packages */}
    <h3>ذخیره‌ی فایل‌ها</h3>
    <p>
      لیارا یک فضای ابری نامحدود برای ذخیره‌ی فایل‌هایتان در اختیار شما قرار می‌دهد.
      <br />
      فقط کافیست که SDK لیارا را در پروژه‌یتان نصب کرده و شروع به استفاده کنید.
      {' '}
      <Link href="/storage/overview">اطلاعات بیشتر</Link>
      <br />
      همچنین می‌توانید یک volume تعریف کنید:
      {' '}
      <Link href="/projects/volumes">اطلاعات بیشتر</Link>
    </p>
  </Layout>
)
