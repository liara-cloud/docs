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
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های Flask - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flask" />
      <div className="page-title">
        <h1>پلتفرم Flask</h1>
        <span className="page-description">(Flask Platform)</span>
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
        <a href="#set-env">تنظیم متغیر های محیطی</a>
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
      ابری در Flask باید با اجرای دستور زیر، پکیج{" "}
      <a
        href="https://github.com/boto/boto3"
        target="_blank"
        rel="noopener noreferrer"
      >
        boto3
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`pip install boto3`}</Highlight>

    <h3 id="get-keys">دریافت کلیدها</h3>
    <p>
      اگر باکت شما خصوصی باشد، برای دسترسی به باکت، نیاز به کلید دارید. برای
      ساخت کلید، به صفحه ذخیره‌سازی ابری بروید و طبق عکس‌ها کلیدخود را بسازید.
    </p>
    <p>به قسمت کلیدها رفته:</p>
    <ZoomableImage src="/static/flask/get_key1.png" />
    <p>یک کلید جدید بسازید.</p>
    <ZoomableImage src="/static/flask/get_key2.png" />
    <p>
      کلیدهای ساخته‌شده را کپی کنید. توجه داشته باشید که SECRET_KEY تنها یک بار
      نمایش داده می‌شود و پس از آن باید کلید را درجایی مطمئن ذخیره کنید.
    </p>
    <ZoomableImage src="/static/flask/get_key3.png" />
    <h3 id="set-env">تنظیم متغیر های محیطی</h3>
    <p>
      در این مرحله باید کلیدها، نام باکت و endpoint لیارا را در فایل .env ذخیره
      کنید
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>
    <p>
      لطفا توجه داشته‌باشید که باید هریک از مقادیر بالا را با متغیر های
      باکت‌خودتان‌ جایگزین کنید. به عنوان مثال، یک فایل .env می‌تواند به شکل زیر
      باشد:
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT="https://storage.iran.liara.space"
LIARA_BUCKET_NAME="my-personal-files
LIARA_ACCESS_KEY="nad4u71et9dgc3go"
LIARA_SECRET_KEY="82c963df-1122-4c31-868b-0124a28ad57d""`}
    </Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>راه‌اندازی اولیه و اتصال به باکت:</p>

    <Highlight className="python">
      {`from dotenv import load_dotenv
import boto3
from botocore.exceptions import NoCredentialsError
from urllib.parse import quote

load_dotenv()

LIARA_ENDPOINT = os.getenv("LIARA_ENDPOINT")
LIARA_ACCESS_KEY = os.getenv("LIARA_ACCESS_KEY")
LIARA_SECRET_KEY = os.getenv("LIARA_SECRET_KEY")
LIARA_BUCKET_NAME = os.getenv("LIARA_BUCKET_NAME")

s3 = boto3.client(
    "s3",
    endpoint_url=LIARA_ENDPOINT,
    aws_access_key_id=LIARA_ACCESS_KEY,
    aws_secret_access_key=LIARA_SECRET_KEY,
)`}
    </Highlight>

    <p>آپلود فایل:</p>
    <Highlight className="python">
      {`s3.upload_fileobj(file, LIARA_BUCKET_NAME, file.filename)`}
    </Highlight>

    <p>دانلود فایل:</p>
    <Highlight className="python">
      {`s3.download_file(LIARA_BUCKET_NAME, filename_in_bucket, filename_in_system)`}
    </Highlight>

    <p>دریافت لیست فایل‌های یک باکت:</p>
    <Highlight className="python">
      {`files = s3.list_objects(Bucket=LIARA_BUCKET_NAME)
for file in files["Contents"]:
    print(file["Key"])`}
    </Highlight>

    <p>دریافت signed URL:</p>
    <Highlight className="python">
      {`pre_signed_url = s3.generate_presigned_url(
    "get_object",
    Params={"Bucket": LIARA_BUCKET_NAME, "Key": filename},
    ExpiresIn=12 * 60 * 60,  # 12 hours
)`}
    </Highlight>

    <p>دریافت لینک دائمی فایل. توجه کنید که دسترسی باکت باید public باشد:</p>
    <Highlight className="python">
      {`filename_encoded = quote(filename)
permanent_url = f"https://{LIARA_BUCKET_NAME}.{LIARA_ENDPOINT.replace('https://', '')}/{filename_encoded}"`}
    </Highlight>

    <p>سورس‌کد ‌کامل جهت ارتباط با ذخیره‌سازی ابری در اپ flask</p>
    <Highlight className="python">
      {`import os
import boto3
from dotenv import load_dotenv
from flask import Flask, request
from botocore.exceptions import NoCredentialsError
from urllib.parse import quote

load_dotenv()

LIARA_ENDPOINT = os.getenv("LIARA_ENDPOINT")
LIARA_ACCESS_KEY = os.getenv("LIARA_ACCESS_KEY")
LIARA_SECRET_KEY = os.getenv("LIARA_SECRET_KEY")
LIARA_BUCKET_NAME = os.getenv("LIARA_BUCKET_NAME")

s3 = boto3.client(
    "s3",
    endpoint_url=LIARA_ENDPOINT,
    aws_access_key_id=LIARA_ACCESS_KEY,
    aws_secret_access_key=LIARA_SECRET_KEY,
)

app = Flask(__name__)


@app.route("/")
def index():
    urls = {"urls": list()}
    for url in app.url_map.iter_rules():
        if '/static/' not in str(url):
            urls["urls"].append(str(url))
    return {"api": "running", **urls}


@app.route("/upload", methods=["POST"])
def upload_file():
    response = {"message": ""}
    file = request.files["file"]
    if file:
        try:
            s3.upload_fileobj(file, LIARA_BUCKET_NAME, file.filename)
            response["message"] = "File uploaded."
        except NoCredentialsError:
            response["message"] = "Liara credentials not found."
        except Exception as e:
            response["message"] = str(e)
        finally:
            return response
    else:
        response["message"] = "No file selected."


@app.route("/download/<filename>")
def download_file(filename):
    response = {"message": ""}
    try:
        s3.download_file(LIARA_BUCKET_NAME, filename, filename)
        response["message"] = "File downloaded."
    except NoCredentialsError:
        response["message"] = "Liara credentials not found."
    except Exception as e:
        response["message"] = str(e)
    finally:
        return response


@app.route("/list")
def list_files():
    response = {"message": list()}
    try:
        files = s3.list_objects(Bucket=LIARA_BUCKET_NAME)
        for file in files["Contents"]:
            response["message"].append(file["Key"])
    except NoCredentialsError:
        response["message"] = "Liara credentials not found."
    except Exception as e:
        response["message"] = str(e)
    finally:
        return response


@app.route("/presigned-url/<filename>")
def get_presigned_url(filename):
    response = {"message": ""}
    try:
        pre_signed_url = s3.generate_presigned_url(
            "get_object",
            Params={"Bucket": LIARA_BUCKET_NAME, "Key": filename},
            ExpiresIn=12 * 60 * 60,  # 12 hours
        )
        response["message"] = pre_signed_url
    except NoCredentialsError:
        response["message"] = "Liara credentials not found."
    except Exception as e:
        response["message"] = str(e)
    finally:
        return response


@app.route("/permanent-url/<filename>")
def get_permanent_url(filename):
    # bucket should be public
    response = {"message": ""}
    try:
        filename_encoded = quote(filename)
        permanent_url = f"https://{LIARA_BUCKET_NAME}.{LIARA_ENDPOINT.replace('https://', '')}/{filename_encoded}"
        response["message"] = permanent_url
    except NoCredentialsError:
        response["message"] = "Liara credentials not found."
    except Exception as e:
        response["message"] = str(e)
    finally:
        return response


if __name__ == "__main__":
    app.run()
`}
    </Highlight>

    <br />

    <Link href="/app-deploy/flask/domain" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
