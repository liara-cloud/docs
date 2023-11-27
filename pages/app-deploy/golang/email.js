import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات سرویس ایمیل در برنامه‌های Golang - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="go" />
      <div className="page-title">
        <h1>پلتفرم Golang</h1>
        <span className="page-description">(Golang Platform)</span>
      </div>
    </div>

    <h3>ارسال ایمیل</h3>

    <p>
      برای استفاده از سرویس ایمیل در برنامه‌های Golang باید پس از{" "}
      <Link href="/email/create-mail-server#create-mail-server">
        ایجاد سرویس ایمیل
      </Link>{" "}
      و ساخت <Link href="/email/send-email#add-smtp-user">دسترسی SMTP</Link>،
      اطلاعات{" "}
      <Link href="/email/send-email#smtp-server-address">دسترسی SMTP</Link> را
      طبق مستندات <Link href="/app-deploy/golang/envs">تنظیم متغیرها</Link> به
      فایل <span className="code">.env</span> موجود در مسیر اصلی برنامه اضافه
      کنید:
    </p>

    <Highlight className="plaintext">
      {`MAIL_FROM=email@email.email
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USERNAME=your-username
MAIL_PASSWORD=your-password`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که مقادیر <span className="code">MAIL_USERNAME</span> و{" "}
      <span className="code">MAIL_PASSWORD</span> در هر سرویس ایمیل ایجاد شده
      متفاوت است بنابراین باید آن‌ها را با مقادیر ارائه شده در تنظیمات سرویس
      ایمیل‌تان جایگزین کنید.
    </Notice>

    <Notice variant="warning">
      قابل ذکر است که مقدار <span className="code">MAIL_FROM</span> در قطعه کد
      فوق باید یکی از{" "}
      <Link href="/email/send-email#mail-server-account">
        نشانی‌های اضافه شده
      </Link>{" "}
      در سرویس ایمیل باشد.
    </Notice>
    <p>
      برای استفاده از ایمیل سرور در برنامه‌های golang می‌توانیم از کتابخانه
      gomail استفاده کنیم. برای نصب این کتابخانه، کافیست که دستور زیر را در مسیر
      اصلی برنامه اجرا کنیم:
    </p>

    <Highlight className="go">
      {`$ go get github.com/go-gomail/gomail`}
    </Highlight>

    <br />
    <p>
      یک نمونه از برنامه golang که با استفاده از gomail به نشانی فرضی{" "}
      <span className="code">email@email.email</span>
      ایمیل ارسال می‌کند؛ در زیر آمده است:
    </p>
    <Highlight className="go">
      {`package main

import(
    "fmt"
    "strconv"
    "os"
    "github.com/go-gomail/gomail"
    "github.com/joho/godotenv"
)

func main() {
    err := godotenv.Load(".env")
    if err != nil {
        fmt.Println(err)
    }

    mailPort, err := strconv.Atoi(os.Getenv("MAIL_PORT"))
    if err != nil {
        fmt.Println("Error converting MAIL_PORT to int:", err)
        return
    }
	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv("MAIL_FROM")) 
	m.SetHeader("To", "email@email.email")
	m.SetHeader("Subject", "This is a TEST")
	body := "this is really a test"
	m.SetBody("text/plain", body)

    d := gomail.NewDialer(os.Getenv("MAIL_HOST"), mailPort, os.Getenv("MAIL_USERNAME"), os.Getenv("MAIL_PASSWORD"))

	if err := d.DialAndSend(m); err != nil {
		fmt.Println("Error sending Test email:", err)
	}
}`}
    </Highlight>

    <p>
      برای اطلاعات بیشتر می‌توانید به{" "}
      <a href="https://github.com/go-gomail/gomail" target="_blank">
        مستندات gomail
      </a>{" "}
      مراجعه کنید.
    </p>

    {/* <Link href="/app-deploy/golang/tips" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link> */}
  </Layout>
);
