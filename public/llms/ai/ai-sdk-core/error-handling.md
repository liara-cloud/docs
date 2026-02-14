Original link: https://docs.liara.ir/ai/ai-sdk-core/error-handling/

# مدیریت خطا در سرویس AI 

## مدیریت خطاهای معمول

خطاهای معمول throw می‌شوند و می‌توان  
آن‌ها را با استفاده از بلوک `try/cathch` مدیریت کرد.  

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

try {
  const { text } = await generateText({
    model: my_model("openai/gpt-4o-mini"),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });
} catch (error) {
  // handle error
}
```

## مدیریت خطاهای استریمی (استریم‌های ساده)

وقتی خطاها در طول استریم‌هایی رخ می‌دهند که از error chunks پشتیبانی نمی‌کنند، خطا به‌صورت یک خطای معمولی throw می‌شود. می‌توان این خطاها را با استفاده از بلوک `try/catch` مدیریت کرد.

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

try {
  const { textStream } = streamText({
    model: my_model("openai/gpt-4o-mini"),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });

  for await (const textPart of textStream) {
    process.stdout.write(textPart);
  }
} catch (error) {
  // handle error
}

```

## مدیریت خطاهای استریمی (استریم‌های با پشتیبانی از خطا)

استریم‌های کامل از error parts پشتیبانی می‌کنند. می‌توان این بخش‌ها را مشابه سایر بخش‌ها مدیریت کرد. همچنین توصیه می‌شود که یک بلوک `try/catch` برای مدیریت خطاهایی که خارج از استریم رخ می‌دهند نیز اضافه شود.

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

try {
  const { textStream } = streamText({
    model: my_model("openai/gpt-4o-mini"),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });

  for await (const textPart of textStream) {
    process.stdout.write(textPart);
  }
} catch (error) {
  // handle error
}

```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
