Original link: https://docs.liara.ir/object-storage/how-tos/direct-download/

# دانلود مستقیم فایل از باکت

در بسیاری از مواقع، زمانی که یک فایل در باکت آپلود می‌شود، نیاز است تا کاربران بتوانند آن فایل را به صورت مستقیم دانلود کنند. به طور پیش‌فرض، وقتی فایلی را از باکت سازگار با S3 دانلود می‌کنید، ممکن است مرورگر وب آن را به جای دانلود، مستقیماً نمایش دهد (مثلاً فایل‌های تصویری یا متنی). برای اطمینان از اینکه فایل به صورت خودکار دانلود می‌شود، باید هدر Content-Disposition را با مقدار attachment تنظیم کنید.

## هدر Content-Disposition چیست؟
هدر Content-Disposition به مرورگر وب می‌گوید که چگونه باید محتوا را پردازش کند.  
این هدر می‌تواند به دو صورت اصلی inline (وقتی  محتوا باید مستقیماً در مرورگر نمایش داده شود) یا attachment (وقتی محتوا باید به صورت یک فایل ضمیمه دانلود شود)، باشد.

## نحوه تنظیم هدر Content-Disposition در باکت
برای تنظیم این هدر هنگام آپلود فایل در S3، باید از پارامترهای مناسب در درخواست putObject استفاده کنید. به عنوان مثال، در SDK های مختلف AWS، می‌توانید مشابه شکل زیر، عمل کنید:

```js
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
  // ...
  // other params
  ContentDisposition: 'attachment'
};

s3.putObject(params, function(err, data) {
  if (err) {
    console.log("Error uploading data: ", err);
  } else {
    console.log("Successfully uploaded data to your-bucket-name/your-file-name");
  }
});
```

با انجام این کار، برنامه مطمئن می‌شود که فایل را به جای نمایش آن، دانلود کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
