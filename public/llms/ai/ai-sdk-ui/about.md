Original link: https://docs.liara.ir/ai/ai-sdk-ui/about/

# معرفی کتابخانه‌ی AI SDK UI

AI SDK UI با این هدف طراحی شده است که در ساخت برنامه‌های چت تعاملی، completionها و دستیارها به سادگی به شما کمک کند. AI SDK UI یک toolkit مستقل از فریم‌ورک (framework-agnostic) است  
و فرایند ادغام قابلیت‌های پیشرفته‌ی هوش مصنوعی را در برنامه‌های شما ساده می‌سازد.

AI SDK UI به ما abstractionهای قدرتمندی ارائه می‌دهد که taskهای پیچیده‌ی chat stream و به‌روزرسانی رابط کاربری در بخش فرانت‌اند را ساده می‌کنند. این موضوع به شما این امکان را می‌دهد تا رابط‌های کاربری پویا و مبتنی بر هوش مصنوعی را با کارایی بیشتری توسعه دهید.  
با استفاده از چهار هوک اصلی — `useChat` , `useCompletion` , `useObject` و `useAssistant` — می‌توانید قابلیت‌های چت بلادرنگ (real-time chat)، تکمیل متن، استریم JSON و ویژگی‌های تعاملی دستیار را در برنامه‌ی خود بگنجانید.

- `useChat` قابلیت استریم پیام‌های چت را فراهم می‌کند و state management را برای ورودی‌ها، پیام‌ها، loadingها و خطاها، abstract می‌کند. این ویژگی امکان ادغام ساده با هر طراحی رابط کاربری را به ما می‌دهد
- `useCompletion` به شما این امکان را می‌دهد که تکمیل متن (text completions) را در برنامه‌ی خود مدیریت کنید. این هوک مسئولیت مدیریت ورودی prompt را بر عهده گرفته و رابط کاربری را به‌صورت خودکار هنگام استریم، به‌روزرسانی می‌کند
- `useObject` یک هوک است که به شما اجازه می‌دهد آبجکت‌های JSON استریمی را استفاده کنید. این قابلیت روشی ساده برای مدیریت و نمایش داده‌های ساختاریافته (structured data) در برنامه‌ی شما ارائه می‌دهد
- `useAssistant` برای تسهیل تعامل با APIهای دستیار سازگار با OpenAI طراحی شده است. این هوک وضعیت رابط کاربری را مدیریت کرده و هنگام استریم پاسخ‌ها به‌صورت خودکار آن را به‌روزرسانی می‌کند

## پشتیبانی در فریم‌ورک‌های مختلف

AI SDK UI در فریم‌ورک‌های [React](https://docs.liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D8%B1%DB%8C-%D8%A7%DA%A9%D8%AA-react/) , [Svelte](https://docs.liara.ir/paas/nodejs/related-apps/svelte/) , [Vue.js](https://docs.liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D9%88%DB%8C%D9%88-%D8%AC%DB%8C-%D8%A7%D8%B3-vue/) و [SolidJS](https://www.solidjs.com/) (که در SolidJS منقضی شده است)، پشتیبانی می‌شود. در ادامه، مقایسه‌ای از توابع پشتیبانی شده در این فریم‌ورک‌ها، قرار گرفته است:

در ادامه، به توضیح هر یک از قابلیت‌های AI SDK به تفصیل، پرداخته شده است:

- [چت بات](https://docs.liara.ir/ai/ai-sdk-ui/chatbot)
- [ماندگاری پیام در چت‌بات](https://docs.liara.ir/ai/ai-sdk-ui/chatbot-message-persistence)
- [استفاده از tool در چت‌بات](https://docs.liara.ir/ai/ai-sdk-ui/chatbot-tool-usage)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
