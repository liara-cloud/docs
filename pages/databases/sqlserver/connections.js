import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس SQL Server</h1>
    <span className="pageDescription">(SQL Server Database)</span>

    <h3>راه‌های اتصال به SQL Server</h3>
    <p>
      در صورتی که قصد دارید داده‌های دیتابیس‌‌تان را ببینید و در یک محیط گرافیکی
      یا کامندلاینی به مدیریت دیتابیس‌‌تان بپردازید، میتوانید از راه‌های زیر
      اقدام کنید:
    </p>
    <ul>
      <li>
        <b>استفاده از Azure Data Studio</b>
      </li>
      <p>
        بعد از نصب{" "}
        <a href="https://github.com/microsoft/azuredatastudio" target="_blank">
          Azure Data Studio
        </a>{" "}
        کافیست با دادن اطلاعات دیتابیس connect شوید. توجه داشته باشید که در فیلد
        Server پورت را با علامت "," جدا کرده‌ایم. یعنی:{" "}
        <span className="code">s11.liara.ir,34472</span>
      </p>
      <ZoomableImage src="/static/databases/sqlserver-azurestudio.png" />

      <br />
      <li>
        <b>استفاده از sqlcmd</b>
      </li>
      <p>
        بعد از نصب{" "}
        <a
          href="https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?redirectedfrom=MSDN&view=sql-server-ver15"
          target="_blank"
        >
          sqlcmd
        </a>{" "}
        کافیست برای اتصال دستور زیر را وارد کنید: (این دستور برای یک دیتابیس
        نمونه است.)
      </p>
      <code>
        {`$ sqlcmd -S s11.liara.ir,34472 -Usa -P7FMEv63BeG4xqXdQXcto3XPj`}
      </code>
      <br />
      <ZoomableImage src="/static/databases/sqlcmd.png" />
      <br />
      <li>
        <b>
          با مراجعه به این بخش از{" "}
          <a
            href="https://docs.microsoft.com/en-us/sql/tools/overview-sql-tools?view=sql-server-ver15"
            target="_blank"
          >
            مستندات Microsoft
          </a>{" "}
          میتوانید ابزارهای بیشتری را برای اتصال به دیتابیس SQL Server ببینید.
        </b>
      </li>
    </ul>
    <Notice variant="info">
      در همه موارد گفته شده در بالا میتوان به جای اتصال مستقیم به دیتابیس از
      قابلیت <b>Secure SSH Tunnel</b> نیز استفاده کرد. برای راه اندازی این
      قابلیت کافی‌ست مستندات{" "}
      <b>
        <a href="">اتصال امن به دیتابیس‌ها</a>
      </b>{" "}
      را مطالعه کنید.
    </Notice>
  </Layout>
);
