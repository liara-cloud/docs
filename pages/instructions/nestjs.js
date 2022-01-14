import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های NestJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nest" />
      <div className="page-title">
        <h1>استقرار برنامه‌های NestJS</h1>
        <span className="page-description">(NestJS Apps)</span>
      </div>
    </div>
    <p>
      NestJS یک فریم‌ورک قابل اعتماد و مقیاس‌پذیر با NodeJS است که بسیاری از
      قابلیت‌ها را برای شما به ارمغان می‌آورد و شما می‌توانید برنامه‌های NestJS
      خود را با ایجاد برنامه‌های{" "}
      <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا
      دیپلوی کنید.
    </p>
    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های NestJS باید در بخش{" "}
      <span className="code">scripts</span> فایل{" "}
      <span className="code">package.json</span> مقدار{" "}
      <span className="code">start</span> را به شکل زیر تغییر دهید:
    </p>
    <Highlight className="json">{`"scripts": {
    "start": "node dist/main"
},`}</Highlight>

    <p>
      همچنین، توجه داشته باشید که لیارا به صورت خودکار دستور
      <span className="code">npm run build</span>
      را اجرا می‌کند و نیازی نیست که تغییر خاصی برای اجرای این دستور اعمال کنید.
      در نهایت دستور
      <span className="code">liara deploy --port 3000</span>
      را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
    </p>
    <h3>رفع خطای CORS</h3>
    <p>
      درصورتی که در برنامه‌های NestJS با خطای CORS مواجه شده‌اید بایستی از صحت
      مقادیر <span className="code">origin</span> و{" "}
      <span className="code">methods</span> اطمینان حاصل کنید:
    </p>
    <Highlight className="javascript">{`app.enableCors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
});`}</Highlight>
  </Layout>
);
