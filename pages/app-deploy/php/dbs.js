import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>PHP سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>برنامه‌های PHP</h1>
    <span className="pageDescription">(PHP Apps)</span>
    <h3>اتصال به دیتابیس‌ها</h3>
    <ul>
      <li>
        <b>MySQL:</b>
      </li>
      <p>
        روش‌ها و کتابخانه‌های مختلفی برای اتصال به MySQL در PHP وجود دارد. برای
        نمونه اگر از کتابخانه‌{" "}
        <a href="https://github.com/catfan/Medoo" target="_blank">
          Medoo
        </a>{" "}
        برای اتصال به دیتابیس و اجرای کوئری‌ها استفاده کرده‌اید، بدین صورت ENV
        های لازم را اضافه میکنید:
      </p>
      <Highlight className="config">
        {`DB_CONNECTION=mysql
DB_HOST=s11.liara.ir
DB_PORT=3306
DB_DATABASE=php-starter-db
DB_USERNAME=root
DB_PASSWORD=xxxxxxxxxxxx
`}
      </Highlight>
      حال کافیست در برنامه به این صورت اطلاعات را خوانده و به دیتابیس متصل شوید:
      <Highlight className="php">
        {`<?php
require 'vendor/autoload.php';
use Medoo\\Medoo;

$database = new Medoo([
        'database_type' => 'mysql',
        'server' => getenv('DB_HOST'),
        'port' => getenv('DB_PORT'),
        'database_name' => getenv('DB_DATABASE'),
        'username' => getenv('DB_USERNAME'),
        'password' => getenv('DB_PASSWORD'),
        'charset' => 'utf8'
]);`}{" "}
      </Highlight>
    </ul>
    <Notice variant="warning">
      توجه داشته باشید که اطلاعات بالا همگی برای مثال میباشد. شما متناسب با
      اطلاعات دیتابیس برنامه‌ی‌تان باید مقادیر را جایگذاری کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/php/disks">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
