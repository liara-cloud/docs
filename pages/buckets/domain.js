import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>اتصال دامنه به ذخیره‌سازی ابری - لیارا</title>
    </Head>

    <h1>ذخیره‌سازی ابری</h1>

    <h3 id="add-domain">اضافه کردن دامنه</h3>

    <h5 id="add-domain">سرویس DNS لیارا</h5>
    <video
      src="https://files.liara.ir/liara/domain/dns.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h5 id="add-domain">سرویس DNS کلودفلر</h5>
    <video
      src="https://files.liara.ir/liara/domain/domain.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      برای اتصال دامنه به باکت مورد نظرتان ابتدا وارد باکت شده و در بخش{" "}
      <strong>دامنه‌ها</strong> روی گزینه‌ی
      <strong>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ display: "inline" }}
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
        افزودن دامنه
      </strong>{" "}
      کلیک کرده و نام دامنه‌تان (مثلا: example.com) را وارد کنید. درنهایت با
      کلیک روی گزینه‌ی <strong>ایجاد دامنه</strong>، دامنه شما در لیارا اضافه
      می‌شود و همچنین به صفحه‌ی <strong>مدیریت دامنه</strong> هدایت می‌شوید.
    </p>

    <p>
      در این مرحله باید رکوردهای DNS درخواست شده را با استفاده از یک سرویس DNS
      مانند Cloudflare بر روی دامنه‌تان تنظیم کنید. درنهایت پس از ثبت رکوردهای
      DNS می‌توانید بر روی گزینه‌ی{" "}
      <strong>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ display: "inline" }}
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>{" "}
        بررسی وضعیت رکوردها
      </strong>{" "}
      کلیک کنید و با تغییر تیک‌های قرمز رنگ به سبز، یعنی اتصال دامنه‌ی شما به
      لیارا با موفقیت صورت گرفته است.
    </p>

    <Notice variant="info">
      ۱. توجه داشته باشید که درصورت استفاده از CDN باید گواهی SSL را نیز از
      سرویس‌دهنده‌ی DNS فعلی‌تان تهیه کنید.
      <br />
      ۲. درصورت استفاده از CDN می‌توانید تیک قرمز رنگ و خطای تنظیم نشدن رکوردها
      را نادیده بگیرید.
      <br />
      ۳. در سرویس Cloudflare، تنظیمات SSL را همیشه روی Flexible تنظیم کنید.
    </Notice>

    <p>
      در صورتی که می‌خواهید به سرویس «ذخیره‌سازی ابری» لیارا متصل شوید، باید از
      آدرس <strong>endpoint</strong> موجود در بخش تنظیمات باکت استفاده کنید. پس
      از اتصال دامنه‌ی شخصی، فایل‌های شما قابل آدرس‌دهی با استفاده از دامنه‌ی
      شخصی خودتان نیز خواهند بود. در این صورت، باید URL مناسب را در برنامه‌تان
      تعریف کنید. به عنوان مثال، فرض کنید آدرس یک فایل به صورت زیر باشد:
    </p>

    <Highlight className="bash">
      bucket.storage.iran.liara.space/filename
    </Highlight>

    <p>
      در این صورت، با استفاده از دامنه‌ی شخصی خود، به همان فایل دسترسی خواهید
      داشت:
    </p>

    <Highlight className="bash">example.com/filename</Highlight>
  </Layout>
);
