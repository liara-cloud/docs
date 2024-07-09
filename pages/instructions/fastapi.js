import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های FastAPI - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="fastapi" />
      <div className="page-title">
        <h1>استقرار برنامه‌های FastAPI</h1>
        <span className="page-description">(FastAPI Apps)</span>
      </div>
    </div>

    <p>
      <a href="https://fastapi.tiangolo.com/" target="_blank">
        FastAPI
      </a>{" "}
      یک فریم‌ورک وب سریع و مدرن برای ساخت APIهای وب با استفاده از زبان
      برنامه‌نویسی Python است. این فریم‌ورک بر پایه استانداردهای OpenAPI و JSON
      Schema ساخته و بهینه‌سازی شده است تا همزمان با حفظ عملکرد بالا، نوشتن
      کدهای سریع و ساده را ممکن سازد.
    </p>
    <p>
      از ویژگی‌های مهم FastAPI می‌توان به پشتیبانی از تایپ‌های پایتون، ایجاد
      مستندات خودکار، و عملکرد فوق‌العاده بالا به لطف استفاده از Starlette و
      Pydantic اشاره کرد. این فریم‌ورک برای ساخت APIهای RESTful و GraphQL بسیار
      مناسب است و به توسعه‌دهندگان کمک می‌کند تا کدهای تمیز و مقیاس‌پذیر
      بنویسند.
    </p>

    <p>
      برای استقرار برنامه‌های FastAPI در لیارا، بایستی یک{" "}
      <a href="/app-deploy/docker/getting-started">برنامه داکر</a> ایجاد کنید.
      در نظر داشته باشید که پوشه پروژه‌تان باید ساختاری مشابه با ساختار زیر
      داشته باشد:
    </p>

    <Highlight className="plaintext">
      {`.
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
└── .dockerignore                # نادیده گرفتن فایل‌های اضافی`}
    </Highlight>

    <p>
      برای ایجاد فایل <span className="code">requirements.txt</span> کافیست تا
      در محیط مجازی پایتونی خود، دستور زیر را اجرا کنید تا این فایل، برای‌تان
      ایجاد شود:
    </p>
    <Highlight className="bash">{`pip freeze > requiremnets.txt`}</Highlight>

    <p>
      در ادامه، بایستی درون <span className="code">Dockerfile</span>، قطعه کد
      زیر را، قرار دهید:
    </p>
    <Highlight className="dockerfile">
      {`# Dockerfile

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
CMD ["uvicorn", "your-app.main:app", "--host", "0.0.0.0", "--port", "80"]`}
    </Highlight>

    <p>
      در قطعه کد بالا در دستور <span className="code">CMD</span>، به جای{" "}
      <span className="code">your-app</span> نام دایرکتوری خود را وارد کنید. در
      انتها با اجرای دستور زیر، برنامه خود را در لیارا، مستقر کنید:
    </p>
    <Highlight className="bash">
      {`liara deploy --port 80 --platform docker`}
    </Highlight>

    <p>
      در نظر داشته باشید که اگر در برنامه از ماژول خاصی استفاده می‌کنید یا
      نیازمند یک پکیج سیستمی هستید که به صورت پیش‌فرض، نصب نیست؛ بایستی دستورات
      مربوط به نصب آن را در <span className="code">Dockerfile</span> مشخص کنید.
    </p>

    <h3 id="mssql-dockerfile">اتصال به دیتابیس MSSQL در FastAPI</h3>
    <p>
      برای اتصال برنامه خود به دیتابیس MSSQL در لیارا، بایستی در ابتدا، طبق
      مستندات{" "}
      <a href="/app-features/environment-variables">تنظیم متغیرهای محیطی</a>،
      متغیرهای محیطی مربوط به دیتابیس خود را، به برنامه، اضافه کنید؛ به عنوان
      مثال:
    </p>
    <Highlight className="bash">
      {`DB_USER=sa
DB_NAME=my_db
DB_HOST=bromo.liara.cloud
DB_PORT=31858
DB_PASS=yw8FVaUqlvliRFxmcp7VnDUG`}
    </Highlight>

    <p>در ادامه، می‌توانید مانند قطعه کد زیر، به دیتابیس خود متصل شوید:</p>
    <Highlight className="python">
      {`from sqlalchemy import create_engine
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
    f"mssql+pyodbc://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}?driver=ODBC+Driver+17+for+SQL+Server"
)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    # connect_args={"check_same_thread": False},  # only needed for SQLite
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()`}
    </Highlight>

    <p>
      در نهایت، می‌توانید <span className="code">Dockerfile</span> خود را مانند
      قطعه کد زیر بنویسید تا تمامی پکیج‌های مربوط به دیتابیس MSSQL، برای‌تان،
      نصب بشود و در برنامه، با مشکل خاصی مواجه نشوید:
    </p>
    <Highlight className="dockerfile">
      {`# Dockerfile

# Using Python base image version 3.11
FROM python:3.11

# Update system packages and install necessary dependencies
RUN apt-get update && apt-get install -y gcc unixodbc-dev

# Install ODBC driver for SQL Server
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
    curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list && \
    apt-get update && ACCEPT_EULA=Y apt-get install -y msodbcsql17

# Upgrade pip
RUN pip install --upgrade pip

# Create working directory /app
WORKDIR /app

# Copy all project files to the working directory
COPY . /app

# Install project dependencies from requirements.txt
RUN pip install -r requirements.txt

# Set the command to run the project using uvicorn
CMD ["uvicorn", "sql_app.main:app", "--host", "0.0.0.0", "--port", "80"]`}
    </Highlight>

    <Notice variant="info">
      یک پروژه FastAPI نمونه آماده استقرار در{" "}
      <a href="https://github.com/liara-cloud/fastapi-getting-started">اینجا</a>{" "}
      قرار دارد که می‌توانید از آن، استفاده کنید.
    </Notice>
  </Layout>
);
