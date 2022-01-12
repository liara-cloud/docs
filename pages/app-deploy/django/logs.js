import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات لاگ‌ها در برنامه‌های Django - سرویس ابری لیارا</title>
    </Head>
    <div className="page-head">
      <ProjectIcon platform="django" />
      <div className="page-title">
        <h1>برنامه‌های Django</h1>
        <span className="page-description">(Django Apps)</span>
      </div>
    </div>
    <h3>مشاهده لاگ‌های برنامه</h3>
    <p>
      لاگ بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک می‌کند تا بتوانند
      راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت خلاصه شما
      می‌توانید لاگ‌های برنامه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید.
      برای نمونه می‌توانید یک Log خیلی ساده بدین‌صورت در برنامه‌ی‌تان ایجاد
      کنید:
    </p>{" "}
    <Highlight className="php">{`logger.info('Everything is OK!')`}</Highlight>{" "}
    <p>
      سپس با رفرش کردن سایت می‌توانیم آن‌ها را در منوی لاگ‌های لیارا ببینیم:
    </p>
    <ZoomableImage src="/static/django-logs.png" />
    <p>
      مدیریت Log ها در Django می‌تواند روش‌های مختلفی داشته باشد و وابسته به
      پیاده‌سازی برنامه‌ی‌تان و تصمیمات شما است. ممکن است لاگ‌های مهم‌تر را در
      فایل ذخیره کنید و بخشی را در کنسول نمایش دهید.
    </p>
    <Link href="/app-deploy/django/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
