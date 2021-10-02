import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات ایمیل Transactional Email - سرویس ابری لیارا</title>
    </Head>

    <h1>ایمیل</h1>
    <span className="page-description">(Transactional Email)</span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#create-email">ایجاد سرویس ایمیل</a></li>
      <li><a href="#send-email">ارسال ایمیل</a></li>
      <li><a href="#inbox">صندوق ورودی</a></li>
      <li><a href="#sent-email">ارسال شده‌ها</a></li>
      <li><a href="#settings">تنظیمات</a></li>
      <li><a href="#spam-rate">درصد اسپم بودن ایمیل</a></li>
      <li><a href="#smtp-access">استفاده از دسترسی SMTP</a></li>
    </ul>

    <p>
      با استفاده از سرویس ایمیل لیارا، می‌توانید اقدام به ارسال ایمیل‌های
      تراکنشی، در برنامه‌های خود، از طریق دسترسی SMTP کنید.
      <br />
      ایمیل های تراکنشی Transactional Email، به ایمیل‌هایی گفته می‌شود که در
      پاسخ به یک عمل ارسال می‌گردد. به‌طور مثال ایمیل تأیید ثبت نام، فراموشی رمز
      عبور، فاکتور و سایر موارد مشابه. به‌طورکلی ایمیل‌هایی که درنتیجه یک عمل و
      تراکنش و به خواست دریافت‌کننده ارسال شود و محتوای هر ایمیل برای هر شخص
      متفاوت باشد، ایمیل تبادلی گفته می‌شود.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که از این سرویس برای ارسال ایمیل‌های تبلیغاتی، مانند:
      خبرنامه، جشنواره فروش و سایر موارد مشابه، نمی‌توانید استفاده کنید. در صورت
      مشاهده، سرویس ایمیل مسدود خواهد شد.
    </Notice>

    <h3 id="create-email">ایجاد سرویس ایمیل</h3>
    <p>
      برای ایجاد سرویس ایمیل، با مراجعه به بخش «برنامه‌ها» و بعد از انتخاب
      برنامه مورد نظر، از فهرست سمت راست، بر روی گزینه ایمیل کلیک کنید.
    </p>

    <ZoomableImage src="/static/email-1.png" />

    <Notice variant="warning">
      <ul>
        <li style={{ fontSize:14, lineHeight:1.8 }}>برای ایجاد سرویس ایمیل در برنامه تهیه شده باید حداقل یک استقرار موفق داشته باشید و یک دامنه فعال نیز به این برنامه متصل شده باشد.</li>
        <li style={{ fontSize:14, lineHeight:1.8 }}>توجه داشته باشید که سرویس ایمیل فقط برای ریشه‌ی دامنه قابل ارائه است و ارائه سرویس ایمیل برای زیردامنه‌هایی مانند ‌(subdomain.example.com) ممکن نیست.</li>
      </ul>
   </Notice>

    <p>
      پس از کلیک بر روی دکمه ایجاد سرویس ایمیل، در پنجره باز شده، بعد از انتخاب
      یک دامنه، باید یک نام برای اولین نشانی خود انتخاب کنید.
    </p>

    <ZoomableImage src="/static/email-2.png" />

    <p>بعد از کلیک بر روی دکمه ایجاد سرویس ایمیل، به صفحه زیر منتقل می‌شوید.</p>

    <ZoomableImage src="/static/email-3.png" />

    <p>
      بعد از ایجاد رکوردهای ارائه شده، بر روی دکمه "بروزرسانی وضعیت رکوردها"
      کلیک کنید. در صورتی که تمامی رکوردها را به درستی ایجاد کرده باشید، به
      صندوق ورودی سرویس ایمیل، منتقل می‌شوید. اگر هم از ایجاد سرویس ایمیل منصرف
      شدید، انتخاب دامنه اشتباه و یا هر دلیل دیگری، می‌توانید بر روی دکمه انصراف
      کلیک کنید.
    </p>

    <ZoomableImage src="/static/email-4.png" />

    <p>در فهرست سمت راست، چهار گزینه وجود دارد:</p>

    <h3 id="send-email">۱. ارسال ایمیل</h3>
    <ZoomableImage src="/static/email-5.png" />
    <p>
      از این قسمت می‌توانید برای ارسال ایمیل‌های تستی و آزمایشی استفاده کنید.
      تنها کافیست که عنوان، مبدا، مقصد و محتوا ایمیل را وارد کنید و بر روی دکمه
      ارسال کلیک کنید. در قسمت محتوا، در حال حاضر باید کد HTML که آماده کردید را
      کپی کنید.
    </p>

    <h3 id="inbox">۲. صندوق ورودی</h3>
    <ZoomableImage src="/static/email-6.png" />
    <p>
      این بخش شامل لیست ایمیل‌های دریافتی می‌شود. به عبارتی ایمیل‌های ارسال شده
      به نشانی‌های ایجاد شده در سرویس ایمیل‌تان را می‌توانید در این قسمت مشاهده
      کنید. در این لیست، دایره سمت راست ایمیل، بیانگر درصد اسپم بودن این ایمیل
      است (درصد اسپم بودن ایمیل را در <a href="#spam-rate">ادامه</a> بررسی
      می‌کنیم). همچنین ایمیل‌های دریافتی و خوانده نشده، با یک دایره آبی رنگ در
      سمت راست عنوان ایمیل، همانند تصویر، به شما نشان داده خواهند شد.
    </p>

    <h3 id="sent-email">۳. ارسال شده‌ها</h3>
    <ZoomableImage src="/static/email-7.png" />
    <p>
      این قسمت شامل لیست ایمیل‌های ارسال شده از سرویس ایمیل، به همراه درصد اسپم
      بودن این ایمیل و وضعیت ارسال ایمیل است، که با کلیک بر روی هر کدام
      می‌توانید محتویات آن، به همراه اطلاعات بیشتر در رابطه با وضعیت ارسال
      ایمیل، مشاهده کنید.
    </p>

    <h3 id="settings">۴. تنظیمات</h3>
    <p>
      این بخش نیز به چندین قسمت تقسیم می‌شود که هرکدام را جداگانه بررسی می‌کنیم:
    </p>

    <h4>۱. افزودن نشانی</h4>
    <ZoomableImage src="/static/email-settings-1.png" />
    <p>
      در این قسمت می‌توانید برای سرویس ایمیل‌تان، نشانی‌های بیشتری ایجاد کنید.
      در حال حاضر تعداد مجاز نشانی، ۱۰ عدد است.
    </p>

    <h4>۲. دسترسی SMTP</h4>
    <ZoomableImage src="/static/email-settings-2.png" />
    <p>
      این قسمت شامل اطلاعات لازم برای استفاده از دسترسی SMTP می‌شود. در{" "}
      <a href="#smtp-access">ادامه</a> نحوه استفاده از این دسترسی را در
      برنامه‌های مختلف را خواهیم گفت.
    </p>

    <h4>۳. رکوردهای DNS</h4>
    <ZoomableImage src="/static/email-settings-3.png" />
    <p>
      در این قسمت می‌توانید وضعیت رکوردهای سرویس ایمیل‌تان را مشاهده کنید. در
      صورت نیاز به رکورد‌های سرویس ایمیل، می‌توانید به این قسمت مراجعه کنید.
    </p>

    <h4>۴. حذف سرویس ایمیل</h4>
    <ZoomableImage src="/static/email-settings-4.png" />
    <p>
      قسمت پایانی تنظیمات، بخش حذف سرویس ایمیل است. در صورت نیاز به حذف سرویس
      ایمیل، می‌توانید از این گزینه استفاده کنید، اما به این موضوع توجه کنید که
      بعد از حذف سرویس ایمیل، اطلاعات قابل بازگشت نیستند.
    </p>

    <h3 id="spam-rate">درصد اسپم بودن ایمیل</h3>
    <p>
      در صندوق ورودی/ارسال شده‌ها و صفحه‌ای که محتویات ایمیل را مشاهده می‌کنید،
      می‌توانید این درصد را مشاهده کنید. اگر این درصد در ایمیل‌های ارسالی، بیش
      از ۵۰ باشد، ایمیل از طرف لیارا ارسال نخواهد شد. برای مطالعه نکات بیشتر در
      این رابطه و راه‌های بهبود این درصد، می‌توانید به این{" "}
      <a
        href="https://www.copernica.com/en/documentation/some-tips-to-lower-your-email-spam-score"
        target="_blank"
      >
        لینک
      </a>{" "}
      مراجعه کنید.
    </p>

    <h3 id="smtp-access">استفاده از دسترسی SMTP</h3>
    <Notice variant="info">
      توجه داشته باشید که مقادیر موجود برای متغیر‌های محیطی مثال هستند و نیاز
      است تا آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس ایمیل‌تان، جایگزین
      کنید.
    </Notice>

    <Notice variant="info">
      برای استفاده از دسترسی SMTP سرویس ایمیل، برای{" "}
      <span className="code">ENCRYPTION</span> تنها باید از{" "}
      <span className="code">tls</span> استفاده کنید. به عبارتی به تنها به صورت
      ایمن می‌توانید از این دسترسی استفاده کنید و هیچ جای نگرانی برای شما، باقی
      نمی‌ماند.
    </Notice>

    <Notice variant="info">
      در ارسال ایمیل توسط SMTP، فیلد <span className="code">from</span> تنها
      می‌تواند یکی از نشانی‌هایی باشد که برای سرویس ایمیل ایجاد کرده‌اید.
    </Notice>

    <h4>NodeJS</h4>
    <p>
      برای استفاده از دسترسی SMTP در NodeJS، ابتدا توسط دستور زیر پکیج{" "}
      <span className="code">
        <a href="https://nodemailer.com/smtp/" target="_blank">
          nodemailer
        </a>
      </span>{" "}
      را نصب کنید.
    </p>
    <code className="bash">npm install nodemailer</code>
    <p>
      بعد از نصب این پکیج، می‌توانید متغیر‌های محیطی مربوط به دسترسی SMTP را در
      قسمت تنظیمات برنامه اضافه کنید.
    </p>
    <Highlight className="json">
      {`MAIL_HOST=smtp.iran.liara.ir
MAIL_PORT=587
MAIL_USER=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885`}
    </Highlight>
    <p>
      سپس همانند مثال زیر می‌توانید اقدام به ارسال ایمیل، توسط دسترسی SMTP کنید:
    </p>
    <Highlight className="javascript">
      {`const nodemailer = require("nodemailer");
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  tls: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  }
});

transporter.sendMail({
  from: 'MyName <from@example.com>',
  to: 'to@example.com',
  subject: 'Test Email Subject',
  html: '<h1>Example HTML Message Body</h1>'
})
  .then(() => console.log('OK, Email has been sent.'))
  .catch(console.error);`}
    </Highlight>
    <p>
      برای اطلاعات بیشتر به{" "}
      <a href="https://nodemailer.com/smtp/" target="_blank">
        مستندات پکیج nodemailer
      </a>{" "}
      مراجعه کنید.
    </p>

    <h4>Laravel</h4>
    <p>
      برای استفاده از دسترسی SMTP در برنامه‌های Laravel، نیاز است که متغیر‌های
      محیطی زیر را در قسمت تنظیمات برنامه، ایجاد کنید، تا بتوانید از این دسترسی
      در برنامه‌تان استفاده کنید.
    </p>
    <Highlight className="json">
      {`MAIL_DRIVER=smtp
MAIL_HOST=smtp.iran.liara.ir
MAIL_PORT=587
MAIL_USERNAME=my-app
MAIL_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885
MAIL_ENCRYPTION=tls`}
    </Highlight>
    <p>
      برای اطلاعات بیشتر می‌توانید به{" "}
      <a href="https://laravel.com/docs/7.x/mail" target="_blank">
        مستندات Laravel
      </a>{" "}
      مراجعه کنید.
    </p>

    <h4>Django</h4>
    <p>
      برای استفاده از دسترسی SMTP در برنامه‌های Django نیاز است که متغیر‌های
      محیطی زیر را در قسمت تنظیمات برنامه، ایجاد و از آن‌ها در فایل{" "}
      <span className="code">settings.py</span> استفاده کنید، تا بتوانید از این
      دسترسی در برنامه‌تان بهره ببرید.
    </p>
    <Highlight className="json">
      {`EMAIL_BACKEND = ‘django.core.mail.backends.smtp.EmailBackend’
EMAIL_HOST=smtp.iran.liara.ir
EMAIL_PORT=587
EMAIL_HOST_USER=my-app
EMAIL_HOST_PASSWORD=87b9307a-dae9-410e-89a2-e77de60e4885
EMAIL_USE_TLS=True`}
    </Highlight>
    <p>تکه کد زیر، نمونه ارسال ایمیل توسط Django است:</p>
    <Highlight className="python">
      {`from django.core.mail import send_mail
send_mail('Subject here', 'Here is the message.', 'from@example.com', ['to@example.com'], fail_silently=False)`}
    </Highlight>
    <p>
      برای اطلاعات بیشتر می‌توانید به{" "}
      <a
        href="https://docs.djangoproject.com/en/3.0/topics/email/"
        target="_blank"
      >
        مستندات Django
      </a>{" "}
      مراجعه کنید.
    </p>

    <h4>WordPress</h4>
    <p>
      پلاگین‌های زیادی در وردپرس، برای استفاده از دسترسی SMTP وجود دارد. اما
      پیشنهاد ما استفاده از پلاگین{" "}
      <a href="https://wordpress.org/plugins/wp-mail-smtp/" target="_blank">
        WP Mail SMTP
      </a>
      ، با بیش از ۱ میلیون نصب فعال است. بعد از نصب این پلاگین، همانند تصویر
      زیر، به قسمت تنظیمات آن وارد شوید.
    </p>
    <ZoomableImage src="/static/wp-mail-smtp-1.png" />

    <p>سپس فیلد From Email را تنظیم کنید.</p>
    <ZoomableImage src="/static/wp-mail-smtp-2.png" />

    <p>در قدم بعد از میان سرویس‌های مختلف، Other SMTP را انتخاب کنید.</p>
    <ZoomableImage src="/static/wp-mail-smtp-3.png" />

    <p>
      و در نهایت، در قسمت تنظیمات، اطلاعات دسترسی SMTP خود را وارد کنید، و این
      تغییرات را ذخیره کنید.
    </p>
    <ZoomableImage src="/static/wp-mail-smtp-4.png" />

    <h3>پیوست‌ها</h3>
    <Notice variant="info">به زودی این قابلیت به ایمیل‌ها اضافه می‌شود.</Notice>
  </Layout>
);
