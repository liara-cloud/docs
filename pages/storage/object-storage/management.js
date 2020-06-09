import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات آبجکت‌استوریج</title>
    </Head>

    <h1>آبجکت استوریج</h1>
    <span className="pageDescription">(Object Storage)</span>

    <h3>فعال‌کردن سرویس</h3>
    <p>
      از منو‌های بالای صفحه داشبورد روی «سرویس فایل» کلیک کنید. بعد از کلیک وارد
      صفحه انتخاب پلن‌ها میشوید و بعد از انتخاب یک پلن سرویس فایل شما آماده
      میشود. البته ممکن است چند ثانیه‌ای راه اندازی کامل آن زمان ببرد.
    </p>
    <ZoomableImage
      src="/static/storage-activate.png"
      alt="فعال‌سازی سرویس فایل"
    />

    <Notice variant="info">
      توجه کنید وقتی شما یک پلن با حجم مشخصی انتخاب میکنید فقط میتوانید حجم
      آن‌را در صورت نیاز افزایش دهید. امکان کاهش حجم وجود ندارد.
    </Notice>

    <h3>داشبورد مدیریت فایل</h3>
    <p>
      برای دیدن فایل‌ها و باکت‌های‌تان میتوانید از بخش <b> «مدیریت فایل‌ها»</b>{" "}
      استفاده کنید. بعد از فعال‌کردن سرویس فایل، وارد صفحه‌ای مانند صفحه‌ی زیر
      خواهید شد:
    </p>
    <ZoomableImage src="/static/storage-details.png" alt="اطلاعات سرویس فایل" />
    <p>
      با کلیک بر روی گزینه‌ی «مدیریت فایل‌ها» وارد داشبورد مدیریت فایل‌ها خواهید
      شد. برای ورود به داشبورد، باید
      <span className="code">access key</span>و
      <span className="code">secret key</span>
      را وارد کنید.
    </p>
    <ZoomableImage
      src="/static/storage-panel.png"
      alt="ورود به داشبورد مدیریتی سرویس فایل"
    />

    <h3>آپلود، دانلود و مشاهده‌ی فایل‌ها</h3>
    <p>
      کافی‌ست اولین باکت‌ دلخواه‌تان را ایجاد کنید. سپس میتوانید در آن باکت شروع
      به آپلود/دانلود فایل‌ها بکنید. کافی‌ست از دکمه <b>+</b> در پایین صفحه روی{" "}
      <b>Create bucket</b> کلیک کنید و سپس نام باکت خودتان را وارد کنید. برای
      مثال در تصویر پایین ما یک باکت به نام videos ایجاد کرده‌ایم و بعد از آن
      اقدام به آپلود یک فایل pdf کردیم.
    </p>
    <ZoomableImage src="/static/storage-upload.png" />
    <p>
      برای دانلود هر فایل نیز کافی‌ست با موس روی آن بروید و سپس تیک آن را فعال
      کنید و از بالا گزینه <b>Download object</b> را بزنید.
    </p>
    <ZoomableImage src="/static/storage-download.png" />
    {/* <p>
      در بخش بعدی به روش‌های کار با Object Storage با زبان‌های برنامه نویسی
      میپردازیم.
    </p> */}

    {/* <h3>مدیریت سطح دسترسی هر باکت</h3> */}
  </Layout>
);
