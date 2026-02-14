Original link: https://docs.liara.ir/dbaas/mongodb/inspector/

# مدیریت داده های دیتابیس MongoDB در کنسول 

قابلیت مدیریت داده های دیتابیس مونگو دی‌بی (inspector) به شما این امکان را می‌دهد که داده‌های دیتابیس‌تان را بدون نیاز به ابزارهای جانبی مانند `Compass` مستقیماً از طریق پنل لیارا مدیریت کنید.
در ادامه، شیوه کار با این بخش، توضیح داده شده است.

![mongodb inspector](https://media.liara.ir/mongodb/mongodb-inspector.png)

## انتخاب دیتابیس

برای انتخاب دیتابیس، تنها کافیست تا پس از ورود به پنل کاربری و انتخاب دیتابیس MongoDB از بخش **دیتابیس**، وارد قسمت **مدیریت داده‌ها** شوید.  در این بخش، می‌توانید  
در قسمت سمت راست و بالای صفحه کنسول از **Databases**، دیتابیس مورد نظر خود را انتخاب کنید.

[Video link](https://media.liara.ir/mongodb/select-database-using-inspector.mp4)

## ایجاد دیتابیس جدید

برای ایجاد دیتابیس جدید، کافیست در قسمت **Databases**، بر روی گزینه `+` کلیک کنید. سپس نام دیتابیس و collection خود را وارد کرده و بر روی گزینه **اضافه کردن** کلیک کنید:

[Video link](https://media.liara.ir/mongodb/create-database-using-inspector.mp4)

## حذف دیتابیس
برای حذف دیتابیس، کافیست در قسمت **Databases**، ابتدا دیتابیس مدنظر خود را انتخاب کنید؛ سپس بر روی آیکون سطل زباله کنار دیتابیس مورد نظر کلیک کنید. در نهایت، با نوشتن اسم دیتابیس و کلیک بر روی گزینه **حذف دیتابیس**، دیتابیس شما حذف خواهد شد:

[Video link](https://media.liara.ir/mongodb/delete-database-using-inspector.mp4)

## انتخاب collection

برای انتخاب collection، کافیست تا پس از انتخاب دیتابیس، در قسمت سمت راست و بالای صفحه کنسول، collection مورد نظر خود را انتخاب کنید.

[Video link](https://media.liara.ir/mongodb/select-collection-using-inspector.mp4)

## ایجاد collection جدید

برای ایجاد collection جدید، کافیست تا بر روی گزینه `+` کلیک کنید. سپس نام collection خود را وارد کرده و بر روی گزینه **اضافه کردن** کلیک کنید:

[Video link](https://media.liara.ir/mongodb/create-collection-using-inspector.mp4)

## تغییر نام collection

برای تغییر نام collection، کافیست تا پس از انتخاب collection مورد نظر، بر روی سه نقطه کلیک کرده و سپس گزینه **تغییر نام مجموعه** را انتخاب کنید. سپس نام جدید collection خود را وارد کرده و بر روی گزینه **تغییر نام** کلیک کنید:

[Video link](https://media.liara.ir/mongodb/rename-collection-using-inspector.mp4)

## حذف collection

برای حذف collection، کافیست تا پس از انتخاب collection مورد نظر، بر روی سه نقطه کلیک کرده و سپس گزینه **حذف مجموعه** را انتخاب کنید. سپس نام collection خود را وارد کرده و بر روی گزینه **حذف مجموعه** کلیک کنید:

[Video link](https://media.liara.ir/mongodb/delete-collection-using-inspector.mp4)

## اضافه‌کردن رکورد به collection
برای اضافه‌کردن رکورد به collection، کافیست تا پس از انتخاب دیتابیس و collection مورد نظر، بر روی گزینه `Add Record+` کلیک کنید؛ داکیومنت خود را قرار دهید و سپس بر روی گزینه **اضافه کردن** کلیک کنید:

[Video link](https://media.liara.ir/mongodb/add-record-to-collection-using-inspector.mp4)


در نظر داشته باشید که برای اضافه کردن رکورد جدید به collection: 

- تمامی Key ها باید به صورت رشته (string) باشند
- گذاشتن کاما (,) در انتهای آخرین جفت <Key,Value> مجاز نیست

نمونه‌ای از یک داکیومنت صحیح:

```bash
{
  "name": "Test User",
  "email": "testuser@example.com",
  "role": "tester",
  "isActive": true,
  "created_at": { "$date": "2025-07-10T00:00:00Z" }
}
```

## ویرایش رکورد در collection
برای ویرایش رکورد، تنها کافیست تا پس از انتخاب رکورد، بر روی آیکون ویرایش (قلم)، کلیک کنید و پس از تغییر داکیومنت، بر روی گزینه **ویرایش** کلیک کنید تا داکیومنت مدنظرتان، ویرایش شود: 

[Video link](https://media.liara.ir/mongodb/edit-record-using-inspector.mp4)

## حذف رکورد در collection

برای حذف رکود در collection، کافیست تا پس از انتخاب رکورد، بر روی آیکون سطل زباله کلیک کنید و سپس با تایید حذف با کلیک بر روی گزینه **حذف**، رکورد انتخابی، حذف خواهد شد:

[Video link](https://media.liara.ir/mongodb/delete-record-using-inspector.mp4)

## اجرای کوئری

برای اجرای کوئری، کافیست تا پس از انتخاب colleciton مدنظرتان، کوئری خود را در باکس خالی تعبیه شده، قرار دهید  
و سپس گزینه `Find` را بزنید. برای خالی کردن باکس و حذف نتایج هم، تنها کافیست تا گزینه `Reset` را انتخاب کنید.  
در صورتی که قصد دارید که کوئری خود را همزمان بنویسید، می‌توانید برای تجربه کاربری بهتر، آیکون قلم را انتخاب کنید تا یک صفحه جدید، برای شما باز شود:

[Video link](https://media.liara.ir/mongodb/execute-query-using-inspector.mp4)


در نظر داشته باشید که برای نوشتن کوئری و اجرای صحیح آن: 

- از ساختار Aggregation Framework استفاده کنید
- ورودی باید به صورت یک آرایه از اشیاء باشد
- در انتهای آخرین عضو از آرایه، گذاشتن کاما (,) مجاز نیست
- تمامی Key ها باید به صورت رشته (string) باشند
- گذاشتن کاما (,) در انتهای آخرین جفت <Key,Value> مجاز نیست

نمونه‌ای از یک کوئری صحیح: 

```bash
[
  {
    "$match": {
      "created_at": {
        "$gte": {
          "$date": "2025-07-01T00:00:00Z"
        }
      }
    }
  }
]
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
