Original link: https://docs.liara.ir/one-click-apps/headless-chrome/how-tos/connect-by-nodejs-and-puppeteer/

# اتصال به Headless Chrome با Puppeteer در NodeJS

[Video link](https://media.liara.ir/headlesschrome/nodejs-hc.mp4)

[Puppeteer](https://pptr.dev/) یک کتابخانه NodeJS است که یک API سطح بالا برای کنترل Headless Chrome یا Chrome تمام‌صفحه ارائه می‌دهد. این ابزار به توسعه‌دهندگان امکان می‌دهد تا وظایف مرورگری مانند رندر صفحات وب، استخراج داده‌ها، انجام تست‌های خودکار و تعامل با اجزای وب را به‌صورت برنامه‌نویسی انجام دهند. Puppeteer برای تست رابط کاربری، تولید تصاویر و PDF از صفحات وب و انجام اتوماسیون وب‌سایت‌ها بسیار مفید است. این کتابخانه با ارائه API قدرتمند و انعطاف‌پذیر، تسهیل‌کننده توسعه و تست اپلیکیشن‌های وب است.

برای اتصال از طریق Puppeteer به برنامه‌ی Headless Chrome باید قطعه کد زیر را:

```js
const browser = await puppeteer.launch();
```

به قطعه کد زیر، تغییر دهید:

```js
const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://<liara-chrome-app-url>?token=<your-env-token>`,
});
```

در قطعه کد فوق، بایستی به جای عبارت `<liara-chrome-app-url>` دامنه Headless Chrome خود را بگذارید، همچنین باید به جای عبارت `<your-env-token>` نیز، مقدار متغیر محیطی `TOKEN` را بگذارید که این مقدار در بخش **تنظیمات، متغیرهای محیطی** برنامه Headless Chromeتان، در دسترس است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
