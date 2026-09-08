Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/python/

# اتصال به دیتابیس ClickHouse در برنامه‌های Python

برای اتصال به دیتابیس ClickHouse در برنامه‌های Python، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install clickhouse-connect 
```

در ادامه، بایستی متغیر محیطی مربوط به دیتابیس را، به برنامه خود اضافه کنید؛ به عنوان مثال: 

```bash
CLICKHOUSE_HOST=rainier.liara.cloud
CLICKHOUSE_PORT=33273
CLICKHOUSE_DATABASE=default
CLICKHOUSE_USERNAME=root
CLICKHOUSE_PASSWORD=x4y2LJvdFyG5wVO87VbXDrpg
```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید: 

```python
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

try:
    result = client.query("SELECT 1")

    print({
        "success": True,
        "message": "ClickHouse connection successful",
        "result": result.result_rows
    })

except Exception as e:
    print({
        "success": False,
        "message": "ClickHouse connection failed",
        "error": str(e)
    })
```

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/python)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
