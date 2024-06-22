import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import PlatformIcon from "../../components/PlatformIcon";
import Highlight from "react-highlight";
export default () => (
  <Layout>
    <Head>
      <title>
        تنظیم هدر Content-Disposition برای دانلود مستقیم فایل - لیارا
      </title>
    </Head>

    <h1>تنظیم هدر Content-Disposition برای دانلود مستقیم فایل</h1>
    <p>
      در بسیاری از مواقع، زمانی که یک فایل در باکت آپلود می‌شود، نیاز است تا
      کاربران بتوانند آن فایل را به صورت مستقیم دانلود کنند. به طور پیش‌فرض،
      وقتی فایلی را از باکت سازگار با S3 دانلود می‌کنید، ممکن است مرورگر وب آن
      را به جای دانلود، مستقیماً نمایش دهد (مثلاً فایل‌های تصویری یا متنی). برای
      اطمینان از اینکه فایل به صورت خودکار دانلود می‌شود، باید هدر{" "}
      <span className="code">Content-Disposition</span> را با مقدار{" "}
      <span className="code">attachment</span> تنظیم کنید.
    </p>

    <h3> هدر Content-Disposition چیست؟</h3>
    <p>
      هدر Content-Disposition به مرورگر وب می‌گوید که چگونه باید محتوا را پردازش
      کند. این هدر می‌تواند به دو صورت اصلی باشد:
    </p>
    <ul>
      <li>inline: محتوا باید مستقیماً در مرورگر نمایش داده شود.</li>
      <li>attachment: محتوا باید به صورت یک فایل ضمیمه دانلود شود.</li>
    </ul>
    <p>
      با تنظیم مقدار Content-Disposition به attachment، مرورگر مجبور می‌شود که
      به جای نمایش فایل، آن را دانلود کند.
    </p>

    <h3>نحوه تنظیم هدر Content-Disposition در باکت</h3>
    <p>
      برای تنظیم این هدر هنگام آپلود فایل در S3، باید از پارامترهای مناسب در
      درخواست putObject استفاده کنید. به عنوان مثال، در SDK های مختلف AWS (مانند
      SDK جاوا اسکریپت، پایتون، و ...)، می‌توانید به شکل زیر عمل کنید:
    </p>
    <Highlight className="js">
      {`const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
  // ...
  // some other params
  ContentDisposition: 'attachment'
};

s3.putObject(params, function(err, data) {
  if (err) {
    console.log("Error uploading data: ", err);
  } else {
    console.log("Successfully uploaded data to your-bucket-name/your-file-name");
  }
});
`}
    </Highlight>
    <p>
      با انجام این کار، برنامه مطمئن می‌شود که فایل را به جای نمایش آن، دانلود
      کند.
    </p>
  </Layout>
);
