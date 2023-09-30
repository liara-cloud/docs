import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های .Net Core - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="netcore" />
      <div className="page-title">
        <h1>پلتفرم .Net</h1>
        <span className="page-description">(.Net Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/dotnet/dotnet-email-server.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/dotnet-getting-started/tree/email-server">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های ASP.Net Core باید پس از{" "}
      <Link href="/app-features/email#create-email">ایجاد سرویس ایمیل</Link>،
      اطلاعات <Link href="/app-features/email#settings">دسترسی SMTP</Link> را
      طبق مستندات <Link href="/app-deploy/netcore/envs">تنظیم متغیرها</Link> در
      تنظیمات برنامه اضافه کنید.
    </p>

    <Highlight className="plaintext">
      {`MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USERNAME=my-app
MAIL_PASSWORD=my-pass`}
    </Highlight>

    <p>
      اگر که از فایل env. برای بارگذاری متغیرهای محیطی در پروژه اصلی استفاده
      می‌کنید؛ می‌توانید با استفاده از دستور زیر، پکیج DotEnv را نصب کنید.
    </p>

    <Highlight className="shell">{`dotnet add package dotenv.net`}</Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">MAIL_USERNAME</span> و{" "}
      <span className="code">MAIL_PASSWORD</span> در هر سرویس ایمیل ایجاد شده
      متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <p>
      حال می‌توانید بدون نگرانی در پروژه‌ی خود با استفاده از دسترسی SMTP سرویس
      ایمیل لیارا به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی کنید.
    </p>

    <p>نمونه کد ارسال ایمیل:</p>

    <Highlight className="csharp">
      {`using System;
using System.Net;
using System.Net.Mail;
using System.IO;
using dotenv.net;

class Program
{
    static void Main()
    {
        DotEnv.Load(); // loading env variables 

        string mailHost = Environment.GetEnvironmentVariable("MAIL_HOST");
        int mailPort = int.Parse(Environment.GetEnvironmentVariable("MAIL_PORT"));
        string mailUser = Environment.GetEnvironmentVariable("MAIL_USERNAME");
        string mailPassword = Environment.GetEnvironmentVariable("MAIL_PASSWORD");

        // SMTP Conf
        SmtpClient client = new SmtpClient(mailHost)
        {
            Port = mailPort,
            Credentials = new NetworkCredential(mailUser, mailPassword),
            EnableSsl = true
        };

        // Creating and Sending Email  
        MailMessage message = new MailMessage("from@test.com", "to@test.com",
         "hello", "hello from dotnet!");
        try
        {
            client.Send(message);
            Console.WriteLine("email sent successfully");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"error in sending email: {ex.Message}");
        }
    }
}`}
    </Highlight>

    <Notice variant="warning">
      قابل ذکر است که به جای <span className="code">from@test.com</span> باید
      یکی از نشانی‌های اضافه شده در سرویس ایمیل قرار بگیرد. همچنین{" "}
      <span className="code">to@test.com</span> ایمیل دریافت کننده محتوا است. در
      کد فوق می‌توانید با SSL به صورت امن از ایمیل تراکنشی استفاده
    </Notice>

    <p>
      برای اطلاعات بیشتر می‌توانید به{" "}
      <a
        href="https://github.com/jstedfast/MailKit#sending-messages"
        target="_blank"
      >
        مستندات ارسال ایمیل MailKit
      </a>{" "}
      مراجعه کنید.
    </p>

    <Link href="/app-deploy/netcore/tips" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
