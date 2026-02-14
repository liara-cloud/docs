Original link: https://docs.liara.ir/one-click-apps/headless-chrome/how-tos/connect-by-nodejs-and-playwright/

# اتصال به Headless Chrome با Playwright در NodeJS

[Playwright](https://playwright.dev/) یک ابزار متن‌باز برای خودکارسازی مرورگرها است که توسط مایکروسافت توسعه داده شده و از زبان‌های برنامه‌نویسی مختلفی مانند جاوا اسکریپت، پایتون و سی‌شارپ پشتیبانی می‌کند. این ابزار امکان تست و تعامل با مرورگرهای مختلف مانند Chrome , Firefox و Safari را به‌صورت همزمان و بدون نقص فراهم می‌کند.

Playwright با ویژگی‌هایی مانند شبیه‌سازی شرایط شبکه، تست‌های موازی و پشتیبانی از چندین تب و مرورگر، گزینه‌ای قدرتمند برای تست و اتوماسیون وب‌سایت‌ها است. همچنین با ارائه API‌های جامع و قابلیت کار در محیط‌های بدون رابط کاربری (headless) توسعه‌دهندگان را در انجام وظایف پیچیده یاری می‌دهد.

برای اتصال از طریق Playwright به برنامه‌ی Headless Chrome باید قطعه کد زیر را:

```js
const browser = await pw.chromium.launch();
```

به قطعه کد زیر، تغییر دهید:

```js
const browser = await pw.chromium.connect('wss://<liara-chrome-app-url>/playwright?token=<your-env-token>');
```

در قطعه کد فوق، بایستی به جای عبارت `\<liara-chrome-app-url\>` دامنه Headless Chrome خود را بگذارید، همچنین باید به جای عبارت `\<your-env-token\>` نیز، مقدار متغیر محیطی `TOKEN` را بگذارید که این مقدار در بخش **تنظیمات، متغیرهای محیطی** برنامه Headless Chromeتان، در دسترس است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
