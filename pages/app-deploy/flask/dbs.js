import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌ها در برنامه‌های Flask - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flask" />
      <div className="page-title">
        <h1>پلتفرم Flask</h1>
        <span className="page-description">(Flask Platform)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#sqlite">اتصال به SQLite</a>
      </li>
      <li>
        <a href="#postgres">اتصال به PostgreSQL</a>
      </li>
      <li>
        <a href="#mysql">اتصال به MySQL/MariaDB</a>
      </li>
      <li>
        <a href="#mongodb">اتصال به MongoDB</a>
      </li>
    </ul>

    <h4 id="sqlite">SQLite</h4>
    <p>
      برای اتصال به دیتابیس SQLite در برنامه flask خود، باید مراحل زیر را انجام
      دهید:
    </p>
    <ul className="mt-0">
      <li>مرحله اول) در مسیر اصلی پروژه، یک دایرکتوری به نام db ایجاد کنید.</li>
      <li>
        مرحله دوم) در فایل app.py خود (یا به صورت کلی، ماژول اصلی برنامه)، قطعه
        کد زیر را قرار دهید:
      </li>
      <Highlight className="python">
        {`import sqlite3
from flask import Flask, g

DATABASE = 'db/database.db'
db_name  = DATABASE.rsplit('/')[-1]

app = Flask(__name__)

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/')
def index():
    cur = get_db().cursor()
    if cur:
        return f'connected to {db_name} successfully!'
    return 'not connected!'

if __name__ == '__main__':
    app.run(debug=True)
`}
      </Highlight>
      <li>
        مرحله سوم) یک <a href="/app-deploy/flask/disks">دیسک</a> جدید در لیارا
        به نام database ایجاد کنید.
      </li>
      <li>
        مرحله چهارم) در مسیر اصلی پروژه، یک فایل به نام liara.json ایجاد کنید و
        قطعه کد زیر را در آن قرار دهید:
      </li>
      <Highlight className="json">
        {`{
    "flask": {
        "pythonVersion": "3.12" // ورژن مدنظرتان را در اینجا وارد کنید
    },
    "disks": [
        {
            "name": "database",
            "mountTo": "db"
        }
    ]
}`}
      </Highlight>
      <li>
        مرحله پنجم و نهایی) در نهایت، کافیست تا با استفاده از دستور liara
        deploy، برنامه خود را در لیارا مستقر کنید.
      </li>
    </ul>

    <h4 id="postgres">PostgreSQL</h4>
    <p>
      برای اتصال به دیتابیس Postgres در ابتدا باید متغیر محیطی زیر را به برنامه
      خود اضافه کنید. در نظر داشته باشید که مقدار متغیر زیر، فرضی است:
    </p>
    <Highlight className="shell">
      {`PG_URI=postgresql://root:xXVTSVNzxxluPRnaRt6OYVeT@postis:5432/postgres`}
    </Highlight>
    <p>
      در نظر داشته باشید که برای کار با دیتابیس PostgreSQL در برنامه‌های Flask،
      ماژول‌های متنوعی وجود دارد که می‌توانید از ماژول مدنظرتان، استفاده کنید؛
      اما پیشنهاد ما، استفاده از psycopg است که می‌توانید از قابلیت Connection
      Pooling در دیتابیس خود نیز، استفاده کنید. برای استفاده از این ماژول،
      کافیست تا دستورات زیر را اجرا کنید:
    </p>
    <Highlight className="shell">
      {`pip install psycopg
pip install psycopg_pool`}
    </Highlight>
    <p>
      در نهایت، می‌توانید مانند قطعه کد زیر، به دیتابیس خود متصل شده و از آن
      استفاده کنید:
    </p>
    <Highlight className="python">
      {`from psycopg_pool import ConnectionPool
from flask import Flask
import os 

app = Flask(__name__)

pool = ConnectionPool(conninfo=os.getenv("PG_URI"))

def get_db_connection():
    return pool.getconn()

@app.route('/')
def index():
    try:
        conn = get_db_connection()
        with conn.cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchone()
            return 'connected' if result else 'not connected'
        
    except Exception as e:
        return f'not connected, error: {str(e)}'
    
    finally:
        pool.putconn(conn)

if __name__ == '__main__':
    app.run(debug=True)
`}
    </Highlight>

    <h4 id="mysql">MySQL/MariaDB</h4>
    <p>
      برای اتصال به دیتابیس MySQL یا MariaDB کافیست اطلاعات اتصال به آن را در
      بخش متغیرهای محیطی یا همان ENVs وارد کنید:
    </p>
    <Highlight className="config">
      {`DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/NAME`}
    </Highlight>
    <p>
      و حالا با اضافه‌شدن این متغیر، می‌توانید آن را از داخل کدهای‌تان فراخوانی
      کرده و با آن به دیتابیس متصل شوید.
    </p>
    <p>
      البته می‌توانید برای اتصال به دیتابیس MySQL در برنامه Flask خود، از ماژول
      flask_mysqldb نیز استفاده کنید. برای استفاده از این ماژول در ابتدا باید آن
      را نصب کنید:
    </p>
    <Highlight className="bash">{`pip install flask_mysqldb`}</Highlight>
    <p>
      پس از نصب ماژول می‌توانید با استفاده از قطعه کد زیر، تنظیمات مربوط به
      دیتابیس را در برنامه، انجام دهید:
    </p>
    <Highlight className="python">
      {`from flask_mysqldb import MySQL
# MySQL configuration
app.config['MYSQL_HOST']     = os.getenv('DB_HOST', 'localhost')
app.config['MYSQL_USER']     = os.getenv('DB_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.getenv('DB_PASSWORD', '')
app.config['MYSQL_DB']       = os.getenv('DB_NAME', 'db')
app.config['MYSQL_PORT']     = int(os.getenv('DB_PORT', 3306)) 
mysql = MySQL(app)`}
    </Highlight>
    <p>در برنامه فوق از متغیرهای محیطی برای مقداردهی استفاده می‌شود.</p>

    <h4 id="mongodb">MongoDB</h4>
    <p>
      {" "}
      اگر از این پایگاه داده استفاده کرده‌اید کافیست اطلاعات اتصال به دیتابیس
      MongoDB را در بخش env ها وارد کنید:
    </p>
    <Highlight className="config">
      {`MONGO_URI="mongodb://USERNAME:PASSWORD@HOST:PORT/DB_NAME?authSource=admin"`}
    </Highlight>
    <p>
      و سپس در برنامه به وسیله درایور و کتابخانه مدنظرتان متصل شوید (ما برای
      نمونه از Flask-PyMongo استفاده کرده‌ایم.)
    </p>
    <Highlight className="python">
      {`if(os.getenv('MONGO_URI') is None):
    return 'MONGO_URI not set!'
mongo = PyMongo(app, uri=os.getenv('MONGO_URI'))`}
    </Highlight>

    <br />
    <Link href="/app-deploy/flask/disks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
