import Layout from '../../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import Notice from '../../components/Notice'
import ZoomableImage from '../../components/ZoomableImage'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار پروژه‌های Django - Django deployment</title>
    </Head>

    <h1>استقرار پروژه‌های Django</h1>
    <p>
      پروژه‌ی شما باید دارای فایل
      <span className="code">requirements.txt</span>
      باشد و حتما مطمئن شوید که Django در این فایل وجود داشته باشد تا بتواند در لیارا مستقر شود.
      در حال حاظر، لیارا از Django 2 پشتیبانی می‌کند.
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
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که پروژه‌ی شما را باید به عنوان یک پروژه‌ی
      Django
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --platform=django
      </code>
    </pre>

    <h3>امنیت</h3>
    <p>
      جنگو داده‌های حساس شما را رمزنگاری می‌کند. برای رمزنگاری نیاز به یک کلید غیر قابل حدس و پیچیده
      {' '}
      دارد که شما باید آن را ایجاد کرده و از طریق پنل تنظیمات آن را در اختیار پروژه‌یتان قرار دهید.
    </p>
    <p>
      کلیدی که تولید کردید را کپی کرده و در پنل تنظیمات پروژه‌یتان با عنوان
      <span className="code">SECRET_KEY</span>
      وارد کنید:
    </p>
    <pre>
      <code>
{`SECRET_KEY=tZdGodxUjN0WJwI8`}
      </code>
    </pre>
    {/* TODO: Add a screenshot */}
    <p>
      هر پروژه‌ای یک بخش تنظیمات دارد که از طریق آن می‌توانید متغیرهای لازم را برای پروژه تعریف کنید.
      (<Link href="/projects/environment-variables" title="مستندات متغیرها">اطلاعات بیشتر</Link>)
    </p>

    <h3>پکیج‌ها به صورت خودکار نصب می‌شوند</h3>
    <p>
      لیارا به صورت خودکار پکیج‌هایی که در فایل‌های
      <span className="code">requirements.json</span>
      لیست شده‌اند را برای شما نصب می‌کند.
      پس نیازی ندارید که به دنبال اجرای دستورات
      <span className="code">pip install</span>
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
      برای این‌که پروژه‌ی‌ شما بتواند به دیتابیسی که ساختید متصل شود، باید متغیر زیر را ایجاد کرده و مقداردهی کنید:
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
        python manage.py migrate
      </code>
    </pre>

    <h3>تنظیمات Nginx</h3>
    <p>
      استقرار پروژه‌های Django، توسط وب‌سرور
      <span className="code">Nginx</span>
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را مطابق با
      نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی پروژه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای پروژه‌های Django، این فایل به شکل زیر تعریف شده‌است:
    </p>
    <pre>
      <code>
{`location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files $uri @django_app;
}`}
      </code>
    </pre>
    <p>
      که شما می‌توانید آن را به شیوه‌ی خودتان گسترش دهید. برای مثال، برای فعال‌کردن فشرده‌سازی
      <span className="code">gzip</span>
      می‌توانید به این صورت عمل کنید:
    </p>
    <pre>
      <code>
{`gzip             on;
gzip_disable     "msie6";
gzip_vary        on;
gzip_proxied     any;
gzip_comp_level  6;
gzip_types       text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files $uri @django_app;
}`}
      </code>
    </pre>

    <h3>ذخیره‌ی فایل‌ها</h3>
    <p>
      شما می‌توانید فایل‌های
      Media
      پروژه‌ی‌تان را به ۲ شیوه ذخیره کنید. اول این که می‌توانید از پوشه‌ی media
      در ریشه‌ی پروژه‌ی‌تان استفاده کنید. ما این روش را برای پروژه‌های بزرگ توصیه نمی‌کنیم، چون مقیاس‌پذیر نیست. اما برای پروژه‌های کوچک و متوسط قابل استفاده است.
      <br />
      از آن‌جایی که فایل‌سیستم در لیارا موقتی است، لازم است که این پوشه را به عنوان
      {' '}
      <Link href="/projects/volumes">Volume</Link>
      {' '}
      در فایل
      <span className="code">liara.json</span>
      پروژه‌ی‌تان به لیارا معرفی کنید:
    </p>
    <pre>
      <code>
{`{
  "volume": "/usr/src/app/media"
}`}
      </code>
    </pre>

    <Notice variant="info">
      ریشه‌ی پروژه‌های جنگو در لیارا
      <span className="code">/usr/src/app</span>
      است. برای همین در زمان تعریف volume
      باید از این مسیر شروع کنید.
    </Notice>

    <p>
      روش دوم استفاده از
      {' '}
      <Link href="/storage/overview">سرویس فایل لیارا</Link>
      {' '}
      است. این سرویس در واقع یک سرویس Object Storage
      است که دارای API ای سازگار با سرویس معروف AWS S3 است. بنابراین شما می‌توانید
      از کتاب‌خانه‌های AWS S3 برای کار با سرویس فایل لیارا استفاده کنید.
      <br />
      ما استفاده از کتاب‌خانه‌ی
      {' '}
      <a href="https://docs.min.io/docs/python-client-quickstart-guide.html" target="_blank">MinIO</a>
      {' '}
      را برای کار با سرویس فایل لیارا توصیه می‌کنیم.
    </p>
  </Layout>
)
