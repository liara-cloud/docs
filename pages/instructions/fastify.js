import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Fastify - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="fastify" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Fastify</h1>
        <span className="page-description">(Fastify Apps)</span>
      </div>
    </div>

    <p>
      Fastify یک فریم‌ورک سریع با overhead بسیار کم است. شما می‌توانید
      برنامه‌های Fastify خود را با ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا
      دیپلوی کنید.
    </p>

    <p>
      توجه داشته باشید که برای اجرای برنامه باید حتما دستور اجرایی مورد نظر را
      در فیلد <span className="code">start</span> بخش{" "}
      <span className="code">scripts</span> فایل{" "}
      <span className="code">package.json</span> وارد کرده باشید:
    </p>

    <Highlight className="json">
      {`"scripts": {
    "start": "node server.js"
},`}
    </Highlight>

    <p>
      همچنین باید مانند مثال زیر، مقدار <span className="code">0.0.0.0</span> را
      به‌عنوان hostname تنظیم کنید:
    </p>
    <Highlight className="javascript">
      {`const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()`}
    </Highlight>

    <p>
      درنهایت می‌توانید پروژه‌ی خود را با اجرای دستور{" "}
      <span className="code">liara deploy</span> بر روی لیارا مستقر کنید.
    </p>
  </Layout>
);
