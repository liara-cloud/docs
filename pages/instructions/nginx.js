import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Nginx - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nginx" />
      <div className="page-title">
        <h1>استقرار Nginx</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <Notice variant="info">
      در حال حاضر برای استقرار وب‌سرور Nginx در لیارا می‌توانید طبق دستورالعمل
      زیر عمل کرده و درصورت نیاز به پشتیبانی می‌توانید از طریق{" "}
      <a href="https://console.liara.ir/tickets" target="_blank">
        تیکت
      </a>{" "}
      با ما در ارتباط باشید.
    </Notice>

    <p>
      Nginx یک HTTP server و reverse proxy متن باز و بسیار قدرتمند است که شما
      می‌توانید از آن به‌منظور کنترل و مدیریت ترافیک ورودی برنامه‌هایتان استفاده
      کنید.
    </p>

    <p>
      حال برای راه‌اندازی Nginx در{" "}
      <Link href="/app-deploy/docker/getting-started">برنامه‌های Docker</Link>{" "}
      لیارا کافیست یک پروژه‌ی جدید در مسیر دلخواه خود ایجاد کرده و دو فایل با
      نام‌های
      <span className="code">Dockerfile</span> و{" "}
      <span className="code">nginx.conf</span> را با محتوای مربوطه در این پروژه
      قرار دهید.
    </p>

    <ul>
      <li>
        <span className="code">Dockerfile</span>:
      </li>
    </ul>

    <Highlight className="dockerfile">{`FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf`}</Highlight>

    <ul>
      <li>
        <span className="code">nginx.conf</span>:
      </li>
    </ul>

    <Highlight className="nginx">{`user  nginx;
worker_processes  auto;

pid        /tmp/nginx.pid;

events {
  worker_connections  1024;
}

http {
  client_body_temp_path /tmp/client_temp;
  proxy_temp_path       /tmp/proxy_temp_path;
  fastcgi_temp_path     /tmp/fastcgi_temp;
  uwsgi_temp_path       /tmp/uwsgi_temp;
  scgi_temp_path        /tmp/scgi_temp;

  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;

  log_format  main  '$request_method $status $http_x_forwarded_for "$request_uri" "$http_referer" "$http_user_agent"';

  server_tokens     off;
  sendfile        on;
  keepalive_timeout  65;
  gzip  on;
  access_log /dev/stdout;
  error_log stderr;

  server {
    resolver 127.0.0.11 ipv6=off valid=5s;
    listen 80;
    location / {
	proxy_set_header Host            $host;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	set $backend "http://app-name:port";
	proxy_pass $backend;
    }
  }
}`}</Highlight>

    <Notice variant="warning">
      توجه داشته باشید که به‌منظور هدایت ترافیک باید شناسه و پورت برنامه‌ی مقصد
      خود را با مقادیر <span className="code">app-name</span> و{" "}
      <span className="code">port</span> در فایل{" "}
      <span className="code">nginx.conf</span> جایگزین کنید.
    </Notice>
    <p>
      درنهایت با اجرای دستور{" "}
      <span className="code">liara deploy --platform=docker --port=80</span> در
      مسیر اصلی پروژه، Nginx بر روی برنامه‌ی Docker تهیه شده مستقر خواهد شد.
    </p>
    <h3>توضیحات و نکات تکمیلی</h3>
    <h4>تنظیم مسیر tmp به‌عنوان مقصدی برای ذخیره‌ی فایل‌های موقتی</h4>
    <p>
      با مشاهده‌ی فایل <span className="code">nginx.conf</span> متوجه خواهید که
      در موارد مختلف از مسیر tmp به‌عنوان مقصدی برای ذخیره‌ی فایل‌های موقتی
      استفاده شده است و توجه داشته باشید که حتما پیکربندی زیر را لحاظ کنید تا با
      خطای <span className="code">Read-only file system</span> مواجه نشوید.
    </p>

    <Notice variant="info">
      با وجود Read-Only بودن فایل‌سیستم برنامه‌های لیارا، دایرکتوری{" "}
      <span className="code">/tmp</span> از این قاعده مستثنی است و شما می‌توانید
      از این دایرکتوری که در همه پلن‌های ارائه شده، فضایی برابر ۱۰۰ مگابایت
      دارد، برای ذخیره لاگ‌ها، فایل‌ها آپلودی موقتی و غیره استفاده کنید.{" "}
      <Link href="/app-deploy/docker/disks#increase-tmp-size">
        توضیحات بیشتر
      </Link>
    </Notice>

    <Highlight className="nginx">
      {`client_body_temp_path /tmp/client_temp;
proxy_temp_path       /tmp/proxy_temp_path;
fastcgi_temp_path     /tmp/fastcgi_temp;
uwsgi_temp_path       /tmp/uwsgi_temp;
scgi_temp_path        /tmp/scgi_temp;`}
    </Highlight>

    <h4>تنظیم resolver</h4>
    <p>
      با توجه به احتمال تغییر IP برنامک‌ها در لیارا، تنظیم resolver در فایل{" "}
      <span className="code">nginx.conf</span> این امکان را به‌وجود می‌آورد تا
      هر بار IP جدید برنامه دریافت شده و مشکلی در هدایت ترافیک به‌وجود نیاید.
      <Highlight className="nginx">
        {`server {
  resolver 127.0.0.11 ipv6=off valid=5s;
  listen 80;
  location / {
  ...
  set $backend "http://app-name:port";
  proxy_pass $backend;
  }
}`}
      </Highlight>
    </p>
  </Layout>
);
