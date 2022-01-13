import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات برنامه‌های آماده - سرویس ابری لیارا</title>
    </Head>

    <h1>برنامه‌های آماده</h1>
    <span className="page-description">(One-Click Apps)</span>

    <h1>درباره برنامه‌های آماده</h1>
    <p>
      در صفحه‌ی ساخت برنامه، بخشی با نام <b>برنامه‌های آماده</b> وجود دارد که
      شما می‌توانید برنامه‌های کاربردی خاصی را به سادگی و فقط با یک کلیک ایجاد
      کنید. برای مثال شما می‌توانید با یک کلیک WordPress را نصب و اجرا کنید.
      دیتابیس به صورت خودکار برای شما ایجاد و WordPress به آن متصل می‌شود.
    </p>

    <h3>برنامه‌های آماده‌ای که ارائه می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای نصب هر برنامه آماده، صفحه‌ی مربوط به آن را دنبال
      کنید.
    </p>

    <div className="platforms">
      <Link href="/one-click-apps/wordpress/install">
        <a>
          <img src="/static/platformicons/wordpress.svg" alt="wordpress" />
          <span>WordPress</span>
        </a>
      </Link>
      <Link href="/one-click-apps/pusher/install">
        <a>
          <img src="/static/platformicons/pusher.svg" alt="pusher" />
          <span>Pusher</span>
        </a>
      </Link>
      <Link href="/one-click-apps/others">
        <a>
          <img src="/static/platformicons/ghost.svg" alt="ghost" />
          <span>Ghost</span>
        </a>
      </Link>
      <Link href="/one-click-apps/rocketchat">
        <a>
          <img src="/static/platformicons/rocketchat.svg" alt="rocketchat" />
          <span>Rocket.Chat</span>
        </a>
      </Link>
      <Link href="/one-click-apps/gitea">
        <a>
          <img src="/static/platformicons/gitea.svg" alt="gitea" />
          <span>Gitea</span>
        </a>
      </Link>
      <Link href="/one-click-apps/metabase">
        <a>
          <img src="/static/platformicons/metabase.svg" alt="metabase" />
          <span>Metabase</span>
        </a>
      </Link>
      <Link href="/one-click-apps/headless-chrome/install">
        <a>
          <img src="/static/platformicons/chrome.svg" alt="Chrome" />
          <span>Chrome</span>
        </a>
      </Link>
      <Link href="/one-click-apps/nextcloud">
        <a>
          <img src="/static/platformicons/nextcloud.svg" alt="nextcloud" />
          <span>NextCloud</span>
        </a>
      </Link>
    </div>
  </Layout>
);
