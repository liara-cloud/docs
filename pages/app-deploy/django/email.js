import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های Django - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/django/django-email-server.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های Django باید پس از{" "}
      <Link href="/email/create-mail-server#create-mail-server">
        ایجاد سرویس ایمیل
      </Link>{" "}
      و ساخت <Link href="/email/send-email#add-smtp-user">دسترسی SMTP</Link>،
      اطلاعات{" "}
      <Link href="/email/send-email#smtp-server-address">دسترسی SMTP</Link> را
      طبق مستندات <Link href="/app-deploy/django/envs">تنظیم متغیرها</Link> در
      تنظیمات برنامه اضافه کرده و از آن‌ها در فایل{" "}
      <span className="code">settings.py</span> استفاده کنید.
    </p>

    <Highlight className="plaintext">
      {`EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.c1.liara.email
EMAIL_PORT=587
EMAIL_HOST_USER=YOUR_USERNAME
EMAIL_HOST_PASSWORD=YOUR_PASSWORD
EMAIL_USE_TLS=True`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">EMAIL_HOST_USER</span> و{" "}
      <span className="code">EMAIL_HOST_PASSWORD</span> در هر سرویس ایمیل ایجاد
      شده متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <p>
      حال با تنظیم <span className="code">EMAIL_USE_TLS=True</span>
      می‌توانید بدون نگرانی در پروژه‌ی خود با استفاده از دسترسی SMTP سرویس ایمیل
      لیارا به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی کنید.
    </p>

    <Notice variant="warning">
      قابل ذکر است که مقدار <span className="code">from@example.com</span> در
      قطعه کد زیر باید یکی از{" "}
      <Link href="/email/send-email#mail-server-account">
        نشانی‌های اضافه شده
      </Link>{" "}
      در سرویس ایمیل باشد.
    </Notice>

    <br />

    <Highlight className="python">
      {`from django.core.mail import send_mail
send_mail('Subject here', 'Here is the message.', 'from@example.com', ['to@example.com'], fail_silently=False)`}
    </Highlight>

    <p>
      در صورتی که از پکیج{" "}
      <a href="https://github.com/pennersr/django-allauth" target="_blank">
        django-allauth
      </a>{" "}
      برای احراز هویت و ارسال ایمیل تایید حساب کاربری استفاده می‌کنید، نیاز است
      مقدار <span className="code">from</span> را در فایل{" "}
      <span className="code">settings.py</span> به‌صورت زیر مشخص کنید:
    </p>

    <Highlight className="python">
      {`DEFAULT_FROM_EMAIL = 'from@example.com'`}
    </Highlight>

    <p>
      برای اطلاعات بیشتر می‌توانید به{" "}
      <a
        href="https://docs.djangoproject.com/en/4.2/topics/email/"
        target="_blank"
      >
        مستندات Django
      </a>{" "}
      مراجعه کنید.
    </p>

    <Link href="/app-deploy/django/tips" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
