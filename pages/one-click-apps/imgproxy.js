import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات پردازش تصاویر با Imgproxy - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="imgproxy" />
      <div className="page-title">
        <h1>پردازش تصاویر با Imgproxy</h1>
        <span className="page-description">(Imgproxy one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://imgproxy.net/" target="_blank" rel="noopener">
        Imgproxy
      </a>{" "}
      یک ابزار پردازش تصویر توسعه داده شده با زبان Go است که می‌توانیم آن را
      جایگزینی مدرن‌ و حتی بسیار کاربردی‌تر برای ImageMagick و یا GraphicsMagick
      بدانیم زیرا قابلیت‌های مختلفی مانند تغییر اندازه‌ی تصاویر را به‌صورت
      remote برای ما فراهم کرده است.
    </p>

    <p>
      یکی دیگر از جذابیت‌های Imgproxy، امکان شخصی‌سازی این برنامه با استفاده از
      متغیرهای محیطی است که برای کسب اطلاعات بیشتر می‌توانید{" "}
      <a
        href="https://docs.imgproxy.net/configuration"
        target="_blank"
        rel="noopener"
      >
        مستندات پیکربندی Imgproxy
      </a>{" "}
      را مطالعه کنید.
    </p>

    <h3>🚀 راه‌اندازی</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/imgproxy/create-imgproxy-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Imgproxy باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Imgproxy را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد
      نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی{" "}
      <strong>ایجاد برنامه</strong> کلیک کنید.
    </p>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h4 id="url-signature">اضافه کردن URL signature</h4>

    <p>
      بسیار توصیه می‌شود که در حالت Production با اجرای دستور زیر، یک
      hex-encoded key و یک hex-encoded salt ایجاد کرده و هر دوی این مقدارها را
      کپی کنید:
    </p>
    <Highlight className="bash">{`echo $(xxd -g 2 -l 64 -p /dev/random | tr -d '\\n')`}</Highlight>
    <p>
      سپس وارد تب برنامه‌ها شده و برنامه‌ی Imgproxy خود را انتخاب کنید. اکنون
      باید مقادیر کپی شده را در بخش <strong>تنظیمات متغیرها</strong> در فیلد{" "}
      <strong>Value</strong> متغیرهای <span className="code">IMGPROXY_KEY</span>{" "}
      و <span className="code">IMGPROXY_SALT</span> قرار دهید و درنهایت بر روی
      دکمه‌ی <strong>ثبت تغییرات</strong> کلیک کنید.
    </p>

    <h4 id="imgproxy-secret">
      محدود کردن دسترسی به Imgproxy با تنظیم{" "}
      <span className="code">IMGPROXY_SECRET</span>
    </h4>
    <p>
      برای محدود کردن دسترسی به برنامه‌ی Imgproxy می‌توانید secret مورد نظر خود
      را در فیلد <strong>Value</strong> متغیر{" "}
      <span className="code">IMGPROXY_SECRET</span> وارد کرده و درنهایت بر روی
      دکمه‌ی <strong>ثبت تغییرات</strong> کلیک کنید.
    </p>
    <Notice variant="warning">
      توجه داشته باشید که پس از تنظیم <strong>IMGPROXY_SECRET</strong> بایستی
      هدر
      <span className="code">Authorization: Bearer %secret%</span> را به
      درخواست‌های HTTP خود اضافه کنید.
    </Notice>
  </Layout>
);
