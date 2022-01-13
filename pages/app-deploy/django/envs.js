import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تنظیم متغیرها (Environment Variables) در برنامه‌های Django -
        سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <ProjectIcon platform="django" />
      <div className="page-title">
        <h1>برنامه‌های Django</h1>
        <span className="page-description">(Django Apps)</span>
      </div>
    </div>
    <h3>تنظیم متغیرها (Environment Variables)</h3>
    <p>
      متغیرهای محیطی یا همان Environment Variables به شما کمک می‌کنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند. برای
      مثال، اطلاعات اتصال به دیتابیس را می‌توانید از این بخش وارد کنید.{" "}
      <Link href="/app-features/environment-variables">توضیحات بیشتر</Link>
    </p>
    <p>
      برای افزودن یک ENV کافیست که به بخش تنظیمات برنامه‌ی‌تان بروید و یک key به
      عنوان اسم و یک value به عنوان مقدار اضافه کنید، و با زدن دکمه{" "}
      <b>ثبت تغییرات</b> یک ENV به برنامه‌ی‌تان اضافه کنید. برای نمونه، ENV ای
      با عنوان LIARA_URL و مقدار https://liara.ir را به این صورت اضافه کنید.
    </p>
    <ZoomableImage src="/static/php-env.png" />
    <p> حالا به راحتی می‌توانید از‌ آن در برنامه‌ی‌تان استفاده کنید:</p>
    <Highlight className="python">
      {`print(os.getenv('LIARA_URL', 'LIARA_URL is not set.'), flush=True)
`}
    </Highlight>
    <p>
      بعد از کلیک روی دکمه <b>ثبت تغییرات</b> برنامه‌ی‌ شما به صورت خودکار
      ری‌استارت می‌شود و در استقرار جدید این متغیر‌های محیطی در داخل برنامه قابل
      استفاده می‌شوند. به این شیوه که LIARA_URL را اضافه کردید می‌توانید هر ENV
      دیگری را نیز به برنامه اضافه کنید.
    </p>
    <Notice variant="info">
      در پلتفرم Django متغیر محیطی SECRET_KEY به صورت خودکار با ساخت برنامه
      ایجاد می‌شود و شما می‌توانید مقدار آن‌ را به دلخواه خود عوض کنید.
    </Notice>
    <br />
    <Link href="/app-deploy/django/logs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
