import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار پروژه‌های Static - React and Vue deployment</title>
    </Head>

    <h1>استقرار پروژه‌های Static</h1>
    <p>
      منظور از پروژه‌های استاتیک، پروژه‌هایی هستند که اصطلاحا به پروژه‌های سمت کاربری
      یا همان
      Front End
      معروف‌اند. شما می‌توانید یک فایل
      <span className="code">index.html</span>
      و 
      <span className="code">style.css</span>
      تا پروژه‌های پیچیده‌تری مانند
      <span className="code">React</span> و یا 
      <span className="code">Vue</span>
      و حتی
      <span className="code">Angular</span>
      را روی سرورهای لیارا مستقر کنید.
    </p>

    <h3>شروع عملیات استقرار</h3>
    <p>
      در ابتدا مطمئن شوید که
      <span className="code">@liara/cli</span>
      را روی کامپیوترتان نصب کرده‌اید.
      {' '}
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر</Link>
      <br/>
      و حالا کافیست که پروژه‌ی‌تان را
      <span className="code">build</span>
      بگیرید و در پوشه‌ی نهایی پروژه که حتما باید شامل یک فایل
      <span className="code">index.html</span>
      باشد، دستور زیر را وارد کنید:
    </p>
    <pre>
      <code>
        liara deploy
      </code>
    </pre>
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که پروژه‌ی شما را باید به عنوان یک پروژه‌ی سمت کاربری
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --static
      </code>
    </pre>

    <h3>تنظیمات Nginx</h3>
    <p>
      استقرار پروژه‌های استاتیک، توسط وب‌سرور
      <span className="code">Nginx</span>
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را مطابق با
      نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی پروژه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای پروژه‌های استاتیک، این فایل به شکل زیر تعریف شده‌است:
    </p>
    <pre>
      <code>
{`location / {
  index  index.html index.htm;
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