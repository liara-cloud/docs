import Layout from '../../components/Layout'
import Head from 'next/head'
import Highlight from 'react-highlight'
import Notice from '../../components/Notice'

export default () => (
  <Layout>
    <Head>
      <title>Liara | مستندات وب‌سرویس لیارا (API)</title>
    </Head>

    <h1>مستندات وب‌سرویس لیارا (API)</h1>
    <p>
      وب‌سرویس و در واقع API ما به شما دسترسی کامل به امکانات پلتفرم ابری لیارا را می‌دهد.
      با استفاده از این API، می‌توانید در برنامه‌ها و سرویس‌های خودتان از لیارا به عنوان فراهم‌کننده‌ی زیر ساخت استفاده کنید.
    </p>
    {/* <p>
      در ادامه، به چندین نمونه از کاربردهای API لیارا اشاره می‌کنیم:
    </p>
    <ul>
      <li>Automation?!</li>
    </ul> */}

    <Notice>
      این صفحه در حال تکمیل است. اگر مستندات وب‌سرویس مورد نظرتان را پیدا نمی‌کنید، با پشتیبانی لیارا ارتباط بگیرید.
    </Notice>

    <p>
      برای ارتباط با وب‌سرویس لیارا، تمامی درخواست‌های‌تان را باید به آدرس زیر ارسال کنید:
    </p>
    <pre>
      <code>
{`https://api.liara.ir`}
      </code>
    </pre>

    <h3>احراز هویت (Authentication)</h3>
    <p>
      تمام درخواست‌ها به وب‌سرویس لیارا باید دارای هدر Authorization باشند:
    </p>
    <pre>
      <code>
{`Authorization: Bearer TOKEN`}
      </code>
    </pre>
    <p>
      توکن مخصوص به شما در پنل کاربری‌تان قابل مشاهده است.
      <br />
      در صورتی که احراز هویت به درستی صورت نگیرد، خطای 401 دریافت خواهید کرد.
    </p>

    <h3>نسخه‌ها (Versioning)</h3>
    <p>
      تمامی درخواست‌ها دارای ورژن مشخصی هستند. ورژن‌های Endpoint
      ها با یک‌دیگر متفاوت هستند.
    </p>
    <p>
      نسخه‌های قدیمی‌تر هر Endpoint تا زمانی که امکان‌پذیر باشد پشتیبانی می‌شوند.
    </p>
    <p>
      برای مثال، برای دریافت لیست پروژه‌ها، ورژن به شکل زیر مشخص می‌شود:
    </p>
    <pre>
      <code>
{`https://api.liara.ir/v1/projects`}
      </code>
    </pre>
    
    {/* <h3>خطاها (Errors)</h3>
    <p></p> */}

    <h3>مدیریت پروژه‌ها</h3>
    <h4>لیست پروژه‌ها</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/v1/projects`}
      </code>
    </pre>
    <p>نمونه‌ی پاسخ این درخواست:</p>
    <Highlight className="json">
{`{
  "projects": [
    {
      "_id": "5d63d32e7be321001cee3f91",
      "created_at": "2019-08-26T12:40:14.762Z",
      "planID": "nano",
      "scale": 1,
      "type": "django",
      "status": "ACTIVE",
      "project_id": "my-django-app"
    },
    {
      "_id": "5d77797340b865001c420356",
      "created_at": "2019-09-10T10:22:43.549Z",
      "planID": "standard-1x",
      "scale": 0,
      "status": "ACTIVE",
      "project_id": "analize-app",
      "type": "docker"
    }
  ]
}`}
    </Highlight>
    <p>
      اگر فیلد
      <span className="code">scale</span>
      برابر با صفر باشد، به معنای خاموش‌بودن پروژه است.
    </p>

    <h4>ساخت پروژه‌ی جدید</h4>
    <pre>
      <code>
{`POST https://api.liara.ir/v1/projects`}
      </code>
    </pre>
    <p>نمونه‌ی داده‌هایی که در این خواست می‌توانید ارسال کنید:</p>
    <Highlight className="json">
{`{
  "name": "my-app",
  "platform": "laravel",
  "planID": "nano"
}`}
    </Highlight>
    <p>
      پروژه‌ها دارای پلن‌های مشخصی هستند که هر کدام از این پلن‌ها، شناسه‌ی یکتای خود را دارد. لیست پلن‌های قابل انتخاب:
    </p>
    <div className="table-responsive">
      <table className="table" style={{ minWidth: 400 }}>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>حافظه</th>
            <th>پردازنده</th>
            <th>فضا</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nano</td>
            <td style={{ direction: 'ltr', textAlign: 'center' }}>512 MB</td>
            <td>یک هسته</td>
            <td>۲ گیگ</td>
          </tr>
          <tr>
            <td>micro</td>
            <td style={{ direction: 'ltr', textAlign: 'center' }}>1 GB</td>
            <td>یک هسته</td>
            <td>۵ گیگ</td>
          </tr>
          <tr>
            <td>standard-1x</td>
            <td style={{ direction: 'ltr', textAlign: 'center' }}>2 GB</td>
            <td>دو هسته</td>
            <td>۱۰ گیگ</td>
          </tr>
          <tr>
            <td>standard-2x</td>
            <td style={{ direction: 'ltr', textAlign: 'center' }}>4 GB</td>
            <td>دو هسته</td>
            <td>۲۰ گیگ</td>
          </tr>
          <tr>
            <td>performance-1x</td>
            <td style={{ direction: 'ltr', textAlign: 'center' }}>6 GB</td>
            <td>چهار هسته</td>
            <td>۴۰ گیگ</td>
          </tr>
          <tr>
            <td>performance-2x</td>
            <td style={{ direction: 'ltr', textAlign: 'center' }}>8 GB</td>
            <td>چهار هسته</td>
            <td>۶۰ گیگ</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4>حذف پروژه</h4>
    <pre>
      <code>
{`DELETE https://api.liara.ir/v1/projects/:project_id`}
      </code>
    </pre>
    <p>
      برای مثال، اگر قصد حذف پروژه‌ای را با شناسه‌ی
      <span className="code">my-app</span>
      دارید، به این صورت باید درخواست دهید:
    </p>
    <pre>
      <code>
{`DELETE https://api.liara.ir/v1/projects/my-app`}
      </code>
    </pre>

    <h3>مدیریت استقرارها</h3>
    <h4>لیست استقرارها</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/v1/projects/:project_id/releases`}
      </code>
    </pre>
    <p>نمونه‌ی پاسخ این درخواست:</p>
    <Highlight className="json">
{`{
  "platform": "node",
  "readyReleasesCount": 2,
  "releases": [
    {
      "_id": "5d9782503a794b0222381919",
      "type": "ENV_UPDATE",
      "state": "READY",
      "createdAt": "2019-10-02T07:31:41.415Z"
    },
    {
      "_id": "5d94525dfa0f8a003291109c",
      "type": "DEPLOY",
      "state": "READY",
      "createdAt": "2019-10-02T07:31:41.415Z"
    }
  ]
}`}
    </Highlight>

    <h4>ایجاد استقرار جدید</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/v2/projects/:project_id/releases`}
      </code>
    </pre>
    <p>نمونه‌ی داده‌هایی که در این خواست می‌توانید ارسال کنید:</p>
    <Highlight className="json">
{`{
  "port": 80,
  "type": "static",
  "files": [
    { "path": "index.html", "data": "<link rel='stylesheet' href='/assets/style.css'> Hello World :)" },
    { "path": "assets/style.css", "data": "body { color: white; background-color: green }" }
  ]
}`}
    </Highlight>
    <p>نمونه‌ی پاسخ این درخواست:</p>
    <Highlight className="json">
{`{
  "releaseID": "5d9c5494c0523a00464e4124"
}`}
    </Highlight>

    {/* <h4>تغییر متغیرهای پروژه</h4> */}

    {/* <h4>مشاهده‌ی لاگ‌های عملیات استقرار</h4> */}
    {/* <h4>لغو استقرار</h4> */}
    {/* <h4>بازگشت به استقرار قبلی</h4> */}

    {/* <h3>مدیریت دیتابیس‌ها</h3>
    <h4>لیست دیتابیس‌ها</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/v1/databases`}
      </code>
    </pre>

    <h4>اطلاعات دیتابیس</h4>
    <pre>
      <code>
{`GET https://api.liara.ir/v1/databases/:databaseID`}
      </code>
    </pre>

    <h4>راه‌اندازی دیتابیس جدید</h4>
    <pre>
      <code>
{`POST https://api.liara.ir/v1/databases`}
      </code>
    </pre>

    <h4>حذف دیتابیس</h4>
    <pre>
      <code>
{`DELETE https://api.liara.ir/v1/databases/:databaseID`}
      </code>
    </pre> */}
  </Layout>
)

// TODO: Add more examples for different platform deployments (node, flask, docker, etc.)
// TODO: Explain ports and add table for default platform ports.
// TODO: Add an example of docker image deployment.
