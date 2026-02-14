Original link: https://docs.liara.ir/one-click-apps/supertokens/how-tos/connect-to-app/

# اتصال به SuperTokens در NextJS 

برای اتصال SuperTokens به برنامه خود، نیاز به انجام کار خاصی نیست و صرفاً کافیست تا آدرس SuperTokens را با کمک [SDKهای مربوط](https://supertokens.com/docs/community/sdks) به فریم‌ورک انتخابی‌تان، در برنامه قرار دهید.  
در ادامه، مستندات مربوط به اتصال به SuperTokens در برنامه‌های NextJS آمده است: 

در ابتدا، می‌توانید با استفاده از دستور زیر، یک قالب NextJS آماده مبتنی بر SuperTokens را در Local، ایجاد کنید: 

```bash
npx create-supertokens-app@latest
```

سپس، کافیست تا وارد مسیر `app/config/appinfo.ts/` یا `config/appinfo.ts/` شوید و قطعه کد زیر را در آن، قرار دهید:

```json
const port = process.env.APP_PORT || 3000;

const apiBasePath = "/api/auth/";

export const websiteDomain = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${port}`;

export const appInfo = {
    appName: "SuperTokens Demo App",
    websiteDomain: "https://example.com",
    apiDomain: "https://example.com",
    apiBasePath: "/api/auth",
    websiteBasePath: "/auth",
};
```

در نهایت، کافیست تا برنامه‌تان را در لیارا مستقر کنید تا برنامه به SuperTokens متصل شود.

سپس در فایل `app/config/backend.ts/` یا `config/backend.ts/`، در فیلدی به نام `connectionURI` در `supertokens`، آدرس برنامه SuperTokens خود را به صورت کامل، وارد کنید؛ به عنوان مثال:

```js
// other codes ...

export let backendConfig = (): TypeInput => {
    return {
        framework: "express",
        supertokens: {
            // this is the location of the SuperTokens core.
            connectionURI: "https://supertokens-mckstswzz.liara.run",
        },

// other codes ...
```

سپس، کافیست تا برنامه‌تان را در لیارا مستقر کنید تا به SuperTokens متصل شود.  

> یک پروژه آماده استقرار در [اینجا](https://github.com/liara-cloud/supertokens-nextjs.git) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
