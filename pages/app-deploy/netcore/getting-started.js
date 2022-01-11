import Layout from '../../../components/Layout';
import Notice from '../../../components/Notice';
import Link from 'next/link';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات شروع به کار برنامه‌های .Net Core - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/netcore.svg"
        alt="netcore"
      />
      <div className="page-title">
        <h1>برنامه‌های ASP.Net Core</h1>
        <span className="page-description">(ASP.Net Core Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک
      برنامه ASP.Net Core را روی بستر ابری لیارا مستقر کنید. در هر گام،
      شما با یک ویژگی در لیارا آشنا می‌شوید و می‌توانید از آن‌ها در
      برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌کنیم:</p>
    <ul>
      <li>
        6.0 <strong>(LTS)</strong>
      </li>
      <li>5.0</li>
      <li>
        3.1 <strong>(LTS)</strong> (پیش‌فرض)
      </li>
      <li>3.0 (EOL)</li>
      <li>2.2 (EOL)</li>
      <li>2.1 (EOL)</li>
    </ul>

    <p>
      برای انتخاب نسخه، صفحه‌ی{' '}
      <Link href="/app-deploy/netcore/tips">توضیحات و نکات تکمیلی</Link>{' '}
      را مطالعه بفرمایید.
    </p>

    <Notice variant="warning">
      EOL مخفف عبارت END OF LIFE و به‌معنای پایان عمر یک نسخه است بنابراین
      باوجود پشتیبانی از نسخه‌های EOL در لیارا توصیه می‌کنیم پروژه‌هایتان
      را به نسخه‌های جدیدتر ارتقا دهید.
    </Notice>
    <br />
    <Link href="/app-deploy/netcore/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
