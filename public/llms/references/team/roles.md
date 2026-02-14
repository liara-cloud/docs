Original link: https://docs.liara.ir/references/team/roles/

# آشنایی با نقش‌های یک تیم در لیارا

اعضای یک تیم در لیارا، می‌توانند نقش‌های متفاوتی داشته باشند؛ یک کاربر می‌تواند نقش مهمان را داشته باشد (بدون هیچ دسترسی خاصی) و یا اینکه  
بازرس تیم باشد. در ادامه به معرفی نقش‌ها پرداخته شده است. 

![teams on liara](https://media.liara.ir/teams/members-and-roles-in-teams.png)

## نقش مهمان

کاربری که نقش مهمان را داشته باشد، هیچ دسترسی خاصی به کنسول ندارد. بدیهی است که سرویس‌ها، میزان اعتبار و سایر موارد مربوط به تنظیمات تیم به کاربر مهمان نمایش داده نمی‌شود.

![teams on liara](https://media.liara.ir/teams/guest-role.png)

کاربر مهمان، تنها می‌تواند به موارد زیر دسترسی داشته باشد؛ به جز موارد زیر، کاربر مهمان، دسترسی دیگری نخواهد داشت.  
دسترسی‌های زیر، عمومی هستند و هر عضو تیم، می‌تواند به موارد زیر، دسترسی داشته باشد:

- اطلاعات تیم (نام، شناسه، کلید API و اطلاعات اعضای تیم)  
- اعلانات کنسول تیم (بدون دسترسی برای ثبت تغییر)  
- تیکت‌های تیم (مشاهده و مدیریت آن‌ها)  

## نقش حسابدار

حسابدار همانند [کاربر مهمان](#guest) دسترسی محدودی دارد؛ با این تفاوت  
که کاربر حسابدار، می‌تواند میزان اعتبار مالی تیم و سایر اطلاعات مربوط به آن را مشاهده کند و به آن، دسترسی داشته باشد: 

![teams on liara](https://media.liara.ir/teams/accountant-role.png)

همچنین، حسابدار می‌تواند حالت اعلان حداقل اعتبار (حالت خودکار یا حالت دستی) را، مشخص کند.  

## نقش بازرس

یک بازرس، طبق مجوزها، دسترسی‌های [دیدن پلتفرم](https://docs.liara.ir/references/team/permissions/#paas)، [دیدن دیتابیس](https://docs.liara.ir/references/team/permissions/#dbaas)، [دیدن سامانه مدیریت دامنه](https://docs.liara.ir/references/team/permissions/#dns)، [دیدن ایمیل‌سرور](https://docs.liara.ir/references/team/permissions/#mail-server) و [دیدن باکت](https://docs.liara.ir/references/team/permissions/#bucket) را دارد:

![teams on liara](https://media.liara.ir/teams/inspector-role.png)

## نقش گرداننده

گرداننده، طبق مجوزها، دسترسی‌های [عملیات پلتفرم](https://docs.liara.ir/references/team/permissions/#paas)، [عملیات دیتابیس](https://docs.liara.ir/references/team/permissions/#dbaas)، [عملیات سامانه مدیریت دامنه](https://docs.liara.ir/references/team/permissions/#dns)، [عملیات ایمیل‌سرور](https://docs.liara.ir/references/team/permissions/#mail-server) و [عملیات باکت](https://docs.liara.ir/references/team/permissions/#bucket) را دارد:

![teams on liara](https://media.liara.ir/teams/operator-role.png)

## نقش مدیر

یک مدیر طبق مجوزها، دسترسی‌های [مدیریت و ساخت پلتفرم](https://docs.liara.ir/references/team/permissions/#paas)، [مدیریت و ساخت دیتابیس](https://docs.liara.ir/references/team/permissions/#dbaas)، [مدیریت و ساخت سامانه مدیریت دامنه](https://docs.liara.ir/references/team/permissions/#dns)، [مدیریت و ساخت ایمیل‌سرور](https://docs.liara.ir/references/team/permissions/#mail-server) و [مدیریت و ساخت باکت](https://docs.liara.ir/references/team/permissions/#bucket) را دارد:

![teams on liara](https://media.liara.ir/teams/manager-role.png)

## نقش مالک

نقش مالک همانند مدیر است با این تفاوت که مالک به [تیم](https://docs.liara.ir/references/team/permissions/#team) و [اعتبار مالی](https://docs.liara.ir/references/team/permissions/#billing) آن نیز، دسترسی دارد.

![teams on liara](https://media.liara.ir/teams/owner-role.png)

> همچنین بخوانید: [شیوه ایجاد نقش جدید در تیم](https://docs.liara.ir/references/team/create-new-role/)  
> با توجه به **آزمایشی** بودن قابلیت تیم‌ها در لیارا، امکان تغییر نوع دسترسی در نقش‌ها وجود خواهد داشت.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
