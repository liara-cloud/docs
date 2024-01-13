import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Mattermost - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mattermost" />
      <div className="page-title">
        <h1>نرم‌افزار چت و ارتباطات تیمی Mattermost</h1>
        <span className="page-description">(Mattermost one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://mattermost.com/" target="_blank" rel="noopener">
        Mattermost
      </a>{" "}
      نرم‌افزاری برای چت و گفتگوی درون تیمی است که می‌تواند جایگزین خوبی برای
      Slack باشد.
    </p>

    <h3>🚀 راه‌اندازی</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/mattermost/create-mattermost.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      برای راه‌اندازی نرم‌افزار چت و ارتباطات تیمی Mattermost کافیست این برنامه
      را از بخش برنامه‌های آماده انتخاب کرده و شناسه مورد نظرتان را وارد کنید.
      درنهایت زمانیکه بر روی دکمه‌ی <b>ایجاد برنامه</b> کلیک کردید، لیارا به‌طور
      خودکار یک دیتابیس PostgreSQL راه‌اندازی و برنامه‌ی شما را به آن متصل
      می‌کند بنابراین نیازی نیست که شما درگیر نصب و پیکربندی دیتابیس شوید.
    </p>

    <Notice variant="info">
      برای اتصال دامنه‌ی اختصاصی به این برنامه کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کرده و طبق مستندات، دامنه‌ اختصاصی مورد نظرتان را به برنامه متصل
      کنید.
    </Notice>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4 id="upgrade">تغییر نسخه‌ی برنامه مستقر شده</h4>
    <p>
      برخی مواقع لازم شده که نسخه برنامه‌ی آماده‌ای که مستقر کردیم رو تغییر
      بدیم. برای مثال، نسخه جدیدی از آن برنامه منتشر شده و ما می‌خواهیم از آن
      استفاده بکنیم. نکته‌ای که باید قبل تغییر نسخه برنامه‌مان در نظر داشته
      باشیم، این است که آن نسخه با لیارا سازگاری داشته باشد و در صورتی که لازم
      باشد از دیسک‌ها برای مواردی همچون تغییرات در برنامه یا نگهداری اطلاعات‌مان
      استفاده بکنیم. یا حتی لازم باشد یک سری متغیر‌هایی در برنامه‌مان تنظیم
      کنیم. در اینجا شما می‌تونید یک نمونه ساده از تغییر نسخه را مشاهده کنید.
      برای شروع لازم هست ابتدا در سیستم لوکال فایلی تحت عنوان{" "}
      <span className="code">liara.json</span>
      ایجاد کنید و مقادیر زیر رو در اون قرار بدید:
    </p>
    <Highlight className="json">
      {`{
    "image": "mattermost/mattermost-team-edition:<your-version>",
    "port": 8065,
    "app": "<your-app-name>",
    "disks": [
      {
        "name": "logs",
        "mountTo": "/mattermost/logs"
      },
      {
        "name": "plugins",
        "mountTo": "/mattermost/plugins"
      },
      {
        "name": "client-plugins",
        "mountTo": "/mattermost/client/plugins"
      },
      {
        "name": "config",
        "mountTo": "/mattermost/config"
      },
      {
        "name": "temp",
        "mountTo": "/tmp"
      },
      {
        "name": "data",
        "mountTo": "/mattermost/data"
      }
  ]
}`}
    </Highlight>
    <p>
      در اینجا مقدار app، برابر هست با نام برنامه‌ای که در لیارا ایجاد کردید و
      مقدار image، برابر هست نام image برنامه‌تان. در قسمت port، پورتی که
      برنامه‌تان بر روی آن اجرا می‌شود و در قسمت disks، قرار داده شده است نام
      دیسک‌هایی که به صورت پیش‌فرض برای برنامه‌تان نیاز هست. در نهایت با{" "}
      <span className="code">liara-cli</span> و سپس دستور زیر برنامه‌تان مستقر
      کنید:
    </p>
    <Highlight className="json">{`liara deploy`}</Highlight>
  </Layout>
);
