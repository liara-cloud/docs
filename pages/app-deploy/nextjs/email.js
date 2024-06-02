import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های NextJS - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="next" />
      <div className="page-title">
        <h1>پلتفرم NextJS</h1>
        <span className="page-description">(NextJS Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های NextJS باید پس از{" "}
      <Link href="/app-features/email#create-email">ایجاد سرویس ایمیل</Link>، در
      ابتدا پکیج{" "}
      <Link href="https://www.npmjs.com/package/nodemailer">nodemailer</Link> را
      با اجرای دستور زیر نصب کنید.
    </p>
    <Highlight className="bash">{`npm install nodemailer`}</Highlight>
    <p>
      در قدم بعد باید اطلاعات{" "}
      <Link href="/app-features/email#settings">دسترسی SMTP</Link> را طبق
      مستندات <Link href="/app-deploy/nextjs/envs">تنظیم متغیرها</Link> در
      تنظیمات برنامه اضافه کنید.
    </p>

    <Highlight className="plaintext">
      {`EMAIL_HOST=smtp.c1.liara.email
EMAIL_USER=xenodochial_ellis_6rrt96
EMAIL_PASS=9f6e2aed-2e10-436c-b367-d061ddfcc925
EMAIL_FROM=info@example.com`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">EMAIL_USER</span> و{" "}
      <span className="code">EMAIL_PASS</span> در هر سرویس ایمیل ایجاد شده
      متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <Notice variant="warning">
      توجه داشته باشید که فیلد <span className="code">EMAIL_FROM</span> باید یکی
      از نشانی‌های اضافه شده در سرویس ایمیل باشد.
    </Notice>

    <p>
      در ادامه، قطعه کدی آورده شده است. اگر که در پروژه NextJS خود از Pages
      Router استفاده می‌کنید؛ کافیست که در مسیر{" "}
      <span className="code">pages/api</span> در فایلی به نام{" "}
      <span className="code">sendEmail.js</span> قطعه کد زیر را وارد کنید:
    </p>
    <Highlight className="javascript">
      {`import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed', message: 'Only POST requests are allowed' });
  }

  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: 'Bad Request', message: 'Missing required parameters' });
  }

  // Create a nodemailer transporter using your SMTP credentials
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
    });

    console.log('Email sent:', info.messageId);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: 'Failed to send email' });
  }
}
`}
    </Highlight>

    <p>
      اکنون می‌توانید از ایمیل‌سرور در برنامه خود استفاده کنید؛ به عنوان مثال،
      می‌توانید در <span className="code">pages/index.js</span> قطعه کد زیر را
      به کار ببرید:
    </p>
    <Highlight className="javascript">
      {`import { useState } from 'react';

export default function Home() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setSuccessMessage('Email sent successfully!');
      } else {
        console.error('Failed to send email:', await response.json());
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Send Email</h1>
      <form onSubmit={handleSubmit}>
        <label>
          To:
          <input type="email" name="to" value={emailData.to} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" name="subject" value={emailData.subject} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="text" value={emailData.text} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Send Email</button>
      </form>

      {successMessage && <p style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>{successMessage}</p>}
    </div>
  );
}
`}
    </Highlight>

    <p>
      همچنین برای کسب اطلاعات بیشتر در رابطه با نحوه‌ی استفاده از پکیج
      nodemailer می‌توانید به{" "}
      <a href="https://nodemailer.com/smtp/" target="_blank">
        مستندات
      </a>{" "}
      این پکیج مراجعه کنید.
    </p>

    <Link href="/app-deploy/nextjs/hooks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
