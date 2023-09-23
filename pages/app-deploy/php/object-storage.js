import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های PHP - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="php" />
      <div className="page-title">
        <h1>پلتفرم PHP</h1>
        <span className="page-description">(PHP Platform)</span>
      </div>
    </div>

    <h3>اتصال به ذخیره‌سازی ابری</h3>

    <p>
      بدون شک اتصال برنامه به یک{" "}
      <Link href="/buckets/about">ذخیره‌سازی ابری</Link> مطمئن برای نگهداری و
      ارائه فایل‌های استاتیک وب‌سایت یا داده‌های آپلود شده توسط کاربران، باعث
      اطمینان خاطر صاحبان کسب و کار و بهبود عملکرد برنامه‌ می‌شود.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#install-aws-sdk">نصب AWS SDK</a>
      </li>
      <li>
        <a href="#set-keys">تنظیم کلیدها</a>
      </li>
      <li>
        <a href="#list-buckets">دریافت لیست باکت‌ها توسط AWS SDK</a>
      </li>
      <li>
        <a href="#upload-files">آپلود فایل توسط AWS SDK</a>
      </li>
      <li>
        <a href="#remove-files">حذف فایل توسط AWS SDK</a>
      </li>
    </ul>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/php/php-object-storage.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/php-getting-started/tree/object-storage">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <h3 id="install-aws-sdk">نصب AWS SDK</h3>
    <p>
      از آنجا که ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با پروتکل
      S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و فریم‌ورک‌های
      مختلفی این فضای ذخیره‌سازی را مدیریت کنید. حال برای اتصال به ذخیره‌سازی
      ابری در PHP باید با اجرای دستور زیر، پکیج{" "}
      <a
        href="https://packagist.org/packages/aws/aws-sdk-php"
        target="_blank"
        rel="noopener noreferrer"
      >
        aws-sdk
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`composer require aws/aws-sdk-php`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      در مرحله‌ی بعد، به‌منظور امنیت و کنترل راحت‌تر مقادیر باید مشخصات فضای
      ذخیره‌سازی ابری اعم از <Link href="/buckets/keys">کلیدها</Link> و آدرس
      اتصال به این سرویس را در بخش{" "}
      <Link href="/app-deploy/php/envs">متغیرهای برنامه</Link> تنظیم کنید.
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <p>
      همچنین اگر باکت شما خصوصی باشد، برای دسترسی به باکت، نیاز به کلید دسترسی
      دارید. برای ساخت کلید، به صفحه ذخیره‌سازی ابری بروید و طبق عکس‌ها کلید خود
      را بسازید.
    </p>
    <p>به قسمت کلیدها رفته:</p>
    <ZoomableImage src="/static/flask/get_key1.png" />
    <p>یک کلید جدید بسازید.</p>
    <ZoomableImage src="/static/flask/get_key2.png" />
    <p>
      کلید های ساخته شده را کپی کنید. توجه داشته باشید که SECRET_KEY تنها یک بار
      نمایش داده می‌شود و پس از آن باید کلید را درجایی مطمئن ذخیره کنید.
    </p>
    <ZoomableImage src="/static/flask/get_key3.png" />

    <h3 id="list-buckets">دریافت لیست باکت‌ها توسط AWS SDK</h3>
    <p>نمونه کد برای دریافت لیست باکت‌های ایجاد شده:</p>

    <Highlight className="php">
      {`<?php
// Require the Composer autoloader.
require 'vendor/autoload.php';

use Aws\\S3\\S3Client;

// Instantiate an S3 client.
$client = new S3Client([
    'region' => 'us-east-1',
    'version' => '2006-03-01',
    'endpoint' => LIARA_ENDPOINT,
    'credentials' => [
        'key' => LIARA_ACCESS_KEY,
        'secret' => LIARA_SECRET_KEY
    ],
]);

$result = $client->listBuckets([/* ... */]);
$promise = $client->listBucketsAsync([/* ... */]);

print_r($result);
print_r($promise);`}
    </Highlight>

    <h3 id="upload-files">آپلود فایل توسط AWS SDK</h3>
    <p>نمونه کد برای آپلود فایل در باکت‌های ایجاد شده:</p>
    <Highlight className="php">
      {`<?php
// Require the Composer autoloader.
require 'vendor/autoload.php';

use Aws\\S3\\S3Client;

// Instantiate an S3 client.
$client = new S3Client([
    'region' => 'us-east-1',
    'version' => '2006-03-01',
    'endpoint' => LIARA_ENDPOINT,
    'credentials' => [
        'key' => LIARA_ACCESS_KEY,
        'secret' => LIARA_SECRET_KEY
    ],
]);

try {
  $client->putObject([
      'Bucket' => 'my-bucket',
      'Key'    => 'my-object',
      'Body'   => fopen('/path/to/file', 'r')
  ]);
} catch (AwsS3ExceptionS3Exception $e) {
  echo "There was an error uploading the file.";
}`}
    </Highlight>

    <h3 id="remove-files">حذف فایل توسط AWS SDK</h3>
    <p>نمونه کد برای حذف فایل در باکت‌های ایجاد شده:</p>
    <Highlight className="php">
      {`<?php
// Require the Composer autoloader.
require 'vendor/autoload.php';

use Aws\\S3\\S3Client;

// Instantiate an S3 client.
$client = new S3Client([
    'region' => 'us-east-1',
    'version' => '2006-03-01',
    'endpoint' => LIARA_ENDPOINT,
    'credentials' => [
        'key' => LIARA_ACCESS_KEY,
        'secret' => LIARA_SECRET_KEY
    ],
]);

$result = $client->deleteObject([
  'Bucket' => 'ExampleBucket',
  'Key' => 'HappyFace.jpg',
]);`}
    </Highlight>

    <br />

    <p>
      شما می‌توانید برای کسب اطلاعات بیشتر،{" "}
      <a
        href="https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-Aws.S3.S3Client.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        مثال‌ها و مستندات این پکیج
      </a>{" "}
      را مطالعه کنید.
    </p>

    <br />

    <Link href="/app-deploy/php/domain" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
