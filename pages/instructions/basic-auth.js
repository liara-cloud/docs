import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>فعال‌ سازی Basic auth - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <div className="page-title">
        <h1>فعال سازی Basic auth</h1>
      </div>
    </div>
    <p></p>

    <h3 id="apache">Apache</h3>

    <Highlight className="bash">
      {`$ sudo apt install apache2-utils

$ htpasswd -c [path/to/.htpasswd] [username]

$ vim [path/to/.htaccess]`}
    </Highlight>

    <p></p>

    <Highlight className="htaccess">
      {`# enable basic auth in apache 
AuthName "Dialog prompt"
AuthType Basic
AuthUserFile /var/www/html/public/.htpasswd
Require valid-user
`}
    </Highlight>

    <h3 id="nginx">Nginx</h3>
    <Highlight className="bash">
      {`$ echo -n "username:" >> /etc/nginx/conf.d/.htpasswd

$ openssl passwd -apr1 >> /etc/nginx/.htpasswd

$ vim [path/to/nginx.conf]
`}
    </Highlight>

    <p></p>

    <Highlight className="config">
      {`location / {
  auth_basic "Restricted Content";
  auth_basic_user_file /etc/nginx/conf.d/.htpasswd;
}`}
    </Highlight>
  </Layout>
);
