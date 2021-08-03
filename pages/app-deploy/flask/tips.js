import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import Highlight from "react-highlight";
import ZoomableImage from "../../../components/ZoomableImage";


export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های Flask - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/flask.svg"
        alt="flask"
      />
      <div className="page-title">
        <h1>برنامه‌های Flask</h1>
        <span className="page-description">(Flask Apps)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#python-version">انتخاب نسخه‌ی Python</a></li>
      <li><a href="#set-timezone">تنظیم منطقه‌ی زمانی (TimeZone)</a></li>
      <li><a href="#gunicorn-timeout">افزایش زمان تایم‌اوت Gunicorn</a></li>
    </ul>

    <h3 id="python-version">انتخاب نسخه‌ی Python</h3>
    <p>
      به‌صورت پیش‌فرض برنامه‌ی شما روی Python 3.8 اجرا می‌شود.
      در صورتی که قصد دارید نسخه دیگری را برای اجرای برنامه‌ی‌تان استفاده کنید
      می‌توانید داخل فایل <span className="code">liara.json</span> بخش زیر را
      اضافه کنید. توجه داشته باشید که فایل <span className="code">liara.json</span>
      را باید در کنار فایل <span className="code">requirements.txt</span> بسازید:
    </p>
    <Highlight className="json">
      {`{
  "flask": {
    "pythonVersion": "3.7"
  }
}
`}
    </Highlight>
    <p>

    </p>
    <ul>
      <li>3.7</li>
      <li>3.8</li>
      <li>3.9</li>
    </ul>

    <h3 id="set-timezone">تنظیم منطقه‌ی زمانی (TimeZone)</h3>
    <p>
      به صورت پیش‌فرض، منطقه‌ی زمانی بر روی Asia/Tehran تنظیم شده است. برای
      تغییر مقدار پیش‌فرض، می‌توانید از پارامتر
      <span className="code">timezone</span>
      در فایل <span className="code">liara.json</span>
      استفاده کنید. برای نمونه:
    </p>
    <pre>
      <code>
        {`{
  "app": "flask-starter",
  "flask": {
    "timezone": "America/Los_Angeles"
  }
}`}
      </code>
    </pre>
    <h3 id="gunicorn-timeout">افزایش زمان تایم‌اوت Gunicorn</h3>
    <p>
      درصورتی که در برنامه‌ی Flask خود با خطای <span className="code">[CRITICAL] WORKER TIMEOUT</span> مواجه شده‌اید و به WORKER TIMEOUT بیشتر از ۳۰ ثانیه نیاز دارید می‌توانید وارد تنظیمات برنامه‌ی Flask خود شده و در بخش متغیرها، متغیر <span className="code">GUNICORN_TIMEOUT=60</span> را به‌شکل زیر اضافه کرده و درنهایت با کلیک بر روی دکمه ثبت تغییرات، WORKER TIMEOUT برنامه را افزایش دهید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/flask/add-gunicorn-timeout-variable-to-flask-app.gif"></ZoomableImage>

    <Notice variant="info">
      توجه داشته باشید که متغیر <span className="code">GUNICORN_TIEMOUT</span> براساس ثانیه است.
    </Notice>

  </Layout>
);
