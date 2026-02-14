Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/php/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های PHP

[Video link](https://media.liara.ir/php/php-object-storage.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/php-getting-started/tree/object-storage) قابل مشاهده و دسترسی هستند.

برای استفاده از Object Storage در برنامه‌های PHP، می‌توانید از  
پکیج `aws/aws-sdk-php` استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
composer require aws/aws-sdk-php
```

پس از آن، کافیست تا طبق [مستندات ایجاد کلید](https://docs.liara.ir/object-storage/how-tos/create-key)، یک کلید جدید برای باکت خود بسازید.  
اطلاعات مربوط به ENDPOINT و نام باکت نیز در صفحه **تنظیمات**، در بخش **دسترسی با SDK**،  
برای شما قرار گرفته است.  
در نهایت نیز، بایستی  
اطلاعات مربوط به Object Storage خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
LIARA_ENDPOINT=https://<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>
```

تمامی کارها انجام شده است و می‌توانید از Object Storage در برنامه خود، استفاده کنید؛  
در ادامه، مثال‌هایی از این مورد برای‌تان آورده شده است:  

## نمونه کد آپلود فایل

```php
<?php

namespace AppController;

class DotEnvEnvironment
{
   public function load($path): void
   {
       $lines = file($path . '/.env');
       foreach ($lines as $line) {
           [$key, $value] = explode('=', $line, 2);
           $key = trim($key);
           $value = trim($value);

           putenv(sprintf('%s=%s', $key, $value));
           $_ENV[$key] = $value;
           $_SERVER[$key] = $value;
       }
   }
}

require 'vendor/autoload.php';
use AwsS3S3Client;
use AwsExceptionAwsException;

(new DotEnvEnvironment)->load(__DIR__);

// Setting Env Variables 
$accessKey  = getenv("LIARA_ACCESS_KEY");
$secretKey  = getenv("LIARA_SECRET_KEY");
$endpoint   = getenv("LIARA_ENDPOINT");
$bucketName = getenv("LIARA_BUCKET_NAME");

// making connection using s3
$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-east-1',
    'endpoint' => $endpoint,
    'credentials' => [
        'key'    => $accessKey,
        'secret' => $secretKey,
    ],
]);

try {
    // name of the file:
    $fileName = 'liara-poster.png';

    // uploading file to the bucket:
    $result = $s3->putObject([
        'Bucket' => $bucketName,
        'Key'    => $fileName,
        'Body'   => file_get_contents($fileName),
        'ACL'    => 'public-read',
    ]);

    echo "File uploaded successfully.
";
} catch (AwsException $e) {
    echo $e->getMessage() . "
";
}
```

## نمونه کد دانلود فایل

```php
<?php

namespace AppController;

class DotEnvEnvironment
{
   public function load($path): void
   {
       $lines = file($path . '/.env');
       foreach ($lines as $line) {
           [$key, $value] = explode('=', $line, 2);
           $key = trim($key);
           $value = trim($value);

           putenv(sprintf('%s=%s', $key, $value));
           $_ENV[$key] = $value;
           $_SERVER[$key] = $value;
       }
   }
}

require 'vendor/autoload.php';
use AwsS3S3Client;
use AwsExceptionAwsException;

(new DotEnvEnvironment)->load(__DIR__);

// Setting Env Variables 
$accessKey  = getenv("LIARA_ACCESS_KEY");
$secretKey  = getenv("LIARA_SECRET_KEY");
$endpoint   = getenv("LIARA_ENDPOINT");
$bucketName = getenv("LIARA_BUCKET_NAME");

// making connection using s3
$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-east-1',
    'endpoint' => $endpoint,
    'credentials' => [
        'key'    => $accessKey,
        'secret' => $secretKey,
    ],
]);

try {
    // نام فایل مورد نظر برای دانلود
    $fileName = 'example.txt';

    // مسیر برای ذخیره فایل در دایرکتوری downloads
    $downloadPath = __DIR__ . '/downloads/' . $fileName;

    // دانلود فایل از سبد
    $result = $s3->getObject([
        'Bucket' => $bucketName,
        'Key'    => $fileName,
        'SaveAs' => $downloadPath,
    ]);

    echo "File '$fileName' downloaded successfully.
";
} catch (AwsException $e) {
    echo $e->getMessage() . "
";
}
```

## نمونه کد دریافت لینک موقت دانلود فایل

```php
<?php

namespace AppController;

class DotEnvEnvironment
{
   public function load($path): void
   {
       $lines = file($path . '/.env');
       foreach ($lines as $line) {
           [$key, $value] = explode('=', $line, 2);
           $key = trim($key);
           $value = trim($value);

           putenv(sprintf('%s=%s', $key, $value));
           $_ENV[$key] = $value;
           $_SERVER[$key] = $value;
       }
   }
}

require 'vendor/autoload.php';
use AwsS3S3Client;
use AwsExceptionAwsException;

(new DotEnvEnvironment)->load(__DIR__);

// Setting Env Variables 
$accessKey  = getenv("LIARA_ACCESS_KEY");
$secretKey  = getenv("LIARA_SECRET_KEY");
$endpoint   = getenv("LIARA_ENDPOINT");
$bucketName = getenv("LIARA_BUCKET_NAME");

// making connection using s3
$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-east-1',
    'endpoint' => $endpoint,
    'credentials' => [
        'key'    => $accessKey,
        'secret' => $secretKey,
    ],
]);

try {
    // لیست کردن فایل‌های درون سبد
    $result = $s3->listObjectsV2([
        'Bucket' => $bucketName
    ]);

    // چک کردن آیا فایلی وجود دارد یا خیر
    if (!empty($result['Contents'])) {
        foreach ($result['Contents'] as $object) {
            $objectKey = $object['Key'];
            $command = $s3->getCommand('GetObject', [
                'Bucket' => $bucketName,
                'Key' => $objectKey
            ]);

            $request = $s3->createPresignedRequest($command, '+1 hour');

            // دریافت لینک موقت
            $presignedUrl = (string)$request->getUri();
            echo "Presigned URL for '$objectKey':
$presignedUrl

";
        }
    } else {
        echo "The bucket is empty.
";
    }
} catch (AwsException $e) {
    echo $e->getMessage() . "
";
}
```

## نمونه کد حذف فایل

```php
<?php

namespace AppController;

class DotEnvEnvironment
{
   public function load($path): void
   {
       $lines = file($path . '/.env');
       foreach ($lines as $line) {
           [$key, $value] = explode('=', $line, 2);
           $key = trim($key);
           $value = trim($value);

           putenv(sprintf('%s=%s', $key, $value));
           $_ENV[$key] = $value;
           $_SERVER[$key] = $value;
       }
   }
}

require 'vendor/autoload.php';
use AwsS3S3Client;
use AwsExceptionAwsException;

(new DotEnvEnvironment)->load(__DIR__);

// Setting Env Variables 
$accessKey  = getenv("LIARA_ACCESS_KEY");
$secretKey  = getenv("LIARA_SECRET_KEY");
$endpoint   = getenv("LIARA_ENDPOINT");
$bucketName = getenv("LIARA_BUCKET_NAME");

// making connection using s3
$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-east-1',
    'endpoint' => $endpoint,
    'credentials' => [
        'key'    => $accessKey,
        'secret' => $secretKey,
    ],
]);

try {
    // name of the file:
    $fileNameToDelete = 'example.txt';

    // deleting the file:
    $result = $s3->deleteObject([
        'Bucket' => $bucketName,
        'Key'    => $fileNameToDelete,
    ]);

    echo "File '$fileNameToDelete' deleted successfully.
";
} catch (AwsException $e) {
    echo $e->getMessage() . "
";
}
```

## نمونه کد نمایش لیست باکت‌ها

```php
<?php
// Require the Composer autoloader.
require 'vendor/autoload.php';

use Aws\S3\S3Client;

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
print_r($promise);
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
