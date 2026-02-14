Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/django/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های Django

[Video link](https://media.liara.ir/django/django-object-storage.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/django-getting-started/tree/upload-s3) قابل مشاهده و دسترسی هستند.

برای استفاده از Object Storage در برنامه‌های Django، می‌توانید از  
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

در مرحله‌ی آخر باید  
قطعه کد زیر را به فایل `settings.py` برنامه‌تان، اضافه کنید:

```py
# AWS S3 Settings for Liara
AWS_ACCESS_KEY_ID = os.getenv('LIARA_ACCESS_KEY')
AWS_SECRET_ACCESS_KEY = os.getenv('LIARA_SECRET_KEY')
AWS_STORAGE_BUCKET_NAME = os.getenv('BUCKET_NAME')
AWS_S3_ENDPOINT_URL = os.getenv('LIARA_ENDPOINT_URL')

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
```

تمامی کارها انجام شده است و می‌توانید از Object Storage در برنامه خود، استفاده کنید؛  
در نظر داشته باشید که با انجام کار فوق،  
فایل های آپلود شده به طور خودکار در ذخیره‌سازی ابری لیارا قرار می‌گیرند.  
در ادامه، مثال‌هایی برای استفاده از Object Storage در Django آورده شده است.

در ابتدا، با استفاده از دستور زیر، یک app جدید برای کار با Object Storage بسازید:

```py
python manage.py startapp object_storage
```

سپس، بایستی در فایل `views.py`، قطعه کد زیر را، قرار دهید:

```py
import boto3
from django.conf import settings
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Initialize S3 Client
def get_s3_client():
    return boto3.client(
        's3',
        endpoint_url=settings.AWS_S3_ENDPOINT_URL,
        aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
        aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY
    )
```

اکنون، می‌توانید در فایل `views.py`، بنا به نیاز خود، قطعه کدهای زیر را، به قطعه کد فعلی، اضافه کنید.

## نمونه کد آپلود فایل

```py
@csrf_exempt
def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        s3_client = get_s3_client()
        file = request.FILES['file']
        try:
            s3_client.upload_fileobj(file, settings.AWS_STORAGE_BUCKET_NAME, file.name)
            return JsonResponse({'message': f'{file.name} uploaded successfully.'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)
```

## نمونه کد لیست کردن فایل‌ها

```py
def list_files(request):
    s3_client = get_s3_client()
    try:
        response = s3_client.list_objects_v2(Bucket=settings.AWS_STORAGE_BUCKET_NAME)
        files = [obj['Key'] for obj in response.get('Contents', [])]
        return JsonResponse({'files': files})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
```

## نمونه کد حذف فایل

```py
@csrf_exempt
def delete_file(request):
    if request.method == 'POST':
        file_name = request.POST.get('file_name')
        if not file_name:
            return JsonResponse({'error': 'File name is required'}, status=400)
        s3_client = get_s3_client()
        try:
            s3_client.delete_object(Bucket=settings.AWS_STORAGE_BUCKET_NAME, Key=file_name)
            return JsonResponse({'message': f'{file_name} deleted successfully.'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
```

## نمونه کد ساخت لینک موقت دانلود فایل

```py
def generate_presigned_url(request):
    file_name = request.GET.get('file_name')
    if not file_name:
        return JsonResponse({'error': 'File name is required'}, status=400)
    s3_client = get_s3_client()
    try:
        url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': settings.AWS_STORAGE_BUCKET_NAME, 'Key': file_name},
            ExpiresIn=3600  # URL valid for 1 hour
        )
        return JsonResponse({'url': url})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
```

## نمونه کد برای مدیریت فایل‌ها

```py
def manage_files(request):
    context = {
        'AWS_STORAGE_BUCKET_NAME': settings.AWS_STORAGE_BUCKET_NAME,
        'AWS_S3_ENDPOINT_URL': settings.AWS_S3_ENDPOINT_URL,
    }
    return render(request, 'manage_files.html', context)
```

## تجمیع قابلیت‌ها در یک فایل

برای استفاده از تمامی قابلیت‌های فوق، بایستی در ابتدا، به فایل `urls.py`، قطعه کد زیر را اضافه کنید:

```py
from django.urls import path
from object_storage import views

urlpatterns = [
    path('', views.manage_files, name='manage_files'),
    path('api/files/list/', views.list_files, name='list_files'),
    path('api/files/upload/', views.upload_file, name='upload_file'),
    path('api/files/delete/', views.delete_file, name='delete_file'),
    path('api/files/presigned-url/', views.generate_presigned_url, name='generate_presigned_url'),
]
```

در ادامه، در app ساخته شده، یک دایرکتوری به نام `templates` بسازید و درون آن، یک فایل به نام `manage_files.html` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```py
<!DOCTYPE html>
<html lang="en">

<body>
    <h1>File Management</h1>

    <!-- Upload Form -->
    ## Upload File
    <form id="uploadForm" enctype="multipart/form-data">
        <input type="file" name="file" required>
        <button type="submit">Upload</button>
    </form>
    <div id="uploadMessage"></div>

    <!-- File List -->
    ## File List
    <ul id="fileList"></ul>

    <script>
        $(document).ready(function () {
            // Load file list
            function loadFiles() {
                $.get('/api/files/list/', function (data) {
                    $('#fileList').empty();
                    data.files.forEach(function (file) {
                        const listItem = `
                            <li>
                                ${file}
                                <button class="delete-btn" data-file="${file}">Delete</button>
                                <button class="presigned-btn" data-file="${file}">Pre-Signed URL</button>
                                [Permanent URL](${generatePermanentUrl(file)})
                            </li>
                        `;
                        $('#fileList').append(listItem);
                    });
                });
            }

            // Generate permanent URL
            function generatePermanentUrl(fileName) {
                const bucketName = "{{ AWS_STORAGE_BUCKET_NAME }}";
                const endpointUrl = "{{ AWS_S3_ENDPOINT_URL }}";
                return `${endpointUrl}/${bucketName}/${fileName}`;
            }

            // Upload file
            $('#uploadForm').on('submit', function (e) {
                e.preventDefault();
                var formData = new FormData(this);
                $.ajax({
                    url: '/api/files/upload/',
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        $('#uploadMessage').text(response.message);
                        loadFiles();
                    },
                    error: function (xhr) {
                        $('#uploadMessage').text('Error: ' + xhr.responseJSON.error);
                    }
                });
            });

            // Delete file
            $(document).on('click', '.delete-btn', function () {
                const fileName = $(this).data('file');
                $.post('/api/files/delete/', { file_name: fileName }, function (response) {
                    alert(response.message);
                    loadFiles();
                }).fail(function (xhr) {
                    alert('Error: ' + xhr.responseJSON.error);
                });
            });

            // Generate pre-signed URL
            $(document).on('click', '.presigned-btn', function () {
                const fileName = $(this).data('file');
                $.get('/api/files/presigned-url/', { file_name: fileName }, function (response) {
                    window.open(response.url, '_blank');
                }).fail(function (xhr) {
                    alert('Error: ' + xhr.responseJSON.error);
                });
            });

            // Initial file load
            loadFiles();
        });
    </script>
</body>
</html>
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
