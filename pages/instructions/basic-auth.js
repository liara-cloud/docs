import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>فعال‌ سازی Basic auth - لیارا</title>
    </Head>

    <div className="page-head">
      <div className="page-title">
        <h1>فعال سازی Basic auth</h1>
      </div>
    </div>
    <p>
      HTTP authentication قابلیتی است که در پروتکل HTTP برای محدودسازی دسترسی
      توسعه داده شده و با نام ‌Basic authentication نیز شناخته می‌شود. برای فعال
      سازی این قابلیت در <Link href="#apache">Apache</Link> و{" "}
      <Link href="#nginx">Nginx</Link> می‌توانید دستورالعمل زیر را دنبال کنید.
    </p>

    <h3 id="apache">Apache</h3>
    <p>
      برای فعال سازی Basic authentication در وب‌سرور Apache ابتدا باید{" "}
      <strong>apache2-utils</strong> را با اجرای دستور زیر نصب کنید:
    </p>
    <Highlight className="bash">{`$ sudo apt install apache2-utils`}</Highlight>

    <p>
      حال می‌توانید به‌شکل زیر و با استفاده از ابزار <strong>htpasswd</strong>{" "}
      کاربر مورد نظر خود را در فایل <span className="code">.htpasswd</span>{" "}
      اضافه کنید:
    </p>
    <Highlight className="bash">
      {`$ htpasswd -c [path/to/.htpasswd] [username]`}
    </Highlight>
    <p>
      در آخرین مرحله تنها کافیست پیکربندی زیر را در فایل{" "}
      <span className="code">.htaccess</span> اضافه کنید:
    </p>
    <Highlight className="plaintext">
      {`# enable basic auth in apache 

AuthName "Dialog prompt"
AuthType Basic
AuthUserFile [path/to/.htpasswd]
Require valid-user
`}
    </Highlight>

    <h3 id="nginx">Nginx</h3>

    <p>
      برای فعال سازی Basic authentication در وب‌سرور Nginx ابتدا باید نام کاربری
      و رمز عبور دلخواه‌تان را با اجرای دستورهای زیر در فایل{" "}
      <span className="code">.htpasswd</span> اضافه کنید:
    </p>

    <Highlight className="bash">
      {` # add username
$ echo -n "username:" >> [path/to/.htpasswd]

# add password
$ openssl passwd -apr1 >> [path/to/.htpasswd]
`}
    </Highlight>

    <p>
      و در آخرین مرحله تنها کافیست پیکربندی زیر را در فایل{" "}
      <span className="code">liara_nginx.conf</span> اضافه کنید:
    </p>

    <Highlight className="config">
      {`location / {
  auth_basic "Restricted Content";
  auth_basic_user_file [path/to/.htpasswd];
}
`}
    </Highlight>
  </Layout>
);
