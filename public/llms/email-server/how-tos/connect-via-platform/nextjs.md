Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/nextjs/

# اتصال به ایمیل‌سرور در برنامه‌های NextJS

[Video link](https://media.liara.ir/docs/nextjs-email.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/nextjs-getting-started/tree/sendEmail) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های NextJS، می‌توانید از  
پکیج nodemailer استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
npm install nodemailer
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود (در فایل `env.local.` در حالت Development، و در فایل `env.production.` در حالت Production)، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=465
MAIL_USER=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885
MAIL_FROM=test@example.com
```

اکنون، کافیست که در مسیر  
`pages/api` یک فایل به نام `send-email.js` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```bash
import nodemailer from 'nodemailer';

// This function will handle the email sending process
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  // Create reusable transporter object using the SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true, 
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `"My App" <${process.env.MAIL_FROM}>`, // sender address
    to: 'test@example.com', // list of receivers
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from a Next.js API route!', // plain text body
    html: '<b>This is a test email sent from a Next.js API route!</b>', // html body
    headers: {
        "x-liara-tag": "test_email", // Tags 
      },
  };

  // Try to send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent!', info });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
```

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های NextJS، می‌توانید از  
پکیج nodemailer استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
npm install nodemailer
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود (در فایل `env.local.` در حالت Development، و در فایل `env.production.` در حالت Production)، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USER=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885
MAIL_FROM=test@example.com
```

اکنون، کافیست که در مسیر  
`pages/api` یک فایل به نام `send-email.js` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```bash
import nodemailer from 'nodemailer';

// This function will handle the email sending process
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  // Create reusable transporter object using the SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, 
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `"My App" <${process.env.MAIL_FROM}>`, // sender address
    to: 'test@example.com', // list of receivers
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from a Next.js API route!', // plain text body
    html: '<b>This is a test email sent from a Next.js API route!</b>', // html body
    headers: {
        "x-liara-tag": "test_email", // Tags 
      },
  };

  // Try to send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent!', info });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
```

## HTTP

برای ارسال ایمیل با استفاده از پروتکل HTTP، به [API لیارا](https://docs.liara.ir/references/api/about/) و [آیدی ایمیل‌سرور](https://docs.liara.ir/email-server/details/mail-id)  
و [نشانی ایمیل‌سرور](https://docs.liara.ir/email-server/how-tos/add-account) نیاز خواهید داشت.  
برای این‌کار، اطلاعات مربوطه را مشابه زیر به متغیرهای محیطی برنامه خود، اضافه کنید:

```bash
MAIL_SERVER_ID=***
MAIL_SERVICE_URL=https://mail-service.iran.liara.ir/api/v1/mails
API_LIARA_TOKEN=***
MAIL_FROM=info@example.com
```

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از پروتکل HTTP، اقدام به ارسال ایمیل‌های تراکنشی کنید:

```bash
// pages/api/send-email.js
const axios = require("axios"); // npm install axios

const mailServerId = process.env.MAIL_SERVER_ID;
const url = `${process.env.MAIL_SERVICE_URL}/${mailServerId}/messages`;
const token = process.env.API_LIARA_TOKEN;

const headers = {
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json",
  "x-liara-tag": "test_email" 
};

const data = {
  to: "info@test.test",
  from: process.env.MAIL_FROM,
  text: "Hello, this is a test email.",
  subject: "Test Email",
  attachments: []
};

axios.post(url, data, { headers })
  .then(response => {
    console.log("Email Sent:", response.data);
  })
  .catch(error => {
    console.error("Error:", error.response ? error.response.data : error.message);
  });
```

> فیلد `from` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

تمامی کارها انجام شده است و شما می‌توانید از ایمیل‌سرور در برنامه خود استفاده کنید؛ به عنوان مثال، می‌توانید  
قطعه کد زیر را در فایل `pages/index.js`، قرار دهید:

```js
import { useState } from 'react';

export default function Home() {
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendTestEmail = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
      });

      if (res.status === 200) {
        setEmailSent(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Send Test Email</h1>
      <button onClick={sendTestEmail} disabled={loading}>
        {loading ? 'Sending...' : 'Send Email'}
      </button>
      {emailSent && Email successfully sent!}
    </div>
  );
}
```

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
