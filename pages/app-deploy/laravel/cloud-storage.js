import Layout from "../../../components/Layout";
import Highlight from "react-highlight";
import Head from "next/head";
import Link from "next/link";

export default () => (
    <Layout>
        <Head>
            <title>مستندات اتصال به سرویس فایل در برنامه‌های Laravel - سرویس ابری لیارا</title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/laravel.svg"
                alt="laravel"
            />
            <div className="page-title">
                <h1>اتصال به سرویس فایل در برنامه‌های Laravel</h1>
                <span className="page-description">(Laravel Apps)</span>
            </div>
        </div>
        <p>
            بدون شک اتصال برنامه به یک <Link href="/storage/object-storage/about">سرویس فایل</Link> مطمئن برای نگهداری داده‌های آپلود شده توسط کاربران که درنهایت باعث اطمینان خاطر صاحبان کسب و کار و بهبود عملکرد برنامه‌ می‌شود را باید یکی از اولویت‌های مهم دانست.
        </p>

        <h3>نصب Amazon S3 Driver</h3>
        <p>
            سرویس فایل لیارا یک Object Storage است که ساختار آن توسط کمپانی آمازون طراحی شده و S3 نام دارد بنابراین در برنامه‌ی Laravel خود به یک Driver برای ارتباط با سرویس فایل نیاز خواهید داشت که با اجرای دستور زیر نصب خواهد شد:
        </p>
        <Highlight className="shell">
            {`composer require --with-all-dependencies league/flysystem-aws-s3-v3 "^1.0"`}
        </Highlight>

        <h3>پیکربندی FileSystem</h3>
        <p>
            در مرحله‌ی بعد باید یک FileSystem Driver جدید را به فایل پیکربندی مربوطه در مسیر <span className="code">config/filesystems.php</span> اضافه کنید:
        </p>
        <Highlight className="php">
            {`'cloud' => env('FILESYSTEM_CLOUD'),
'minio' => [
    'driver' => 's3',
    'endpoint' => env('ENDPOINT_URL'),
    'use_path_style_endpoint' => true,
    'key' => env('ACCESS_KEY'),
    'secret' => env('SECRET_KEY'),
    'region' => env('DEFAULT_REGION'),
    'bucket' => env('BUCKET_NAME'),
],`}
        </Highlight>

        <h3>تنظیم مشخصات سرویس فایل در فایل <span className="code">.env</span></h3>
        <p>
            درنهایت باید متغیرهای تنظیم شده در فایل <span className="code">config/filesystems.php</span> را به‌منظور امنیت و کنترل راحت‌تر مقادیر، در فایل <span className="code">.env</span> مقدار دهی کنید:
        </p>
        <Highlight className="env">
            {`FILESYSTEM_CLOUD=minio
ENDPOINT_URL=<Liara API Endpoint>
ACCESS_KEY=<Access Key>
SECRET_KEY=<Secret Key>
DEFAULT_REGION=us-east-1
BUCKET_NAME=<Name of you're bucket>`}
        </Highlight>

        <h3>نحوه‌ی استفاده</h3>
        <p>
            می‌توان گفت که تغییر خاصی در نحوه‌ی استفاده‌ی شما به‌وجود نخواهد آمد. برای مثال شما می‌توانید با استفاده از قطعه کد زیر، محتوای <span className="code">Contents</span> را در فایلی با نام <span className="code">example.txt</span> قرار داده و آن را در سرویس فایل خود ذخیره کنید:
        </p>
        <Highlight className="php">
            {`use Illuminate\\Support\\Facades\\Storage;

Storage::disk('minio')->put('example.txt', 'Contents');`}
        </Highlight>
    </Layout>
);
