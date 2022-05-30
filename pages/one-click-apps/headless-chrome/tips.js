import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی در برنامه‌های Headless Chrome - سرویس ابری لیارا
      </title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="chrome" />
      <div className="page-title">
        <h1>برنامه‌ی Headless Chrome</h1>
        <span className="page-description">
          (Headless Chrome one-click app)
        </span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h4 id="add-token">اضافه کردن توکن و اتصال امن به Headless Chrome</h4>
    <p>
      لیارا به‌صورت خودکار متغیر <b>TOKEN</b> را مقداردهی می‌کند اما درصورت نیاز
      به تغییر این مقدار می‌توانید وارد تب برنامه‌ها شده و برنامه‌ی Headless
      Chrome خود را انتخاب کنید. درنهایت می‌توانید توکن مورد نظر خود را در بخش{" "}
      <b>تنظیمات متغیرها</b>، در فیلد <b>Value</b> متغیر <b>TOKEN</b> قرار دهید
      و درنهایت بر روی دکمه‌ی <b>ثبت تغییرات</b> کلیک کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/headless-chrome/add-new-token-to-headless-chrome-app.gif"></ZoomableImage>
  </Layout>
);
