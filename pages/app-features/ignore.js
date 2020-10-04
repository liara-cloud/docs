import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات نادیده‌گرفتن فایل‌ها .liaraignore .gitignore - سرویس ابری لیارا
      </title>
    </Head>

    <h1>نادیده‌گرفتن فایل‌ها</h1>
    <span className="page-description">(Gitignore)</span>

    <p>
      Liara CLI این هوشمندی را دارد که در هر بار عملیات استقرار، فقط فایل‌هایی
      که تغییر کرده باشند و یا به تازگی اضافه شده باشند را آپلود می‌کند و سایر
      فایل‌ها از روی سرور خوانده می‌شوند. این کار باعث می‌شود که سرعت دیپلوی‌ها
      افزایش یابد و نیاز نباشد که شما گاها به خاطر تغییر یک فایل، منتظر آپلودشدن
      کل فایل‌ها باشید.
    </p>
    <p>
      قابلیت Ignore و یا نادیده‌گرفتن فایل‌ها و پوشه‌ها این امکان را به شما
      می‌دهد که فقط فایل‌ها و پوشه‌هایی که روی سرور نیاز دارید را آپلود کنید.
      این قابلیت کاملا مشابه عملکرد Git است.
    </p>
    <p>
      به صورت خودکار، اگر پوشه‌ی شما دارای یکی از فایل‌های زیر باشد، لیارا آن را
      بررسی کرده و فایل‌ها و پوشه‌هایی که در آن لیست کرده باشید را نادیده
      می‌گیرد.
      <ol>
        <li>
          <span className="code">.liaraignore</span>
        </li>
        <li>
          <span className="code">.dockerignore</span>
        </li>
        <li>
          <span className="code">.gitignore</span>
        </li>
      </ol>
    </p>
    <p>
      توجه داشته باشید که اولویت اول با
      <span className="code">.liaraignore</span>
      است، اگر چنین فایلی را تعریف کرده باشید، سایر فایل‌های ignore مانند
      <span className="code">.dockerignore</span>و
      <span className="code">.gitignore</span>
      خوانده نمی‌شوند.
    </p>

    <h3>پوشه‌ها و فایل‌هایی که به‌صورت پیش‌فرض نادیده گرفته می‌شوند</h3>
    <p>
      برخی پوشه‌ها و فایل‌ها هستند که در اکثر برنامه‌ها باید نادیده گرفته شوند.
      Liara CLI
      بدون در نظر گرفتن این‌که شما پوشه‌های زیر را در <span className="code">.gitignore</span>
      قرار داده‌اید یا خیر، از آن‌ها صرف نظر می‌کند و این پوشه‌ها و فایل‌ها به سرور آپلود نمی‌شوند:
    </p>
    <p>
      <ul style={{ direction: 'ltr' }}>
        <li>.git</li>
        <li>.idea</li>
        <li>.vscode</li>
        <li>.gitignore</li>
        <li>.liaraignore</li>
        <li>.dockerignore</li>
        <li>*.*~</li>
        <li>liara.json</li>
        <li>node_modules</li>
        <li>bower_components</li>
      </ul>
    </p>
    <p>
      اما شما می‌توانید عکس این الگوها و در واقع pattern ها را به فایل
      <span className="code">.gitignore</span>
      اضافه کنید و Liara CLI
      را مجبور کنید که آن‌ها را آپلود کند. برای مثال، اگر قصد دارید که Liara CLI
      پوشه‌ی <span className="code">bower_components</span>
      را حتما آپلود کند، باید چنین خطی را به <span className="code">.gitignore</span>
      اضافه کنید:
    </p>
    <pre>
      <code>!bower_components</code>
    </pre>
    <p>
      در واقع، علامت تعجبی که در ابتدای نام پوشه قرار دارد، عملکرد
      ignore را عکس می‌کند و آن پوشه را حتما به لیست آپلود اضافه می‌کند و از لیست ignore
      پیش‌فرض خارج می‌کند.
    </p>
    <Notice variant="warning">
      پیشنهاد می‌کنیم هیچ‌وقت <span className="code">node_modules</span>
      را به‌سرور آپلود نکنید. چرا که سرعت استقرار را بسیار کند خواهد کرد و ممکن است حتی
      عملیات استقرار با خطا مواجه شود.
    </Notice>
  </Layout>
);
