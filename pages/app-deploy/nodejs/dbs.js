import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌ها در برنامه‌های NodeJS - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>پلتفرم NodeJS</h1>
        <span className="page-description">(NodeJS Platform)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#mysql">اتصال به MySQL یا MariaDB</a>
      </li>
      <li>
        <a href="#mongodb">اتصال به MongoDB</a>
      </li>
      <li>
        <a href="#postgres">اتصال به PostgreSQL</a>
      </li>
      <li>
        <a href="#mssql">اتصال به MSSQL</a>
      </li>
      <li>
        <a href="#sqlite">اتصال به SQLite</a>
      </li>
      <li>
        <a href="#sequelize">ماژول Sequelize</a>
      </li>
      <li>
        <a href="#connection-pooling">استفاده از Connection Pooling</a>
      </li>
    </ul>

    <h4 id="mysql">MySQL/MariaDB</h4>

    <p>
      {" "}
      روش‌ها و کتابخانه‌های مختلفی برای اتصال به MySQL/MariaDB در NodeJS وجود
      دارد. یکی از این راه‌ها، استفاده از پکیج mysql است که در ابتدا، با اجرای
      دستور زیر، باید آن را نصب کنید:
    </p>
    <Highlight className="shell">{`npm install mysql`}</Highlight>
    <p>
      پس از آن، کافیست که در بخش <strong>تنظیمات، متغیرهای</strong> برنامه خود،
      اطلاعات مربوط به دیتابیس خود را وارد کنید. به عنوان مثال:
    </p>
    <Highlight className="shell">
      {`DB_HOST=olympus.liara.cloud
DB_PORT=34008
DB_NAME=festive_villani
DB_USER=root
DB_PASS=d0NRg5Rh7TzbAzJVl7SyeMAB
`}
    </Highlight>

    <p>و در برنامه به این صورت اطلاعات را خوانده و به دیتابیس متصل شوید:</p>
    <Highlight className="js">
      {`const express = require('express');
const mysql = require('mysql');

const app = express();

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('error in connecting to db:', err);
    app.locals.dbConnected = false;
    return;
  }

  console.log('connected to db successfully');
  app.locals.dbConnected = true;
});

app.get('/', (req, res) => {
  res.send(app.locals.dbConnected ? 'connected to db successfully' : 'error in connecting to db!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`server is listening on port \${PORT}\`);
});

process.on('SIGINT', () => {
  connection.end();
  console.log('db disconnected.');
  process.exit();
});
`}
    </Highlight>

    <h4 id="mongodb">MongoDB</h4>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/nodejs/nodejs-mongodb.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      برای اتصال به دیتابیس MongoDB، می‌توانید از پکیج mongodb استفاده کنید،
      برای نصب این پکیج، کافیست تا در مسیر اصلی پروژه خود، دستور زیر را اجرا
      کنید:
    </p>

    <Highlight className="shell">{`npm install mongoose`}</Highlight>

    <p>
      سپس، کافیست تا در بخش <strong>تنظیمات، متغیرها</strong>، URI دیتابیس
      mongodb خود را وارد کنید. به عنوان مثال:
    </p>
    <Highlight className="shell">
      {`MONGODB_URI=mongodb://root:fWy9QPKw8CxTUGCMd6esZSlu@mongo:27017/my-app?authSource=admin`}
    </Highlight>

    <p>و در برنامه به این صورت اطلاعات را خوانده و به دیتابیس متصل شوید:</p>

    <Highlight className="js">
      {`const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => {
  console.log('connected to db successfully');
})
.catch((err) => {
  console.error('error in connecting to db:', err);
});


app.get('/', (req, res) => {
  res.send(mongoose.connection.readyState === 1 ? 'connection to db successfull' : 'error in connecting to db');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`server is listening on port \${PORT}\`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('db disconnected.');
    process.exit();
  });
});
`}
    </Highlight>

    <h4 id="postgres">PostgreSQL</h4>
    <p>
      برای اتصال به دیتابیس Postgres، می‌توانید از پکیج pg استفاده کنید، برای
      نصب این پکیج، کافیست تا در مسیر اصلی پروژه خود، دستور زیر را اجرا کنید:
    </p>

    <Highlight className="shell">{`npm install pg`}</Highlight>

    <p>
      سپس، کافیست تا در بخش <strong>تنظیمات، متغیرها</strong>، URI دیتابیس
      Postgres خود را وارد کنید. به عنوان مثال:
    </p>
    <Highlight className="shell">
      {`PG_URI=postgresql://root:jpR53iIAhADgqsJ3ufVE1v94@pgo:5432/postgres`}
    </Highlight>

    <p>و در برنامه به این صورت اطلاعات را خوانده و به دیتابیس متصل شوید:</p>

    <Highlight className="js">
      {`const express = require('express');
const { Pool } = require('pg');

const app = express();

const dbURI = process.env.PG_URI;

const pool = new Pool({
  connectionString: dbURI,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
    app.locals.dbConnected = false;
    return;
  }
  console.log('Connected to PostgreSQL database successfully');
  app.locals.dbConnected = true;
});

app.get('/', (req, res) => {
  res.send(app.locals.dbConnected ? 'Connection to database successful.' : 'Error connecting to database.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Web server is running on port \${PORT}\`);
});

process.on('SIGINT', () => {
  pool.end();
  console.log('Database connection closed');
  process.exit();
});
`}
    </Highlight>

    <h4 id="mssql">MSSQL</h4>
    <p>
      برای اتصال به دیتابیس SQL Server، می‌توانید از پکیج mssql استفاده کنید،
      برای نصب این پکیج، کافیست تا در مسیر اصلی پروژه خود، دستور زیر را اجرا
      کنید:
    </p>

    <Highlight className="shell">{`npm install mssql`}</Highlight>

    <p>
      سپس، کافیست تا در بخش <strong>تنظیمات، متغیرها</strong>، اطلاعات دیتابیس
      SQL Server خود را وارد کنید. به عنوان مثال:
    </p>
    <Highlight className="shell">
      {`DB_HOST=mssql
DB_PORT=1433
DB_USER=sa
DB_PASS=4OTujub1cJeXYuRlgNFe5pHz
DB_NAME=master`}
    </Highlight>

    <p>
      و در برنامه به این صورت اطلاعات را خوانده و به دیتابیس متصل شوید (در مثال
      زیر، چند کوئری نیز، اجرا‌ می‌شود):
    </p>

    <Highlight className="js">
      {`const express = require('express');
const sql = require('mssql');

const app = express();

const DB_HOST= process.env.DB_HOST;
const DB_PORT= process.env.DB_PORT;
const DB_USER= process.env.DB_USER;
const DB_PASS= process.env.DB_PASS;
const DB_NAME= process.env.DB_NAME;

async function connectAndQuery() {
  try {
    
    await sql.connect(\`Server=\${DB_HOST},\${DB_PORT};Database=\${DB_NAME};User Id=\${DB_USER};Password=\${DB_PASS};Encrypt=false\`)
        
    await sql.query\`CREATE TABLE test_table (id INT IDENTITY(1,1) PRIMARY KEY, name NVARCHAR(50));\`;
    await sql.query\`INSERT INTO test_table (name) VALUES ('Sample Record');\`;

    const result = await sql.query\`SELECT * FROM test_table\`;
    return result.recordset;
  } catch (err) {
    console.error('Error executing SQL query:', err);
    throw err;
  } finally {
    await sql.close();
  }
}

app.get('/', async (req, res) => {
  try {
    
    const data = await connectAndQuery();
    res.send(data);
  } catch (err) {
    res.status(500).send('Error retrieving data from database.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Web server is running on port \${PORT}\`);
});`}
    </Highlight>

    <h4 id="sqlite">SQLite</h4>
    <p>
      برای اتصال موفق به دیتابیس SQLite در برنامه‌های NodeJS کافیست تا گام‌های
      زیر را طی کنید:
    </p>
    <ul>
      <li>گام اول) با اجرای دستور زیر، ماژول مورد نیاز SQLite را نصب کنید:</li>
      <Highlight className="shell">{`npm install sqlite3`}</Highlight>

      <li>
        گام دوم) در مسیر اصلی پروژه، یک دایرکتوری به نام db (یا هر نام دلخواه
        دیگری) ایجاد کنید.{" "}
      </li>
      <li>
        گام سوم) از قطعه کد زیر در برنامه اصلی خود، استفاده کنید (می‌توانید آن
        را بنا به نیاز خود، تغییر دهید):
      </li>
      <Highlight className="js">
        {`const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('db/database.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
  const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
});

app.once('started', () => {
  app.get('/', async (req, res) => {
    db.all("SELECT rowid AS id, info FROM lorem", (err, rows) => {
      if (err) {
        return res.status(500).send('Error retrieving data from database');
      }
      res.send(rows.map(row => \`\${row.id}: \${row.info}\`).join('<br>'));
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  app.emit('started');
});`}
      </Highlight>

      <li>
        گام چهارم) در بخش <b>دیسک‌ها</b> برنامه خود در لیارا، یک دیسک جدید با
        نام database و اندازه مدنظرتان ایجاد کنید.
      </li>
      <li>
        گام پنجم) در مسیر اصلی پروژه، یک فایل به نام liara.json ایجاد کنید و
        قطعه کد زیر را، درون آن، قرار دهید:
      </li>
      <Highlight className="json">
        {`{
    "disks": [
        {
            "name": "database",
            "mountTo": "db"
        }
    ]
}`}
      </Highlight>
      <li>
        گام ششم و نهایی) برنامه خود را با استفاده از دستور liara deploy در لیارا
        مستقر کنید.
      </li>
    </ul>

    <h4 id="sequelize">ماژول Sequelize</h4>
    <p>
      <a href="https://sequelize.org/">Sequelize</a> یک ORM مدرن در NodeJS و
      TypeScript است که از دیتابیس‌های Postgres , MySQL , MariaDB , SQLite , SQL
      Server و .... پشتیبانی می‌کند. این ORM از قابلیت‌های بسیار زیادی از جمله
      solid tranaction , relation , lazy loading و replication نیز پشتیبانی
      می‌کند و ابزار خیلی مناسبی است تا بتوانید هرچه راحت‌تر از قبل، برنامه خود
      را توسعه دهید.
    </p>

    <p>برای نصب Sequelize، کافیست تا دستور زیر را اجرا کنید:</p>
    <Highlight className="shell">{`npm install --save sequelize`}</Highlight>
    <p>
      در ادامه، نحوه اتصال به هردیتابیس با استفاده از ماژول Sequelize را بررسی
      خواهیم کرد.
    </p>

    <ul className="mt-0">
      <li>
        <a href="#mysql-sq">اتصال به MySQL با استفاده از Sequelize</a>
      </li>
      <li>
        <a href="#mariadb-sq">اتصال به MariaDB با استفاده از Sequelize</a>
      </li>
      <li>
        <a href="#postgres-sq">اتصال به PostgreSQL با استفاده از Sequelize</a>
      </li>
      <li>
        <a href="#mssql-sq">اتصال به MSSQL با استفاده از Sequelize</a>
      </li>
      <li>
        <a href="#sqlite-sq">اتصال به SQLite با استفاده از Sequelize</a>
      </li>
      <li>
        <a href="#tips-sq">توضیحات و نکات تکمیلی در استفاده از ماژول</a>
      </li>
    </ul>

    <h5 id="mysql-sq">اتصال به MySQL با استفاده از Sequelize</h5>
    <p>
      در ابتدا، بایستی ماژول مربوط به دیتابیس را با اجرای دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">{`npm install --save mysql2`}</Highlight>

    <p>
      در ادامه، کافیست تا URI مربوط به دیتابیس خود را به متغیرهای محیطی برنامه
      NodeJS خود، اضافه کنید:
    </p>
    <Highlight className="shell">
      {`MYSQL_URI=mysql://root:lnhJ9VUqkaa86ynCtopRaqOU@maria:3306/jovial_chebyshev`}
    </Highlight>

    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:
    </p>
    <Highlight className="js">
      {`const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize(process.env.MYSQL_URI, {
  logging: (...msg) => console.log(msg),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}); 

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    return 'Connection has been established successfully.';
  } catch (error) {
    return \`Unable to connect to the database: \${error}\`;
  }
}

app.get('/', async (req, res) => {
  const result = await testDatabaseConnection();
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
`}
    </Highlight>

    <h5 id="mariadb-sq">اتصال به Mariadb با استفاده از Sequelize</h5>
    <p>
      در ابتدا، بایستی ماژول مربوط به دیتابیس را با اجرای دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">{`npm install --save mariadb`}</Highlight>

    <p>
      در ادامه، کافیست تا اطلاعات مربوط به دیتابیس خود را به متغیرهای محیطی
      برنامه NodeJS خود، اضافه کنید:
    </p>
    <Highlight className="shell">
      {`DB_HOST=mariae
DB_PORT=3306
DB_USER=root
DB_PASS=lnhJ9VUqkaa86ynCtopRaqOU
DB_NAME=jovial_chebyshev`}
    </Highlight>

    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:
    </p>
    <Highlight className="js">
      {`const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mariadb',
    logging: (...msg) => console.log(msg),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}); 

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    return 'Connection has been established successfully.';
  } catch (error) {
    return \`Unable to connect to the database: \${error}\`;
  }
}

app.get('/', async (req, res) => {
  const result = await testDatabaseConnection();
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
`}
    </Highlight>

    <h5 id="postgres-sq">اتصال به PostgreSQL با استفاده از Sequelize</h5>
    <p>
      در ابتدا، بایستی ماژول مربوط به دیتابیس را با اجرای دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">{`npm install --save pg pg-hstore`}</Highlight>

    <p>
      در ادامه، کافیست تا اطلاعات مربوط به دیتابیس خود را به متغیرهای محیطی
      برنامه NodeJS خود، اضافه کنید:
    </p>
    <Highlight className="shell">
      {`PG_URI=postgresql://root:IcAQA5ohOTrbwqOmMCSNJzyS@pgoo:5432/postgres`}
    </Highlight>

    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:
    </p>
    <Highlight className="js">
      {`const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize(process.env.PG_URI, {
    logging: (...msg) => console.log(msg),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}); 

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    return 'Connection has been established successfully.';
  } catch (error) {
    return \`Unable to connect to the database: \${error}\`;
  }
}

app.get('/', async (req, res) => {
  const result = await testDatabaseConnection();
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
`}
    </Highlight>

    <h5 id="mssql-sq">اتصال به MSSQL با استفاده از Sequelize</h5>
    <p>
      در ابتدا، بایستی ماژول مربوط به دیتابیس را با اجرای دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">{`npm install --save tedious`}</Highlight>

    <p>
      در ادامه، کافیست تا اطلاعات مربوط به دیتابیس خود را به متغیرهای محیطی
      برنامه NodeJS خود، اضافه کنید:
    </p>
    <Highlight className="shell">
      {`DB_HOST=mydbo
DB_PORT=1433
DB_USER=sa
DB_PASS=hFI323Wf7f9FdpKZZqaBw57s
DB_NAME=new_db`}
    </Highlight>

    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:
    </p>
    <Highlight className="js">
      {`const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    logging: (...msg) => console.log(msg),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}); 

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    return 'Connection has been established successfully.';
  } catch (error) {
    return \`Unable to connect to the database: \${error}\`;
  }
}

app.get('/', async (req, res) => {
  const result = await testDatabaseConnection();
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
`}
    </Highlight>

    <h5 id="sqlite-sq">اتصال به Sqlite با استفاده از Sequelize</h5>
    <p>
      برای اتصال اصولی به دیتابیس SQLite، بایستی گام‌های زیر را به ترتیب انجام
      دهید تا برنامه با موفقیت در لیارا، آپلود شود:
    </p>

    <ul className="mt-0">
      <li>
        گام اول) ماژول مربوط به دیتابیس SQLite را با اجرای دستور زیر، نصب کنید:
      </li>
      <Highlight className="shell">{`npm install --save sqlite3`}</Highlight>

      <li>
        گام دوم) سپس، با استفاده از قطعه کد زیر، به دیتابیس SQLite متصل شوید
        (حتماً دیتابیس باید درون یک دایرکتوری باشد، می‌توانید نام دایرکتوری و
        دیتابیس را تغییر دهید):
      </li>
      <Highlight className="js">
        {`const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite',
    logging: (...msg) => console.log(msg),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}); 

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    return 'Connection has been established successfully.';
  } catch (error) {
    return \`Unable to connect to the database: \${error}\`;
  }
}

app.get('/', async (req, res) => {
  const result = await testDatabaseConnection();
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
`}
      </Highlight>

      <li>
        گام سوم) در بخش <b>دیسک‌ها</b> در برنامه NodeJS لیارا، یک دیسک جدید به
        نام database و با اندازه مدنظر خود، ایجاد کنید.
      </li>
      <li>
        گام چهارم) در مسیر اصلی پروژه، یک فایل به نام <b>liara.json</b> ایجاد
        کنید و قطعه کد زیر را درون آن، قرار دهید (مقدار فیلد mountTo با توجه به
        نام دایرکتوری دیتابیس شما، متفاوت است):
      </li>
      <Highlight className="json">
        {`{
    "disks": [
        {
            "name": "database",
            "mountTo": "db"
        }
    ]
}`}
      </Highlight>

      <li>
        گام پنجم) با اجرای دستور liara deploy برنامه خود را در لیارا مستقر کنید.
      </li>
    </ul>

    <h5 id="tips-sq">توضحیات و نکات تکمیلی در استفاده از ماژول Sequelize</h5>

    <h6 id="cp-sq">قابلیت Connection Pooling</h6>
    <p>
      در قطعه کدهای ارائه شده،{" "}
      <a href="#connection-pooling">قابلیت Conneciton Pooling</a>، در تمامی
      دیتابیس‌های مذکور، تعبیه شده است؛ البته اگر که قصد دارید تا مقادیر آن را
      خودتان پیکربندی کنید، کافیست که قطعه کد زیر را به برنامه خود، اضافه کنید:
    </p>
    <Highlight className="js">
      {`const sequelize = new Sequelize(/* تنظیمات دیتابیس */, {
  // دیگر تنظیمات
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});`}
    </Highlight>

    <h6 id="logging-sq">لاگ‌گیری دیتابیس</h6>
    <p>
      در کدهای ارائه داده شده، با استفاده از قطعه کد زیر لاگ‌های کامل مربوط به
      دیتابیس، در بخش لاگ‌های برنامه، به شما نمایش داده می‌شوند:
    </p>
    <Highlight className="js">
      {`logging: (...msg) => console.log(msg),`}
    </Highlight>
    <p>
      اما اگر که به لاگ کامل دیتابیس نیاز ندارید، می‌توانید قطعه کد فوق را، از
      برنامه‌تان حذف کنید. اگر که در کل، نیازی به دریافت لاگ‌های دیتابیس ندارید؛
      می‌توانید دستور <span className="code"> logging: false,</span> را جایگزین
      قطعه کد فوق، کنید.
    </p>
    <p>
      اگر که قصد دارید از loggerهای دیگری مثل Winston استفاده کنید؛ کافیست تا کد
      زیر را جایگزین قطعه کد فوق، کنید:
    </p>
    <Highlight className="js">{`logging: msg => logger.debug(msg),`}</Highlight>

    <h4 id="connection-pooling">استفاده از Connection Pooling</h4>
    <p>
      شما می‌توانید در برنامه NodeJS خود، قابلیت Connection Pooling را نیز فعال
      کنید. در Connection Pooling برنامه به جای ایجاد یک ارتباط (Connection)
      جدید برای انجام عملیات دیتابیسی و بستن آن پس از پایان عملیات، از
      ارتباط‌هایی که قبلاً ایجاد شده‌اند، استفاده می‌کند.
    </p>

    <p>
      استفاده از Connection Pooling کارایی برنامه را افزایش می‌دهد و تاثیر بسیار
      زیادی در بهینه‌سازی و کاهش منابع مورد استفاده برنامه و دیتابیس دارد.
      بنابراین توصیه می‌شود که حتماً در حالت Production، از این قابلیت، استفاده
      کنید. در ادامه، به نحوه فعال‌سازی این قابلیت با توجه به نوع هر دیتابیس،
      خواهیم پرداخت:
    </p>

    <ul className="mt-0">
      <li>
        <a href="#mysql-cp">
          قابلیت Connection Pooling در دیتابیس MySQL/MariaDB
        </a>
      </li>
      <li>
        <a href="#mongodb-cp">قابلیت Connection Pooling در دیتابیس MongoDB</a>
      </li>
      <li>
        <a href="#postgres-cp">
          قابلیت Connection Pooling در دیتابیس PostgreSQL
        </a>
      </li>
      <li>
        <a href="#mssql-cp">قابلیت Connection Pooling در دیتابیس MSSQL</a>
      </li>
    </ul>

    <h5 id="mysql-cp">قابلیت Connection Pooling در دیتابیس MySQL/MariaDB</h5>
    <p>
      برای فعال‌سازی این قابلیت در دیتابیس MySQL یا MariaDB کافیست تا پکیج
      mysql2 را با استفاده از دستور زیر در پروژه خود نصب کنید:
    </p>

    <Highlight className="shell">{`npm install mysql2 `}</Highlight>
    <p>سپس، می‌توانید مانند قطعه کد زیر، از Connection Pooling استفاده کنید:</p>

    <Highlight className="js">
      {`const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};
const pool = mysql.createPool(dbConfig);


(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the MySQL server.');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the MySQL server:', error);
  }
})();`}
    </Highlight>

    <h5 id="mongodb-cp">قابلیت Connection Pooling در دیتابیس MongoDB</h5>
    <p>
      برای استفاده از این قابلیت در دیتابیس MongoDB نیاز به انجام کار خاصی نیست.
      صرفاً کافیست تا در آپشن‌های اتصال به دیتابیس، مقدار فیلد{" "}
      <span className="code">maxPoolSize</span> را مشخص کنید:
    </p>
    <Highlight className="js">
      {`const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Create a connection pool
const dbOptions = {
  maxPoolSize: 10, // Set the pool size as needed
};

mongoose.connect(process.env.MONGODB_URI, dbOptions)
  .then(() => {
    console.log('connected to db successfully');
  })
  .catch((err) => {
    console.error('error in connecting to db:', err);
  });

app.get('/', (req, res) => {
  res.send(mongoose.connection.readyState === 1 ? 'connection to db successful' : 'error in connecting to db');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`server is listening on port \${PORT}\`);
});

`}
    </Highlight>

    <h5 id="postgres-cp">قابلیت Connection Pooling در دیتابیس PostgreSQL</h5>
    <p>
      برای فعال‌سازی این قابلیت در دیتابیس PostgreSQL کافیست تا پکیج pg-pool را
      با استفاده از دستور زیر در پروژه خود نصب کنید:
    </p>

    <Highlight className="shell">{`npm install pg-pool`}</Highlight>
    <p>
      در نهایت، کافیست تا در مرحله اتصال به دیتابیس یک‌سری آپشن اضافه کنید تا
      امکان استفاده از Connection Pool مهیا شود:
    </p>

    <Highlight className="js">
      {`const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  max: 20, // maximum number of connections in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // how long to wait for a connection to be established
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
    app.locals.dbConnected = false;
    return;
  }
  console.log('Connected to PostgreSQL database successfully');
  app.locals.dbConnected = true;
});

app.get('/', (req, res) => {
  res.send(app.locals.dbConnected ? 'Connection to database successful.' : 'Error connecting to database.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Web server is running on port \${PORT}\`);
});

process.on('SIGINT', () => {
  pool.end();
  console.log('Database connection closed');
  process.exit();
});`}
    </Highlight>
    <h5 id="mssql-cp">قابلیت Connection Pooling در دیتابیس MSSQL</h5>
    <p>
      برای فعال‌سازی این قابلیت، کافیست تا فیلد{" "}
      <span className="code">pool</span>
      را به شکل زیر، به قطعه کد اتصال به دیتابیس، اضافه کنید:
    </p>

    <Highlight className="js">
      {`const sql = require('mssql');

const appPool = new sql.ConnectionPool({
    server: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    pool: {
        min: 10,
        max: 100,
        acquireTimeoutMillis: 15000,
    },
    options: {
      encrypt: false,
      trustServerCertificate: false
  }
});

appPool.connect().then(pool => {
    console.log(\`SERVER: Connected to the db and \${pool.available} connections are available!\`);
});`}
    </Highlight>

    <br />

    <Link href="/app-deploy/nodejs/disks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
