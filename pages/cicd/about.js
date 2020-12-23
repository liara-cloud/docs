import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>CI/CD مستندات - سرویس ابری لیارا</title>
    </Head>

    <h1>درباره CI/CD</h1>
    <span className="page-description">
      (Continuous Integration and Continuous Delivery)
    </span>

    <p>
      این روزها که تغییرات نرم‌افزارها سرعت بیشتری پیدا کرده است، نیازمند
      ساختارهایی هستید تا بتوانید به راحتی نسخه‌های جدید نرم‌افزار‌‌تان را به
      دست کاربران برسانید و در عین حال از سلامت هر نسخه نیز مطمئن شوید.
    </p>
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Continuous_integration"
        target="_blank"
      >
        Continuous Integration
      </a>{" "}
      به شما کمک می‌کند تا مخزن کدها را همیشه سلامت و یکپارچه نگه‌دارید و{" "}
      <a
        href="https://en.wikipedia.org/wiki/Continuous_delivery"
        target="_blank"
      >
        Continuous Delivery
      </a>{" "}
      به شما کمک می‌کند که بتوانید به راحتی تغییرات نرم‌افزار را به دست کاربران
      برسانید. مثلا در CI با اجرای تست‌ها و اطمینان از Pass شدن آن‌ها، جلوی ورود
      کد‌های ناسالم به مخزن کدها گرفته می‌شود و در CD با هر push کردن در مخزن
      کد، برنامه‌‌ی شما در سرور به‌روز می‌شود.
    </p>
    <p>
      در صورتی که از لیارا برای استقرار برنامه‌های‌تان استفاده کرده‌اید
      می‌توانید به راحتی بین مخزن‌ کد‌هایتان و بستر ابری لیارا ارتباط برقرار
      کنید و سازوکارهای CI/CD را اجرا کنید.
    </p>

    <Notice variant="info">
      یکی از قابلیت‌های لیارا به نام{" "}
      <Link href="/app-features/zero-downtime-deployment">
        <a><b>استقرار بدون اختلال</b></a>
      </Link>{" "}
      تا حدی مرتبط با مبحث CD است. اگر تا به حال این بخش را مطالعه نکرده‌اید،
      توصیه می‌کنیم برای تجربه بهتر و حرفه‌ای تر حتما این بخش را نیز مطالعه
      کنید.
    </Notice>
  </Layout>
);
