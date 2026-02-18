Original link: https://docs.liara.ir/mirrors/about/





# آشنایی با میرور (مخزن نرم افزاری) لیارا


استفاده از میرورهای لیارا، به شما این امکان را می‌دهد تا بتوانید پکیج‌ها و ایمیج‌های موردنیازتان را با سرعتی بالا، پایداری بیشتر و بدون وابستگی مستقیم به سرورهای خارج از ایران، دریافت کنید. 
در ادامه به معرفی این سرویس، به صورت کامل پرداخته شده است. 

## میرور چیست و چه کاربردی دارد؟

فرض کنید در سیستم‌عامل اوبونتوی خود، قصد دارید یک پکیج خاص را نصب یا آپدیت کنید. 
در حالت عادی، سیستم شما باید آن پکیج را از سرورهای اصلی اوبونتو که خارج از کشور هستند دریافت کند. 



اکنون، اگر با یک قطعی سراسری، محدودیت اینترنت بین‌الملل یا کندی شدید شبکه روبه‌رو باشید، عملاً امکان دسترسی به مخزن اصلی وجود نخواهد داشت و نصب یا آپدیت پکیج مورد نظر شما، متوقف خواهد شد.


<i>
در اینجا، میرورها یا مخازن نرم‌افزاری لیارا، به کار می‌آیند.
</i>


میرورهای لیارا مانند یک واسط میان  کاربر و ریپازیتوری اصلی عمل می‌کنند و
با نگه‌داشتن آخرین نسخه‌ها از پکیج‌ها و ایمیج‌ها، دسترسی سریع‌تر، پایدارتر و کم‌هزینه‌تری نسبت به مخزن اصلی فراهم می‌کنند.

## لیارا چه میرورهایی را ارائه می‌دهد؟

لیارا، طیف گسترده‌ای از مخازن نرم‌افزاری را پشتیبانی می‌کند؛ در ادامه، فهرست کاملی از میرورهایی که لیارا ارائه می‌دهد، قرار گرفته است:


## میرورهای توزیع‌های لینوکسی

میرورهای توزیع‌های لینوکسی شامل مخازن رسمی توزیع‌های لینوکسی هستند که برای دریافت پکیج‌های سیستم‌عامل استفاده می‌شوند. این میرورها به کاربران کمک می‌کنند به‌صورت سریع‌تر و پایدارتر و در زمان اختلالات اینترنت بین‌المللی، پکیج‌های موردنیاز خود را از سرورهای داخلی دریافت کنند. در ادامه لیستی از این میرورها قرار گرفته است: 


<div className="grid md:grid-cols-3 gap-4">
{[
{ alt: 'https://media.liara.ir/logos/ubuntu.png', platform: 'Ubuntu', link: "/mirrors/ubuntu" },
// { alt: 'https://media.liara.ir/logos/debian.png', platform: 'Debian', link: "/mirrors/debian" },
// { alt: 'https://media.liara.ir/logos/fedora.png', platform: 'Fedora', link: "/mirrors/fedora" },
// { alt: 'https://media.liara.ir/logos/centos.svg', platform: 'CentOS', link: "/mirrors/centos" },
// { alt: 'https://media.liara.ir/logos/opensuse.png', platform: 'OpenSUSE', link: "/mirrors/opensuse" },
// { alt: 'https://media.liara.ir/logos/Rocky_Linux_logo.svg', platform: 'Rocky Linux', link: "/mirrors/rocky-linux" },
// { alt: 'https://media.liara.ir/logos/alpine-linux.svg', platform: 'Alpine Linux', link: "/mirrors/alpine-linux" },
// { alt: 'https://media.liara.ir/logos/Arch_Linux.png', platform: 'Arch Linux', link: "/mirrors/arch-linux" },
// { alt: 'https://media.liara.ir/logos/Manjaro-logo.png', platform: 'Manjaro', link: "/mirrors/manjaro" },
].map(item =>
<Link href={item.link}>
<Card className="flex cursor-pointer w-full items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-[40px] p-1  bg-[#333] rounded-lg">
<PlatformIcon platform={item.alt} />
</div>
#### {item.platform}
</div>
<GoArrowLeft className="ml-1" />
</Card>
</Link>
)}
</div>



## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
