import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'
import Gist from 'react-gist'

export default () => (
  <Layout>
    <Head>
      <title>Liara | Laravel S3 Driver</title>
    </Head>

    <h1>Laravel S3 Driver</h1>
    <p>
      لاراول مفهومی با عنوان دیسک دارد که به شما این اجازه را می‌دهد که بدون اعمال تغییرات خاصی
      در پروژه‌یتان، فایل‌هایتان را در جاهای مختلف ذخیره کنید. شما تا به حال از دیسک
      <span className="code">local</span>
      استفاده کرده‌اید. این دیسک فایل‌های شما را در پوشه‌ی
      <span className="code">storage</span>
      ذخیره می‌کند. اما احتمالا به این هم فکر کرده‌اید که اگر تعداد و حجم فایل‌هایتان زیاد شد، باید چه کنید؟
      چگونه از فایل‌هایتان فایل پشتیبان تهیه کنید؟ فایل‌های پشتیبان را کجا نگهداری کنید؟
    </p>
    <p>
      برای حل مشکلاتی که به آن اشاره کردیم، می‌توانید از دیسک
      <span className="code">liara</span>
      استفاده کنید. لیارا یک
      <span className="code">API</span>
      مشابه نمونه‌های خارجی مانند
      <span className="code">Amazon S3</span>
      و
      <span className="code">Rackspace Cloud Storage</span>
      دارد که تمام دغدغه‌های شما برای ذخیره‌ی فایل‌هایتان را حل می‌کند.
    </p>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      از آنجایی که سرویس فایل لیارا با
      S3
      سازگار است، شما می‌توانید از همان
      <span className="code">S3 Driver</span>
      لاراول، برای ذخیره‌ی فایل در لیارا با کمی تغییرات کوچک، استفاده کنید.
    </p>
    <p>
      با توجه به
      {' '}
      <a href="https://laravel.com/docs/filesystem" title="Laravel's filesystems docs">مستندات لاراول</a>
      {' '}
      لازم است که
      <span className="code">S3 Driver</span>
      نصب شود. برای نصب می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>
{`composer require league/flysystem-aws-s3-v3`}
      </code>
    </pre>
    <p>
      سپس وارد فایل
      <span className="code">config/filesystems.php</span>
      شوید و یک دیسک جدید با نام
      <span className="code">liara</span>
      اضافه کنید:
    </p>
    <Gist id="6275691101e0c46682729e1170153128" />
    <p>
      همان‌طور که مشاهده می‌کنید، در این تکه‌کد، نام دیسک را برابر
      <span className="code">liara</span>
      قرار داده‌ایم و از درایور
      <span className="code">s3</span>
      استفاده خواهیم کرد.
      مقدار
      <span className="code">region</span>
      در حال حاظر، باید حتما برابر
      <span className="code">us-east-1</span>
      باشد،
    </p>
    <p>
      و حالا باید مابقی تنظیمات را که نباید در سورس‌کد نوشته شوند را در فایل
      <span className="code">.env</span>
      باید وارد کنیم:
    </p>
    <pre>
      <code>
{`LIARA_ENDPOINT="https://asdf.storage.liara.ir"
LIARA_ACCESS_KEY=KBSIYRR36U3A1IO1QARI
LIARA_SECRET_KEY=Z9BV6YsP7jtRQR1qCJk3PWecs22smNTOl7HC1Yj3
LIARA_BUCKET=test`}
      </code>
    </pre>
    <p>
      به مقادیر فیلدهای
      <span className="code">LIARA_ACCESS_KEY</span>
      و
      <span className="code">LIARA_SECRET_KEY</span>
      و همین‌طور 
      <span className="code">LIARA_ENDPOINT</span>
      از داخل داشبورد، بخش سرویس فایل می‌توانید دسترسی داشته باشید.
      اما برای فیلد
      <span className="code">LIARA_BUCKET</span>
      لازم است که وارد «داشبورد سرویس فایل» شوید و یک باکت با نام دلخواه‌تان بسازید و سپس نام آن را
      در اینجا وارد نمایید.
    </p>
    <ZoomableImage src="/static/create-bucket.png" alt="Create a new bucket" />
    
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
      و یا ممکن است به ازای هر پروژه، یک باکت ایجاد کنید:
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

    <h3>آپلود فایل</h3>
    <p>
      با استفاده از
      <span className="code">Storage Facade</span>
      در لاراول، می‌توانید فایل‌های‌تان در سرویس فایل لیارا مدیریت کنید.
    </p>
    <Gist id="f5e234b660e662de8741366ed1a571eb" />
    <p>
      به صورت پیش‌فرض، فایل‌ها داخل پوشه‌ی
      <span className="code">storage</span>
      خود لاراول ذخیره می‌شوند، اما می‌توانید داخل فایل
      <span className="code">.env</span>
      تنظیمات زیر را وارد کنید تا درایور فایل‌سیستم پیش‌فرض تغییر کرده و برابر لیارا شود:
    </p>
    <pre>
      <code>
{`FILESYSTEM_DRIVER=liara`}
      </code>
    </pre>
    <p>
      از این پس،
      <span className="code">Storage Facade</span>
      فایل‌ها را در سرویس فایل لیارا آپلود کرده و از آنجا می‌خواند.
    </p>
    <p>
      برای اطلاعات بیشتر به
      {' '}
      <a href="https://laravel.com/docs/filesystem">مستندات لاراول</a>
      {' '}
      مراجعه کنید.
    </p>
  </Layout>
)