Original link: https://docs.liara.ir/references/api/get-info/

# دریافت اطلاعات جامع کاربر و کنسول با API 

یکی از endpointهایی که `api.iran.liara.ir` ارائه می‌دهد، `me/` است. این endpoint شامل اطلاعات زیر است: 

- اطلاعات خود کاربر
- اطلاعات Object Storage کاربر
- اطلاعات امنیتی حساب کاربری
- اطلاعات مرتبط با سطح کاربری فعلی کاربر
- نسخه‌های قابل ارائه دیتابیس‌های لیارا
- نسخه‌های پیش‌فرض دیتابیس‌های لیارا
- Feature Flag های فعال سیستم لیارا
- پلن‌های PaaS لیارا
- پلن‌های سرویس ایمیل لیارا
- پلن‌های دیتابیس لیارا
- پلن‌های Object Storage لیارا
- بسته امکانات PaaS
- بسته امکانات دیتابیس‌ها
- اطلاعات بسته‌های سطح کاربری

## نمونه ارسال درخواست

برای دریافت اطلاعات جامع کاربری خود و کنسول لیارا، می‌توانید مانند دستور `cURL` زیر عمل کنید: 

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN"
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت فقط اطلاعات کاربری

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات Object Storageهای کاربر

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user.storage'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات امنیتی حساب کاربر

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
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
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.user.currentSubscriptionPlan'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت نسخه‌های دیتابیس‌های قابل ارائه

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.databaseVersions'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت نسخه پیش‌فرض دیتابیس‌ها

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.defaultDatabaseVersions'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت فیچر فلگ‌های کنسول لیارا

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.featureFlags'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات پلن‌های تمامی محصولات

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات پلن‌های PaaS

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.projects'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت پلن‌های سرویس ایمیل

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.mail'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات پلن‌های دیتابیس

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.databases'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات پلن‌های Object Storage

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.objectStorage'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات بسته‌های امکانات PaaS

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.projectBundlePlans'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات بسته‌های امکانات DBaaS

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.databaseBundlePlans'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید. 

## نمونه ارسال درخواست برای دریافت اطلاعات بسته‌های سطح کاربری

```bash
curl --request GET \
--url https://api.iran.liara.ir/v1/me \
--header "Authorization: Bearer TOKEN" \
| jq '.plans.subscription'
```

در عبارت فوق، بایستی به جای `TOKEN`، [کلید API حساب کاربری خود](https://docs.liara.ir/references/api/about/#api-access-key) را وارد کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
