import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نکات تکمیلی سرویس ایمیل - لیارا</title>
    </Head>

    <h1>توضیحات و نکات تکمیلی</h1>
    <span className="page-description">
      (Tips, Spam checks and Rate limits)
    </span>

    {/* TODO:
      - POP3/IMAP (https://postmarkapp.com/support/article/1170-does-postmark-have-a-pop3-imap-server)
      - Spam rate limitations (we don't send emails with high spam rates)
      - How to check for spam rate before sending (http://localhost:3005/app-features/email#spam-rate)
      - Outgoing email rate limits
      - How to increase outgoing email rate limits? (they need to file a ticket and explain their use case)
    */}
    <h3 id=""></h3>
  </Layout>
);
