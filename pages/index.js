import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import Layout from "../components/Layout";
import { ThemeContext } from "../components/root/theme.context";
import PlatformIcon from "../components/PlatformIcon";

const DATA_SECTIONS = {
  PAAS: [
    { platform: "react", href: "/" },
    { platform: "vue", href: "/" },
    { platform: "php", href: "/" },
    { platform: "flask", href: "/" },
    { platform: "netcore", href: "/" },
    { platform: "angularjs", href: "/" },
    { platform: "nodejs", href: "/" },
    { platform: "laravel", href: "/" },
    { platform: "python", href: "/" },
    { platform: "next", href: "/" },
    { platform: "nuxt", href: "/" },
    { platform: "go", href: "/" },
    { platform: "docker", href: "/" },
  ],
  DBAAS: [
    { platform: "mariadb", href: "/" },
    { platform: "postgres", href: "/" },
    { platform: "mysql", href: "/" },
    { platform: "mongodb", href: "/" },
    { platform: "mssql", href: "/" },
    { platform: "redis", href: "/" },
    { platform: "arangodb", href: "/" },
    { platform: "rabbitmq", href: "/" },
  ],
  ONE_CLICK_APP: [
    { platform: "ghost", href: "/" },
    { platform: "prestashop", href: "/" },
    { platform: "soketi", href: "/" },
    { platform: "grafana", href: "/" },
    { platform: "kibana", href: "/" },
    { platform: "mattermost", href: "/" },
    { platform: "rocketchat", href: "/" },
    { platform: "gitea", href: "/" },
    { platform: "nextcloud", href: "/" },
    { platform: "imgproxy", href: "/" },
    { platform: "chrome", href: "/" },
    { platform: "vscode", href: "/" },
    { platform: "odoo", href: "/" },
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

      <h3 style={{ fontSize: 24 }}>معرفی لیارا</h3>
      <p style={{ fontSize: 18 }}>
        لیارا بستری را فراهم می‌کند تا شما بدون نیاز به پیکربندی و تنظیمات، با
        نهایت سرعت، آسودگی و راحتی، برنامه‌ی خود را روی سرور اجرا کنید.
      </p>

      <h3 style={{ fontSize: 24 }}> محصولاتی که ارائه می‌کنیم</h3>

      <div className="products-container">
        <div className="product-item-container">
          <div className="product-item-container_head">
            <div>
              <h1>پلتفرم (PaaS)</h1>
              <p>
                لیارا کارهای سخت و پیچیده را انجام می‌دهد، شما فقط کافیست روی
                توسعه‌ی برنامه‌های‌تان متمرکز باشید. تفاوتی نمی‌کند از چه زبان
                برنامه‌نویسی و یا فریم‌ورکی استفاده می‌کنید، می‌توانید تنها با
                چند کلیک، پروژه‌های خود را روی سرورهای ابری اجرا کنید و یا اگر
                Dockerfile خودتان را دارید
              </p>
            </div>
            <img src="/static/paas.svg" />
          </div>
          <div className="product-item-container_body">
            {DATA_SECTIONS.PAAS.map(item => (
              <Link href={item.href}>
                <a>
                  <PlatformIcon platform={item.platform} />
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="product-item-container">
          <div className="product-item-container_head">
            <div>
              <h1> دیتابیس (DBaaS)</h1>
              <p>
                لیارا کارهای سخت و پیچیده را انجام می‌دهد، شما فقط کافیست روی
                توسعه‌ی برنامه‌های‌تان متمرکز باشید. تفاوتی نمی‌کند از چه زبان
                برنامه‌نویسی و یا فریم‌ورکی استفاده می‌کنید، می‌توانید تنها با
                چند کلیک، پروژه‌های خود را روی سرورهای ابری اجرا کنید و یا اگر
                Dockerfile خودتان را دارید
              </p>
            </div>
            <img
              src="/static/dbaas.svg"
              style={{ marginLeft: 10, padding: 10 }}
            />
          </div>
          <div className="product-item-container_body">
            {DATA_SECTIONS.DBAAS.map(item => (
              <Link href={item.href}>
                <a>
                  <PlatformIcon platform={item.platform} />
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="product-item-container">
          <div className="product-item-container_head">
            <div>
              <h1> سامانه مدیریت دامنه (DNS)</h1>
              <p>
                لیارا کارهای سخت و پیچیده را انجام می‌دهد، شما فقط کافیست روی
                توسعه‌ی برنامه‌های‌تان متمرکز باشید. تفاوتی نمی‌کند از چه زبان
                برنامه‌نویسی و یا فریم‌ورکی استفاده می‌کنید، می‌توانید تنها با
                چند کلیک، پروژه‌های خود را روی سرورهای ابری اجرا کنید و یا اگر
                Dockerfile خودتان را دارید
              </p>
            </div>
            <img
              src="/static/dns.svg"
              style={{ marginLeft: 10, padding: 10 }}
            />
          </div>
        </div>
        <div className="product-item-container">
          <div className="product-item-container_head">
            <div>
              <h1> ذخیره‌سازی ابری (Object Storage)</h1>
              <p>
                لیارا کارهای سخت و پیچیده را انجام می‌دهد، شما فقط کافیست روی
                توسعه‌ی برنامه‌های‌تان متمرکز باشید. تفاوتی نمی‌کند از چه زبان
                برنامه‌نویسی و یا فریم‌ورکی استفاده می‌کنید، می‌توانید تنها با
                چند کلیک، پروژه‌های خود را روی سرورهای ابری اجرا کنید و یا اگر
                Dockerfile خودتان را دارید
              </p>
            </div>
            <img
              src="/static/storage.svg"
              style={{ marginLeft: 10, padding: 10 }}
            />
          </div>
        </div>
        <div className="product-item-container">
          <div className="product-item-container_head">
            <div>
              <h1> ایمیل (Email)</h1>
              <p>
                لیارا کارهای سخت و پیچیده را انجام می‌دهد، شما فقط کافیست روی
                توسعه‌ی برنامه‌های‌تان متمرکز باشید. تفاوتی نمی‌کند از چه زبان
                برنامه‌نویسی و یا فریم‌ورکی استفاده می‌کنید، می‌توانید تنها با
                چند کلیک، پروژه‌های خود را روی سرورهای ابری اجرا کنید و یا اگر
                Dockerfile خودتان را دارید
              </p>
            </div>
            <img
              src="/static/email.svg"
              style={{ marginLeft: 10, padding: "0 10px", paddingRight: 20 }}
            />
          </div>
        </div>
        <div className="product-item-container">
          <div className="product-item-container_head">
            <div>
              <h1>
                {" "}
                برنامه‌های آماده
                <span dir="ltr">(1-Click App)</span>
              </h1>
              <p>
                لیارا کارهای سخت و پیچیده را انجام می‌دهد، شما فقط کافیست روی
                توسعه‌ی برنامه‌های‌تان متمرکز باشید. تفاوتی نمی‌کند از چه زبان
                برنامه‌نویسی و یا فریم‌ورکی استفاده می‌کنید، می‌توانید تنها با
                چند کلیک، پروژه‌های خود را روی سرورهای ابری اجرا کنید و یا اگر
                Dockerfile خودتان را دارید
              </p>
            </div>
          </div>
          <div className="product-item-container_body">
            {DATA_SECTIONS.ONE_CLICK_APP.map(item => (
              <Link href={item.href}>
                <a>
                  <PlatformIcon platform={item.platform} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
