Original link: https://docs.liara.ir/ai/cookbook/natural-language-postgres/

# ساخت برنامه کار با PostgreSQL با زبان طبیعی

در این راهنما، خواهید آموخت چگونه یک برنامه بسازید که از هوش مصنوعی برای تعامل با دیتابیس PostgreSQL از طریق زبان طبیعی استفاده کند.  
این برنامه می‌تواند:

- کوئری‌های SQL را از ورودی زبان طبیعی تولید کند
- اجزای کوئری را به زبان ساده توضیح دهد
- نموداری برای نمایش نتایج کوئری ایجاد کند

## فناوری‌های پروژه
این پروژه، از فناوری‌های زیر استفاده خواهد کرد:  

- [NextJS](https://liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D9%86%DA%A9%D8%B3%D8%AA-%D8%AC%DB%8C-%D8%A7%D8%B3-next/)
- [AI SDK](https://ai-sdk.dev/docs/introduction)
- [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/)
- [دیتابیس PostgreSQL](https://liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D8%A7%D8%A8%D8%B1%DB%8C-postgre-sql/)
- [shadcn-ui](https://ui.shadcn.com/) و [TailwindCSS](https://tailwindcss.com/) برای استایل‌دهی
- [Recharts](https://recharts.org/) برای ترسیم داده‌ها

## راه‌اندازی پروژه

برای تمرکز کامل بر روی هوش مصنوعی، می‌توانید از پروژه کامل  
استفاده کنید. در ابتدا یک کلون از [ریپازیتوری AI SDK Examples](https://github.com/liara-cloud/ai-sdk-examples) تهیه کنید و وارد دایرکتوری `Natural-Language-Postgres` شوید:

```bash
git clone https://github.com/liara-cloud/ai-sdk-examples.git
cd ai-sdk-examples/Natural-Language-Postgres
```

پس از انجام کار فوق، دستور زیر را اجرا کنید تا مجموعه‌داده مربوط به پروژه، در مسیر اصلی پروژه قرار بگیرد و قابل استفاده، باشد:

```bash
curl -O http://media.liara.ir/ai/ai-sdk/cookbook/natural-language-postgres/unicorns.csv
```

اکنون، کافیست تا وابستگی‌های برنامه را با اجرای دستور زیر، نصب کنید:

```bash
pnpm install
```

در ادامه، با اجرای دستور زیر (در لینوکس)، یک کپی از فایل `env.example.` ایجاد کنید و نام آن را `env.` بگذارید:

```bash
cp .env.example .env
```

سپس، متغیرهای محیطی تعریف شده در فایل `env.` را با مقادیر واقعی، مقداردهی کنید:  


```bash
BASE_URL=xxxxxxx
LIARA_API_KEY=xxxxxxx
POSTGRES_USER=xxxxxxx
POSTGRES_PORT=xxxxxxx
POSTGRES_HOST=xxxxxxx
POSTGRES_PASSWORD=xxxxxxx
POSTGRES_DATABASE=xxxxxxx
```

مقدار `BASE_URL`، آدرس سرویس هوش مصنوعی لیارا خواهد بود. همچنین، `LIARA_API_KEY`، کلید API کنسول لیارا شما است. مابقی متغیرها، مربوط به دیتابیس Postgres می‌شوند.  

پس از تنظیم متغیرهای محیطی، شما می‌تواند با اجرای دستور زیر در مسیر اصلی پروژه، دیتابیس را مقداردهی کنید:  

```bash
pnpm run seed
```

> این مرحله ممکن است کمی زمان‌بر باشد. باید پیامی مشاهده کنید که نشان می‌دهد جدول Unicorns ایجاد شده است و سپس پیام موفقیت‌آمیز بودن مقداردهی اولیه‌ی دیتابیس، نمایش داده خواهد شد.  
> اسم مجموعه‌داده باید `unicorns.csv` باشد و در مسیر اصلی پروژه، قرار بگیرد.

پس از انجام کارهای فوق، تنها کافیست تا سرور development را استارت کنید:  

```bash
pnpm run dev
```

پس از اجرای دستور فوق، برنامه شما اجرا می‌شود و می‌توانید آن را  
در مرورگر خود در آدرس [http://localhost:3000](http://localhost:3000)، مشاهده بفرمایید.

## درباره‌ی مجموعه‌داده

مجموعه‌داده‌ی Unicorn شامل اطلاعاتی درباره‌ی استارتاپ‌های یونیکورن (شرکت‌هایی با ارزش‌گذاری بیش از ۱ میلیارد دلار) است. این اطلاعات شامل موارد زیر می‌باشد:

- نام شرکت
- ارزش‌گذاری
- تاریخ پیوستن (زمان رسیدن به وضعیت یونیکورن)
- کشور
- شهر
- صنعت
- برخی از سرمایه‌گذاران منتخب

این مجموعه‌داده شامل بیش از ۱۰۰۰ ردیف داده در ۷ ستون است که داده‌ای ساختارمند و غنی را برای تحلیل فراهم می‌کند. این ویژگی آن را به گزینه‌ای ایده‌آل برای اجرای انواع کوئری‌های SQL و استخراج دیدگاه‌های جالب از اکوسیستم استارتاپ‌های یونیکورن تبدیل می‌کند.

## ساختار پروژه

این ریپازیتوری، شامل تمامی اجزای مورد نیاز برای توسعه‌ی برنامه است، از جمله:

- اسکریپت مقداردهی اولیه‌ی دیتابیس (فایل `lib/seed.ts`)
- کامپوننت‌های پایه ساخته‌شده با shadcn/ui (دایرکتوری `components`)
- تابعی برای اجرای کوئری‌های SQL (فایل `app/actions.ts`)
- تعریف typeها برای اسکیمای دیتابیس (فایل `lib/types.ts`)
- اسکریپت اتصال امن به دیتابیس (فایل `lib/db.ts`)
- تبدیل داده‌ها به نمودارهای multi-line (فایل `lib/rechart-format.ts`)

## کامپوننت‌های موجود

برنامه دارای یک صفحه‌ی اصلی است که در فایل `app/page.tsx` تعریف شده و به عنوان رابط کاربری اصلی عمل می‌کند.  
در بالای صفحه، کامپوننت `header.tsx` عنوان و توضیحات برنامه را نمایش می‌دهد.  
در زیر آن، کامپوننت `search.tsx` شامل یک فیلد ورودی و دکمه‌ی جستجو، قرار دارد که برای وارد کردن پرسش‌های زبان طبیعی به کار می‌رود.

در ابتدای بارگذاری، مجموعه‌ای از کوئری‌های پیشنهادی در `suggested-queries.tsx` نمایش داده می‌شوند که می‌توانید روی آن‌ها کلیک کرده و به سرعت عملکرد برنامه را آزمایش کنید.

هنگامی که یک کوئری ارسال می‌کنید:

- بخش کوئری‌های پیشنهادی مخفی می‌شود و loading state، نمایش داده می‌شود
- پس از تکمیل پردازش، یک کارت از کامپوننت `query-viewer.tsx` ظاهر می‌شود که کوئری SQL تولیدشده را نمایش می‌دهد
- در ادامه، داده‌های نتایج به‌صورت جدول نمایش داده خواهند شد و امکان مشاهده نمودار هم وجود دارد

بیایید قسمت‌های اصلی این پروژه را، مرور کنیم.

## ساخت برنامه

همانطور که قبل‌تر گفته شد، این برنامه، سه ویژگی اصلی دارد:  

- کوئری‌های SQL را از ورودی زبان طبیعی تولید می‌کند
- از نتایج کوئری، نمودار ایجاد می‌کند
- کوئری‌های SQL را، به زبان ساده توضیح می‌دهد

برای پیاده‌سازی این قابلیت‌ها، از AI SDK و Server Actions برای تعامل با مدل‌های `openai/gpt-4o-mini` و `openai/gpt-4.1` استفاده شده است.  
Server Actions یکی از قابلیت‌های قدرتمند React Server Component است که اجازه می‌دهد توابع سمت سرور را مستقیماً از کد فرانت‌اند فراخوانی کنید.

بیایید با تولید یک کوئری SQL از زبان طبیعی شروع کنیم.

## تولید کوئری‌های SQL

برای اینکه مدل بتواند کوئری‌های SQL دقیق و معتبری تولید کند، نیاز به context درباره‌ی اسکیما (schema) دیتابیس، جداول و روابط میان آن‌ها دارد. شما باید این اطلاعات را از طریق یک پرامپت (prompt) در اختیار مدل قرار دهید. این پرامپت باید شامل موارد زیر باشد:

- اطلاعات مربوط به اسکیما
- نمونه‌هایی از format داده‌ها
- عملیات SQL قابل استفاده (مانند SELECT و ...)
- بهترین شیوه‌ها برای ساختاردهی کوئری‌ها
- راهنمایی‌های دقیق برای فیلدهای خاص

اکنون بیایید یک پرامپت را ببینیم که شامل تمام این اطلاعات باشد.

```text
You are a SQL (postgres) and data visualization expert. Your job is to help the user write a SQL query to retrieve the data they need. The table schema is as follows:

unicorns (
  id SERIAL PRIMARY KEY,
  company VARCHAR(255) NOT NULL UNIQUE,
  valuation DECIMAL(10, 2) NOT NULL,
  date_joined DATE,
  country VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  industry VARCHAR(255) NOT NULL,
  select_investors TEXT NOT NULL
);

Only retrieval queries are allowed.

For things like industry, company names and other string fields, use the ILIKE operator and convert both the search term and the field to lowercase using LOWER() function. For example: LOWER(industry) ILIKE LOWER('%search_term%').

Note: select_investors is a comma-separated list of investors. Trim whitespace to ensure you're grouping properly. Note, some fields may be null or have only one value.
When answering questions about a specific field, ensure you are selecting the identifying column (ie. what is Vercel's valuation would select company and valuation').

The industries available are:
- healthcare & life sciences
- consumer & retail
- financial services
- enterprise tech
- insurance
- media & entertainment
- industrials
- health

If the user asks for a category that is not in the list, infer based on the list above.

Note: valuation is in billions of dollars so 10b would be 10.0.
Note: if the user asks for a rate, return it as a decimal. For example, 0.1 would be 10%.

If the user asks for 'over time' data, return by year.

When searching for UK or USA, write out United Kingdom or United States respectively.

EVERY QUERY SHOULD RETURN QUANTITATIVE DATA THAT CAN BE PLOTTED ON A CHART! There should always be at least two columns. If the user asks for a single column, return the column and the count of the column. If the user asks for a rate, return the rate as a decimal. For example, 0.1 would be 10%.
```

این پرامپت شامل چندین عنصر کلیدی و مهم است:

- توصیف اسکیما به مدل کمک می‌کند تا دقیقاً بداند با چه فیلدهایی از داده‌ها باید کار کند
- شامل قوانین مشخصی برای نوشتن کوئری‌ها بر اساس الگوهای رایج SQL است؛ برای مثال، استفاده‌ی همیشگی از `ILIKE` برای مقایسه‌ی رشته‌ای بدون حساسیت به حروف بزرگ و کوچک
- نحوه‌ی مدیریت موارد خاص در مجموعه‌داده را توضیح می‌دهد؛ مانند فیلدی که سرمایه‌گذاران را به‌صورت رشته‌ای و با جداکننده‌ی ویرگول ذخیره می‌کند و نیاز دارد فاصله‌ها به‌درستی مدیریت شوند
- به جای اینکه مدل مجبور باشد دسته‌بندی‌های industry را حدس بزند، فهرست دقیق آن‌ها را ارائه می‌دهد تا از ناسازگاری‌ها جلوگیری شود
- پرامپت به استانداردسازی تبدیل داده‌ها کمک می‌کند؛ مثلاً آموزش می‌دهد که `10b` باید به‌صورت `10.0` میلیارد دلار تفسیر شود، یا نرخ‌ها به‌صورت مقادیر اعشاری نمایش داده شوند
- قوانین شفاف اطمینان می‌دهند که خروجی کوئری به گونه‌ای باشد که به‌آسانی قابل ترسیم در نمودار باشد؛ یعنی همیشه حداقل دو ستون داده‌ی قابل رسم در نتیجه‌ی کوئری وجود داشته باشد

ساختار این پرامپت پایه‌ای قوی برای تولید کوئری‌های دقیق فراهم می‌کند، اما لازم است با توجه به نیازهای خاص پروژه و مدلی که استفاده می‌کنید، با آزمایش و تکرار (experiment and iterate) آن را بهینه‌سازی نمایید.

## ایجاد یک Server Action

اکنون که پرامپت آماده شده است، بیایید یک Server Action جدید را بررسی کنیم.

فایل `app/actions.ts` را باز کنید. در این فایل، یک اکشن به نام `generateQuery` وجود دارد که asynchronous است و یک پارامتر ورودی می‌گیرد که همان پرسش زبان طبیعی (natural language query) است:  

```js
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

export const generateQuery = async (input: string) => {
  "use server";
  try {
    const result = await generateObject({
      model: my_model("openai/gpt-4o-mini"),
      system: `You are a SQL (postgres) and data visualization expert. Your job is to help the user write a SQL query to retrieve the data they need. The table schema is as follows:

      unicorns (
      id SERIAL PRIMARY KEY,
      company VARCHAR(255) NOT NULL UNIQUE,
      valuation DECIMAL(10, 2) NOT NULL,
      date_joined DATE,
      country VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      industry VARCHAR(255) NOT NULL,
      select_investors TEXT NOT NULL
    );

    Only retrieval queries are allowed.

    For things like industry, company names and other string fields, use the ILIKE operator and convert both the search term and the field to lowercase using LOWER() function. For example: LOWER(industry) ILIKE LOWER('%search_term%').

    Note: select_investors is a comma-separated list of investors. Trim whitespace to ensure you're grouping properly. Note, some fields may be null or have only one value.
    When answering questions about a specific field, ensure you are selecting the identifying column (ie. what is Vercel's valuation would select company and valuation').

    The industries available are:
    - healthcare & life sciences
    - consumer & retail
    - financial services
    - enterprise tech
    - insurance
    - media & entertainment
    - industrials
    - health

    If the user asks for a category that is not in the list, infer based on the list above.

    Note: valuation is in billions of dollars so 10b would be 10.0.
    Note: if the user asks for a rate, return it as a decimal. For example, 0.1 would be 10%.

    If the user asks for 'over time' data, return by year.

    When searching for UK or USA, write out United Kingdom or United States respectively.

    EVERY QUERY SHOULD RETURN QUANTITATIVE DATA THAT CAN BE PLOTTED ON A CHART! There should always be at least two columns. If the user asks for a single column, return the column and the count of the column. If the user asks for a rate, return the rate as a decimal. For example, 0.1 would be 10%.
    `,
      prompt: `Generate the query necessary to retrieve the data the user wants: ${input}`,
      schema: z.object({
        query: z.string(),
      }),
    });
    return result.object.query;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to generate query");
  }
};
```

درون این اکشن، از تابع `generateObject` متعلق به AI SDK استفاده شده است. این تابع به شما اجازه می‌دهد خروجی مدل را به یک اسکیمای از پیش تعریف‌شده محدود کنید.  
این تکنیک که گاهی به آن `structured output` گفته می‌شود، تضمین می‌کند که مدل تنها کوئری SQL خالص را تولید کند؛ بدون هیچ پیشوند، توضیح یا قالب‌بندی اضافی که نیاز به پردازش دستی داشته باشد.  
این کار باعث می‌شود که خروجی مدل قابل اطمینان، تمیز و آماده برای اجرا باشد.

در نظر داشته باشید که  
در این مرحله، خروجی مدل، با استفاده از کتابخانه‌ی `Zod` تنها به یک فیلد متنی به نام `query` محدود شده است. این کار تضمین می‌کند که مدل فقط کوئری SQL خام را تولید کند، بدون هیچ متن اضافی یا قالب‌بندی ناخواسته.

## به‌روزرسانی رابط کاربری (Frontend)
اکنون که Server Action ساخته شده، نوبت به آن رسیده که فرانت‌اند را بررسی کنیم که هنگام ارسال یک پرسش زبان طبیعی توسط کاربر، اکشن تعریف شده را، فراخوانی می‌کند.  
در فایل `app/page.tsx` تابعی با نام `handleSubmit` وجود دارد که هنگام ارسال پرسش توسط کاربر، اجرا می‌شود.  
در این فایل، تابع `generateQuery` نیز ایمپورت شده است و در تابع `handleSubmit`، با ورودی کاربر، فراخوانی می‌شود:

```js
try {
      const query = await generateQuery(question);
      if (query === undefined) {
        toast.error("An error occurred. Please try again.");
        setLoading(false);
        return;
      }
      setActiveQuery(query);
      setLoadingStep(2);
      const companies = await runGenerateSQLQuery(query);
      const columns = companies.length > 0 ? Object.keys(companies[0]) : [];
      setResults(companies);
      setColumns(columns);
      setLoading(false);
      const generation = await generateChartConfig(companies, question);
      setChartConfig(generation.config);
    } catch (e) {
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
```

اکنون، زمانی که کاربر یک پرسش به زبان طبیعی وارد می‌کند؛ مثلاً: "چند یونیکورن از سان‌فرانسیسکو هستند؟" (به انگلیسی: "how many unicorns are from San Francisco?")، آن پرسش به Server Action، ارسال می‌شود. Server Action مدل را فراخوانی می‌کند، و پرامپت سیستمی به همراه پرسش کاربر را به آن ارسال می‌نماید. در ادامه، کوئری SQL تولیدشده در قالبی ساختارمند بازگردانده می‌شود. این کوئری سپس به اکشن `runGeneratedSQLQuery` داده می‌شود تا بر روی دیتابیس اجرا شود. نتایج حاصل در local state ذخیره شده و به کاربر نمایش داده می‌شود.

مطمئن شوید سرور توسعه (dev server) در حال اجرا است، سپس در مرورگر خود به آدرس `localhost:3000` بروید. یک پرسش زبان طبیعی وارد کنید و کوئری SQL تولیدشده و نتایج آن را مشاهده نمایید. باید کوئری SQL در زیر فیلد ورودی نمایش داده شود. همچنین نتایج کوئری باید به صورت یک جدول در پایین فیلد ورودی نشان داده شوند.

![ask question from app](https://media.liara.ir/ai/ai-sdk/cookbook/natural-language-postgres/ask-question.png)

اگر کوئری بیش از حد طولانی بود و به‌طور کامل نمایش داده نشد، روی آن کلیک کنید تا نسخه‌ی کامل آن را ببینید. باید دکمه‌ای با آیکون علامت سؤال در سمت راست فیلد کوئری ببینید. در گام بعدی، قابلیت "توضیح کوئری" را که عملکرد همین دکمه است، بررسی خواهیم کرد.

## توضیح کوئری‌های SQL

در این مرحله، قابلیت توضیح کوئری‌های SQL به زبان ساده، توضیح داده شده است. این ویژگی به کاربران کمک می‌کند تا درک بهتری از نحوه‌ی عملکرد کوئری تولیدشده داشته باشند، از طریق تقسیم آن به بخش‌های منطقی و قابل فهم.  
همانند تولید کوئری SQL، برای توضیح نیز نیاز به یک پرامپت هدایت‌کننده دارید تا مدل بتواند خروجی دقیق و ساختاریافته ارائه دهد:

```bash
You are a SQL (postgres) expert. Your job is to explain to the user write a SQL query you wrote to retrieve the data they asked for. The table schema is as follows:
unicorns (
  id SERIAL PRIMARY KEY,
  company VARCHAR(255) NOT NULL UNIQUE,
  valuation DECIMAL(10, 2) NOT NULL,
  date_joined DATE,
  country VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  industry VARCHAR(255) NOT NULL,
  select_investors TEXT NOT NULL
);

When you explain you must take a section of the query, and then explain it. Each "section" should be unique. So in a query like: "SELECT * FROM unicorns limit 20", the sections could be "SELECT *", "FROM UNICORNS", "LIMIT 20".
If a section doesn't have any explanation, include it, but leave the explanation empty.
```

مانند پرامپت تولید کوئری SQL، باید اسکیمای دیتابیس در اختیار مدل قرار بگیرد. علاوه بر این، نمونه‌ای از اینکه هر بخش از یک کوئری ممکن است چگونه به نظر برسد نیز ارائه می‌شود. این کار به مدل کمک می‌کند تا ساختار کوئری را درک کرده و بتواند آن را به بخش‌های منطقی تقسیم کند.

## ایجاد یک Server Action

یک Server Action نیز برای تولید توضیحات مربوط به کوئری‌های SQL وجود دارد.  
این اکشن دو پارامتر ورودی اولیه‌ی زبان طبیعی و کوئری SQL تولیدشده را دریافت می‌کند:

```js
export const explainQuery = async (input: string, sqlQuery: string) => {
  "use server";
  try {
    const result = await generateObject({
      model: my_model("openai/gpt-4o-mini"),
      schema: z.object({
        explanations: explanationsSchema,
      }),
      system: `You are a SQL (postgres) expert. Your job is to explain to the user write a SQL query you wrote to retrieve the data they asked for. The table schema is as follows:
    unicorns (
      id SERIAL PRIMARY KEY,
      company VARCHAR(255) NOT NULL UNIQUE,
      valuation DECIMAL(10, 2) NOT NULL,
      date_joined DATE,
      country VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      industry VARCHAR(255) NOT NULL,
      select_investors TEXT NOT NULL
    );

    When you explain you must take a section of the query, and then explain it. Each "section" should be unique. So in a query like: "SELECT * FROM unicorns limit 20", the sections could be "SELECT *", "FROM UNICORNS", "LIMIT 20".
    If a section doesnt have any explanation, include it, but leave the explanation empty.

    `,
      prompt: `Explain the SQL query you generated to retrieve the data the user wanted. Assume the user is not an expert in SQL. Break down the query into steps. Be concise.

      User Query:
      ${input}

      Generated SQL Query:
      ${sqlQuery}`,
    });
    return result.object;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to generate query");
  }
};
```

این اکشن دوباره از تابع `generateObject` استفاده می‌کند. اسکیما مربوطه در یک فایل جداگانه تعریف شده است تا بتوان از آن به عنوان یک type در کامپوننت‌ها نیز استفاده کرد.  
فایل `lib/types.ts` شامل اسکیما `explanationSchema` برای توضیحات کوئری به شکل زیر است:

```js
/* ...rest of the file... */

export const explanationSchema = z.object({
  section: z.string(),
  explanation: z.string(),
});

export type QueryExplanation = z.infer<typeof explanationSchema>;

/* ...rest of the file... */
```

این اسکیما ساختار توضیحاتی را که مدل تولید خواهد کرد تعریف می‌کند. هر توضیح شامل یک section و یک explanation است.  
section، قسمت مشخصی از کوئری است که توضیح داده می‌شود، و explanation، معادل زبان ساده‌ی آن بخش از کوئری است.

## به‌روزرسانی query viewer
گام بعدی، بررسی کامپوننت `query-viewer.tsx` برای نمایش توضیحات کوئری است. تابع `handleExplainQuery` هر بار که کاربر روی دکمه‌ی آیکون سوال در سمت راست کوئری کلیک می‌کند فراخوانی می‌شود. این تابع از اکشن جدید `explainQuery` استفاده می‌کند:

```js
  const handleExplainQuery = async () => {
    setQueryExpanded(true);
    setLoadingExplanation(true);
    const { explanations } = await explainQuery(inputValue, activeQuery);
    setQueryExplanations(explanations);
    setLoadingExplanation(false);
  };
```

حالا، وقتی کاربران روی دکمه علامت سؤال کلیک کنند، کامپوننت این کارها را انجام خواهد داد:

- نمایش loading state
- ارسال کوئری SQL فعال و پرسش زبان طبیعی کاربر به Server Action
- تولید یک آرایه از توضیحات توسط مدل
- ذخیره توضیحات در state کامپوننت و نمایش رابط کاربری

یک کوئری جدید ارسال کنید و سپس روی دکمه علامت سؤال کلیک کنید. روی بخش‌های مختلف کوئری، موس را حرکت دهید. باید توضیحات مربوط به هر بخش را ببینید:

![explain query after clicking on question button](https://media.liara.ir/ai/ai-sdk/cookbook/natural-language-postgres/explain-query.png)

## ترسیم نتایج کوئری
در نهایت، بیایید نتایج کوئری را به صورت تصویری در قالب نمودار نمایش دهیم. دو روش برای این کار وجود دارد:

۱. ارسال کوئری و داده‌ها به مدل و درخواست بازگشت داده‌ها در قالبی آماده برای نمایش نمودار. این روش کنترل کامل روی نمودار را فراهم می‌کند، اما نیازمند بازگشت تمام داده‌ها توسط مدل است که باعث افزایش قابل توجه تاخیر و هزینه‌ها می‌شود.

۲. ارسال کوئری و داده‌ها به مدل و درخواست تولید پیکربندی نمودار (با اندازه ثابت و تعداد توکن‌های کم) که داده‌ها را به شکل مناسب نگاشت کند. این پیکربندی نحوه نمایش اطلاعات را مشخص می‌کند. نکته قابل توجه این است که مدل، نیازی به بازگرداندن کل مجموعه داده ندارد.

از آنجا که شکل کوئری SQL و داده‌ها از قبل مشخص نیست، از روش دوم استفاده می‌کنیم تا به صورت پویا پیکربندی نمودار را بر اساس نتایج کوئری و هدف کاربر تولید کنیم.

## تولید پیکربندی نمودار

برای این قابلیت، یک Server Action ایجاد شده است که نتایج کوئری و پرسش زبان طبیعی کاربر را می‌گیرد و بهترین روش بصری‌سازی را تعیین می‌کند. برنامه، از کتابخانه shadcn charts برای بصری‌سازی، استفاده می‌کند؛ مدل، باید موارد زیر را تولید کند:

- نوع نمودار (میله‌ای، خطی، مساحتی یا دایره‌ای)
- نگاشت محور‌ها
- سبک نمایش

اسکیمای مربوط به پیکربندی، در فایل `lib/types.ts`، به شکل زیر، تعریف شده است:  

```js
export const configSchema = z
  .object({
    description: z
      .string()
      .describe(
        "Describe the chart. What is it showing? What is interesting about the way the data is displayed?",
      ),
    takeaway: z.string().describe("What is the main takeaway from the chart?"),
    type: z.enum(["bar", "line", "area", "pie"]).describe("Type of chart"),
    title: z.string(),
    xKey: z.string().describe("Key for x-axis or category"),
    yKeys: z.array(z.string()).describe("Key(s) for y-axis values this is typically the quantitative column"),
    multipleLines: z.boolean().describe("For line charts only: whether the chart is comparing groups of data.").optional(),
    measurementColumn: z.string().describe("For line charts only: key for quantitative y-axis column to measure against (eg. values, counts etc.)").optional(),
    lineCategories: z.array(z.string()).describe("For line charts only: Categories used to compare different lines or data series. Each category represents a distinct line in the chart.").optional(),
    colors: z
      .record(
        z.string().describe("Any of the yKeys"),
        z.string().describe("Color value in CSS format (e.g., hex, rgb, hsl)"),
      )
      .describe("Mapping of data keys to color values for chart elements")
      .optional(),
    legend: z.boolean().describe("Whether to show legend"),
  })
  .describe("Chart configuration object");
```

این اسکیما به‌طور گسترده‌ای از تابع `()describe.` در کتابخانه‌ی Zod استفاده می‌کند تا به مدل context اضافی درباره‌ی هر کلید مورد انتظار در پیکربندی نمودار ارائه دهد. این کار به مدل کمک می‌کند تا هدف هر کلید را بهتر درک کرده و نتایج دقیق‌تری تولید کند.  
نکته‌ی مهم دیگری که باید به آن توجه کرد؛ این است که شما در حال تعریف دو فیلد اضافی به نام‌های `description` و `takeaway` هستید. این فیلدها نه تنها برای کاربر مفید هستند تا سریعاً متوجه شوند نمودار چه چیزی را نشان می‌دهد و پیام اصلی آن چیست، بلکه مدل را نیز وادار می‌کنند که ابتدا یک توصیف از داده‌ها ارائه دهد، قبل از آن‌که وارد تولید خصوصیات فنی مانند محور‌ها و ستون‌ها شود. این کار به مدل کمک می‌کند تا پیکربندی‌هایی دقیق‌تر، معنادارتر و متناسب با هدف کاربر تولید کند.

## ایجاد Server Action

یک اکشن به نام `generateChartConfig` در `app/actions.ts` وجود دارد که شامل قطعه کد زیر است:

```js
export const generateChartConfig = async (
  results: Result[],
  userQuery: string,
) => {
  "use server";
  const system = `You are a data visualization expert. `;

  try {
    const { object: config } = await generateObject({
      model: my_model("openai/gpt-4.1"),
      system,
      prompt: `Given the following data from a SQL query result, generate the chart config that best visualises the data and answers the users query.
      For multiple groups use multi-lines.

      Here is an example complete config:
      export const chartConfig = {
        type: "pie",
        xKey: "month",
        yKeys: ["sales", "profit", "expenses"],
        colors: {
          sales: "#4CAF50",    // Green for sales
          profit: "#2196F3",   // Blue for profit
          expenses: "#F44336"  // Red for expenses
        },
        legend: true
      }

      User Query:
      ${userQuery}

      Data:
      ${JSON.stringify(results, null, 2)}`,
      schema: configSchema,
    });

    const colors: Record<string, string> = {};
    config.yKeys.forEach((key, index) => {
      colors[key] = `hsl(var(--chart-${index + 1}))`;
    });

    const updatedConfig: Config = { ...config, colors };
    return { config: updatedConfig };
  } catch (e) {
    // @ts-expect-errore
    console.error(e.message);
    throw new Error("Failed to generate chart suggestion");
  }
};
```

## کامپوننت نمودار
با آماده بودن اکشن، می‌توان آن را به‌صورت خودکار پس از دریافت نتایج کوئری اجرا کرد. این کار باعث می‌شود نمودار تقریباً بلافاصله پس از بارگذاری داده‌ها ظاهر شود.  
تابع `handleSubmit` در صفحه‌ی اصلی (فایل `app/page.tsx`) شامل منطق زیر است، تا پس از اجرای کوئری، پیکربندی نمودار نیز، تولید و تنظیم شود:

```js
const generation = await generateChartConfig(companies, question);
      setChartConfig(generation.config);
```

اکنون، زمانی که کاربران کوئری ارسال می‌کنند، برنامه اقدامات زیر را انجام خواهد داد:

- کوئری SQL را تولید و اجرا می‌کند
- نتایج را به صورت جدول نمایش می‌دهد
- پیکربندی نمودار را بر اساس نتایج تولید می‌کند
- امکان جابه‌جایی (toggle) بین نمای جدول و نمودار را فراهم می‌کند

به مرورگر بازگردید و برنامه را با چند کوئری مختلف آزمایش کنید. باید مشاهده کنید که نمودار تصویری بلافاصله پس از نمایش نتایج جدول ظاهر می‌شود:

![see chart after sending question](https://media.liara.ir/ai/ai-sdk/cookbook/natural-language-postgres/see-chart-after-sending-question.png)

## گام‌های بعدی

شما یک ابزار تحلیل SQL مبتنی بر هوش مصنوعی ساخته‌اید که می‌تواند پرسش‌های زبان طبیعی را به کوئری‌های SQL تبدیل کند، نتایج را به‌صورت بصری نمایش دهد و کوئری‌ها را به زبان ساده توضیح دهد.  
به عنوان گام‌های بعدی، می‌توانید امکانات بیشتری به برنامه اضافه کنید. برای مثال:

- استفاده از منابع داده‌ی اختصاصی خودتان به جای مجموعه‌داده‌ی فعلی
- افزودن ویژگی‌های پیشرفته‌تر مانند سفارشی‌سازی اسکیما پیکربندی نمودار، برای پشتیبانی از انواع نمودارها و گزینه‌های بیشتر
- توسعه قابلیت تولید کوئری‌های SQL پیچیده‌تر برای تحلیل‌های پیشرفته‌تر

این قابلیت‌ها به شما کمک می‌کنند تا ابزار را انعطاف‌پذیرتر و قدرتمندتر کرده و آن را متناسب با نیازهای خاص پروژه یا کاربران نهایی توسعه دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
