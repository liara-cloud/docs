import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های Golang - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="go" />
      <div className="page-title">
        <h1>پلتفرم Golang</h1>
        <span className="page-description">(Golang Platform)</span>
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
        <a href="#install-aws-sdk">نصب AWS SDK</a>
      </li>
      <li>
        <a href="#get-keys">دریافت کلیدها</a>
      </li>
      <li>
        <a href="#set-env">تنظیم متغیرها</a>
      </li>
      <li>
        <a href="#how-to-use">نحوه‌ی استفاده</a>
      </li>
    </ul>

    <h3 id="install-aws-sdk">نصب AWS SDK</h3>
    <p>
      از آنجا که ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با پروتکل
      S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و فریم‌ورک‌های
      مختلفی این فضای ذخیره‌سازی را مدیریت کنید. حال برای اتصال به ذخیره‌سازی
      ابری در Golang باید با اجرای دستورهای زیر، پکیج‌های مورد نیاز را نصب کنید:
    </p>
    <Highlight className="go">{`$ go get github.com/aws/aws-sdk-go-v2/aws 
$ go get github.com/aws/aws-sdk-go-v2/config
$ go get github.com/aws/aws-sdk-go-v2/service/s3`}</Highlight>

    <h3 id="get-keys">دریافت کلیدها</h3>
    <p>
      اگر باکت شما خصوصی باشد، برای دسترسی به باکت، نیاز به کلید دارید. برای
      ساخت کلید، به صفحه ذخیره‌سازی ابری رفته و طبق عکس‌ها کلیدخود را بسازید.
    </p>
    <p>به قسمت کلیدها رفته:</p>
    <ZoomableImage src="/static/flask/get_key1.png" />
    <p>یک کلید جدید بسازید.</p>
    <ZoomableImage src="/static/flask/get_key2.png" />
    <p>
      کلیدهای ساخته‌شده را ذخیره کنید. توجه داشته‌باشید که SECRET_KEY تنها یک
      بار نمایش داده می‌شود و پس از آن باید کلید را درجایی مطمئن ذخیره کنید.
    </p>
    <h3 id="set-env">تنظیم متغیر‌های محیطی</h3>
    <p>
      در این مرحله باید کلیدها، نام باکت و endpoint لیارا را در فایل{" "}
      <span className="code">.env</span> ذخیره کنید:
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=https://<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>
    <p>
      لطفا توجه داشته‌باشید که باید هریک از مقادیر بالا را با متغیر های
      باکت‌خودتان‌ جایگزین کنید. به عنوان مثال، یک فایل{" "}
      <span className="code">.env</span> می‌تواند به شکل زیر باشد:
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=https://storage.iran.liara.space
LIARA_BUCKET_NAME=my-personal-files
LIARA_ACCESS_KEY=nad4u71et9dgc3go
LIARA_SECRET_KEY=82c963df-1122-4c31-868b-0124a28ad57d`}
    </Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>
      قطعه کد زیر، یک تابع نمونه است که طریقه اتصال و آپلود فایل به باکت در
      برنامه golang را نشان می‌دهد:
    </p>
    <Highlight className="go">
      {`func upload_using_s3(fileContent *bytes.Reader, fileName string) error {

  err := godotenv.Load()
  if err != nil {
      log.Fatal("Error loading .env file")}

  cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion("us-west-2"))
  if err != nil {
    return err
  }

  // Define AWS credentials and bucket information
  awsAccessKeyID     := os.Getenv("LIARA_ACCESS_KEY")     
  awsSecretAccessKey := os.Getenv("LIARA_SECRET_KEY")  
  endpoint           := os.Getenv("LIARA_ENDPOINT")
  bucketName         := os.Getenv("LIARA_BUCKET_NAME")     

  // Initialize S3 client with custom configuration
  cfg.Credentials = aws.CredentialsProviderFunc(func(ctx context.Context) (aws.Credentials, error) {
    return aws.Credentials{
    AccessKeyID:     awsAccessKeyID,
    SecretAccessKey: awsSecretAccessKey,
    }, nil
  })

  cfg.BaseEndpoint = aws.String(endpoint)

  client := s3.NewFromConfig(cfg)

  // Specify the destination key in the bucket
  destinationKey := "uploads/" + fileName

  // Use the S3 client to upload the file
  _, err = client.PutObject(context.TODO(), &s3.PutObjectInput{
  Bucket: aws.String(bucketName),
  Key:    aws.String(destinationKey),
  Body:   fileContent,
  })

  return err
}`}
    </Highlight>

    <p>
      از تابع فوق می‌توان در بدنه اصلی برنامه (تابع main)، به شکل زیر استفاده
      کرد:
    </p>

    <Highlight className="go">{`func main() {
// Example: Upload a file to S3
fileName := "example.txt"
fileContent := []byte("Hello, S3!")

err := upload_using_s3(bytes.NewReader(fileContent), fileName)
if err != nil {
  log.Fatalf("failed to upload file, %v", err)
}

fmt.Printf("File uploaded successfully!\\n")}
`}</Highlight>
    <p>کد کامل برنامه:</p>
    <Highlight className="go">
      {`package main

import (
	"bytes"
	"context"
	"fmt"
	"log"
    "os"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
    "github.com/joho/godotenv"
)

func upload_using_s3(fileContent *bytes.Reader, fileName string) error {

    err := godotenv.Load()
	if err != nil {log.Fatal("Error loading .env file")}

	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion("us-west-2"))
	if err != nil {
		return err
	}

	// Define AWS credentials and bucket information
	awsAccessKeyID     := os.Getenv("LIARA_ACCESS_KEY")     
	awsSecretAccessKey := os.Getenv("LIARA_SECRET_KEY")  
	endpoint           := os.Getenv("LIARA_ENDPOINT")
	bucketName         := os.Getenv("LIARA_ENDPOINT")     

	// Initialize S3 client with custom configuration
	cfg.Credentials = aws.CredentialsProviderFunc(func(ctx context.Context) (aws.Credentials, error) {
		return aws.Credentials{
			AccessKeyID:     awsAccessKeyID,
			SecretAccessKey: awsSecretAccessKey,
		}, nil
	})

    cfg.BaseEndpoint = aws.String(endpoint)

	client := s3.NewFromConfig(cfg)

	// Specify the destination key in the bucket
	destinationKey := "uploads/" + fileName

	// Use the S3 client to upload the file
	_, err = client.PutObject(context.TODO(), &s3.PutObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(destinationKey),
		Body:   fileContent,
	})

	return err
}

func main() {
	// Example: Upload a file to S3
	fileName := "example.txt"
	fileContent := []byte("Hello, S3!")

	err := upload_using_s3(bytes.NewReader(fileContent), fileName)
	if err != nil {
		log.Fatalf("failed to upload file, %v", err)
	}

	fmt.Printf("File uploaded successfully!\n")
}
`}
    </Highlight>
    <p>
      برای اطلاعات بیشتر می‌توانید به مستندات{" "}
      <a href="https://aws.github.io/aws-sdk-go-v2/docs/getting-started/">
        golang s3
      </a>{" "}
      مراجعه کنید.
    </p>

    <br />

    <Link href="/app-deploy/golang/email" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
