import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مدیریت فضای ذخیره‌سازی ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>فضای ذخیره‌سازی ابری</h1>

    <h2>مدیریت فضای ذخیره‌سازی ابری با استفاده از رابط کاربری</h2>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#create-bucket">ایجاد باکت</a>
      </li>
      <li>
        <a href="upload">آپلود فایل</a>
      </li>
      <li>
        <a href="#download">دانلود فایل</a>
      </li>
      <li>
        <a href="#delete">حذف فایل</a>
      </li>
      <li>
        <a href="#view">مشاهده فایل</a>
      </li>
      <li>
        <a href="#share">اشتراک‌گذاری فایل</a>
      </li>
    </ul>

    <h3 id="create-bucket">ایجاد باکت</h3>
    <p>
      برای ایجاد باکت باید در بخش{" "}
      <a href="https://console.liara.ir/buckets" target="_blank">
        فضای ذخیره‌سازی ابری
      </a>{" "}
      پنل کاربری لیارا بر روی دکمه‌ی <strong>ایجاد باکت</strong> کلیک کنید. در
      قدم بعد، یک شناسه یکتا برای باکت خود درنظر بگیرید و{" "}
      <Link href="/buckets/tips#access-policy">سطح دسترسی</Link> مورد نظرتان را
      انتخاب کنید. در نهایت پس از انتخاب پلن می‌توانید بر روی دکمه‌ی{" "}
      <strong>ایجاد باکت</strong> کلیک کنید.
    </p>

    <h3 id="upload">آپلود فایل</h3>
    <p>
      برای آپلود فایل از طریق رابط کاربری اختصاصی لیارا تنها کافیست وارد باکت
      مورد نظرتان شوید و روی گزینه‌ی <strong>آپلود فایل</strong> کلیک کنید،
      همچنین می‌توانید فایل مورد نظرتان را به‌صورت Drag & Drop درون لیست
      فایل‌های باکت رها کنید تا عملیات آپلود آغاز شود.
    </p>

    <h3 id="download">دانلود فایل</h3>
    <p>
      برای دانلود فایل از طریق رابط کاربری اختصاصی لیارا تنها کافیست وارد باکت
      مورد نظرتان شوید و در لیست فایل‌ها، روی گزینه‌ی{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        style={{ display: "inline" }}
      >
        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
      </svg>{" "}
      کلیک کنید.
    </p>

    <h3 id="delete">حذف فایل</h3>
    <p>
      برای حذف فایل از طریق رابط کاربری اختصاصی لیارا تنها کافیست وارد باکت مورد
      نظرتان شوید و در لیست فایل‌ها، روی گزینه‌ی{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        style={{ display: "inline" }}
      >
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
      </svg>{" "}
      کلیک کنید. درنهایت درصورتی که از حذف این فایل اطمینان داشتید باید روی
      گزینه‌ی <strong>حذف فایل</strong> کلیک کنید.
    </p>

    <h3 id="view">مشاهده فایل</h3>
    <p>
      برای مشاهده فایل از طریق رابط کاربری اختصاصی لیارا تنها کافیست وارد باکت
      مورد نظرتان شوید و در لیست فایل‌ها، روی گزینه‌ی{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        style={{ display: "inline" }}
      >
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
      </svg>{" "}
      کلیک کنید.
    </p>

    <h3 id="share">اشتراک‌گذاری فایل</h3>
    <p>
      برای اشتراک‌گذاری فایل از طریق رابط کاربری اختصاصی لیارا تنها کافیست وارد
      باکت مورد نظرتان شوید و در لیست فایل‌ها، روی گزینه‌ی{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        style={{ display: "inline" }}
      >
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
      </svg>{" "}
      کلیک کنید. در قدم بعد می‌توانید <strong>تاریخ انقضا</strong> مورد نظرتان
      را انتخاب کرده و <strong>لینک موقت</strong> فایل را کپی کنید. در غیر
      اینصورت می‌توانید <strong>لینک دائمی</strong> فایل را کپی کنید.
    </p>
  </Layout>
);
