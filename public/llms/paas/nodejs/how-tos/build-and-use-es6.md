Original link: https://docs.liara.ir/paas/nodejs/how-tos/build-and-use-es6/

# بیلد برنامه با ES6

اگر برنامه‌ی‌تان را با `ES6` و یا بالاتر نوشته‌اید و برنامه‌ی‌تان قبل از اجرا شدن، نیاز به `build` شدن دارد، باید یک اسکریپت دیگر با نام `build` تعریف کنید و دستورات لازم برای `build` شدن برنامه‌ی‌تان را داخل `package.json` تعریف کنید، برای نمونه:

```json
{
  "scripts": {
    "start": "node build/server.js",
    "build": "gulp build"
  }
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
