Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/dotnet/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های NET.

[Video link](https://media.liara.ir/dotnet/dotnet-object-storage.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/dotnet-getting-started/tree/object-storage) قابل مشاهده و دسترسی هستند.

برای استفاده از Object Storage در برنامه‌های NET. می‌توانید از  
پکیج `AWSSDK.S3` استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
dotnet add package AWSSDK.S3
```

پس از آن، کافیست تا طبق [مستندات ایجاد کلید](https://docs.liara.ir/object-storage/how-tos/create-key)، یک کلید جدید برای باکت خود بسازید.  
اطلاعات مربوط به ENDPOINT و نام باکت نیز در صفحه **تنظیمات**، در بخش **دسترسی با SDK**،  
برای شما قرار گرفته است.  
در نهایت نیز، بایستی  
اطلاعات مربوط به Object Storage خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
LIARA_ENDPOINT_URL: https://storage.iran.liara.space
LIARA_ACCESS_KEY: nieiou08cnbod58p
LIARA_SECRET_KEY: 20b71a4c-1168-4945-8ed3-4724dbf9e997
BUCKET_NAME: my-bucket-name
```

تمامی کارها انجام شده است و می‌توانید از Object Storage در برنامه خود، استفاده کنید؛  
در ادامه، مثال‌هایی از نحوه مدیریت فایل‌ها در باکت قرار گرفته است که می‌توانید از آن‌ها استفاده کنید.

## نمونه کد آپلود فایل

```dotnet
[HttpPost]
public async Task<IActionResult> UploadFile(IFormFile file)
{
    if (file != null && file.Length > 0)
    {
        using var stream = file.OpenReadStream();
        await UploadFileAsync(file.FileName, stream);
    }
    return RedirectToAction("Index");
}

private async Task UploadFileAsync(string fileName, Stream fileStream)
{
    var putRequest = new PutObjectRequest
    {
        BucketName = _bucketName,
        Key = fileName,
        InputStream = fileStream
    };

    await _s3Client.PutObjectAsync(putRequest);
}
```

## نمونه کد حذف فایل

```dotnet
[HttpPost]
public async Task<IActionResult> DeleteFile(string fileName)
{
    await DeleteFileAsync(fileName);
    return RedirectToAction("Index");
}
private async Task DeleteFileAsync(string fileName)
{
    var deleteRequest = new DeleteObjectRequest
    {
        BucketName = _bucketName,
        Key = fileName
    };

    await _s3Client.DeleteObjectAsync(deleteRequest);
}
```

## نمونه کد ساخت لینک موقت دانلود فایل

```dotnet
public async Task<IActionResult> GeneratePresignedUrl(string fileName)
{
    var url = await GeneratePresignedUrlAsync(fileName);
    ViewBag.PresignedUrl = url;
    return View("Index", await ListFilesAsync());
}
private async Task<string> GeneratePresignedUrlAsync(string fileName)
{
    var request = new GetPreSignedUrlRequest
    {
        BucketName = _bucketName,
        Key = fileName,
        Expires = System.DateTime.UtcNow.AddHours(1) // URL valid for 1 hour
    };

    return _s3Client.GetPreSignedURL(request);
}
```

## نمونه کد دریافت لینک دائم فایل

```dotnet
public async Task<IActionResult> GetPermanentUrl(string fileName)
{
    var url = await GetPermanentUrlAsync(fileName);
    ViewBag.PermanentUrl = url;
    return View("Index", await ListFilesAsync());
}
private async Task<string> GetPermanentUrlAsync(string fileName)
{
    return $"https://{_bucketName}.{new Uri(_s3Client.Config.ServiceURL).Host}/{fileName}";
}
```

## نمونه کد برای لیست کردن فایل‌ها

```dotnet
public async Task<IActionResult> Index()
{
    var files = await ListFilesAsync();
    return View(files); // Pass the list of files as the Model
}
private async Task<List<string>> ListFilesAsync()
{
    var listRequest = new ListObjectsV2Request
    {
        BucketName = _bucketName
    };

    var response = await _s3Client.ListObjectsV2Async(listRequest);
    var files = new List<string>();

    foreach (var entry in response.S3Objects)
    {
        files.Add(entry.Key);
    }

    return files;
}
```

## نمونه کد کامل شامل تمامی قابلیت‌ها

در ابتدا، متغیرهای خود را در `appsettings.json` قرار دهید:

```dotnet
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "LIARA_ENDPOINT_URL": "https://storage.iran.liara.space",
  "LIARA_ACCESS_KEY": "nieiou08cnbod58p",
  "LIARA_SECRET_KEY": "20b71a4c-1168-4945-8ed3-4724dbf9e997",
  "BUCKET_NAME": "my-bucket-name"
}
```

در ادامه، در فایل `Program.cs`، کد زیر را قرار دهید:

```dotnet
using Amazon.Runtime;
using Amazon.S3;

var builder = WebApplication.CreateBuilder(args);

// Load environment variables from appsettings.json or .env
builder.Configuration.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
builder.Configuration.AddEnvironmentVariables();

// Add services to the container.
builder.Services.AddControllersWithViews();

// Configure AWS S3 client
builder.Services.AddSingleton<IAmazonS3>(sp =>
{
    var config = new AmazonS3Config
    {
        ServiceURL = builder.Configuration["LIARA_ENDPOINT_URL"],
        ForcePathStyle = true // Required for some S3-compatible services
    };

    var credentials = new BasicAWSCredentials(
        builder.Configuration["LIARA_ACCESS_KEY"],
        builder.Configuration["LIARA_SECRET_KEY"]
    );

    return new AmazonS3Client(credentials, config);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
```

در ادامه، در مسیر `Controllers/HomeController.cs` قطعه کد زیر را قرار دهید:

```dotnet
using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    private readonly IAmazonS3 _s3Client;
    private readonly string _bucketName;

    public HomeController(IAmazonS3 s3Client)
    {
        _s3Client = s3Client;
        _bucketName = "bucketoo"; // Replace with your bucket name
    }

    public async Task<IActionResult> Index()
    {
        var files = await ListFilesAsync();
        return View(files); // Pass the list of files as the Model
    }

    [HttpPost]
    public async Task<IActionResult> UploadFile(IFormFile file)
    {
        if (file != null && file.Length > 0)
        {
            using var stream = file.OpenReadStream();
            await UploadFileAsync(file.FileName, stream);
        }
        return RedirectToAction("Index");
    }

    [HttpPost]
    public async Task<IActionResult> DeleteFile(string fileName)
    {
        await DeleteFileAsync(fileName);
        return RedirectToAction("Index");
    }

    public async Task<IActionResult> GeneratePresignedUrl(string fileName)
    {
        var url = await GeneratePresignedUrlAsync(fileName);
        ViewBag.PresignedUrl = url;
        return View("Index", await ListFilesAsync());
    }

    public async Task<IActionResult> GetPermanentUrl(string fileName)
    {
        var url = $"https://{_bucketName}.{new Uri(_s3Client.Config.ServiceURL).Host}/{fileName}";
        ViewBag.PermanentUrl = url;
        return View("Index", await ListFilesAsync());
    }

    private async Task<List<string>> ListFilesAsync()
    {
        var listRequest = new ListObjectsV2Request
        {
            BucketName = _bucketName
        };

        var response = await _s3Client.ListObjectsV2Async(listRequest);
        var files = new List<string>();

        foreach (var entry in response.S3Objects)
        {
            files.Add(entry.Key);
        }

        return files;
    }

    private async Task UploadFileAsync(string fileName, Stream fileStream)
    {
        var putRequest = new PutObjectRequest
        {
            BucketName = _bucketName,
            Key = fileName,
            InputStream = fileStream
        };

        await _s3Client.PutObjectAsync(putRequest);
    }

    private async Task DeleteFileAsync(string fileName)
    {
        var deleteRequest = new DeleteObjectRequest
        {
            BucketName = _bucketName,
            Key = fileName
        };

        await _s3Client.DeleteObjectAsync(deleteRequest);
    }

    private Task<string> GeneratePresignedUrlAsync(string fileName)
    {
        var request = new GetPreSignedUrlRequest
        {
            BucketName = _bucketName,
            Key = fileName,
            Expires = System.DateTime.UtcNow.AddHours(1) // URL valid for 1 hour
        };

        return Task.FromResult(_s3Client.GetPreSignedURL(request));
    }
}
```

سپس در مسیر `Views/Home/Index.cshtml` کد زیر را قرار دهید:

```dotnet
public class HomeController : Controller
{
    private readonly IAmazonS3 _s3Client;
    private readonly string _bucketName;

    public HomeController(IAmazonS3 s3Client)
    {
        _s3Client = s3Client;
        _bucketName = "bucketoo"; // Replace with your bucket name
    }

    public async Task<IActionResult> Index()
    {
        var files = await ListFilesAsync();
        return View(files); // Pass the list of files as the Model
    }

    [HttpPost]
    public async Task<IActionResult> UploadFile(IFormFile file)
    {
        if (file != null && file.Length > 0)
        {
            using var stream = file.OpenReadStream();
            await UploadFileAsync(file.FileName, stream);
        }
        return RedirectToAction("Index");
    }

    [HttpPost]
    public async Task<IActionResult> DeleteFile(string fileName)
    {
        await DeleteFileAsync(fileName);
        return RedirectToAction("Index");
    }

    public async Task<IActionResult> GeneratePresignedUrl(string fileName)
    {
        var url = await GeneratePresignedUrlAsync(fileName);
        ViewBag.PresignedUrl = url;
        return View("Index", await ListFilesAsync());
    }

    public async Task<IActionResult> GetPermanentUrl(string fileName)
    {
        var url = $"https://{_bucketName}.{new Uri(_s3Client.Config.ServiceURL).Host}/{fileName}";
        ViewBag.PermanentUrl = url;
        return View("Index", await ListFilesAsync());
    }

    private async Task<List<string>> ListFilesAsync()
    {
        var listRequest = new ListObjectsV2Request
        {
            BucketName = _bucketName
        };

        var response = await _s3Client.ListObjectsV2Async(listRequest);
        var files = new List<string>();

        foreach (var entry in response.S3Objects)
        {
            files.Add(entry.Key);
        }

        return files;
    }

    private async Task UploadFileAsync(string fileName, Stream fileStream)
    {
        var putRequest = new PutObjectRequest
        {
            BucketName = _bucketName,
            Key = fileName,
            InputStream = fileStream
        };

        await _s3Client.PutObjectAsync(putRequest);
    }

    private async Task DeleteFileAsync(string fileName)
    {
        var deleteRequest = new DeleteObjectRequest
        {
            BucketName = _bucketName,
            Key = fileName
        };

        await _s3Client.DeleteObjectAsync(deleteRequest);
    }

    private async Task<string> GeneratePresignedUrlAsync(string fileName)
    {
        var request = new GetPreSignedUrlRequest
        {
            BucketName = _bucketName,
            Key = fileName,
            Expires = System.DateTime.UtcNow.AddHours(1) // URL valid for 1 hour
        };

        return _s3Client.GetPreSignedURL(request);
    }
}
```

تمامی کارها انجام شده است و می‌توانید Object Storage خود را، مدیریت کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
