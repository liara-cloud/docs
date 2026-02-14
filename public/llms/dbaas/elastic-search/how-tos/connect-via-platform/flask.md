Original link: https://docs.liara.ir/dbaas/elastic-search/how-tos/connect-via-platform/flask/

# اتصال به دیتابیس ElasticSearch در برنامه‌های Flask

برای اتصال به دیتابیس ElasticSearch در برنامه‌های Flask، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install elasticsearch
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:  

```bash
ELASTIC_URI=http://elastic:G4bqHLMHvZKMscUy8OhLomK1@bromo.liara.cloud:328
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید  
برای اتصال به دیتابیس، از قطعه کد زیر، استفاده کنید:

```python
from flask import Flask, jsonify
from elasticsearch import Elasticsearch, TransportError
import os

app = Flask(__name__)

ELASTIC_URI = os.getenv('ELASRIC_URI')
es_client = Elasticsearch(ELASTIC_URI)

@app.route('/')
def check_elasticsearch_connection():
    try:
        if es_client.ping():
            return jsonify({'status': 'success', 'message': 'Connected to Elasticsearch'})
        else:
            return jsonify({'status': 'error', 'message': 'Failed to connect to Elasticsearch'})
    except TransportError as e:
        return jsonify({'status': 'error', 'message': f'Error connecting to Elasticsearch: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True)
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
