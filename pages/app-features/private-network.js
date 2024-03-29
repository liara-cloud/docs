import Head from "next/head";
import Layout from "../../components/Layout";
import Highlight from "react-highlight";
import ZoomableImage from "../../components/ZoomableImage";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شبکه‌ی خصوصی - لیارا</title>
    </Head>

    <h1>شبکه‌ی خصوصی</h1>
    <span className="page-description">(Private Network)</span>

    <p>
      شبکه‌ی خصوصی در لیارا این امکان را فراهم آورده تا برنامه‌های شما با سرعت و
      امنیت بیشتری بدون وجود محدودیت در پروتکل‌ها با هم ارتباط برقرار کنند.
      اکنون شما می‌توانید در لیارا، هر پروژه را در شبکه مخصوص خودش، مستقر کنید.
    </p>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#what-is-private-network">کاربرد شبکه خصوصی چیست؟</a>
      </li>
      <li>
        <a href="#create-private-network">ساخت شبکه خصوصی جدید</a>
      </li>
      <li>
        <a href="#set-private-network">
          تنظیم شبکه خصوصی برای هر برنامه و دیتابیس
        </a>
      </li>
      <li>
        <a href="#connect-platform">
          نحوه‌ی اتصال دو برنامه به یکدیگر در شبکه‌ی خصوصی
        </a>
      </li>
      <li>
        <a href="#connect-db">نحوه‌ی اتصال برنامه به دیتابیس در شبکه‌ی خصوصی</a>
      </li>
      <li>
        <a href="#common-network">برنامه‌های درون شبکه خصوصی مشترک</a>
      </li>
    </ul>

    <h3 id="what-is-private-network">کاربرد شبکه خصوصی چیست؟</h3>
    <p align="justify">
      شاید تا به حال بارها برای شما پیش آمده باشد که در حال کار بر روی چندین
      پروژه متفاوت باشید و پروژه‌های مختلفی را در پنل کاربری خود، مستقر
      کرده‌باشید.
    </p>

    <p align="justify">
      به عنوان مثال فرض کنید که یک پروژه وبسایت فروشگاه لوازم الکترونیکی دارید و
      پروژه دومتان یک اپلیکیشن اندرویدی است. هر کدام از این دو پروژه، پلتفرم و
      دیتابیس‌های خاص خود را دارند اما تشخیص اینکه هر برنامه یا دیتابیس مربوط به
      کدام پروژه است؛ ممکن است کمی برای شما وقت‌گیر و خسته کننده باشد.
    </p>

    <p align="justify">
      لیارا این مشکل را برای شما حل کرده است؛ شما می‌توانید در لیارا، پروژه‌ها و
      برنامه‌هایی که به یکدیگر مرتبط نیستند و با هم هیچ ارتباطی ندارند را در
      شبکه‌های خصوصی متفاوت از هم، مستقر کنید. این کار نه تنها باعث سهولت و
      افزایش نظم در تشخیص پروژه‌ها می‌شود؛ بلکه به صورت کامل ارتباط دو برنامه
      غیرمرتبط با همدیگر را، برای همیشه قطع می‌کند. و اینگونه شما می‌توانید بدون
      کمترین نگرانی، پروژه‌های متعدد خود را در لیارا مستقر کنید.
    </p>

    <h3 id="create-private-network">ساخت شبکه خصوصی جدید</h3>
    <p align="justify">
      اگر که نیاز به شبکه خصوصی جدید دارید و قصد دارید که برنامه یا دیتابیس جدید
      خود را در شبکه جدیدی قرار بدهید؛ کافیست که در صفحات ساخت برنامه یا ساخت
      دیتابیس جدید، در قسمت شبکه خصوصی، بر روی گزینه ساخت شبکه خصوصی جدید کلیک
      کنید:{" "}
    </p>
    <br></br>
    <ZoomableImage
      src="/static/create-private-network.png"
      alt="ساخت شبکه خصوصی جدید در حین ساخت یک برنامه یا دیتابیس جدید در لیارا"
    ></ZoomableImage>
    <br></br>
    <p align="justify">
      سپس کافیست در قسمت نام شبکه، یک نام دلخواه برای شبکه خصوصی جدید انتخاب
      کنید و پس از آن بر روی گزینه ایجاد شبکه، کلیک کنید:
    </p>
    <br></br>
    <ZoomableImage
      src="/static/naming-private-network.png"
      alt="نحوه ایجاد و نام‌گذاری شبکه خصوصی جدید"
    ></ZoomableImage>
    <br></br>
    <p>
      اکنون شبکه شما ساخته شده و می‌توانید برنامه‌های مد نظر خود را در آن شبکه،
      ایجاد کنید.
    </p>

    <h3 id="set-private-network">تنظیم شبکه خصوصی برای هر برنامه و دیتابیس</h3>
    <p>
      برای اینکه برنامه یا دیتابیس جدید را در شبکه خصوصی مدنظرخود قراردهید،
      کافیست تا در قسمت شبکه خصوصی، نام شبکه خود را انتخاب کنید تا برنامه یا
      دیتابیس، در آن مستقر شود و با برنامه‌ها و دیتابیس‌های دیگر موجود در آن
      شبکه، ارتباط برقرار کند.
    </p>
    <br></br>
    <ZoomableImage
      src="/static/set-private-network.png"
      alt="تنظیم شبکه خصوصی برای هر برنامه یا دیتابیس"
    ></ZoomableImage>
    <br></br>
    <p align="justify">
      پس از اینکه برنامه یا دیتابیس ساخته شد، در قسمت اطلاعات کلی آن، می‌توانید
      نام شبکه را نیز مشاهده بفرمایید:
    </p>
    <br></br>
    <ZoomableImage
      src="/static/app-private-network.png"
      alt="مشاهده نام شبکه خصوصی برنامه در صفحه اطلاعات کلی آن"
    ></ZoomableImage>

    <h3 id="connect-platform">
      نحوه‌ی اتصال دو برنامه به یکدیگر در شبکه‌ی خصوصی
    </h3>
    <p align="justify">
      فرض کنید برای ارائه‌ی پیشنهاد‌های بهتر به مشتریان فروشگاه اینترنتی خود
      تصمیم گرفته‌اید مشخصات کاربران را به‌منظور تحلیل در اختیار برنامه‌ای دیگر
      قرار دهید. بنابراین این نیاز به‌وجود خواهد آمد که فروشگاه شما اطلاعات
      کاربران را به‌صورت ایمن و با سرعت بالا در اختیار برنامه‌ای دیگر قرار دهد و
      به همین شکل نتیجه‌ی تحلیل‌ها را دریافت کند.
    </p>
    <p align="justify">
      فروشگاه فرضی ما با Node.js و برنامه‌‌ای که اطلاعات کاربران را تحلیل می‌کند
      با Python توسعه داده شده است و به‌ترتیب شناسه‌‌های برنامه‌های ما،{" "}
      <span className="code">market</span> و{" "}
      <span className="code">market-ai</span> هستند. حال براساس سناریو فعلی نیاز
      داریم که مشخصات کاربران را از فروشگاه به برنامه market-ai ارسال کنیم و این
      کار به شکل زیر انجام خواهد شد:
    </p>
    <Highlight className="javascript">
      {`const axios = require('axios')

axios
.post('http://market-ai:2597/analyze', {
  age: '26',
  weight: '110',
  height: '190'
})
.then(res => {
  console.log(\`statusCode: \${res.status}\`)
  console.log(res)
})
.catch(error => {
  console.error(error)
})`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که برای دسترسی یک برنامه به برنامه‌ای دیگر، هر دو برنامه
      باید در یک شبکه خصوصی مشترک قرار گرفته باشند و تنها کافی است که شناسه‌‌ی
      برنامه به‌عنوان host وارد شود و همچنین فراموش نکنید که مقادیر port و
      endpoint را مشخص کنید.
    </Notice>

    <h3 id="connect-db">نحوه‌ی اتصال برنامه به دیتابیس در شبکه‌ی خصوصی</h3>
    <p align="justify">
      فرض کنید سرعت و امنیت از شاخصه‌های کلیدی برنامه‌‌های شما هستند و به همین
      منظور می‌خواهید فقط برنامه‌‌های شما به دیتابیس‌هایتان دسترسی داشته باشند.
      بنابراین در قدم اول باید دسترسی از طریق شبکه‌ی عمومی را در زمان راه‌اندازی
      دیتابیس غیرفعال کنید.
    </p>
    <br></br>
    <ZoomableImage
      src="/static/db-access.png"
      alt="غیرفعال کردن دسترسی از طریق شبکه‌ی عمومی در زمان راه‌اندازی دیتابیس"
    ></ZoomableImage>

    <Notice variant="info">
      البته درصورتی که دیتابیس شما از طریق شبکه‌ی عمومی در دسترس باشد، باز هم
      این امکان وجود دارد که برنامه‌های شما از طریق شبکه‌ی خصوصی به دیتابیس متصل
      شوند. البته اگر که در یک شبکه خصوصی مشترک قرار گرفته باشند.
    </Notice>
    <br></br>
    <p align="justify">
      درنهایت پس از راه‌اندازی دیتابیس و انتخاب شبکه خصوصی، می‌توانید وارد بخش{" "}
      <b>نحوه‌ی اتصال</b> دیتابیس شده و از آن اطلاعات برای اتصال به دیتابیس خود
      استفاده کنید. توجه داشته باشید فقط در صورتی می‌توانید یک برنامه را به
      دیتابیس متصل کنید که هر دو در یک شبکه خصوصی مشترک قرار گرفته باشند.
    </p>
    <br></br>
    <ZoomableImage
      src="/static/db-connect.png"
      alt="غیرفعال کردن دسترسی از طریق شبکه‌ی عمومی در زمان راه‌اندازی دیتابیس"
    ></ZoomableImage>

    <h3 id="common-network">برنامه‌های درون شبکه خصوصی مشترک</h3>
    <p align="justify">
      زین‌پس برای این‌که راحت‌تر برنامه‌ها و دیتابیس‌های درون یک شبکه خصوصی
      مشترک را تشخیص دهید، می‌توانید از رنگ‌بندی متمایز هر شبکه که در کنار سطر
      هر برنامه قرار گرفته است، استفاده کنید؛ بدیهی است که برنامه‌های با رنگ
      یکسان، در یک شبکه خصوصی مشترک قرار دارند:
    </p>
    <br></br>
    <ZoomableImage
      src="/static/different-private-networks.png"
      alt="تنظیم شبکه خصوصی برای هر برنامه یا دیتابیس"
    ></ZoomableImage>
  </Layout>
);
