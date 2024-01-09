import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌ها در برنامه‌های NextJS - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="next" />
      <div className="page-title">
        <h1>پلتفرم NextJS</h1>
        <span className="page-description">(NextJS Platform)</span>
      </div>
    </div>
    <p>
      اگر که از <strong>Pages Router</strong> استفاده می‌کنید؛ در ابتدا باید در
      مسیر <span class="code">pages/api/</span> یک فایل به نام{" "}
      <span class="code">db.js</span> ایجاد کنید. در ادامه، با توجه به نوع
      دیتابیس‌ها، محتوای این فایل را خواهیم نوشت.
    </p>

    <h3>اتصال به دیتابیس‌ها</h3>
    <h4>فهرست عناوین</h4>
    <ul>
      <li>
        <a href="#mysql">اتصال به دیتابیس MySQL</a>
      </li>
      <li>
        <a href="#mariadb">اتصال به دیتابیس MariaDB</a>
      </li>
      <li>
        <a href="#postgres">اتصال به دیتابیس PostgreSQL</a>
      </li>
      <li>
        <a href="#mssql">اتصال به دیتابیس SQL Server</a>
      </li>
      <li>
        <a href="#mongodb">اتصال به دیتابیس MongoDB</a>
      </li>
      <li>
        <a href="#redis">اتصال به دیتابیس Redis</a>
      </li>
    </ul>

    <h4 id="mysql">اتصال به دیتابیس MySQL</h4>
    <p>
      برای اتصال به دیتابیس MySQL می‌توانید از پکیج mysql2 استفاده کنید؛ برای
      استفاده از این پکیج، باید در ابتدا آن را نصب کنید:
    </p>
    <Highlight className="bash">{`npm install mysql2`}</Highlight>
    <p>
      اکنون کافیست که قطعه کد زیر را در فایل{" "}
      <span class="code">pages/api/db.js</span> بنویسید:
    </p>
    <Highlight className="code">
      {`import mysql from 'mysql2/promise';

const dbConfig = {
  uri: 'mysql://root:pass@host:port/db-name',
};

let connection;

async function connectToDatabase() {
  try {
    if (connection) {
      return connection;
    }

    connection = await mysql.createConnection(dbConfig.uri);

    console.log('Connected to MySQL database!');
    return connection;
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
    throw error;
  }
}

export default connectToDatabase;
`}
    </Highlight>
    <Notice variant="info">
      در کد فوق، هر کدام از مقادیر pass و host و port و db_name موجود در دستور
      <span className="code">mysql://root:pass@host:port/db-name</span> را باید
      با توجه به اطلاعات دیتابیس‌تان تغییر دهید.
    </Notice>

    <p>
      اکنون می‌توانید از دیتابیس MySQL در برنامه‌های خود استفاده کنید؛ قطعه کد
      زیر مثالی از این کار است که بررسی می‌کند برنامه به دیتابیس متصل است یا
      خیر:
    </p>
    <Highlight className="code">
      {`import connectToDatabase from './api/db.js';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>Hello Liara</h1>
      <p>Connected to MySQL: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
`}
    </Highlight>
    <br />

    <h4 id="mariadb">اتصال به دیتابیس MariaDB</h4>

    <p> برای اتصال به دیتابیس باید در ابتدا پکیج mariadb را نصب کنید: </p>
    <Highlight className="bash">{`npm install mariadb`}</Highlight>
    <p>
      اکنون می‌بایست فایل <span class="code">pages/api/db.js</span> را به نحو
      زیر تغییر دهید:
    </p>
    <Highlight className="code">
      {`import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'your-host',
  user: 'root',
  password: 'your-pass',
  database: 'your-db-name', 
  port: portNumber, // like 33114
});

async function connectToDatabase() {
  let connection;

  try {
    connection = await pool.getConnection();
    console.log('Connected to MariaDB database!');
    return connection;
  } catch (error) {
    console.error('Error connecting to MariaDB database:', error);
    throw error;
  } finally {
    if (connection) connection.release(); 
  }
}

export default connectToDatabase;
`}
    </Highlight>
    <Notice variant="info">
      در کد فوق، هر کدام از مقادیر your-pass و your-host و portNumber و
      your-db-name موجود در متغیر
      <span className="code">pool</span> را باید با توجه به اطلاعات دیتابیس‌تان
      تغییر دهید.
    </Notice>
    <p>
      برای بررسی اتصال به دیتابیس نیز می‌توانید از قطعه کد زیر در فایل{" "}
      <span class="code">pages/index.js</span> استفاده کنید:
    </p>
    <Highlight className="code">
      {`import connectToDatabase from './api/db.js';
export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>Hello Liara</h1>
      <p>Connected to MariaDB: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const connection = await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
`}
    </Highlight>
    <br />
    <h4 id="postgres">اتصال به دیتابیس PostgreSQL</h4>
    <p>
      برای اتصال به دیتابیس PostgreSQL، می‌توانید از پکیج pg استفاده کنید. برای
      نصب این پکیج کافیست دستور زیر را اجرا کنید:
    </p>
    <Highlight className="bash">{`npm install pg`}</Highlight>
    <p>
      حال، می‌توانید در <span class="code">pages/api/db.js</span> کد زیر را قرار
      دهید؛ بدیهی است که قطعه کد زیر فقط یک مثال برای بررسی اتصال به دیتابیس است
      و باید آن را بسته به نیاز خود، تغییر دهید و بازنویسی کنید:
    </p>
    <Highlight className="code">
      {`import { Pool } from 'pg';

const pool = new Pool({
  user: 'root',
  host: 'your_host',
  database: 'your_database_name', // you can use postgres
  password: 'your_password',
  port: PortNo, // like 33263
});

async function connectToDatabase() {
  let client;

  try {
    client = await pool.connect();
    console.log('Connected to PostgreSQL database!');
    return client;
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
    throw error;
  } finally {
    if (client) client.release();
  }
}

export default connectToDatabase;
`}
    </Highlight>
    <Notice variant="info">
      در کد فوق، هر کدام از مقادیر your_username و your_host و
      your_database_name و your_password و PortNo موجود در متغیر
      <span className="code">pool</span> را باید با توجه به اطلاعات دیتابیس‌تان
      تغییر دهید.
    </Notice>
    <p>
      برای بررسی اتصال به دیتابیس نیز می‌توانید از قطعه کد زیر در فایل{" "}
      <span class="code">pages/index.js</span> استفاده کنید:
    </p>
    <Highlight className="code">
      {`import connectToDatabase from './api/db.js';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>Hello Liara</h1>
      <p>Connected to PostgreSQL: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const connection = await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
`}
    </Highlight>
    <h4 id="mssql">اتصال به دیتابیس SQL Server</h4>
    <p>
      برای استفاده از دیتابیس SQL Server کافیست تا پکیج{" "}
      <span class="code">mssql</span>را نصب کنید:
    </p>
    <Highlight className="bash">{`npm install mssql`}</Highlight>
    <br />
    <p>
      حال، می‌توانید در <span class="code">pages/api/db.js</span> قطعه کد زیر را
      وارد کنید تا با استفاده از این قطعه کد مطمئن شوید که برنامه به دیتابیس
      متصل است یا خیر:
    </p>
    <Highlight className="code">
      {`import { ConnectionPool } from 'mssql';

const config = {
  user: 'sa',
  password: 'your-pass',
  server: 'your-host',
  database: 'your-db-name', // you can use master
  port: portNo, // like 32427
  options: {
    encrypt: false,
    trustServerCertificate: false, // for secure connection
  },
};

const pool = new ConnectionPool(config);

async function connectToDatabase() {
  try {
    await pool.connect();
    console.log('Connected to SQL Server database!');
    return pool;
  } catch (error) {
    console.error('Error connecting to SQL Server database:', error);
    throw error;
  }
}

export default connectToDatabase;
`}
    </Highlight>
    <Notice variant="info">
      در کد فوق، هر کدام از مقادیر your_pass و your_host و your_db_name و PortNo
      موجود در متغیر
      <span className="code">config</span> را باید با توجه به اطلاعات
      دیتابیس‌تان تغییر دهید. همچنین توجه داشته باشید که برای اتصال درست به
      دیتابیس، مقدار encrypt در options باید بر روی{" "}
      <span class="code">false</span> تنظیم شده‌باشد.
    </Notice>
    <p>
      اکنون می‌توانید درستی اتصال به دیتابیس را در{" "}
      <span class="code">pages/index.js</span> با استفاده از قطعه کد زیر بررسی
      کنید:
    </p>
    <Highlight className="code">
      {`import connectToDatabase from './api/db.js';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>Hello Liara</h1>
      <p>Connected to SQL Server: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const connection = await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
`}
    </Highlight>
    <h4 id="mongodb">اتصال به دیتابیس MongoDB</h4>
    <p>
      برای اتصال به دیتابیس MongoDB می‌توانید از پکیج mongodb استفاده کنید. برای
      نصب این پکیج کافیست دستور زیر را اجرا کنید:
    </p>
    <Highlight className="bash">{`npm install mongodb`}</Highlight>
    <p>
      حال، می‌توانید در <span class="code">pages/api/db.js</span> قطعه کد زیر را
      وارد کنید تا با استفاده از این قطعه کد مطمئن شوید که برنامه به دیتابیس
      متصل است یا خیر:
    </p>
    <Highlight className="code">
      {`import { MongoClient } from 'mongodb';

const uri =
  'mongodb://root:pass@host:port/my-app?authSource=admin';

let client;

async function connectToDatabase() {
  try {
    if (!client) {
      client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
    }

    console.log('Connected to MongoDB database!');
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB database:', error);
    throw error;
  }
}

export default connectToDatabase;
`}
    </Highlight>
    <Notice variant="info">
      در کد فوق، هر کدام از مقادیر pass و host و port موجود در متغیر
      <span className="code">uri</span> را باید با توجه به اطلاعات دیتابیس‌تان
      تغییر دهید.
    </Notice>
    <p>
      اکنون می‌توانید درستی اتصال به دیتابیس را در{" "}
      <span class="code">pages/index.js</span> با استفاده از قطعه کد زیر بررسی
      کنید:
    </p>
    <Highlight className="code">
      {`import connectToDatabase from './api/db.js';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>Hello Liara</h1>
      <p>Connected to MongoDB: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const db = await connectToDatabase();
    isConnectedToDB = db ? true : false;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
`}
    </Highlight>

    <h4 id="redis">اتصال به دیتابیس Redis</h4>
    <p>
      برای اتصال به این دیتابیس در ابتدا باید، پکیج{" "}
      <span class="code">ioredis</span> را نصب کنید:
    </p>
    <Highlight className="bash">{`npm install ioredis`}</Highlight>

    <p>اکنون می‌توانید با استفاده از قطعه کد زیر به دیتابیس متصل شوید:</p>
    <Highlight className="code">
      {`import Redis from 'ioredis';

const redisConfig = {
  host: 'your-host',
  port: portNo, //like 33016 
  password: 'your-pass',
};

const redisClient = new Redis(redisConfig);

async function connectToDatabase() {
  try {
    if (!redisClient.status || redisClient.status === 'closed') {
        await redisClient.connect();
        console.log('Connected to Redis database!');
      } else {
        console.log('Already connected to Redis!');
      }
  } catch (error) {
    console.error('Error connecting to Redis database:', error);
    throw error;
  }
}

export default connectToDatabase;
`}
    </Highlight>
    <Notice variant="info">
      در کد فوق، هر کدام از مقادیر your-host و portNo و your-pass موجود در متغیر
      <span className="code">redisConfig</span> را باید با توجه به اطلاعات
      دیتابیس‌تان تغییر دهید.
    </Notice>
    <p>
      پس از واردکردن اطلاعات فوق، می‌توانید درستی اتصال به دیتابیس را با استفاده
      از قطعه کد زیر در <span class="code">pages/index.js</span>بررسی کنید:
    </p>
    <Highlight className="code">
      {`import connectToDatabase from './api/db';

export default function Home({ isConnectedToDB }) {
  return (
    <div>
      <h1>Hello Liara</h1>
      <p>Connected to Redis: {isConnectedToDB ? 'Yes' : 'No'}</p>
    </div>
  );
}

export async function getStaticProps() {
  let isConnectedToDB = false;

  try {
    const connection = await connectToDatabase();
    isConnectedToDB = true;
  } catch (error) {
    isConnectedToDB = false;
  }

  return {
    props: {
      isConnectedToDB,
    },
  };
}
`}
    </Highlight>
    <br />
    <Link href="/app-deploy/nextjs/object-storage" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
