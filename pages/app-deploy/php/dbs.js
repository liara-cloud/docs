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

    <br />

    <Link href="/app-deploy/php/disks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
