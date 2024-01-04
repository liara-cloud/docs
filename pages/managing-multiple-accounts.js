import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Asciinema from "../components/Asciinema";
import ZoomableImage from "../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مدیریت حساب‌های کاربری - لیارا</title>
    </Head>

    <h1>مدیریت حساب‌های کاربری</h1>

    <p align="justify">
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/liara-features/managing-multiple-accounts.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p align="justify">
      به‌عنوان یک توسعه‌دهنده، دور از انتظار نیست که تصمیم داشته باشید محیط‌های
      کاری و پروژه‌های مختلف خود را به‌صورت جداگانه مدیریت کنید. حال تیم توسعه
      لیارا با افزودن برخی قابلیت‌های جدید امکان مدیریت چندین حساب کاربری مختلف
      را علاوه‌بر پنل کاربری، در <Link href="/cli/install">لیارا CLI</Link> نیز،
      فراهم کرده است.
    </p>
    <h4>فهرست عناوین</h4>
    <ul>
      <li>
        <Link href="#console">مدیریت حساب‌های کاربری در پنل کاربری</Link>
      </li>
      <li>
        <Link href="#cli">مدیریت حساب‌های کاربری در لیارا CLI</Link>
      </li>
      <li>
        <Link href="#choose_cli">انتخاب حساب کاربری در حین استقرار</Link>
      </li>
      <li>
        <Link href="#choose_json">انتخاب حساب کاربری در فایل liara.json</Link>
      </li>
    </ul>

    <h3 id="console">مدیریت حساب‌های کاربری در پنل کاربری</h3>
    <p align="justify">
      برای مدیریت چندین حساب مختلف در پنل کاربری لیارا می‌توانید پس از کلیک بر
      روی پروفایل فعلی خود، بر روی دکمه‌ی <strong>افزودن حساب کاربری</strong>{" "}
      کلیک کرده و حساب‌های دیگری را در کنار حساب فعلی اضافه کنید.
    </p>
    <ZoomableImage src="/static/managing-account.png" />

    <h3 id="cli">مدیریت حساب‌های کاربری در لیارا CLI</h3>
    <p align="justify">
      فرض را بر این بگیریم شما و شرکت‌تان حساب‌های کاربری مستقلی در لیارا داشته
      باشید. در قدم اول باید این حساب‌ها را به‌شکل زیر در لیارا CLI اضافه کنید:
    </p>
    <Asciinema id="453759" />
    <p align="justify">
      پس از افزودن حساب‌های کاربری باید به‌شکل زیر حساب کاربری مورد نظر را در
      زمان دیپلوی یا اجرای عملیات‌های دیگر انتخاب کنید:
    </p>
    <Asciinema id="453764" />

    <h3 id="choose_cli">انتخاب حساب کاربری در حین استقرار</h3>
    <p align="justify">
      شما می‌توانید با استفاده از دستور{" "}
      <span class="code">liara deploy --account account-name</span> و با استفاده
      از فیلد <span class="code">--account</span> حسابی که قصد دارید پروژه‌تان
      در آن مستقر شود را، انتخاب کنید:
    </p>
    <Asciinema id="deploy-on-specific-account" />

    <h3 id="choose-json">انتخاب حساب کاربری در فایل liara.json</h3>
    <p align="justify">
      همچنین، شما می‌توانید در مسیر اصلی پروژه یک فایل به نام{" "}
      <span class="code">liara.json</span> ایجاد کنید و محتوای آن را به شکل زیر
      بنویسید:
    </p>

    <Highlight className="json">
      {`{
    "account": "account_name"
}`}
    </Highlight>
    <p align="justify">
      در کد فوق کافیست که به جای account_name نام حساب مدنظرتان را وارد کنید؛ پس
      از اجرای دستور
      <span class="code">liara deploy</span> در صورت درست بودن نام حساب کاربری ،
      حساب به صورت خودکار تشخیص داده خواهد شد.
    </p>
    <p align="justify">
      برای کسب اطلاعات بیشتر می‌توانید مستندات نحوه‌ی{" "}
      <Link href="/cli/account">مدیریت حساب‌های کاربری</Link> با استفاده از
      لیارا CLI را مطالعه کنید.
    </p>
  </Layout>
);
