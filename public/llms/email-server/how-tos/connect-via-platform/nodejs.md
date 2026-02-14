Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/nodejs/

# اتصال به ایمیل‌سرور در برنامه‌های NodeJS

[Video link](https://media.liara.ir/nodejs/nodejs-emailserver.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/nodejs-getting-started/tree/email-server) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های NodeJS، می‌توانید از  
پکیج nodemailer استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
npm install nodemailer
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=465
MAIL_USER=sweet_brattain_hrt81t
MAIL_PASSWORD=4eba6d6d-96f4-6d04-b055-705031ba525d
MAIL_FROM=info@example.com
```

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا،  
اقدام به ارسال ایمیل‌های تراکنشی کنید:  

```js
// Import required packages
const nodemailer = require('nodemailer');
const dotenv = require('dotenv'); // in local, run `npm install dotenv` if needed

// Load environment variables from .env file
dotenv.config();

// Create reusable transporter object using the SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true, 
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },

});

// Email options
const mailOptions = {
    from: `"my app" <${process.env.MAIL_FROM}>`, // Sender address
    to: 'test@example.com', // List of receivers
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from Node.js', // Plain text body
    html: '<b>This is a test email sent from Node.js</b>', // HTML body
    headers: {
      "x-liara-tag": "test_email", // Tags 
    },
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Email sent: ' + info.response);
});
```

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های NodeJS، می‌توانید از  
پکیج nodemailer استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
npm install nodemailer
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USER=sweet_brattain_hrt81t
MAIL_PASSWORD=4eba6d6d-96f4-6d04-b055-705031ba525d
MAIL_FROM=info@example.com
```

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا،  
اقدام به ارسال ایمیل‌های تراکنشی کنید:  

```js
// Import required packages
const nodemailer = require('nodemailer');
const dotenv = require('dotenv'); // in local, run `npm install dotenv` if needed

// Load environment variables from .env file
dotenv.config();

// Create reusable transporter object using the SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, 
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },

});

// Email options
const mailOptions = {
    from: `"my app" <${process.env.MAIL_FROM}>`, // Sender address
    to: 'test@example.com', // List of receivers
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from Node.js', // Plain text body
    html: '<b>This is a test email sent from Node.js</b>', // HTML body
    headers: {
      "x-liara-tag": "test_email", // Tags 
    },
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Email sent: ' + info.response);
});
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

در نهایت می‌توانید در پروژه‌ی خود  
با استفاده از پروتکل HTTP، اقدام به ارسال ایمیل‌های تراکنشی کنید.  
به عنوان مثال، در مسیر `pages/api`، یک فایل به نام `send-email.js` ایجاد کنید و کد زیر را در آن قرار دهید:  

```js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { to, subject, text } = req.body;

    const mailServerId = process.env.MAIL_SERVER_ID;
    const url = `${process.env.MAIL_SERVICE_URL}/${mailServerId}/messages`;
    const token = process.env.API_LIARA_TOKEN;

    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "x-liara-tag": "test_email" // Custom tag
    };

    const data = {
      text,
      subject,
      to,
      from: "process.env.MAIL_FROM", 
      attachments: []
    };

    const response = await axios.post(url, data, { headers });

    return res.status(200).json({ message: "Email sent successfully!", data: response.data });
  } catch (error) {
    return res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
}
```

> فیلد `from` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
