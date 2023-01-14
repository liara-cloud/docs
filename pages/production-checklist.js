import Layout from "../components/Layout";
import Notice from "../components/Notice";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات چک‌لیست Production - لیارا</title>
    </Head>

    <h1>چک‌لیست Production</h1>
    <p>
      توجه داشته باشید که رعایت چک‌لیست زیر اختیاری است اما ما برای به حداقل
      رساندن مشکل‌های نرم‌افزاری و داشتن آپ‌تایم حداکثری، رعایت این موارد را
      بسیار توصیه می‌کنیم.
    </p>
    <h4>فهرست عناوین:</h4>
    <ul>
      <li>
        <a href="#notifications">اعلان‌ها</a>
      </li>
      <li>
        <a href="#domains">دامنه‌ها</a>
      </li>
      <li>
        <a href="#backups">فایل‌های پشتیبان</a>
      </li>
      <li>
        <a href="#useful-features">فعال کردن ویژگی‌های کاربردی</a>
      </li>
      <li>
        <a href="#databases">دیتابیس‌ها</a>
      </li>
      <li>
        <a href="#nodejs">برنامه‌های NodeJS</a>
      </li>
      <li>
        <a href="#laravel">برنامه‌های Laravel</a>
      </li>
      <li>
        <a href="#django">برنامه‌های Django</a>
      </li>
      <li>
        <a href="#wordpress">برنامه‌های WordPress</a>
      </li>
    </ul>

    <h3 id="notifications">اعلان‌ها</h3>
    <p>
      در صفحه‌ی{" "}
      <a href="https://console.liara.ir/settings/notifications">تنظیم اعلان</a>،
      مسیرهای اطلاع رسانی مختلف را برای دریافت اعلان‌ها فعال کرده و همچنین مقدار
      حداقل اعتبار را نسبت به هزینه‌ی سرویس‌های فعلی خود، افزایش دهید.
    </p>

    <h3 id="domains">دامنه‌ها</h3>
    <p>
      در قدم اول،{" "}
      <Link href="/domains/management#liara-subdomain">
        زیردامنه‌ی رایگان liara.run
      </Link>{" "}
      را از بخش تنظیمات برنامه به‌منظور SEO غیرفعال کنید و همچنین{" "}
      <Link href="/domains/management#add-subdoamin">ساب‌دامنه‌ی www</Link> را
      علاوه‌بر دامنه‌ی ریشه در بخش دامنه‌ها اضافه کرده و با تنظیم ریدایرکت 301،
      کاربران را به دامنه‌ی ریشه هدایت کنید.
    </p>
    <Notice variant="warning">
      توجه داشته باشید که در صورت فعال بودن CDN بایستی SSL/TLS خود را از
      سرویس‌دهنده‌ی CDN فعلی تهیه کرده و گواهی SSL را در سمت لیارا غیر فعال
      کنید.
    </Notice>

    <h3 id="backups">فایل‌های پشتیبان</h3>
    <p>
      لیارا به‌منظور جلوگیری از از دست رفتن داده‌های شما به‌صورت روزانه و خودکار
      از برنامه‌ها و دیتابیس‌های شما، فایل پشتیبان تهیه می‌کند. حال شما
      می‌توانید فایل‌های پشتیبان را با استفاده از{" "}
      <Link href="/client-api/about">API لیارا</Link> به‌صورت خودکار در فضاهای
      ذخیره‌سازی ابری دیگری مانند Google Drive ذخیره کنید.
    </p>

    <h3 id="useful-features">فعال کردن ویژگی‌های کاربردی</h3>
    <p>
      برای داشتن بالاترین آپتایم، از فعال بودن قابلیت{" "}
      <Link href="/app-features/zero-downtime-deployment">
        استقرار بدون اختلال
      </Link>{" "}
      اطمینان حاصل کرده و همچنین قابلیت{" "}
      <Link href="/app-features/health-check">بررسی سلامت</Link> را پیکربندی
      کنید.
    </p>

    <h3 id="databases">دیتابیس‌ها</h3>
    <p>
      به‌منظور بالا بردن سطح امنیت کسب و کار خود می‌توانید دسترسی به دیتابیس از
      طریق شبکه‌ی عمومی را غیرفعال کرده و از مزایای{" "}
      <Link href="/app-features/private-network">شبکه‌ی خصوصی</Link> بهره‌مند
      شوید.
    </p>

    <h3 id="nodejs">برنامه‌های NodeJS</h3>
    <p>
      توجه داشته باشید که مقدار <span className="code">NODE_ENV</span> در
      متغیرهای محیطی برنامه‌‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> برابر با{" "}
      <span className="code">production</span> باشد.
    </p>

    <h3 id="laravel">برنامه‌های Laravel</h3>
    <p>
      توجه داشته باشید که مقدار <span className="code">APP_DEBUG</span> در
      متغیرهای محیطی برنامه‌‌های{" "}
      <Link href="/app-deploy/laravel/getting-started">Laravel</Link> برابر با{" "}
      <span className="code">false</span> باشد. همچنین باتوجه به ترافیک برنامه‌ی
      شما در حالت Production بایستی مقدار{" "}
      <span className="code">SESSION_DRIVER</span> برنامه‌ی خود را در تنظیمات
      برنامه از <span className="code">file</span> به{" "}
      <span className="code">cookie</span> تغییر دهید زیرا ممکن است با ذخیره‌ی
      هر session به‌صورت فایل در سرور با مشکل‌هایی مانند پر شدن Disk یا محدودیت
      inode مواجه شوید.
    </p>

    <h3 id="django">برنامه‌های Django</h3>
    <p>
      توجه داشته باشید که مقدار <span className="code">DEBUG</span> در متغیرهای
      محیطی برنامه‌‌های{" "}
      <Link href="/app-deploy/django/getting-started">Django</Link> برابر با{" "}
      <span className="code">false</span> باشد.
    </p>

    <h3 id="wordpress">برنامه‌های WordPress</h3>
    <p>
      به‌منظور ارتقا عملکرد برنامه‌های WordPress حتما توجه داشته باشید که
      Caching را با استفاده از پلاگین‌هایی مانند W3 Total Cache فعال کرده باشید
      و علاوه‌بر آن به‌منظور ارتقا امنیت برنامه حتما{" "}
      <a
        href="https://liara.ir/blog/%DA%A9%D8%A7%D8%B1%D8%A7%DB%8C%DB%8C-xmlrpc-php-%D8%AF%D8%B1-%D9%88%D8%B1%D8%AF%D9%BE%D8%B1%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D8%B1%D8%A7-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%A2%D9%86-%D8%B1%D8%A7/"
        target="_blank"
      >
        ویژگی XML-RPC
      </a>{" "}
      را در برنامه‌ی خود غیر فعال کنید.
    </p>
  </Layout>
);
