Original link: https://docs.liara.ir/paas/php/fix-common-errors/cors/

# رفع خطای CORS در برنامه‌های PHP

خطای CORS (Cross-Origin Resource Sharing) یک محدودیت امنیتی در مرورگرها است که جلوی درخواست‌های HTTP از منابع مختلف را می‌گیرد.  
این خطا ممکن است زمانی رخ دهد که سعی کنید از یک دامنه یا پورت متفاوت به سروری دیگر درخواست ارسال کنید، و معمولاً با پیام خطایی شبیه به **Access-Control-Allow-Origin** در مرورگر مواجه خواهید شد. برای رفع این خطا،  
کافیست در ریشه پروژه، یک فایل به نام `htaccess.` بسازید و قطعه کد زیر را درون آن، قرار دهید:

```config
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
