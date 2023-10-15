import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های .Net - لیارا</title>
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

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/dotnet/dotnet-object-storage.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/dotnet-getting-started/tree/object-storage">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

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
    <Highlight className="shell">{`dotnet add package AWSSDK.S3`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      در مرحله‌ی بعد، به‌منظور امنیت و کنترل راحت‌تر مقادیر باید مشخصات فضای
      ذخیره‌سازی ابری اعم از <Link href="/buckets/keys">کلیدها</Link> و آدرس
      اتصال به این سرویس را در بخش{" "}
      <Link href="/app-deploy/netcore/envs">متغیرهای برنامه</Link> تنظیم کنید.
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=https://<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <p>
      اگر که از فایل env. برای بارگذاری متغیرهای محیطی در پروژه اصلی استفاده
      می‌کنید؛ می‌توانید با استفاده از دستور زیر، پکیج DotEnv را نصب کنید.
    </p>

    <Highlight className="shell">{`dotnet add package dotenv.net`}</Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>
      برنامه نمونه‌ای برای مدیریت باکت‌ها در لیارا در زیر آمده است؛ می‌توانید با
      استفاده از دستورات زیر، از برنامه استفاده کنید:
    </p>
    <ul className="mt-0">
      <li>
        اجرای دستور <span className="code">dotnet run list</span>برای نمایش
        آیتم‌های موجود در یک باکت
      </li>
      <li>
        اجرای دستور <span className="code">dotnet run download</span> برای
        دانلود یک فایل مشخص از باکت و ذخیره آن
      </li>
      <li>
        اجرای دستور <span className="code">dotnet run upload</span> برای آپلود
        یک فایل مشخص درون باکت
      </li>
      <li>
        اجرای دستور <span className="code">dotnet run geturls</span> برای دریافت
        لینک موقت یک ساعته تمام فایل‌های موجود در باکت
      </li>
      <li>
        اجرای دستور <span className="code">dotnet run listbuckets</span> برای
        نمایش باکت‌های موجود ساخته شده در لیارا توسط ما
      </li>
    </ul>

    <Highlight className="csharp">
      {`using System;
using System.Collections.Generic;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using DotNetEnv;
using System.IO;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // loading env variables
        Env.Load();

        // setting env variables
        string accessKey = Env.GetString("LIARA_ACCESS_KEY");
        string secretKey = Env.GetString("LIARA_SECRET_KEY");
        string bucketName = Env.GetString("LIARA_BUCKET_NAME");
        string endpoint = Env.GetString("LIARA_ENDPOINT");

        // making s3 connections
        var config = new AmazonS3Config
        {
            ServiceURL = endpoint,
            ForcePathStyle = true,
            SignatureVersion = "4"
        };
        var credentials = new Amazon.Runtime.BasicAWSCredentials(accessKey, secretKey);
        using var client = new AmazonS3Client(credentials, config);

        if (args.Length > 0)
        {
            string command = args[0];

            if (command == "list")
            {
                // listing items from bucket   
                ListObjectsV2Request request = new ListObjectsV2Request
                {
                    BucketName = bucketName
                };
                ListObjectsV2Response response = client.ListObjectsV2Async(request).Result;

                foreach (S3Object entry in response.S3Objects)
                {
                    Console.WriteLine($"File: {entry.Key} (Size: {entry.Size} bytes)");
                }
            }
            else if (command == "download")
            {
                string objectKey = "wordpress.png"; 
                string filePath = "downloaded_file.png";
                try
                {
                    GetObjectRequest request = new GetObjectRequest
                    {
                        BucketName = bucketName,
                        Key = objectKey
                    };

                    using GetObjectResponse response = await client.GetObjectAsync(request);
                    using Stream responseStream = response.ResponseStream;
                    using FileStream fileStream = File.Create(filePath);
                    await responseStream.CopyToAsync(fileStream);
                    Console.WriteLine($"File '{objectKey}' downloaded successfully.");
                }
                catch (AmazonS3Exception e)
                {
                    Console.WriteLine($"Error: {e.Message}");
                }
            }
            else if (command == "upload")
            {
                string filePath = "downloaded_file.png"; // مسیر فایل محلی
                string objectKey = "uploaded.png"; // نام فایل در سبد

                try
                {
                    using FileStream fileStream = new FileStream(filePath, FileMode.Open);

                    PutObjectRequest request = new PutObjectRequest
                    {
                        BucketName = bucketName,
                        Key = objectKey,
                        InputStream = fileStream
                    };

                    await client.PutObjectAsync(request);

                    Console.WriteLine($"File '{objectKey}' uploaded successfully.");
                }
                catch (AmazonS3Exception e)
                {
                    Console.WriteLine($"Error: {e.Message}");
                }
            }
            else if (command == "geturls")
            {
                ListObjectsV2Request request = new ListObjectsV2Request
                {
                    BucketName = bucketName
                };
                ListObjectsV2Response response = client.ListObjectsV2Async(request).Result;

                foreach (S3Object entry in response.S3Objects)
                {
                    GetPreSignedUrlRequest urlRequest = new GetPreSignedUrlRequest
                    {
                        BucketName = bucketName,
                        Key = entry.Key,
                        Expires = DateTime.Now.AddHours(1) // زمان انقضا (یک ساعت)
                    };
                    string url = client.GetPreSignedURL(urlRequest);
                    Console.WriteLine($"File: {entry.Key}, URL: {url}");
                }
            }
            else if (command == "listbuckets")
            {
                ListBucketsResponse response = client.ListBucketsAsync().Result;

                Console.WriteLine("Available Buckets:");
                foreach (S3Bucket bucket in response.Buckets)
                {
                    Console.WriteLine(bucket.BucketName);
                }
            }
            else
            {
                Console.WriteLine("Invalid command. Available commands: list, download, upload, geturls, getpermanenturls, listbuckets");
            }
        }
        else
        {
            Console.WriteLine("Please provide a command. Available commands: list, download, upload, geturls, getpermanenturls, listbuckets");
        }
    }
}`}
    </Highlight>

    <br />

    <Link href="/app-deploy/netcore/email" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
