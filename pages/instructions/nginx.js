import Layout from '../../components/Layout';
import Notice from '../../components/Notice';
import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';

export default () => (
    <Layout>
        <Head>
            <title>استقرار Nginx - سرویس ابری لیارا</title>
        </Head>

        <h1>استقرار Nginx</h1>
        <p>
            Nginx یک HTTP server و reverse proxy متن باز و بسیار قدرتمند است که
            شما می‌توانید از آن به‌منظور کنترل و مدیریت ترافیک‌های ورودی
            برنامه‌هایتان استفاده کنید.
        </p>

        <p>
            حال برای راه‌اندازی Nginx در{' '}
            <Link href="/app-deploy/docker/getting-started">
                برنامه‌های Docker
            </Link>{' '}
            لیارا کافیست یک پروژه‌ی جدید در مسیر دلخواه خود ایجاد کرده و دو فایل
            با نام‌های
            <span className="code">Dockerfile</span> و{' '}
            <span className="code">nginx.conf</span> را با محتوای مربوطه در این
            پروژه قرار دهید.
        </p>

        <ul>
            <li>
                <span className="code">Dockerfile</span>:
            </li>
        </ul>

        <Highlight>{`FROM nginx:1.20.1-alpine

COPY nginx.conf /etc/nginx/nginx.conf`}</Highlight>

        <ul>
            <li>
                <span className="code">nginx.conf</span>:
            </li>
        </ul>

        <Highlight>{`user  nginx;
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

  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

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
            توجه داشته باشید که به‌منظور هدایت ترافیک باید شناسه و پورت برنامه‌ی
            خود را با مقادیر <span className="code">app-name</span> و{' '}
            <span className="code">port</span> در فایل{' '}
            <span className="code">nginx.conf</span> جایگزین کنید.
        </Notice>
        <p>
            درنهایت با اجرای دستور{' '}
            <span className="code">liara deploy --platform=docker</span> در مسیر
            اصلی پروژه، Nginx بر روی برنامه‌ی Docker تهیه شده مستقر خواهد شد.
        </p>
    </Layout>
);
