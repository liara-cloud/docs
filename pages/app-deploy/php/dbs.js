import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌ها در برنامه‌های PHP - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="php" />
      <div className="page-title">
        <h1>پلتفرم PHP</h1>
        <span className="page-description">(PHP Platform)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#mysql">اتصال به MySQL/MariaDB</a>
      </li>
      <li>
        <a href="#postgres">اتصال به PostgreSQL</a>
      </li>
      <li>
        <a href="#mongodb">اتصال به MongoDB</a>
      </li>
      <li>
        <a href="#redis">اتصال به Redis</a>
      </li>
      <li>
        <a href="#sqlite">اتصال به SQLite</a>
      </li>
    </ul>

    <h4 id="mysql">MySQL/MariaDB</h4>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/php/php-mariadb.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      روش‌ها و کتابخانه‌های مختلفی برای اتصال به MySQL یا MariaDB در PHP وجود
      دارد. برای در ادامه، ما از{" "}
      <a href="https://www.php.net/manual/en/book.mysqli.php">mysqli</a> استفاده
      می‌کنیم. در ابتدا، باید متغیرهای محیطی زیر را به برنامه خود اضافه کنید، در
      نظر داشته باشید که مقادیر متغیرهای زیر فرعی هستند و شما باید آن‌ها را با
      مقادیر اصلی دیتابیس خود، جایگزین کنید:
    </p>
    <Highlight className="config">
      {`DB_HOST=annapurna.liara.cloud
DB_PORT=34663
DB_DATABASE=dreamy_zhukovsky
DB_USERNAME=root
DB_PASSWORD=Umtdo7rWEoEMyWth4nS1sf4t
`}
    </Highlight>
    <p>
      اکنون، می‌توانید با استفاده از قطعه کد زیر به دیتابیس MySQL/MariaDB خود
      متصل شوید:
    </p>

    <Highlight className="php">
      {`<?php
$servername = getenv('DB_HOST');
$port = getenv('DB_PORT'); 
$username = getenv('DB_USERNAME'); 
$password = getenv('DB_PASSWORD'); 
$database = getenv('DB_DATABASE'); 

$conn = new mysqli($servername, $username, $password, $database, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected";}

$conn->close();
?>`}{" "}
    </Highlight>

    <h4 id="postgres">PostgreSQL</h4>
    <p>
      در ابتدا کافیست تا متغیرمحیطی زیر را به برنامه خود اضافه کنید؛ در نظر
      داشته باشید که مقدار متغیر زیر، فرضی است:
    </p>
    <Highlight className="shell">
      {`PG_URI=postgresql://root:2aCRtMfc2oMou67U2GftmLmd@annapurna.liara.cloud:32655/postgres`}
    </Highlight>
    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس PostgreSQL خود
      متصل شوید:
    </p>
    <Highlight className="php">
      {`<?php
$uri = getenv("PG_URI");

try {
    $uriParts = parse_url($uri);

    $host = $uriParts['host'];
    $port = $uriParts['port'];
    $user = $uriParts['user'];
    $pass = $uriParts['pass'];
    $dbname = ltrim($uriParts['path'], '/');

    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$pass");

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to PostgreSQL database successfully!";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();}
?>
`}
    </Highlight>

    <h4 id="mongodb">MongoDB</h4>
    <p>
      برای استفاده از این دیتابیس، در ابتدا باید در Local با استفاده از دستور
      زیر، پکیج <span className="code">mongodb</span> را بر روی پروژه خود نصب
      کنید:
    </p>
    <Highlight className="shell">
      {`composer require mongodb/mongodb:^1.15 --ignore-platform-reqs`}
    </Highlight>
    <p>
      یا اگر که در حال حاضر امکان استفاده از{" "}
      <span className="code">composer</span> را ندارید، می‌توانید در مسیر اصلی
      پروژه، یک فایل به نام <span className="code">composer.json</span> ایجاد
      کنید و سپس قطعه کد زیر را، درون آن، قرار دهید:
    </p>
    <Highlight className="json">
      {`{
    "require": {
        "mongodb/mongodb": "1.15"
    }
}`}
    </Highlight>
    <p>
      در ادامه، می‌توانید متغیر محیطی زیر را در برنامه خود، تعریف کنید؛ در نظر
      داشته باشید که مقدار متغیر زیر، فرضی است:
    </p>

    <Highlight className="shell">
      {`MONGODB_URI=mongodb://root:JtFcUbOxnQunBSnEzu1PNf5Z@annapurna.liara.cloud:30725/my-app?authSource=admin`}
    </Highlight>
    <p>
      و در نهایت، با استفاده از قطعه کد زیر، می‌توانید به دیتابیس MongoDB متصل
      شوید:
    </p>
    <Highlight className="php">
      {`<?php
require_once __DIR__ . '/vendor/autoload.php';
use Exception;
use MongoDB\Client;

$uri = getenv('MONGODB_URI');

$options = [
    'connectTimeoutMS' => 5000, 
    'socketTimeoutMS' => 60000, 
    'maxIdleTimeMS' => 300000, 
    'maxPoolSize' => 50, 
    'minPoolSize' => 5,
];

try {
    $client = new MongoDB\Client($uri, [], $options);
    $client->selectDatabase('admin')->command(['ping' => 1]);
    echo "Pinged your deployment. You successfully connected to MongoDB!\n";
} catch (Exception $e) {
    printf($e->getMessage());
}
?>`}
    </Highlight>

    <h4 id="redis">Redis</h4>
    <p>
      برای اتصال به Redis، در ابتدا کافیست تا متغیرهای محیطی زیر را به برنامه
      خود، اضافه کنید. در نظر داشته باشید که مقادیر متغیرهای زیر، فرضی هستند و
      باید آن‌ها را با اطلاعات واقعی دیتابیس خود، جایگزین کنید:
    </p>
    <Highlight className="shell">
      {`REDIS_HOST=annapurna.liara.cloud
REDIS_PORT=34728
REDIS_PASS=aLsc5QKG7z4ubKeLSLBwx9ob`}
    </Highlight>

    <p>در نهایت، می‌توانید با استفاده از قطعه کد زیر، به Redis متصل شوید:</p>
    <Highlight className="php">
      {`<?php

$redis = new Redis();

$redis->connect(getenv('REDIS_HOST'), getenv('REDIS_PORT'));
$redis->auth(getenv('REDIS_PASS'));

if ($redis->ping()) {
 echo "PONG";
}

?>`}
    </Highlight>

    <h4 id="sqlite">SQLite</h4>
    <p>
      برای اتصال اصولی به دیتابیس SQLite در برنامه PHP خود، کافیست تا مراحل زیر
      را دنبال کنید:
    </p>
    <ul className="mt-0">
      <li>
        مرحله اول) در مسیر اصلی پروژه، یک دایرکتوری به نام dbconfig بسازید.
      </li>
      <li>
        مرحله دوم) در مسیر اصلی پروژه، یک فایل به نام composer.json ایجاد کنید و
        محتوای زیر را درونش قرار دهید:
      </li>
      <Highlight className="json">
        {`{
    "autoload": {
        "psr-4": {
            "myDB\\\\": "dbconfig/"
        }
    }
}`}
      </Highlight>
      <li>
        مرحله سوم) در مسیر اصلی پروژه، یک دایرکتوری دیگر به نام db ایجاد کنید.
      </li>
      <li>
        مرحله چهارم) درون دایرکتوری dbconfig یک فایل به نام Config.php ایجاد
        کنید و قطعه کد زیر را در آن قرار دهید:
      </li>
      <Highlight className="php">
        {`<?php

namespace myDB;

class Config {
   
    const PATH_TO_SQLITE_FILE = 'db/phpsqlite.db';
}`}
      </Highlight>

      <li>
        مرحله پنجم) مجدداً، درون دایرکتوری dbconfig یک فایل دیگر به نام
        SQLiteConnection.php ایجاد کنید و محتوای زیر را درون آن قرار دهید:
      </li>
      <Highlight className="php">
        {`<?php
namespace myDB;

class SQLiteConnection {

    private $pdo;

    public function connect() {
        if ($this->pdo == null) {
            $this->pdo = new \\PDO("sqlite:" . Config::PATH_TO_SQLITE_FILE);
        }
        return $this->pdo;
    }
}`}
      </Highlight>
      <li>
        مرحله ششم) سپس، در مسیر اصلی پروژه، یک فایل به نام index.php ایجاد کنید
        و یا اگر از قبل وجود دارد، فقط کافیست تا قطعه کد زیر را درون آن قرار
        دهید:
      </li>
      <Highlight className="php">
        {`<?php

require 'vendor/autoload.php';

use myDB\\SQLiteConnection;

$pdo = (new SQLiteConnection())->connect();
if ($pdo != null)
    echo 'Connected to the SQLite database successfully!';
else
    echo 'Could not connect to the SQLite database!';`}
      </Highlight>
      <li>
        مرحله هفتم) باید در برنامه PHP خود در لیارا، وارد بخش{" "}
        <strong>دیسک‌ها</strong> شوید و یک دیسک جدید به نام database با اندازه
        مدنظرتان، ایجاد کنید.
      </li>
      <li>
        مرحله هشتم و پایانی) در نهایت، کافیست در مسیر اصلی پروژه، یک فایل به نام
        liara.json ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید و سپس دستور
        liara deploy را اجرا کنید:
      </li>
      <Highlight className="json">
        {`{
    "php": {
        "version": "8.2"
      },
    "disks": [
        {
            "name": "database",
            "mountTo": "/var/www/html/db"
        }
    ]
}`}
      </Highlight>
    </ul>

    <Notice variant="info">
      در قطعه کدهای ارائه شده، قابلیت Connection Pooling نیز برای دیتابیس‌ها،
      فعال است. بنابراین نیازی به نوشتن قطعه کد خاصی نیست و می‌توانید از این
      قابلیت، استفاده کنید.
    </Notice>

    <br />

    <Link href="/app-deploy/php/disks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
