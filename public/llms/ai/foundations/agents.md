Original link: https://docs.liara.ir/ai/foundations/agents/

# Agentها (عامل‌ها)

هنگام ساخت برنامه‌های مبتنی بر هوش مصنوعی، اغلب به سیستم‌هایی نیاز دارید که بتوانند زمینه (context) را درک کرده و اقدامات معناداری انجام دهند. در فرآیند طراحی چنین سیستم‌هایی، نکته‌ی کلیدی، یافتن تعادلی مناسب میان انعطاف‌پذیری و کنترل‌پذیری است.

در ادامه، رویکردها و الگوهای مختلفی برای ساخت این نوع سیستم‌ها بررسی شده است؛ با تمرکز بر این‌که چگونه می‌توانید توانایی‌های موجود را با نیازهای خود، تطبیق دهید.

## اجزای سازنده (Building Blocks)
در ساخت سیستم‌های هوش مصنوعی، می‌توان از ترکیب اجزای پایه‌ای زیر استفاده کرد:

### تولید یک-مرحله‌ای LLM (یا Single-Step LLM Generation)

جزء پایه سازنده — یک فراخوانی (call) به یک مدل زبانی بزرگ (LLM) برای دریافت پاسخ. این روش برای Taskهای مستقیم مانند طبقه‌بندی (classification) یا تولید متن مناسب است.

### استفاده از ابزار (Tool Usage)

توانایی‌های بهینه‌شده ارائه‌شده توسط Toolها (مانند ماشین‌حساب‌ها، APIها یا دیتابیس‌ها) که LLM می‌تواند از آن‌ها برای انجام Taskها، استفاده کند. Toolها، روشی کنترل‌شده برای گسترش قابلیت‌های مدل، فراهم می‌کنند.

### سیستم‌های چندعاملی (Multi-Agent Systems)

چندین LLM که به‌طور هماهنگ با یکدیگر کار می‌کنند، به‌گونه‌ای که هر یک در انجام بخش خاصی از یک Task پیچیده تخصص دارد. این ساختار امکان رفتارهای پیشرفته را فراهم می‌کند، در حالی‌که هر جزء مستقل، متمرکز و ساده باقی می‌ماند.

## الگوها
اجزای سازنده‌ی معرفی‌شده را می‌توان با الگوهای جریان کار (workflow patterns) ترکیب کرد تا پیچیدگی سیستم‌های هوش مصنوعی بهتر مدیریت شود. این الگوها عبارت‌اند از:

- [پردازش ترتیبی (Sequential Processing)](#sequential-processing): اجرای مراحل، پشت سر هم و به ترتیب
- [پردازش موازی (Parallel Processing)](#parallel-processing): اجرای وظایف مستقل به‌طور همزمان
- [حلقه‌های ارزیابی/بازخورد (Evaluation/Feedback Loops)](#evaluator-optimizer): بررسی و بهبود نتایج تولیدشده به‌صورت مداوم
- [هماهنگ‌سازی (Orchestration)](#orchestrator-worker): هماهنگ‌کردن چندین جزء برای یکپارچگی سیستم
- [مسیردهی (Routing)](#routing): هدایت کار بر روی زمینه (context) تعریف شده

## انتخاب رویکرد مناسب
عوامل کلیدی که باید در نظر گرفته شوند عبارت‌اند از:

- **انعطاف‌پذیری در برابر کنترل‌ (Flexibility vs Control)**: LLM چه مقدار آزادی عمل نیاز دارد؟ و تا چه اندازه نیاز است که رفتار LLM را کنترل کنید؟
- **تحمل خطا (Error Tolerance)**: اشتباهات رخ داده در برنامه شما، چه پیامدهایی دارد؟
- **ملاحظات مربوط به هزینه**: سیستم‌های پیچیده‌تر یعنی، فراخوانی بیشتر LLM و هزینه‌های بالاتر
- **نگهداری و پشتیبانی (Maintenance)**: معماری‌های ساده‌تر، آسان‌تر اشکال‌زدایی، توسعه و نگهداری می‌شوند

در ابتدا، با ساده‌ترین رویکردی که نیازهای شما را برطرف می‌کند، شروع کنید و تنها در صورت بروز یکی از حالات زیر، پیچیدگی بیشتری را به برنامه خود، اضافه کنید: 

- تقسیم و کوچک‌کردن Taskها به مراحل شفاف و مشخص
- اضافه‌کردن Toolها به برنامه برای قابلیت‌های خاص
- پیاده‌سازی حلقه‌های بازخوردی برای کنترل کیفیت
- تعریف چندین Agent برای جریان‌های کاری پیچیده

در ادامه، مثال‌های واقعی از الگوها، برای شما قرار گرفته است. 

## استفاده از الگوها
الگوهای زیر، از مستندات [Anthropic](https://www.anthropic.com/engineering/building-effective-agents) برگرفته شده‌اند. 
این الگوها، اجزای سازنده‌ای هستند که می‌توانند ترکیب شوند تا جریان‌های کاری جامع و پیچیده‌ای را بسازند. 
هر الگو، بخش خاصی از اجرای یک Task را به عهده می‌گیرد. با ترکیب الگوها به‌صورت هوشمندانه و هدفمند، شما می‌توانید برای مسائل پیچیده، راهکارهای قابل اتکا، بسازید. 

## پردازش ترتیبی (Sequential Processing | Chains)
ساده‌ترین الگوی جریان کاری، پردازش ترتیبی است که در آن، مراحل، طبق یک دستور از پیش تعریف‌شده، اجرا می‌شوند. 
خروجی هر مرحله، ورودی مرحله بعدی می‌شود و در نهایت، زنجیره‌ای شفاف از عملیات، شکل می‌گیرد. 
این الگو برای Taskهای شامل ترتیب مشخص، مناسب است؛ مانند پایپ‌لاین‌های تولید محتوا یا فرایندهای مربوط به تبدیل داده. 

قطعه کد زیر، مثالی از این الگو است: 


```ts
import { generateText, generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});


async function generateMarketingCopy(input: string) {
  const model = my_model('openai/gpt-4o-mini');

  // First step: Generate marketing copy
  const { text: copy } = await generateText({
    model,
    prompt: `Write persuasive marketing copy for: ${input}. Focus on benefits and emotional appeal.`,
  });

  // Perform quality check on copy
  const { object: qualityMetrics } = await generateObject({
    model,
    schema: z.object({
      hasCallToAction: z.boolean(),
      emotionalAppeal: z.number().min(1).max(10),
      clarity: z.number().min(1).max(10),
    }),
    prompt: `Evaluate this marketing copy for:
    1. Presence of call to action (true/false)
    2. Emotional appeal (1-10)
    3. Clarity (1-10)

    Copy to evaluate: ${copy}`,
  });

  // If quality check fails, regenerate with more specific instructions
  if (
    !qualityMetrics.hasCallToAction ||
    qualityMetrics.emotionalAppeal < 7 ||
    qualityMetrics.clarity < 7
  ) {
    const { text: improvedCopy } = await generateText({
      model,
      prompt: `Rewrite this marketing copy with:
      ${!qualityMetrics.hasCallToAction ? '- A clear call to action' : ''}
      ${qualityMetrics.emotionalAppeal < 7 ? '- Stronger emotional appeal' : ''}
      ${qualityMetrics.clarity < 7 ? '- Improved clarity and directness' : ''}

      Original copy: ${copy}`,
    });
    return { copy: improvedCopy, qualityMetrics };
  }

  return { copy, qualityMetrics };
}


const input = "Sohan, a good souvenir from the heart of Qom";

generateMarketingCopy(input).then(({ copy, qualityMetrics }) => {
  console.log("Marketing Copy:\n", copy);
  console.log("Quality Metrics:", qualityMetrics);
});
```

قطعه کد فوق، ابتدا با استفاده از یک LLM، بر اساس یک ورودی متنی (مثل معرفی یک محصول)، یک متن تبلیغاتی متقاعدکننده تولید می‌کند. سپس متن تولیدشده را از نظر سه معیار  (داشتن CTA، قدرت احساس‌برانگیزی و وضوح) بررسی می‌کند. اگر متن از نظر این معیارها ضعیف باشد، مدل متن را با تاکید بر بهبود همین نقاط ضعف، بازنویسی می‌کند و در نهایت، نسخه‌ی نهایی متن تبلیغاتی به همراه امتیازات کیفی آن بازگردانده می‌شود.

## پردازش موازی (Parallel Processing)

برخی از Taskها را می‌توان به SubTaskهای مستقل شکست که هر کدام از این SubTaskها، می‌توانند به‌طور همزمان، اجرا شوند. 
این الگو با استفاده از اجرای موازی، باعث افزایش بازدهی برنامه می‌شود، در حالی که همچنان مزایای جریان‌های کاری ساختاریافته را نیز،حفظ می‌کند.
برای مثال، تحلیل چندین داکیومنت به‌طور هم‌زمان، یا پردازش جنبه‌های مختلف یک ورودی واحد به‌صورت موازی، از جمله کاربردهای این الگو هستند.

قطعه کد زیر، مثالی از این الگو است: 


```ts
import { generateText, generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});


// Example: Parallel code review with multiple specialized reviewers
async function parallelCodeReview(code: string) {
  const model = my_model('openai/gpt-4o-mini');

  // Run parallel reviews
  const [securityReview, performanceReview, maintainabilityReview] =
    await Promise.all([
      generateObject({
        model,
        system:
          'You are an expert in code security. Focus on identifying security vulnerabilities, injection risks, and authentication issues.',
        schema: z.object({
          vulnerabilities: z.array(z.string()),
          riskLevel: z.enum(['low', 'medium', 'high']),
          suggestions: z.array(z.string()),
        }),
        prompt: `Review this code:
      ${code}`,
      }),

      generateObject({
        model,
        system:
          'You are an expert in code performance. Focus on identifying performance bottlenecks, memory leaks, and optimization opportunities.',
        schema: z.object({
          issues: z.array(z.string()),
          impact: z.enum(['low', 'medium', 'high']),
          optimizations: z.array(z.string()),
        }),
        prompt: `Review this code:
      ${code}`,
      }),

      generateObject({
        model,
        system:
          'You are an expert in code quality. Focus on code structure, readability, and adherence to best practices.',
        schema: z.object({
          concerns: z.array(z.string()),
          qualityScore: z.number().min(1).max(10),
          recommendations: z.array(z.string()),
        }),
        prompt: `Review this code:
      ${code}`,
      }),
    ]);

  const reviews = [
    { ...securityReview.object, type: 'security' },
    { ...performanceReview.object, type: 'performance' },
    { ...maintainabilityReview.object, type: 'maintainability' },
  ];

  // Aggregate results using another model instance
  const { text: summary } = await generateText({
    model,
    system: 'You are a technical lead summarizing multiple code reviews.',
    prompt: `Synthesize these code review results into a concise summary with key actions:
    ${JSON.stringify(reviews, null, 2)}`,
  });

  return { reviews, summary };
}

const testCode = `
const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  const userId = req.query.id;
  db.query(\`SELECT * FROM users WHERE id = \${userId}\`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000);
`;

parallelCodeReview(testCode)
  .then(({ reviews, summary }) => {
    console.log('\nReviews:\n', JSON.stringify(reviews, null, 2));
    console.log('\nSummary:\n', summary);
  })
  .catch((err) => {
    console.error('Error during review:', err);
  });
```

## حلقه‌های ارزیابی/بازخورد (Evaluation/Feedback Loops)

این الگو با افزودن مراحل اختصاصی ارزیابی به جریان‌کار، کنترل کیفیت را وارد فرآیند می‌کند. در این مراحل، نتایج میانی بررسی و ارزیابی می‌شوند. بر اساس ارزیابی انجام‌شده، جریان‌کار می‌تواند یکی از این مسیرها را طی کند: ادامه‌ی روند، تلاش مجدد با پارامترهای اصلاح‌شده، یا انجام یک‌سری کارهای اصلاحی.
این رویکرد منجر به ایجاد جریان‌های کاری مقاوم‌تر می‌شود که توانایی بهبود خودکار و بازیابی از خطا را دارند.

قطعه کد زیر، مثالی از این الگو است: 


```ts
import { generateText, generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});

async function translateWithFeedback(text: string, targetLanguage: string) {
  let currentTranslation = '';
  let iterations = 0;
  const MAX_ITERATIONS = 3;

  // Initial translation
  const { text: translation } = await generateText({
    model: my_model('openai/gpt-4o-mini'), // use small model for first attempt
    system: 'You are an expert literary translator.',
    prompt: `Translate this text to ${targetLanguage}, preserving tone and cultural nuances:
    ${text}`,
  });

  currentTranslation = translation;

  // Evaluation-optimization loop
  while (iterations < MAX_ITERATIONS) {
    // Evaluate current translation
    const { object: evaluation } = await generateObject({
      model: my_model('openai/gpt-4.1-mini'), // use a larger model to evaluate
      schema: z.object({
        qualityScore: z.number().min(1).max(10),
        preservesTone: z.boolean(),
        preservesNuance: z.boolean(),
        culturallyAccurate: z.boolean(),
        specificIssues: z.array(z.string()),
        improvementSuggestions: z.array(z.string()),
      }),
      system: 'You are an expert in evaluating literary translations.',
      prompt: `Evaluate this translation:

      Original: ${text}
      Translation: ${currentTranslation}

      Consider:
      1. Overall quality
      2. Preservation of tone
      3. Preservation of nuance
      4. Cultural accuracy`,
    });

    // Check if quality meets threshold
    if (
      evaluation.qualityScore >= 8 &&
      evaluation.preservesTone &&
      evaluation.preservesNuance &&
      evaluation.culturallyAccurate
    ) {
      break;
    }

    // Generate improved translation based on feedback
    const { text: improvedTranslation } = await generateText({
      model: my_model('openai/gpt-4.1'), // use a larger model
      system: 'You are an expert literary translator.',
      prompt: `Improve this translation based on the following feedback:
      ${evaluation.specificIssues.join('\n')}
      ${evaluation.improvementSuggestions.join('\n')}

      Original: ${text}
      Current Translation: ${currentTranslation}`,
    });

    currentTranslation = improvedTranslation;
    iterations++;
  }

  return {
    finalTranslation: currentTranslation,
    iterationsRequired: iterations,
  };
}


const text = "I am a happy person living in Iran.";
const targetLanguage = "Persian";

translateWithFeedback(text, targetLanguage)
  .then((result) => {
    console.log("Final Translation:\n", result.finalTranslation);
    console.log("Iterations Required:", result.iterationsRequired);
  })
  .catch((error) => {
    console.error("An error occurred during translation:", error);
  });
```

## هماهنگ‌سازی (Orchestration)

در این الگو، یک مدل اصلی با نقش هماهنگ‌کننده (orchestrator) مسئول مدیریت اجرای کارگرهای تخصصی است. هر کارگر (worker) برای انجام یک SubTask خاص بهینه‌سازی شده است، در حالی که هماهنگ‌کننده، context کلی را حفظ کرده و اطمینان حاصل می‌کند که نتایج نهایی، منسجم و یکپارچه باشند.
این الگو برای انجام Taskهای پیچیده‌ای که نیازمند انواع مختلفی از تخصص‌ها یا پردازش‌ها هستند بسیار مؤثر است.

```ts
import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});

async function implementFeature(featureRequest: string) {
  // Orchestrator: Plan the implementation
  const { object: implementationPlan } = await generateObject({
    model: my_model('openai/gpt-4o-mini'),
    schema: z.object({
      files: z.array(
        z.object({
          purpose: z.string(),
          filePath: z.string(),
          changeType: z.enum(['create', 'modify', 'delete']),
        }),
      ),
      estimatedComplexity: z.enum(['low', 'medium', 'high']),
    }),
    system:
      'You are a senior software architect planning feature implementations.',
    prompt: `Analyze this feature request and create an implementation plan:
    ${featureRequest}`,
  });

  // Workers: Execute the planned changes
  const fileChanges = await Promise.all(
    implementationPlan.files.map(async file => {
      // Each worker is specialized for the type of change
      const workerSystemPrompt = {
        create:
          'You are an expert at implementing new files following best practices and project patterns.',
        modify:
          'You are an expert at modifying existing code while maintaining consistency and avoiding regressions.',
        delete:
          'You are an expert at safely removing code while ensuring no breaking changes.',
      }[file.changeType];

      const { object: change } = await generateObject({
        model: my_model('openai/gpt-4.1-mini'),
        schema: z.object({
          explanation: z.string(),
          code: z.string(),
        }),
        system: workerSystemPrompt,
        prompt: `Implement the changes for ${file.filePath} to support:
        ${file.purpose}

        Consider the overall feature context:
        ${featureRequest}`,
      });

      return {
        file,
        implementation: change,
      };
    }),
  );

  return {
    plan: implementationPlan,
    changes: fileChanges,
  };
}

const featureRequest = `write a login and signup page with a good ui/ux and all security things`;

import fs from 'fs';
import path from 'path';

implementFeature(featureRequest)
  .then(result => {
    console.log("🧩 Implementation Plan:");
    console.log("Estimated Complexity:", result.plan.estimatedComplexity);
    console.log("Files:");

    result.plan.files.forEach(file => {
      console.log(`- ${file.changeType.toUpperCase()}: ${file.filePath} (${file.purpose})`);
    });

    console.log("\n💡 Creating Files...");

    result.changes.forEach(change => {
      const filePath = path.resolve(change.file.filePath);
      const dir = path.dirname(filePath);

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, change.implementation.code, 'utf-8');
      console.log(`✅ Created/Modified: ${filePath}`);
    });

    console.log("\n🎉 All files created successfully.");
  })
  .catch(error => {
    console.error("❌ Error during implementation:", error);
  });
```

## مسیردهی (Routing)

این الگو به مدل اجازه می‌دهد تا بر اساس زمینه (context) و نتایج میانی، تصمیم بگیرد که کدام مسیر را در جریان‌کاری دنبال کند. در این حالت، مدل به‌عنوان یک مسیردهنده‌ی هوشمند، عمل می‌کند و اجرای Taskها را بین شاخه‌های مختلف هدایت می‌کند.
این الگو زمانی مفید است که با ورودی‌های متنوعی سروکار دارید که هرکدام نیازمند شیوه‌ی پردازش متفاوتی هستند.

در مثال زیر، نتایج فراخوانی LLM اول، ویژگی‌های فراخوانی LLM دوم را مانند model size و system prompt، تغییر می‌دهد:

```ts
import { createOpenAI } from '@ai-sdk/openai';
import { generateObject, generateText } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});


async function handleCustomerQuery(query: string) {
  const model = my_model('openai/gpt-4.1');

  // First step: Classify the query type
  const { object: classification } = await generateObject({
    model,
    schema: z.object({
      reasoning: z.string(),
      type: z.enum(['general', 'refund', 'technical']),
      complexity: z.enum(['simple', 'complex']),
    }),
    prompt: `Classify this customer query:
    ${query}

    Determine:
    1. Query type (general, refund, or technical)
    2. Complexity (simple or complex)
    3. Brief reasoning for classification`,
  });

  // Route based on classification
  // Set model and system prompt based on query type and complexity
  const { text: response } = await generateText({
    model:
      classification.complexity === 'simple'
        ? my_model('openai/gpt-4o-mini')
        : my_model('openai/o4-mini-high'),
    system: {
      general:
        'You are an expert customer service agent handling general inquiries.',
      refund:
        'You are a customer service agent specializing in refund requests. Follow company policy and collect necessary information.',
      technical:
        'You are a technical support specialist with deep product knowledge. Focus on clear step-by-step troubleshooting.',
    }[classification.type],
    prompt: query,
  });

  return { response, classification };
}

const query = "Why My Order is not in my hands?";

handleCustomerQuery(query).then((result) => {
  console.log("🔍 Classification:", result.classification);
  console.log("💬 Response:", result.response);
}).catch((error) => {
  console.error("❌ Error:", error);
});
```

## استفاده چندمرحله‌ای از ابزارها (Multi-Step Tool Usage)

اگر برنامه شما، شامل حل مسائلی است که مسیر حل آن‌ها از قبل، به‌خوبی تعریف نشده و یا بیش از حد پیچیده است که نمی‌توان یک جریان کاری مشخص برای آن تعریف کرد؛ بهتر است مجموعه‌ای از Toolهای سطح پایین را در اختیار LLM قرار دهید و به آن اجازه دهید تا Task را به بخش‌های کوچک‌تری تقسیم کرده و به‌صورت تکراری، بدون دستورالعمل صریح، آن‌ها را حل کند.
برای پیاده‌سازی چنین الگویی، باید LLM را در یک حلقه، بارها و بارها فراخوانی کنید، تا زمانی که Task تکمیل شود. AI SDK با پارامتر `maxSteps`، این فرآیند را ساده می‌سازد.

با استفاده از `maxSteps`، ماژول AI SDK به‌طور خودکار پس از دریافت نتیجه‌ی هر Tool، یک درخواست جدید به مدل ارسال می‌کند (هر درخواست به‌عنوان یک مرحله یا step در نظر گرفته می‌شود). اگر مدل tool call ایجاد نکند، یا اگر آستانه‌ی `maxSteps` به پایان برسد، فرآیند تولید پایان می‌یابد.

> `maxSteps` را می‌توان هم در `generateText` و هم در `streamText`، به‌کار برد.

## استفاده از maxSteps

مثال زیر، نشان می‌دهد که چگونه می‌توان یک Agent ایجاد کرد که مسائل ریاضی را حل کند. این Agent به یک Tool ماشین‌حساب (calculator) مجهز است که از کتابخانه‌ی [math.js](https://mathjs.org/) استفاده می‌کند و می‌تواند برای ارزیابی عبارات ریاضی 
فراخوانی شود.

```ts
import { createOpenAI } from '@ai-sdk/openai';
import { tool, generateText } from 'ai';
import { z } from 'zod';
import * as mathjs from 'mathjs';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});

(async () => {
  const { text: answer } = await generateText({
    model: my_model('openai/gpt-4.1', { structuredOutputs: true }),
    tools: {
      calculate: tool({
        description:
          'A tool for evaluating mathematical expressions. ' +
          "Example expressions: '1.2 * (2 + 4.5)', '12.7 cm to inch', 'sin(45 deg) ^ 2'.",
        parameters: z.object({ expression: z.string() }),
        execute: async ({ expression }) => mathjs.evaluate(expression),
      }),
    },
    maxSteps: 10,
    system:
      'You are solving math problems. ' +
      'Reason step by step. ' +
      'Use the calculator when necessary. ' +
      'When you give the final answer, ' +
      'provide an explanation for how you arrived at it.',
    prompt:
      'A taxi driver earns $9461 per 1-hour of work. ' +
      'If he works 12 hours a day and in 1 hour ' +
      'he uses 12 liters of petrol with a price of $134 for 1 liter. ' +
      'How much money does he earn in one day?',
  });

  console.log(`ANSWER: ${answer}`);
})();
```

## پاسخ‌های ساختارمند (Structured Answers)

زمانی که قصد دارید یک Agent برای Taskهایی مانند تحلیل ریاضی یا تولید گزارش طراحی کنید، اغلب مفید است که خروجی نهایی Agent، دارای قالبی ساختارمند و یکپارچه باشد تا بتوان آن را به‌راحتی در برنامه پردازش کرد.
برای این کار، می‌توانید از یک answer tool همراه با  `'toolChoice: 'required` استفاده کنید تا LLM را ملزم کنید که پاسخ نهایی خود را به‌صورت ساختارمند و مطابق با الگوی تعیین‌شده در answer tool، ارائه دهد.


```ts
import { createOpenAI } from '@ai-sdk/openai';
import { tool, generateText } from 'ai';
import { z } from 'zod';
import * as mathjs from 'mathjs';


const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});

(async () => {
const { toolCalls } = await generateText({
  model: my_model('openai/gpt-4.1', { structuredOutputs: true }),
  tools: {
    calculate: tool({
      description:
        'A tool for evaluating mathematical expressions. Example expressions: ' +
        "'1.2 * (2 + 4.5)', '12.7 cm to inch', 'sin(45 deg) ^ 2'.",
      parameters: z.object({ expression: z.string() }),
      execute: async ({ expression }) => mathjs.evaluate(expression),
    }),
    // answer tool: the LLM will provide a structured answer
    answer: tool({
      description: 'A tool for providing the final answer.',
      parameters: z.object({
        steps: z.array(
          z.object({
            calculation: z.string(),
            reasoning: z.string(),
          }),
        ),
        answer: z.string(),
      }),
      // no execute function - invoking it will terminate the agent
    }),
  },
  toolChoice: 'required',
  maxSteps: 10,
  system:
    'You are solving math problems. ' +
    'Reason step by step. ' +
    'Use the calculator when necessary. ' +
    'The calculator can only do simple additions, subtractions, multiplications, and divisions. ' +
    'When you give the final answer, provide an explanation for how you got it.',
  prompt:
    'A taxi driver earns $9461 per 1-hour work. ' +
    'If he works 12 hours a day and in 1 hour he uses 14-liters petrol with price $134 for 1-liter. ' +
    'How much money does he earn in one day?',
});

console.log(`FINAL TOOL CALLS: ${JSON.stringify(toolCalls, null, 2)}`);
})();
```

## دسترسی به تمام مراحل (Accessing all steps)

فراخوانی تابع `generateText` با استفاده از پارامتر `maxSteps` می‌تواند منجر به فراخوانی چندباره LLM شود (هر فراخوانی، به‌عنوان یک مرحله یا `step` در نظر گرفته می‌شود).
برای دسترسی به اطلاعات مربوط به تمام این مراحل، می‌توانید از خصیصه `steps` در پاسخ نهایی استفاده کنید. این خصیصه شامل جزئیات مربوط به هر مرحله از اجرای Agent است و امکان بررسی روند حل مسئله یا تحلیل فرآیند تصمیم‌گیری مدل را فراهم می‌کند.

```ts
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});

(async () => {

const { steps } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  maxSteps: 10,
  // ...
});

// extract all tool calls from the steps:
const allToolCalls = steps.flatMap(step => step.toolCalls);

})();
```

## دریافت اعلان پس از پایان هر مرحله

می‌توانید از تابع callback به نام `onStepFinish` استفاده کنید تا پس از اتمام هر مرحله، اعلان دریافت کنید. این تابع زمانی فراخوانی می‌شود که یک مرحله به‌طور کامل به پایان رسیده باشد؛ یعنی زمانی که تمام تغییرات متنی (text deltas)، فراخوانی‌های Toolها، و نتایج Tool مربوط به آن مرحله، در دسترس قرار گرفته باشد.

```ts
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_KEY>",
});

(async () => {
const result = await generateText({
  model: my_model("openai/gpt-4o-mini"),
  maxSteps: 10,
  onStepFinish({ text, toolCalls, toolResults, finishReason, usage }) {
    // your own logic, e.g. for saving the chat history or recording usage
  },
  // ...
});
})();
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
