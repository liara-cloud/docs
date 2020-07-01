import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات دیسک‌ها</title>
    </Head>

    <h1>دیسک‌ها</h1>
    <span className="pageDescription">(Disks)</span>

    <h3>افزایش حجم دیسک‌ها</h3>
    <p>
      در لیارا به سادگی می‌توانید حجم دیسک‌های موجود را افزایش دهید. فرض کنید پلن
      برنامه شما دارای <span className="code">5 GB</span> فضا است. و شما یک
      دیسک به اندازه <span className="code">3 GB</span> ایجاد کرده‌اید. دیسک شما
      در حال پر شدن است. به سادگی از طریق پنل دیسک‌های لیارا می‌توانید حجم دیسک
      خود را افزایش دهید. ابتدا باید برنامه خود را خاموش کنید. سپس از طریق بخش{" "}
      <b>تغییر اندازه</b> می‌توانید حجم دلخواه خود را وارد کنید. در لیارا شما فقط
      امکان افزایش حجم را دارید درنتیجه باید حجم جدید بیشتر از حجم فعلی‌تان
      باشد.
    </p>
    <ZoomableImage src="/static/disks/scale.png" alt="صفحه‌ی افزایش حجم دیسک" />
    <p>
      {" "}
      برای مثال همان‌طور که در تصویر بالا مشخص است فضای کل دیسک ما{" "}
      <span className="code">40 GB</span> است که{" "}
      <span className="code">10 GB</span> آن در حال حاضر رزرو شده است، و ما
      می‌توانیم حجم جدید را بیشتر از <span className="code">10 GB</span> تا{" "}
      <span className="code">40 GB</span> قرار دهیم.
    </p>
  </Layout>
);
