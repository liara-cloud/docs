Original link: https://docs.liara.ir/references/api/get-info/

# دریافت اطلاعات جامع کاربر و کنسول با API 


یکی از endpointهایی که `api.liara.ir` ارائه می‌دهد، `me/` است. این endpoint شامل اطلاعات زیر است: 


- اطلاعات خود کاربر (مانند نام، ایمیل، شماره موبایل و نوع حساب کاربری)
- اطلاعات Object Storage کاربر
- اطلاعات امنیتی حساب کاربری
- اطلاعات مرتبط با سطح کاربری فعلی کاربر
- امکانات فعال حساب کاربری (مانند شبکه خصوصی)
- نسخه‌های قابل ارائه دیتابیس‌های لیارا
- نسخه‌های پیش‌فرض دیتابیس‌های لیارا
- پلن‌های PaaS لیارا
- پلن‌های سرویس ایمیل لیارا
- پلن‌های دیتابیس لیارا
- پلن‌های Object Storage لیارا
- بسته امکانات PaaS
- بسته امکانات دیتابیس‌ها
- اطلاعات بسته‌های سطح کاربری


## ساختار پاسخ

پاسخ این endpoint یک آبجکت JSON است که از چند بخش اصلی تشکیل شده است. در فهرست زیر می‌توانید این بخش‌ها را ببینید:


- `user`: اطلاعات کاربر، Object Storage، امنیت حساب و سطح کاربری فعلی
- `databaseVersions`: نسخه‌های قابل ارائه برای هر نوع دیتابیس
- `defaultDatabaseVersions`: نسخه پیش‌فرض هر نوع دیتابیس
- `plans`: پلن‌های محصولات لیارا و بسته‌های امکانات آن‌ها


نمونه‌ای از پاسخ این endpoint (بخش `user`) در ادامه آورده شده است (با مقادیر فرضی): 


```json
{
"user": {
"_id": "64e7xxxxxxxxxxxxxxxxxxxx",
"fullname": "نام و نام خانوادگی",
"nationalCode": "0123456789",
"invoiceIssuingEnabled": true,
"email": "user@example.com",
"phone": "09123456789",
"joined_at": "2023-08-24T11:53:47.323Z",
"hasPassword": true,
"emailVerifiedAt": "2023-08-24T11:56:54.165Z",
"phoneVerifiedAt": "2023-08-24T11:56:47.004Z",
"isVerified": true,
"storage": {
"namespace": "64e7xxxxxxxxxxxxxxxxxxxx",
"status": "DEACTIVE",
"planID": "ir-40g",
"accessKey": "ACCESS_KEY",
"secretKey": "SECRET_KEY"
},
"isTeam": false,
"accountType": "REAL_PERSON",
"minCreditAmount": 20000,
"isManualMinCredit": false,
"legacyNetworkFeature": false,
"privateNetworkFeature": true,
"legacyObjectStorageFeature": false,
"hasSucceedPayment": true,
"currentSubscriptionPlan": {
"type": "subscription",
"subscriptionPlanID": "free",
"subscriptionPlanExpiration": "2026-10-29T08:40:26.064Z",
"maxTechnicalTicketsPerMonth": "infinite",
"subscriptionDurationType": "monthly",
"technicalTicketsCount": 0
},
"gitRepositoryIntegrations": [],
"gitProviderIntegrations": [],
"twoFA": false,
"remainingFreeCredit": 0
},
"databaseVersions": { ... },
"defaultDatabaseVersions": { ... },
"featureFlags": [ ... ],
"plans": { ... }
}
```

> اطلاعات پاسخ این endpoint شامل اطلاعات حساس مانند اطلاعات هویتی کاربر و کلیدهای دسترسی Object Storage است. لطفاً این اطلاعات را در اختیار دیگران قرار ندهید و آن‌ها را در جاهایی مانند لاگ، تیکت و مخازن کد عمومی ذخیره نکنید.



در ادامه، مهم‌ترین فیلدهای بخش `user` توضیح داده شده است:


- `fullname` و `nationalCode`: نام و کد ملی ثبت‌شده برای حساب کاربری
- `email` و `phone`: ایمیل و شماره موبایل حساب کاربری. زمان تایید هر کدام در `emailVerifiedAt` و `phoneVerifiedAt` مشخص است
- `isVerified`: وضعیت احراز هویت حساب کاربری
- `accountType`: نوع حساب کاربری، مانند `REAL_PERSON` برای حساب‌های حقیقی
- `isTeam`: مشخص می‌کند که آیا این حساب یک تیم است یا خیر
- `invoiceIssuingEnabled`: مشخص می‌کند که آیا صدور فاکتور برای حساب فعال است یا خیر
- `minCreditAmount`: حداقل مبلغ اعتبار برای اعلان در حساب کاربری. اگر `isManualMinCredit` برابر `true` باشد، این مقدار به‌صورت دستی تعیین شده است
- `remainingFreeCredit`: میزان اعتبار رایگان باقی‌مانده
- `hasSucceedPayment`: مشخص می‌کند که آیا حساب کاربری تاکنون پرداخت موفقی داشته است یا خیر
- `hasPassword` و `twoFA`: وضعیت تعیین رمز عبور و فعال بودن احراز هویت دو مرحله‌ای
- `storage`: اطلاعات Object Storage شامل `namespace`، وضعیت، شناسه پلن و کلیدهای دسترسی
- `privateNetworkFeature`: مشخص می‌کند که آیا امکان استفاده از شبکه خصوصی برای حساب فعال است یا خیر
- `currentSubscriptionPlan`: اطلاعات سطح کاربری فعلی، شامل شناسه پلن (`subscriptionPlanID`)، تاریخ انقضا و ...
- `gitRepositoryIntegrations` و `gitProviderIntegrations`: اتصال‌های حساب کاربری به repositoryها و سرویس‌های مبتنی بر Git


## نمونه ارسال درخواست

برای دریافت اطلاعات جامع کاربری خود و کنسول لیارا، می‌توانید مانند دستور `cURL` زیر عمل کنید: 



```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN"
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت فقط اطلاعات کاربری

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 



## نمونه ارسال درخواست برای دریافت اطلاعات Object Storageهای کاربر

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user.storage'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 



## نمونه ارسال درخواست برای دریافت اطلاعات امنیتی حساب کاربر

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user | {
twoFA,
hasPassword,
emailVerifiedAt,
phoneVerifiedAt,
lastTwoFAVerifiedAt
}'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات مرتبط با سطح کاربری فعلی کاربر

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user.currentSubscriptionPlan'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت نسخه‌های دیتابیس‌های قابل ارائه

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.databaseVersions'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت نسخه پیش‌فرض دیتابیس‌ها

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.defaultDatabaseVersions'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات پلن‌های تمامی محصولات

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات پلن‌های PaaS

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.projects'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت پلن‌های سرویس ایمیل

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.mail'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات پلن‌های دیتابیس

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.databases'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات پلن‌های Object Storage

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.objectStorage'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات بسته‌های امکانات PaaS

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.projectBundlePlans'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات بسته‌های امکانات DBaaS

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.databaseBundlePlans'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات بسته‌های سطح کاربری

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.subscription'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 


## نمونه ارسال درخواست برای دریافت اطلاعات هویتی و امکانات فعال حساب کاربر

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user | {fullname, email, phone, accountType, isVerified, isTeam, privateNetworkFeature}'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات اعتبار حساب کاربر

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user | {minCreditAmount, isManualMinCredit, remainingFreeCredit, hasSucceedPayment}'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت نسخه‌های یک دیتابیس مشخص

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.databaseVersions.postgres'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

در مثال فوق، نسخه‌های قابل ارائه برای PostgreSQL دریافت می‌شود. به‌جای `postgres` می‌توانید یکی از مقادیر `mysql`، `mariadb`، `mssql`، `mongodb`، `redis`، `elasticsearch`، `rabbitmq` یا `clickhouse` را قرار دهید.

## نمونه ارسال درخواست برای دریافت نسخه پیش‌فرض یک دیتابیس مشخص

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.defaultDatabaseVersions.redis'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت پلن‌های قابل استفاده PaaS

```bash
curl --request GET \
--url https://api.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.projects | with_entries(select(.value.available == true))'
```


در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 



با دستور فوق، فقط پلن‌هایی که مقدار `available` آن‌ها برابر `true` است، یعنی در حال حاضر قابل سفارش هستند، نمایش داده می‌شوند. این روش برای پلن‌های دیتابیس (`.plans.databases`)، Object Storage (`.plans.objectStorage`) و سرویس ایمیل (`.plans.mail`) هم قابل استفاده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
