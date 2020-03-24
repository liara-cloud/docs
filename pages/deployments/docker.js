import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات استقرار برنامه‌ها با استفاده از Dockerfile</title>
    </Head>

    <h1>استقرار برنامه‌ها با استفاده از Dockerfile</h1>
    <p>
      هر برنامه‌ای که دارای یک
      <span className="code">Dockerfile</span>
      باشد، امکان مستقر شدن در لیارا را دارد. این یعنی هر برنامه‌ای که با پایتون، روبی و یا جاوا
      نوشته شده‌باشد، در لیارا می‌تواند اجرا شود. اگر یک image داکر هم داشته باشید، می‌توانید آن را مستقیما دیپلوی کنید.
    </p>

    <h3>مستقرکردن image آماده</h3>
    <p>
      با پارامتر
      <span className="code">--image</span>
      و یا 
      <span className="code">-i</span>
      می‌توانید image های آماده‌ی داکر را که قبلا build شده‌اند را روی لیارا مستقر کنید.
      برای مثال، اگر می‌خواهید یک وبلاگ جذاب با WordPress
      اجرا کنید، می‌توانید از image آماده‌ی
      <span className="code">wordpress:5</span>
      که در رجیستری DockerHub
      است، استفاده کنید:
    </p>
    <pre>
      <code>$ liara deploy --image wordpress:5 --app my-blog --port 80</code>
    </pre>
    <p>
      این ایمیج، پورت 80 را
      Expose
      می‌کند که آن را باید با پارامتر
      <span className="code">--port</span>
      و یا از طریق ایجاد فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      به لیارا اطلاع دهید. در غیر این‌صورت، در زمان دیپلوی،
      CLI
      از شما پورت را می‌پرسد.
    </p>

    <h3>نوشتن Dockerfile</h3>
    <p>
      ایجاد یک
      <span className="code">Dockerfile</span>
      در لیارا هیچ تفاوتی با شرایط عادی ندارد. اگر برنامه‌ی شما هم‌اکنون یک
      <span className="code">Dockerfile</span>
      دارد که با آن به راحتی اجرا می‌شود، نیازی به تغییر آن ندارید. چون در لیارا هم اجرا خواهد شد.
    </p>
    <p>
      اگر در نوشتن یک
      <span className="code">Dockerfile</span>
      برای برنامه‌ی‌تان
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
      سپس دستور زیر را داخل برنامه‌ی‌تان اجرا کنید:
    </p>
    <pre>
      <code>
        $ liara deploy
      </code>
    </pre>
    <p>
      لیارا به صورت خودکار، تشخیص خواهد داد که برنامه‌ی شما را باید با استفاده از
      Docker
      اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
        $ liara deploy --platform=docker
      </code>
    </pre>

    <h3>پورت داخل کانتینر</h3>
    <p>
      به‌طور معمول، شما با استفاده از دستور
      <span className="code">EXPOSE</span>
      پورتی که برنامه‌ی‌تان در آن اجرا خواهد شد را معرفی می‌کنید.
      بعد از وارد کردن دستور
      <span className="code">liara deploy</span>
      این پورت از شما پرسیده خواهد شد.
    </p>
    <p>
      اگر می‌خواهید این پورت را یک‌بار برای همیشه معرفی کنید، می‌توانید یک فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      داخل ریشه‌ی برنامه‌ی‌تان ایجاد کنید و داخل آن، تکه کد زیر را قرار دهید:
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
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">اطلاعات بیشتر درمورد liara.json</Link>
    </p>
  </Layout>
)
