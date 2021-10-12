import Notice from '../../../components/Notice';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';

export default () => (
    <Layout>
        <Head>
            <title>
                مستندات سرویس ایمیل در برنامه‌های Laravel - سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/django.svg"
                alt="django"
            />
            <div className="page-title">
                <h1>برنامه‌های Django</h1>
                <span className="page-description">(Django Apps)</span>
            </div>
        </div>

        <h3>ارسال ایمیل</h3>

        <p>
            برای استفاده از سرویس ایمیل در برنامه‌های Django باید پس از{' '}
            <Link href="/app-features/email#create-email">
                ایجاد سرویس ایمیل
            </Link>
            ، اطلاعات{' '}
            <Link href="/app-features/email#settings">دسترسی SMTP</Link> را طبق
            مستندات <Link href="/app-deploy/laravel/envs">تنظیم متغیرها</Link>{' '}
            در تنظیمات برنامه اضافه کرده و از آن‌ها در فایل{' '}
            <span className="code">settings.py</span> استفاده کنید.
        </p>

        <Highlight className="plaintext">
            {`EMAIL_BACKEND = ‘django.core.mail.backends.smtp.EmailBackend’
EMAIL_HOST=smtp.iran.liara.ir
EMAIL_PORT=587
EMAIL_HOST_USER=my-app
EMAIL_HOST_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885
EMAIL_USE_TLS=True`}
        </Highlight>

        <Notice variant="info">
            توجه داشته باشید که مقادیر{' '}
            <span className="code">EMAIL_HOST_USER</span> و{' '}
            <span className="code">EMAIL_HOST_PASSWORD</span> در هر سرویس ایمیل
            ایجاد شده متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در
            تنظیمات سرویس ایمیل‌تان جایگزین کنید.
        </Notice>

        <p>
            حال با تنظیم <span className="code">EMAIL_USE_TLS=True</span>
            می‌توانید بدون نگرانی در پروژه‌ی خود با استفاده از دسترسی SMTP سرویس
            ایمیل لیارا به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی کنید.
        </p>

        <Notice variant="warning">
            قابل ذکر است که فیلد <span className="code">from@example.com</span>{' '}
            در قطعه کد زیر باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.
        </Notice>

        <Highlight className="python">
            {`from django.core.mail import send_mail
send_mail('Subject here', 'Here is the message.', 'from@example.com', ['to@example.com'], fail_silently=False)`}
        </Highlight>

        <p>
            برای اطلاعات بیشتر می‌توانید به{' '}
            <a
                href="https://docs.djangoproject.com/en/3.2/topics/email/"
                target="_blank"
            >
                مستندات Django
            </a>{' '}
            مراجعه کنید.
        </p>

        <Link href="/app-deploy/laravel/cloud-storage">
            متوجه شدم، برو گام بعدی!
        </Link>
    </Layout>
);
