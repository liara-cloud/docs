Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/django/

# اتصال به RabbitMQ در برنامه‌های Django

برای اتصال به RabbitMQ در برنامه‌های Django، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install pika python-dotenv
```

در ادامه، بایستی در فایل `settings.py` تنظیمات مربوط به بارگذاری متغیرهای محیطی را وارد کنید: 

```python
# other codes ...
from dotenv import load_dotenv
load_dotenv()
# other codes ...
```

پس از آن، کافیست تا  
اطلاعات مربوط به RabbitMQ خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
RABBITMQ_HOST=fitz-roy.liara.cloud
RABBITMQ_PORT=32923
RABBITMQ_USER=root
RABBITMQ_PASS=63LVuatIrWWajE7gxSj20gHL

```

در ادامه، می‌توانید در ریشه پروژه یا در یکی Applicationهای تعریف شده‌تان، یک فایل به نام `rabbitmq_utils.py` ایجاد کرده و قطعه کد زیر را در آن، قرار دهید:

```py
import os
import pika
from dotenv import load_dotenv

load_dotenv()

RABBITMQ_HOST = os.getenv('RABBITMQ_HOST')
RABBITMQ_PORT = int(os.getenv('RABBITMQ_PORT'))
RABBITMQ_USER = os.getenv('RABBITMQ_USER')
RABBITMQ_PASS = os.getenv('RABBITMQ_PASS')

def check_rabbitmq_connection():
    try:
        credentials = pika.PlainCredentials(RABBITMQ_USER, RABBITMQ_PASS)
        parameters  = pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT, credentials=credentials)

        connection = pika.BlockingConnection(parameters)
        print("connection successful")

        
        connection.close()
    except Exception as e:
        print("connection failed, error:", e)

```

سپس، کافیست تا یک فایل به نام `views.py` در ریشه پروژه ایجاد کنید و قطعه کد زیر را در آن، قرار دهید: 

```bash
from django.http import HttpResponse
from .rabbitmq_utils import check_rabbitmq_connection

def test_rabbitmq_connection(request):
    check_rabbitmq_connection()
    return HttpResponse("RabbitMQ Connection Checked")

```

پس از آن، می‌توانید قطعه کد زیر را به فایل `urls.py` اضافه کنید: 

```py
from . import views

urlpatterns = [
    path('test-rabbitmq/', views.test_rabbitmq_connection),
]
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به RabbitMQ، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `test-rabbitmq/` وضعیت اتصال به خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
