import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار فایل DLL - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="dotnet" />
      <div className="page-title">
        <h1>استقرار فایل DLL</h1>
        <span className="page-description">(ASP.Net Core Apps)</span>
      </div>
    </div>

    <p>
      در پلتفرم ASP.Net Core لیارا، ابتدا کل سورس‌کد شما به‌سرور آپلود شده و سپس
      فرایند publish آغاز می‌شود. اما چنانچه قبلا برنامه‌ی‌تان را publish
      کرده‌اید و الان فایل DLL را در اختیار دارید، می‌توانید با استفاده از روشی
      که در این صفحه معرفی می‌کنیم، صرفا همین فایل را مستقر و اجرا کنید.
    </p>

    <p>
      برای این‌کار، ابتدا لازم است که از بخش «برنامه‌ها» یک برنامه از نوع Docker
      و با نام و پلن دلخواه‌تان بسازید.
    </p>
    <p>
      سپس در کامپیوتر خودتان، یک پوشه بسازید که داخل آن فایل DLL و همین‌طور یک
      فایل دیگر با نام
      <span className="code">Dockerfile</span>
      وجود داشته باشد. توجه داشته باشید که نام این فایل را دقیقا به‌همین صورت
      باید وارد کنید، بدون هیچ‌گونه پسوندی.
    </p>
    <p>
      سپس، محتویات زیر را داخل فایل
      <span className="code">Dockerfile</span>
      قرار دهید:
    </p>
    <Highlight className="dockerfile">
      {`FROM mcr.microsoft.com/dotnet/aspnet:5.0

RUN apt-get update && \\
    apt-get install -y --no-install-recommends vim unzip

WORKDIR /app

COPY . /app

CMD ["dotnet", "MyProject.dll"]`}
    </Highlight>
    <p>
      توجه داشته باشید که در خط اول، می‌توانید نسخه‌ی ASP.Net مدنظرتان را وارد
      کنید. برای مثال:
      <span className="code">5.0</span>,<span className="code">3.1</span>,
      <span className="code">2.1</span>. در خط آخر هم به‌جای{" "}
      <span className="code">MyProject.dll</span>
      باید نام فایل DLL خودتان را جایگزین کنید.
    </p>
    <p>
      در نهایت، CMD را در پوشه‌ای که <span className="code">Dockerfile</span>
      را داخل آن قرار دادید باز کرده و سپس دستور زیر را برای استقرار و اجرای
      برنامه وارد کنید:
    </p>
    <pre>
      <code>$ liara deploy --platform=docker</code>
    </pre>
    <p>
      <Link href="/cli/install">راهنمای نصب Liara CLI</Link>
    </p>
  </Layout>
);
