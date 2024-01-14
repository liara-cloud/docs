import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های Laravel - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
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
        <a href="#install-s3-driver">نصب Amazon S3 Driver</a>
      </li>
      <li>
        <a href="#set-keys">تنظیم کلیدها</a>
      </li>
      <li>
        <a href="#filesystem-config">پیکربندی FileSystem</a>
      </li>
      <li>
        <a href="#set-env-variable">تنظیم مشخصات ذخیره‌سازی ابری</a>
      </li>
      <li>
        <a href="#how-to-use">نحوه استفاده</a>
      </li>
    </ul>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/laravel/laravel-object-storage.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/laravel-getting-started/tree/object-storage">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <h3 id="install-s3-driver">نصب Amazon S3 Driver</h3>
    <p>
      ذخیره‌سازی ابری لیارا یک Object Storage است که ساختار آن توسط کمپانی
      آمازون طراحی شده و S3 نام دارد بنابراین در برنامه‌ی Laravel خود به یک
      Driver برای ارتباط با ذخیره‌سازی ابری نیاز خواهید داشت که با اجرای دستور
      زیر نصب خواهد شد:
    </p>
    <Highlight className="shell">
      {`composer require league/flysystem-aws-s3-v3 "^3.0"`}
    </Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      اگر باکت شما خصوصی باشد، برای دسترسی به باکت، نیاز به کلید دسترسی دارید.
      برای ساخت کلید، به صفحه ذخیره‌سازی ابری بروید و طبق عکس‌ها کلید خود را
      بسازید.
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

    <h3 id="filesystem-config">پیکربندی FileSystem</h3>
    <p>
      در مرحله‌ی بعد باید یک FileSystem Driver جدید را به فایل پیکربندی مربوطه
      در مسیر <span className="code">config/filesystems.php</span> اضافه کنید:
    </p>
    <Highlight className="php">
      {`'liara' => [
    'driver' => 's3',
    'endpoint' => env('ENDPOINT_URL'),
    'key' => env('ACCESS_KEY'),
    'secret' => env('SECRET_KEY'),
    'region' => env('DEFAULT_REGION'),
    'bucket' => env('BUCKET_NAME'),
],`}
    </Highlight>

    <h3 id="set-env-variable">تنظیم مشخصات ذخیره‌سازی ابری</h3>

    <h4>در لوکال</h4>
    <p>
      درنهایت باید متغیرهای تنظیم شده در فایل{" "}
      <span className="code">config/filesystems.php</span> را به‌منظور امنیت و
      کنترل راحت‌تر مقادیر، در فایل <span className="code">.env</span> مقدار دهی
      کنید:
    </p>
    <Highlight className="env">
      {`ENDPOINT_URL=https://storage.iran.liara.space
ACCESS_KEY=<Access Key>
SECRET_KEY=<Secret Key>
BUCKET_NAME=<Bucket Name>
DEFAULT_REGION=us-east-1`}
    </Highlight>

    <h4>در لیارا</h4>

    <p>
      برای تنظیم مشخصات ذخیره‌سازی ابری در برنامه‌ی Laravel خود باید وارد
      تنظیمات برنامه شده و در بخش{" "}
      <Link href="/app-features/environment-variables">متغیرها</Link> با کلیک
      کردن بر روی دکمه‌ی افزودن متغیر، مشخصات ذخیره‌سازی ابری را وارد کنید.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که فایل <span className="code">.env</span> پروژه‌ی لوکال
      شما بر روی برنامه‌ی تهیه شده مستقر نخواهد شد.
    </Notice>

    <h3 id="how-to-use">نحوه استفاده</h3>

    <p>
      در پروژه خود می‌توانید یک کنترلر به نام{" "}
      <span className="code">S3Controller.php</span> در مسیر
      <span className="code">app/Http/Controllers</span> ایجاد کنید. بعد از
      ایجاد فایل مذکور، کافیست تا محتوای آن را به شکل زیر بنویسید:
    </p>

    <Highlight className="code">
      {`<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class S3Controller extends Controller
{
    public function showUserInterface()
    {
        return view('userinterface');
    }

    public function uploadFile(Request $request)
    {
        $request->validate([
            'upload_file' => 'required|max:2048', // Adjust the file size validation as needed
        ]);

        $file = $request->file('upload_file');
        $fileName = $file->getClientOriginalName();

        Storage::disk('liara')->put($fileName, file_get_contents($file));

        return redirect()->route('user.interface')->with('success', 'File uploaded successfully');
    }

    public function showObjects()
    {
        $objects = Storage::disk('liara')->allFiles('');
    
        $files = [];
        foreach ($objects as $object) {
            $files[] = [
                'name' => $object,
                'download_link' => Storage::disk('liara')->temporaryUrl($object, now()->addMinutes(5)),
            ];
        }
    
        return view('userinterface', ['files' => $files]);
    }
    

    public function downloadFile(Request $request)
    {
        $fileName = $request->input('download_file');
        return Storage::disk('liara')->download($fileName);
    }

    public function deleteFile(Request $request)
    {
        $fileName = $request->input('delete_file');
        Storage::disk('liara')->delete($fileName);
        
        return redirect()->route('user.interface')->with('success', 'File deleted successfully');
    }
}
`}
    </Highlight>

    <p>
      اکنون، می‌بایست یک فایل به نام{" "}
      <span className="code">userinterface.blade.php</span> در مسیر{" "}
      <span className="code">resources/views/</span>
      ایجاد کنید و قطعه کد زیر را درون آن قرار دهید:
    </p>

    <Highlight className="code">
      {`<!-- resources/views/userinterface.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S3 Controller User Interface</title>

    <!-- Add some simple styles for a cleaner look -->
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 20px;
            text-align: center;
        }

        h1 {
            color: #333;
        }

        form {
            margin-top: 20px;
        }

        button {
            padding: 10px;
            margin: 5px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            background-color: #fff;
            border: 1px solid #ddd;
            margin: 5px 0;
            padding: 10px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .error-message {
            color: #f44336;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <h1>S3 Controller User Interface</h1>

    @if(session('success'))
        <div style="color: green">{{ session('success') }}</div>
    @endif

    <form action="{{ route('upload.file') }}" method="post" enctype="multipart/form-data">
        @csrf
        <input type="file" name="upload_file" style="margin-right: 10px;">
        <button type="submit">Upload File</button>
        @error('upload_file')
            <div class="error-message">{{ $message }}</div>
        @enderror
    </form>

    <form action="{{ route('show.objects') }}" method="post" style="margin-top: 20px;">
        @csrf
        <button type="submit">Show Objects</button>
    </form>

    @if(isset($files) && count($files) > 0)
        <ul>
            @foreach($files as $file)
                <li>
                    <span>{{ $file['name'] }}</span>
                    <div>
                        <form action="{{ route('download.file') }}" method="post" style="display: inline-block;">
                            @csrf
                            <input type="hidden" name="download_file" value="{{ $file['name'] }}">
                            <button type="submit">Download</button>
                        </form>
                        <form action="{{ route('delete.file') }}" method="post" style="display: inline-block;">
                            @csrf
                            <input type="hidden" name="delete_file" value="{{ $file['name'] }}">
                            <button type="submit" style="background-color: #f44336;">Delete</button>
                        </form>
                    </div>
                </li>
            @endforeach
        </ul>
    @endif
</body>
</html>
`}
    </Highlight>
    <p>
      پس از این کار، کافیست تا قطعه کد زیر را در فایل{" "}
      <span className="code">web.php</span> در مسیر{" "}
      <span className="code">routes</span> وارد کنید:
    </p>
    <Highlight className="code">
      {`use App\Http\Controllers\S3Controller;

Route::get('/userinterface', function () {
    return view('userinterface');
});

Route::get('/userinterface', [S3Controller::class, 'showUserInterface'])->name('user.interface');
Route::post('/upload-file', [S3Controller::class, 'uploadFile'])->name('upload.file');
Route::post('/show-objects', [S3Controller::class, 'showObjects'])->name('show.objects');
Route::post('/retrieve-file', [S3Controller::class, 'retrieveFile'])->name('retrieve.file');
Route::post('/delete-file', [S3Controller::class, 'deleteFile'])->name('delete.file');
Route::post('/download-file', [S3Controller::class, 'downloadFile'])->name('download.file');
`}
    </Highlight>
    <p>
      تمامی کارها انجام شده است و اگر متغیرهای محیطی را به درستی تنظیم
      کرده‌باشید؛ می‌توانید پس از اجرای برنامه، در مسیر{" "}
      <span className="code">/userinterface</span> از فضای ذخیره‌سازی ابری لیارا
      استفاده کنید؛ با استفاده از قطعه کدهای فوق، شما می‌توانید فایل‌های
      مدنظرتان را در فضای ذخیره‌سازی ابری لیارا آپلود کنید، دانلود کنید، حذف
      کنید و یا یک لیست از آن‌ها داشته باشید. بدیهی است که برای تغییر قابلیت‌ها
      و موارد استفاده، می‌توانید کدهای بالا را شخصی‌سازی کنید.
    </p>

    <br />

    <p>
      شما می‌توانید برای کسب اطلاعات بیشتر،{" "}
      <a
        href="https://laravel.com/docs/10.x/filesystem"
        rel="noopener noreferrer"
        target="_blank"
      >
        مثال‌ها و مستندات این پکیج
      </a>{" "}
      را مطالعه کنید.
    </p>

    <br />

    <Link href="/app-deploy/laravel/soketi" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
