import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Flask سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Flask</h1>
    <span className="pageDescription">(Flask Apps)</span>

    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک میکند
      تا بتوانند راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت
      خلاصه شما میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده
      کنید. برای نمونه میتوانید یک Log خیلی ساده بدین‌صورت در برنامه‌ی‌تان ایجاد
      کنید:
    </p>
    <Highlight className="python">
      {`@app.route('/logs')
def logs():
    print('---- /logs called ----')
    return 'log printed.'
`}
    </Highlight>
    <p>سپس با رفرش کردن سایت میتوانید آن‌هارا در منوی لاگ‌های لیارا ببینید:</p>
    <ZoomableImage src="/static/flask-logs.png" alt="نمایش لاگ‌ها در لیارا" />

    <p>
      مدیریت Log ها در Flask میتواند روش‌های مختلفی داشته باشد و وابسته به
      پیاده‌سازی پروژه‌ی‌تان و تصمیمات شما است. ممکن است لاگ‌های مهم‌تر را در
      فایل ذخیره کنید و بخشی را در کنسول نمایش دهید.
    </p>

    <Link href="/app-deploy/flask/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
