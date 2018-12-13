import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>Liara | Laravel SDK - Object Storage</title>
    </Head>

    <h1>Liara Laravel SDK</h1>
    <p>
      لاراول مفهومی با عنوان دیسک دارد که به شما این اجازه را می‌دهد که بدون اعمال تغییرات خاصی
      در پروژه‌یتان، فایل‌هایتان را در جاهای مختلف ذخیره کنید. شما تا به حال از دیسک
      <span className="code">local</span>
      استفاده کرده‌اید. این دیسک فایل‌های شما را در پوشه‌ی
      <span className="code">storage</span>
      ذخیره می‌کند. اما احتمالا به این هم فکر کرده‌اید که اگر تعداد و حجم فایل‌هایتان زیاد شد، باید چه کنید؟
      چگونه از فایل‌هایتان فایل پشتیبان تهیه کنید؟ فایل‌های پشتیبان را کجا نگهداری کنید؟
    </p>
    <p>
      برای حل مشکلاتی که به آن اشاره کردیم، می‌توانید از دیسک
      <span className="code">liara</span>
      استفاده کنید. لیارا یک
      <span className="code">API</span>
      مشابه نمونه‌های خارجی مانند
      <span className="code">Amazon S3</span>
      و
      <span className="code">Rackspace Cloud Storage</span>
      دارد که تمام دغدغه‌های شما برای ذخیره‌ی فایل‌هایتان را حل می‌کند.
    </p>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای نصب
      <span className="code">Liara SDK</span>
      دستور زیر را داخل پروژه‌یتان وارد کنید:
    </p>
    <pre>
      <code>
        composer require liara/sdk
      </code>
    </pre>
    <p>
      برای راه‌اندازی، باید لیارا را کانفیگ کنید.
      فایل کانفیگ
      <span className="code">config/filesystems.php</span>
      را در ویرایشگر متنی خود باز کنید.
    </p>
    <ZoomableImage src="/static/laravel-filesystems.png" alt="laravel filesystems"/>
    <p>
      همان‌طور که مشاهده می‌کنید، این فایل شامل تنظیمات دیسک‌های شماست.
      در بخش
      <span className="code">disks</span>
      تنظیمات مرتبط با دیسک لیارا را اضافه کنید:
      (<a href="https://laravel.com/docs/filesystem#configuration">
        مستندات لاراول
      </a>)
    </p>
    <pre>
      <code>
{`'liara' => [
  'driver' => 'liara',
  'namespace' => env('LIARA_NAMESPACE'),
  'secret' => env('LIARA_SECRET_KEY'),
],`}
      </code>
    </pre>
    <ZoomableImage src="/static/laravel-liara-disk.png" alt="تنظیمات دیسک لیارا" />
    <p>
      در نهایت، فایل
      <span className="code">.env</span>
      پروژه‌یتان را باز کرده و دو متغیر زیر را به انتهای این فایل اضافه کنید:
    </p>
    <pre>
      <code>
{`LIARA_NAMESPACE=
LIARA_SECRET_KEY=`}
      </code>
    </pre>
    <p>
      مقابل متغیر
      <span className="code">LIARA_NAMESPACE</span>
      شناسه‌ی یکتای سرویس فایل‌تان را وارد کنید.
      این شناسه را هنگام فعال‌کردن سرویس فایل‌تان تعیین کردید.
      متغیر
      <span className="code">LIARA_SECRET_KEY</span>
      را هم با کلید وب‌سرویس لیارا پر کنید. این کلید را از
      {' '}
      <a href="https://console.liara.ir/API" target="_blank">داشبورد</a>
      {' '}
      می‌توانید کپی کنید.
    </p>
    <ZoomableImage src="/static/api-key.png" alt="Liara API key" />

    <h3>آپلود فایل</h3>
    <p>
      برای ذخیره‌ی یک فایل متنی، می‌توانید از متد
      <span className="code">put</span>
      استفاده کنید:
    </p>
    <pre>
      <code>
        Storage::disk('liara')->put('hello.txt', 'Hello World!');
      </code>
    </pre>
    <p>
      یکی از کارهای رایجی که در وب‌اپلیکیشن‌ها انجام می‌شود، ذخیره‌ی فایل‌هایی است که کاربران
      {' '}
      آپلود کرده‌اند. لاراول با استفاده از متد
      <span className="code">store</span>
      این کار را بسیار آسان می‌کند.
    </p>
    <pre>
      <code>
{`<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use App\\Http\\Controllers\\Controller;

class UserAvatarController extends Controller
{
    /**
     * Update the avatar for the user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function update(Request $request)
    {
        $path = $request->file('avatar')->store('avatars', 'liara');

        return $path;
    }
}`}
      </code>
    </pre>
    <p>
      ورودی اول متد
      <span className="code">store</span>
      نام پوشه‌ای است که قصد دارید فایل را در آن ذخیره کنید. ورودی دوم هم نام دیسک است
      که برای ذخیره‌سازی در لیارا باید برابر
      <span className="code">liara</span>
      قرار دهید. این متد یک نام تصادفی و یکتا برای فایل شما ایجاد می‌کند.
    </p>
    <p>
      برای اطلاعات بیشتر به
      {' '}
      <a href="https://laravel.com/docs/filesystem">مستندات لاراول</a>
      {' '}
      مراجعه کنید.
    </p>
  </Layout>
)