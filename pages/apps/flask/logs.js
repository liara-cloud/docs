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

    <h1>فریم‌ورک Flask</h1>
    <span className="pageDescription">(Flask Framework)</span>

    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه هستند و به برنامه‌نویسان کمک میکنند
      تا بدونن دقیقا چه اتفاقاتی در نرم‌افزار رخ داده. به صورت خلاصه شما
      میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید. برای
      نمونه در پروژه تستی‌مان به ساده‌ترین شکل ممکن روی کنسول لاگ نمایش میدهیم:
    </p>
    <Highlight className="python">
      {`@app.route('/logs')
def logs():
    print('---- /logs called ----')
    return 'log printed.'
`}
    </Highlight>
    <p>
      سپس با رفرش کردن چندباره سایت میتوانیم آن‌هارا در منوی لاگ‌های لیارا
      ببینیم:
    </p>
    <ZoomableImage src="/static/flask-logs.png" alt="نمایش لاگ‌ها در لیارا" />

    <p>
      البته ممکن است شما لاگ‌ها را داخل کنسول قرار ندهید و آن‌ها‌ را در فایل
      ذخیره کنید. از آنجایی که مبحث لاگ در هر فریم‌ورک و برنامه‌ ممکن است
      سازوکارهای متفاوتی داشته باشد درباره لاگ‌ها در Flask و مدیریت آن‌ها در
      لیارا در بخش <b>توضیحات و نکات تکمیلی</b> بیشتر توضیح داده‌ایم.
    </p>

    <Link href="/apps/flask/liarajson">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
