import Layout from "../../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا | مستندات نادیده‌گرفتن فایل‌ها - .liaraignore -
        .gitignore
      </title>
    </Head>

    <h1>نادیده‌گرفتن فایل‌ها</h1>
    <span className="pageDescription">(Gitignore)</span>

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
  </Layout>
);
