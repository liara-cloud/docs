import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال امن به دیتابیس‌های ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>اتصال امن به دیتابیس‌ها</h1>
    <span className="page-description">(Secure SSH Tunnel to Databases)</span>

    <Notice variant="info">
      در حال حاضر از این قابلیت در دیتاسنتر ایران پشتیبانی نمی‌کنیم و تنها روش
      اتصال به دیتابیس‌ها در ایران، به‌صورت مستقیم و بدون تونل است.
    </Notice>

    <p>
      زمانی که دیتابیسی را در پنل کاربری لیارا تهیه می‌کنید، اطلاعات اتصال{" "}
      <b>«مستقیم»</b> به دیتابیس به شما نمایش داده می‌شود که با استفاده از این
      اطلاعات می‌توانید برنامه‌ی‌تان را به دیتابیس وصل کنید.
      <br />
      اما زمانی که قصد دارید از لوکال و در واقع کامپیوتر خودتان به دیتابیس وصل
      شده تا داده‌های‌تان را مشاهده کرده و کوئری‌هایی را اجرا کنید، لازم است که
      از روش امن‌تری برای اتصال به دیتابیس استفاده کنید.
    </p>
    <p>
      برای این کار می‌توانید از یک تونل SSH استفاده کنید. در واقع، با این تونل،
      پورت دیتابیس به یک پورت مشخص در کامپیوترتان وصل می‌شود و حالا شما با اتصال
      به این پورت مشخص در لوکال‌هاست، به دیتابیس اصلی متصل می‌شوید. Liara CLI
      همه‌ی کارهای لازم را به صورت خودکار برای‌تان انجام می‌دهد. بنابراین، شما
      هر زمان که قصد اتصال به دیتابیسی را از کامپیوتر خودتان داشتید، فقط لازم
      است که اقدامات زیر را انجام دهید.
    </p>

    <Notice variant="info">
      اتصال امن برای همه دیتابیس های لیارا قابل استفاده است، فرقی نمی‌کند شما از
      Redis استفاده می‌کنید یا از MongoDB یا ... .شما از اتصال امن می‌توانید
      برای اتصال به هر دیتابیسی استفاده کنید.
    </Notice>

    <h3>ایجاد یک تونل امن</h3>
    <Notice variant="warning">
      توجه داشته باشید که این قابلیت در نسخه‌های جدید لیارا CLI حذف شده و برای
      اتصال امن به دیتابیس‌ها باید نسخه‌ی 2.8.7 Liara CLI را با اجرای دستور زیر
      نصب کرده باشید.{" "}
      <Link href="/clients/cli" title="مستندات CLI">
        اطلاعات بیشتر
      </Link>
    </Notice>
    <Highlight className="bash">{`npm i -g @liara/cli@2.8.7`}</Highlight>
    <p>
      و حالا با اجرای دستور زیر، لیست دیتابیس‌های فعال شما نمایش داده می‌شود که
      بر حسب تاریخ ساخت، مرتب شده‌اند. با انتخاب دیتابیس مورد نظر، تونل روی
      لوکال‌هاست و یک پورتی تصادفی ایجاد می‌شود.
    </p>
    <pre>
      <code>{`liara tunnel:open`}</code>
    </pre>
    <p>
      توجه داشته باشید که این دستور را به هر تعداد که نیاز داشته باشید می‌توانید
      اجرا کنید و هر بار برای آن دیتابیس، پورت جدیدی دریافت خواهید کرد. برای
      مثال، اگر یک دیتابیس MySQL و همین‌طور یک دیتابیس Redis دارید، می‌توانید
      این دستور را ۲ بار اجرا کرده تا ۲ تونل ایجاد شود.
    </p>

    <p>در ویدیوی زیر، می‌توانید راهنمای عملی این قابلیت را مشاهده کنید:</p>
    <a href="https://asciinema.org/a/296170" target="_blank">
      <img src="https://asciinema.org/a/296170.svg" />
    </a>

    <h3>بستن تونل‌ها</h3>
    <p>
      بعد از اتمام کارتان، با اجرای دستور زیر، می‌توانید تمام تونل‌های باز را
      ببندید:
    </p>
    <pre>
      <code>{`liara tunnel:close`}</code>
    </pre>
  </Layout>
);
