import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا | مستندات استقرار برنامه‌های Laravel - Laravel
      </title>
    </Head>

    <h1>فریم‌ورک Laravel</h1>
    <span className="pageDescription">(Laravel Framework)</span>

    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه هستند و به برنامه‌نویسان کمک میکنند
      تا بدونن دقیقا چه اتفاقاتی در نرم‌افزار رخ داده. به صورت خلاصه شما
      میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید. برای
      نمونه در پروژه تستی‌مان هر وقت کاربری به صفحه اصلی سایت درخواستی ارسال کند
      آن را لاگ میکنیم:
      <Highlight className="php">
        {`public function welcome()
{
    $url = Request::fullUrl();
    Log::info("--- Route $url called ---");
    return view('welcome');
}
`}
      </Highlight>
    </p>
    <p>
      سپس با رفرش کردن چندباره سایت میتوانیم آن‌هارا در منوی لاگ‌های لیارا
      ببینیم:
      <ZoomableImage src="/static/liara-logs.png" alt="نمایش لاگ‌ها در لیارا" />
    </p>
    <p>
      البته ممکن است شما لاگ‌ها را داخل کنسول قرار ندهید و آن‌ها‌ را در فایل
      ذخیره کنید. از آنجایی که مبحث لاگ در هر فریم‌ورک و برنامه‌ ممکن است
      سازوکارهای متفاوتی داشته باشد درباره لاگ‌ها در Laravel و مدیریت آن‌ها در لیارا در بخش{" "}
      <b>توضیحات و نکات تکمیلی</b> بیشتر توضیح داده‌ایم.
    </p>

    <Link href="/apps/laravel/liarajson">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
