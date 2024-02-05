import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import Layout from "../components/Layout";
import { ThemeContext } from "../components/root/theme.context";
import PlatformIcon from "../components/PlatformIcon";

const DATA_SECTIONS = {
  PAAS: [
    {
      platform: "react",
      title: "React",
      href: "/app-deploy/react/getting-started",
    },
    {
      platform: "vue",
      title: "Vue",
      href: "/app-deploy/vue/getting-started",
    },
    {
      platform: "php",
      title: "PHP",
      href: "/app-deploy/php/getting-started",
    },
    {
      platform: "django",
      title: "Django",
      href: "/app-deploy/django/getting-started",
    },
    {
      platform: "flask",
      title: "Flask",
      href: "/app-deploy/flask/getting-started",
    },
    {
      platform: "netcore",
      title: "DotNet",
      href: "/app-deploy/netcore/getting-started",
    },
    {
      platform: "angularjs",
      title: "Angular",
      href: "/app-deploy/angular/getting-started",
    },
    {
      platform: "nodejs",
      title: "Node",
      href: "/app-deploy/nodejs/getting-started",
    },
    {
      platform: "HTML5",
      title: "Static",
      href: "/app-deploy/static/getting-started",
    },
    {
      platform: "laravel",
      title: "Laravel",
      href: "/app-deploy/laravel/getting-started",
    },
    {
      platform: "python",
      title: "Python",
      href: "/instructions/python",
    },
    {
      platform: "next",
      title: "Next",
      href: "/app-deploy/nextjs/getting-started",
    },
    {
      platform: "nuxt",
      title: "Nuxt",
      href: "/instructions/nuxtjs",
    },
    {
      platform: "go",
      title: "Go",
      href: "/app-deploy/golang/getting-started",
    },
    {
      platform: "docker",
      title: "Docker",
      href: "/app-deploy/docker/getting-started",
    },
  ],
  DBAAS: [
    {
      platform: "mariadb",
      title: "MariaDB",
      href: "/databases/mariadb/install",
    },
    {
      platform: "postgres",
      title: "Postgres",
      href: "/databases/postgresql/install",
    },
    {
      platform: "mysql",
      title: "MySQL",
      href: "/databases/mysql/install",
    },
    {
      platform: "mongodb",
      title: "MongoDB",
      href: "/databases/mongodb/install",
    },
    {
      platform: "mssql",
      title: "MSSQL",
      href: "/databases/sqlserver/install",
    },
    {
      platform: "redis",
      title: "Redis",
      href: "/databases/redis/install",
    },
    {
      platform: "elastic",
      title: "Elastic",
      href: "/databases/elasticsearch/install",
    },
  ],
  ONE_CLICK_APP: [
    {
      platform: "prestashop",
      title: "Presta",
      href: "/one-click-apps/prestashop",
    },
    {
      platform: "soketi",
      title: "Soketi",
      href: "/one-click-apps/soketi/install",
    },
    {
      platform: "grafana",
      title: "Grafana",
      href: "/one-click-apps/grafana",
    },
    {
      platform: "kibana",
      title: "Kibana",
      href: "/one-click-apps/kibana",
    },
    {
      platform: "mattermost",
      title: "Mattermost",
      href: "/one-click-apps/mattermost",
    },
    {
      platform: "rocketchat",
      title: "Rocket.Chat",
      href: "/one-click-apps/rocketchat",
    },
    {
      platform: "metabase",
      title: "Metabase",
      href: "/one-click-apps/metabase",
    },
    {
      platform: "gitea",
      title: "Gitea",
      href: "/one-click-apps/gitea",
    },
    {
      platform: "nextcloud",
      title: "Next Cloud",
      href: "/one-click-apps/nextcloud",
    },
    {
      platform: "imgproxy",
      title: "ImgProxy",
      href: "/one-click-apps/imgproxy",
    },
    {
      platform: "chrome",
      title: "Chrome",
      href: "/one-click-apps/headless-chrome/install",
    },
    {
      platform: "vscode",
      title: "Code",
      href: "/one-click-apps/vscode",
    },
    {
      platform: "odoo",
      title: "Odoo",
      href: "/one-click-apps/odoo",
    },
    {
      platform: "ghost",
      title: "Ghost",
      href: "/one-click-apps/ghost",
    },
    {
      platform: "n8n",
      title: "n8n",
      href: "/one-click-apps/n8n",
    },
    {
      platform: "pocketbase",
      title: "PocketBase",
      href: "/one-click-apps/pocketbase",
    },
    {
      platform: "matomo",
      title: "Matomo",
      href: "/one-click-apps/matomo",
    },
    {
      platform: "unleash",
      title: "Unleash",
      href: "/one-click-apps/unleash",
    },
    {
      platform: "uptimekuma",
      title: "Uptime Kuma",
      href: "/one-click-apps/uptime-kuma",
    },
    {
      platform: "ackee",
      title: "Ackee",
      href: "/one-click-apps/ackee",
    },
    {
      platform: "appsmith",
      title: "Appsmith",
      href: "/one-click-apps/appsmith",
    },
    {
      platform: "varnish",
      title: "Varnish",
      href: "/one-click-apps/varnish",
    },
    {
      platform: "rabbitmq",
      title: "RabbitMQ",
      href: "/one-click-apps/rabbitmq",
    },
    {
      platform: "apacheanswer",
      title: "ApacheAnswer",
      href: "/one-click-apps/apacheanswer",
    },
    {
      platform: "nocodb",
      title: "NOCODB",
      href: "/one-click-apps/nocodb",
    },
  ],
};

const Index = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout>
      <Head>
        <title>مستندات - لیارا</title>
      </Head>

      {/* <Seo
      title="مستندات"
      desc="لیارا بستری را فراهم می‌کند تا شما بدون نیاز به پیکربندی و
      تنظیمات، با نهایت سرعت، آسودگی و راحتی، برنامه‌ی خود را روی سرور اجرا
      کنید."
      keyWords="لیارا,مستندات لیارا,لیارا
    /> */}

      <h1 style={{ fontSize: 28 }}>صفحه‌ی اصلی مستندات</h1>

      <div className="products-container">
        <div className="product-item-container">
          <div className="product-item-container_content">
            <div
              style={{ display: "flex", alignItems: "center", marginRight: 12 }}
            >
              <h2>
                پلتفرم{" "}
                <span dir="ltr" style={{ color: "#aaa", fontSize: 16 }}>
                  (PaaS)
                </span>
              </h2>
            </div>
          </div>
          <div className="product-item-container_body">
            {DATA_SECTIONS.PAAS.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <PlatformIcon platform={item.platform} />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="product-item-container">
          <div className="product-item-container_content">
            <div
              style={{ display: "flex", alignItems: "center", marginRight: 12 }}
            >
              <h2>
                {" "}
                دیتابیس{" "}
                <span dir="ltr" style={{ color: "#aaa", fontSize: 16 }}>
                  (DBaaS)
                </span>
              </h2>
            </div>
          </div>
          <div className="product-item-container_body">
            {DATA_SECTIONS.DBAAS.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <PlatformIcon platform={item.platform} />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="product-item-container">
          <div className="product-item-container_content">
            <div
              style={{ display: "flex", alignItems: "center", marginRight: 12 }}
            >
              <h2>
                {" "}
                برنامه‌های آماده{" "}
                <span dir="ltr" style={{ color: "#aaa", fontSize: 16 }}>
                  (1-Click App)
                </span>
              </h2>
            </div>
          </div>
          <div className="product-item-container_body">
            {DATA_SECTIONS.ONE_CLICK_APP.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <PlatformIcon
                  style={{ width: "77px", height: "77px" }}
                  platform={item.platform}
                />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="min-products-container">
          <Link href="/dns/add-zone" legacyBehavior>
            <div
              className="product-item-container"
              style={{ cursor: "pointer" }}
            >
              <div className="product-item-container_content">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="/static/dns.svg" style={{ height: 55 }} />
                  <h2 style={{ marginRight: "-10px" }}>
                    {" "}
                    سامانه مدیریت دامنه{" "}
                    <span dir="ltr" style={{ color: "#aaa", fontSize: 16 }}>
                      (DNS)
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/buckets/about" legacyBehavior>
            <div
              className="product-item-container"
              style={{ cursor: "pointer" }}
            >
              <div className="product-item-container_content">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="/static/storage.svg" style={{ height: 55 }} />
                  <h2 style={{ marginRight: "-10px" }}>
                    {" "}
                    ذخیره‌سازی ابری{" "}
                    <span dir="ltr" style={{ color: "#aaa", fontSize: 16 }}>
                      (Object Storage)
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/email/create-mail-server" legacyBehavior>
            <div
              className="product-item-container"
              style={{ cursor: "pointer" }}
            >
              <div className="product-item-container_content">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="/static/email.svg" style={{ height: 55 }} />
                  <h2 style={{ marginRight: "-5px" }}>
                    {" "}
                    ایمیل{" "}
                    <span dir="ltr" style={{ color: "#aaa", fontSize: 16 }}>
                      (Email)
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/wp-plus/install" legacyBehavior>
            <div
              className="product-item-container"
              style={{ cursor: "pointer" }}
            >
              <div className="product-item-container_content">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="/static/wp-plus.svg" style={{ height: 55 }} />
                  <h2 style={{ marginRight: "-5px" }}>
                    وردپرس پلاس{" "}
                    <span dir="ltr" style={{ color: "#aaa", fontSize: 16 }}>
                      (WPPlus)
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
