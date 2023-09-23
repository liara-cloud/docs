import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های PHP - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="php" />
      <div className="page-title">
        <h1>پلتفرم PHP</h1>
        <span className="page-description">(PHP Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/php/php-email-server.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های PHP باید پس از{" "}
      <Link href="/app-features/email#create-email">ایجاد سرویس ایمیل</Link>، در
      ابتدا کتابخانه{" "}
      <Link href="https://github.com/PHPMailer/PHPMailer">PHPMailer</Link> را با
      اجرای دستور زیر نصب کنید.
    </p>
    <Highlight className="bash">{`composer require phpmailer/phpmailer`}</Highlight>
    <p>
      در قدم بعد باید اطلاعات{" "}
      <Link href="/app-features/email#settings">دسترسی SMTP</Link> را طبق
      مستندات <Link href="/app-deploy/php/envs">تنظیم متغیرها</Link> در تنظیمات
      برنامه اضافه کنید.
    </p>

    <Highlight className="plaintext">
      {`MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_SECURITY=tls
MAIL_USER=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">MAIL_USER</span> و{" "}
      <span className="code">MAIL_PASSWORD</span> در هر سرویس ایمیل ایجاد شده
      متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <p>
      در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از
      دسترسی SMTP سرویس ایمیل لیارا و تنظیم{" "}
      <span className="code">MAIL_SECURITY=tls</span>، به‌صورت امن اقدام به
      ارسال ایمیل‌های تراکنشی کنید.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که مقدار From باید یکی از نشانی‌های اضافه شده در سرویس
      ایمیل باشد.
    </Notice>

    <Highlight className="php">
      {`<?php

use PHPMailer\\PHPMailer\\PHPMailer;
use PHPMailer\\PHPMailer\\SMTP;
use PHPMailer\\PHPMailer\\Exception;

require_once "vendor/autoload.php";

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = getenv('MAIL_SECURITY');
$mail->Port = getenv('MAIL_PORT');
$mail->Host = getenv('MAIL_HOST');
$mail->Username = getenv('MAIL_USER');
$mail->Password = getenv('MAIL_PASSWORD');

$mail->From = "from@example.com";
$mail->FromName = "MyName";

$mail->addAddress("destination@host.name", "destination name");

$mail->isHTML(false);

$mail->Subject = "Mailing with PHPMailer";
$mail->Body = "Congratulation";
$mail->AltBody = "Congratulation";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    error_log("Mailer Error: $mail->ErrorInfo", 0);
}`}
    </Highlight>
    <p>
      همچنین برای کسب اطلاعات بیشتر در رابطه با نحوه‌ی استفاده از کتابخانه
      PHPMailer می‌توانید به{" "}
      <a
        href="https://github.com/PHPMailer/PHPMailer/blob/master/README.md"
        target="_blank"
      >
        مستندات
      </a>{" "}
      این کتابخانه مراجعه کنید.
    </p>

    <Link href="/app-deploy/php/tips" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
