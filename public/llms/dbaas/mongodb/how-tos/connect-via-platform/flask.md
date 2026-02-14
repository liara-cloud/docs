Original link: https://docs.liara.ir/dbaas/mongodb/how-tos/connect-via-platform/flask/

# اتصال به دیتابیس MongoDB در برنامه‌های Flask

برای اتصال به دیتابیس MongoDB در برنامه‌های Flask، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install pymongo
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MONGO_URI=mongodb://root:AOnj2OEXiUkgNk2B1tL23gA9@bromo.liara.cloud:30126/my-app?authSource=admin
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید.  
به عنوان مثال، می‌توانید  
برای اتصال به دیتابیس، از قطعه کد زیر، استفاده کنید:

```python
from flask import Flask
from pymongo import MongoClient
import os

app = Flask(__name__)

mongodb_uri = os.getenv("MONGO_URI")

mongodb_client = MongoClient(mongodb_uri, maxPoolSize=10, minPoolSize=10)

@app.route('/')
def show_connection_status():
    try:
        database = mongodb_client['test']
        collection = database['test']
        data = {'name': 'John Doe', 'age': 30, 'city': 'New York'}
        collection.insert_one(data)
        return "connected"
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")
        return "failed to connect"

if __name__ == '__main__':
    app.run(debug=True)
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
