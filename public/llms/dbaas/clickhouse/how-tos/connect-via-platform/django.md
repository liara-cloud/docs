Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/django/

# اتصال به دیتابیس ClickHouse در برنامه‌های Django

برای اتصال به دیتابیس ClickHouse در برنامه‌های Django، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install clickhouse-connect python-dotenv
```

در ادامه، یک app مجزا برای دیتابیس خود ایجاد کنید:

```bash
python manage.py startapp clickhouse
```

در ادامه، بایستی app جدید را به `settings.py` اضافه کنید:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'clickhouse',
]
```

پس از آن، کافیست تا 
اطلاعات مربوط به دیتابیس خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
CLICKHOUSE_HOST=rainier.liara.cloud
CLICKHOUSE_PORT=33273
CLICKHOUSE_DATABASE=default
CLICKHOUSE_USERNAME=root
CLICKHOUSE_PASSWORD=x4y2LJvdFyG5wVO87VbXDrpg
```

در ادامه، در مسیر، `clickhouse/client.py`، قطعه کد زیر را قرار دهید:

```bash
import os
import clickhouse_connect
from dotenv import load_dotenv

load_dotenv()


client = clickhouse_connect.get_client(
    host=os.getenv("CLICKHOUSE_HOST"),
    port=int(os.getenv("CLICKHOUSE_PORT")),
    username=os.getenv("CLICKHOUSE_USERNAME"),
    password=os.getenv("CLICKHOUSE_PASSWORD"),
    database=os.getenv("CLICKHOUSE_DATABASE"),
)
```

در ادامه، در مسیر، `clickhouse/views.py`، قطعه کد زیر را قرار دهید:

```bash
from django.http import JsonResponse
from .client import client


def test_connection(request):
    try:
        result = client.query("SELECT 1")

        return JsonResponse({
            "success": True,
            "message": "ClickHouse connection successful",
            "result": result.result_rows,
        })

    except Exception as e:
        return JsonResponse(
            {
                "success": False,
                "message": "ClickHouse connection failed",
                "error": str(e),
            },
            status=500,
        )
```

سپس در مسیر، `clickhouse/urls.py`، قطعه کد زیر را قرار دهید:

```bash
from django.urls import path
from .views import test_connection


urlpatterns = [
    path(
        "test/",
        test_connection,
        name="clickhouse-test",
    ),
]
```

در نهایت، در مسیر، `project-name>/urls.py>`، قطعه کد زیر را قرار دهید:

```bash
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path(
        "clickhouse/",
        include("clickhouse.urls")
    ),
]
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید.

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/django)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
