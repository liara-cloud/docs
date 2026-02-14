Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/flask/

# اتصال به RabbitMQ در برنامه‌های Flask

برای اتصال به  RabbitMQ در برنامه‌های Flask، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install pika python-dotenv
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

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از RabbitMQ خود استفاده کنید. به عنوان مثال، می‌توانید  
می‌توانید برای اتصال به RabbitMQ، مانند قطعه کد زیر، عمل کنید:

```python
from flask import Flask
import os
import pika
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

RABBITMQ_HOST = os.getenv('RABBITMQ_HOST')
RABBITMQ_PORT = int(os.getenv('RABBITMQ_PORT'))
RABBITMQ_USER = os.getenv('RABBITMQ_USER')
RABBITMQ_PASS = os.getenv('RABBITMQ_PASS')

def check_rabbitmq_connection():
    try:
        credentials = pika.PlainCredentials(RABBITMQ_USER, RABBITMQ_PASS)
        parameters = pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT, credentials=credentials)

        connection = pika.BlockingConnection(parameters)
        print("connection successful")

        connection.close()
        return "connection successful"
    except Exception as e:
        print("connection failed, error: ", e)
        return f"connection failed, error: {e}"

@app.route('/test-rabbitmq')
def test_rabbitmq_connection():
    result = check_rabbitmq_connection()
    return result

if __name__ == '__main__':
    app.run(debug=True)
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
