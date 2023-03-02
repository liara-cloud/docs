import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>مستندات ارسال ایمیل - لیارا</title>
    </Head>

    <h1>ارسال ایمیل</h1>
    <span className="page-description">(Send email)</span>

    {/* TODO:
      - How to add custom addresses?
      - Send an email quickly using Liara Console
      - How to create SMTP users?
      - Where to find SMTP server host and port?
      - List platform logos and link to their respective docs
    */}
    <h3 id=""></h3>
  </Layout>
);
