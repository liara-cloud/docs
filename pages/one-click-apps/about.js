import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات برنامه‌های آماده - لیارا</title>
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
      <Link href="/one-click-apps/others">
        <a>
          <PlatformIcon platform="ghost" />
          <span>Ghost</span>
        </a>
      </Link>
      <Link href="/one-click-apps/prestashop">
        <a>
          <PlatformIcon platform="prestashop" />
          <span>Prestashop</span>
        </a>
      </Link>
      <Link href="/one-click-apps/soketi/install">
        <a>
          <PlatformIcon platform="soketi" />
          <span>Soketi</span>
        </a>
      </Link>
      <Link href="/one-click-apps/metabase">
        <a>
          <PlatformIcon platform="metabase" />
          <span>Metabase</span>
        </a>
      </Link>
      <Link href="/one-click-apps/grafana">
        <a>
          <PlatformIcon platform="grafana" />
          <span>Grafana</span>
        </a>
      </Link>
      <Link href="/one-click-apps/kibana">
        <a>
          <PlatformIcon platform="kibana" />
          <span>Kibana</span>
        </a>
      </Link>
      <Link href="/one-click-apps/mattermost">
        <a>
          <PlatformIcon platform="mattermost" />
          <span>Mattermost</span>
        </a>
      </Link>
      <Link href="/one-click-apps/rocketchat">
        <a>
          <PlatformIcon platform="rocketchat" />
          <span>Rocket.Chat</span>
        </a>
      </Link>
      <Link href="/one-click-apps/gitea">
        <a>
          <PlatformIcon platform="gitea" />
          <span>Gitea</span>
        </a>
      </Link>
      <Link href="/one-click-apps/nextcloud">
        <a>
          <PlatformIcon platform="nextcloud" />
          <span>NextCloud</span>
        </a>
      </Link>
      <Link href="/one-click-apps/imgproxy">
        <a>
          <PlatformIcon platform="imgproxy" />
          <span>Imgproxy</span>
        </a>
      </Link>
      <Link href="/one-click-apps/headless-chrome/install">
        <a>
          <PlatformIcon platform="chrome" />
          <span>Chrome</span>
        </a>
      </Link>
      <Link href="/one-click-apps/parse">
        <a>
          <PlatformIcon platform="parseserver" />
          <span>Parse</span>
        </a>
      </Link>
      <Link href="/one-click-apps/vscode">
        <a>
          <PlatformIcon platform="vscode" />
          <span>Code</span>
        </a>
      </Link>
      <Link href="/one-click-apps/odoo">
        <a>
          <PlatformIcon platform="odoo" />
          <span>Odoo</span>
        </a>
      </Link>
      <Link href="/one-click-apps/ghost">
        <a>
          <PlatformIcon platform="ghost" />
          <span>ghost</span>
        </a>
      </Link>
    </div>
  </Layout>
);
