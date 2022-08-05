import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import Link from "next/link";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات مدیریت آبجکت استوریج - سرویس ابری لیارا</title>
    </Head>
    <h1>آبجکت استوریج</h1>
    <span className="page-description">(Object Storage)</span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#using-file-service">فعال‌کردن سرویس فایل</a>
      </li>
      <li>
        <a href="#dashboard">داشبورد مدیریت فایل</a>
      </li>
      <li>
        <a href="#upload-download-view-files">
          آپلود، دانلود و مشاهده‌ی فایل‌ها
        </a>
      </li>
      <li>
        <a href="#access">مدیریت سطح دسترسی هر باکت</a>
      </li>
      <li>
        <a href="#files-addresses">آدرس فایل‌ها</a>
      </li>
      <li>
        <a href="#files-domain">اضافه کردن دامنه اختصاصی به سرویس فایل</a>
      </li>
    </ul>

    <Notice variant="danger">
      از این پس سرویس فایل در لیارا ارائه نمی‌شود و می‌توانید به‌عنوان جایگزین
      از <Link href="/buckets/about">ذخیره‌سازی ابری</Link> استفاده کنید.
    </Notice>

    <h3 id="using-file-service">فعال‌کردن سرویس</h3>
    <p>
      از منو‌های بالای صفحه داشبورد روی «سرویس فایل» کلیک کنید. بعد از کلیک وارد
      صفحه انتخاب پلن‌ها می‌شوید و بعد از انتخاب یک پلن سرویس فایل شما آماده
      می‌شود. البته ممکن است چند ثانیه‌ای راه اندازی کامل آن زمان ببرد.
    </p>
    <ZoomableImage
      src="/static/storage-activate.png"
      alt="فعال‌سازی سرویس فایل"
    />
    <Notice variant="info">
      توجه کنید وقتی شما یک پلن با حجم مشخصی انتخاب می‌کنید فقط می‌توانید حجم
      آن‌را در صورت نیاز افزایش دهید. امکان کاهش حجم وجود ندارد.
    </Notice>
    <h3 id="dashboard">داشبورد مدیریت فایل</h3>
    <p>
      برای دیدن فایل‌ها و باکت‌های‌تان می‌توانید از بخش <b> «مدیریت فایل‌ها»</b>{" "}
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
    <h3 id="upload-download-view-files">آپلود، دانلود و مشاهده‌ی فایل‌ها</h3>
    <p>
      کافی‌ست اولین باکت‌ دلخواه‌تان را ایجاد کنید. سپس می‌توانید در آن باکت
      شروع به آپلود/دانلود فایل‌ها بکنید. کافی‌ست از دکمه <b>+</b> در پایین صفحه
      روی <b>Create bucket</b> کلیک کنید و سپس نام باکت خودتان را وارد کنید.
      برای مثال در تصویر پایین ما یک باکت به نام videos ایجاد کرده‌ایم و بعد از
      آن اقدام به آپلود یک فایل pdf کردیم.
    </p>
    <ZoomableImage src="/static/storage-upload.png" />
    <p>
      برای دانلود هر فایل نیز کافی‌ست با موس روی آن بروید و سپس تیک آن را فعال
      کنید و از بالا گزینه <b>Download object</b> را بزنید.
    </p>
    <ZoomableImage src="/static/storage-download.png" />
    <h3 id="access">مدیریت سطح دسترسی هر باکت</h3>
    <p>
      هر باکت در سرویس فایل دارای سطح دسترسی است. برای مثال، می‌توانید برای
      باکتی به نام public-files دسترسی عمومی قرار دهید و تمام فایل‌هایی که تمایل
      دارید همه کاربران دسترسی داشته باشند را داخل آن آپلود کنید؛ و برای باکتی
      به نام private-files دسترسی خصوصی قرار دهید و فقط فایل‌هایی را داخل آن
      آپلود کنید که تمایل دارید کاربران خاصی با لینک مخصوص به آن‌ها دسترسی داشته
      باشند. یا در مثالی دیگر، در باکتی به نام files، دسترسی به فایل‌هایی که با
      پیشوندی مثل videos شروع می‌شوند را عمومی قرار دهید و به فایل‌هایی که با
      پیشوند test_videos شروع می‌شوند دسترسی خصوصی دهید. در نهایت، چگونگی سطح‌
      دسترسی‌ها وابسته به تصمیم شما برای ساختار مدیریت فایل‌هایتان است.
    </p>
    <p>به صورت کلی در سرویس‌فایل شما می‌توانید این دسترسی‌ها را ایجاد کنید:</p>
    <ul>
      <li>
        <p>
          <b>
            <span className="code">:None</span>{" "}
          </b>
          حالت پیشفرض None است. در این حالت تمام ارتباطات برای دانلود یا آپلود
          فایل به باکت‌ها از طریق access key و secret key است.
        </p>
      </li>

      <li>
        <p>
          <b>
            <span className="code">:Read Only</span>
          </b>
          در این حالت همه کاربران میتوانند بدون access key و secret key فایل‌ها
          را دانلود کنند.
        </p>
      </li>

      <li>
        <p>
          <b>
            <span className="code">:Write Only</span>
          </b>
          در این حالت همه کاربران میتوانند بدون access key و secret key فایل‌ها
          را آپلود کنند و تغییر دهند.
        </p>
      </li>

      <li>
        <p>
          <b>
            <span className="code">:Read and Write</span>
          </b>
          در این حالت همه کاربران میتوانند بدون access key و secret key فایل‌ها
          را دانلود و آپلود کنند.
        </p>
      </li>
    </ul>
    <p>
      برای تغییر این سطح دسترسی‌ها می‌توانید از دو راه داشبورد گرافیکی یا CLI
      استفاده کنید. برای تغییر سطح دسترسی‌ها در حالت گرافیکی می‌توانید وارد
      داشبورد مدیریت فایل‌ها شوید و روی تنظیمات هر Bucket کلیک کنید و از طریق
      بخش <b>Edit policy</b> اقدام به تغییر Policy ها یا همان سطح دسترسی‌ها
      کنید.
    </p>
    <ZoomableImage src="/static/see-menu.png" />
    <p>
      برای نمونه به تمام فایل‌های داخل باکت public-files بدین‌صورت می‌توانید
      دسترسی عمومی برای خواندن بدهید. کاراکتر <b>*</b> به صورت Wild card عمل
      می‌کند و تنظیمات را روی همه فایل‌ها اعمال می‌کند.
    </p>
    <ZoomableImage src="/static/update-policy.png" />
    <p>
      همچنین اگر میخواهید فقط به فایل‌هایی که با پیشوند <b>/public</b> شروع
      می‌شوند، دسترسی عمومی خواندن بدهید بدین صورت انجام دهید:
    </p>
    <ZoomableImage src="/static/update-policy-public.png" />
    <p>
      در صورتی که قصد دارید از طریق CLI سطح دسترسی‌ها را تغییر دهید می‌توانید از{" "}
      <a
        href="https://docs.min.io/docs/minio-client-complete-guide.html"
        target="_blank"
      >
        MinIO CLI
      </a>{" "}
      استفاده کنید. مثلا می‌توانید به صورت زیر به باکت <b>users</b> دسترسی عمومی
      خواندن بدهید:
    </p>
    <pre>
      <code>$ mc policy set download liara/users</code>
    </pre>
    <p>
      برای دیدن اطلاعات بیشتر درباره MinIO CLI می‌توانید به{" "}
      <a
        href="https://docs.min.io/docs/minio-client-complete-guide.html#policy"
        target="_blank"
      >
        مستندات
      </a>{" "}
      آن مراجعه کنید.
    </p>
    <h3 id="files-addresses">آدرس فایل‌ها</h3>
    <p>فایل‌ها با ساختار زیر در دسترس هستند:</p>
    <pre>
      <code>{`https://YOUR_ENDPOINT/YOUR_BUCKET/KEY`}</code>
    </pre>
    <p>
      برای مثال اگر فایلی را با کلید
      <span className="code">avatars/1234.png</span>
      داخل باکت
      <span className="code">users</span>
      ذخیره کرده‌اید، این فایل در
      <span className="code">Endpoint</span>
      شما به شکل زیر در دسترس خواهد بود: (این آدرس برای مثال است.)
    </p>
    <pre>
      <code>
        {`https://827a4c001192dd15.liara.space/users/avatars/1234.png`}
      </code>
    </pre>
    <p>
      اگر از دامنه اختصاصی استفاده کرده ‌باشید به جای آدرس پیشفرض لیارا
      می‌توانید دامنه‌ی خودتان را قرار دهید.
    </p>
    <h3 id="files-domain">اضافه کردن دامنه اختصاصی به سرویس فایل</h3>
    <p>
      لیارا به صورت پیش‌فرض به شما زیر‌دامنه‌ای مثل{" "}
      <span className="code">827a4c001192dd15.liara.space</span> اختصاص می‌دهد.
      (این دامنه یک نمونه است و برای هر کاربر بخش زیردامنه به صورت تصادفی انتخاب
      می‌شود). در صورتی که قصد دارید دامنه‌ شخصی‌ خودتان را برای سرویس فایل
      استفاده کنید کافیست برای مطالعه در این مورد به{" "}
      <a href="/domains/management#files-domain" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کنید.
    </p>
  </Layout>
);
