import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>لیارا - مستندات اتصال به Headless Chrome از طریق Selenium</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="chrome" />
      <div className="page-title">
        <h1>اتصال از طریق Selenium به برنامه‌ی Headless Chrome</h1>
        <span className="page-description">
          (Headless Chrome one-click app)
        </span>
      </div>
    </div>
    <p>
      سلنیوم، یک ابزار قدرتمند و متن‌بازِ تست خودکار است که برای آزمایش
      برنامه‌های تحت وب به کار می‌رود. شما می‌توانید با استفاده از این ابزار
      بی‌نظیر، ربات خود را در Headless Chrome راه‌اندازی کنید.
    </p>
    <ul>
      <li>
        <a href="#nodejs">
          اتصال به Headless Chrome با کتابخانه Selenium در NodeJS
        </a>
      </li>

      <li>
        <a href="#python">
          اتصال به Headless Chrome با کتابخانه Selenium در Python
        </a>{" "}
      </li>
    </ul>

    <h2 id="nodejs">اتصال به Headless Chrome با کتابخانه Selenium در NodeJS</h2>
    <p>
      در ابتدا، برای استفاده از کتابخانه Selenium، شما بایستی آن را با استفاده
      از npm نصب کنید:
    </p>
    <Highlight className="javascript">
      {`npm install selenium-webdriver`}
    </Highlight>
    <p>
      اکنون می‌توانید با استفاده از قطعه کد زیر، به Headless Chrome متصل شده و
      با استفاده از کتابخانه Selenium، کارهای مد نظر خود را انجام دهید. برای
      نمونه، قطعه کد زیر یک اسکرین‌شات از سایت داده شده می‌گیرد و آن را در پوشه{" "}
      <span className="code">uploads</span> ذخیره می‌کند:
    </p>
    <Highlight className="javascript">
      {`const webdriver = require('selenium-webdriver');
const fs = require('fs');

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('browserless:token', 'YOUR-API-TOKEN');
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
  .usingServer('https://YOUR-LIARA-ADDRESS.liara.run/webdriver')
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
})();`}
    </Highlight>
    <p>
      توجه کنید که در قطعه کد بالا به جای{" "}
      <span className="code">YOUR-API-TOKEN</span> و{" "}
      <span className="code">YOUR-LIARA-ADDRESS</span> باید به ترتیب token و
      شناسه برنامه Headless Chrome خود را بگذارید. برای دسترسی به token کافیست
      وارد قسمت تنظیمات برنامه Headless Chrome خود شوید و مقدار متغیر محیطی{" "}
      <span className="code">TOKEN</span> همان token شما خواهد بود.
    </p>
    <h2 id="python">اتصال به Headless Chrome با کتابخانه Selenium در Python</h2>
    <p>
      در ابتدا، برای استفاده از کتابخانه Selenium، شما بایستی آن را با استفاده
      از pip نصب کنید:
    </p>
    <Highlight className="python">{`pip install selenium`}</Highlight>
    <p>
      اکنون می‌توانید با استفاده از قطعه کد زیر، به Headless Chrome متصل شده و
      با استفاده از کتابخانه Selenium، کارهای مد نظر خود را انجام دهید. برای
      نمونه، قطعه کد زیر Title سایت داده شده را می‌گیرد و آن را پرینت می‌کند:
    </p>
    <Highlight className="javascript">
      {`from selenium import webdriver

chrome_options = webdriver.ChromeOptions()
chrome_options.set_capability('browserless:token', 'YOUR-API-TOKEN')
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--headless")

driver = webdriver.Remote(
    command_executor='https://YOUR-LIARA-ADDRESS.liara.run/webdriver',
    options=chrome_options
)

driver.get("https://www.google.com")
print(driver.title)
driver.quit()`}
    </Highlight>
    <p>
      توجه کنید که در قطعه کد بالا به جای{" "}
      <span className="code">YOUR-API-TOKEN</span> و{" "}
      <span className="code">YOUR-LIARA-ADDRESS</span> باید به ترتیب token و
      شناسه برنامه Headless Chrome خود را بگذارید. برای دسترسی به token کافیست
      وارد قسمت تنظیمات برنامه Headless Chrome خود شوید و مقدار متغیر محیطی{" "}
      <span className="code">TOKEN</span> همان token شما خواهد بود.
    </p>
    <Notice variant="info">
      شما برای{" "}
      <a href="/one-click-apps/headless-chrome/tips#add-token">اتصال ایمن</a> به
      برنامه‌ی Headless Chrome خود به یک توکن جدید نیاز خواهید داشت که می‌توانید
      آموزش اضافه کردن آن را در صفحه‌ی توضیحات و نکات تکمیلی مشاهده کنید.
    </Notice>
  </Layout>
);
