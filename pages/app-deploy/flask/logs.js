import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات لاگ‌ها در برنامه‌های Flask - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flask" />
      <div className="page-title">
        <h1>برنامه‌های Flask</h1>
        <span className="page-description">(Flask Apps)</span>
      </div>
    </div>

    <h3>مشاهده لاگ‌های برنامه</h3>
    <p>
      لاگ بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک می‌کند تا بتوانند
      راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت خلاصه شما
      می‌توانید لاگ‌های برنامه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید.
      برای نمونه می‌توانید یک Log خیلی ساده بدین‌صورت در برنامه‌ی‌تان ایجاد
      کنید:
    </p>
    <Highlight className="python">
      {`@app.route('/logs')
def logs():
    print('---- /logs called ----')
    return 'log printed.'
`}
    </Highlight>
    <p>سپس با رفرش کردن سایت می‌توانید آن‌هارا در منوی لاگ‌های لیارا ببینید:</p>
    <ZoomableImage src="/static/flask-logs.png" alt="نمایش لاگ‌ها در لیارا" />

    <p>
      مدیریت Log ها در Flask می‌تواند روش‌های مختلفی داشته باشد و وابسته به
      پیاده‌سازی برنامه‌ی‌تان و تصمیمات شما است. ممکن است لاگ‌های مهم‌تر را در
      فایل ذخیره کنید و بخشی را در کنسول نمایش دهید.
    </p>

    <Link href="/app-deploy/flask/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
