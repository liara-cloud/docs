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
      {`MAIL_HOST=smtp.liara.ir
MAIL_PORT=587
IS_ENCRYPTED=true
MAIL_USERNAME=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885`}
    </Highlight>

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
using MailKit.Net.Smtp;
using MimeKit;

class Program
{
    static void Main()
    {
        DotNetEnv.Env.Load();
        string mail_host = Environment.GetEnvironmentVariable("MAIL_HOST");
        string username = Environment.GetEnvironmentVariable("MAIL_USERNAME");
        string password = Environment.GetEnvironmentVariable("MAIL_PASSWORD");
        string port = Environment.GetEnvironmentVariable("MAIL_PORT");
        string enc = Environment.GetEnvironmentVariable("IS_ENCRYPTED");
        
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("Sender Name", "sender@examle.com"));
        message.To.Add(new MailboxAddress("Recipient Name", "recipient@example.com"));
        message.Subject = "Hello, World!";
        message.Body = new TextPart("plain")
        {
            Text = "This is the message body."
        };

        using (var client = new SmtpClient())
        {
            client.Connect(mail_host, int.Parse(port), bool.Parse(enc);
            client.Authenticate(username, password);

            client.Send(message);

            client.Disconnect(true);
        }
    }
}`}
    </Highlight>

    <Notice variant="warning">
      قابل ذکر است که فیلد <span className="code">from</span> باید یکی از
      نشانی‌های اضافه شده در سرویس ایمیل باشد.
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
