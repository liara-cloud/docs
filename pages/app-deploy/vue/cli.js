import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Vue با استفاده از ابزار Liara CLI - سرویس
        ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="vue" />
      <div className="page-title">
        <h1>پلتفرم VueJS</h1>
        <span className="page-description">(VueJS Platform)</span>
      </div>
    </div>

    <h3>استقرار با Liara CLI</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/vue/vue-cli.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    {/* <p>
    <h3 id="installing-liara-cli">نصب Liara CLI</h3>
      اگر Liara CLI را نصب ندارید می‌توانید با اجرای دستور زیر آن‌ را به‌راحتی
      نصب کنید: <Link href="/cli/install">توضیحات بیشتر</Link>
    </p>
    <pre>
      <code>{`$ npm install -g @liara/cli`}</code>
    </pre>
    <h3 id="login">ورود به حساب کاربری</h3>
    <p>
      برای ورود به حساب کاربری خود به وسیله Liara CLI کافیست دستور زیر را وارد
      کنید و ایمیل و رمزعبوری که با آن حساب کاربری خود را ایجاد کرده‌اید را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara login`}</code>
    </pre>
    <h3 id="deploy">اولین استقرار</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم NODEJS و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه nodejs-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> داخل فایل
      <span className="code">package.json</span>
      یک فیلد با نام
      <span className="code">scripts</span>
      وجود دارد. شما باید
      <b> حتما </b>
      یک اسکریپت در این بخش با نام
      <span className="code">start</span>
      تعریف کنید.
    </p>
    <Highlight className="json">
      {`{
  "name": "app",
  "version": "0.1.0",
  "description": "My application",

  "scripts": {
    "start": "node server.js"
  },

  "dependencies": {
    "express": "4"
  }
}`}
    </Highlight>
    <p>
      بعد از این‌که برنامه‌ی شما آپلود شد، لیارا برای شما دستور
      <span className="code">npm start</span>
      را اجرا می‌کند. شما باید داخل این اسکریپت، دستوری بنویسید که باعث اجرا شدن
      برنامه‌ی‌تان شود. مثلا اگر یک فایل
      <span className="code">server.js</span>
      در برنامه‌ی‌تان وجود دارد که باید توسط node اجرا شود، باید
      <span className="code">node server.js</span>
      را داخل فیلد
      <span className="code">start</span>
      قرار دهید. (مانند نمونه‌ی بالا)
    </p>
    <Notice variant="warning">
      توجه داشته باشید که لیارا به‌طور خودکار در فرایند استقرار برنامه‌های
      NodeJS دستور <span className="code">npm run build</span> را اجرا می‌کند.
    </Notice>
    <p>
      <b>گام سوم)</b> کافیست وارد ریشه برنامه‌ی‌تان شده و به وسیله دستور زیر
      اولین استقرار خود را اجرا کنید. بعد از وارد کردن این دستور، از شما شناسه
      برنامه‌ موردنظرتان پرسیده می‌شود و بعد از انتخاب شناسه، پورتی که برنامه‌ی
      شما روی آن
      <span className="code">listen</span>
      می‌کند و اصطلاحا گوش می‌دهد پرسیده خواهد شد. برای مثال، چنانچه در لوکال و
      روی کامپیوتر خودتان برنامه روی پورت
      <span className="code">8000</span>
      اجرا می‌شود، باید
      <span className="code">8000</span>
      را به عنوان پاسخ وارد کنید.
    </p>
    <pre>
      <code>{`$ liara deploy`}</code>
    </pre>
    <p>
      Liara CLI به صورت خودکار، تشخیص خواهد داد که برنامه‌ی شما را باید به عنوان
      یک برنامه‌ی NodeJS اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر
      مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>{`$ liara deploy --platform=node`}</code>
    </pre>
    <Notice variant="info">
      برنامه‌ی شما حتما باید دارای فایل
      <span className="code">package.json</span> باشد تا بتواند در لیارا مستقر
      شود.
    </Notice>
    <Notice variant="info">
      لیارا به صورت خودکار پکیج‌هایی که در فایل
      <span className="code">package.json</span>
      لیست شده‌اند را برای شما نصب می‌کند. پس نیازی ندارید که به دنبال اجرای
      دستور
      <span className="code">npm install</span>
      باشید. از آن‌جایی که اجرای این دستور زمان‌بر است، برای سرعت بیشتر، این
      دستور را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر
      نمانید.
    </Notice>
    <p>
      <b>گام چهارم و پایانی)</b> بعد از اجرای دستورات گام‌های قبلی، لیارا به
      برنامه شما یک زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن
      شوید که برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این
      آدرس بر اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p> 

    <p dir="ltr">https://nodejs-starter.liara.run</p>
    */}

    <Link href="/app-deploy/vue/logs">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
