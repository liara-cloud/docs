Original link: https://docs.liara.ir/one-click-apps/appsmith/how-tos/configure-vars/

# پیکربندی متغیرهای Appsmith

برای پیکربندی متغیرهای برنامه Appsmith، بایستی یک [دسترسی FTP](https://docs.liara.ir/paas/disks/ftp-access) برای دیسک `data`، ایجاد کنید؛ سپس با استفاده از  
این دسترسی، وارد فایلی به نام `docker.env` شوید. اکنون می‌توانید متغیرهای مدنظرتان را تغییر دهید یا مقداردهی کنید. به عنوان مثال. برای اضافه کردن کلید `API Google Maps` فقط کافیست که قطعه کد زیر را در فایل مذکور، وارد کنید:

```json
APPSMITH_GOOGLE_MAPS_API_KEY=<your-api-key>
```

و به جای عبارت `\<your-api-key\>` مقدار Google API key خود را وارد کنید. در نهایت کافیست تا تغییرات را ذخیره و برنامه Appsmith خود را ری‌استارت کنید تا تغییرات در برنامه‌تان لحاظ شوند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
