Original link: https://docs.liara.ir/paas/details/build-location/

# تنظیم موقعیت build

گاهی ممکن است بخواهید پکیج‌هایی که در موقعیت ایران در دسترس نیستند را دانلود کنید یا نیاز داشته باشید که فرایند push کردن ایمیج‌ها به [رجیستری خصوصی](https://docs.liara.ir/private-registry)، با سرعت بیشتری انجام شود. برای این موارد می‌توانید موقعیت build ایمیج برنامه‌تان را با یکی از سه روش زیر مشخص کنید:

## liara.json

یک فایل با نام `liara.json` در ریشه‌ پروژه‌تان ایجاد کرده و قطعه‌کد زیر را درون این فایل قرار بدید:

```json
{
  "build": {
     "location": "germany"
  }
}
```

در نهایت، با اجرای دستور `liara deploy` یا با Github، برنامه را در لیارا مستقر کنید.

## Liara CLI

در استقرار با Liara CLI در دستور `liara deploy` موقعیت build را با پارامتر `build-location--` مشخص کنید:

```json
liara deploy --build-location="germany"
```

## Liara Console

در استقرار با کنسول، موقعیت build را در بخش مربوطه به شکل زیر انتخاب کنید:

![set build location](https://media.liara.ir/docs/set-build-location.png)

در حال حاضر، موقعیت‌های زیر در دسترس هستند:

- ایران (iran)
- آلمان (germany)

> با انجام عملیات build در موقعیت germany، دانلود پکیج‌ها هیچ محدودیتی ندارد ولی فرایند push کردن ایمیج‌ها کند می‌باشد. در مقابل، عملیات build در موقعیت iran محدودیت دانلود پکیج‌ها را دارد ولی سرعت push کردن ایمیج‌ها بیشتر است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
