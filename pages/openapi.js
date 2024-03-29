import Layout from "../components/Layout";
import Head from "next/head";
import Label from "../components/Label";
import Highlight from "react-highlight";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات API لیارا - لیارا</title>
    </Head>

    <h1>API لیارا</h1>
    <span className="page-description">(Liara API)</span>

    <p>
      وب‌سرویس و در واقع API ما به شما دسترسی کامل به امکانات زیرساخت ابری لیارا
      را می‌دهد. با استفاده از این API، می‌توانید در برنامه‌ها و سرویس‌های
      خودتان از لیارا به عنوان فراهم‌کننده‌ی زیر ساخت استفاده کنید.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#authentication">کلید احراز هویت</a>
      </li>
      <li>
        <a href="#user-information">دریافت اطلاعات جامع کاربری</a>
      </li>
      <li>
        <a href="#openapi">مستندات OpenAPI</a>
      </li>
    </ul>

    <h3 id="api-address">آدرس API</h3>
    <p>
      هر کدام از محصولات لیارا، آدرس API مخصوص خود را دارند. برای مثال، آدرس API
      برای دسترسی به برنامه‌ها:
    </p>
    <Highlight className="plaintext">{`https://api.iran.liara.ir/`}</Highlight>

    <h3 id="authentication">کلید احراز هویت</h3>
    <p>
      شما با مراجعه به پنل کاربری و وارد شدن به بخش API امکان مشاهده و دریافت
      Token اختصاصی حساب خودتان را دارید. به‌کمک این Token می‌توانید از
      سازوکارهای <Link href="/cicd/about">CI/CD</Link> و تعامل با API لیارا
      استفاده کنید.
      <br />
      نحوه‌ی استفاده از این Token برای کار با APIها به این صورت است که آن را
      به‌شکل زیر در HEADERها به سمت endpoint مربوطه ارسال می‌کنید:
      <br />
    </p>
    <Highlight className="plaintext">
      {`Authorization: Bearer $TOKEN`}
    </Highlight>

    <h3 id="user-information">دریافت اطلاعات جامع کاربری</h3>
    <div className="endpoint">
      <Label variant="green">GET</Label>
      <span className="endpoint__path">/v1/me</span>
    </div>
    <p>
      در این endpint شما می‌توانید به اطلاعات کاملی از حساب کاربری، پلن‌های قابل
      انتخاب به‌همراه قیمت، مشخصات هر پلن و نسخه‌های دیتابیس‌ها دسترسی داشته
      باشید. بنابراین از اطلاعاتی که از این endpoint دریافت می‌کنید می‌توانید در
      endpointهای دیگر استفاده کنید.
    </p>

    <h3 id="openapi">مستندات OpenAPI</h3>
    <p>
      مستندات API لیارا در آدرس زیر در دسترس است:
      <br />
      <a href="https://openapi.liara.ir/" target="_blank">
        https://openapi.liara.ir
      </a>
    </p>
    <p>
      ما برای نوشتن این مستندات از OpenAPI Specification v3 استفاده کرده‌ایم که
      در <a href="https://github.com/liara-cloud/openapi">GitHub</a> در دسترس
      است. بنابراین، می‌توانید فایل‌های Yaml موجود در ریپازیتوری گیت‌هاب را در
      Postman وارد کنید تا مستقیما به تمام Endpointها دسترسی داشته باشید.
    </p>
  </Layout>
);
