Original link: https://docs.liara.ir/paas/nodejs/how-tos/use-hooks/

# استفاده از Hooks در برنامه‌های NodeJS

Hookها در برنامه‌نویسی به دستوراتی گفته می‌شود که به شما اجازه می‌دهند تا عملکرد یک برنامه را در یک نقطه خاص از فرایند اجرا یا استقرار آن، تغییر یا بهبود دهید؛ بدون اینکه نیاز به تغییر کد اصلی داشته باشید.

در لیارا، شما می‌توانید سه فایل زیر را در مسیر اصلی پروژه خود ایجاد کنید؛ و با توجه به زمان مشخص اجرای هر فایل‌،  
دستورات موردنیاز خود را در آن‌ها تعریف کنید:

به عنوان مثال، اگر که از [Sequelize](https://docs.liara.ir/paas/nodejs/how-tos/connect-to-db/sequelize/about) استفاده می‌کنید؛ می‌توانید در فایل `liara_pre_start.sh` دستورات مربوط به migrations را بنویسید تا نیازی نباشد که پس از استقرار برنامه، آن را به صورت دستی در خط فرمان برنامه خود، اجرا کنید. به عنوان مثال:

```sh
echo "Running pre-start script for Node.js..."

# run migrations 
npx sequelize-cli db:migrate

# other needed commands
# ..

echo "Pre-start script for Node.js finished."
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
