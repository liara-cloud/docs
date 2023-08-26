import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات استقرار Docker Compose در برنامه‌های Docker - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="docker" />
      <div className="page-title">
        <h1>پلتفرم Docker</h1>
        <span className="page-description">(Docker Platform)</span>
      </div>
    </div>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#video">استقرار Docker Compose</a>
      </li>
      <li>
        <a href="#installing-liara-cli">نصب Liara CLI</a>
      </li>
      <li>
        <a href="#login">ورود به حساب کاربری</a>
      </li>
      <li>
        <a href="#deploy">اولین استقرار</a>
      </li>
    </ul>

    <h3 id="video">استقرار Docker Compose</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/docker/docker-compose.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h3 id="installing-liara-cli">نصب Liara CLI</h3>
    <p>
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
      شما می‌بایست در ریشه پروژه‌‌تان فایلی تحت عنوان
      <span className="code">docker-compose.yml</span> داشته باشید. این فایل
      متشکل از چند سرویس که در نهایت پس از اجرا شدن این امکان را به وجود می‌آورد
      که سرویس‌هایتان در یک شبکه خصوصی با هم در ارتباط باشند. کافیست به بخش
      ایجاد برنامه‌ها در لیارا بروید و برنامه‌های مرتبط با سرویس‌تان را ایجاد
      کنید. همچنین شما می‌توانید از طریق Liara CLI با دستور زیر برنامه‌های خود
      را ایجاد کنید.
    </p>
    <Highlight className="json">{`liara create`}</Highlight>
    <p>
      سپس بعد از ایجاد سرویس‌هایتان در لیارا می‌بایست متغیر‌های محیطی برنامه‌تان
      را در قسمت تنظیمات، در پنل برنامه‌تان وارد کنید. در نهایت شما می‌توانید با
      دستور زیر عملیات دیپلوی را انجام دهید.
    </p>
    <Highlight className="json">
      {`liara deploy --image <your-image-name> --port <your-port> --app <your-app-name>`}
    </Highlight>

    <br />

    <Link href="/app-deploy/docker/envs" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
