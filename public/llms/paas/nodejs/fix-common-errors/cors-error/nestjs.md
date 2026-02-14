Original link: https://docs.liara.ir/paas/nodejs/fix-common-errors/cors-error/nestjs/

# رفع خطای CORS در فریم‌ورک NestJS

برای رفع این خطا در فریم‌ورک NestJS، در ابتدا باید ماژول‌های مورد نیاز را با اجرای دستور زیر، نصب کنید:

```bash
npm install @nestjs/common @nestjs/core cors
```

در نهایت، می‌توانید در فایل `src/main.ts` خود، مانند قطعه کد زیر، عمل کنید:

```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
