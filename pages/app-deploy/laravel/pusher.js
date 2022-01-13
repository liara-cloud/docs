import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا - مستندات اتصال به Pusher در برنامه‌های Laravel
      </title>
    </Head>
    <div className="page-head">
      <ProjectIcon platform="laravel" />
      <div className="page-title">
        <h1>برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>

    <h3>اتصال به Pusher</h3>

    <p>
      <a href="https://docs.soketi.app/" target="_blank" rel="noopener">
        Soketi
      </a>{" "}
      یک جایگزین رایگان و متن‌باز برای سرویس Pusher است که کاملا با پروتکل{" "}
      <a
        href="https://pusher.com/docs/channels/library_auth_reference/pusher-websockets-protocol/#version-7-2017-11"
        target="_blank"
      >
        Pusher v7
      </a>{" "}
      سازگار شده و به شما در توسعه‌ی برنامه‌های Real-time کمک می‌کند. این سرویس،
      بدون نیاز به این‌که تغییری در کدهای‌تان اعمال کنید، به‌عنوان جایگزین پکیج
      Laravel Websockets هم عمل می‌کند.
    </p>

    <h3>نحوه‌ی راه‌اندازی و استفاده</h3>
    <ol>
      <li>
        در ابتدا طبق{" "}
        <Link href="/one-click-apps/pusher/install">
          مستندات راه‌اندازی Pusher
        </Link>{" "}
        عمل کرده و پیکربندی‌های امنیتی مورد نیاز را انجام دهید.
      </li>
      <li>
        در قدم بعد، طبق مستندات{" "}
        <Link href="/one-click-apps/pusher/laravel">
          اتصال به Pusher در برنامه‌های Laravel
        </Link>
        ، برنامه‌ی Laravel خود را به این سرویس متصل کنید.
      </li>
    </ol>
    <Link href="/app-deploy/laravel/tips">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
