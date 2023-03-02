import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>مستندات ساخت سرور ایمیل - لیارا</title>
    </Head>

    <h1>ساخت سرور ایمیل</h1>
    <span className="page-description">(Create a new Mail Server)</span>

    {/* TODO:
      - What is transactional email? Give some examples as well.
      - Create mail server (with screen shots)
      - What are those DNS records used for? Explain them briefly.
      - What's the difference between DEV and LIVE modes?
      - How to change mail server mode?
      - Redirect 301 from /app-features/email to this page in the liara_nginx.conf
    */}
    <h3 id=""></h3>
  </Layout>
);
