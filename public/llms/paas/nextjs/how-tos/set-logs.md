Original link: https://docs.liara.ir/paas/nextjs/how-tos/set-logs/

# تنظیم لاگ‌ها

## console.log

ساده‌ترین و ابتدایی‌ترین راه برای ثبت لاگ‌ها، استفاده از `console.log` و `console.error` است.  
شما می‌توانید با تنظیم قطعه‌کدهای مشابه قطعه کد زیر، لاگ‌های منحصر به فرد خود را در برنامه NextJS ایجاد کنید که طبق [مستندات گزارشات نرم‌افزاری](https://docs.liara.ir/paas/details/observations/software)، در دسترس شما قرار می‌گیرد  
و می‌توانید در هر قسمتی از پردازش برنامه، آن‌ها را ببینید:

```js
console.log(`I use Liara!`);
```

> در نظر داشته باشید که استفاده از سیستم فوق، در پروژه‌های بزرگ و پیچیده، توصیه نمی‌شود.

## winston

کتابخانه [winston](https://www.npmjs.com/package/winston) یکی از محبوب‌ترین کتابخانه‌های لاگ‌گیری در محیط NodeJS است که می‌توان از آن در پروژه‌های NextJS نیز استفاده کرد. این کتابخانه امکانات متنوعی برای مدیریت لاگ‌ها فراهم می‌کند و به شما اجازه می‌دهد لاگ‌های خود را به شیوه‌ای سفارشی‌سازی شده در فایل‌ها، دیتابیس‌ها، یا سیستم‌های دیگری ذخیره کنید.  
برای استفاده از این کتابخانه، در ابتدا، بایستی با اجرای دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
npm install winston
```

در ادامه، در دایرکتوری `/src`، یا به طور کلی، در مسیر اصلی پروژه،  
یک دایرکتوری جدید به نام `utils` ایجاد کنید و درون این دایرکتوری،  
یک فایل به نام `logger.js` ایجاد کرده و قطعه کد زیر را، در آن، قرار دهید:

```js
// utils/logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console(),  // Log to console
    new transports.File({ filename: 'logs/app.log' })  // Log to file
  ],
});

module.exports = logger;
```

سپس، در مسیر اصلی پروژه، یک دایرکتوری جدید به نام `middleware` ایجاد کرده و درون این دایرکتوری،  
یک فایل به نام `logger.js`، بسازید و قطعه کد زیر را، در آن، قرار دهید:

```js
// middleware/logger.js
const logger = require('@/utils/logger');

export function middleware(req) {
  const { method, url } = req.nextUrl;
  const userAgent = req.headers.get('user-agent') || 'Unknown user-agent';
  const authHeader = req.headers.get('authorization') || 'No authorization';

  // Log HTTP request method, URL, user-agent, and authorization token
  logger.info(`HTTP Request: ${method} ${url} | User-Agent: ${userAgent} | Authorization: ${authHeader}`);

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
```

تمامی کارها انجام شده است و شما می‌توانید  
در APIهای مدنظرتان (یا در جاهای دیگر)، از سیستم لاگ‌گیری جدید، استفاده کنید؛  
به عنوان مثال، می‌توانید قطعه کد زیر را در فایل `src/pages/api/hello.js` (یا `pages/api/hello.js`)، قرار دهید:

```js
// pages/api/hello.js
import logger from '@/utils/logger';

export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || 'Unknown user-agent';
  const authHeader = req.headers['authorization'] || 'No authorization';

  // Log user-agent and authorization details
  logger.info(`User accessed /hello API | User-Agent: ${userAgent} | Authorization: ${authHeader}`);

  res.status(200).json({ message: 'Hello, world!' });
}
```

با اجرای برنامه فوق و مراجعه به صفحه `api/hello/`، یک فایل به نام  
`app.log` در دایرکتوری جدیدی به نام `logs`، برای‌تان، ایجاد خواهد شد  
و شما می‌توانید طبق [مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)، یک دیسک برای ذخیره لاگ‌ها در  
برنامه NextJS خود ایجاد کنید و طبق [مستندات تعریف مسیر برای دیسک](https://docs.liara.ir/paas/disks/route)، دیسک ایجاد شده را به دایرکتوری  
logs، متصل کنید.  
همچنین، شما می‌توانید لاگ‌های برنامه را با تغییر کدهای فوق طبق [مستندات رسمی winston](https://github.com/winstonjs/winston)، بنا به نیاز خود، تغییر داده و شخصی‌سازی کنید.

> یک پروژه شامل قطعه کد فوق و آماده اجرا، در [اینجا](https://github.com/liara-cloud/nextjs-getting-started/tree/logger)، قرار دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
