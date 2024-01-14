import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات رویدادها events - لیارا</title>
    </Head>

    <h1>رویدادها</h1>
    <span className="page-description">(Events)</span>

    <p>
      رویدادها، از وضعیت استقرار برنامه‌های ما خبر می‌دهند؛ در واقع رویدادها به
      ما می‌گویند که هم‌اکنون وضعیت نهایی برنامه‌ما چگونه است. شما می‌توانید
      وضعیت نهایی برنامه‌های خود را در قسمت رویدادهای آن برنامه، بررسی کنید:
    </p>

    <ZoomableImage src="/static/liara-events.png" alt="لیست رویدادها" />

    <p>
      لیست رویدادها، بر اساس زمان آخرین تغییری که روی برنامه اعمال شده، مرتب
      شده‌اند.
    </p>
  </Layout>
);
