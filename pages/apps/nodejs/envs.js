import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>زبان NodeJS</h1>
    <span className="pageDescription">(NodeJS Language)</span>
    <h3>پیکربندی ENV‌ها</h3>
    <p>
      متغیرهای محیطی یا همان Environment Variables ها به شما کمک میکنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند.
    </p>
    <p>
      شما با ابزارهای مختلفی میتوانید در زبان NodeJS مقادیر ENV ها را مدیریت
      کنید. ولی به صورت خیلی ساده و برای نمونه یک ENV از طریق پنل لیارا اضافه
      میکنیم و در سایت نمایش میدهیم. به همین شیوه شما میتوانید از ENV ها در
      پروژه‌ی‌تان استفاده کنید.
    </p>
    <p>
      برای اضافه کردن یک ENV به برنامه‌ی‌تان کافیست که به بخش تنظیمات
      برنامه‌ی‌تان بروید و با اضافه کردن یک key به عنوان اسم و یک value به عنوان
      مقدار آن، و با زدن دکمه <b>ثبت تغییرات</b> یک ENV به برنامه‌ی‌تان اضافه
      کنید. برای نمونه ما ENV ای با عنوان LIARA_URL و مقدار https://liara.ir
      اضافه کردیم.
    </p>
    <ZoomableImage src="/static/php-env.png" />
    <p> حالا به راحتی میتوانیم از‌ آن در برنامه‌ی‌مان استفاده کنیم:</p>
    <Highlight className="js">
      {`console.log(\`app listening on port 8000 on \${process.env.LIARA_URL}\`)`}
    </Highlight>
    <p>
      بعد از کلیک روی دکمه <b>ثبت تغییرات</b> برنامه‌ی‌ شما به صورت خودکار
      ریستارت میشود و در استقرار جدید این متغیر‌های محیطی در داخل برنامه قابل
      استفاده میشوند. به این شیوه که LIARA_URL را اضافه کردید میتوانید هر ENV
      دیگری را نیز به پروژه اضافه کنید.
    </p>
    <Link href="/apps/nodejs/logs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
