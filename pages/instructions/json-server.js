import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>ایجاد برنامه JsonServer - لیارا</title>
    </Head>

    <div className="page-head">
      <div className="page-title">
        <h1>JsonServer</h1>
      </div>
    </div>

    <p>
      با استفاده از برنامه JsonServer می‌توانید به راحتی یک REST API جعلی در
      کمتر از یک دقیقه ایجاد کنید.
    </p>

    <p>
      ابتدا با دستورات زیر پکیج <span className="code">json-server</span>، را به
      صورت سراسری و وابستگی‌ پروژه نصب کنید:
    </p>

    <Highlight className="javascript">
      {`npm install -g json-server
npm install --save-dev json-server`}
    </Highlight>

    <p>
      سپس با دستور زیر می‌توانید یک فایلی تحت عنوان{" "}
      <span className="code">db.json</span>
      برای دیتای جعلی‌تان ایجاد کنید:
    </p>

    <Highlight className="javascript">{`json-server db.json`}</Highlight>

    <p>
      برای پیکربندی برنامه‌تان یک فایل تحت عنوان{" "}
      <span className="code">json-server.json</span>
      در روت پروژه‌تان ایجاد کنید و مقادیر <span className="code">port</span>و{" "}
      <span className="code">host</span> را در آن قرار بدید. نمونه مثال:
    </p>

    <Highlight className="javascript">
      {`{
    "port": 3000,
    "host": "0.0.0.0"
} `}
    </Highlight>

    <Notice variant="warning">
      توجه داشته باشید برای استقرار برنامه‌تان در لیارا باید نوع پلتفرم‌تان را
      از نوع
      <span className="code">Node</span> و مقدار{" "}
      <span className="code">host</span>
      را در فایل <span className="code">json-server.json</span> برابر با{" "}
      <span className="code">"0.0.0.0"</span>
      قرار بدید.
    </Notice>

    <p>
      در نهایت اسکریپت زیر زیر را در فایل{" "}
      <span className="code">package.json</span>‌تان قرار بدید:
    </p>
    <Highlight className="javascript">
      {`"scripts": {
    "start": "json-server --watch db.json"
  },`}
    </Highlight>
  </Layout>
);
