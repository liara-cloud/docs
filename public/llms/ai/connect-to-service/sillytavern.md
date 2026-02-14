Original link: https://docs.liara.ir/ai/connect-to-service/sillytavern/

# اتصال هوش مصنوعی به برنامه SillyTavern

[SillyTavern](https://docs.sillytavern.app) (که به اختصار ST نیز نامیده می‌شود) یک رابط کاربری است که به شما امکان می‌دهد با LLMها تعامل داشته باشید.  
SillyTavern در ابتدا زیرمجموعه‌ای از TavernAI به حساب می‌آمد؛ اما امروزه، با پشتیبانی جامعه‌ای فعال، به یکی از ابزارهای محبوب علاقه‌مندان به هوش مصنوعی تبدیل شده است. 

برای اتصال سرویس AI لیارا به برنامه SillyTavern، در ابتدا باید، سرویس زیر را در لیارا، ایجاد کنید: 

- [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/ai/quick-start/)

بعد از راه‌اندازی سرویس فوق، تنها کافیست تا گام‌های زیر را طی کنید: 

[Video link](https://media.liara.ir/ai/sillytavern/setup.mp4)

۱. راه‌اندازی SillyTavern  
با اجرای دستور زیر در ترمینال خود، یک کلون از ریپازیتوری رسمی SillyTavern تهیه کنید

```bash
git clone https://github.com/SillyTavern/SillyTavern -b release
```

در ادامه، فایل `Start.bat` (در لینوکس و مک، فایل `start.sh`) را اجرا کنید، سپس وارد مرورگر شده و صفحه `http://127.0.0.1:8000` را باز کنید. با انجام کارهای فوق،  SillyTavern برای شما به اجرا در می‌آید.

۲. اتصال به سرویس هوش مصنوعی لیارا  
در صفحه باز شده، گزینه **API Connections** را انتخاب کنید. در فیلد **API**، گزینه **Chat Completion** را انتخاب کرده و سپس در بخش **Chat Completion Source**، گزینه **Custom (OpenAI-compatible)** را انتخاب کنید. در ادامه، در قسمت **Custom Endpoint (Base URL)** مقدار baseUrl سرویس هوش مصنوعی خود، و در بخش **Custom API Key**، مقدار کلید API کنسول لیارا خود را، وارد کنید.  
در نهایت و پس از نوشتن نام مدل خود در فیلد **Enter a Model ID**، کافیست تا بر روی گزینه **Connect** کلیک کنید.

با انجام مراحل فوق، سرویس هوش مصنوعی شما در SillyTavern آماده استفاده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
