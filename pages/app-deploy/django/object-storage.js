import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های Django - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
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

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/django/django-object-storage.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h3 id="install-aws-sdk">نصب AWS SDK</h3>
    <p>
      از آنجا که ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با پروتکل
      S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و فریم‌ورک‌های
      مختلفی این فضای ذخیره‌سازی را مدیریت کنید. حال برای اتصال به ذخیره‌سازی
      ابری در Django باید با اجرای دستورهای زیر، پکیج{" "}
      <a
        href="https://github.com/boto/boto3"
        target="_blank"
        rel="noopener noreferrer"
      >
        boto3
      </a>{" "}
      و{" "}
      <a
        href="https://django-storages.readthedocs.io/en/latest/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Django storages
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`pip install boto3
pip install django-storages`}</Highlight>

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
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>
    <p>
      لطفا توجه داشته‌باشید که باید هریک از مقادیر بالا را با متغیر های باکت
      خودتان‌ جایگزین کنید. به عنوان مثال، یک فایل{" "}
      <span className="code">.env</span> می‌تواند به شکل زیر باشد:
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT="https://storage.iran.liara.space"
LIARA_BUCKET_NAME="my-personal-files"
LIARA_ACCESS_KEY="nad4u71et9dgc3go"
LIARA_SECRET_KEY="82c963df-1122-4c31-868b-0124a28ad57d"`}
    </Highlight>
    <p>
      در مرحله‌ی آخر باید فایل <span className="code">settings.py</span>{" "}
      برنامه‌تان را به‌ شکل زیر ویرایش کنید:
    </p>
    <Highlight className="python">
      {`INSTALLED_APPS = [
    # other apps,
    'storages',
]

# load .env file
# pip install python-dotenv 
if DEBUG == True:
    from dotenv import load_dotenv
    load_dotenv()

# S3 Settings
LIARA_ENDPOINT    = os.getenv("LIARA_ENDPOINT")
LIARA_BUCKET_NAME = os.getenv("LIARA_BUCKET_NAME")
LIARA_ACCESS_KEY  = os.getenv("LIARA_ACCESS_KEY")
LIARA_SECRET_KEY  = os.getenv("LIARA_SECRET_KEY")

# S3 Settings Based on AWS (optional)
AWS_ACCESS_KEY_ID       = LIARA_ACCESS_KEY
AWS_SECRET_ACCESS_KEY   = LIARA_SECRET_KEY
AWS_STORAGE_BUCKET_NAME = LIARA_BUCKET_NAME
AWS_S3_ENDPOINT_URL     = LIARA_ENDPOINT
AWS_S3_REGION_NAME      = 'us-east-1'  

# Django-storages configuration
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'`}
    </Highlight>

    <h3 id="how-to-use">نحوه‌ی استفاده</h3>
    <p>
      می‌توان گفت که تغییر خاصی در نحوه‌ی استفاده‌ی شما به‌وجود نخواهد آمد. برای
      مثال شما می‌توانید با استفاده از قطعه کد زیر، در فایل{" "}
      <span className="code">views.py</span>
      موجود در یکی از appها، عکس‌های خود را در سرویس ذخیره‌سازی ابری لیارا،
      ذخیره کنید؛ فایل‌های درون باکت را نمایش دهید، آن‌ها را با لینک دائم یا
      موقت دانلود کنید و یا به اشتراک بگذارید و یا آن‌ها را حذف کنید:
    </p>

    <Highlight className="python">{`from django.shortcuts import render, redirect
from .forms import PhotoForm
from .models import Photo
from django.conf import settings as s
import boto3
import datetime
import os

# set Liara Bucket Conf
LIARA = {
    'endpoint': s.LIARA_ENDPOINT,
    'accesskey': s.LIARA_ACCESS_KEY,
    'secretkey': s.LIARA_SECRET_KEY,
    'bucket': s.LIARA_BUCKET_NAME
}

# upload photo in bucket using s3 access
def upload_photo(request):
    if request.method == 'POST':
        form = PhotoForm(request.POST, request.FILES)
        if form.is_valid():
            photo_instance = form.save(commit=False)
            
            # Get the original filename and extension
            original_filename, file_extension = os.path.splitext(photo_instance.image.name)
            
            # Get current date and time
            current_date = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
            
            # Construct unique filename with date and original filename
            filename = f"{current_date}_{original_filename}{file_extension}"
            
            # Set the filename
            photo_instance.image.name = filename
            photo_instance.save()
            return redirect('upload_photo')
    else:
        form = PhotoForm()

    # Retrieve a list of uploaded photos from the S3 bucket
    s3 = boto3.client('s3',
        endpoint_url=LIARA['endpoint'],
        aws_access_key_id=LIARA['accesskey'],
        aws_secret_access_key=LIARA['secretkey']
    )
    bucket_name = LIARA['bucket']
    objects = s3.list_objects(Bucket=bucket_name)

    # show uploaded files (photos) in bucket using s3 access
    uploaded_photos = []
    if 'Contents' in objects:
        for obj in objects['Contents']:
            uploaded_photos.append({
                'name': obj['Key'],  # Assuming key name as file name
                'permanent_link': f"{LIARA['endpoint']}/{bucket_name}/{obj['Key']}",
                'temporary_link': s3.generate_presigned_url(
                    'get_object',
                    Params={'Bucket': bucket_name, 'Key': obj['Key']},
                    ExpiresIn=3600  # 1 hour expiry
                )
            })
    else:
        uploaded_photos.append({'name': 'no file', 'permanent_link': '', 'temporary_link': ''})

    return render(request, 'photos/upload_photo.html', {'form': form, 'uploaded_photos': uploaded_photos})

# download photo (file) using s3 access
def download_photo(request, photo_name):
    s3 = boto3.client('s3',
        endpoint_url=LIARA['endpoint'],
        aws_access_key_id=LIARA['accesskey'],
        aws_secret_access_key=LIARA['secretkey']
    )
    bucket_name = LIARA['bucket']
    file_url = s3.generate_presigned_url(
        'get_object',
        Params={'Bucket': bucket_name, 'Key': photo_name},
        ExpiresIn=3600  # 1 hour expiry
    )
    return redirect(file_url)

# delete photo using s3 access
def delete_photo(request, photo_name):
    s3 = boto3.client('s3',
        endpoint_url=LIARA['endpoint'],
        aws_access_key_id=LIARA['accesskey'],
        aws_secret_access_key=LIARA['secretkey']
    )
    bucket_name = LIARA['bucket']
    s3.delete_object(Bucket=bucket_name, Key=photo_name)
    return redirect('upload_photo')

`}</Highlight>

    <Notice variant="info">
      سورس کامل قطعه کد فوق، در{" "}
      <a href="https://github.com/liara-cloud/django-getting-started/tree/upload-s3">
        گیت‌هاب لیارا
      </a>{" "}
      موجود است که می‌توانید از آن استفاده کنید.
    </Notice>

    <p>
      البته، برای ذخیره فایل در object storage می‌توانید مانند قبل عمل کرده، و
      فایل های آپلود شده به طور خودکار در ذخیره‌سازی ابری لیارا قرار می‌گیرند؛
      به عنوان مثال، شما می‌توانید با استفاده از قطعه کد زیر، محتوای{" "}
      <span className="code">Contents</span> را در فایلی به نام{" "}
      <span className="code">example.txt</span> قرار داده و آن را در فضای
      ذخیره‌سازی ابری، ذخیره کنید:
    </p>

    <Highlight className="python">
      {`from django.core.files.base import ContentFile
from django.core.files.storage import default_storage

path = default_storage.save('/example.txt', ContentFile(b'Contents'))`}
    </Highlight>
    <p>
      برای استفاده از Object Storage در مدل‌ها نیز، می‌توان به شکل زیر عمل کرد:
    </p>
    <Highlight>
      {`from django.db import models


class Storage(models.Model):
    my_file = models.FileField()`}
    </Highlight>

    <p>
      همچنین می‌توانید به طور مستقیم از کتابخانه boto3 نیز استفاده کنید (مانند
      قطعه کد اولیه). نحوه استفاده از این کتابخانه در مستندات flask آورده‌
      شده‌است؛ می‌توانید به این{" "}
      <a href="/app-deploy/flask/object-storage">لینک</a> مراجعه کنید.
    </p>
    <br />

    <Link href="/app-deploy/django/websocket" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
