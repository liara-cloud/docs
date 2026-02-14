Original link: https://docs.liara.ir/one-click-apps/headless-chrome/how-tos/connect-by-python-and-selenium/

# اتصال به Headless Chrome با Selenium در Python

[Video link](https://media.liara.ir/headlesschrome/headless-chrome-selenium.mp4)

[Selenium](https://www.selenium.dev/) یک فریم‌ورک متن‌باز
برای خودکارسازی مرورگرهای وب است که برای تست وب اپلیکیشن‌ها استفاده می‌شود. این ابزار از چندین زبان برنامه‌نویسی مانند جاوا، پایتون، سی‌شارپ و روبی پشتیبانی می‌کند و قابلیت اجرای تست‌ها روی مرورگرهای مختلف مانند Chrome , Firefox  و Safari را فراهم می‌آورد. Selenium شامل ابزارهایی مانند Selenium WebDriver برای کنترل مرورگرها و Selenium Grid برای اجرای تست‌ها به‌صورت موازی در محیط‌های توزیع‌شده است.

برای اتصال از طریق Selenium به برنامه‌ی Headless Chrome بایستی در ابتدا، کتابخانه آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install selenium
```

اکنون می‌توانید با استفاده از قطعه کد زیر، به Headless Chrome متصل شده و با استفاده از کتابخانه Selenium، کارهای مد نظر خود را انجام دهید.
برای نمونه، قطعه کد زیر Title سایت داده شده را می‌گیرد و آن را پرینت می‌کند:

```py
from selenium import webdriver

chrome_options = webdriver.ChromeOptions()
chrome_options.set_capability('browserless:token', '<your-env-token>')
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--headless")

driver = webdriver.Remote(
    command_executor='https://<liara-chrome-app-url>/webdriver',
    options=chrome_options
)

driver.get("https://www.google.com")
print(driver.title)
driver.quit()
```

در قطعه کد فوق، بایستی به جای عبارت `\<liara-chrome-app-url\>` دامنه Headless Chrome خود را بگذارید، همچنین باید به جای عبارت `\<your-env-token\>` نیز، مقدار متغیر محیطی `TOKEN` را بگذارید که این مقدار در بخش **تنظیمات، متغیرهای محیطی** برنامه Headless Chromeتان، در دسترس است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
