import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات مدیریت دامنه‌ها - سرویس ابری لیارا</title>
    </Head>

    <h1>دامنه‌ها</h1>
    <span className="page-description">(Domain Management)</span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#liara-subdomain">زیردامنه‌ رایگان liara.run</a>
      </li>
      <li>
        <a href="#add-domain">اضافه‌کردن دامنه‌</a>
      </li>
      <li>
        <a href="#add-subdoamin">اضافه کردن زیر‌دامنه (Subdomain)</a>
      </li>
      <li>
        <a href="#faq">سوالات متداول</a>
      </li>
    </ul>

    <h3 id="liara-subdomain">
      زیردامنه‌ رایگان <span className="code">.liara.run</span>
    </h3>

    <p>
      بعد از ایجاد هر برنامه در لیارا، یک زیردامنه‌‌ی اختصاصی به شما داده
      می‌شود. برای مثال، اگر شناسه برنامه‌ی‌تان{" "}
      <span className="code">my-app</span> باشد، زیردامنه‌‌ی{" "}
      <span className="code">https://my-app.liara.run</span> به شما اختصاص داده
      می‌شود که از طریق آن می‌توانید به برنامه‌ی‌تان دسترسی داشته باشید. این
      دامنه‌ برای تست و بررسی نرم‌افزار و یا ارائه پیش‌نمایش به کارفرما و
      همکاران‌تان بسیار کاربردی است.
    </p>
    <p>
      در صورت لزوم، می‌توانید این قابلیت را از بخش <b>زیردامنه‌ی پیش‌فرض</b> در
      قسمت تنظیمات برنامه‌ی‌تان غیرفعال کنید.
    </p>

    <ZoomableImage src="/static/disable-subdomain.png" />

    <h3 id="add-domain">اضافه‌کردن دامنه‌</h3>
    <p>
      معمولا برنامه‌ها دارای دامنه‌ی اختصاصی هستند. در این بخش، به توضیح این
      قابلیت در لیارا می‌پردازیم که چگونه می‌توانید دامنه‌ای مانند example.com
      را به برنامه‌ی‌تان متصل کنید.
    </p>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/domain.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    >
      آموزش ویدیوئی متصل کردن دامنه‌ اختصاصی
    </video>
    <ul>
      <li>
        <b>گام اول: اضافه کردن دامنه مورد‌نظر به لیارا</b>
      </li>
      <p>
        از طریق منوی <b>دامنه‌ها</b> روی دکمه <b>+ افزودن دامنه</b> کلیک کنید.
      </p>
      <ZoomableImage src="/static/liara-add-domain.png" />
      <p>
        سپس در صفحه‌ای که باز می‌شود کافیست نامه دامنه را وارد کنید، فرض می‌کنیم
        میخواهید این دامنه را به برنامه‌ وصل کنید. کافیست روی <b>ایجاد دامنه</b>{" "}
        کلیک کنید تا مرحله‌ی اول اضافه کردن دامنه را به پایان برسانید.
      </p>
      <ZoomableImage src="/static/add-examplecom.png" />
      <p>
        بعد از اضافه کردن دامنه وارد صفحه‌ای مانند زیر می‌شوید که به شما وضعیت
        دامنه‌ی‌تان را نشان می‌دهد. همانطور که در بخش انتهایی تصویر پایین
        می‌بینید هنوز برنامه‌ خاصی را به این دامنه متصل نکرده‌اید. کافیست روی
        دکمه <b>انتخاب برنامه</b> کلیک کنید تا لیست برنامه‌های شما نمایش داده
        شود و سپس با انتخاب یکی از آ‌ن‌ها، دامنه شما به برنامه متصل می‌شود.
      </p>
      <ZoomableImage src="/static/domain-dns-wait.png" />
      <p></p>
      <li>
        <b>گام دوم: تنظیم‌کردن DNS Server</b>
      </li>
      <p>
        بعد از انجام مراحل گام اول، باید DNS های دامنه خود را نیز تنظیم کنید. در
        صورتی که به دنبال سرویس DNS خاصی برای مدیریت DNS های دامنه‌ی‌تان هستید
        ما به شما سرویس رایگان{" "}
        <a href="https://www.cloudflare.com/" target="_blank">
          Cloudflare
        </a>{" "}
        را پیشنهاد می‌کنیم.
      </p>
      <p>
        بعد از ثبت‌نام در سرویس Cloudflare باید دامنه‌ی خود را در آن ثبت کنید.
        این سرویس به شما NameServer هایی را خواهد داد که باید در پنل مدیریت
        دامنه‌ی‌تان آن‌ها را وارد کنید. (پنلی که از آن دامنه‌ی‌تان را خریداری
        کرده‌اید.)
      </p>
      <ZoomableImage src="/static/cloudflare-ns.png" />
      <br />
      <li>
        <b>گام سوم: تنظیم‌کردن DNS Record ها</b>
      </li>
      <p>
        بعد از اضافه کردن NS ها به پنل مدیریتی دامنه‌ی‌تان، باید DNS Record ها
        را در Cloudflare کانفیگ کنید. در حقیقت به وسیله DNS Record ها می‌توانیم
        آخرین حلقه باقی‌مانده از اتصال دامنه به برنامه‌ را انجام دهیم. به همین
        منظور کافیست وارد پنل مدیریت دامنه در Cloudflare شوید و رکورد‌های لازم
        را اضافه کنید. اول از همه نیاز دارید که یک رکورد TXT با عنوان{" "}
        <span className="code">liara-challenge</span> و مقداری که در پنل مدیریت
        دامنه‌ها در لیارا به شما داده شده است، اضافه کنید. سپس کافیست که یک
        رکورد CNAME برای دامنه‌ی‌تان اضافه کنید.
      </p>

      <Notice variant="info">
        چنانچه ارائه‌دهنده‌ی خدمات DNS شما از رکورد CNAME برای ریشه‌ی دامنه
        پشتیبانی نمی‌کند، شما می‌توانید از رکورد ALIAS و یا ANAME استفاده کنید.
      </Notice>

      <ZoomableImage src="/static/domain-records.png" />

      <br />
      <li>
        <b>گام چهارم و پایانی</b>
      </li>
      <p>
        بعد از انجام مراحل بالا، وارد پنل مدیریت دامنه‌های لیارا شوید و روی دکمه
        بررسی وضعیت کلیک کنید. اگر همه چیز سبز بود یعنی اتصال با موفقیت برقرار
        شده است.
      </p>
      <ZoomableImage src="/static/check-domain.png" />
    </ul>

    <h3 id="add-subdoamin">اضافه کردن زیر‌دامنه</h3>
    <p>
      اضافه کردن زیردامنه نیز همانند دامنه است. ابتدا در بخش دامنه‌های لیارا
      زیردامنه خود را اضافه کنید و به یک برنامه‌ متصل کنید و سپس DNS Record های
      آن را تنظیم کنید.
    </p>
    <ZoomableImage src="/static/subdomain.png" />

    <h3 id="faq">
      از دامنه‌های
      <span className="code">.ir</span>
      هم پشتیبانی می‌کنید؟
    </h3>
    <p>
      بله. محدودیتی از لحاظ TLD وجود ندارد و می‌توانید از هر پسوند دلخواهی
      استفاده کنید.
    </p>

    <h3>
      حتی بعد از تغییر DNS ها، وضعیت همچنان «در انتظار تغییر DNS ها...» است.
    </h3>
    <p>
      تغییر DNS های دامنه‌های <span className="code">.ir</span>
      ممکن است بین ۴ تا ۷۲ ساعت زمان‌بر باشد. سرعت اعمال این تغییرات وابسته به
      nic.ir است، بنابراین باید صبور باشید. معمولا دامنه‌های{" "}
      <span className="code">.com</span> خیلی سریع‌تر از{" "}
      <span className="code">.ir</span> به‌روز می‌شوند. در صورتی که بعد از طی
      این مدت، باز هم مورد رفع نشد، از طریق تیکت به پشتیبانی لیارا اطلاع دهید.
    </p>
    <Notice variant="info">
      برای مشاهده وضعیت DNS های دامنه‌ی‌تان در سراسر جهان، می‌توانید از وبسایت{" "}
      <a href="https://dnschecker.org/" target="_blank">
        dnschecker.org
      </a>{" "}
      استفاده کنید.
    </Notice>
  </Layout>
);
