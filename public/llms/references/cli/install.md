Original link: https://docs.liara.ir/references/cli/install/

# نصب و به‌روزرسانی Liara CLI

برای نصب cli،  
بایستی npm و NodeJS بر روی سیستم‌عامل‌تان نصب باشد که می‌توانید با مراجعه  
به [وب‌سایت رسمی NodeJS](https://nodejs.org/en/)، آخرین نسخه NodeJS TLS را متناسب با سیستم خود، دانلود و نصب کنید. پس از نصب NodeJS، ابزار npm نیز به صورت خودکار برای‌تان نصب می‌شود.  
اکنون. برای نصب Liara CLI، کافیست تا در ترمینال خود، دستور زیر را اجرا کنید:

```bash
npm install -g @liara/cli
```

برای ارتقاء Liara CLI نیز، بایستی همان دستور فوق را اجرا کنید.  
و درنهایت، با دستور زیر می‌توانید نسخه‌ی CLI جدید را چک کنید:

```bash
liara -v
```

## رفع خطای عدم شناسایی Liara CLI
در صورتی که در اجرای دستورات Liara CLI به خطای `command not found` یا `command is not recognized as an internal or external command` برخوردید؛ کافیست تا به شکل زیر، به دستورات Liara CLI، عبارت `npx` را اضافه کنید:

```bash
npx liara login
npx liara deploy
```

یا:

```bash
npx @liara/cli login
npx @liara/cli deploy
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
