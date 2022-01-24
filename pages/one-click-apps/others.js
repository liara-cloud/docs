import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سایر برنامه‌های آماده - سرویس ابری لیارا</title>
    </Head>

    <h1>سایر برنامه‌های آماده</h1>

    <h3>Ghost</h3>
    <p>
      پلتفرم Ghost یک CMS مشابه وردپرس است که با NodeJS نوشته شده است و به شما
      امکانات خوبی برای مدیریت وبلاگ و وبسایت‌های مختلف می‌دهد.
    </p>

    <Notice variant="info">
      شما می‌توانید به هر برنامه آماده‌ای که در لیارا ایجاد می‌کنید، دامنه
      اختصاصی متصل کنید. کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کنید و طبق مستندات، دامنه‌ اختصاصی را به برنامه متصل کنید.
    </Notice>

    <Notice variant="info">
      اگر برنامه‌ای نیاز دارید که در این قسمت وجود ندارد از طریق تیکت به
      پشتیبانی لیارا اطلاع دهید. مسیر توسعه لیارا همواره بر اساس راحتی و نیاز
      شما تعیین می‌شود.
    </Notice>
  </Layout>
);
