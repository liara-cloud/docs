import Layout from '../../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار برنامه‌های Angular - Angular deployment</title>
    </Head>

    <h1>استقرار برنامه‌های Angular</h1>
    <p>
      برنامه‌هایی که با
      <span className="code">Angular CLI</span>
      ساخته می‌شوند، به راحتی می‌توانند روی لیارا مستقر شوند.
    </p>

    <h3>پکیج‌ها به صورت خودکار نصب می‌شوند</h3>
    <p>
      لیارا به صورت خودکار پکیج‌هایی که در فایل
      <span className="code">package.json</span>
      لیست شده‌اند را برای شما نصب می‌کند. پس نیازی ندارید که دنبال اجرای دستور
      <span className="code">npm install</span>
      باشید. از آن‌جایی که اجرای این دستور زمان‌بر است، برای سرعت بیشتر، این دستور را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر نمانید.
    </p>

    <h3>برنامه‌ی شما به صورت خودکار build می‌شود</h3>
    <p>
      لیارا به صورت خودکار دستور build برنامه‌ی‌تان را روی سرور اجرا می‌کند و
      مطمئن می‌شود که برنامه‌ی‌تان در حالت production است.
      پس نیازی به اجرای دستور
      <span className="code">npm run build</span>
      نیست.
    </p>

    <h3>شروع عملیات استقرار</h3>
    <p>
      در ابتدا مطمئن شوید که
      <span className="code">@liara/cli</span>
      را روی کامپیوترتان نصب کرده‌اید.
      {' '}
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر</Link>
      <br/>
      و حالا کافیست که وارد پوشه‌ی برنامه‌ی‌تان شوید و دستور زیر را وارد کنید:
    </p>
    <pre>
      <code>
        liara deploy
      </code>
    </pre>
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که برنامه‌ی شما را باید به عنوان یک برنامه‌ی
      Angular
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --platform=angular
      </code>
    </pre>

    <h3>تنظیمات Nginx</h3>
    <p>
      استقرار برنامه‌های Angular، توسط وب‌سرور
      <span className="code">Nginx</span>
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را مطابق با
      نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی برنامه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای برنامه‌های Angular، این فایل به شکل زیر تعریف شده‌است:
    </p>
    <pre>
      <code>
{`location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}`}
      </code>
    </pre>
    <p>
      که شما می‌توانید آن را به شیوه‌ی خودتان گسترش دهید:
    </p>
    <pre>
      <code>
{`location / {
  # ...
}

location /api {
  # ...
}

location /images {
  # ...
}`}
      </code>
    </pre>
  </Layout>
)
