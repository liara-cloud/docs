import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import Label from '../../components/Label';
import Highlight from "react-highlight";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات API لیارا - سرویس ابری لیارا</title>
    </Head>

    <h1>API لیارا</h1>
    <span className="page-description">(Liara API)</span>

    <p>
      وب‌سرویس و در واقع API ما به شما دسترسی کامل به امکانات پلتفرم ابری لیارا
      را می‌دهد. با استفاده از این API، می‌توانید در برنامه‌ها و سرویس‌های
      خودتان از لیارا به عنوان فراهم‌کننده‌ی زیر ساخت استفاده کنید.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#authentication">کلید احراز هویت</a></li>
      <li><a href="#user-information">دریافت اطلاعات جامع کاربری</a></li>
    </ul>

    <Notice>
      در صورتی که با هر گونه ابهامی در استفاده از API مواجه شدید، از طریق
      تیکت با پشتیبانی لیارا ارتباط بگیرید.
    </Notice>

    <h3 id="authentication">کلید احراز هویت</h3>
    <p>
      شما با مراجعه به پنل کاربری و وارد شدن به بخش API امکان مشاهده و دریافت Token اختصاصی حساب خودتان را دارید. به‌کمک این Token می‌توانید از سازوکارهای <Link href="/cicd/about">
        <a>CI/CD</a>
      </Link> و تعامل با API لیارا استفاده کنید.
      <br />
      نحوه‌ی استفاده از این Token برای کار با APIها به این صورت است که آن را به‌شکل زیر در HEADERها به سمت endpoint مربوطه ارسال می‌کنید:
      <br />
      <Highlight className="plaintext">
        {`Authorization: Bearer $TOKEN`}
      </Highlight>
    </p>

    <h3 id="user-information">دریافت اطلاعات جامع کاربری</h3>
    <div className="endpoint">
      <Label variant="green">GET</Label>
      <span className="endpoint__path">/v1/me</span>
    </div>
    <p>در این endpint شما می‌توانید به اطلاعات کاملی از حساب کاربری، پلن‌های قابل انتخاب به‌همراه قیمت، مشخصات هر پلن و نسخه‌های دیتابیس‌ها دسترسی داشته باشید. بنابراین از اطلاعاتی که از این endpoint دریافت می‌کنید می‌توانید در endpointهای دیگر استفاده کنید.</p>

  </Layout>
);
