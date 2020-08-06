import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات مدیریت دیسک‌ها - سرویس ابری لیارا</title>
    </Head>

    <h1>دیسک‌ها</h1>
    <span className="page-description">(Disks)</span>

    <h2>مدیریت دیسک‌ها</h2>
    <h3>ساخت دیسک</h3>
    <p>
      برای این که بتوانید یک پوشه در برنامه‌ی‌تان را به یک دیسک در لیارا متصل
      کنید، ابتدا لازم است که دیسک را با اندازه‌ی دلخواه‌تان از صفحه‌ی «دیسک‌ها»
      بسازید. اگر برای اولین‌بار وارد صفحه‌ی دیسک‌ها شوید، با چنین صفحه‌ای رو به
      رو می‌شوید:
    </p>
    <ZoomableImage src="/static/disks/1.png" alt="صفحه‌ی خالی دیسک‌ها" />

    <p>با کلیک روی دکمه‌ی «ساخت دیسک» می‌توانید اولین دیسک‌تان را بسازید.</p>
    <ZoomableImage src="/static/disks/2.png" alt="صفحه‌ی ساخت دیسک" />

    <p>
      همان‌طور که مشاهده می‌کنید، نام دیسک را در تصویر برابر با
      <span className="code">disk1</span>
      قرار داده‌ایم و اندازه‌ی آن را ۲ گیگابایت وارد کرده‌ایم. با کلیک روی
      دکمه‌ی «ساخت دیسک»، دیسک ساخته می‌شود و در صفحه‌ی دیسک‌ها قابل مشاهده است.
    </p>
    <ZoomableImage src="/static/disks/3.png" alt="صفحه‌ی دیسک‌ها" />

    <Notice variant="info">
      توجه کنید که این دیسک در وضعیت «آماده به کار» قرار دارد و باید مسیر آن را
      از طریق فایل liara.json تعریف کنید تا به وضعیت «در حال استفاده» تغییر کند.
      در ادامه نحوه‌ی استفاده از دیسک توضیح داده می‌شود.
    </Notice>

    <p>
      به این نکته هم توجه داشته باشید که اگر دوباره به صفحه‌ی ساخت دیسک برگردیم،
      می‌توانیم دیسک‌های بیشتری را بسازیم. اما از آنجایی که قبلا دیسکی را
      ساخته‌ایم، الان فضای کمتری را برای ساخت دیسک خواهیم داشت که در تصویر زیر
      مشخص است. این فضا کاملا وابسته به پلن انتخابی شما برای برنامه‌تان است.
    </p>
    <ZoomableImage src="/static/disks/4.png" alt="صفحه‌ی ساخت دیسک" />
    <Notice variant="info">
      در صورتی که قصد دارید <span className="code">500 MB</span> فضا یعنی کمتر
      از <span className="code">1 GB</span> رزرو کنید کافیست که اندازه دیسک را{" "}
      <span className="code">0.5</span> وارد نمایید. به صورت کلی تا یک رقم اعشار
      می‌توانید برای اندازه دیسک‌ها استفاده کنید. مثلا{" "}
      <span className="code">0.2 GB</span>
    </Notice>

    <h3>تعریف مسیر دیسک</h3>
    <p>
      تعریف‌کردن مسیر دیسک به کمک فایل{" "}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">
        liara.json
      </Link>{" "}
      صورت می‌گیرد.
    </p>
    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "disk1",
      "mountTo": "uploads"
    }
  ]
}
`}
    </Highlight>
    <p>
      فیلد <span className="code">name</span>
      در واقع همان نام دیسکی است که ساخته‌اید. فیلد
      <span className="code">mountTo</span>
      هم مسیر پوشه‌ای است که قصد دارید دیسک در آنجا قرار بگیرد و اصطلاحا mount
      شود. همان‌طور که در این نمونه مشاهده می‌کنید، این مسیر به صورت نسبی وارد
      شده است. در صورت تمایل، به صورت مطلق و از ریشه‌ی برنامه هم می‌توانید
      آدرس‌دهی کنید. البته آدرس‌دهی مطلق را توصیه نمی‌کنیم.
    </p>
    <p>
      به عنوان مثالی دیگر، فرض کنید برای یک برنامه‌ی لاراولی قصد دارید که یک
      دیسک برای پوشه‌ی storage بسازید. در این صورت، از بخش دیسک‌ها یک دیسک با
      نام دلخواه مانند
      <span className="code">mydisk</span>
      بسازید و بعد تنظیمات زیر را داخل فایل
      <span className="code">liara.json</span>
      قرار داده و دیپلوی کنید:
    </p>
    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "mydisk",
      "mountTo": "storage"
    }
  ]
}
`}
    </Highlight>

    <h3>تعریف چندین دیسک</h3>
    <p>
      در حالتی که چندین دیسک دارید، می‌توانید آن‌ها را مانند نمونه‌ی زیر تعریف
      کنید:
    </p>
    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "disk1",
      "mountTo": "public/files"
    },
    {
      "name": "disk2",
      "mountTo": "storage/images"
    }
  ]
}
`}
    </Highlight>

    <h3>حذف‌ دیسک‌ها</h3>
    <p>
      با حذف دیسک‌ها در لیارا داده‌های مربوط به آن دیسک کاملا حذف شده و غیرقابل
      بازگشت هستند. قبل از حذف دیسک اطمینان حاصل کنید که دیسک درستی را حذف
      می‌کنید. همچنین اگر دیسکی در حال استفاده باشد امکان حذف آن نیست و باید
      حتما دیسک را از برنامه جدا کنید تا امکان حذف آن وجود داشته باشد. برای جدا
      کردن دیسک از برنامه کافیست در فایل{" "}
      <span className="code">liara.json</span> دیسک مربوطه را حذف نمایید.
      <Highlight className="json">
        {`{
  "disks": [
  ]
}
`}
      </Highlight>
      برای حذف کافیست از طریق پنل دیسک‌ها گزینه <b>حذف دیسک</b> را انتخاب کنیم:
    </p>
    <ZoomableImage src="/static/disks/remove.png" alt="صفحه‌ی حذف دیسک" />
    <a name="migrate" />
    <h3>
      مهاجرت از <span className="code">volume</span> به{" "}
      <span className="code">disks</span>
    </h3>
    <Notice variant="warning">
      نیازی به مطالعه‌ی این قسمت نیست، اگر قبلا از قابلیت
      <span className="code">volume</span>
      استفاده نمی‌کردید.
    </Notice>
    <p>
      همان‌طور که پیش‌تر گفته شد، قابلیت
      <span className="code">volume</span>
      منسوخ شده و ممکن است بخواهید که به قابلیت جدید
      <span className="code">disks</span>
      مهاجرت کنید. خوشبختانه این کار بسیار ساده‌است. نمونه‌ی زیر را در نظر
      بگیرید:
      <Highlight className="json">
        {`{
  "volume": "/var/www/html/storage"
}
`}
      </Highlight>
      حالا برای انتقال این
      <span className="code">volume</span>، فقط کافیست که فایل{" "}
      <span className="code">liara.json</span>
      را به شکل زیر تغییر دهید:
    </p>
    <Highlight className="json">
      {`{
  "disks": [
    {
      "name": "default",
      "mountTo": "/var/www/html/storage"
    }
  ]
}
`}
    </Highlight>
    <p>
      در این حالت، نام دیسک را حتما باید
      <span className="code">default</span>
      وارد کنید. حالا می‌توانید دستور
      <span className="code">liara deploy</span>
      را اجرا کنید. در این مرحله، دیگر هشدار منسوخ‌شدن قابلیت
      <span className="code">volume</span>
      را مشاهده نخواهید کرد.
    </p>
  </Layout>
);
