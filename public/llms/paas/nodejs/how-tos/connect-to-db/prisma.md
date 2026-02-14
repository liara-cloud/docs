Original link: https://docs.liara.ir/paas/nodejs/how-tos/connect-to-db/prisma/

# اتصال به دیتابیس با استفاده از Prisma در برنامه‌های NodeJS 

[Video link](https://media.liara.ir/prisma/prisma.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/nodejs-getting-started/tree/prisma) قابل مشاهده و دسترسی است.

[Prisma](https://www.prisma.io/) یک ORM متن‌باز و شامل سه بخش زیر است:‌

- **Prisma Client**: یک کوئری‌ساز auto-generated و type-safe برای [NodeJS](https://docs.liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D9%86%D9%88%D8%AF-%D8%AC%DB%8C-%D8%A7%D8%B3-node/) و [TypeScript](https://docs.liara.ir/paas/nodejs/how-tos/use-type-script/)
- **Prisma Migrate**: سیستم مدیریت migrationها در دیتابیس
- **Prisma Studio**: رابط گرافیکی برای مشاهده و ویرایش داده‌ها در دیتابیس

Prisma Client می‌تواند در هر برنامه‌ی NodeJS یا TypeScript مورد استفاده قرار گیرد، از جمله برنامه‌های serverless و میکروسرویس‌ها.  
در ادامه، به نحوه استفاده از این ORM با [دیتابیس PostgreSQL](https://docs.liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D8%A7%D8%A8%D8%B1%DB%8C-postgre-sql/) و نحوه استقرار برنامه‌های مبتنی بر آن در لیارا، پرداخته شده است. 

برای استفاده از این ORM، در ابتدا باید با اجرای دستور زیر در خط فرمان سیستم خود، فایل‌های Migration را ایجاد کنید:

۱. ایجاد یک پروژه NodeJS  
با اجرای دستورات زیر، محیط پروژه NodeJS خود را ایجاد کنید:

```bash
mkdir prisma-liara
cd prisma-liara
npm init -y
```

۲. نصب پکیج‌های مورد نیاز  
با اجرای دستورات زیر، تمامی پکیج‌ها و ابزارهای مورد نیاز برنامه را، نصب کنید:

```bash
npm install prisma @types/node @types/express typescript --save-dev
npm install @prisma/client @prisma/adapter-pg @faker-js/faker express
```

۳. راه‌اندازی و پیکربندی Prisma  
با اجرای دستور زیر، Prisma را در برنامه خود، راه‌اندازی کنید:

```bash
npx prisma init --datasource-provider postgresql
```

دستور فوق، چندین فایل مرتبط با prisma را در پروژه‌تان، ایجاد می‌کند.  
درون فایل `env.`، متغیر `DATABASE_URL` را مشابه زیر، مقداردهی کنید:

```bash
DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:PORT/postgres
```
> مقدار متغیر فوق را با اطلاعات دیتابیس PostgreSQL خود، آپدیت کنید.

در ادامه، قطعه کد زیر را جایگزین کد فعلی فایل `prisma/schema.prisma` کنید:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
}

model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String
}
```

۴. ایجاد migrationها  
با اجرای دستور زیر، migrationها را قبل از استقرار برنامه، تولید کنید:

```bash
npx prisma migrate dev --name init
```

۵. ایجاد و پیکربندی‌ برنامه اصلی  
مسیر `src/server.ts` را ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```node
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";

dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });
const app = express();

function createRandomUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });

  return {
    name: `${firstName} ${lastName}`,
    email,
  };
}

app.get("/", async (req: Request, res: Response) => {
  try {
    const randomUser = createRandomUser();
    const user = await prisma.user.create({
      data: randomUser,
    });

    res.json({
      success: true,
      user,
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

در مسیر اصلی پروژه، یک فایل به نام `tsconfig.json` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts", "prisma.config.ts"]
}
```

۶. آماده‌سازی برنامه برای استقرار  
بخش `scripts` را مانند زیر در فایل `package.json` تغییر دهید:

```json
"scripts": {
    "build": "npx prisma generate && tsc",
    "start": "node dist/src/server.js"
},
```

همچنین، یک فایل در مسیر اصلی پروژه، به نام `liara_pre_start.sh` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```bash
npx prisma migrate deploy
```

۷. استقرار برنامه در لیارا  
متغیر `DATABASE_URL` تعریف شده در فایل `env.` را طبق مستندات [تنظیم متغیرهای محیطی در برنامه](https://docs.liara.ir/paas/details/envs)، به برنامه خود اضافه کنید.

> در صورت استفاده از [دیتابیس PostgreSQL لیارا](https://liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D8%A7%D8%A8%D8%B1%DB%8C-postgre-sql/)، توصیه می‌شود هم برنامه و هم دیتابیس را در یک [شبکه خصوصی](https://docs.liara.ir/paas/details/private-network) قرار دهید و برای ایجاد اتصال ایمن و مطمئن از URI شبکه خصوصی دیتابیس استفاده کنید.

در نهایت، طبق [مستندات ساخت برنامه NodeJS](https://docs.liara.ir/paas/nodejs/how-tos/create-app/)، یک برنامه NodeJS ایجاد کنید و با اجرای دستور زیر با استفاده از [Liara CLI](https://docs.liara.ir/references/cli/about/)، برنامه خود را در لیارا، مستقر کنید:

```bash
liara deploy --port 3000
```

> یک پروژه NodeJS مبتنی بر Prisma در [گیت‌هاب لیارا](https://github.com/liara-cloud/nodejs-getting-started/tree/prisma) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
