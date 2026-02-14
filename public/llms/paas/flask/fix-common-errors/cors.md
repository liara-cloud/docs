Original link: https://docs.liara.ir/paas/flask/fix-common-errors/cors/

# رفع خطای CORS در برنامه‌های Flask

خطای CORS (Cross-Origin Resource Sharing) یک محدودیت امنیتی در مرورگرها است که جلوی درخواست‌های HTTP از منابع مختلف را می‌گیرد.  
این خطا ممکن است زمانی رخ دهد که سعی کنید از یک دامنه یا پورت متفاوت به سروری دیگر درخواست ارسال کنید، و معمولاً با پیام خطایی شبیه به **Access-Control-Allow-Origin** در مرورگر مواجه خواهید شد. در ادامه، به رفع این خطا، پرداخته شده است:

درصورتی که پس از نصب و پیکربندی پکیج [Flask-Cors](https://pypi.org/project/Flask-Cors/) با خطای CORS مواجه شده‌اید باید صحت resources را مورد بررسی قرار دهید:

```python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
