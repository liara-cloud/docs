import Head from "next/head";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Notice from "../../components/Notice";

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

    <h3>برنامه هایی که به‌زودی اضافه خواهند شد</h3>

    <h3>Mattermost</h3>
    <p>
      اگر با Slack کار کرده باشید،{" "}
      <a href="https://mattermost.com/" target="_blank">
        Mattermost
      </a>{" "}
      می‌تواند جایگزین خوبی برای آن باشد. Mattermost نرم‌افزاری برای چت و گفتگوی
      درون تیمی یا سازمانی است.
    </p>

    <h3>File Run</h3>
    <p>
      اگر به ابزاری اختصاصی شبیه Google Drive/Photos که کار مدیریت فایل‌ها را
      برای شما در فضایی ابری راحت‌تر کند نیاز دارید، می‌توانید از{" "}
      <a href="https://filerun.com/" target="_blank">
        File Run
      </a>{" "}
      استفاده کنید.
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
      اگر برنامه‌ای نیاز دارید که در این قسمت وجود ندارد از طریق تیکت به پشتیبانی لیارا اطلاع دهید. مسیر توسعه لیارا همواره بر اساس راحتی و نیاز شما تعیین می‌شود.
    </Notice>
  </Layout>
);
