import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های Flask - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flask" />
      <div className="page-title">
        <h1>پلتفرم Flask</h1>
        <span className="page-description">(Flask Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/flask/flask-email-server.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/flask-getting-started/tree/email-server">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های Flask باید پس از{" "}
      <Link href="/app-features/email#create-email">ایجاد سرویس ایمیل</Link>، در
      ابتدا کتابخانه{" "}
      <Link href="https://pypi.org/project/Flask-Mail/">Flask-Mail</Link> را با
      اجرای دستور زیر نصب کنید.
    </p>

    <Highlight className="bash">{`pip install Flask-Mail`}</Highlight>

    <p>
      در قدم بعد باید اطلاعات{" "}
      <Link href="/app-features/email#settings">دسترسی SMTP</Link> را طبق
      مستندات <Link href="/app-deploy/flask/envs">تنظیم متغیرها</Link> در
      تنظیمات برنامه اضافه کنید.
    </p>

    <Highlight className="plaintext">
      {`MAIL_SERVER=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USERNAME=YOUR_USERNAME
MAIL_PASSWORD=YOUR_PASSWORD
MAIL_USE_TLS=True`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">MAIL_USERNAME</span> و{" "}
      <span className="code">MAIL_PASSWORD</span> در هر سرویس ایمیل ایجاد شده
      متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <p>
      در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از
      دسترسی SMTP سرویس ایمیل لیارا و تنظیم{" "}
      <span className="code">MAIL_USE_TLS=True</span>، به‌صورت امن اقدام به
      ارسال ایمیل‌های تراکنشی کنید.
    </p>

    <Notice variant="warning">
      قابل ذکر است که مقدار <span className="code">from@example.com</span> در
      قطعه کد زیر باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.
    </Notice>

    <Highlight className="python">
      {`from flask import Flask
from flask_mail import Mail, Message
import os

app = Flask(__name__)

app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS') == 'True'
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)

@app.route("/")
def index():
  msg = Message(
    'Mailing with Flask-Mail',
    sender =  ("sender_name", 'from@example.com'),
    recipients = ['destination@host.name'])

  msg.body = "this is from Flask app, lmk if it works"

  mail.send(msg)

  return "Message sent!"`}
    </Highlight>

    <p>
      همچنین برای کسب اطلاعات بیشتر در رابطه با نحوه‌ی استفاده از کتابخانه
      Flask-Mail می‌توانید به{" "}
      <a href="https://pythonhosted.org/Flask-Mail/" target="_blank">
        مستندات
      </a>{" "}
      این کتابخانه مراجعه کنید.
    </p>

    <Link href="/app-deploy/flask/hooks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
