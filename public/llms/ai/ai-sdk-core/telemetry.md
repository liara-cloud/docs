Original link: https://docs.liara.ir/ai/ai-sdk-core/telemetry/

# مستندات تله متری (Telemetry) در AI

> تله‌متری AI SDK در حال حاضر آزمایشی بوده و ممکن است در آینده تغییر کند.

AI SDK از [OpenTelemetry](https://opentelemetry.io) برای جمع‌آوری داده‌های تله‌متری استفاده می‌کند. OpenTelemetry یک فریم‌ورک متن‌باز مشاهده‌پذیر است که به‌منظور ساخت ابزاری استاندارد جهت جمع‌آوری داده‌های تله‌متری طراحی شده است.

## فعال سازی Telemetry

برای برنامه‌های NextJS، ابتدا [https://nextjs.org/docs/app/guides/open-telemetry](https://nextjs.org/docs/app/guides/open-telemetry) را دنبال کنید تا تله‌متری فعال شود.

می‌توانید از `experimental_telemetry` برای فعال‌سازی تله‌متری در فراخوانی‌های مشخص یک تابع استفاده کنید، در حالی که این قابلیت هنوز در حالت آزمایشی قرار دارد.

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Write a short story about a cat.',
  experimental_telemetry: { isEnabled: true },
});

console.log(result.text)
```

وقتی که تله‌متری فعال است، شما می‌توانید مشخص کنید که در صورت نیاز، مقادیر ورودی و مقادیر خروجی یک تابع ثبت شوند یا نه.  
به صورت پیش‌فرض، هر دو مقادیر، ثبت می‌شوند. شما می‌توانید با تنظیم فیلدهای `recordInputs` و `recordOutputs` بر روی `false`، قابلیت ثبت مقادیر خروجی و ورودی را، غیرفعال کنید. 

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Write a short story about a cat.',
  experimental_telemetry: { 
    isEnabled: true,
    recordInputs: false,
    recordOutputs: false
  },
});

console.log(result.text)
```

غیرفعال کردن ثبت ورودی‌ها و خروجی‌ها می‌تواند به خاطر دلایلی چون حریم‌خصوصی، جابه‌جایی داده و بهینه‌سازی عملکرد، مفید باشد.  
به عنوان مثال، ممکن است بخاطر حساس بودن اطلاعات، بخواهید که قابلیت ثبت ورودی‌ها، غیرفعال باشد.  

## متادیتای Telemetry

شما می‌توانید یک تابع `functionId` ایجاد کنید تا تابعی که داده‌های تله‌متری مربوط به آن است را، شناسایی کند  
همچنین می‌توانید از `metadata` استفاده کنید تا اطلاعات بیشتری را به داده‌های تله‌متری اضافه کنید.  

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Write a short story about a cat.',
  experimental_telemetry: {
    isEnabled: true,
    functionId: 'my-awesome-function',
    metadata: {
      something: 'custom',
      someOtherThing: 'other-value',
    },
  },
});
```

## tracer سفارشی

می‌توانید یک tracer ایجاد کنید (که باید یک `Tracer` از نوع OpenTelemetry بازگرداند). این قابلیت در شرایطی مفید است که بخواهید traceها از یک `TracerProvider` متفاوت نسبت به آنچه که توسط `opentelemetry/api@` فراهم شده است، استفاده کنند.

```js
// npm i @ai-sdk/openai@^1 ai@^4
// npm install --save @opentelemetry/sdk-trace-node

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { NodeTracerProvider }  from '@opentelemetry/sdk-trace-node';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const tracerProvider = new NodeTracerProvider();
const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Write a short story about a cat.',
  experimental_telemetry: {
    isEnabled: true,
    tracer: tracerProvider.getTracer('ai'),
  },
});
```

## داده‌های جمع‌آوری شده

## تابع generateText

`generateText` سه نوع span را ثبت می‌کند:

۱. `ai.generateText` (span): طول کامل یک فراخوانی generateText که شامل یک یا چند تا span از نوع `ai.generateText.doGenerate` است. این span شامل [اطلاعات پایه LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-llm-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.generateText` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.generateText"`
- `ai.prompt`: پرامپتی که هنگام فراخوانی `generateText` استفاده شده است
- `ai.response.text`: متنی که تولید شده است
- `ai.response.toolCalls`: فراخوانی‌های tool که به عنوان بخشی از تولید هستند (در قالب stringified JSON)
- `ai.response.finishReason`: دلیلی که باعث پایان فرایند تولید شده است
- `ai.settings.maxSteps`: maximum تعداد گام‌ها (steps) که تنظیم شده است  

۲. `ai.generateText.doGenerate` (span): یک ارائه‌دهنده فراخوانی doGenerate که می‌تواند شامل spanهای `ai.toolCall` باشد. این span شامل [اطلاعات فراخوانی LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#call-llm-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.generateText.doGenerate` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.generateText.doGenerate"`
- `ai.prompt.format`: فرمت پرامپت
- `ai.prompt.messages`: پیام‌هایی که به ارائه‌دهنده پاس داده شده‌اند
- `ai.prompt.tools`: آرایه stringified تعاریف toolها. toolها می‌توانند از نوع `function` یا `provider-defined` باشند. toolهای از نوع function شامل `name`، `description` (اختیاری) و `parameters` هستند (JSON Schema). toolهای provider-defined شامل `name` و `id` و `args` هستند
- `ai.prompt.toolChoice`: تنظیمات stringified انتخاب tool (به صورت JSON) که یک property به نام `type` دارد (`auto` , `none` , `required` , `tool`)؛ و اگر که type از نوع `tool` باشد؛ یک `toolName` نیز در دسترس خواهد بود
- `ai.response.text`: متنی که تولید شده است
- `ai.response.toolCalls`: فراخوانی‌های tool که به عنوان بخشی از تولید هستند (stringified JSON)
- `ai.response.finishReason`: دلیلی که تولید به خاطر آن پایان یافته است  

۳. `ai.toolCall` (span): یک فراخوانی tool که به عنوان بخشی از فراخوانی generateText ایجاد شده است. برای جزئیات بیشتر [spanهای فراخوانی tool](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#tool-call-spans) را ببینید.

## تابع streamText

`streamText` سه نوع span و دو نوع event را ثبت می‌کند:

۱. `ai.streamText` (span): طول کامل یک فراخوانی streamText که شامل یک یا چند تا span از نوع `ai.streamText.doStream` است. این span شامل [اطلاعات پایه LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-llm-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.streamText` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.streamText"`
- `ai.prompt`: پرامپتی که هنگام فراخوانی `streamText` استفاده شده است
- `ai.response.text`: متنی که تولید شده است
- `ai.response.toolCalls`: فراخوانی‌های tool که به عنوان بخشی از تولید هستند (در قالب stringified JSON)
- `ai.response.finishReason`: دلیلی که باعث پایان فرایند تولید شده است
- `ai.settings.maxSteps`: maximum تعداد گام‌ها (steps) که تنظیم شده است  

۲. `ai.streamText.doStream` (span): یک ارائه‌دهنده فراخوانی doStream که شامل یک رویداد `ai.stream.firstChunk` و spanهای `ai.toolCall` است. این span شامل [اطلاعات فراخوانی LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#call-llm-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.streamText.doStream` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.streamText.doStream"`
- `ai.prompt.format`: فرمت پرامپت
- `ai.prompt.messages`: پیام‌هایی که به ارائه‌دهنده پاس داده شده‌اند
- `ai.prompt.tools`: آرایه stringified تعاریف toolها. toolها می‌توانند از نوع `function` یا `provider-defined` باشند. toolهای از نوع function شامل `name`، `description` (اختیاری) و `parameters` هستند (JSON Schema). toolهای provider-defined شامل `name` و `id` و `args` هستند
- `ai.prompt.toolChoice`: تنظیمات stringified انتخاب tool (به صورت JSON) که یک property به نام `type` دارد (`auto` , `none` , `required` , `tool`)؛ و اگر که type از نوع `tool` باشد؛ یک `toolName` نیز در دسترس خواهد بود
- `ai.response.text`: متنی که تولید شده است
- `ai.response.toolCalls`: فراخوانی‌های tool که به عنوان بخشی از تولید هستند (stringified JSON)
- `ai.response.msToFirstChunk`: زمانی که طول کشیده است تا اولین قطعه (chunk) دریافت شود (به میلی ثانیه)
- `ai.response.msToFinish`: زمانی که طول کشیده است تا آخرین قسمت از استریم LLM دریافت شود (به میلی ثانیه)
- `ai.response.avgCompletionTokensPerSecond`: عدد میانگین توکن‌های completion بر ثانیه
- `ai.response.finishReason`: دلیلی که تولید به خاطر آن متوقف شده است  

۳. `ai.toolCall` (span): یک فراخوانی tool که به عنوان بخشی از فراخوانی streamText ایجاد شده است. برای جزئیات بیشتر [spanهای فراخوانی tool](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#tool-call-spans) را ببینید.  

۴. `ai.stream.firstChunk` (event): رویدادی که هنگام دریافت اولین قطعه (chunk) استریم رخ می‌دهد.  
این event شامل attribute زیر است:  

- `ai.response.msToFirstChunk`: زمانی که طول کشیده است تا اولین chunk دریافت شود  

۵. `ai.stream.finish` (event): رویدادی که هنگام دریافت بخش پایانی استریم LLM رخ می‌دهد.

## تابع generateObject

`generateObject` دو نوع span را ثبت می‌کند:

۱. `ai.generateObject` (span): طول کامل یک فراخوانی generateObject که شامل یک یا چند تا span از نوع `ai.generateObject.doGenerate` است. این span شامل [اطلاعات پایه LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-llm-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.generateObject` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.generateObject"`
- `ai.prompt`: پرامپتی که هنگام فراخوانی `generateObject` استفاده شده است
- `ai.schema`: ورژن اسکیمای JSON به صورت stringified از اسکیمایی که به تابع `generateObject` پاس داده شده است
- `ai.schema.name`: نام اسکیمایی که به تابع `generateObject` پاس داده شده است
- `ai.schema.description`: توضیحات اسکیمایی که به تابع `generateObject` پاس داده شده است
- `ai.response.object`: آبجکتی که تولید شده است (stringified JSON)
- `ai.settings.mode`: حالت تولید آبجکت؛ مثلاً `json`
- `ai.settings.output`: نوع خروجی که استفاده شده است؛ مثلاً `object` یا `no-schema`  

۲. `ai.generateObject.doGenerate` (span): یک ارائه‌دهنده فراخوانی doGenerate که شامل [اطلاعات فراخوانی LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#call-llm-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.generateObject.doGenerate` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.generateObject.doGenerate"`
- `ai.prompt.format`: فرمت پرامپت
- `ai.prompt.messages`: پیام‌هایی که به ارائه‌دهنده پاس داده شده‌اند
- `ai.response.object`: آبجکتی که تولید شده است (stringified JSON)
- `ai.settings.mode`: حالت تولید آبجکت
- `ai.response.finishReason`: دلیلی که تولید به خاطر آن متوقف شده است  

## تابع streamObject

`streamObject` دو نوع span و یک نوع event را ثبت می‌کند:

۱. `ai.streamObject` (span): طول کامل یک فراخوانی streamObject که شامل یک یا چند تا span از نوع `ai.streamObject.doStream` است. این span شامل [اطلاعات پایه LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-llm-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.streamObject` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.streamObject"`
- `ai.prompt`: پرامپتی که هنگام فراخوانی `streamObject` استفاده شده است
- `ai.schema`: ورژن اسکیمای JSON به صورت stringified از اسکیمایی که به تابع `streamObject` پاس داده شده است
- `ai.schema.name`: نام اسکیمایی که به تابع `streamObject` پاس داده شده است
- `ai.schema.description`: توضیحات اسکیمایی که به تابع `streamObject` پاس داده شده است
- `ai.response.object`: آبجکتی که تولید شده است (stringified JSON)
- `ai.settings.mode`: حالت تولید آبجکت؛ مثلاً `json`
- `ai.settings.output`: نوع خروجی که استفاده شده است؛ مثلاً `object` یا `no-schema`  

۲. `ai.streamObject.doStream` (span): یک ارائه‌دهنده فراخوانی doStream که شامل یک رویداد `ai.stream.firstChunk` است. این span شامل [اطلاعات فراخوانی LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#call-llm-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.streamText.doStream` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.streamText.doStream"`
- `ai.prompt.format`: فرمت پرامپت
- `ai.prompt.messages`: پیام‌هایی که به ارائه‌دهنده پاس داده شده‌اند
- `ai.settings.mode`: حالت تولید آبجکت
- `ai.response.object`: آبجکتی که تولید شده است (stringified JSON)
- `ai.response.msToFirstChunk`: زمانی که طول کشیده است تا اولین قطعه (chunk) دریافت شود (به میلی ثانیه)
- `ai.response.finishReason`: دلیلی که تولید به خاطر آن متوقف شده است  

۳. `ai.stream.firstChunk` (event): رویدادی که هنگام دریافت اولین قطعه (chunk) استریم رخ می‌دهد.  
این event شامل attribute زیر است:  

- `ai.response.msToFirstChunk`: زمانی که طول کشیده است تا اولین chunk دریافت شود

## تابع embed

`embed` دو نوع span را ثبت می‌کند:

۱. `ai.embed` (span): طول کامل یک فراخوانی embed که شامل یک span از نوع `ai.embed.doEmbed` است. این span شامل [اطلاعات پایه embedding span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-embedding-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.embed` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.embed"`
- `ai.value`: مقداری که به تابع `embed` پاس داده شده است
- `ai.embedding`: یک embedding از نوع JSON-stringified  

۲. `ai.embed.doEmbed` (span): یک ارائه‌دهنده فراخوانی doEmbed که شامل [اطلاعات پایه embedding span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-embedding-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.embed.doEmbed` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.embed.doEmbed"`
- `ai.values`: مقادیری که به ارائه‌دهنده پاس داده شده‌اند (تحت یک آرایه)
- `ai.embeddings`: یک آرایه از embeddingها به صورت JSON-stringified

## تابع embedMany

`embedMany` دو نوع span را ثبت می‌کند:

۱. `ai.embedMany` (span): طول کامل یک فراخوانی embedMany که شامل یک span از نوع `ai.embedMany.doEmbed` است. این span شامل [اطلاعات پایه embedding span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-embedding-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.embedMany` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.embedMany"`
- `ai.values`: مقادیری که به تابع `embedMany` پاس داده شده است
- `ai.embeddings`: یک آرایه از embeddingها به صورت JSON-stringified  

۲. `ai.embedMany.doEmbed` (span): یک ارائه‌دهنده فراخوانی doEmbed که شامل [اطلاعات پایه embedding span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-embedding-span-information) و attributeهای زیر است:  

- `operation.name`: `ai.embedMany.doEmbed` و functionId که از طریق `telemetry.functionId` تنظیم شده‌اند
- `ai.operationId`: `"ai.embedMany.doEmbed"`
- `ai.values`: مقادیری که به ارائه‌دهنده پاس داده شده‌اند
- `ai.embeddings`: یک آرایه از embeddingها به صورت JSON-stringified برای هر مقدار

## جزئیات span

## اطلاعات پایه LLM span

بسیاری از spanها از LLMها استفاده می‌کنند (`ai.generateText` , `ai.generateText.doGenerate` , `ai.streamText`, `ai.streamText.doStream`, `ai.generateObject` , `ai.generateObject.doGenerate` , `ai.streamObject` , `ai.streamObject.doStream`)، شامل attributeهای زیر هستند:

- `resource.name`: همان functionId که از طریق `telemetry.functionId` تنظیم شده است
- `ai.model.id`: آیدی مدل
- `ai.model.provider`: ارائه‌دهنده مدل
- `*.ai.request.headers`: هدرهای درخواست که از طریق `headers` پاس داده شده‌اند
- `ai.response.providerMetadata`: متادیتای مختص ارائه‌دهنده که با پاسخ تولید برگردانده می‌شود
- `ai.settings.maxRetries`: بیشینه تعداد تلاش‌هایی که تنظیم شده است
- `ai.telemetry.functionId`: همان functionId  که از طریق `telemetry.functionId` تنظیم شده است
- `*.ai.telemetry.metadata`: متادیتایی که از طریق `telemetry.metadata` پاس داده شده است
- `ai.usage.completionTokens`: تعداد توکن‌های completion که استفاده شده‌اند
- `ai.usage.promptTokens`: تعداد توکن‌های پرامپت که استفاده شده‌اند

## اطلاعات فراخوانی LLM span

span‌هایی که برابر با فراخوانی‌های تکی LLM هستند (`ai.generateText.doGenerate` , `ai.streamText.doStream` , `ai.generateObject.doGenerate` , `ai.streamObject.doStream`)  
شامل [اطلاعات پایه LLM span](https://docs.liara.ir/ai/ai-sdk-core/telemetry/#basic-llm-span-information) و attributeهای زیر هستند:

۱. `ai.response.model`: مدلی که استفاده شده است تا پاسخ را تولید کند. در صورتی که ارائه‌دهنده از aliasها پشتیبانی کند، مقدار این فیلد می‌تواند  
متفاوت از مدلی که از آن درخواست شده است، باشد.

۲. `ai.response.id`: آیدی پاسخ. این فیلد از مقدار ID که توسط ارائه‌دهنده برگردانده شده است، استفاده می‌کند (در صورت موجود بودن).

۳. `ai.response.timestamp`: timestamp پاسخ. این فیلد از مقدار timestamp که توسط ارائه‌دهنده برگردانده شده است، استفاده می‌کند (در صورت موجود بودن).

۴. [conventionهای معنایی برای عملیات GenAI](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-spans/):

- `gen_ai.system`: ارائه‌دهنده‌ای که استفاده شده است
- `gen_ai.request.model`: مدلی که از آن درخواست شده است
- `gen_ai.request.temperature`: مقدار temperature که تنظیم شده است
- `gen_ai.request.max_tokens`: بیشینه تعداد توکن‌هایی که تنظیم شده‌اند
- `gen_ai.request.frequency_penalty`: مقدار frequency penalty که تنظیم شده است
- `gen_ai.request.presence_penalty`: مقدار presence penalty که تنظیم شده است
- `gen_ai.request.top_k`: مقدار پارامتر topK که تنظیم شده است
- `gen_ai.request.top_p`: مقدار پارامتر topP که تنظیم شده است
- `gen_ai.request.stop_sequences`: توالی‌های توقف (stop sequences)
- `gen_ai.response.finish_reasons`: دلیل پایانی که توسط ارائه‌دهنده بازگردانده شده است
- `gen_ai.response.model`: مدلی که استفاده شده است تا پاسخ را تولید کند. در صورتی که ارائه‌دهنده از aliasها پشتیبانی کند، مقدار این فیلد می‌تواند  
متفاوت از مدلی که از آن درخواست شده است، باشد.
- `gen_ai.response.id`: آیدی پاسخ. این فیلد مقدار آیدی که توسط ارائه‌دهنده بازگردانده می‌شود را ارائه می‌دهد (در صورت موجود بودن)
- `gen_ai.usage.input_tokens`: تعداد توکن‌های پرامپت که استفاده شده‌اند
- `gen_ai.usage.output_tokens`: تعداد توکن‌های completion که استفاده شده‌اند

## اطلاعات پایه embedding span

بسیاری از spanها از مدل‌های embedding استفاده می‌کنند (`ai.embed` , `ai.embed.doEmbed` , `ai.embedMany` , `ai.embedMany.doEmbed`) که شامل attributeهای زیر هستند:

- `ai.model.id`: آیدی مدل
- `ai.model.provider`: ارائه‌دهنده مدل
- `*.ai.request.headers`: هدرهای درخواست که از طریق `headers` پاس داده شده‌اند
- `ai.response.providerMetadata`: متادیتای مختص ارائه‌دهنده که با پاسخ تولید برگردانده شده است
- `ai.settings.maxRetries`: بیشینه تعداد تلاش‌هایی که تنظیم شده است
- `ai.telemetry.functionId`: همان functionId که از طریق `telemetry.functionId` تنظیم شده است
- `*.ai.telemetry.metadata`: متادیتایی که از طریق `telemetry.metadata` پاس داده شده است
- `ai.usage.tokens`: تعداد توکن‌هایی که استفاده شده‌اند
- `resource.name`: همان functionId که از طریق `telemetry.functionId` تنظیم شده است

## spanهای فراخوانی tool

spanهای فراخوانی tool (`ai.toolCall`) شامل attributeهای زیر هستند:

- `operation.name`: `"ai.toolCall"`
- `ai.operationId`: `"ai.toolCall"`
- `ai.toolCall.name`: نام tool
- `ai.toolCall.id`: آیدی فراخوانی tool
- `ai.toolCall.args`: پارامترهای فراخوانی tool
- `ai.toolCall.result`: نتایج فراخوانی tool. در صورتی در دسترس است که فراخوانی tool موفق باشد و نتیجه قابلیت سریال‌سازی (serializable) داشته باشد

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
