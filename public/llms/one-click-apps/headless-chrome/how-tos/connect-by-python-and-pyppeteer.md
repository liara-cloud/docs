Original link: https://docs.liara.ir/one-click-apps/headless-chrome/how-tos/connect-by-python-and-pyppeteer/

# اتصال به Headless Chrome با Pyppeteer در Python

[Video link](https://media.liara.ir/headlesschrome/python-pyppeteer.mp4)

[Pyppeteer](https://github.com/pyppeteer/pyppeteer) یک کتابخانه پایتون است که یک رابط کاربری برای Puppeteer فراهم می‌کند و امکان کنترل مرورگر Headless Chrome را از طریق کد پایتون میسر می‌سازد. این ابزار به توسعه‌دهندگان اجازه می‌دهد تا وظایفی مانند استخراج داده، شبیه‌سازی تعاملات کاربر، و انجام تست‌های خودکار را به‌راحتی انجام دهند. Pyppeteer به‌ویژه برای پروژه‌هایی که نیاز به اتوماسیون مرورگر دارند، مفید است و با ارائه API‌های مشابه Puppeteer، از مزایای کامل این ابزار بهره‌مند می‌شود. این کتابخانه انعطاف‌پذیری و قدرت Puppeteer را به اکوسیستم پایتون می‌آورد و انجام وظایف پیچیده در مرورگر را ساده‌تر می‌کند.

برای اتصال از طریق Pyppeteer به برنامه‌ی Headless Chrome، باید در ابتدا، پکیج مربوط به آن را با اجرای دستور زیر، نصب کنید:

```js
pip install pyppeteer
```

سپس، می‌توانید مشابه قطعه کد زیر، عمل کنید:

```js
import asyncio
from pyppeteer import connect

async def main():
    browser = await connect({'browserWSEndpoint': 'wss://<liara-chrome-app-url>?token=<your-env-token>'})
    
    page = await browser.newPage()
    
    await page.goto('https://example.com')
    
    title = await page.title()
    print(f'Title of the page: {title}')
    
    await browser.close()

asyncio.get_event_loop().run_until_complete(main())
```

در قطعه کد فوق، بایستی به جای عبارت `\<liara-chrome-app-url\>` دامنه Headless Chrome خود را بگذارید، همچنین باید به جای عبارت `\<your-env-token\>` نیز، مقدار متغیر محیطی `TOKEN` را بگذارید که این مقدار در بخش **تنظیمات، متغیرهای محیطی** برنامه Headless Chromeتان، در دسترس است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
