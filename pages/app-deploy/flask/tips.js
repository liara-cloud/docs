import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های Flask - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flask" />
      <div className="page-title">
        <h1>پلتفرم Flask</h1>
        <span className="page-description">(Flask Platform)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#python-version">انتخاب نسخه‌ی Python</a>
      </li>
      <li>
        <a href="#set-timezone">تنظیم منطقه‌ی زمانی (TimeZone)</a>
      </li>
      <li>
        <a href="#gunicorn-timeout">افزایش زمان تایم‌اوت Gunicorn</a>
      </li>
      <li>
        <a href="#nginx-customization">تنظیمات Nginx</a>
      </li>
      <li>
        <a href="#max-upload-size">افزایش محدودیت حجم آپلود فایل</a>
      </li>
      <li>
        <a href="#cors">رفع خطای CORS</a>
      </li>
      <li>
        <a href="#mirror">غیرفعال کردن Mirror</a>
      </li>
      <li>
        <a href="#main-module">تعیین نام ماژول</a>
      </li>
      <li>
        <a href="#proxy">تنظیمات TrustedProxies</a>
      </li>
    </ul>

    <h3 id="python-version">انتخاب نسخه‌ی Python</h3>
    <p>
      به‌صورت پیش‌فرض برنامه‌ی شما روی Python 3.8 اجرا می‌شود. در صورتی که قصد
      دارید نسخه دیگری را برای اجرای برنامه‌ی‌تان استفاده کنید می‌توانید داخل
      فایل <Link href="/app-deploy/flask/liarajson">liara.json</Link> بخش زیر را
      اضافه کنید. توجه داشته باشید که فایل{" "}
      <Link href="/app-deploy/flask/liarajson">liara.json</Link> را باید در کنار
      فایل <span className="code">requirements.txt</span> بسازید:
    </p>
    <Highlight className="json">
      {`{
  "flask": {
    "pythonVersion": "3.11"
  }
}
`}
    </Highlight>
    <p></p>
    <ul>
      <li>3.7</li>
      <li>3.8</li>
      <li>
        <b>3.9 (پیش‌فرض)</b>
      </li>
      <li>3.10</li>
      <li>3.11</li>
    </ul>

    <h3 id="set-timezone">تنظیم منطقه‌ی زمانی (TimeZone)</h3>
    <p>
      به صورت پیش‌فرض، منطقه‌ی زمانی بر روی Asia/Tehran تنظیم شده است. برای
      تغییر مقدار پیش‌فرض، می‌توانید از پارامتر
      <span className="code">timezone</span>
      در فایل <Link href="/app-deploy/flask/liarajson">liara.json</Link> استفاده
      کنید. برای نمونه:
    </p>
    <Highlight className="json">
      {`{
  "app": "flask-starter",
  "flask": {
    "timezone": "America/Los_Angeles"
  }
}`}
    </Highlight>
    <h3 id="gunicorn-timeout">افزایش زمان تایم‌اوت Gunicorn</h3>
    <p>
      درصورتی که در برنامه‌ی Flask خود با خطای{" "}
      <span className="code">[CRITICAL] WORKER TIMEOUT</span> مواجه شده‌اید و به
      WORKER TIMEOUT بیشتر از ۳۰ ثانیه نیاز دارید می‌توانید وارد تنظیمات
      برنامه‌ی Flask خود شده و در بخش متغیرها، متغیر{" "}
      <span className="code">GUNICORN_TIMEOUT=60</span> را به‌شکل زیر اضافه کرده
      و درنهایت با کلیک بر روی دکمه ثبت تغییرات، WORKER TIMEOUT برنامه را افزایش
      دهید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/flask/add-gunicorn-timeout-variable-to-flask-app.gif"></ZoomableImage>

    <Notice variant="info">
      توجه داشته باشید که متغیر <span className="code">GUNICORN_TIMEOUT</span>{" "}
      براساس ثانیه است.
    </Notice>

    <h3 id="nginx-customization">تنظیمات Nginx</h3>
    <p>
      در برنامه‌های Flask لیارا از وب‌سرور Nginx استفاده می‌شود و پیکربندی
      پیش‌فرض این وب‌سرور به‌شکل زیر است:
    </p>
    <Highlight className="nginx">
      {`location /public {
  alias /usr/src/app/public;
}
      
location / {
  try_files /dev/null @flask_app;
}

location ~\\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\\.well-known {
  allow all;
}`}
    </Highlight>
    <p>
      حال شما می‌توانید یک فایل با نام{" "}
      <span className="code">liara_nginx.conf</span>
      در مسیر اصلی پروژه‌ی خود ایجاد کرده و پیکربندی وب‌سرور Nginx را متناسب با
      نیاز خود تغییر دهید. برای مثال، برای فعال‌کردن فشرده‌سازی
      <span className="code">gzip</span>
      می‌توانید به‌شکل زیر عمل کنید:
    </p>
    <Highlight className="nginx">
      {`gzip             on;
gzip_disable     "msie6";
gzip_vary        on;
gzip_proxied     any;
gzip_comp_level  6;
gzip_types       text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

location /public {
  alias /usr/src/app/public;
}

location / {
  try_files /dev/null @flask_app;
}

location ~\\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\\.well-known {
  allow all;
}`}
    </Highlight>

    <h3 id="max-upload-size">افزایش محدودیت حجم آپلود فایل</h3>
    <p>
      حداکثر حجم مجاز آپلود فایل در وب‌سرور Nginx به‌صورت پیش‌فرض{" "}
      <strong>1MB</strong> در نظر گرفته شده است. برای تغییر این مقدار کافیست یک
      فایل با نام <span className="code">liara_nginx.conf</span> در مسیر اصلی
      پروژه‌ی خود ایجاد کنید و مقدار{" "}
      <span className="code">client_max_body_size</span> را براساس نیاز خود
      تنظیم کنید:
    </p>
    <Highlight className="nginx">
      {`client_max_body_size 250M;

location /public {
  alias /usr/src/app/public;
}

location / {
  try_files /dev/null @flask_app;
}

location ~\\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\\.well-known {
  allow all;
}`}
    </Highlight>

    <h3 id="cors">رفع خطای CORS</h3>
    <p>
      درصورتی که پس نصب و پیکربندی پکیج{` `}
      <a
        href="https://pypi.org/project/Flask-Cors/"
        target="_blank"
        rel="noopener"
      >
        Flask-Cors
      </a>
      {` `}
      با خطای CORS مواجه شده‌اید باید صحت resources را مورد بررسی قرار دهید:{" "}
    </p>
    <Highlight className="python">
      {`from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"`}
    </Highlight>

    <h3 id="mirror">غیرفعال کردن Mirror</h3>
    <p>
      Mirror اختصاصی لیارا به‌منظور دانلود سریع‌تر پکیج‌ها در پلتفرم Flask
      به‌صورت پیش‌فرض فعال است اما شما می‌توانید با قرار دادن قطعه‌کد زیر در
      فایل <Link href="/app-deploy/flask/liarajson">liara.json</Link>، این
      قابلیت را غیر فعال کنید:
    </p>
    <Highlight className="json">
      {`{
  "flask": {
    "mirror": false
  }
}`}
    </Highlight>

    <h3 id="main-module">تعیین نام ماژول</h3>
    <p>
      درصورتی که از نام دیگری به‌جز <span className="code">app</span> و{" "}
      <span className="code">app.py</span>به‌عنوان نام ماژول اصلی برنامه‌تان
      استفاده کرده باشید نیاز هست یک فایل با نام{" "}
      <Link href="/app-deploy/flask/liarajson">liara.json</Link> در مسیر اصلی
      پروژه‌تان ایجاد کرده و به‌شکل زیر ماژول اصلی برنامه‌تان را تعیین کنید:
    </p>

    <Highlight className="json">
      {`{
  "flask": {
    "appModule": "FILE_NAME:FLASK_INSTANCE"
  }
}`}
    </Highlight>

    <p>
      برای مثال درصورتی که Flask instance با نام{" "}
      <span className="code">app</span> در فایل{" "}
      <span className="code">server.py</span> تعریف کرده باشید:
    </p>

    <Highlight className="python">
      {`import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')`}
    </Highlight>

    <p>
      باید به‌شکل زیر نام ماژول را در فایل{" "}
      <span className="code">liara.json</span>تعیین کنید:
    </p>

    <Highlight className="json">
      {`{
  "flask": {
    "appModule": "server:app"
  }
}`}
    </Highlight>

    <h3 id="proxy">تنظیمات TrustedProxies</h3>
    <p>
      با توجه به این نکته که تمامی درخواست‌ها توسط{" "}
      <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank">
        Reverse proxy
      </a>{" "}
      لیارا به برنامه‌ی شما هدایت می‌شود باید در زمان استفاده از فریم‌ورک‌های
      مختلف برای مشاهده‌ی IP واقعی کاربران و بسیاری از قابلیت‌های دیگر تعیین
      کنید که برنامه‌ی شما در پشت یک Reverse proxy راه‌اندازی شده است.
    </p>

    <Highlight className="python">
      {`from flask import Flask, request
from werkzeug.middleware.proxy_fix import ProxyFix

app = Flask(__name__)

# Use ProxyFix middleware to handle proxy headers
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1)

@app.route('/')
def index():
    # Access client's IP from X-Forwarded-For or X-Real-IP headers
    client_ip = request.headers.get('X-Forwarded-For').split(',')[0] or 
        request.headers.get('X-Real-IP') or 
        request.remote_addr

    return f'Client IP: {client_ip}'

if __name__ == '__main__':
    app.run(debug=True)`}
    </Highlight>
  </Layout>
);
