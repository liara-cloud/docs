import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>ASP.Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Framework)</span>

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
      بروید و با انتخاب پلتفرم ASP.NET CORE و نوشتن شناسه برنامه‌موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای پروژه تست‌مون، شناسه dotnet-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> کافیست وارد ریشه پروژه‌ی‌تان شده و به وسیله دستور زیر
      اولین استقرار خود را اجرا کنید. بعد از وارد کردن، دستور از شما شناسه
      برنامه‌ موردنظرتان و پورتی که روی آن اجرا میشود را میپرسد و بعد از انتخاب
      شناسه و وارد کردن پورت، لیارا عملیات استقرار را شروع میکند.
    </p>
    <pre>
      <code>{`$ liara deploy --platform=netcore`}</code>
    </pre>
    <Notice variant="info">
      میتوانید <span className="code">--platform=netcore</span> را در دستور وارد
      نکنید، زیرا لیارا به صورت خودکار تشخیص میدهد که برنامه شما از چه پلتفرمی
      استفاده میکند.
    </Notice>
    <Notice variant="info">
      لیارا به صورت خودکار پکیج‌های برنامه‌ی شما را نصب می‌کند. پس نیازی ندارید
      که به دنبال اجرای دستورات
      <span className="code">dotnet restore</span>
      باشید. از آن‌جایی که اجرای این دستورات زمان‌بر است، برای سرعت بیشتر، این
      دستورات را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر
      نمانید.
    </Notice>
    <Notice variant="info">
      برنامه‌ی شما باید دارای فایل
      <span className="code">.csproj</span>
      باشد تا بتواند در لیارا مستقر شود.
    </Notice>
    <h3>- بررسی سلامت استقرار</h3>
    <p>
      {" "}
      بعد از اجرای دستورات گام‌های قبلی، لیارا به برنامه شما یک زیردامنه رایگان
      اختصاص میدهد که به وسیله اون میتونید مطمئن بشید که برنامه به بستر لیارا
      منتقل شده یا نه. این آدرس برای پروژه تستی‌مون این شکلی میباشد:{" "}
      <a href="https://dotnet-starter.liara.run/" target="_blank">
        https://dotnet-starter.liara.run
      </a>
    </p>

    <Link href="/apps/netcore/envs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
