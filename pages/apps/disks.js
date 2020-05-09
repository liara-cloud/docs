import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Highlight from 'react-highlight'
import Notice from '../../components/Notice'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات دیسک‌ها</title>
    </Head>

    <h1>ذخیره‌ی داده‌ها در دیسک‌ها</h1>
    <span className="pageDescription">(Disks)</span>

    <p>
      فایل‌سیستم در لیارا زودگذر و فانی است، این یعنی هر فایلی که در کنار پوشه‌های
      برنامه‌های‌تان ذخیره کنید، بعد از یک عملیات استقرار و یا یک ری‌استارت، از بین خواهند رفت.
      لیارا امکانی با عنوان «دیسک»
      دارد که می‌تواند فایل‌های درون پوشه‌هایی که شما آن‌ها را مشخص می‌کنید را نگه‌داری کند.
      داده‌هایی که داخل دیسک‌ها نگه‌داری می‌شوند، بعد از یک عملیات استقرار و یا ری‌استارت، محفوظ می‌مانند.
    </p>
    <p>
      برای مثال ممکن است یک پوشه با نام
      <span className="code">uploads</span>
      داشته باشید که می‌توانید آن را به عنوان دیسک
      تعریف کرده و دیگر نگران از بین رفتن فایل‌های درون این پوشه نباشید.
      در برنامه‌هایی که از Laravel
      به عنوان فریم‌ورک اصلی استفاده می‌کنید، ممکن است که پوشه‌ی
      <span className="code">storage</span>
      را به عنوان دیسک
      تعریف کنید. به همین ترتیب، در برنامه‌های جنگو پوشه‌ی
      <span className="code">media</span>
      را.
    </p>

    <Notice variant="warning">
      توجه کنید که اگر قبلا از قابلیت
      <span className="code">volume</span>
      استفاده می‌کردید، این قابلیت منسوخ شده و به دیسک تغییر نام داده شده‌است.
      اما شما می‌توانید بدون نیاز به اقدامی، همچنان از همان قابلیت استفاده کنید.
    </Notice>

    <h3>تعریف دیسک</h3>
    <p>
      تعریف‌کردن دیسک
      به کمک فایل
      {' '}
      <Link href="/clients/cli#liara-json-file" title="مستندات CLI">liara.json</Link>
      {' '}
      صورت می‌گیرد.
    </p>
    <Highlight className="json">
{`{
  "disks": [
    {
      "name": "disk1",
      "mountTo": "uploads"
    }
  ]
}
`}
    </Highlight>
    <p>
      فیلد <span className="code">name</span>
      در واقع همان نام دیسکی است که ساخته‌اید. فیلد
      <span className="code">mountTo</span>
      هم مسیر پوشه‌ای است که قصد دارید دیسک در آنجا قرار بگیرد و اصطلاحا mount شود.
      همان‌طور که در این نمونه مشاهده می‌کنید، این مسیر به صورت نسبی وارد شده است.
      در صورت تمایل، به صورت مطلق و از ریشه‌ی برنامه هم می‌توانید آدرس‌دهی کنید. البته آدرس‌دهی
      مطلق را توصیه نمی‌کنیم.
    </p>
    <p>
      به عنوان مثالی دیگر، فرض کنید برای یک برنامه‌ی لاراولی قصد دارید که
      یک دیسک برای پوشه‌ی storage بسازید. در این صورت،
      از بخش دیسک‌ها یک دیسک با نام دلخواه مانند
      <span className="code">mydisk</span>
      بسازید و بعد تنظیمات زیر را داخل فایل
      <span className="code">liara.json</span>
      قرار داده و دیپلوی کنید:
    </p>
    <Highlight className="json">
{`{
  "disks": [
    {
      "name": "mydisk",
      "mountTo": "storage"
    }
  ]
}
`}
    </Highlight>

    <h3>تعریف چندین دیسک</h3>
    <p>
      در حالتی که ۲ یا چندین دیسک دارید،
      می‌توانید آن‌ها را مانند نمونه‌ی زیر تعریف کنید:
    </p>
    <Highlight className="json">
{`{
  "disks": [
    {
      "name": "disk1",
      "mountTo": "public/files"
    },
    {
      "name": "disk2",
      "mountTo": "storage/images"
    }
  ]
}
`}
    </Highlight>

    <h3>مهاجرت از <span className="code">volume</span> به <span className="code">disks</span></h3>
    <p>
      همان‌طور که پیش‌تر گفته شد، قابلیت
      <span className="code">volume</span>
      منسوخ شده و ممکن است بخواهید که به قابلیت جدید
      <span className="code">disks</span>
      مهاجرت کنید. خوشبختانه این کار بسیار ساده‌است. نمونه‌ی زیر را در نظر بگیرید:
      <Highlight className="json">
{`{
  "volume": "/var/www/html/storage"
}
`}
    </Highlight>

    حالا برای انتقال این
    <span className="code">volume</span>
    ،
    فقط کافیست که فایل <span className="code">liara.json</span>
    را به شکل زیر تغییر دهید:
    </p>
    <Highlight className="json">
{`{
  "disks": [
    {
      "name": "default",
      "mountTo": "/var/www/html/storage"
    }
  ]
}
`}
    </Highlight>
    <p>
      در این حالت، نام دیسک را حتما باید
      <span className="code">default</span>
      وارد کنید. حالا می‌توانید دستور
      <span className="code">liara deploy</span>
      را اجرا کنید. در این مرحله، دیگر هشدار منسوخ‌شدن قابلیت
      <span className="code">volume</span>
      را مشاهده نخواهید کرد.
    </p>
  </Layout>
)
