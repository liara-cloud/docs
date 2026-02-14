Original link: https://docs.liara.ir/paas/docker/related-apps/fastapi-mssql/



# اتصال به دیتابیس MSSQL در برنامه‌های FastAPI



[FastAPI](https://fastapi.tiangolo.com/) یک فریم‌ورک وب سریع و مدرن برای ساخت APIهای وب با استفاده از زبان برنامه‌نویسی Python است. این فریم‌ورک بر پایه استانداردهای OpenAPI و JSON Schema ساخته و بهینه‌سازی شده است تا همزمان با حفظ عملکرد بالا، نوشتن کدهای سریع و ساده را ممکن سازد.

از ویژگی‌های مهم FastAPI می‌توان به پشتیبانی از تایپ‌های پایتون، ایجاد مستندات خودکار، و عملکرد فوق‌العاده بالا به لطف استفاده از Starlette و Pydantic اشاره کرد. این فریم‌ورک برای ساخت APIهای RESTful و GraphQL بسیار مناسب است و به توسعه‌دهندگان کمک می‌کند تا کدهای تمیز و مقیاس‌پذیر بنویسند.







شما می‌توانید برنامه‌های FastAPI خود را با [ایجاد برنامه‌های Docker](../../how-tos/create-app) در لیارا، مستقر کنید.
در ابتدا در نظر داشته باشید که دایرکتوری پروژه شما، ساختاری مشابه با ساختار زیر داشته باشد:


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


برای ایجاد فایل `requirements.txt` کافیست تا در محیط مجازی پایتونی خود، دستور زیر را اجرا کنید تا این فایل، برای‌تان ایجاد شود:


```dockerfile
pip freeze > requirements.txt
```


در ادامه، بایستی درون `Dockerfile`، قطعه کد زیر را، قرار دهید:


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


```dockerfile
liara deploy --port 80 --platform docker
```


در نظر داشته باشید که اگر در برنامه از ماژول خاصی استفاده می‌کنید یا نیازمند یک پکیج سیستمی هستید که به صورت پیش‌فرض، نصب نیست؛ بایستی دستورات مربوط به نصب آن را در `Dockerfile` مشخص کنید.





## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
