import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های NodeJS</h1>
    <span className="pageDescription">(NodeJS Apps)</span>

    <h3>استقرار اولین برنامه</h3>
    <h3>- نصب liara cli</h3>
    <p>
      اگر liara cli را نصب ندارید میتوانید به وسیله دستور زیر آن‌ را به‌راحتی
      نصب کنید:
    </p>
    <pre>
      <code>{`$ npm install -g @liara/cli`}</code>
    </pre>
    <h3>- ورود به حساب</h3>
    <p>
      برای ورود به حساب کاربری خود به وسیله liara cli کافیست دستور زیر را وارد
      کنید و ایمیل و رمزعبوری که با آن حساب کاربری خود را ایجاد کرده اید را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara login`}</code>
    </pre>
    <h3>- اولین استقرار!</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم NODEJS و نوشتن شناسه برنامه‌موردنظرتان و در نهایت
      انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش برای
      پروژه تست‌مون، شناسه nodejs-starter را انتخاب کردیم.
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
    <pre>
      <code>
        {`{
  "name": "app",
  "version": "0.1.0",
  "description": "My application",`}
        <b>
          {`
  "scripts": {
    "start": "node server.js"
  },`}
        </b>
        {`
  "dependencies": {
    "express": "4"
  }
}`}
      </code>
    </pre>
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
    <p>
      <b>گام سوم)</b> کافیست وارد ریشه پروژه‌ی‌تان شده و به وسیله دستور زیر
      اولین استقرار خود را اجرا کنید. بعد از وارد کردن، دستور از شما شناسه
      برنامه‌ موردنظرتان را میپرسد و بعد از انتخاب شناسه، از شما پورت
      برنامه‌ی‌تان را میپرسد، برای مثال ممکن است برنامه‌ی شما روی پورت 8000 گوش
      میدهد پس باید به لیارا نیز این پورت را اعلام کنید و بعد از آن لیارا عملیات
      استقرار را شروع میکند.
    </p>
    <pre>
      <code>{`$ liara deploy --platform=node`}</code>
    </pre>
    <Notice variant="info">
      برنامه‌ی شما باید دارای فایل<span className="code">package.json</span>{" "}
      باشد تا بتواند در لیارا مستقر شود.
    </Notice>
    <Notice variant="info">
      میتوانید <span className="code">--platform=node</span> را در دستور وارد
      نکنید، زیرا لیارا به صورت خودکار تشخیص میدهد که برنامه شما از چه پلتفرمی
      استفاده میکند.
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
      برنامه شما یک زیردامنه رایگان اختصاص میدهد که به وسیله آن میتوانید مطمئن
      شوید که برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این
      آدرس بر اساس شناسه برنامه‌ی شما میباشد، برای نمونه:
    </p>

    <p dir="ltr">
      <a href="https://nodejs-starter.liara.run/" target="_blank">
        https://nodejs-starter.liara.run
      </a>
    </p>

    <Link href="/app-deploy/nodejs/envs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
