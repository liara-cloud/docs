import Head from "next/head";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات برنامه‌های آماده - سرویس ابری لیارا</title>
    </Head>

    <h1>برنامه‌های آماده</h1>
    <span className="page-description">(One-Click Apps)</span>

    <h1>درباره برنامه‌های آماده</h1>
    <p>
      در صفحه‌ی ساخت برنامه بخشی وجود دارد به نام <b>برنامه‌های آماده</b> که شما می‌توانید به سادگی و راحتی برنامه‌های
      کاربردی خاصی را فقط با یک کلیک ایجاد کنید. برای مثال شما می‌توانید با یک
      کلیک WordPress را نصب و اجرا کنید. دیتابیس به صورت خودکار برای شما ایجاد و
      WordPress به آن متصل می‌شود.
    </p>
    <ZoomableImage src="/static/one-click-apps.png" />

    <p>در حال حاضر این برنامه‌ها در این بخش وجود دارد:</p>
    <ul dir="ltr">
      <li>WordPress</li>
      <li>Ghost</li>
      <li>RocketChat</li>
      <li>Gitea</li>
      <li>Metabase</li>
      <li>Chrome</li>
      <li>NextCloud</li>
      <li>Pusher</li>
    </ul>
  </Layout>
);
