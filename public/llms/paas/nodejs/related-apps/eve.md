Original link: https://docs.liara.ir/paas/nodejs/related-apps/eve/

# استقرار برنامه‌های EVE در لیارا


[EVE](https://typesafe.ai/blog/introducing-system-one-models-and-jev) یک فریم‌ورک متن‌باز از Vercel برای ساخت و اجرای AI Agentهاست.
یعنی می‌توان با یک ساختار فایل ساده، Agentهایی ساخت که ابزار، Skill , Subagent، زمان‌بندی و Human-in-the-loop داشته باشند. 



برای استقرار برنامه‌های EVE در لیارا، می‌توانید طبق مراحل زیر، عمل کنید: 

۱. ساخت برنامه EVE   
با اجرای دستور زیر، در سیستم خود، یک برنامه EVE ایجاد کنید:


```bash
npx eve@latest init my-agent
```

۲. تنظیم هوش مصنوعی لیارا   
برای استفاده از [هوش مصنوعی لیارا](https://docs.liara.ir/ai/about/) در پروژه، در ابتدا در ترمینال، دستور زیر را اجرا کنید:


```bash
npm i @ai-sdk/openai-compatible
```

در ادامه، در مسیر `agent/agent.ts`، قطعه کد زیر را قرار دهید:

{agentCode}


می‌توانید به جای مدل `openai/gpt-6-luna`، از سایر مدل‌های لیارا نیز، استفاده کنید.

۳. تنظیم Authentication   
برای دسترسی امن به EVE، کافیست تا قطعه کد زیر را در مسیر `agent/channels/eve.ts`، قرار دهید:


{eveChannelCode}

۴. ساخت برنامه NodeJS در لیارا   
طبق مستندات [ساخت برنامه NodeJS](https://docs.liara.ir/paas/nodejs/how-tos/create-app/)، یک برنامه NodeJS بسازید.

۵. تنظیم متغیرهای محیطی برنامه   
طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs/)، متغیرهای زیر را برای برنامه خود، تنظیم کنید:


```bash
AGENT_API_KEY=<token>
LIARA_BASE_URL=<base-url>
LIARA_API_KEY=<api-key>
```


مقادیر فوق را با اطلاعات واقعی، پر کنید. برای تولید مقدار `AGENT_API_KEY`، می‌توانید دستور زیر را اجرا کنید:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

۶. استقرار برنامه   
طبق مستندات [استقرار برنامه](https://docs.liara.ir/paas/nodejs/how-tos/deploy-app/)، برنامه خود را در لیارا، مستقر کنید.

۷. اتصال به برنامه از لوکال   
برای اتصال به برنامه، می‌توانید از دستور زیر استفاده کنید:

```bash
npx eve remote connect --url https://<your-url> -H "Authorization: Bearer <AGENT_API_KEY>"
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
