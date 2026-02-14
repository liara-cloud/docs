Original link: https://docs.liara.ir/one-click-apps/headless-chrome/how-tos/connect-by-nodejs-and-selenium/

# اتصال به Headless Chrome با Selenium در NodeJS

[Selenium](https://www.selenium.dev/) یک فریم‌ورک متن‌باز  
برای خودکارسازی مرورگرهای وب است که برای تست وب اپلیکیشن‌ها استفاده می‌شود. این ابزار از چندین زبان برنامه‌نویسی مانند جاوا، پایتون، سی‌شارپ و روبی پشتیبانی می‌کند و قابلیت اجرای تست‌ها روی مرورگرهای مختلف مانند Chrome , Firefox  و Safari را فراهم می‌آورد. Selenium شامل ابزارهایی مانند Selenium WebDriver برای کنترل مرورگرها و Selenium Grid برای اجرای تست‌ها به‌صورت موازی در محیط‌های توزیع‌شده است.

برای اتصال از طریق Selenium به برنامه‌ی Headless Chrome بایستی در ابتدا، کتابخانه آن‌را با اجرای دستور زیر، نصب کنید:

```bash
npm install selenium-webdriver
```

اکنون می‌توانید با استفاده از قطعه کد زیر، به Headless Chrome متصل شده و با استفاده از کتابخانه Selenium، کارهای مد نظر خود را انجام دهید. برای نمونه، قطعه کد زیر یک اسکرین‌شات از سایت داده شده می‌گیرد و آن را در پوشه uploads ذخیره می‌کند:

```js
const webdriver = require('selenium-webdriver');
const fs = require('fs');

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('browserless:token', '<your-env-token>');
chromeCapabilities.set('goog:chromeOptions', {
  args: [
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-component-extensions-with-background-pages',
    '--disable-dev-shm-usage',
    '--disable-extensions',
    '--disable-features=TranslateUI,BlinkGenPropertyTrees',
    '--disable-ipc-flooding-protection',
    '--disable-renderer-backgrounding',
    '--enable-features=NetworkService,NetworkServiceInProcess',
    '--force-color-profile=srgb',
    '--hide-scrollbars',
    '--metrics-recording-only',
    '--mute-audio',
    '--headless',
    '--no-sandbox',
  ],
});

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  // Specify browserless for the server
  .usingServer('https://docs.liara.ir/webdriver')
  .build();

(async () => {
  try {
    await driver.get('https://www.google.com/');

    // Take screenshot of results page. Save to disk.
    const base64png = await driver.takeScreenshot();
    fs.writeFileSync('uploads/screenshot.png', new Buffer(base64png, 'base64'));
  } finally {
    driver.quit();
  }
})();
```

در قطعه کد فوق، بایستی به جای عبارت `\<liara-chrome-app-url\>` دامنه Headless Chrome خود را بگذارید، همچنین باید به جای عبارت `\<your-env-token\>` نیز، مقدار متغیر محیطی `TOKEN` را بگذارید که این مقدار در بخش **تنظیمات، متغیرهای محیطی** برنامه Headless Chromeتان، در دسترس است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
