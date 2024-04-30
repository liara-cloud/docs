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

    <p>
      Nginx یک HTTP server و reverse proxy متن باز و بسیار قدرتمند است که شما
      می‌توانید از آن به‌منظور کنترل و مدیریت ترافیک ورودی برنامه‌هایتان استفاده
      کنید.
    </p>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/docker/reverse-proxy.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <Notice variant="info">
      فایل‌های مورد استفاده در ویدیوی فوق، در{" "}
      <a href="https://github.com/liara-cloud/docker-getting-started/tree/nginx">
        گیت‌هاب لیارا
      </a>{" "}
      قابل دسترسی هستند.
    </Notice>
    <p>
      برای راه‌اندازی Nginx در{" "}
      <Link href="/app-deploy/docker/getting-started">برنامه‌های Docker</Link>{" "}
      لیارا کافیست یک پروژه‌ی جدید در مسیر دلخواه خود ایجاد کرده و دو فایل با
      نام‌های Dockerfile و nginx.conf را با محتوای مربوطه در این پروژه قرار
      دهید.
    </p>
    <p>
      به عنوان مثال، در ادامه قطعه کدهای مربوطه برای اعمال reverse proxy بر روی
      یک برنامه، آمده است:
    </p>

    <p> محتوای Dockerfile:</p>
    <Highlight className="dockerfile">{`FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf`}</Highlight>

    <p>محتوای nginx.conf:</p>
    <Highlight className="nginx">{`user nginx;
worker_processes auto;

pid /tmp/nginx.pid;

events {

	worker_connections 1024;
}

http {

	client_body_temp_path /tmp/client_temp;
	proxy_temp_path /tmp/proxy_temp_path;
	fastcgi_temp_path /tmp/fastcgi_temp;
	uwsgi_temp_path /tmp/uwsgi_temp;
	scgi_temp_path /tmp/scgi_temp;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	log_format main '$request_method $status $http_x_forwarded_for "$request_uri" "$http_referer" "$http_user_agent"';

	server_tokens off;
	sendfile on;
	keepalive_timeout 65;
	gzip on;
	access_log /dev/stdout;
	error_log stderr;

	server {

		resolver 127.0.0.11 ipv6=off valid=5s;
		listen 80;
		location / {

			proxy_set_header Host $host;
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
    <Notice variant="info">
      توجه داشته باشید که هم برنامه داکر شامل Nginx و هم برنامه هدف شما حتماً
      باید درون یک شبکه خصوصی، قرار داشته باشند تا در نهایت بتوانند به یکدیگر،
      متصل شوند.
    </Notice>

    <h3>توضیحات و نکات تکمیلی</h3>
    <h5>تنظیم مسیر tmp به‌عنوان مقصدی برای ذخیره‌ی فایل‌های موقتی</h5>
    <p>
      با مشاهده‌ی فایل <span className="code">nginx.conf</span> متوجه خواهید که
      در موارد مختلف از مسیر tmp به‌عنوان مقصدی برای ذخیره‌ی فایل‌های موقتی
      استفاده شده است. البته شما می‌توانید مسیر دیگری را برای این‌کار انتخاب
      کنید؛ چرا که فایل‌سیستم برنامه‌های داکر در لیارا، به صورت پیش‌فرض،
      writable است، قطعه کد زیر، نمونه‌ای از تنظیم مسیر ذخیره‌سازی، به پوشه tmp
      است:
    </p>

    <Highlight className="nginx">
      {`client_body_temp_path /tmp/client_temp;
proxy_temp_path       /tmp/proxy_temp_path;
fastcgi_temp_path     /tmp/fastcgi_temp;
uwsgi_temp_path       /tmp/uwsgi_temp;
scgi_temp_path        /tmp/scgi_temp;`}
    </Highlight>

    <h5>تنظیم resolver</h5>
    <p>
      با توجه به احتمال تغییر IP برنامه در لیارا (در زیر ساخت قدیمی)، تنظیم
      resolver در فایل <span className="code">nginx.conf</span> این امکان را
      به‌وجود می‌آورد تا هر بار IP جدید برنامه دریافت شده و مشکلی در هدایت
      ترافیک به‌وجود نیاید.
    </p>
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
  </Layout>
);
