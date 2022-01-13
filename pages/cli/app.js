import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Asciinema from "../../components/Asciinema";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات مدیریت برنامه‌ها با استفاده از لیارا CLI - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <div className="page-title">
        <h1>رابط خط فرمان لیارا</h1>
        <span className="page-description">(Liara CLI)</span>
      </div>
    </div>

    <h4>مدیریت برنامه‌ها</h4>
    <Highlight className="bash">{`$ liara app`}</Highlight>
    <Asciinema id="452889" />
    <p>
      با اجرای این دستور می‌توانید دستورات مرتبط با مدیریت برنامه‌ها را مشاهده
      کنید.
    </p>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;app:create</li>
      <p dir="rtl" className="commandDescription">
        ۱. <Link href="#create">ایجاد یک برنامه جدید</Link>
      </p>

      <li>&nbsp;&nbsp;app:delete</li>
      <p dir="rtl" className="commandDescription">
        ۲. <Link href="#delete">حذف یک برنامه</Link>
      </p>

      <li>&nbsp;&nbsp;app:list</li>
      <p dir="rtl" className="commandDescription">
        ۳. <Link href="#list">مشاهده‌ی لیستی از برنامه‌های ایجاد شده</Link>
      </p>

      <li>&nbsp;&nbsp;app:logs</li>
      <p dir="rtl" className="commandDescription">
        ۴. <Link href="#logs">مشاهده‌ی لاگ‌های برنامه</Link>
      </p>

      <li>&nbsp;&nbsp;app:restart</li>
      <p dir="rtl" className="commandDescription">
        ۵. <Link href="#restart">ری‌استارت کردن برنامه</Link>
      </p>

      <li>&nbsp;&nbsp;app:shell</li>
      <p dir="rtl" className="commandDescription">
        ۶. <Link href="#shell">اتصال مستقیم به خط فرمان برنامه</Link>
      </p>

      <li>&nbsp;&nbsp;app:start</li>
      <p dir="rtl" className="commandDescription">
        ۷. <Link href="#start">روشن کردن برنامه</Link>
      </p>

      <li>&nbsp;&nbsp;app:stop</li>
      <p dir="rtl" className="commandDescription">
        ۸. <Link href="#stop">خاموش کردن برنامه</Link>
      </p>
    </ol>

    <h4 id="create">ایجاد یک برنامه جدید</h4>
    <Highlight className="bash">{`$ liara create`}</Highlight>
    <Asciinema id="452892" />
    <p>
      این دستور از شما شناسه برنامه، پلتفرم و مشخصات سخت‌افزاری مورد نیاز را
      می‌پرسد.
    </p>

    <h5>
      دستور <span className="code">liara app:create</span> یا به اختصار{" "}
      <span className="code">liara create</span> این پارامتر‌ها را می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد ایجاد آن را دارید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۲. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۳. اجرای آنی عملیات ایجاد برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری (مناسب ci/cd)
      </p>

      <li>&nbsp;&nbsp;--plan</li>
      <p dir="rtl" className="commandDescription">
        ۴. مشخص کردن پلن براساس منابع سخت‌افزاری مورد نیاز [ir-small, ir-medium,
        ir-standard, ir-standard-2x, ...] (مناسب ci/cd)
      </p>

      <li>&nbsp;&nbsp;--platform</li>
      <p dir="rtl" className="commandDescription">
        ۵. مشخص کردن پلتفرم [node, laravel, php, django, flask, netcore, react,
        angular, vue, static, docker] (مناسب ci/cd)
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۶. مشخص‌کردن موقعیت جغرافیایی (مناسب ci/cd)
      </p>
    </ol>

    <h4 id="delete">حذف یک برنامه</h4>
    <Highlight className="bash">{`$ liara delete`}</Highlight>

    <Asciinema id="452910" />

    <h5>
      دستور <span className="code">liara app:delete</span> یا به اختصار{" "}
      <span className="code">liara delete</span> این پارامتر‌ها را می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد ایجاد آن را دارید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۲. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۳. اجرای آنی عملیات ایجاد برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۴. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <h4 id="list">مشاهده‌ی لیستی از برنامه‌های ایجاد شده</h4>
    <Highlight className="bash">{`$ liara app:list`}</Highlight>

    <Asciinema id="452896" />

    <h5>
      دستور <span className="code">liara app:list</span> یا به اختصار{" "}
      <span className="code">liara app:ls</span> این پارامتر‌ها را می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۱. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--csv</li>
      <p dir="rtl" className="commandDescription">
        ۲. ارائه خروجی CSV از لیست حساب‌های اضافه شده
      </p>

      <li>&nbsp;&nbsp;--sort</li>
      <p dir="rtl" className="commandDescription">
        ۳. مرتب سازی لیست حساب‌های اضافه شده براساس Name, Platform, Plan, ...
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۴. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <h4 id="logs">مشاهده‌ی لاگ‌های برنامه</h4>
    <Highlight className="bash">{`$ liara logs`}</Highlight>

    <Asciinema id="452898" />

    <h5>
      دستور <span className="code">liara app:logs</span> یا به اختصار{" "}
      <span className="code">liara logs</span> این پارامتر‌ها را می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد ایجاد آن را دارید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۲. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;-s, --since</li>
      <p dir="rtl" className="commandDescription">
        ۳. نمایش لاگ‌ها براساس timestamp وارد شده
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۴. اجرای آنی عملیات ایجاد برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۵. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <h4 id="restart">ری‌استارت کردن برنامه</h4>
    <Highlight className="bash">{`$ liara restart`}</Highlight>
    <Asciinema id="452899" />
    <h5>
      دستور <span className="code">liara app:restart</span> یا به اختصار{" "}
      <span className="code">liara restart</span> این پارامتر‌ها را می‌پذیرد
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد ‌ری‌استارت آن را دارید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۲. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۳. اجرای آنی عملیات ری‌استارت برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۴. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <h4 id="shell">اتصال مستقیم به خط فرمان برنامه</h4>
    <Highlight className="bash">{`$ liara shell`}</Highlight>

    <Asciinema id="452907" />

    <h5>
      دستور <span className="code">liara app:shell</span> یا به اختصار{" "}
      <span className="code">liara shell</span> این پارامتر‌ها را می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد ‌ری‌استارت آن را دارید
      </p>

      <li>&nbsp;&nbsp;-c, --command</li>
      <p dir="rtl" className="commandDescription">
        ۲. دستوری که می‌خواهید در خط فرمان برنامه اجرا شود
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۳. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۴. اتصال مستقیم به خط فرمان برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۵. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <h4 id="start">روشن کردن برنامه</h4>
    <Highlight className="bash">{`$ liara start`}</Highlight>
    <Asciinema id="452900" />
    <h5>
      دستور <span className="code">liara app:start</span> یا به اختصار{" "}
      <span className="code">liara start</span> این پارامتر‌ها را می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد روشن کردن آن را دارید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۲. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۳. روشن کردن برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۴. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <h4 id="stop">خاموش کردن برنامه</h4>
    <Highlight className="bash">{`$ liara stop`}</Highlight>
    <Asciinema id="452902" />
    <h5>
      دستور <span className="code">liara app:stop</span> یا به اختصار{" "}
      <span className="code">liara stop</span> این پارامتر‌ها را می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد خاموش کردن آن را دارید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۲. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۳. خاموش کردن برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۴. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <br />
    <Link href="/cli/env">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
