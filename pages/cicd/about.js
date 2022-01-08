import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

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
      این روز‌ها با سرعت بالای پیشرفت نرم‌افزاری، نیاز به ساختارهایی است
      که توسعه‌دهندگان بتوانند نسخه‌های جدید نرم‌افزارهایشان را سریعا
      به‌دست کاربران برسانند و در عین حال از سلامت بودن برنامه‌شان مطمئن
      باشند.
    </p>
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Continuous_integration"
        target="_blank"
      >
        CI (Continuous Integration)
      </a>{' '}
      به شما کمک می‌کند تا از سلامت و یکپارچه بودن کدهای موجود در
      ریپازیتوری‌تان اطمینان داشته باشید و{' '}
      <a
        href="https://en.wikipedia.org/wiki/Continuous_delivery"
        target="_blank"
      >
        CD (Continuous Delivery)
      </a>{' '}
      این امکان را در اختیار شما قرار می‌دهد تا تغییرهای نرم‌افزاری را
      سریعا به‌دست کاربران برسانید. اگر بخواهیم کمی عمیق‌تر در این باره
      صحبت کنیم باید گفت که اجرای تست‌ها و اطمینان از Pass شدن آن‌ها در
      مرحله‌ی CI انجام می‌شود و در CD با هربار push کردن کدهایتان در
      ریپازیتوری‌های GitLab یا GitHub ، برنامه‌ی شما در سرور نیز به‌روز
      می‌شود.
    </p>
    <p>
      حال اگر از لیارا برای استقرار برنامه‌هایتان استفاده کرده‌اید،
      می‌توانید با راه‌اندازی فرایند CI/CD در سرویس‌های{' '}
      <Link href="/cicd/github">GitHub</Link> و{' '}
      <Link href="/cicd/gitlab">GitLab</Link>{' '}
      از تمام مزیت‌هایی که درباره‌شان صحبت کردیم بهره‌مند شوید.
      علاوه‌براین‌ها مطالعه‌ی یکی از قابلیت‌های لیارا به‌نام{' '}
      <Link href="/app-features/zero-downtime-deployment">
        <a>
          <b>استقرار بدون اختلال</b>
        </a>
      </Link>{' '}
      می‌تواند در تجربه‌ای بهتر و حرفه‌ای‌تر به شما کمک کند.
    </p>
  </Layout>
);
