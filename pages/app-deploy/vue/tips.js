import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Notice from '../../../components/Notice';
import Layout from '../../../components/Layout';

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های Vue - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/vue.svg"
        alt="vue"
      />
      <div className="page-title">
        <h1>برنامه‌های VueJS</h1>
        <span className="page-description">(VueJS Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <ul className="mt-0">
      <li><a href="#nginx-conf">تنظیمات Nginx</a></li>
      <li><a href="#hsts">فعال‌سازی HSTS</a></li>
      <li><a href="#enable-gzip-and-browser-caching">فعال‌سازی gzip و Browser Caching</a></li>
    </ul>

    <h3 id="nginx-conf">تنظیمات Nginx</h3>
    <p>
      استقرار برنامه‌های VueJS توسط وب‌سرور
      <span className="code">Nginx</span>
      انجام می‌گیرد. در شرایط مختلف، ممکن است که نیاز داشته باشید این وب‌سرور را
      مطابق با نیازهای‌تان تنظیم کنید. برای این کار، کافیست که در ریشه‌ی
      برنامه‌ی‌تان، فایلی با نام
      <span className="code">liara_nginx.conf</span>
      ایجاد کنید. به‌صورت پیش‌فرض، برای برنامه‌های VueJS این فایل به شکل زیر
      تعریف شده‌است:
    </p>
    <pre>
      <code>
        {`location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}`}
      </code>
    </pre>
    <p>که شما می‌توانید آن را به شیوه‌ی خودتان گسترش دهید:</p>
    <pre>
      <code>
        {`location / {
  # ...
}
location /api {
  # ...
}
location /images {
  # ...
}`}
      </code>
    </pre>

    <h3 id="hsts">فعال‌سازی HSTS</h3>
    <p>
      برای فعال‌سازی HSTS و جلوگیری از برخی حملات مرتبط با SSL می‌توانید
      هدر <span className="code">Strict-Transport-Security</span> را
      به‌شکل زیر در فایل <span className="code">liara_nginx.conf</span>
      قرار داده و درنهایت دستور <span className="code">
        liara deploy
      </span>{' '}
      را در مسیر اصلی پروژه اجرا کنید.
    </p>
    <Highlight className="nginx">
      {`location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
  add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
}`}
    </Highlight>
    <Notice variant="warning">
      توجه داشته باشید که قبل از فعال‌سازی HSTS باید SSL را فعال کرده
      باشید. <Link href="/domains/ssl">توضیحات بیشتر</Link>
    </Notice>

    <h3 id="enable-gzip-and-browser-caching">فعال‌سازی gzip و Browser Caching</h3>
    <p>
      برای کاهش اندازه‌ی صفحات وب، فعال‌سازی فشرده‌ساز gzip
      و همین‌طور Browser Caching
      بسیار توصیه می‌شود. برای این‌کار، کافیست که فایلی به‌نام
      <span className="code">liara_nginx.conf</span>
      در ریشه‌ی برنامه‌ی‌تان، در کنار <span className="code">package.json</span>،
      بسازید و بعد دستور<span className="code">liara deploy</span>
      را وارد کنید.
    </p>
    <pre>
      <code>
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
      </code>
    </pre>
  </Layout>
);
