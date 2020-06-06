import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Django سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>فریم‌ورک Django</h1>
    <span className="pageDescription">(Django Framework)</span>
    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه هستند و به برنامه‌نویسان کمک میکنند
      تا بدونن دقیقا چه اتفاقاتی دشر نرم‌افزار رخ داده. به صورت خلاصه شما
      میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید. برای
      نمونه در پروژه تستی‌مان هر وقت کاربری به صفحه اصلی سایت درخواستی ارسال کند
      آن را لاگ میکنیم:
    </p>{" "}
    <Highlight className="php">{`logger.info('Everything is OK!')`}</Highlight>{" "}
    <p>
      سپس با رفرش کردن چندباره سایت میتوانیم آن‌هارا در منوی لاگ‌های لیارا
      ببینیم:
    </p>
    <ZoomableImage src="/static/django-logs.png" />
    <p>
      البته ممکن است شما لاگ‌ها را داخل کنسول قرار ندهید و آن‌ها‌ را در فایل
      ذخیره کنید. از آنجایی که مبحث لاگ در هر فریم‌ورک و زبان ممکن است
      سازوکارهای متفاوتی داشته باشد درباره لاگ‌ها در Django و مدیریت آن‌ها در
      لیارا در بخش <b>توضیحات و نکات تکمیلی</b> بیشتر توضیح داده‌ایم.
    </p>
    <Link href="/apps/django/liarajson">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
