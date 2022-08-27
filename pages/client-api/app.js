import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import Label from "../../components/Label";

export default () => (
  <Layout>
    <Head>
      <title>مستندات API برنامه‌ها در لیارا</title>
    </Head>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#create-app">ایجاد برنامه</a>
      </li>
      <li>
        <a href="#remove-app">حذف برنامه</a>
      </li>
      <li>
        <a href="#start-app">روشن کردن برنامه</a>
      </li>
      <li>
        <a href="#stop-app">خاموش کردن برنامه</a>
      </li>
      <li>
        <a href="#deploy-source">استقرار سورس‌کد</a>
      </li>
      <li>
        <a href="#update-environment-variable">به‌روزرسانی متغیرهای برنامه</a>
      </li>
      <li>
        <a href="#resize-app">تغییر اندازه برنامه</a>
      </li>
      <li>
        <a href="#get-app-details">دریافت مشخصات یک برنامه مشخص</a>
      </li>
      <li>
        <a href="#get-apps-list">دریافت مشخصات تمام برنامه‌ها</a>
      </li>
    </ul>

    <Notice>
      در صورتی که با هر گونه ابهامی در استفاده از API مواجه شدید، از طریق تیکت
      با پشتیبانی لیارا ارتباط بگیرید.
    </Notice>

    <br />
    <hr />

    <h4 id="create-app">ایجاد برنامه</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">/v1/projects</span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>name</td>
        <td>node-app</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>planID</td>
        <td>ir-small</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>platform</td>
        <td>node</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="remove-app">حذف برنامه</h4>
    <div className="endpoint">
      <Label variant="red">DELETE</Label>
      <span className="endpoint__path">
        /v1/projects/<span className="endpoint__param">{`{app-name}`}</span>
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>app-name</td>
        <td className="endpoint-inputs__description">نام برنامه</td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="start-app">روشن کردن برنامه</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">
        /v1/projects/<span className="endpoint__param">{`{app-name}`}</span>
        /actions/scale
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>app-name</td>
        <td className="endpoint-inputs__description">نام برنامه</td>
      </tr>
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>scale</td>
        <td>1</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="stop-app">خاموش کردن برنامه</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">
        /v1/projects/<span className="endpoint__param">{`{app-name}`}</span>
        /actions/scale
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>app-name</td>
        <td className="endpoint-inputs__description">نام برنامه</td>
      </tr>
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>scale</td>
        <td>0</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="deploy-source">استقرار سورس‌کد</h4>

    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">
        /v1/projects/<span className="endpoint__param">{`{app-name}`}</span>
        /sources
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>app-name</td>
        <td className="endpoint-inputs__description">نام برنامه</td>
      </tr>
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>data:</td>
        <td>file.tar.gz</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />

    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">
        /v1/projects/<span className="endpoint__param">{`{app-name}`}</span>
        /releases
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>app-name</td>
        <td className="endpoint-inputs__description">نام برنامه</td>
      </tr>
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>sourceID</td>
        <td>913ca858-0888-479f-9d9b-aeedca62ca85</td>
      </tr>
      <tr>
        <td>port</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>type</td>
        <td>node</td>
      </tr>

      <td className="endpoint-inputs__description"></td>
    </table>

    <br />
    <hr />

    <h4 id="restart-app">ری‌استارت کردن برنامه</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">
        /v1/projects/<span className="endpoint__param">{`{app-name}`}</span>
        /actions/restart
      </span>
    </div>

    <br />
    <hr />

    <h4 id="update-environment-variable">به‌روزرسانی متغیرهای برنامه</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">/v1/projects/update-envs</span>
    </div>

    <h5>ورودی‌ها</h5>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>project</td>
        <td>app-name</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>variables</td>
        <td>{`[
        {
            "key": "APP_DB_HOST",
            "value": "app-db:3306"
        },
        {
            "key": "APP_DB_USER",
            "value": "root"
        }
    ]`}</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="resize-app">تغییر اندازه برنامه</h4>
    <div className="endpoint">
      <Label variant="blue">POST</Label>
      <span className="endpoint__path">
        /v1/projects/<span className="endpoint__param">{`{app-name}`}</span>
        /resize
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>app-name</td>
        <td className="endpoint-inputs__description">نام برنامه</td>
      </tr>
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>BODY</td>
      </tr>
      <tr>
        <td>planID</td>
        <td>ir-standard</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="get-app-details">دریافت مشخصات یک برنامه مشخص</h4>
    <div className="endpoint">
      <Label variant="green">GET</Label>
      <span className="endpoint__path">
        /v1/projects/<span className="endpoint__param">{`{app-name}`}</span>
      </span>
    </div>

    <h5>ورودی‌ها</h5>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>URL</td>
      </tr>
      <tr>
        <td>app-name</td>
        <td className="endpoint-inputs__description">نام برنامه</td>
      </tr>
    </table>

    <br />
    <hr />

    <h4 id="app-lists">دریافت مشخصات تمام برنامه‌ها</h4>
    <div className="endpoint">
      <Label variant="green">GET</Label>
      <span className="endpoint__path">/v1/projects</span>
    </div>

    <br />
    <hr />
  </Layout>
);
