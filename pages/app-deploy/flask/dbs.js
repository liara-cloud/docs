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
      <li>
        <a href="#redis">اتصال به Redis</a>
      </li>
      <li>
        <a href="#elastic">اتصال به Elasticsearch</a>
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
      برای اتصال به دیتابیس MySQL یا MariaDB کافیست تا در ابتدا متغیرهای محیطی
      زیر را در برنامه خود تنظیم کنید؛ در نظر داشته باشید که مقادیر متغیرهای
      زیر، فرضی هستند:
    </p>
    <Highlight className="config">
      {`DB_HOST=annapurna.liara.cloud
DB_PORT=32933
DB_NAME=gallant_ramanujan
DB_USER=root
DB_PASS=UIhfscObpnZhhHG4bo6BOyvF`}
    </Highlight>
    <p>
      پس از اضافه کردن متغیرهای محیطی به برنامه، می‌توانید همانند قطعه کد زیر،
      به دیتابیس خود متصل شوید:
    </p>

    <Highlight className="python">
      {`from mysql.connector import pooling
from flask import Flask
import os

app = Flask(__name__)

def get_connection():
    try:
        connection_pool = pooling.MySQLConnectionPool(pool_size=1,
                                                      pool_reset_session=True,
                                                      host=os.getenv("DB_HOST"),
                                                      port=os.getenv("DB_PORT"),
                                                      database=os.getenv("DB_NAME"),
                                                      user=os.getenv("DB_USER"),
                                                      password=os.getenv("DB_PASS"))
        return connection_pool.get_connection()
    except Exception as e:
        print(str(e))
        return None

@app.route('/')
def index():
    conn = get_connection()
    if conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchall()
            conn.close()
            return 'connected' if result else 'not connected'
    else:
        return 'not connected'

if __name__ == '__main__':
    app.run(debug=True)
`}
    </Highlight>

    <h4 id="mongodb">MongoDB</h4>
    <p>
      برای اتصال به دیتابیس MongoDB، در ابتدا باید متغیر محیطی زیر را به برنامه
      خود اضافه کنید؛ در نظر داشته باشید که مقدار متغیر زیر، فرضی است و باید آن
      را با مقدار واقعی دیتابیس خود، جایگزین کنید:
    </p>
    <Highlight className="shell">
      {`MONGO_URI="mongodb://root:1Oi24kh57useWrr0NDdrviUY@annapurna.liara.cloud:34626/my-app?authSource=admin"`}
    </Highlight>
    <p>
      برای برقراری ارتباط با دیتابیس MongoDB در برنامه‌های Flask، ماژول‌های
      زیادی وجود دارد؛ توصیه ما استفاده از ماژول pymongo است؛ برای نصب این
      ماژول، کافیست تا دستور زیر را اجرا کنید:
    </p>
    <Highlight className="shell">{`pip install pymongo`}</Highlight>

    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود متصل شوید و
      از آن استفاده کنید:
    </p>
    <Highlight className="python">
      {`from flask import Flask
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
`}
    </Highlight>

    <h4 id="redis">Redis</h4>
    <p>
      برای استفاده از دیتابیس Redis، در ابتدا باید متغیر محیطی زیر را با مقدار
      واقعی URI در دیتابیس خود، به برنامه‌تان اضافه کنید:
    </p>
    <Highlight className="shell">
      {`REDIS_URI=redis://:aLsc5QKG7z4ubKeLSLBwx9ob@rediso:6379/0`}
    </Highlight>

    <p>
      برای اتصال به دیتابیس هم، می‌توانید از ماژول redis استفاده کنید که برای
      نصب آن، باید دستور زیر را اجرا کنید:
    </p>
    <Highlight className="shell">{`pip install redis`}</Highlight>

    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس متصل شوید و از
      آن استفاده کنید:
    </p>
    <Highlight className="python">
      {`from flask import Flask
import redis
import os

app = Flask(__name__)

redis_uri = os.getenv('REDIS_URI')

redis_client = redis.StrictRedis.from_url(redis_uri)

@app.route('/')
def test_redis_connection():
    try:
        redis_client.ping()
        return "Connected to Redis successfully!"
    except Exception as e:
        print(f"Error connecting to Redis: {e}")
        return "Failed to connect to Redis."

if __name__ == '__main__':
    app.run(debug=True)
`}
    </Highlight>

    <h4 id="elastic">Elasticsearch</h4>
    <p>
      برای استفاده از این دیتابیس، باید URI آن را طبق قطعه کد زیر، به متغیرهای
      محیطی برنامه خود، اضافه کنید:
    </p>
    <Highlight className="shell">
      {`ELASTIC_URI=http://elastic:91UUoKa1jWaHSecnbkEW9NWw@annapurna.liara.cloud:32119/`}
    </Highlight>

    <p>
      در ادامه، می‌توانید با نصب ماژول Elasticsearch با استفاده از قطعه کد زیر،
      از دیتابیس استفاده کنید:
    </p>
    <Highlight className="shell">{`pip install elasticsearch`}</Highlight>

    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس موردنظرتان متصل
      شده و کارهای مدنظرتان را انجام دهید:
    </p>
    <Highlight className="python">
      {`from flask import Flask, jsonify
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
`}
    </Highlight>

    <br />
    <Link href="/app-deploy/flask/disks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
