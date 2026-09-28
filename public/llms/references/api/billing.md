Original link: https://docs.liara.ir/references/api/billing/

# دریافت اطلاعات مالی با API 

برای دریافت اطلاعات مالی می‌توانید از endpoint زیر استفاده کنید:

```
https://api.liara.ir/v1/billing
```

این endpoint شامل اطلاعات زیر است:

- میزان اعتبار (به تومان)
- نوع اکانت (فرد حقیقی یا حقوقی)
- اعتبار وقتی به کمتر از این عدد برسه، اطلاع‌رسانی ارسال می‌شه
- فعال بودن یا نبودن هشدار حداقل اعتبار تنظیم شده توسط کاربر (در غیر این‌صورت، با تصمیم سیستم)
- زمان آخرین باری که سیستم درباره کمبود اعتبار اطلاع‌رسانی کرده

## نمونه ارسال درخواست

```
curl --request GET \
--url https://api.liara.ir/v1/billing \
--header "Authorization: Bearer TOKEN"
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
