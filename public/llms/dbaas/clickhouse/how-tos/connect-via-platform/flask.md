Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/flask/

# اتصال به دیتابیس ClickHouse در برنامه‌های Flask

برای اتصال به دیتابیس ClickHouse در برنامه‌های Flask، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install clickhouse-connect
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

سپس، در مسیر `clickhouse.py`، قطعه کد زیر را قرار دهید:

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

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید  
برای اتصال به دیتابیس، از قطعه کد زیر، استفاده کنید:

```python
from flask import Flask, jsonify
from clickhouse import client

app = Flask(__name__)


@app.route("/clickhouse-test")
def clickhouse_test():

    try:
        result = client.query("SELECT 1")

        return jsonify({
            "success": True,
            "message": "ClickHouse connection successful",
            "result": result.result_rows
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "message": "ClickHouse connection failed",
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
```

اکنون، کافیست تا وارد مسیر `clickhouse-test/` در مرورگر خود شوید تا تست اتصال، انجام شود.  

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/flask)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
