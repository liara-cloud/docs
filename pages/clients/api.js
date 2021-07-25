import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import Link from "next/link";
import Label from '../../components/Label';

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
      <li><a href="#create-domain">ایجاد دامنه</a></li>
      <li><a href="#delete-domain">حذف دامنه</a></li>
    </ul>

    <Notice>
      در صورتی که با هر گونه ابهامی در استفاده از API مواجه شدید، از طریق
      تیکت با پشتیبانی لیارا ارتباط بگیرید.
    </Notice>

    <h3 id="authentication">کلید احراز هویت</h3>
    <p>
      در پنل کاربری از بخش API امکان دریافت Token و یا همان کلید اختصاصی خودتان
      را دارید. در حال حاضر تنها کاربرد رایج این کلید، احراز هویت در ساز و
      کارهای CI/CD است.{" "}
      <Link href="/cicd/about">
        <a>توضیحات بیشتر</a>
      </Link>
    </p>

    <h3>برنامه‌ها</h3>

    <h3>دیتابیس‌ها</h3>

    <h3>دامنه‌ها</h3>

    <h4 id="create-domain">افزودن دامنه</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">/v1/domains</span>
    </div>
    <p>توضیحات مرتبط با این endpoint...</p>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>the-second-field</td>
        <td>another value</td>
        <td className="endpoint-inputs__description">توضیحات این فیلد</td>
      </tr>
      <tr>
        <td>the-third-field</td>
        <td>boomrang</td>
        <td className="endpoint-inputs__description">توضیحات</td>
      </tr>
    </table>

    <h4 id="delete-domain">حذف دامنه</h4>
    <div className="endpoint">
      <Label variant="red">DELETE</Label>
      <span className="endpoint__path">/v1/domains/<span className="endpoint__param">{`{name}`}</span></span>
    </div>
    <p>توضیحات مرتبط با این endpoint...</p>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>name</td>
        <td>my-domain.ir</td>
        <td className="endpoint-inputs__description">نام دامنه</td>
      </tr>
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>the-field</td>
        <td>it's value</td>
        <td className="endpoint-inputs__description">توضیحات</td>
      </tr>
      <tr>
        <td>the-second-field</td>
        <td>another value</td>
        <td className="endpoint-inputs__description">توضیحات این فیلد</td>
      </tr>
      <tr>
        <td>the-third-field</td>
        <td>boomrang</td>
        <td className="endpoint-inputs__description">توضیحات</td>
      </tr>
    </table>

  </Layout>
);
