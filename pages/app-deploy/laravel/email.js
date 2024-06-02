import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های Laravel - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل در لاراول</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/laravel/laravel-email-server.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/laravel-getting-started/tree/email-server">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های Laravel باید پس از{" "}
      <Link href="/app-features/email#create-email">ایجاد سرویس ایمیل</Link>،
      اطلاعات <Link href="/app-features/email#settings">دسترسی SMTP</Link> را
      طبق مستندات <Link href="/app-deploy/laravel/envs">تنظیم متغیرها</Link> در
      تنظیمات برنامه اضافه کنید.
    </p>

    <Highlight className="plaintext">
      {`MAIL_DRIVER=smtp
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_ENCRYPTION=tls
MAIL_USERNAME=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">MAIL_USERNAME</span> و{" "}
      <span className="code">MAIL_PASSWORD</span> در هر سرویس ایمیل ایجاد شده
      متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <p>
      حال با تنظیم <span className="code">MAIL_ENCRYPTION=tls</span>
      می‌توانید بدون نگرانی در پروژه‌ی خود با استفاده از دسترسی SMTP سرویس ایمیل
      لیارا به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی کنید.
    </p>

    <Notice variant="warning">
      قابل ذکر است که فیلد <span className="code">from</span> باید یکی از
      نشانی‌های اضافه شده در سرویس ایمیل باشد.
    </Notice>

    <h3>ایجاد پروژه‌ی لاراولی</h3>
    <p>
      ترمینال را باز کرده و با استفاده از دستور زیر یک پروژه لاراولی ایجاد کنید.
    </p>
    <Highlight className="php">
      {`composer create-project --prefer-dist laravel/laravel blog`}
    </Highlight>

    <h3>ایجاد کلاس Mailable</h3>
    <p>ترمینال را باز کرده و با استفاده از دستور زیر این کلاس را ایجاد کنید.</p>
    <Highlight className="php">{`php artisan make:mail NotifyMail`}</Highlight>
    <p>
      هنگامی که کلاس <span className="code">notifyMail</span> را ایجاد کردید،
      سپس به دایرکتوری
      <span className="code">app/mail</span> بروید و فایل
      <span className="code">notifyMail.php</span> را باز کنید و کد زیر را به آن
      اضافه کنید:
    </p>
    <Highlight className="php">
      {`<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NotifyMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Notify Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'view.name',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
`}
    </Highlight>
    <p>
      با هر نامی که می خواهید، یک الگوی ایمیل ایجاد کنید؛ که می خواهید بفرستید.
      برای مثال:
    </p>

    <Highlight className="php">{`return new Content(
            view: 'view.name',
        );`}</Highlight>

    <p>به:</p>

    <Highlight className="php">
      {`return new Content(
            view: 'emails.demoMail',
        );`}
    </Highlight>

    <p>
      در مرحله بعد، باید یک قالب ایمیل با نام
      <span className="code">demoMail.blade.php</span>
      در دایرکتوری <span className="code">resources/views/emails</span>
      ایجاد کنید.
    </p>

    <h3>اضافه کردن Route</h3>
    <p>
      در این مرحله، <span className="code">/web.php</span> را باز کنید، بنابراین
      به دایرکتوری
      <span className="code">routes</span>
      بروید. و سپس مسیرهای زیر را برای ارسال ایمیل اضافه کنید:
    </p>
    <Highlight className="php">
      {`use App\\Http\\Controllers\\SendEmailController;

Route::post('send-email', [SendEmailController::class, 'index']);`}
    </Highlight>

    <h3>ایجاد یک دایرکتوری و blade view</h3>
    <p>
      در این مرحله، دایرکتوری به‌نام <span className="code">email</span> داخل
      دایرکتوری
      <span className="code">resources/views</span> ایجاد کنید. سپس یک فایل
      به‌نام
      <span className="code">demoMail.blade.php</span> در داخل
      <span className="code">resources/views/emails</span> ایجاد کنید. و کد زیر
      را داخل آن وارد کنید.
    </p>
    <Highlight className="php">
      {`<!DOCTYPE html>
<html>
<head>
  <title>Laravel email example with Liara</title>
</head>
<body>

  <h1>This is a test mail to see how Liara works.</h1>
  <p>Laravel 10 send email example.</p>

</body>
</html> `}
    </Highlight>

    <h3>ایجاد کنترلر ارسال ایمیل</h3>
    <p>ترمینال را باز کرده و با استفاده از دستور زیر کنترلر را ایجاد کنید.</p>
    <Highlight className="php">
      {`php artisan make:controller SendEmailController`}
    </Highlight>
    <p>
      سپس به دایرکتوری <span className="code">app/Http/Controllers</span> بروید
      و<span className="code">SendEmailController.php</span> را باز کنید. سپس کد
      زیر را در داخل آن وارد کنید:
    </p>
    <Highlight className="php">
      {`<?php

namespace App\\Http\\Controllers;
  
use Illuminate\\Http\\Request;
  
use Mail;
  
use App\\Mail\\NotifyMail;
  
  
class SendEmailController extends Controller
{
      
  public function index()
  {
    Mail::to('destination@gmail.com')->send(new NotifyMail());
  
    return "Great! Your email has been sent successfully.";
  } 
}`}
    </Highlight>

    <p>
      برای اطلاعات بیشتر می‌توانید به{" "}
      <a href="https://laravel.com/docs/8.x/mail" target="_blank">
        مستندات Laravel
      </a>{" "}
      مراجعه کنید.
    </p>

    <Link href="/app-deploy/laravel/hooks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
