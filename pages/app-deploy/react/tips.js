import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های React - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="react" />
      <div className="page-title">
        <h1>برنامه‌های ReactJS</h1>
        <span className="page-description">(ReactJS Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#nginx-conf">تنظیمات Nginx</a>
      </li>
      <li>
        <a href="#http-security-headers">تنظیم هدرهای امنیتی HTTP</a>
      </li>
      <li>
        <a href="#enable-gzip-and-browser-caching">
          فعال‌سازی gzip و Browser Caching
        </a>
      </li>
      <li>
        <a href="#mirror">غیرفعال کردن Mirror</a>
      </li>
    </ul>

    <h3 id="nginx-conf">تنظیمات Nginx</h3>
    <p>
      در برنامه‌های React لیارا از وب‌سرور Nginx استفاده می‌شود و پیکربندی
      پیش‌فرض این وب‌سرور به‌شکل زیر است:
    </p>
    <Highlight className="nginx">
      {`location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}

location ~ /\.well-known {
  allow all;
}`}
    </Highlight>

    <p>
      حال شما می‌توانید یک فایل با نام{" "}
      <span className="code">liara_nginx.conf</span>
      در مسیر اصلی پروژه‌ی خود ایجاد کرده و پیکربندی وب‌سرور Nginx را متناسب با
      نیاز خود تغییر دهید:
    </p>

    <Highlight className="nginx">
      {`location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}

location ~ /\.well-known {
  allow all;
}

location /api {
  # ...
}

location /images {
  # ...
}`}
    </Highlight>

    <h3 id="http-security-headers">تنظیم هدرهای امنیتی HTTP</h3>
    <p>
      برای جلوگیری از حملاتی مانند Clickjacking، XSS، SSL Striping می‌توانید
      هدرهای امنیتی را مانند مثال زیر در{" "}
      <Link href="#nginx-conf">تنظیمات Nginx</Link> برنامه‌ی خود تنظیم کرده و
      نحوه‌ی برقراری ارتباط با سایت را برای مرورگرها تعیین کنید:
    </p>

    <Highlight className="nginx">
      {`add_header X-Frame-Options DENY always;
add_header X-Content-Type-Options: nosniff;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";

location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}

location ~ /\.well-known {
  allow all;
}`}
    </Highlight>

    <Notice variant="warning">
      توجه داشته باشید که قبل از فعال‌سازی HSTS با تنظیم هدر{" "}
      <span className="code">Strict-Transport-Security</span> باید SSL را فعال
      کرده باشید. <Link href="/domains/ssl">تهیه‌ی SSL رایگان</Link>
    </Notice>

    <h3 id="enable-gzip-and-browser-caching">
      فعال‌سازی gzip و Browser Caching
    </h3>
    <p>
      برای کاهش اندازه‌ی صفحات وب، فعال‌سازی فشرده‌ساز gzip و همین‌طور Browser
      Caching بسیار توصیه می‌شود. برای این‌کار، کافیست که فایلی به‌نام
      <span className="code">liara_nginx.conf</span>
      در ریشه‌ی برنامه‌ی‌تان، در کنار <span className="code">package.json</span>
      ، بسازید و بعد دستور
      <span className="code">liara deploy</span>
      را وارد کنید.
    </p>
    <Highlight className="nginx">
      {`gzip             on;
gzip_disable     "msie6";
gzip_vary        on;
gzip_proxied     any;
gzip_comp_level  6;
gzip_types       text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}

location ~ /\.well-known {
  allow all;
}

# cache.appcache, your document html and data
location ~* \.(?:manifest|appcache|html?|xml|json)$ {
  expires -1;
}

# Media: images, icons, video, audio, HTC
location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
  expires 1M;
  access_log off;
  add_header Cache-Control "public";
}

# CSS, Javascript and Fonts
location ~* \.(?:css|js|otf|ttf|eot|woff|woff2)$ {
  expires 1y;
  access_log off;
  add_header Cache-Control "public";
}`}
    </Highlight>

    <h3 id="mirror">غیرفعال کردن Mirror</h3>
    <p>
      Mirror اختصاصی لیارا به‌منظور دانلود سریع‌تر پکیج‌ها در پلتفرم React
      به‌صورت پیش‌فرض فعال است اما شما می‌توانید با قرار دادن قطعه‌کد زیر در
      فایل <Link href="/app-deploy/react/liarajson">liara.json</Link>، این
      قابلیت را غیر فعال کنید:
    </p>
    <Highlight className="json">
      {`{
  "react": {
    "mirror": false
  }
}`}
    </Highlight>
  </Layout>
);
