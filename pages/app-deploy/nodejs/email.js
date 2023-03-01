import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های NodeJS - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>پلتفرم NodeJS</h1>
        <span className="page-description">(NodeJS Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های NodeJS باید پس از{" "}
      <Link href="/app-features/email#create-email">ایجاد سرویس ایمیل</Link>، در
      ابتدا پکیج{" "}
      <Link href="https://www.npmjs.com/package/nodemailer">nodemailer</Link> را
      با اجرای دستور زیر نصب کنید.
    </p>
    <Highlight className="bash">{`npm install nodemailer`}</Highlight>
    <p>
      در قدم بعد باید اطلاعات{" "}
      <Link href="/app-features/email#settings">دسترسی SMTP</Link> را طبق
      مستندات <Link href="/app-deploy/nodejs/envs">تنظیم متغیرها</Link> در
      تنظیمات برنامه اضافه کنید.
    </p>

    <Highlight className="plaintext">
      {`MAIL_HOST=smtp.liara.ir
MAIL_PORT=587
MAIL_USER=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">MAIL_USER</span> و{" "}
      <span className="code">MAIL_PASSWORD</span> در هر سرویس ایمیل ایجاد شده
      متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <p>
      در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از
      دسترسی SMTP سرویس ایمیل لیارا و تنظیم{" "}
      <span className="code">tls: true</span>، به‌صورت امن اقدام به ارسال
      ایمیل‌های تراکنشی کنید.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که فیلد from باید یکی از نشانی‌های اضافه شده در سرویس
      ایمیل باشد.
    </Notice>

    <Highlight className="javascript">
      {`const nodemailer = require("nodemailer");
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  tls: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  }
});

transporter.sendMail({
  from: 'MyName <from@example.com>',
  to: 'to@example.com',
  subject: 'Test Email Subject',
  html: '<h1>Example HTML Message Body</h1>'
})
  .then(() => console.log('OK, Email has been sent.'))
  .catch(console.error);`}
    </Highlight>
    <p>
      همچنین برای کسب اطلاعات بیشتر در رابطه با نحوه‌ی استفاده از پکیج
      nodemailer می‌توانید به{" "}
      <a href="https://nodemailer.com/smtp/" target="_blank">
        مستندات
      </a>{" "}
      این پکیج مراجعه کنید.
    </p>

    <Link href="/app-deploy/nodejs/tips">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
