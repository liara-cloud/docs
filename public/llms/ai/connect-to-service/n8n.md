Original link: https://docs.liara.ir/ai/connect-to-service/n8n/

# اتصال هوش مصنوعی به برنامه N8N

[Video link](https://media.liara.ir/ai/n8n-ai.mp4)

برای راه‌اندازی برنامه N8N مجهز به هوش مصنوعی، در ابتدا باید، دو سرویس زیر را در لیارا، ایجاد کنید:

- [برنامه آماده N8N](https://docs.liara.ir/one-click-apps/n8n/quick-start/)
- [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/ai/quick-start/)

بعد از راه‌اندازی دو سرویس فوق، تنها کافیست تا گام‌های زیر را طی کنید:

۱. ایجاد حساب کاربری N8N  
وارد برنامه آماده N8N خود شوید و با وارد کردن فیلدهای خواسته شده و کلیک بر روی گزینه `Next`، حساب کاربری خود را ایجاد کنید.

![n8n-first-welcome](https://media.liara.ir/ai/n8n/n8n-first-welcome.png)

۲. ایجاد credential برای OpenAI  
وارد بخش credentials شوید و بر روی گزینه `Add first credential` کلیک کنید؛ گزینه `OpenAi` را انتخاب کنید و بر روی `Continue` کلیک کنید.  
در بخش `API Key`، [کلید API لیارا](https://docs.liara.ir/references/api/about/) و در بخش `Base URL`، آدرس `baseUrl` سرویس هوش مصنوعی خود را، وارد کنید و در نهایت بر روی گزینه `Save`، کلیک کنید.

![save-openai-credential](https://media.liara.ir/ai/n8n/save-openai-credential.png)

۳. ایجاد Workflow هوش مصنوعی  
وارد بخش Workflow شوید؛ بر روی گزینه `Create Workflow` کلیک کنید و در صفحه جدید باز شده، علامت `+` را انتخاب کنید. در نهایت، ماژول `OpenAI Chat Model` را انتخاب کرده و پس از انتخاب نوع مدل، می‌توانید از هوش مصنوعی خود، استفاده کنید.

![n8n-and-liara-ai](https://media.liara.ir/ai/n8n/n8n-and-liara-ai.png)

با انجام مراحل فوق، سرویس هوش مصنوعی شما در N8N آماده استفاده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
