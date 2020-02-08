import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'
import Gist from 'react-gist'

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات NodeJS SDK - Object Storage</title>
    </Head>

    <h1>Liara NodeJS SDK</h1>
    <p>
      ذخیره و نگهداری از فایل‌ها در حجم بالا معمولا کار ساده‌ای نیست.
      احتمالا به این هم فکر کرده‌اید که اگر تعداد و حجم فایل‌هایتان زیاد شد، باید چه کنید؟
      چگونه از فایل‌هایتان فایل پشتیبان تهیه کنید؟ فایل‌های پشتیبان را کجا نگهداری کنید؟
    </p>
    <p>
      برای حل مشکلاتی که به آن اشاره کردیم، می‌توانید از سرویس ذخیره‌ی فایل ما استفاده کنید. لیارا یک
      <span className="code">API</span>
      مشابه نمونه‌های خارجی مانند
      <span className="code">Amazon S3</span>
      و
      <span className="code">Rackspace Cloud Storage</span>
      دارد که تمام دغدغه‌های شما برای ذخیره‌ی فایل‌هایتان را حل می‌کند.
    </p>
    <p>
      توجه داشته باشید که سرویس فایل لیارا، S3-Compatible و یا همان سازگار با S3 است.
      و این بدین معنی است که شما می‌توانید از کتابخانه‌ها و نرم‌افزارهایی که برای AWS S3 نوشته شده‌اند،
      برای ارتباط با سرویس فایل لیارا استفاده کنید.
    </p>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای نصب
      <span className="code">Liara SDK</span>
      دستور زیر را داخل برنامه‌ی‌تان وارد کنید:
    </p>
    <pre>
      <code>
        npm install @liara/sdk
      </code>
    </pre>
    <p>
      و برای راه‌اندازی باید یک نمونه از کلاس
      Liara
      ایجاد کنید:
    </p>
    <Gist id="66e102ce9af59b76d55452bf78dda805" />
    <p>
      به مقادیر فیلدهای
      <span className="code">LIARA_ACCESS_KEY</span>
      و
      <span className="code">LIARA_SECRET_KEY</span>
      و همین‌طور 
      <span className="code">LIARA_ENDPOINT</span>
      از داخل داشبورد، بخش سرویس فایل می‌توانید دسترسی داشته باشید.
    </p>
    <p>
      اگر از کتاب‌خانه‌ای استفاده می‌کنید که نیازمند فیلد
      <span className="code">region</span>
      است، مقدار آن را برابر
      <span className="code">us-east-1</span>
      قرار دهید.
    </p>

    <h3>آپلود فایل</h3>
    <p>
      برای ایجاد و آپلود فایل‌ها باید از متد
      <span className="code">putObject</span>
      استفاده کنید:
    </p>
    <Gist id="dbbafadda488a734615e17a999c98eba" />
    <p>
      در این نمونه، ما یک فایل با نام
      <span className="code">file.txt</span>
      در باکت
      <span className="code">my-files</span>
      ایجاد کردیم و محتوای آن را برابر
      <span className="code">Hello World!</span>
      قرار دادیم. اگر به داشبوردتان در لیارا مراجعه کنید، می‌بینید که این فایل ایجاد شده‌است.
    </p>
    <p>
      برای آپلود یک فایل می‌توانید از استریم‌ها هم استفاده کنید.
    </p>
    <Gist id="b0120c73418cc6a3e382843157bae298" />

    <h3>Bucket چیست؟</h3>
    <p>
      باکت را اگر معادل مخزن در نظر بگیریم، مخزن و محفظه‌ای برای نگه‌داری پوشه‌ها و فایل‌های شماست.
      ممکن است شما باکت‌های‌تان را به این شکل ایجاد کنید:
    </p>
    <ul className="ltr">
      <li>images</li>
      <li>videos</li>
      <li>docs</li>
    </ul>
    <p>
      و یا ممکن است به ازای هر برنامه، یک باکت ایجاد کنید:
    </p>
    <ul className="ltr">
      <li>chat-app-files</li>
      <li>my-second-project-files</li>
    </ul>
    <p>
      و یا حتی ترکیبی از این حالت‌ها. باکت‌ها علاوه‌بر این که برای نظم‌دادن به فایل‌ها کاربردی هستند،
      قابلیت‌هایی مثل سطوح دسترسی به فایل‌ها و پوشه‌های درون آن باکت را می‌توانند فراهم کنند.
    </p>

    <h3>سطح دسترسی باکت</h3>
    <p>
      همان‌طور که گفته شد، باکت‌ها می‌توانند سطح دسترسی فایل‌های درون خود را مشخص کنند.
      برای این کار، کافیست که روی تنظیمات باکت که در مقابل نام هر باکت وجود دارد، کلیک کرده و بعد
      <span className="code">Edit policy</span>
      را انتخاب کنید:
    </p>
    <ZoomableImage src="/static/storage-edit-policy.png" alt="Edit bucket policy" />
    <p>
      در صفحه‌ای که باز می‌شود، می‌توانید
      <span className="code">Prefix</span>
      و یا همان پیشوند مورد نظرتان را وارد کنید و سپس برای آن
      Prefix
      باید دسترسی مربوطه که می‌تواند یک از موارد زیر باشد را انتخاب کنید:
    </p>
    <ul className="list-more-space">
      <li>
        <span className="code">Read Only</span>:
        هر کسی می‌تواند این فایل‌ها را مشاهده کند.
      </li>
      <li>
        <span className="code">Write Only</span>:
        هر کسی می‌تواند این فایل‌ها را تغییر دهد و فایل‌های دیگری را به جای آن‌ها آپلود کند.
      </li>
      <li>
        <span className="code">Read and Write</span>:
        همه می‌توانند این فایل‌ها را مشاهده و فایل‌های دیگری را به جای آن آپلود کنند.
      </li>
    </ul>
    <p>
      برای مثال، اگر Prefix
      را برابر photo
      و دسترسی را برابر Read Only
      قرار دهید، همه‌ی فایل‌های این باکت که با نام photo
      آغاز شوند، از طریق URL
      مخصوص خودشان در دسترس خواهند بود.
    </p>
    <p>
      اگر می‌خواهید دسترسی‌ای را روی همه‌ی فایل‌های باکت اعمال کنید، فقط کافیست که
      که در فیلد Prefix
      کاراکتر
      <span className="code">*</span>
      را قرار دهید تا به عنوان Wild card 
      عمل کرده و شامل همه‌ی فایل‌های داخل باکت شود.
    </p>
    <ZoomableImage src="/static/bucket-policies.png" alt="Bucket policies" />

    <h3>آدرس فایل‌ها</h3>
    <p>
      فایل‌ها با ساختار زیر در دسترس هستند:
    </p>
    <pre>
      <code>
{`https://YOUR_ENDPOINT/YOUR_BUCKET/KEY`}
      </code>
    </pre>
    <p>
      برای مثال اگر فایلی را در مسیر
      <span className="code">user-12/avatar.png</span>
      داخل باکت
      <span className="code">users</span>
      ذخیره‌ای کرده‌اید، این فایل در
      <span className="code">Endpoint</span>
      شما به شکل زیر در دسترس خواهد بود:
    </p>
    <pre>
      <code>
{`https://sawersasdfza.storage.liara.ir/users/user-12/avatar.png`}
      </code>
    </pre>
    <ul style={{ marginTop: 54 }}>
      <li>
        مستندات کامل، در صفحه‌ی اصلی SDK موجود هستند:
        {' '}
        <a href="https://www.npmjs.com/package/@liara/sdk" title="Liara JavaScript SDK">مستندات Liara SDK</a>
      </li>
    </ul>
  </Layout>
)
