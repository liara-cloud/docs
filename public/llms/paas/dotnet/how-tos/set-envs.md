Original link: https://docs.liara.ir/paas/dotnet/how-tos/set-envs/

# استفاده از متغیرهای محیطی 

برای استفاده از متغیرهای محیطی در برنامه خود، در ابتدا باید طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی را به برنامه خود، اضافه کنید.
در ادامه، شما می‌توانید با استفاده از متد `()GetEnvironmentVariable` به متغیرهای محیطی خود در برنامه NET. دسترسی داشته باشید؛ به عنوان مثال:

```dotnet
string url = Environment.GetEnvironmentVariable("LIARA_URL");
if(url == null)
{
    Console.WriteLine("LIARA_URL not set.");
}
else
{
    Console.WriteLine(url);
}
```

در مثال فوق، `LIARA_URL` یک متغیر محیطی است که از قبل، به برنامه فرضی در لیارا، اضافه شده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
