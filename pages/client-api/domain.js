import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import Label from "../../components/Label";

export default () => (
  <Layout>
    <Head>
      <title>مستندات API دامنه‌ها در لیارا</title>
    </Head>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#add-domain">افزودن دامنه</a>
      </li>
      <li>
        <a href="#remove-domain">حذف دامنه</a>
      </li>
      <li>
        <a href="#get-domain-details">دریافت مشخصات یک دامنه</a>
      </li>
      <li>
        <a href="#point-domain-to-an-app">اتصال دامنه به یک برنامه مشخص</a>
      </li>
      <li>
        <a href="#ssl-activation">صدور گواهی SSL</a>
      </li>
      <li>
        <a href="#ssl-deactivation">غیرفعال کردن گواهی SSL</a>
      </li>
      <li>
        <a href="#domains-list">مشاهده‌ی تمام دامنه‌ها</a>
      </li>
    </ul>

    <Notice>
      در صورتی که با هر گونه ابهامی در استفاده از API مواجه شدید، از طریق تیکت
      با پشتیبانی لیارا ارتباط بگیرید.
    </Notice>

    <br />
    <hr />

    <h4 id="add-domain">افزودن دامنه</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">/v1/domains</span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>type</td>
        <td>PROJECT</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>name</td>
        <td>my-domain.ir</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="remove-domain">حذف دامنه</h4>
    <div className="endpoint">
      <Label variant="red">DELETE</Label>
      <span className="endpoint__path">
        /v1/domains/<span className="endpoint__param">{`{domain-id}`}</span>
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>domain-id</td>
        <td className="endpoint-inputs__description">شناسه دامنه</td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="get-domain-details">دریافت مشخصات یک دامنه</h4>
    <div className="endpoint">
      <Label variant="green">GET</Label>
      <span className="endpoint__path">
        /v1/domains/<span className="endpoint__param">{`{domain-name}`}</span>
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>domain-name</td>
        <td className="endpoint-inputs__description">نام دامنه</td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="point-domain-to-an-app">اتصال دامنه به یک برنامه مشخص</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">/v1/domains/set-project</span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>projectID</td>
        <td>60fe7f251e7b5f00114c77b1</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>domainID</td>
        <td>60fe86b11e7b5f00114c7878</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="ssl-activation">صدور گواهی SSL</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">/v1/domains/provision-ssl-certs</span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>domain</td>
        <td>my-domain.ir</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="ssl-deactivation">غیرفعال کردن گواهی SSL</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">
        /v1/domains/<span className="endpoint__param">{`{domain-id}`}</span>
        /ssl/disable
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>domain-id</td>
        <td className="endpoint-inputs__description">شناسه دامنه</td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="domains-list">مشاهده‌ی تمام دامنه‌ها</h4>
    <div className="endpoint">
      <Label variant="green">GET</Label>
      <span className="endpoint__path">/v1/domains</span>
    </div>

    <br />
    <hr />
  </Layout>
);
