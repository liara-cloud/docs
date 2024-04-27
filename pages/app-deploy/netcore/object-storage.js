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
        <h1>پلتفرم Net.</h1>
        <span className="page-description">(DotNet Platform)</span>
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
      <li>
        <a href="#how-to-use-in-controller">نحوه استفاده در کنترلر</a>
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

    <Highlight className="shell">{`dotnet add package DotNetEnv`}</Highlight>

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
        اجرای دستور{" "}
        <span className="code">dotnet run download &lt;object-name&gt;</span>{" "}
        برای دانلود یک فایل مشخص از باکت و ذخیره آن
      </li>
      <li>
        اجرای دستور{" "}
        <span className="code">dotnet run delete &lt;object-name&gt;</span> برای
        حدف یک فایل مشخص از باکت
      </li>
      <li>
        اجرای دستور{" "}
        <span className="code">dotnet run upload &lt;object-name&gt;</span> برای
        آپلود یک فایل مشخص درون باکت
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
using System.IO;
using System.Threading.Tasks;
using Amazon.S3;
using Amazon.S3.Model;
using DotNetEnv;

class Program
{
    static async Task Main(string[] args)
    {
        // Load environment variables
        Env.Load();

        // Set environment variables
        string accessKey = Env.GetString("LIARA_ACCESS_KEY");
        string secretKey = Env.GetString("LIARA_SECRET_KEY");
        string bucketName = Env.GetString("LIARA_BUCKET_NAME");
        string endpoint = Env.GetString("LIARA_ENDPOINT");

        // Check for the existence of required variables
        if (string.IsNullOrEmpty(accessKey) || string.IsNullOrEmpty(secretKey) || string.IsNullOrEmpty(bucketName) || string.IsNullOrEmpty(endpoint))
        {
            Console.WriteLine("Error: Missing required environment variables.");
            return;
        }

        // Create S3 client
        var config = new AmazonS3Config
        {
            ServiceURL = endpoint,
            ForcePathStyle = true,
            SignatureVersion = "4"
        };
        var credentials = new Amazon.Runtime.BasicAWSCredentials(accessKey, secretKey);
        using var client = new AmazonS3Client(credentials, config);

        // Check for command
        if (args.Length == 0)
        {
            Console.WriteLine("Please provide a command. Available commands: list, download, upload, geturls, getpermanenturls, listbuckets, delete");
            return;
        }

        string command = args[0];

        switch (command)
        {
            case "list":
                await ListObjectsAsync(client, bucketName);
                break;
            case "download":
                if (args.Length < 2)
                {
                    Console.WriteLine("Please provide the object key to download.");
                    return;
                }
                await DownloadObjectAsync(client, bucketName, args[1], Path.Combine(Directory.GetCurrentDirectory(), args[1]));
                break;
            case "upload":
                if (args.Length < 2)
                {
                    Console.WriteLine("Please provide the object key for upload.");
                    return;
                }
                await UploadObjectAsync(client, bucketName, Path.Combine(Directory.GetCurrentDirectory(), args[1]), args[1]);
                break;
            case "geturls":
                await GetUrlsAsync(client, bucketName, 1);
                break;
            case "getpermanenturls":
                await GetUrlsAsync(client, bucketName, 10);
                break;
            case "listbuckets":
                await ListBucketsAsync(client);
                break;
            case "delete":
                if (args.Length < 2)
                {
                    Console.WriteLine("Please provide the object key to delete.");
                    return;
                }
                await DeleteObjectAsync(client, bucketName, args[1]);
                break;
            default:
                Console.WriteLine("Invalid command. Available commands: list, download, upload, geturls, getpermanenturls, listbuckets, delete");
                break;
        }
    }
    static async Task ListObjectsAsync(IAmazonS3 client, string bucketName)
    {
        ListObjectsV2Request request = new ListObjectsV2Request
        {
            BucketName = bucketName
        };
        ListObjectsV2Response response = await client.ListObjectsV2Async(request);

        foreach (S3Object entry in response.S3Objects)
        {
            Console.WriteLine($"File: {entry.Key} (Size: {entry.Size} bytes)");
        }
    }

    static async Task DownloadObjectAsync(IAmazonS3 client, string bucketName, string objectKey, string filePath)
    {
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

    static async Task UploadObjectAsync(IAmazonS3 client, string bucketName, string filePath, string objectKey)
    {
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

    static async Task GetUrlsAsync(IAmazonS3 client, string bucketName, int expiresInHours)
    {
        ListObjectsV2Request request = new ListObjectsV2Request
        {
            BucketName = bucketName
        };
        ListObjectsV2Response response = await client.ListObjectsV2Async(request);

        foreach (S3Object entry in response.S3Objects)
        {
            GetPreSignedUrlRequest urlRequest = new GetPreSignedUrlRequest
            {
                BucketName = bucketName,
                Key = entry.Key,
                Expires = DateTime.Now.AddHours(expiresInHours)
            };
            string url = client.GetPreSignedURL(urlRequest);
            Console.WriteLine($"File: {entry.Key}, URL: {url}");
        }
    }

    static async Task ListBucketsAsync(IAmazonS3 client)
    {
        ListBucketsResponse response = await client.ListBucketsAsync();

        Console.WriteLine("Available Buckets:");
        foreach (S3Bucket bucket in response.Buckets)
        {
            Console.WriteLine(bucket.BucketName);
        }
    }

    static async Task DeleteObjectAsync(IAmazonS3 client, string bucketName, string objectKey)
    {
        try
        {
            DeleteObjectRequest deleteRequest = new DeleteObjectRequest
            {
                BucketName = bucketName,
                Key = objectKey
            };

            await client.DeleteObjectAsync(deleteRequest);

            Console.WriteLine($"File '{objectKey}' deleted successfully.");
        }
        catch (AmazonS3Exception e)
        {
            Console.WriteLine($"Error: {e.Message}");
        }
    }
}
`}
    </Highlight>

    <h3 id="how-to-use-in-controller">نحوه‌ی استفاده در کنترلر</h3>
    <p>
      اگر که یک برنامه Net. تحت وب دارید و قصد دارید که آن را به فضای ذخیره‌سازی
      ابری لیارا متصل کنید؛ کافیست که در کنترلر مربوطه، کد زیر را به برنامه
      اضافه کنید:
    </p>

    <Highlight className="csharp">
      {`using Amazon.S3;
using Amazon.S3.Model;
using DotNetEnv; // for install, run dotnet add package DotNetEnv

namespace yourprojectname.Controllers; // در اینجا نام پروژه خود را وارد کنید

public class yourController : Controller 
{
    public async Task<ActionResult> Insert(IFormFile image)
    {
        // check if image exists or not
        if (post.Image != null && post.Image.Length > 0)
        {
            // loading env variables
            Env.Load();

            // creating AmazonS3Config instance
            var config = new AmazonS3Config
            {
                ServiceURL = Env.GetString("LIARA_ENDPOINT"),
                ForcePathStyle = true,
                SignatureVersion = "4"
            };

            var credentials  = new Amazon.Runtime.BasicAWSCredentials(Env.GetString("LIARA_ACCESS_KEY"), Env.GetString("LIARA_SECRET_KEY"));
            using var client = new AmazonS3Client(credentials, config);
            string objectKey = Guid.NewGuid().ToString() + post.Image.FileName;
            try
                {
                    
                    using var memoryStream = new MemoryStream();
                    await post.Image.CopyToAsync(memoryStream).ConfigureAwait(false);

                    PutObjectRequest request = new PutObjectRequest
                    {
                        BucketName = Env.GetString("LIARA_BUCKET_NAME"),
                        Key = objectKey,
                        InputStream = memoryStream,
                    };
                    
                    // uploading image in bucket
                    await client.PutObjectAsync(request);
                    Console.WriteLine($"File '{objectKey}' uploaded successfully.");
                }

            catch (AmazonS3Exception e)
                {
                    Console.WriteLine($"Error: {e.Message}");
                }
            // getting image url    
            string fileUrl = $"{Env.GetString("LIARA_ENDPOINT")}/{Env.GetString("LIARA_BUCKET_NAME")}/{objectKey}";    
            post.ImagePath = fileUrl;
        }
        
        return RedirectToAction(nameof(Index));
    }
}
    
    `}
    </Highlight>

    <p>
      در کد فوق، در کنترلری به نام yourController عملیات آپلود عکس در باکت انجام
      می‌شود؛ در نهایت شما می‌توانید لینک دائمی عکس آپلود شده را در متغیری به
      نام fileUrl داشته باشید؛ البته در صورتی که سطح دسترسی باکت خود را بر روی
      عمومی تنظیم کرده باشید؛ البته کد فوق فقط برای آپلود عکس نیست و می‌توانید
      آن را برای هر فایل دلخواه دیگری، تعمیم بدهید.
    </p>

    <br />

    <Link href="/app-deploy/netcore/websocket" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
