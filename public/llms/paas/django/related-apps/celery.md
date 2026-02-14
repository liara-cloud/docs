Original link: https://docs.liara.ir/paas/django/related-apps/celery/

# استقرار برنامه‌های Django وابسته به Celery در لیارا

[Celery](https://docs.celeryq.dev/en/stable/) یک کتابخانه مدیریت صف و پردازش‌های ناهمزمان در پایتون است که به شما امکان می‌دهد تا وظایف (tasks) سنگین و زمان‌بر را به صورت پس‌زمینه و مستقل از اجرای اصلی برنامه، انجام دهید. این ابزار برای اجرای وظایف به صورت توزیع‌شده و با قابلیت زمان‌بندی طراحی شده است و معمولاً با Django برای مدیریت وظایف پس‌زمینه مثل ارسال ایمیل، پردازش داده‌ها و سایر عملیات طولانی ترکیب می‌شود.  
طبق [مستندات شروع به کار با Celery در برنامه‌های Django](https://docs.celeryproject.org/en/stable/django/first-steps-with-django.html)، فرض می‌شود که شما برنامه‌ای با ساختار زیر دارید:

```bash
- proj/
  - manage.py
  - proj/
    - __init__.py
    - settings.py
    - urls.py
```

توصیه می‌شود در ابتدا یک ماژول جدید به نام `celery.py` در مسیر proj/proj ایجاد کنید و قطعه کدی مشابه قطعه کد زیر را، در آن قرار دهید:

```python
# proj/proj/celery.py
import os
from celery import Celery
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'proj.settings')

app = Celery('proj')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
```

حال برای اطمینان از import شدن ماژول `celery.py` در زمان اجرای `shared_task` توسط فریم‌ورک Django، ماژول `init___.py__` را در مسیر proj/proj ایجاد کرده و قطعه کد زیر را در این فایل قرار دهید:

```python
from .celery import app as celery_app

__all__ = ('celery_app',)
```

در قدم بعد باید پیکربندی‌های مورد نیاز برای راه‌اندازی Celery را در انتهای فایل `settings.py` پروژه وارد کنید:

```python
# Celery Configuration Options

BROKER_URL = 'redis://:a*********3t@tommy.iran.liara.ir:34470/0'
CELERY_RESULT_BACKEND = 'redis://:a*********3t@tommy.iran.liara.ir:34470/0'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'Asia/Tehran'
```

با قرار داشتن قطعه کد `()app.autodiscover_tasks` در فایل `proj/proj/celery.py` این امکان برای شما فراهم است که task های مورد نظر خود را در فایل `tasks.py` هر App به‌صورت جداگانه تعریف کنید؛ به عنوان مثال:

```bash
- app1/
    - tasks.py
    - models.py
- app2/
    - tasks.py
    - models.py
```

برای مثال، می‌توانید با استفاده از دکوراتور `shared_task@` به‌شکل زیر، taskهای خود را تعریف کنید:

```python
# app1/tasks.py

from celery import shared_task

@shared_task
def add(x, y):
    return x + y
```

درنهایت قبل از استقرار این پروژه در لیارا نیاز است که فایل `supervisor.conf` را در مسیر اصلی پروژه ایجاد کرده و پیکربندی زیر را در این فایل قرار دهید:

```conf
[program:celery-worker]
process_name=%(program_name)s_%(process_num)02d
command=celery -A proj worker -l INFO
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
startsecs=10
stopwaitsecs=600
redirect_stderr=true
stdout_logfile=/tmp/worker.log
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
