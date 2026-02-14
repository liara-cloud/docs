Original link: https://docs.liara.ir/dbaas/elastic-search/how-tos/connect-via-platform/django/

# اتصال به دیتابیس ElasticSearch در برنامه‌های Django

برای اتصال به دیتابیس ElasticSearch در برنامه‌های Django، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install elasticsearch
```

سپس، در فایل `settings.py`، تنظیمات مربوط به دیتابیس را اضافه کنید:

```python
 # other codes ...
ELASTICSEARCH_DSL = {
    'default': {
        'hosts': os.getenv("ELASTICSEARCH_URI"),
    },
}
# other codes ...
```

پس از آن، کافیست تا 
اطلاعات مربوط به دیتابیس خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:  

```bash
ELASTICSEARCH_URI=http://elastic:G4bqHLMHvZKMscUy8OhLomK1@bromo.liara.cloud:328
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید با اجرای دستور زیر، یک application جدید ایجاد کنید:

```bash
python manage.py startapp elasticsearch_app
```

سپس، این application جدید را به بخش `INSTALLED_APPS` در `settings.py`، اضافه کنید:

```python
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'elasticsearch_app', # add this
]
```

در ادامه، در دایرکتوری `elasticsearch_app`، یک فایل جدید به نام `elastic_model.py` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```python
from elasticsearch import Elasticsearch
from django.conf import settings

class ElasticModel:
    def __init__(self):
        self.client = Elasticsearch(settings.ELASTICSEARCH_DSL['default']['hosts'])
        self.index = 'test_index'

    def create_index(self):
        if not self.client.indices.exists(index=self.index):
            self.client.indices.create(index=self.index)

    def insert_data(self, data):
        self.client.index(index=self.index, document=data)

    def read_data(self):
        response = self.client.search(index=self.index, body={"query": {"match_all": {}}})
        return response['hits']['hits']
```

در ادامه، در فایل `elasticsearch_app/views.py` قطعه کد زیر را وارد کنید تا اتصال به دیتابیس، بررسی شود:

```python
from django.http import JsonResponse
from .elastic_model import ElasticModel

def elasticsearch_insert_read(request):
    es_model = ElasticModel()
    es_model.create_index()
    
    # Insert data
    data = {
        'name': 'Sample Data',
        'description': 'This is a sample data entry for Elasticsearch.'
    }
    es_model.insert_data(data)
    
    # Read data
    results = es_model.read_data()
    
    return JsonResponse(results, safe=False)
```

سپس، بایستی در دایرکتوری `elasticsearch_app`، یک فایل به نام `urls.py` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```python
from django.urls import path
from .views import elasticsearch_insert_read

urlpatterns = [
    path('', elasticsearch_insert_read, name='elasticsearch_insert_read'),
]
```

در نهایت، می‌توانید در فایل `urls.py` موجود در دایرکتوری اصلی پروژه، قطعه کد زیر را اضافه کنید:

```python
from django.urls import include, path

urlpatterns = [
   
    path('elasticsearch/', include('elasticsearch_app.urls')),
]
```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `elasticsearch/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
