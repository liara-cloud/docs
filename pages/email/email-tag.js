import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>قابلیت تگ‌ها</title>
    </Head>

     <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#tag-functionality">
         کاربرد تگ‌ ایمیل
        </a>
      </li>
      <li>
        <a href="#tag-via-smtp">ارسال تگ با SMTP</a>
      </li>
      <li>
        <a href="#tag-via-console">ارسال تگ با کنسول</a>
      </li>
      <li>
        <a href="#tag-analytics">گزارشات تگ‌ها</a>
      </li>
      <li>
        <a href="#tag-tips">نکات تکمیلی</a>
      </li>
    </ul>


    <h3 id="tag-functionality">کاربرد تگ‌ ایمیل</h3>

    <p>
     از تگ‌ها برای دسته‌بندی نوع ایمیل ارسالی و ایجاد گزارشات به کار می‌رود.
      برای مثال، می‌توانید برای ایمیل‌ها، تگ‌‌ خوش‌آمدگویی، کنسل خرید، درخواست بازگشت پول، تمدید حساب کاربری و ... تنظیم کنید و در بخش گزارشات، تعداد ارسال این ایمیل‌ها رو بررسی کنید.
      این اطلاعات به کسب‌وکار شما کمک می‌کند تا آمار دقیق‌تری از رفتار مشتریان خود به دست بیاورید. در ادامه نحوه استفاده از تگ در سرویس ایمیل لیارا رو بررسی خواهیم کرد.
    </p>

     <h3 id="tag-via-smtp">ارسال تگ با SMTP</h3>

    <p>
    برای تگ گذاری در SMTP client، لازم هست که <span className="code">x-liara-tag</span> رو در بخش headers تنظیم کنید. مثال زیر نمونه‌ای از نحوه ست کردن می باشد.
    </p>

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

transporter
  .sendMail({
    from: "test@test.com",
    to: "test@gmail.com",
    subject: "Email Tags",
    html: "<h1>Let's try email tags!</h1>",
    headers: {
      "x-liara-tag": "welcome_email",
    },
  })
  .then(() => console.log("OK, Email has been sent."))
  .catch(console.error);`}
    </Highlight>
    

    <h3 id="tag-via-console"> ارسال تگ از طریق کنسول لیارا</h3>

    <p>
    برای ارسال تگ از طریق کنسول لیارا، در بخش تگ، نام تگ مورد نظر خودتون رو وارد کنید.
    </p>

    <ZoomableImage src="/static/send-mail-tag-via-console.png" />

    <h3 id="tag-via-console">گزارشات تگ‌ها</h3>

    <p>
   در بخش گزارشات ایمیل، می‌توانید تعداد تگ‌های ارسالی در روزهای اخیر رو مشاهده کنید. در بخش پایین نمودار،  می‌توانید نمایش یک تگ را بسته و یا باز کنید. </p>

    <ZoomableImage src="/static/.png" />

    <h3 id="tag-tips">نکات تکمیلی</h3>

    <p>
    به صورت پیش‌فرض، اگر یک تگ از قبل وجود نداشته باشند،‌ به صورت خودکار تگ جدیدی ساخته می‌شود. <br />
    در یک سرور ایمیل، می‌توان ۱۰ تگ غیر تکراری ایجاد نمود. <br />
یک تگ می‌تواند بین ۲ الی ۵۰ کاراکتر باشد.</p><br />
   <p>چند نمونه تگ که می‌توانید در ایمیل‌های‌تان به‌کار ببرید:
<span className="code">password_reset</span>, <span className="code">payment_failed</span>, <span className="code">order_cancellation</span>, <span className="code">order_confirmation</span>, <span className="code">welcome_email</span>, <span className="code">farewell_email</span></p>

  </Layout>
);