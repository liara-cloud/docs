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
    <p align="justify">
      در صفحه‌ی ساخت برنامه، بخشی با نام <b>برنامه‌های آماده</b> وجود دارد که
      شما می‌توانید برنامه‌های کاربردی خاصی را به سادگی و فقط با یک کلیک ایجاد
      کنید. برای مثال شما می‌توانید با یک کلیک سرویس pocketbase را راه‌اندازی
      کنید و از آن استفاده کنید.
    </p>

    <h3>برنامه‌های آماده‌ای که ارائه می‌کنیم</h3>
    <p>
      برای مطالعه‌ی راهنمای نصب هر برنامه آماده، صفحه‌ی مربوط به آن را دنبال
      کنید.
    </p>

    <div className="platforms">
      <Link href="/one-click-apps/others">
        <PlatformIcon platform="ghost" />
        <span>Ghost</span>
      </Link>
      <Link href="/one-click-apps/prestashop">
        <PlatformIcon platform="prestashop" />
        <span>Prestashop</span>
      </Link>
      <Link href="/one-click-apps/soketi/install">
        <PlatformIcon platform="soketi" />
        <span>Soketi</span>
      </Link>
      <Link href="/one-click-apps/metabase">
        <PlatformIcon platform="metabase" />
        <span>Metabase</span>
      </Link>
      <Link href="/one-click-apps/grafana">
        <PlatformIcon platform="grafana" />
        <span>Grafana</span>
      </Link>
      <Link href="/one-click-apps/kibana">
        <PlatformIcon platform="kibana" />
        <span>Kibana</span>
      </Link>
      <Link href="/one-click-apps/mattermost">
        <PlatformIcon platform="mattermost" />
        <span>Mattermost</span>
      </Link>
      <Link href="/one-click-apps/rocketchat">
        <PlatformIcon platform="rocketchat" />
        <span>Rocket.Chat</span>
      </Link>
      <Link href="/one-click-apps/gitea">
        <PlatformIcon platform="gitea" />
        <span>Gitea</span>
      </Link>
      <Link href="/one-click-apps/nextcloud">
        <PlatformIcon platform="nextcloud" />
        <span>NextCloud</span>
      </Link>
      <Link href="/one-click-apps/imgproxy">
        <PlatformIcon platform="imgproxy" />
        <span>Imgproxy</span>
      </Link>
      <Link href="/one-click-apps/headless-chrome/install">
        <PlatformIcon platform="chrome" />
        <span>Chrome</span>
      </Link>
      <Link href="/one-click-apps/parse">
        <PlatformIcon platform="parseserver" />
        <span>Parse</span>
      </Link>
      <Link href="/one-click-apps/vscode">
        <PlatformIcon platform="vscode" />
        <span>Code</span>
      </Link>
      <Link href="/one-click-apps/odoo">
        <PlatformIcon platform="odoo" />
        <span>Odoo</span>
      </Link>
      <Link href="/one-click-apps/ghost">
        <PlatformIcon platform="ghost" />
        <span>Ghost</span>
      </Link>
      <Link href="/one-click-apps/n8n">
        <PlatformIcon platform="n8n" />
        <span>n8n</span>
      </Link>
      <Link href="/one-click-apps/pocketbase">
        <PlatformIcon platform="pocketbase" />
        <span>PocketBase</span>
      </Link>
      <Link href="/one-click-apps/uptime-kuma">
        <PlatformIcon platform="uptimekuma" />
        <span>UptimeKuma</span>
      </Link>
      <Link href="/one-click-apps/ackee">
        <PlatformIcon platform="ackee" />
        <span>Ackee</span>
      </Link>
      <Link href="/one-click-apps/appsmith">
        <PlatformIcon platform="appsmith" />
        <span>Appsmith</span>
      </Link>
      <Link href="/one-click-apps/varnish">
        <PlatformIcon platform="varnish" />
        <span>VarnishCache</span>
      </Link>
      <Link href="/one-click-apps/rabbitmq">
        <PlatformIcon platform="rabbitmq" />
        <span>RabbitMQ</span>
      </Link>
      <Link href="/one-click-apps/apacheanswer">
        <PlatformIcon platform="apacheanswer" />
        <span>ApacheAnswer</span>
      </Link>
      <Link href="/one-click-apps/nocodb">
        <PlatformIcon platform="nocodb" />
        <span>NOCODB</span>
      </Link>
      <Link href="/one-click-apps/chroma">
        <PlatformIcon platform="chroma" />
        <span>Chroma</span>
      </Link>
    </div>
  </Layout>
);
