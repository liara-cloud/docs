import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های NodeJS - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>پلتفرم NodeJS</h1>
        <span className="page-description">(NodeJS Platform)</span>
      </div>
    </div>

    <h3>اتصال به ذخیره‌سازی ابری</h3>

    <p>
      بدون شک اتصال برنامه به یک{" "}
      <Link href="/buckets/about">ذخیره‌سازی ابری</Link> مطمئن برای نگهداری و
      ارائه فایل‌های استاتیک وب‌سایت یا داده‌های آپلود شده توسط کاربران، باعث
      اطمینان خاطر صاحبان کسب و کار و بهبود عملکرد برنامه‌ می‌شود.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#install-aws-sdk">نصب AWS SDK</a>
      </li>
      <li>
        <a href="#set-keys">تنظیم کلیدها</a>
      </li>
      <li>
        <a href="#upload-file"> آپلود فایل </a>
      </li>
      <li>
        <a href="#download-file"> دریافت فایل</a>
      </li>
      <li>
        <a href="#get-download-url"> دریافت لینک دانلود فایل</a>
      </li>
      <li>
        <a href="#list-file">دریافت لیست فایل های آپلود شده </a>
      </li>
      <li>
        <a href="#delete-file">حذف فایل</a>
      </li>
      <li>
        <a href="#how-to-use">دریافت لیست باکت ها </a>
      </li>
      <li>
        <a href="#upload-file-multer-3">آپلود فایل توسط multer-s3</a>
      </li>
    </ul>

    <h3 id="install-aws-sdk">نصب AWS SDK</h3>
    <p>
      از آنجا که ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با پروتکل
      S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و فریم‌ورک‌های
      مختلفی این فضای ذخیره‌سازی را مدیریت کنید. حال برای اتصال به ذخیره‌سازی
      ابری در NodeJS باید با اجرای دستور زیر، پکیج{" "}
      <a
        href="https://www.npmjs.com/package/aws-sdk"
        target="_blank"
        rel="noopener noreferrer"
      >
        aws-sdk
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`npm i aws-sdk`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      در مرحله‌ی بعد، به‌منظور امنیت و کنترل راحت‌تر مقادیر باید مشخصات فضای
      ذخیره‌سازی ابری اعم از <Link href="/buckets/keys">کلیدها</Link> و آدرس
      اتصال به این سرویس را در بخش{" "}
      <Link href="/app-deploy/nodejs/envs">متغیرهای برنامه</Link> تنظیم کنید.
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <h3 id="upload-file"> آپلود فایل با AWS SDK</h3>
    <p>نمونه کد جهت آپلود فایل:</p>
    <Highlight className="javascript">
      {`const params = {
  Body: '<Binary String>', 
  Bucket:  process.env(LIARA_BUCKET_NAME), 
  Key: "objectkey"
};

// async/await
try {
  await client.putObject(params).promise();
} catch (error) {
  console.log(error);
}

// callback
client.putObject(params, (err, data) => {
  if (err) console.error(err, err.stack);
  else console.log(data);
});
`}
    </Highlight>

    <h3 id="download-file">دریافت فایل با AWS SDK</h3>
    <p>نمونه کد جهت دریافت فایل:</p>
    <Highlight className="javascript">
      {`const params = {
  Bucket: process.env(LIARA_BUCKET_NAME),
  Key: "objectkey"
};

// async/await
try {
  const object = await client.getObject(params).promise();
  console.log(object)
} catch (error) {
  console.log(error);
}

// callback
client.getObject(params, (err, data) => {
  if (err) console.error(err, err.stack);
  else console.log(data);
});`}
    </Highlight>

    <h3 id="get-download-url">دریافت لینک دانلود فایل توسط AWS SDK</h3>
    <p>نمونه کد جهت دریافت لینک دانلود فایل:</p>
    <Highlight className="javascript">
      {`const params = {
  Bucket:  process.env(LIARA_BUCKET_NAME),
  Key: "objectkey"
  Expires: 60, // expires in 60 seconds
};

// async/await
try {
  const object = await client.getSignedUrlPromise('getObject', params);
  console.log(object);
} catch (error) {
  console.log(error);
}

// callback
client.getSignedUrl('getObject', params, (err, data) => {
  if (err) console.error(err, err.stack);
  else console.log(data);
});`}
    </Highlight>

    <h3 id="list-file">دریافت لیست فایل‌های آپلود شده توسط AWS SDK</h3>
    <p>نمونه کد جهت دریافت لیست فایل‌های آپلود شده:</p>
    <Highlight className="javascript">
      {`const params = {
  Bucket:  process.env(LIARA_BUCKET_NAME), 
};      

// async/await
try {
  const objects = await client.listObjectsV2(params).promise();
  console.log(objects);
} catch (error) {
  console.log(error);
}

// callback
client.listObjectsV2(params, (err, data) => {
  if (err) console.error(err, err.stack);
  else console.log(data);
});`}
    </Highlight>

    <h3 id="delete-file">حذف فایل توسط AWS SDK</h3>
    <p>نمونه کد جهت حذف فایل:</p>
    <Highlight className="javascript">
      {`const params = {
  Bucket: process.env(LIARA_BUCKET_NAME),
  Key: 'objectKey',
};

// async/await
try {
  await client.deleteObject(params).promise();
} catch (error) {
  console.log(error);
}

// callback
client.deleteObject(params, (err, data) => {
  if (err) console.error(err, err.stack);
  else console.log(data);
});`}
    </Highlight>

    <h3 id="how-to-use">دریافت لیست باکت ها توسط AWS SDK</h3>
    <p>نمونه کد برای دریافت لیست باکت‌های ایجاد شده:</p>

    <Highlight className="javascript">
      {`const AWS = require('aws-sdk');

const config = {
    endpoint: process.env(LIARA_ENDPOINT),
    accessKeyId: process.env(LIARA_ACCESS_KEY),
    secretAccessKey: process.env(LIARA_SECRET_KEY),
    region: "default",
}

const client = new AWS.S3(config);

client.listBuckets(
    (err, data) => {
        if (err) console.error(err, err.stack);
        else console.log(data);
    }
);`}
    </Highlight>

    <h3 id="upload-file-multer-3">آپلود فایل از طریق multer-s3</h3>
    <p>نمونه کد برای آپلود فایل از طریق multer-s3:</p>
    <Highlight>
      {`import AWS from 'aws-sdk';
import multer from 'multer';
import express from 'express';
import multerS3 from 'multer-s3';

const config = {
  endpoint: process.env(LIARA_ENDPOINT),
  accessKeyId: process.env(LIARA_ACCESS_KEY),
  secretAccessKey: process.env(LIARA_SECRET_KEY),
  region: "default",
};

const app = express();
const s3 = new AWS.S3(config);

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env(LIARA_BUCKET_NAME),
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
});


// route
app.post('/upload', upload.single('objectKey'), function (req, res) {
  console.log(req.file);

  return res.send({
    status: 'success',
    message: 'file uploaded!',
    url: {
      size: req.file.size,
      url: req.file.location,
      name: req.file.key,
      type: req.file.mimetype,
    },
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});`}
    </Highlight>

    <p>
      شما می‌توانید برای کسب اطلاعات بیشتر،{" "}
      <a
        href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html#s3-example-creating-buckets-scenario"
        rel="noopener noreferrer"
        target="_blank"
      >
        مثال‌ها و مستندات این پکیج
      </a>{" "}
      را مطالعه کنید.
    </p>

    <Link href="/app-deploy/nodejs/domain">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
