import Head from "next/head";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>انتقال از cPanel - سرویس ابری لیارا</title>
    </Head>

    <h1>انتقال از cPanel</h1>

    <h3>انتقال فایل‌ها</h3>
    <p>
      برای انتقال فایل‌های برنامه WordPress خود از cPanel به لیارا باید وارد حساب کاربری cPanel شده و از بخش مدیریت فایل (File Manager)، تمام فایل‌های مربوط به برنامه در مسیر <span className="code">public_html</span> هاستینگ را به‌صورت zip شده، دانلود کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/compress-and-download-all-files-in-file-manager.gif" />

    <p>
      در مرحله‌ی بعد باید فایل‌های اولیه برنامه‌ی WordPress را با اجرای دستور <span className="code">rm -rf *</span> در خط فرمان، حذف کنید.    </p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/delete-all-files-of-one-click-wordpress-app.gif"></ZoomableImage>

    <p>حال برای انتقال فایل‌ها به دسترسی FTP نیاز است. بنابراین برای ایجاد دسترسی FTP وارد بخش دیسک‌ها در برنامه‌ی موردنظرتان شده و در بخش دسترسی FTP، بر روی دکمه‌ی ایجاد دسترسی FTP کلیک کنید.</p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/create-new-ftp-access.gif" />

    <p>
      پس از ایجاد دسترسی FTP باید با استفاده از این پروتکل‌، فایل‌های دانلود شده از هاستینگ را در دیسک برنامه آپلود کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/upload-zip-file-with-ftp.gif" />

    <Notice variant="info">
      برای کسب اطلاعات بیشتر می‌توانید به <a href="/storage/disks/ftp">مستندات دسترسی به دیسک‌ها با FTP</a> مراجعه کنید.
    </Notice>
    <p>
      در مرحله‌ی آخر باید فایل zip آپلود شده در مرحله‌ی قبل را با اجرای دستور <span className="code">unzip file-name.zip </span> از حالت فشرده خارج کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/unzip-some-file-with-liara-command-line.gif" />

    <h3>
      انتقال دیتابیس
    </h3>
    <p>
      برای انتقال دیتابیس از cPanel باید درابتدا از اطلاعات دیتابیس خود با استفاده از phpMyAdmin یک Export بگیرید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/export-mysql-database-using-phpmyadmin.gif" />

    <p>
      سپس باید وارد دیتابیس خود در لیارا شده و در بخش نحوه‌ی اتصال، phpMyAdmin را برای دسترسی آسان به دیتابیس راه‌اندازی کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/setup-phpmyadmin.gif" />

    <p>
      درنهایت برای Import کردن داده‌های دیتابیس قبلی برنامه‌ی خود به دیتابیس فعلی بایستی با استفاده از phpMyAdmin به دیتابیس فعلی متصل شده و فایل <span className="code">.sql</span> را در دیتابیس wordpress ایمپورت کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/import-mysql-database-using-phpmyadmin.gif" />

    <h3>دستورالعمل‌های نهایی</h3>

    <h4>لود نشدن صحیح برنامه</h4>
    <p>
      درصورتی که دامنه‌ی قبلی خود را به برنامه WordPress متصل نکرده باشید باید در جدول <span className="code">wp_options</span> آدرس فعلی برنامه را وارد کرده و درنهایت برنامه را ری‌استارت کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/last-migration-steps.gif"></ZoomableImage>

    <h4>خطای err_too_many_redirects</h4>
    <p>
      درصورتی که برنامه‌ی شما با خطای too many redirects مواجه شد باید قطعه کد زیر را به فایل <span className="code">wp-config.php</span> اضافه کرده و مجدد برنامه را بررسی کنید. درصورتی که خطا رفع نشد، می‌توانید ازطریق <a href="https://console.liara.ir/tickets">تیکت</a> با پشتیبان‌های فنی در ارتباط باشید.
    </p>
    <code>{`$_SERVER['HTTPS'] = 'on';`}</code>
    <br />
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/debugging-err-too-many-redirects.gif"></ZoomableImage>

    <h4>خطاهای مربوط به دسترسی فایل‌</h4>
    <p>
      درصورتی که با خطاهای مربوط به دسترسی فایل (File Permission) در برنامه‌ی WordPress مواجه شدید، دستورهای زیر را با استفاده از خط فرمان اجرا کنید:
    </p>
    <pre>
      <code>
        {`chown www-data:www-data  -R *
find . -type d -exec chmod 755 {} \\;
find . -type f -exec chmod 644 {} \\;`}
      </code>
    </pre>
    <p>
      اگر هنوزهم خطا برقرار بود می‌توانید از طریق <a href="https://console.liara.ir/tickets">تیکت</a> با ما در ارتباط باشید.
    </p>
    <br />
    <ZoomableImage src="https://files.liara.ir/docs/wordpress/make-change-in-file-and-directory-permission.gif"></ZoomableImage>

  </Layout>
);
