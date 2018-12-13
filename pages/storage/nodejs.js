import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>Liara | NodeJS SDK - Object Storage</title>
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

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای نصب
      <span className="code">Liara SDK</span>
      دستور زیر را داخل پروژه‌یتان وارد کنید:
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
    <pre>
      <code>
{`const Liara = require('@liara/sdk');

const { Storage } = new Liara({
  namespace: 'YOUR_NAMESPACE',
  secret_key: 'YOUR_SECRET_KEY'
});`}
      </code>
    </pre>
    <p>
      در کد بالا، باید به جای
      <span className="code">YOUR_NAMESPACE</span>
      شناسه‌ی یکتای سرویس فایل‌تان را وارد کنید.
      این شناسه را هنگام فعال‌کردن سرویس فایل‌تان تعیین کردید.
      به جای
      <span className="code">YOUR_SECRET_KEY</span>
      هم کلید وب‌سرویس لیارا را وارد کنید. این کلید را از
      {' '}
      <a href="https://console.liara.ir/API" target="_blank">داشبورد</a>
      {' '}
      می‌توانید کپی کنید.
    </p>
    <ZoomableImage src="/static/api-key.png" alt="Liara API key" />

    <h3>آپلود فایل</h3>
    <p>
      برای ایجاد و آپلود فایل‌ها باید از متد
      <span className="code">put</span>
      استفاده کنید:
    </p>
    <pre>
      <code>
        Storage.put('file.txt', 'Hello World!');
      </code>
    </pre>
    <p>
      در این نمونه، ما یک فایل با نام
      <span className="code">file.txt</span>
      ایجاد کردیم و محتوای آن را برابر
      <span className="code">Hello World!</span>
      قرار دادیم. اگر به داشبوردتان در لیارا مراجعه کنید، می‌بینید که این فایل ایجاد شده‌است.
    </p>
    <p>
      برای ذخیره‌ی یک فایل می‌توانید از استریم‌ها هم استفاده کنید.
    </p>
    <pre>
      <code>
{`const fs = require('fs');

const fileContents = fs.createReadStream('./cat.png');

Storage.put('/cat.png', fileContents)
  .then(result => console.log('Successfully uploaded.'))`}
      </code>
    </pre>

    <h3>لیست فایل‌ها و پوشه‌ها</h3>
    <p>
      برای مشاهده‌ی لیست فایل‌‌هایتان می‌توانید از متد
      <span className="code">list</span>
      استفاده کنید:
    </p>
    <pre>
      <code>
{`Storage.list()
  .then(list => console.log(list));`}
      </code>
    </pre>
    <p>
      و برای لیست پوشه‌ها از متد
      <span className="code">directories</span>
      استفاده کنید:
    </p>
    <pre>
      <code>
{`Storage.directories()
  .then(dirs => console.log(dirs));`}
      </code>
    </pre>
    {/* TODO: list and directories methods takes some arguments. Document them too.*/}

    <h3>دریافت فایل‌ها</h3>
    <p>
      برای دریافت می‌توانید آن‌ها را استریم کنید:
    </p>
    <pre>
      <code>
{`const result = fs.createWriteStream('result.png');

Storage.getStream('cat.png').pipe(result);
`}
      </code>
    </pre>
    <p>
      در نمونه‌ی بالا فایل
      <span className="code">cat.png</span>
      را دریافت کرده و در فایل
      <span className="code">result.png</span>
      ذخیره کردیم.
    </p>
  </Layout>
)