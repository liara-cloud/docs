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
        <a href="#deploy">اولین استقرار</a>
      </li>
      <li>
        <a href="#installing-liara-cli">نصب Liara CLI</a>
      </li>
      <li>
        <a href="#login">ورود به حساب کاربری</a>
      </li>
    </ul>

    <h3 id="video">استقرار Docker Compose</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/tutorials/Docker/DockerCompose.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h3 id="deploy">اولین استقرار</h3>
    <p>
      در لیارا از فایل<span className="code">docker-compose</span> پشتیبانی
      نمی‌شود. اما در این مثال ما نحوه ایجاد یک پروژه متشکل از یک سرویس Docker و
      یک دیتابیس
      <span className="code">PostgreSQL</span>
      را توضیح می‌دهیم.
    </p>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم Docker و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه docker-starter را انتخاب کردیم. همچنین شما
      می‌توانید از طریق Liara CLI با دستور زیر برنامه‌ی خود را ایجاد کنید.
    </p>
    <Highlight className="json">{`liara create`}</Highlight>
    <p>
      اگر Liara CLI را روی سیستم‌تان نصب ندارید می‌توانید طبق مراحل زیر نصب
      کنید.
    </p>
    <p>
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
    <p>
      <b>گام دوم)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/databases/create" target="_blank">
        ایجاد دیتابیس‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب دیتابیس PostgreSQL و نوشتن شناسه دیتابیس موردنظرتان و در
      نهایت انتخاب پلن، دیتابیس خود را ایجاد کنید.
    </p>
    <p>
      <b>گام سوم)</b>
      در این بخش لازم است وارد پنل برنامه Docker که ایجاد کرده‌اید بروید، سپس در
      بخش تنظیمات، متغیر‌های محیطی برای اتصال به دیتابیس‌تان وارد کنید.
    </p>
    <p>
      <b>گام چهارم)</b>
      در این گام لازم است وارد روت پروژه‌تان شوید. سپس یک ترمینال باز کرده و
      دستور زیر را برای دیپلوی image موردنظرتان وارد کنید:
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
