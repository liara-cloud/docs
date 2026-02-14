Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/flask/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های Flask

[Video link](https://media.liara.ir/flask/flask-object-storage.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/flask-getting-started/tree/object-storage) قابل مشاهده و دسترسی هستند.

برای استفاده از Object Storage در برنامه‌های Flask، می‌توانید از  
پکیج `boto3` استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
pip install boto3
```

پس از آن، کافیست تا طبق [https://docs.liara.ir/object-storage/how-tos/create-key](https://docs.liara.ir/object-storage/how-tos/create-key)، یک کلید جدید برای باکت خود بسازید.  
اطلاعات مربوط به ENDPOINT و نام باکت نیز در صفحه **تنظیمات**، در بخش **دسترسی با SDK**،  
برای شما قرار گرفته است.  
در نهایت نیز، بایستی  
اطلاعات مربوط به Object Storage خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
LIARA_ENDPOINT_URL=https://storage.iran.liara.space
LIARA_ACCESS_KEY=nieiou08cnbod58p
LIARA_SECRET_KEY=20b71a4c-1168-4945-8ed3-4724dbf9e997
BUCKET_NAME=my-bucket
```

تمامی کارها انجام شده است و می‌توانید از Object Storage در برنامه خود، استفاده کنید؛  
در ادامه، مثالی از نحوه استفاده برای‌تان آورده شده است:  

## پیکربندی اولیه و اتصال به باکت در برنامه

```py
from flask import Flask, render_template, request, flash
import boto3
from botocore.exceptions import NoCredentialsError, ClientError
import os

app = Flask(__name__)
app.secret_key = "your_secret_key_here"

# Load environment variables
LIARA_ENDPOINT_URL = os.getenv("LIARA_ENDPOINT_URL")
LIARA_ACCESS_KEY   = os.getenv("LIARA_ACCESS_KEY")
LIARA_SECRET_KEY   = os.getenv("LIARA_SECRET_KEY")
BUCKET_NAME        = os.getenv("BUCKET_NAME")
```

## آپلود فایل

```py
def upload_file(file, bucket_name):
    try:
        s3_client.upload_fileobj(file, bucket_name, file.filename)
        flash(f"File '{file.filename}' uploaded successfully.", "success")
    except ClientError as e:
        flash(f"Error uploading file: {e}", "error")
```

## دریافت لینک دائمی فایل

```py
def generate_permanent_url(bucket_name, file_name):
    return f"{LIARA_ENDPOINT_URL}/{bucket_name}/{file_name}"
```

## دریافت لیست فایل‌های یک باکت

```py
def list_files(bucket_name):
    try:
        response = s3_client.list_objects_v2(Bucket=bucket_name)
        return [obj['Key'] for obj in response.get('Contents', [])]
    except ClientError as e:
        flash(f"Error listing files: {e}", "error")
        return []
```

## دریافت لینک موقت دانلود فایل‌ها

```py
def generate_presigned_url(bucket_name, file_name, expiration=3600):
    try:
        url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': bucket_name, 'Key': file_name},
            ExpiresIn=expiration
        )
        return url
    except ClientError as e:
        flash(f"Error generating pre-signed URL: {e}", "error")
        return None
```

## حذف فایل

```py
def delete_file(bucket_name, file_name):
    try:
        s3_client.delete_object(Bucket=bucket_name, Key=file_name)
        flash(f"File '{file_name}' deleted successfully.", "success")
    except ClientError as e:
        flash(f"Error deleting file: {e}", "error")
```

## مشاهده لیست باکت‌ها

```py
def list_buckets():
    try:
        response = s3_client.list_buckets()
        return [bucket['Name'] for bucket in response.get('Buckets', [])]
    except NoCredentialsError:
        flash("Credentials not available.", "error")
        return []
    except ClientError as e:
        flash(f"Error listing buckets: {e}", "error")
        return []
```

## قطعه کد شامل تمامی قابلیت‌ها + مدیریت فایل

برای استفاده از تمامی قابلیت‌های بالا، می‌توانید از کد زیر استفاده کنید:

```py
from flask import Flask, render_template, request, flash
import boto3
from botocore.exceptions import NoCredentialsError, ClientError
import os

app = Flask(__name__)
app.secret_key = "your_secret_key_here"

# Load environment variables
LIARA_ENDPOINT_URL = os.getenv("LIARA_ENDPOINT_URL")
LIARA_ACCESS_KEY   = os.getenv("LIARA_ACCESS_KEY")
LIARA_SECRET_KEY   = os.getenv("LIARA_SECRET_KEY")
BUCKET_NAME        = os.getenv("BUCKET_NAME")

# Initialize S3 client
s3_client = boto3.client(
    "s3",
    endpoint_url=LIARA_ENDPOINT_URL,
    aws_access_key_id=LIARA_ACCESS_KEY,
    aws_secret_access_key=LIARA_SECRET_KEY
)

# Controller: List all buckets
def list_buckets():
    try:
        response = s3_client.list_buckets()
        return [bucket['Name'] for bucket in response.get('Buckets', [])]
    except NoCredentialsError:
        flash("Credentials not available.", "error")
        return []
    except ClientError as e:
        flash(f"Error listing buckets: {e}", "error")
        return []

# Controller: List all files in a bucket
def list_files(bucket_name):
    try:
        response = s3_client.list_objects_v2(Bucket=bucket_name)
        return [obj['Key'] for obj in response.get('Contents', [])]
    except ClientError as e:
        flash(f"Error listing files: {e}", "error")
        return []

# Controller: Upload a file
def upload_file(file, bucket_name):
    try:
        s3_client.upload_fileobj(file, bucket_name, file.filename)
        flash(f"File '{file.filename}' uploaded successfully.", "success")
    except ClientError as e:
        flash(f"Error uploading file: {e}", "error")

# Controller: Delete a file
def delete_file(bucket_name, file_name):
    try:
        s3_client.delete_object(Bucket=bucket_name, Key=file_name)
        flash(f"File '{file_name}' deleted successfully.", "success")
    except ClientError as e:
        flash(f"Error deleting file: {e}", "error")

# Controller: Generate a pre-signed URL
def generate_presigned_url(bucket_name, file_name, expiration=3600):
    try:
        url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': bucket_name, 'Key': file_name},
            ExpiresIn=expiration
        )
        return url
    except ClientError as e:
        flash(f"Error generating pre-signed URL: {e}", "error")
        return None

# Controller: Generate a permanent URL
def generate_permanent_url(bucket_name, file_name):
    return f"{LIARA_ENDPOINT_URL}/{bucket_name}/{file_name}"

# Main route
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Handle file upload
        if "file" in request.files:
            file = request.files["file"]
            if file.filename:
                upload_file(file, BUCKET_NAME)

        # Handle file deletion
        file_to_delete = request.form.get("delete_file")
        if file_to_delete:
            delete_file(BUCKET_NAME, file_to_delete)

    # Fetch bucket names and files
    buckets = list_buckets()
    files = list_files(BUCKET_NAME)

    # Generate pre-signed URLs and permanent URLs for each file
    presigned_urls = {}
    permanent_urls = {}
    for file in files:
        presigned_urls[file] = generate_presigned_url(BUCKET_NAME, file)
        permanent_urls[file] = generate_permanent_url(BUCKET_NAME, file)

    return render_template(
        "index.html",
        buckets=buckets,
        files=files,
        presigned_urls=presigned_urls,
        permanent_urls=permanent_urls
    )

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
```

همچنین، بایستی در مسیر اصلی پروژه، یک دایرکتوری به نام `templates` بسازید و درون آن، یک فایل به نام `index.html` ایجاد کنید و قطعه کد زیر را درون آن قرار دهید:

```html
<!DOCTYPE html>
<html lang="en">

<body>
    <div class="container">
        <h1>S3 File Manager</h1>

        <!-- Flash Messages -->
        {% with messages = get_flashed_messages(with_categories=true) %}
            {% if messages %}
                {% for category, message in messages %}
                    <div class="message {{ category }}">{{ message }}</div>
                {% endfor %}
            {% endif %}
        {% endwith %}

        <!-- Bucket Information -->
        ## Buckets
        - {{ bucket }}

        <!-- File Management -->
        ## Files in Bucket: {{ BUCKET_NAME }}
        <form method="POST" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button type="submit">Upload File</button>
        </form>

        ### File List
        {% if files %}
            <div>
                {% for file in files %}
                    <div class="file-item">
                        <span>{{ file }}</span>
                        <div class="file-actions">
                            [Permanent Link]({{ permanent_urls[file] }})
                            [Pre-signed Link]({{ presigned_urls[file] }})
                            <form method="POST" style="display: inline;">
                                <input type="hidden" name="delete_file" value="{{ file }}">
                                <button type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                {% endfor %}
            </div>
        {% else %}
            No files found in the bucket.
        {% endif %}
    </div>
</body>
</html>
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
