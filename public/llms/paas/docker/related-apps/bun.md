Original link: https://docs.liara.ir/paas/docker/related-apps/bun/



# استقرار برنامه‌های Bun در لیارا

[Bun](https://bun.sh/) یک محیط اجرای جاوااسکریپت/تایپ‌اسکریپت و یک باندلر (bundler) سریع است که برای توسعه وب طراحی شده. این ابزار به‌طور خاص برای سرعت بالا و کارایی بهتر در مقایسه با ابزارهای مشابه مثل Webpack و Vite ساخته شده است. Bun از Rust برای بهینه‌سازی عملکرد استفاده می‌کند و شامل ابزارهایی مانند یک HTTP server، یک task runner و یک bunder می‌شود. هدف Bun این است که توسعه‌دهندگان را قادر سازد تا برنامه‌های وب را سریع‌تر از همیشه بسازند و اجرا کنند.



شما می‌توانید برنامه‌های Bun خود را با [ایجاد برنامه‌های Docker](../../how-tos/create-app) در لیارا، مستقر کنید.
برای این‌کار، کافیست تا در مسیر اصلی پروژه در Local، یک فایل به نام `Dockerfile` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```dockerfile
# Step 1: Use the official Bun image
FROM oven/bun:1.1.37

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the application files into the container
COPY . .

# Step 4: Install Bun dependencies
RUN bun install

# Step 5: Run the application
CMD ["bun", "server.ts"]

```


در نهایت، در مسیری که `Dockerfile` قرار گرفته است، دستور زیر را اجرا کنید تا برنامه‌تان در لیارا مستقر شود:

```js
liara deploy --platform=docker --port=3000
```

البته اگر که برنامه‌تان در پورت دیگری به جز 3000 به درخواست کاربران، گوش می‌دهد؛ بایستی به جای 3000، مقدار پورت خود را، وارد کنید. 


> `Dockerfile` فوق، صرفاً یک نمونه است و شما می‌توانید آن را با توجه به نیاز خودتان ویرایش کنید.

> یک پروژه Bun آماده به استقرار در [اینجا](https://github.com/liara-cloud/bun-getting-started) وجود دارد که می‌توانید از آن، استفاده کنید.



## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
