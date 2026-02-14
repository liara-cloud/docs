Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/laravel/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های Laravel

[Video link](https://media.liara.ir/laravel/object-storage.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/laravel-getting-started/tree/object-storage) قابل مشاهده و دسترسی هستند.

برای استفاده از Object Storage در برنامه‌های Laravel، می‌توانید از  
پکیج `league/flysystem-aws-s3-v3` استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
composer require league/flysystem-aws-s3-v3
```

پس از آن، کافیست تا طبق [مستندات ایجاد کلید](https://docs.liara.ir/object-storage/how-tos/create-key)، یک کلید جدید برای باکت خود بسازید.  
اطلاعات مربوط به ENDPOINT و نام باکت نیز در صفحه **تنظیمات**، در بخش **دسترسی با SDK**،  
برای شما قرار گرفته است.  
در نهایت نیز، بایستی  
اطلاعات مربوط به Object Storage خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال (در صورتی که متغیرهای زیر از قبل تعریف شده بودند، فقط آن‌ها را مقداردهی کنید):

```bash
AWS_ACCESS_KEY_ID=nieiou08cnbod58p
AWS_SECRET_ACCESS_KEY=c2a8704a-c200-4848-82ca-2ddad28c12f1
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=bucket-name
AWS_USE_PATH_STYLE_ENDPOINT=true
AWS_ENDPOINT=https://storage.iran.liara.space
```

در ادامه، قطعه کد زیر را در `config/filesystems.php` بررسی کنید و در صورت عدم وجود، آن را اضافه کنید:

```php
's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
            'endpoint' => env('AWS_ENDPOINT'),
            'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
            'throw' => false,
            'report' => false,
        ],
```

تمامی کارها انجام شده است و می‌توانید از Object Storage در برنامه خود، استفاده کنید؛  
به عنوان مثال،  
می‌توانید با اجرای دستورات زیر، در پروژه خود،  
برای هر عملیات در فضای ذخیره‌سازی ابری، یک کنترلر ایجاد کنید:

- php artisan make:controller S3/StorageController  
- php artisan make:controller S3/UploadController  
- php artisan make:controller S3/DownloadController  
- php artisan make:controller S3/DeleteController  
- php artisan make:controller S3/PresignedController  

## نمونه کد برای نمایش فایل‌های یک باکت و اسامی باکت‌ها

```laravel
 // app/Http/Controllers/S3/StorageController.php
<?php

namespace App\Http\Controllers\S3;

use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class StorageController extends Controller
{
    public function index()
    {
        $files = Storage::disk('s3')->allFiles();
        $buckets = ['default' => config('filesystems.disks.s3.bucket')]; 

        return view('s3-storage', compact('files', 'buckets'));
    }
}
```

## نمونه کد برای آپلود فایل در باکت و مشاهده لینک دائمی آن

```laravel
// app/Http/Controllers/S3/UploadController.php
<?php

namespace App\Http\Controllers\S3;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|file',
        ]);

        $file = $request->file('file');
        $path = $file->store('', 's3'); 

        
        $permanentLink = Storage::disk('s3')->url($path);

        return redirect()->route('s3.index')->with('success', 'File uploaded successfully.')
                         ->with('permanentLink', $permanentLink);
    }
}
```

## نمونه کد برای دانلود فایل از باکت

```laravel
// app/Http/Controllers/S3/DownloadController.php
<?php

namespace App\Http\Controllers\S3;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 

class DownloadController extends Controller
{
    public function download($file)
    {
        if (!Storage::disk('s3')->exists($file)) {
            return back()->withErrors(['error' => 'File not found.']);
        }

        return Storage::disk('s3')->download($file);
    }
}
```

## نمونه کد برای حذف فایل از باکت

```laravel
// app/Http/Controllers/S3/DeleteController.php
<?php

namespace App\Http\Controllers\S3;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 

class DeleteController extends Controller
{
    public function delete($file)
    {
        if (!Storage::disk('s3')->exists($file)) {
            return back()->withErrors(['error' => 'File not found.']);
        }

        Storage::disk('s3')->delete($file);

        return redirect()->route('s3.index')->with('success', 'File deleted successfully.');
    }
}
```

## نمونه کد برای ایجاد لینک موقت برای فایل‌ها

```laravel
// app/Http/Controllers/S3/PresignedController.php
<?php

namespace App\Http\Controllers\S3;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 

class PresignedController extends Controller
{
    public function generatePresignedUrl($file)
    {
        if (!Storage::disk('s3')->exists($file)) {
            return back()->withErrors(['error' => 'File not found.']);
        }

        $url = Storage::disk('s3')->temporaryUrl($file, now()->addHours(1));

        return response()->json(['url' => $url]);
    }
}
```

برای استفاده از کنترلرها، بایستی قطعه کد زیر را، به فایل `web.php` در مسیر `routes` اضافه کنید:

```laravel
use App\Http\Controllers\S3\StorageController;
use App\Http\Controllers\S3\UploadController;
use App\Http\Controllers\S3\DownloadController;
use App\Http\Controllers\S3\DeleteController;
use App\Http\Controllers\S3\PresignedController;

Route::prefix('s3-storage')->group(function () {
    Route::get('/', [StorageController::class, 'index'])->name('s3.index');
    Route::post('/upload', [UploadController::class, 'upload'])->name('s3.upload');
    Route::get('/download/{file}', [DownloadController::class, 'download'])->name('s3.download');
    Route::delete('/delete/{file}', [DeleteController::class, 'delete'])->name('s3.delete');
    Route::get('/presigned/{file}', [PresignedController::class, 'generatePresignedUrl'])->name('s3.presigned');
});
```

در نهایت، کافیست تا یک فایل Blade به نام `s3-storage.blade.php` در پوشه `resources/views`، ایجاد کنید و قطعه کد زیر را درون آن قرار دهید:

```blade
<!DOCTYPE html>
<html lang="en">

<body>
<div class="container mt-5">
    <h1>S3 Storage Management</h1>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    @if(session('permanentLink'))
        <div class="alert alert-info">
            Permanent Link: [{{ session('permanentLink') }}]({{ session('permanentLink') }})
        </div>
    @endif

    @if(session('error'))
        <div class="alert alert-danger">{{ session('error') }}</div>
    @endif

    ### Buckets
    - {{ $name }}: {{ $bucket }}

    ### Files
    <form action="{{ route('s3.upload') }}" method="POST" enctype="multipart/form-data" class="mb-3">
        @csrf
        <input type="file" name="file" class="form-control">
        <button type="submit" class="btn btn-primary mt-2">Upload</button>
    </form>

    <table class="table">
        <thead>
            <tr>
                <th>File</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($files as $file)
                <tr>
                    <td>{{ $file }}</td>
                    <td>
                        [Download]({{ route('s3.download', $file) }})
                        [Get Pre-Signed URL](#)
                        [Get Permanent Link]({{ Storage::disk('s3')->url($file) }})
                        <form action="{{ route('s3.delete', $file) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>

<script>
    function getPresignedUrl(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                alert('Pre-Signed URL: ' + data.url);
            })
            .catch(error => console.error('Error:', error));
    }
</script>
</body>
</html>
```

می‌توانید پس از اجرای برنامه، در مسیر `s3-storage/` از فضای ذخیره‌سازی ابری لیارا استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
