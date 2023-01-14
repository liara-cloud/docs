import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../components/Layout";
import Notice from "../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات انتقال سرویس‌ها - لیارا</title>
    </Head>

    <h1>انتقال سرویس‌ها</h1>
    <p>
      ممکن است با توجه به نیاز‌هایی مانند مدیریت جداگانه پروژه‌های شخصی و شرکتی
      یا بهره‌مندی از برخی مزایا تصمیم داشته باشید سرویس‌های‌تان را به حساب
      دیگری در لیارا منتقل کنید و به‌همین دلیل در ادامه‌ی این مستندات به‌طور
      کامل نحوه‌ی انتقال انواع سرویس‌های فعلی آموزش داده شده است.
    </p>

    <h4>فهرست عناوین:</h4>
    <p>
      <ul>
        <li>
          <a href="#apps">انتقال برنامه</a>
        </li>
        <li>
          <a href="#databases">انتقال دیتابیس</a>
        </li>
        <li>
          <a href="#object-storage">انتقال سرویس فایل</a>
        </li>
        <li>
          <a href="#domains">انتقال دامنه</a>
        </li>
      </ul>
    </p>

    <Notice variant="info">
      اگر در هرکدام از مراحل انتقال سرویس‌ها با مشکلی روبرو بودید یا نکته‌ای
      مدنظرتان بود می‌توانید از طریق{" "}
      <a href="https://console.liara.ir" target="_blank" rel="noopener">
        تیکت
      </a>{" "}
      با پشتیبان‌های فنی لیارا در ارتباط باشید.
    </Notice>

    <h3 id="apps">انتقال برنامه</h3>
    <p>
      فرض را بر این می‌گیریم که قصد انتقال برنامه‌ای با شناسه‌ی
      <span className="code">source-app</span>
      را به برنامه‌ای با شناسه‌ی
      <span className="code">target-app</span>
      داشته باشید.
    </p>

    <h4>راه‌اندازی و پیکربندی اولیه</h4>
    <p>
      در قدم اول باید برنامه‌ی <span className="code">target-app</span> را با
      پلن دلخواه ایجاد کنید. سپس تنظیمات مرتبط و یا ویژگی‌های استفاده شده در
      برنامه‌ی <span className="code">source-app</span> مانند{" "}
      <Link href="/app-features/environment-variables">متغیرهای محیطی</Link> و
      یا استفاده از قابلیت <Link href="/app-features/fixed-ip">آی‌پی ثابت</Link>{" "}
      را نیز باید در برنامه‌ی <span className="code">target-app</span> تنظیم و
      یا فعال کنید.{" "}
    </p>

    <h4>انتقال سورس‌کد</h4>
    <p>
      برای انتقال سورس‌کد می‌توانید آخرین سورس‌کدی که با موفقیت دیپلوی شده را از
      بخش تاریخچه برنامه‌ی <span className="code">source-app</span> دانلود کرده
      و سورس‌کد دانلود شده را با استفاده از{" "}
      <Link href="/cli/install">لیارا CLI</Link> در برنامه‌ی{" "}
      <span className="code">target-app</span> مستقر کنید.
    </p>
    <Highlight className="bash">{`$ npm i -g @liara/cli
$ liara login
$ cd source-code/
$ liara deploy --app target-app --detach`}</Highlight>

    <h4>انتقال دیسک‌ها</h4>
    <h5>۱) انتقال دیسک‌ها با استفاده از دسترسی FTP</h5>
    <p>
      در ابتدا باید تمام دیسک‌های برنامه‌ی
      <span className="code">source-app</span>
      را ترجیحا با نام یکسان با استفاده از دستور{" "}
      <Link href="/cli/disk#create">liara disk:create</Link> برای برنامه‌ی
      <span className="code">target-app</span>
      بسازید. سپس اطلاعات دیسک‌ها را در فایل{" "}
      <Link href="/storage/disks/management">liara.json</Link> وارد کرده و دستور{" "}
      <Link href="/cli/deploy">liara deploy</Link> را اجرا کنید تا دیسک‌های
      ایجاد شده در فرایند استقرار به مسیر مورد نظر مونت شوند.
    </p>
    <Notice>
      به‌منظور بررسی نتیجه‌ی مونت شدن دیسک‌ها می‌توانید وضعیت هر دیسک را در
      صفحه‌ی دیسک‌های برنامه مشاهده کنید.
    </Notice>
    <p>
      سپس در صفحه‌ی پشتیبان‌گیری دیسک‌های برنامه‌ی
      <span className="code">source-app</span>، از هر دیسک یک فایل پشتیبان تهیه
      کرده و آن را دانلود کنید. در نهایت از طریق{" "}
      <Link href="/storage/disks/ftp">ایجاد دسترسی FTP</Link> برای دیسک‌های
      برنامه‌ی <span className="code">target-app</span> می‌توانید فایل پشتیبان
      دانلود شده را در دیسک‌ها مونت شده به مسیر مورد نظر، آپلود کنید. از آنجا که
      FTP قابلیت Extract فایل فشرده را ندارد باید از طریق{" "}
      <Link href="/app-features/console">خط فرمان</Link> به‌برنامه‌ی
      <span className="code">target-app</span>
      متصل شده و فایل‌های فشرده آپلود شده را Extract کنید:
      <Highlight className="bash">
        {`$ cd storage/uploads
$ tar -xzvf backup.tar.gz`}
      </Highlight>
      در دستور بالا، فرض بر این بوده که نام فایل پشتیبان شما
      <span className="code">backup.tar.gz</span>
      است.
    </p>
    <h5>۲) انتقال دیسک‌ها با استفاده از خط فرمان</h5>
    <p>
      در ابتدا باید تمام دیسک‌های برنامه‌ی
      <span className="code">source-app</span>
      را ترجیحا با نام یکسان با استفاده از دستور{" "}
      <Link href="/cli/disk#create">liara disk:create</Link> برای برنامه‌ی
      <span className="code">target-app</span>
      بسازید. سپس اطلاعات دیسک‌ها را در فایل{" "}
      <Link href="/storage/disks/management">liara.json</Link> وارد کرده و دستور{" "}
      <Link href="/cli/deploy">liara deploy</Link> را اجرا کنید تا دیسک‌های
      ایجاد شده در فرایند استقرار به مسیر مورد نظر مونت شوند.
    </p>
    <Notice>
      به‌منظور بررسی نتیجه‌ی مونت شدن دیسک‌ها می‌توانید وضعیت هر دیسک را در
      صفحه‌ی دیسک‌های برنامه مشاهده کنید.
    </Notice>
    <p>
      سپس در صفحه‌ی پشتیبان‌گیری دیسک‌های برنامه‌ی
      <span className="code">source-app</span>، از هر دیسک یک فایل پشتیبان تهیه
      کرده و{" "}
      <strong>
        <u>لینک دریافت فایل را کپی کنید</u>
      </strong>{" "}
      و به <Link href="/app-features/console">خط فرمان</Link> برنامه‌ی{" "}
      <span className="code">target-app</span> متصل شده و دستور زیر را برای
      دانلود پشتیبان وارد کنید:
      <Highlight className="bash">$ wget 'URL' -O backup.tar.gz</Highlight>
      دستور فوق، فایل پشتیبان را از آدرس <span className="code">URL</span>{" "}
      دانلود کرده و با نام
      <span className="code">backup.tar.gz</span>
      ذخیره می‌کند. توجه داشته باشید که در زمان دانلود فایل پشتیبان نباید
      برنامه‌‌تان را ری‌استارت کنید و یا دیپلوی جدیدی انجام دهید. بعد از اتمام
      دانلود فایل پشتیبان در دیسک برنامه‌ی{" "}
      <span className="code">target-app</span>، آن را حالت فشرده خارج کنید:
      <Highlight className="bash">
        {`$ mv backup.tar.gz storage/uploads
$ tar -xzvf backup.tar.gz -C storage/uploads`}
      </Highlight>
    </p>

    <h3 id="databases">انتقال دیتابیس</h3>
    <Notice variant="warning">
      توجه داشته باشید در زمان راه‌اندازی دیتابیس <strong>target-app-db</strong>{" "}
      باید دسترسی از طریق شبکه‌ی عمومی را فعال بگذارید.
    </Notice>
    <h4>انتقال دیتابیس‌‌های MySQL, MariaDB, PostgreSQL</h4>
    <p>
      پس از تهیه و دانلود فایل پشتیبان دیتابیس{" "}
      <span className="code">sorce-app-db</span> باید فایل پشتیبان دانلود شده را
      از حالت فشرده خارج کنید و فایل‌های <span className="code">sql</span> را در
      پوشه‌ای برای بازیابی در مرحله‌ی بعد نگه‌داری کنید. در مرحله‌ی بعد دیتابیس{" "}
      <span className="code">target-app-db</span> را با همان نسخه‌ی دیتابیس{" "}
      <span className="code">sorce-app-db</span> و پلن مورد نظر راه‌اندازی کنید.
      درنهایت با استفاده از پنل‌های مدیریت دیتابیس اعم از phpMyAdmin و PGAdmin،
      فایل‌های <span className="code">sql</span> را در دیتابیس{" "}
      <span className="code">target-app-db</span> بازیابی کنید.
    </p>
    <h4>انتقال دیتابیس‌های MongoDB</h4>
    <Notice variant="info">
      مطمئن شوید که MongoDB در کامپیوتر شما نصب است و در ترمینال یا CMD به‌ابزار
      <span className="code">mongorestore</span>
      دسترسی داشته باشید. در غیر این‌صورت باید MongoDB را نصب کنید.
    </Notice>
    <p>
      پس از تهیه و دانلود فایل پشتیبان دیتابیس{" "}
      <span className="code">sorce-app-db</span> باید فایل پشتیبان دانلود شده را
      از حالت فشرده خارج کنید و فایل‌های <span className="code">sql</span> را در
      پوشه‌ای برای بازیابی در مرحله‌ی بعد نگه‌داری کنید. در مرحله‌ی بعد دیتابیس{" "}
      <span className="code">target-app-db</span> را با همان نسخه‌ی دیتابیس{" "}
      <span className="code">sorce-app-db</span> و پلن مورد نظر راه‌اندازی کنید.
      درنهایت دستور زیر را در کامپیوترتان برای بازیابی داده‌ها وارد کنید:
    </p>
    <Highlight className="bash">
      {`$ mongorestore --uri='CONNECTION_URI' --archive=my-db.dump`}
    </Highlight>
    <p>
      <span className="code">CONNECTION_URI</span> را باآدرس URI در بخش دسترسی
      شبکه‌ی عمومی و <span className="code">my-db.dump</span>
      را با مسیر فایل پشتیبان Extract شده جایگزین کنید. برای مثال:
      <Highlight className="bash">
        {`mongorestore --uri='mongodb://root:pass@host:12345/my-app?authSource=admin' --archive=test-db.dump`}
      </Highlight>
    </p>

    <h3 id="object-storage">انتقال سرویس فایل</h3>
    <p>
      برای انتقال داده‌ها بین دو سرویس فایل باید ابزار{" "}
      <a
        href="https://docs.min.io/docs/minio-client-complete-guide.html"
        target="_blank"
        rel="noopener"
      >
        MinIO Client
      </a>{" "}
      را بر روی سیستم خود نصب کرده و به‌شکل زیر اطلاعات سرویس فایل مبدا و مقصد
      اعم از <span className="code">access key</span> و{" "}
      <span className="code">secret key</span> را در{" "}
      <span className="code">mc</span> وارد کنید:
    </p>

    <Highlight className="bash">
      {`$ mc alias set source-minio https://endpoint1.liara.space ACCESS-KEY1 SECRET-KEY1
$ mc alias set target-minio https://endpoint2.iran.liara.space ACCESS-KEY2 SECRET-KEY2`}
    </Highlight>

    <p>
      همان‌طور که مشاهده می‌کنید، ۲ بار از دستور
      <span className="code">mc alias set</span>
      برای معرفی هر دو سرویس فایل استفاده شده که دستور اول، نام سرویس فایل مبدا
      را <span className="code">source-minio</span>و دستور دوم، نام سرویس فایل
      مقصد را <span className="code">target-minio</span>
      قرار داده است. حال به‌شکل زیر با استفاده از ابزار{" "}
      <span className="code">mc</span>
      می‌توانید دو سرویس فایل را با یکدیگر هم‌گام و اصطلاحا
      <span className="code">mirror</span>
      کنید:
      <Highlight className="bash">{`$ mc mirror source-minio/ target-minio/`}</Highlight>
      با اجرای دستور فوق، تمام داده‌های
      <span className="code">source-minio</span>
      در
      <span className="code">target-minio</span>
      کپی خواهد شد.
    </p>

    <h3 id="domains">انتقال دامنه</h3>
    <p>
      درصورت نیاز به انتقال دامنه باید یک‌بار دیگر دامنه‌ی مدنظرتان را در حساب
      کاربری مقصد اضافه کنید. در صورتی که قصد انتقال چندین دامنه را داشته باشید
      پیشنهاد می‌کنیم به‌ترتیب دامنه‌ی اصلی و سپس زیردامنه‌ها را در حساب کابری
      جدید در بخش دامنه‌ها اضافه کنید. پس از اضافه کردن دامنه و یا دامنه‌ها در
      حساب کاربری مقصد باید رکوردهای جدیدی که در صفحه‌ی دامنه نمایش داده می‌شود
      را در سرویس DNS مورد استفاده مانند Cloudflare وارد کرده و رکوردهای قبلی را
      حذف کنید.
    </p>
  </Layout>
);
