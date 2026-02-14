Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/django/

# اتصال به ایمیل‌سرور در برنامه‌های Django

[Video link](https://media.liara.ir/django/django-email-server.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/django-getting-started/tree/email-server) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های Django، کافیست  
تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در ادامه نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=465
MAIL_USER=hopeful_zhukovsky_9daqpv
MAIL_PASSWORD=fbef30d7-f852-428e-9573-bc73381c7d4d
MAIL_FROM_ADDRESS=info@example.com
```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

حال، بایستی ماژول مورد نیاز برنامه را با اجرای دستور زیر نصب کنید:  

```bash
pip install python-decouple
```

در ادامه، کافیست قطعه کدی مشابه قطعه کد زیر را به فایل `settings.py` خود، اضافه کنید:

```py
from decouple import config

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = config('MAIL_HOST')
EMAIL_PORT = config('MAIL_PORT', cast=int)
EMAIL_HOST_USER = config('MAIL_USER')
EMAIL_HOST_PASSWORD = config('MAIL_PASSWORD')
EMAIL_USE_TLS = False # Disable STARTTLS 
EMAIL_USE_SSL = True  # Force TLS
MAIL_FROM = f"{config('MAIL_FROM_NAME')} <{config('MAIL_FROM_ADDRESS')}>"
```

تمامی کارها انجام شده است و شما می‌توانید از ایمیل‌سرور خود استفاده کنید؛ به عنوان مثال، می‌توانید یک app جدید ایجاد  
کنید و `views.py` آن را همانند قطعه کد زیر، بنویسید:  

```py
from django.core.mail import EmailMessage
from django.http import JsonResponse

def send_email(request):
    subject = "Test Email"
    message = "This is a test email sent using TLS."
    recipient_list = ["recipient@example.com"]
    headers = {"x-liara-tag": "test-tag"}  # Custom headers

    try:
        email = EmailMessage(
            subject=subject,
            body=message,
            from_email=None,  # Uses MAIL_FROM from settings.py
            to=recipient_list,
            headers=headers,
        )
        email.send()
        return JsonResponse({"status": "success", "message": "Email sent successfully!"})
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)})
```

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های Django، کافیست  
تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در ادامه نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USER=hopeful_zhukovsky_9daqpv
MAIL_PASSWORD=fbef30d7-f852-428e-9573-bc73381c7d4d
MAIL_FROM_ADDRESS=info@example.com
```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

حال، بایستی قطعه کدی مشابه قطعه کد زیر را به فایل `settings.py` خود، اضافه کنید:

```py
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.getenv('MAIL_HOST')
EMAIL_PORT = os.getenv('MAIL_PORT')
EMAIL_HOST_USER = os.getenv('MAIL_USER')
EMAIL_HOST_PASSWORD = os.getenv('MAIL_PASSWORD')
EMAIL_USE_TLS = True  # Use STARTTLS encryption
EMAIL_FROM_ADDRESS = os.getenv('MAIL_FROM_ADDRESS')
```

<!-- > برای ارسال امن‌تر ایمیل‌ها، می‌توانید مقدار Port را بر روی 465 قرار دهید تا
> به جای STARTTLS، از TLS استفاده شود. -->

تمامی کارها انجام شده است و شما می‌توانید از ایمیل‌سرور خود استفاده کنید؛ به عنوان مثال، می‌توانید یک app جدید ایجاد  
کنید و `views.py` آن را همانند قطعه کد زیر، بنویسید:  

```py
from django.core.mail import EmailMessage
from django.http import HttpResponse
from django.conf import settings

def send_test_email(request):
    subject = 'Test Email from Django'
    message = 'This is a test email sent from Django using SMTP on Liara server.'
    recipient_list = ['recipient@example.com']
    
    email = EmailMessage(
        subject,
        message,
        settings.EMAIL_FROM_ADDRESS,
        recipient_list,
        headers={"x-liara-tag": "test-tag"} # using liara tag feature,
    )

    
    email.send(fail_silently=False)
    return HttpResponse('Test email sent successfully!') 
```

## HTTP

برای ارسال ایمیل با استفاده از پروتکل HTTP، به [API لیارا](https://docs.liara.ir/references/api/about/) و [آیدی ایمیل‌سرور](https://docs.liara.ir/email-server/details/mail-id)  
و [نشانی ایمیل‌سرور](https://docs.liara.ir/email-server/how-tos/add-account) نیاز خواهید داشت.  
برای این‌کار، اطلاعات مربوطه را مشابه زیر به متغیرهای محیطی برنامه خود، اضافه کنید:

```bash
MAIL_SERVER_ID=***
MAIL_SERVICE_URL=https://mail-service.iran.liara.ir/api/v1/mails
API_LIARA_TOKEN=***
MAIL_FROM=info@example.com
```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در ادامه، در فایل `settings.py` قطعه کد زیر را قرار دهید تا متغیرهای محیطی، خوانده شوند:  

```bash
import os
# from dotenv import load_dotenv # Install python-dotenv package and uncomment these two lines if using .env
# load_dotenv()

MAIL_SERVER_ID = os.getenv("MAIL_SERVER_ID")
MAIL_SERVICE_URL = os.getenv("MAIL_SERVICE_URL")
LIARA_API_TOKEN = os.getenv("LIARA_API_TOKEN")
MAIL_FROM = os.getenv("MAIL_FROM")
```

سپس، در app موردنظرتان، یک فایل به نام `utils.py` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```python
import requests
import os
from django.conf import settings

def send_email(to, subject, text):
    url = f"{settings.MAIL_SERVICE_URL}/{settings.MAIL_SERVER_ID}/messages"

    headers = {
        "Authorization": f"Bearer {settings.LIARA_API_TOKEN}",
        "Content-Type": "application/json",
        "x-liara-tag": "django_email"  # Custom tag for tracking
    }

    data = {
        "text": text,
        "subject": subject,
        "to": to,
        "from": settings.MAIL_FROM,
        "attachments": []
    }

    try:
        response = requests.post(url, json=data, headers=headers)
        response.raise_for_status()  # Raises an error for HTTP errors
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}
```

در ادامه، در فایل `views.py` قطعه کد زیر را قرار دهید (یا به آن اضافه کنید):

```python
from django.http import JsonResponse
from .utils import send_email

def send_test_email(request):
    response = send_email("receiver@example.com", "Test Email from Django", "This is a test email from Django using Liara Mail Service.")
    return JsonResponse(response)
```

در نهایت، در فایل `urls.py`، مسیری برای این view ایجاد کنید:

```python
from <your-app-name>.views import send_test_email

urlpatterns = [
     path('send-email/', send_test_email, name='send_email'),
]
```

اکنون می‌توانید پس از اجرای برنامه و با اجرای دستور زیر، اقدام به ارسال ایمیل بفرمایید:

```bash
curl http://127.0.0.1:8000/send-email/
```

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
