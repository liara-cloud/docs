import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های NestJS - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="nest" />
      <div className="page-title">
        <h1>استقرار برنامه‌های NestJS</h1>
        <span className="page-description">(NestJS Apps)</span>
      </div>
    </div>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/nestjs/nestjs.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      NestJS یک فریم‌ورک قابل اعتماد و مقیاس‌پذیر با NodeJS است که بسیاری از
      قابلیت‌ها را برای شما به ارمغان می‌آورد. حال شما می‌توانید برنامه‌های
      NestJS خود را با ایجاد برنامه‌های{" "}
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
      همچنین در فایل <span className="code">main.ts</span> باید{" "}
      <span className="code">0.0.0.0</span> را به‌عنوان آدرس هاست در متد{" "}
      <span className="code">listen</span> وارد کنید:
    </p>

    <Highlight className="json">
      {`await app.listen(3000, '0.0.0.0');`}
    </Highlight>

    <p>
      توجه داشته باشید که لیارا به صورت خودکار دستور
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
