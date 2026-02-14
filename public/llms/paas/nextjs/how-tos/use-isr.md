Original link: https://docs.liara.ir/paas/nextjs/how-tos/use-isr/

# استفاده از قابلیت ISR

[ISR](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) یا Incremental Static Regeneration یک ویژگی در NextJS است که به شما اجازه می‌دهد تا صفحات استاتیک را به صورت انتخابی و بدون نیاز به بازسازی کل سایت، به‌روزرسانی کنید.
این قابلیت ترکیبی از مزایای Static Site Generation (SSG) و انعطاف‌پذیری Server-Side Rendering (SSR) را ارائه می‌دهد.
در واقع، عملکرد ISR به شکل زیر است: 

همانطور که گفته شد، ISR امکان به‌روزرسانی صفحات استاتیک به‌صورت انتخابی و بدون نیاز به بازسازی کل سایت را فراهم می‌کند. این کار با استفاده از یک ویژگی کلیدی به نام revalidate در متد getStaticProps انجام می‌شود. مقدار revalidate تعیین می‌کند که یک صفحه استاتیک چه زمانی نیاز به بازسازی در پس‌زمینه دارد. زمانی که کاربران از صفحه‌ای بازدید می‌کنند، اگر زمان تعیین‌شده در revalidate گذشته باشد، یک نسخه جدید از صفحه ساخته می‌شود، در حالی که کاربران همچنان نسخه قدیمی را مشاهده می‌کنند.

در این فرآیند، NextJS از کش (Cache) برای ارائه سریع نسخه موجود صفحه استفاده می‌کند. این باعث می‌شود تا کاربران تجربه سریعی داشته باشند، حتی اگر داده‌های صفحه در حال به‌روزرسانی باشد. هنگامی که فرآیند بازسازی کامل شد، نسخه جدید جایگزین نسخه قدیمی می‌شود و برای درخواست‌های بعدی ارائه خواهد شد. این ویژگی برای وب‌سایت‌هایی که شامل محتوای متغیر یا صفحات زیادی هستند، مانند فروشگاه‌های آنلاین یا سایت‌های خبری، بسیار ایده‌آل است.

## نحوه استفاده

مثال زیر نحوه پیاده‌سازی ISR را نشان می‌دهد. این کد داده‌ها را از یک API فرضی دریافت کرده و هر ۱۰ ثانیه، صفحه را به‌روز می‌کند:

```js
// pages/isr-example.js

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => res.json());

  return {
    props: { data },
    revalidate: 10, // updates every 10 seconds
  };
}

const ISRExample = ({ data }) => {
  return (
    <div>
      <h1>ISR Example</h1>
      <strong>Title:</strong> {data.title}
      <strong>Body:</strong> {data.body}
    </div>
  );
};

export default ISRExample;

```

در پروژه‌های واقعی ممکن است داده‌ها ناقص باشند یا API به درستی پاسخ ندهد. در چنین مواردی، می‌توانید مانند قطعه کد زیر، عمل کنید: 

```js
export async function getStaticProps() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json());

    if (!data) {
      return {
        notFound: true, // display 404 page
      };
    }

    return {
      props: { data },
      revalidate: 10, // update every 10 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: null },
      revalidate: 10,
    };
  }
}

```

## نحوه استفاده در لیارا

از آنجایی که فضای نوشتن در حالتِ پیش‌فرضِ Writable، متغیر است و در حالت فایل‌سیستم ReadOnly   فضایی برای نوشتن وجود ندارد؛ ممکن است که به افزایش فضا برای ذخیره‌سازی صفحات ساخته شده مبتنی بر ISR، نیاز داشته باشید. برای این کار کافیست تا طبق مراحل زیر، عمل کنید:

## Pages Router

1. ایجاد دیسک  
طبق مستندات [ساخت دیسک](https://docs.liara.ir/paas/disks/create)، یک دیسک با نام و اندازه دلخواه ایجاد کنید.

2. تعریف مسیر برای دیسک  
طبق مستندات [تعریف مسیر دیسک](https://docs.liara.ir/paas/disks/route)، دیسک ایجاد شده را به مسیر `next/server/pages.` متصل کنید.

## App Router

1. ایجاد دیسک  
طبق مستندات [ساخت دیسک](https://docs.liara.ir/paas/disks/create)، یک دیسک با نام و اندازه دلخواه ایجاد کنید.

2. تعریف مسیر برای دیسک  
طبق مستندات [تعریف مسیر دیسک](https://docs.liara.ir/paas/disks/route)، دیسک ایجاد شده را به مسیر `next/server/app.` متصل کنید.

با انجام کارهای فوق، فضای پوشه مدنظر، افزایش خواهد یافت.

> در صورتی که به دایرکتوری اشاره شده، دیسک متصل نکرده باشید و فایل‌سیستم بر روی Writable باشد، با هر بار استقرار جدید یا ری‌استارت شدن برنامه، تمامی فایل‌های cache شده، حذف می‌شوند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
