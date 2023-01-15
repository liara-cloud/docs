import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Asciinema from "../../components/Asciinema";

export default () => (
  <Layout>
    <Head>
      <title>مستندات استقرار برنامه با استفاده از لیارا CLI - لیارا</title>
    </Head>

    <div className="page-head">
      <div className="page-title">
        <h1>رابط خط فرمان لیارا</h1>
        <span className="page-description">(Liara CLI)</span>
      </div>
    </div>

    <h4>استقرار برنامه</h4>
    <Highlight className="bash">{`$ liara deploy`}</Highlight>
    <Asciinema id="452876" />
    <p>
      این دستور از شما شناسه برنامه‌ای که قصد دارید پروژه‌تان در آن مستقر شود را
      می‌پرسد.
    </p>

    <h5>
      دستور <span className="code">liara deploy</span> این پارامتر‌ها را
      می‌پذیرد:
    </h5>
    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد دارید پروژه‌تان در آن مستقر شود
      </p>

      <li>&nbsp;&nbsp;-d, --disks</li>
      <p dir="rtl" className="commandDescription">
        ۲. اتصال یک یا چند دیسک به مسیرهای مورد نظر، برای مثال:
        disk-name:/var/www/html
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۳. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;-i, --image</li>
      <p dir="rtl" className="commandDescription">
        ۴. استقرار مستقیم Image از DockerHub
      </p>

      <li>&nbsp;&nbsp;-m, --message</li>
      <p dir="rtl" className="commandDescription">
        ۵. در نظر گرفتن پیامی برای این استقرار، مثلا fix the user login bug
      </p>

      <li>&nbsp;&nbsp;-p, --port=port</li>
      <p dir="rtl" className="commandDescription">
        ۶. پورتی که برنامه‌ی شما بر روی آن Listen می‌کند
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۷. اجرای آنی عملیات استقرار به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری (مناسب ci/cd)
      </p>

      <li>&nbsp;&nbsp;--detach</li>
      <p dir="rtl" className="commandDescription">
        ۸. عدم نمایش لاگ‌ها بعد از هر استقرار
      </p>

      <li>&nbsp;&nbsp;--path</li>
      <p dir="rtl" className="commandDescription">
        ۹. آدرس ریشه پروژه‌ای که قصد استقرار آن را دارید
      </p>

      <li>&nbsp;&nbsp;--platform</li>
      <p dir="rtl" className="commandDescription">
        ۱۰. مشخص کردن پلتفرم [node, laravel, php, django, flask, netcore, react,
        angular, vue, static, docker]
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۱۱. مشخص‌کردن موقعیت جغرافیایی (مناسب ci/cd)
      </p>
    </ol>

    <br />
    <Link href="/cli/disk">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
