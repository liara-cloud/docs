import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های .Net - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="netcore" />
      <div className="page-title">
        <h1>پلتفرم .Net</h1>
        <span className="page-description">(.Net Platform)</span>
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
        <a href="#how-to-use">نحوه‌ی استفاده</a>
      </li>
    </ul>

    <h3 id="install-aws-sdk">نصب AWS SDK</h3>
    <p>
      از آنجا که ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با پروتکل
      S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و فریم‌ورک‌های
      مختلفی این فضای ذخیره‌سازی را مدیریت کنید. حال برای اتصال به ذخیره‌سازی
      ابری در .Net باید با اجرای دستور زیر، پکیج{" "}
      <a
        href="https://www.nuget.org/packages/AWSSDK.S3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        AWSSDK.S3
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`Install-Package AWSSDK.S3`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      در مرحله‌ی بعد، به‌منظور امنیت و کنترل راحت‌تر مقادیر باید مشخصات فضای
      ذخیره‌سازی ابری اعم از <Link href="/buckets/keys">کلیدها</Link> و آدرس
      اتصال به این سرویس را در بخش{" "}
      <Link href="/app-deploy/netcore/envs">متغیرهای برنامه</Link> تنظیم کنید.
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>نمونه کد برای دریافت لیست باکت‌های ایجاد شده:</p>

    <Highlight className="javascript">
      {`using Amazon.S3;
using System;
using System.Threading.Tasks;
using Amazon;

class Program
{
  private const string accessKey = Environment.GetEnvironmentVariable("LIARA_ACCESS_KEY");
  private const string secretKey = Environment.GetEnvironmentVariable("LIARA_SECRET_KEY");

  static void Main(string[] args)
  {
    Task.Run(MainAsync).GetAwaiter().GetResult();
  }

  private static async Task MainAsync()
  {
    var config = new AmazonS3Config
    {
      RegionEndpoint = RegionEndpoint.USEast1,
      ServiceURL = Environment.GetEnvironmentVariable("LIARA_ENDPOINT")
    };
    var amazonS3Client = new AmazonS3Client(
      accessKey,
      secretKey,
      config);

    amazonS3Client.ExceptionEvent += OnAmazonS3Exception;

    var listBucketResponse = await amazonS3Client.ListBucketsAsync();

    foreach (var bucket in listBucketResponse.Buckets)
    {
      // ...
    }
    if (listBucketResponse.Buckets.Count > 0)
    {
      var bucketName = listBucketResponse.Buckets[0].BucketName;
      var listObjectsResponse = await amazonS3Client.ListObjectsAsync(bucketName);
      foreach (var obj in listObjectsResponse.S3Objects)
      {
        // ...
      }
    }
  }
}`}
    </Highlight>

    <br />

    <Link href="/app-deploy/netcore/domain">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
