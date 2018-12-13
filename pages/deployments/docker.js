import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <Head>
      <title>Liara | استقرار پروژه‌ها با استفاده از Dockerfile</title>
    </Head>

    <h1>استقرار پروژه‌ها با استفاده از Dockerfile</h1>
    <p>
      هر پروژه‌ای که دارای یک
      <span className="code">Dockerfile</span>
      باشد، امکان مستقر شدن در لیارا را دارد. این یعنی هر پروژه‌ای که با پایتون، روبی و یا جاوا
      نوشته شده‌باشد، در لیارا می‌تواند اجرا شود.
    </p>

    <h3>نوشتن Dockerfile</h3>
    <p>
      ایجاد یک
      <span className="code">Dockerfile</span>
      در لیارا هیچ تفاوتی با شرایط عادی ندارد. اگر پروژه‌ی شما هم‌اکنون یک
      <span className="code">Dockerfile</span>
      دارد که با آن به راحتی اجرا می‌شود، نیازی به تغییر آن ندارید. چون در لیارا هم اجرا خواهد شد.
    </p>
    <p>
      اگر در نوشتن یک
      <span className="code">Dockerfile</span>
      برای پروژه‌ی‌تان
      نیاز به کمک و راهنمایی داشتید، از تیم پشتیبانی ما کمک بگیرید.
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
      لیارا به صورت خودکار، تشخیص خواهد داد که پروژه‌ی شما را باید با استفاده از
      Docker
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        liara deploy --docker
      </code>
    </pre>

    <h3>پورت داخل کانتینر</h3>
    <p>
      به‌طور معمول، شما با استفاده از دستور
      <span className="code">EXPOSE</span>
      پورتی که پروژه‌ی‌تان در آن اجرا خواهد شد را معرفی می‌کنید.
      بعد از وارد کردن دستور
      <span className="code">liara deploy</span>
      این پورت از شما پرسیده خواهد شد.
    </p>
    <p>
      اگر می‌خواهید این پورت را یک‌بار برای همیشه معرفی کنید، می‌توانید یک فایل
      <span className="code">liara.json</span>
      داخل ریشه‌ی پروژه‌ی‌تان ایجاد کنید و داخل آن، تکه کد زیر را قرار دهید:
    </p>
    <pre>
      <code>
{`{
  "port": 8000
}`}
      </code>
    </pre>
    <p>
      در فایل
      <span className="code">JSON</span>
      بالا، فرض بر این بوده‌است که کانتینر شما روی پورت 8000 اجرا خواهد شد.
      <br/>
      <Link href="/clients/cli" title="مستندات CLI">اطلاعات بیشتر درمورد liara.json</Link>
    </p>
  </Layout>
)