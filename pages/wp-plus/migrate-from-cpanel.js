import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>انتقال از cPanel - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="wordpress" />
      <div className="page-title">
        <h1>وردپرس پلاس</h1>
        <span className="page-description">(WordPress plus)</span>
      </div>
    </div>

    <h3>انتقال از cPanel</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#migrate-files">انتقال فایل‌ها</a>
      </li>
      <li>
        <a href="#migrate-database">انتقال دیتابیس</a>
      </li>
      <li>
        <a href="#load-problem">لود نشدن صحیح برنامه</a>
      </li>
      <li>
        <a href="#too-many-redirects">خطای err_too_many_redirects</a>
      </li>
      <li>
        <a href="#permissions">خطاهای مربوط به دسترسی فایل</a>
      </li>
    </ul>

    <Notice variant="info">
      برای انتقال رایگان برنامه‌ی وردپرس خود از cPanel به لیارا می‌توانید{" "}
      <a href="https://console.liara.ir/tickets" target="_blank" rel="noopener">
        تیکت
      </a>{" "}
      ثبت کنید. در غیراینصورت و برای انتقال فوری وبسایت خود می‌توانید طبق
      مستندات زیر عمل کنید.
    </Notice>

    <h3 id="migrate-files">انتقال فایل‌ها</h3>
    <p>
      برای انتقال فایل‌های برنامه وردپرس خود از cPanel به لیارا باید وارد حساب
      کاربری cPanel شده و از بخش مدیریت فایل (File Manager)، تمام فایل‌های مربوط
      به برنامه در مسیر <strong>public_html</strong> هاستینگ را به‌صورت{" "}
      <strong>zip</strong> شده دانلود کنید.
    </p>
    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/compress-and-download-all-files-in-file-manager.gif" /> */}

    <p>
      در مرحله‌ی بعد وارد برنامه‌ی وردپرس خود شده و از منوی دسترسی FTP، یک
      دسترسی FTP جدید بسازید. بعد از ایجاد دسترسی FTP می‌توانید با استفاده از
      نرم‌افزارهایی مثل{" "}
      <Link href="/storage/disks/ftp#filezilla">FileZilla</Link> یا{" "}
      <Link href="/storage/disks/ftp#winscp">WinSCP</Link> به محتوای برنامه‌ی
      وردپرس دسترسی پیدا کنید.
    </p>
    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/delete-all-files-of-one-click-wordpress-app.gif"></ZoomableImage> */}

    <p>
      حال باید تمامی فایل‌ها و پوشه‌ها را انتخاب کرده و آن‌ها را حذف کنید. سپس
      می‌توانید فایل zip دانلود شده از هاست cPanel خود را در لوکال از حالت فشرده
      خارج کرده و این فایل‌ها و پوشه‌ها را با استفاده از دسترسی FTP آپلود کنید.
    </p>
    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/create-new-ftp-access.gif" /> */}

    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/upload-zip-file-with-ftp.gif" /> */}

    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/unzip-some-file-with-liara-command-line.gif" /> */}

    <h3 id="migrate-database">انتقال دیتابیس</h3>
    <p>
      برای انتقال دیتابیس از cPanel باید در ابتدا از اطلاعات دیتابیس خود با
      استفاده از phpMyAdmin یک Export بگیرید. سپس باید وارد دیتابیس خود در لیارا
      شده و در بخش نحوه‌ی اتصال، phpMyAdmin را برای دسترسی آسان به دیتابیس
      راه‌اندازی کنید.
    </p>

    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/export-mysql-database-using-phpmyadmin.gif" /> */}

    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/setup-phpmyadmin.gif" /> */}

    <p>
      درنهایت برای Import کردن داده‌های دیتابیس قبلی برنامه‌ی خود به دیتابیس
      فعلی بایستی با استفاده از phpMyAdmin به دیتابیس فعلی متصل شده و فایل{" "}
      <span className="code">.sql</span> را در دیتابیس وردپرس ایمپورت کنید.
    </p>

    <Notice variant="info">
      ابزار phpMyAdmin برای بازیابی فایل‌های پشتیبان با حجم بالا مناسب نیست.
      به‌همین علت توصیه می‌کنیم به‌عنوان جایگزین از ابزار{" "}
      <Link href="/databases/mariadb/restore#mysql-client">
        MySQL Command-Line Client
      </Link>{" "}
      استفاده کنید.{" "}
    </Notice>
    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/import-mysql-database-using-phpmyadmin.gif" /> */}

    <h3>دستورالعمل‌های نهایی</h3>

    <h4 id="load-problem">لود نشدن صحیح برنامه</h4>
    <p>
      درصورتی که دامنه‌ی قبلی خود را به برنامه وردپرس متصل نکرده باشید باید در
      جدول <strong>wp_options</strong> آدرس فعلی برنامه را وارد کرده و درنهایت
      برنامه را ری‌استارت کنید.
    </p>
    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/last-migration-steps.gif"></ZoomableImage> */}

    <h4 id="too-many-redirects">خطای err_too_many_redirects</h4>
    <p>
      درصورتی که برنامه‌ی شما با خطای too many redirects مواجه شد باید قطعه کد
      زیر را با استفاده از دسترسی FTP به فایل <strong>wp-config.php</strong>{" "}
      اضافه کرده و مجدد برنامه را بررسی کنید. درصورتی که خطا رفع نشد، می‌توانید
      ازطریق <a href="https://console.liara.ir/tickets">تیکت</a> با پشتیبان‌های
      فنی در ارتباط باشید.
    </p>
    <Highlight className="php">{`$_SERVER['HTTPS'] = 'on';`}</Highlight>
    <br />
    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/debugging-err-too-many-redirects.gif"></ZoomableImage> */}

    <h4 id="permissions">خطاهای مربوط به دسترسی فایل‌</h4>
    <p>
      درصورتی که با خطاهای مربوط به دسترسی فایل (File Permission) در برنامه‌ی
      وردپرس مواجه شدید، دستورهای زیر را با استفاده از خط فرمان اجرا کنید:
    </p>
    <Highlight className="bash">
      {`chown www-data:www-data -R *
find . -type d -exec chmod 755 {} \\;
find . -type f -exec chmod 644 {} \\;`}
    </Highlight>
    <p>
      اگر هنوزهم خطا برقرار بود می‌توانید از طریق{" "}
      <a href="https://console.liara.ir/tickets">تیکت</a> با ما در ارتباط باشید.
    </p>
    <br />
    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/make-change-in-file-and-directory-permission.gif"></ZoomableImage> */}
  </Layout>
);
