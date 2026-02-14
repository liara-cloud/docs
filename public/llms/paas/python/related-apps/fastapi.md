Original link: https://docs.liara.ir/paas/python/related-apps/fastapi/

# استقرار برنامه‌های FastAPI در لیارا

[FastAPI](https://fastapi.tiangolo.com/) یک فریم‌ورک وب سریع و مدرن برای ساخت APIهای وب با استفاده از زبان برنامه‌نویسی Python است. این فریم‌ورک بر پایه استانداردهای OpenAPI و JSON Schema ساخته و بهینه‌سازی شده است تا همزمان با حفظ عملکرد بالا، نوشتن کدهای سریع و ساده را ممکن سازد.

از ویژگی‌های مهم FastAPI می‌توان به پشتیبانی از تایپ‌های پایتون، ایجاد مستندات خودکار، و عملکرد فوق‌العاده بالا به لطف استفاده از Starlette و Pydantic اشاره کرد. این فریم‌ورک برای ساخت APIهای RESTful و GraphQL بسیار مناسب است و به توسعه‌دهندگان کمک می‌کند تا کدهای تمیز و مقیاس‌پذیر بنویسند.


```txt
.
├── your-app                     # دایرکتوری برنامه اصلی
│   ├── static                   # پوشه شامل فایل‌های استاتیک (اختیاری)
│   │   ├── some_page.html   
│   │   └── media.png      
│   ├── main.py                  # فایل اصلی پروژه
│   ├── __init__.py              # یک فایل خالی و الزامی برای پروژه
│   ├── crud.py                  # برنامه‌های دیگر (اختیاری)
│   ├── models.py                # برنامه‌های دیگر (اختیاری)
│   ├── schemas.py               # برنامه‌های دیگر (اختیاری)
│   └── database.py              # برنامه‌های دیگر (اختیاری)
├── Dockerfile                   # داکرفایل برای استقرار برنامه در لیارا 
├── requirements.txt             # لیست وابستگی‌ها و ماژول‌های مورد نیاز برنامه
└── .dockerignore                # نادیده گرفتن فایل‌های اضافی
```

شما می‌توانید برنامه‌های FastAPI خود را با [ایجاد برنامه‌های Python](../../how-tos/create-app) در لیارا، مستقر کنید.  
حتماً در نظر داشته باشید که در مسیر اصلی پروژه‌تان، فایل `requirements.txt` شامل پکیج‌های موردنیاز برنامه، وجود داشته باشد.  
برای ایجاد فایل `requirements.txt` کافیست تا در محیط مجازی پایتونی خود، دستور زیر را اجرا کنید تا این فایل، برای‌تان ایجاد شود:

```dockerfile
pip freeze > requirements.txt
```

```dockerfile
# Dockerfile

# Using Python base image version 3.11
FROM python:3.11 

# Upgrade pip
RUN pip install --upgrade pip

# Create working directory /app
WORKDIR /app

# Copy all project files to the working directory
COPY . /app

# Install project dependencies from requirements.txt
RUN pip install -r requirements.txt

# Set the command to run the project using uvicorn
CMD ["uvicorn", "your-app.main:app", "--host", "0.0.0.0", "--port", "80"]
```

در قطعه کد بالا در دستور `CMD`، به جای `your-app` نام دایرکتوری خود را وارد کنید. در انتها با اجرای دستور زیر، برنامه خود را در لیارا، مستقر کنید:

در نهایت کافیست تا با اجرای دستور زیر، برنامه FastAPI خود را در لیارا، مستقر کنید:

```bash
liara deploy --port 80 --platform python
```

در نظر داشته باشید که اگر در برنامه از ماژول خاصی استفاده می‌کنید یا نیازمند یک پکیج سیستمی هستید که به صورت پیش‌فرض، نصب نیست؛ بایستی دستورات مربوط به نصب آن را با [هوک‌ها](https://docs.liara.ir/paas/python/how-tos/use-hooks/) مشخص کنید.

> یک پروژه FastAPI نمونه آماده استقرار در [اینجا](https://github.com/liara-cloud/fastapi-getting-started) قرار دارد که می‌توانید از آن، استفاده کنید.

## اتصال برنامه FastAPI به دیتابیس MSSQL

برای اتصال برنامه خود به دیتابیس MSSQL در لیارا، بایستی در ابتدا، طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی مربوط به دیتابیس خود را، به برنامه، اضافه کنید؛ به عنوان مثال:

```bash
DB_USER=sa
DB_NAME=my_db
DB_HOST=bromo.liara.cloud
DB_PORT=31858
DB_PASS=yw8FVaUqlvliRFxmcp7VnDUG
```

در ادامه، می‌توانید مانند قطعه کد زیر، به دیتابیس خود متصل شوید:

```py
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

DB_USER=os.getenv("DB_USER")
DB_NAME=os.getenv("DB_NAME")
DB_HOST=os.getenv("DB_HOST")
DB_PORT=os.getenv("DB_PORT")
DB_PASS=os.getenv("DB_PASS")

SQLALCHEMY_DATABASE_URL = (
    f"mssql+pyodbc://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}?driver=ODBC+Driver+18+for+SQL+Server"
)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    # connect_args={"check_same_thread": False},  # only needed for SQLite
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
