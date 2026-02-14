Original link: https://docs.liara.ir/one-click-apps/nextcloud/how-tos/choose-version/

# تغییر نسخه‌ی برنامه مستقر شده

## Liara Console

اگر که قصد دارید نسخه برنامه خود را بنا به هر دلیلی تغییر دهید؛ کافیست تا پس از [ساخت برنامه در لیارا](https://docs.liara.ir/quick-start)، در کنسول، در برنامه‌تان، وارد صفحه **استقرار جدید** شوید، تب **Docker Hub** را انتخاب کنید و سپس بر روی گزینه **شروع استقرار image از Docker Hub** کلیک کنید؛ بعد از انجام این کار، به صفحه جدیدی هدایت می‌شوید که کافیست تنها در قسمت **نام image**، نسخه مورد نظرتان (tag) را پس از `:` وارد کرده و سپس مراحل استقرار را بدون اعمال تغییر دیگری، جلو ببرید: 

[Video link](https://media.liara.ir/docs/update-one-click-app-version-by-liara-console.mp4)

با انجام کار فوق، نسخه برنامه مدنظرتان، تغییر خواهد کرد.        

## Liara CLI

اگر که قصد دارید نسخه برنامه خود را بنا به هر دلیلی تغییر دهید؛ کافیست تا پس از [ساخت برنامه در لیارا](https://docs.liara.ir/quick-start)، در Local یک دایرکتوری با نام دلخواه ایجاد کنید.
وارد دایرکتوری شده و درون این دایرکتوری، یک فایل به نام `liara.json`، ایجاد کنید. سپس کافیست تا قطعه کد زیر را درون آن، قرار دهید:  

```json
{
    "image": "nextcloud:<your-version>",
    "port": 80,
    "app": "<your-app-name>",
    "disks": [
      {
          "name": "tmp",
          "mountTo": "/tmp"
      },
      {
        "name": "data",
        "mountTo": "/var/www/html"
      }
  ]
}
```

در قطعه کد فوق، بایستی به جای عبارت `{"<your-version>"}` 
ورژن موردنظر برنامه‌تان را وارد کنید.
همچنین باید به جای عبارت
`{"<your-app-name>"}` نیز، 
شناسه برنامه خود را قرار دهید.

در نهایت کافیست با استفاده از ابزار [`Liara CLI`](https://docs.liara.ir/references/cli/about) و در جایی که فایل `liara.json` قرار دارد، دستور زیر را اجرا کنید تا برنامه‌تان در لیارا، مستقر شود:

```json
liara deploy
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
