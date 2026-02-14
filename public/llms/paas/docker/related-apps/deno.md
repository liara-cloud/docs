Original link: https://docs.liara.ir/paas/docker/related-apps/deno/



# استقرار برنامه‌های Deno در لیارا

[Deno](https://docs.deno.com/) یک محیط اجرای جاوااسکریپت و تایپ‌اسکریپت است که با هدف رفع مشکلات امنیتی و پیچیدگی‌های Node.js ساخته شده است. Deno به طور پیش‌فرض از تایپ‌اسکریپت پشتیبانی می‌کند و برخلاف Node.js نیازی به پکیج منیجر ندارد، زیرا بسته‌ها به صورت مستقیم از URL بارگذاری می‌شوند. همچنین Deno دارای امنیت پیشرفته است، به طوری که دسترسی به فایل‌ها، شبکه و محیط به طور پیش‌فرض محدود است و باید به‌طور صریح اجازه داده شود.



شما می‌توانید برنامه‌های Deno خود را با [ایجاد برنامه‌های Docker](../../how-tos/create-app) در لیارا، مستقر کنید.
برای این‌کار، کافیست تا در مسیر اصلی پروژه در Local، یک فایل به نام `Dockerfile` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```dockerfile
# Use the official Deno image from Docker Hub
FROM denoland/deno:alpine-1.30.0

# Set the working directory inside the container
WORKDIR /app

# Copy the Deno app code into the container
COPY . .

# Allow Deno to read and write the necessary files
RUN deno cache server.ts

# Command to run the Deno app when the container starts
CMD ["deno", "run", "--allow-net", "--allow-read", "server.ts"]
```


در نهایت، در مسیری که `Dockerfile` قرار گرفته است، دستور زیر را اجرا کنید تا برنامه‌تان در لیارا مستقر شود:

```js
liara deploy --platform=docker --port=8000
```

البته اگر که برنامه‌تان در پورت دیگری به جز 8000 به درخواست کاربران، گوش می‌دهد؛ بایستی به جای 8000، مقدار پورت خود را، وارد کنید. 


> `Dockerfile` فوق، صرفاً یک نمونه است و شما می‌توانید آن را با توجه به نیاز خودتان ویرایش کنید.

> یک پروژه Deno آماده به استقرار در [اینجا](https://github.com/liara-cloud/deno-getting-started) وجود دارد که می‌توانید از آن، استفاده کنید.



## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
