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
      href: "https://docs.liara.ir/app-deploy/react/getting-started",
    },
    {
      platform: "vue",
      title: "Vue",
      href: "https://docs.liara.ir/app-deploy/vue/getting-started",
    },
    {
      platform: "php",
      title: "PHP",
      href: "https://docs.liara.ir/app-deploy/php/getting-started",
    },
    {
      platform: "flask",
      title: "Flask",
      href: "https://docs.liara.ir/app-deploy/flask/getting-started",
    },
    {
      platform: "netcore",
      title: "Dotnet",
      href: "https://docs.liara.ir/app-deploy/netcore/getting-started",
    },
    {
      platform: "angularjs",
      title: "Angular",
      href: "https://docs.liara.ir/app-deploy/angular/getting-started",
    },
    {
      platform: "nodejs",
      title: "Node",
      href: "https://docs.liara.ir/app-deploy/nodejs/getting-started",
    },
    {
      platform: "HTML5",
      title: "Static",
      href: "https://docs.liara.ir/app-deploy/static/getting-started",
    },
    {
      platform: "laravel",
      title: "Laravel",
      href: "https://docs.liara.ir/app-deploy/laravel/getting-started",
    },
    {
      platform: "python",
      title: "Python",
      href: "https://docs.liara.ir/instructions/python",
    },
    {
      platform: "next",
      title: "Next",
      href: "https://docs.liara.ir/app-deploy/nextjs/getting-started",
    },
    {
      platform: "nuxt",
      title: "Nuxt",
      href: "https://docs.liara.ir/instructions/nuxtjs",
    },
    {
      platform: "go",
      title: "Go",
      href: "https://docs.liara.ir/instructions/golang",
    },
    {
      platform: "docker",
      title: "Docker",
      href: "https://docs.liara.ir/app-deploy/docker/getting-started",
    },
  ],
  DBAAS: [
    {
      platform: "mariadb",
      title: "MariaDB",
      href: "https://docs.liara.ir/databases/mariadb/install",
    },
    {
      platform: "postgres",
      title: "Postgres",
      href: "https://docs.liara.ir/databases/postgresql/install",
    },
    {
      platform: "mysql",
      title: "MySQL",
      href: "https://docs.liara.ir/databases/mysql/install",
    },
    {
      platform: "mongodb",
      title: "MongoDB",
      href: "https://docs.liara.ir/databases/mongodb/install",
    },
    {
      platform: "mssql",
      title: "MSSQL",
      href: "https://docs.liara.ir/databases/sqlserver/install",
    },
    {
      platform: "redis",
      title: "Redis",
      href: "https://docs.liara.ir/databases/redis/install",
    },
    {
      platform: "elastic",
      title: "Elastic",
      href: "https://docs.liara.ir/databases/elasticsearch/install",
    },
    {
      platform: "rabbitmq",
      title: "RabbitMQ",
      href: "https://docs.liara.ir/instructions/rabbitmq",
    },
  ],
  ONE_CLICK_APP: [
    {
      platform: "ghost",
      title: "Ghost",
      href: "https://docs.liara.ir/one-click-apps/others",
    },
    {
      platform: "prestashop",
      title: "Presta",
      href: "https://docs.liara.ir/one-click-apps/prestashop",
    },
    {
      platform: "soketi",
      title: "Soketi",
      href: "https://docs.liara.ir/one-click-apps/soketi/install",
    },
    {
      platform: "grafana",
      title: "Grafana",
      href: "https://docs.liara.ir/one-click-apps/grafana",
    },
    {
      platform: "kibana",
      title: "Kibana",
      href: "https://docs.liara.ir/one-click-apps/kibana",
    },
    {
      platform: "mattermost",
      title: "Mattermost",
      href: "https://docs.liara.ir/one-click-apps/metabase",
    },
    {
      platform: "rocketchat",
      title: "Rocket.Chat",
      href: "https://docs.liara.ir/one-click-apps/rocketchat",
    },
    {
      platform: "metabase",
      title: "Metabase",
      href: "https://docs.liara.ir/one-click-apps/metabase",
    },
    {
      platform: "gitea",
      title: "Gitea",
      href: "https://docs.liara.ir/one-click-apps/gitea",
    },
    {
      platform: "nextcloud",
      title: "Next Cloud",
      href: "https://docs.liara.ir/one-click-apps/nextcloud",
    },
    {
      platform: "imgproxy",
      title: "ImgProxy",
      href: "https://docs.liara.ir/one-click-apps/imgproxy",
    },
    {
      platform: "chrome",
      title: "Chrome",
      href: "https://docs.liara.ir/one-click-apps/headless-chrome/install",
    },
    {
      platform: "vscode",
      title: "Code",
      href: "https://docs.liara.ir/one-click-apps/vscode",
    },
    {
      platform: "odoo",
      title: "Odoo",
      href: "https://docs.liara.ir/one-click-apps/odoo",
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
            {DATA_SECTIONS.PAAS.map(item => (
              <Link href={item.href}>
                <a>
                  <PlatformIcon platform={item.platform} />
                  <p>{item.title}</p>
                </a>
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
            {DATA_SECTIONS.DBAAS.map(item => (
              <Link href={item.href}>
                <a>
                  <PlatformIcon platform={item.platform} />
                  <p>{item.title}</p>
                </a>
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
            {DATA_SECTIONS.ONE_CLICK_APP.map(item => (
              <Link href={item.href}>
                <a>
                  <PlatformIcon platform={item.platform} />
                  <p>{item.title}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="min-products-container">
          <Link href="/dns/add-zone">
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
          <Link href="/buckets/about">
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
          <Link href="/email/create-mail-server">
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
          <Link href="/wp-plus/install">
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
