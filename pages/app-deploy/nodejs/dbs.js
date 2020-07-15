import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <div className="page-head">
      <img className="page-icon" src="/static/platformicons/nodejs.svg" alt="nodejs"/>
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>


    <h3>اتصال به دیتابیس‌ها</h3>
    <video
      width="730"
      src="https://files.liara.ir/liara/node-mongodb.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <ul>
      <li>
        <b>MySQL</b>
      </li>
      <p>
        {" "}
        روش‌ها و کتابخانه‌های مختلفی برای اتصال به MySQL در NodeJS وجود دارد.
        برای نمونه اگر از کتابخانه‌{" "}
        <a href="https://www.npmjs.com/package/mysql" target="_blank">
          mysqljs
        </a>{" "}
        برای اتصال به دیتابیس و اجرای کوئری‌ها استفاده باشید، کافیست ابتدا ENV
        های لازم را وارد کنید:
      </p>
      <Highlight className="config">
        {`DB_HOST=s11.liara.ir
DB_PORT=3306
DB_DATABASE=php-starter-db
DB_USERNAME=root
DB_PASSWORD=xxxxxxxxxxxx
`}
      </Highlight>
      <p>و در برنامه به این صورت اطلاعات را خوانده و به دیتابیس متصل شوید:</p>
      <Highlight className="js">
        {`var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  port     : process.env.DB_PORT,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS plus', function (error, results, fields) {
  if (error) throw error;
  console.log("The 1+1 is: ", results[0].plus);
});
 
connection.end();`}{" "}
      </Highlight>
      <li>
        <b>MongoDB</b>
      </li>
      <p>
        {" "}
        روش‌ها و کتابخانه‌های مختلفی برای اتصال به MongoDB در NodeJS وجود دارد.
        برای نمونه اگر از کتابخانه‌ رسمی{" "}
        <a href="https://www.npmjs.com/package/mongodb" target="_blank">
          mongodb
        </a>{" "}
        برای اتصال به دیتابیس و اجرای کوئری‌ها استفاده کرده‌اید کافیست ابتدا ENV
        های لازم را وارد کنید:
      </p>
      <Highlight className="config">
        {`MONGO_DSN=mongodb://USERNASME:PASSWORD@MONGO_SERVER_URL:MONGO_PORT/?authSource=admin`}
      </Highlight>
      <p>و در برنامه به این صورت اطلاعات را خوانده و به دیتابیس متصل شوید:</p>
      <Highlight className="js">
        {`const MongoClient = require("mongodb").MongoClient;
const mongoDSN = process.env.MONGO_DSN;

MongoClient.connect(mongoDSN, function(err, client) {
  console.log("Connected successfully to server");
  client.close();
});`}{" "}
      </Highlight>
    </ul>

    <br />

    <Link href="/app-deploy/nodejs/disks">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
