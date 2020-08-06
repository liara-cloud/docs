import Head from "next/head";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>مستندات برنامه‌های آماده - سرویس ابری لیارا</title>
    </Head>

    <h1>برنامه‌های آماده</h1>
    <span className="page-description">(One-Click Apps)</span>

    <h1>درباره برنامه‌های آماده</h1>
    <p>
      در بخش <b>برنامه‌های آماده</b> شما می‌توانید به سادگی و راحتی برنامه‌های
      کاربردی خاصی را فقط با یک کلیک ایجاد کنید. برای مثال شما می‌توانید با یک
      کلیک WordPress را نصب و اجرا کنید. دیتابیس به صورت خودکار برای شما ایجاد و
      WordPress به آن متصل می‌شود.
    </p>
    <p>در حال حاضر این برنامه‌ها در این بخش وجود دارد:</p>
    <ul dir="ltr">
      <li>Gitea</li>
      <li>Ghost</li>
      <li>File Run</li>
      <li>Adminer</li>
      <li>WordPress</li>
      <li>RocketChat</li>
      <li>Mattermost</li>
      <li>Code Server</li>
      <li>adminMongo</li>
      <li>phpMyAdmin</li>
    </ul>
  </Layout>
);
