import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات دستورات رابط خط فرمان لیارا Liara CLI - سرویس ابری لیارا
      </title>
    </Head>

    <h1>رابط خط فرمان لیارا</h1>
    <span className="page-description">(Liara CLI)</span>

    <h3>ورود به حساب کاربری</h3>
    <p>
      <code>$ liara login</code>
    </p>
    <p>
      این دستور از شما موقعیت جغرافیایی، نام کاربری و رمزعبوری که با آن در لیارا ثبت نام کرده‌اید
      را می‌پرسد.
    </p>

    <h3>نسخه cli</h3>
    <p>
      <code>$ liara -v</code>
    </p>

    <h3>دیدن راهنمای دستورات در ترمینال</h3>
    <p>
      <code>$ liara help</code>
    </p>

    <h3>استقرار یک برنامه</h3>
    <p>
      <code>$ liara deploy</code>
    </p>
    <p>دستور deploy این پارامتر‌ها را میپذیرد:</p>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        (1) شناسه برنامه‌ای که قصد دارید مستقر کنید.
      </p>
      {/* <li>&nbsp;&nbsp;-d, --debug</li>
      <p dir="rtl" className="commandDescription">
        (2) فعال کردن نمایش لاگ‌های داخلی Liara CLI
      </p> */}
      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        (2) نمایش راهنما
      </p>
      <li>&nbsp;&nbsp;-m, --message</li>
      <p dir="rtl" className="commandDescription">
        (3) در نظر گرفتن پیامی برای این استقرار، مثلا fix the user login bug
      </p>
      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        (4) اجرای عملیات استقرار بدون login کردن و به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        (مناسب ci/cd)
      </p>
      <li>&nbsp;&nbsp;--detach</li>
      <p dir="rtl" className="commandDescription">
        (5) عدم نمایش لاگ‌ها بعد از هر استقرار
      </p>
      <li>&nbsp;&nbsp;--path</li>
      <p dir="rtl" className="commandDescription">
        (6) آدرس ریشه برنامه‌ای که قصد استقرار آن را دارید
      </p>
      <li>&nbsp;&nbsp;--platform</li>
      <p dir="rtl" className="commandDescription">
        (7) مشخص کردن پلتفرم [larave, flask, node, vue, react, angular,static,
        django, netcore]
      </p>
      <li>&nbsp;&nbsp;--port=port</li>
      <p dir="rtl" className="commandDescription">
        (8) مشخص کردن port ای که برنامه شما به آن گوش می‌دهد.
      </p>
      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        (9) مشخص‌کردن موقعیت جغرافیایی
        (مناسب ci/cd)
      </p>
    </ol>

    <h3>دیدن لاگ‌های برنامه‌ها</h3>
    <p>
      <code>$ liara logs</code>
    </p>
    <p>دستور logs این پارامتر‌ها را میپذیرد:</p>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        (1) شناسه برنامه‌ای که قصد دارید لاگ‌های آن را مشاهده کنید.
      </p>
      {/* <li>&nbsp;&nbsp;-d, --debug</li>
      <p dir="rtl" className="commandDescription">
        (2) فعال کردن نمایش لاگ‌های داخلی Liara CLI
      </p> */}
      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        (2) نمایش راهنما
      </p>
      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        (3) دیدن لاگ‌ها بدون login کردن و به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
      </p>
      <li>&nbsp;&nbsp;-s, --since</li>
      <p dir="rtl" className="commandDescription">
        (4) مشخص کردن این‌ که لاگ‌ها از چه تاریخی به بعد نمایش داده شود با فرمت
        unixtimestamp
      </p>
      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        (5) مشخص‌کردن موقعیت جغرافیایی
        (مناسب ci/cd)
      </p>
    </ol>

    <h3>روشن کردن برنامه</h3>
    <p>
      <code>$ liara start</code>
    </p>

    <p dir="rtl">
      کافیست شناسه برنامه خود را به این دستور پاس دهید مثلا: liara start
      ProjectName
    </p>

    <h3>خاموش کردن برنامه</h3>
    <p>
      <code>$ liara stop</code>
    </p>

    <p dir="rtl">
      کافیست شناسه برنامه خود را به این دستور پاس دهید مثلا: liara stop
      ProjectName
    </p>

    <h3>ری‌استارت کردن برنامه</h3>
    <p>
      <code>$ liara restart</code>
    </p>

    <p dir="rtl">
      کافیست شناسه برنامه خود را به این دستور پاس دهید مثلا: liara restart
      ProjectName
    </p>

    <h3>ایجاد اتصال امن به دیتابیس‌ها</h3>
    <p>
      <code>$ liara tunnel:open</code>
    </p>

    {/* <p dir="rtl">
      برای کسب اطلاعات بیشتر به{" "}
      <a href="" target="_blank">
        اتصال امن به دیتابیس‌ها
      </a>{" "}
      مراجعه کنید.
    </p> */}

    <h3>قطع اتصال امن به دیتابیس‌ها</h3>
    <p>
      <code>$ liara tunnel:close</code>
    </p>

    <p dir="rtl">
      برای کسب اطلاعات بیشتر به{" "}
      <a href="/databases/tunnel" target="_blank">
        اتصال امن به دیتابیس‌ها
      </a>{" "}
      مراجعه کنید.
    </p>
  </Layout>
);
