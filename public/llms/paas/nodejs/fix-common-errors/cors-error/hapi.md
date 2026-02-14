Original link: https://docs.liara.ir/paas/nodejs/fix-common-errors/cors-error/hapi/

# رفع خطای CORS در فریم‌ورک Hapi

برای رفع این خطا در فریم‌ورک Hapi، می‌توانید مانند قطعه کد زیر، در برنامه خود، عمل کنید:

```js
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0',
    routes: {
      cors: true // Enable CORS for all origins
    }
  });

  await server.start();
  console.log('Server is running on %s', server.info.uri);
};

init();
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
