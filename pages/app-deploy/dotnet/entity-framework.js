import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Entity Framework .NET در لیارا - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="dotnet" />
      <div className="page-title">
        <h1>پلتفرم Net.</h1>
        <span className="page-description">(DotNet Platform)</span>
      </div>
    </div>

    <p>
      Entity Framework یا EF یک ORM است که به برنامه‌نویسان NET. این امکان را
      می‌دهد که با داده‌های رابطه‌ای با استفاده از آبجکت‌ها کار کنند و نیاز به
      کوئری‌نویسی و کدنویسی SQL را تا حد زیادی کاهش می‌دهد. در ادامه نحوه
      استقرار برنامه‌های NET. مبتنی بر EF در لیارا را، بررسی خواهیم کرد.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#ef-sqlite">
          استقرار برنامه ASP EF .NET Core با دیتابیس SQLite
        </a>
      </li>
      <li>
        <a href="#ef-dbs">
          استقرار برنامه ASP EF .NET Core با دیتابیس‌های دیگر
        </a>
      </li>
    </ul>

    <h3 id="ef-sqlite">استقرار برنامه ASP EF .NET Core با دیتابیس SQLite</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/dotnet/dotnet-ef.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/dotnet-getting-started/tree/ef-core">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <p>
      برای استفاده از EF در برنامه NET. خود با دیتابیس SQLite، در ابتدا باید با
      اجرای دستورات زیر، ماژول‌ها و پکیج‌های موردنیاز EF و کار با دیتابیس SQLite
      را نصب کنید:
    </p>
    <Highlight className="shell">
      {`dotnet tool uninstall --global dotnet-ef 
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.SQLite
`}
    </Highlight>

    <p>
      سپس، بایستی در فایل <span className="code">appsettings.json</span> مسیر و
      نام دیتابیس SQLite خود را مشخص کنید. به عنوان مثال، دایرکتوری{" "}
      <span className="code">db</span> در قطعه کد زیر، پوشه اصلی دیتابیس انتخاب
      شده است:
    </p>
    <Highlight className="json">
      {`{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "Production": "Data Source=db/Production-69c678d9-0976-406c-9d44-239ed1395d90.db"
  }
}`}
    </Highlight>

    <p>
      در ادامه، بایستی در فایل <span className="code">Program.cs</span> دیتابیس
      خود را تعریف کنید تا برنامه، بتواند از آن استفاده کند:
    </p>
    <Highlight className="dotnet">
      {`using Microsoft.EntityFrameworkCore;
using Production.Data;
var builder = WebApplication.CreateBuilder(args);
    builder.Services.AddDbContext<ProductionContext>(options =>
        options.UseSqlite(builder.Configuration.GetConnectionString("ProductionContext")));`}
    </Highlight>

    <p>
      پس از آن، کافیست تا دستور زیر را اجرا کنید تا تمام Migrationها در پوشه‌ای
      تحت عنوان Migrations ایجاد شوند:
    </p>
    <Highlight className="shell">
      {`dotnet ef migrations add InitialCreate`}
    </Highlight>

    <p>
      از آنجایی که در حالت Production نمی‌توان به NET SDK. دسترسی داشت، بنابراین
      باید عملیات به‌روزرسانی دیتابیس SQLite به صورت خودکار انجام شود. برای این
      کار، کافیست تا قطعه کد زیر را، به فایل{" "}
      <span className="code">Program.cs</span> خود، اضافه کنید:
    </p>
    <Highlight className="dotnet">
      {`builder.Services.AddControllersWithViews();
var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ProductionContext>();
    dbContext.Database.Migrate();  
}`}
    </Highlight>

    <p>
      در نهایت، می‌توانید برنامه خود را، بدون تغییر خاصی، در لیارا، مستقر کنید.
    </p>

    <h3 id="ef-dbs">استقرار برنامه ASP EF .NET Core با دیتابیس‌های دیگر</h3>
    <p>
      فرایند استقرار برنامه‌های ASP EF .NET Core با استفاده از دیتابیس‌های دیگر،
      همانند دیتابیس SQLite است. با این تفاوت که باید پکیج‌های مربوط به آن‌ها را
      نیز، نصب کنید، مقدار URI دیتابیس مدنظر را در فایل{" "}
      <span className="code">appsettings.json</span> قرار دهید و در فایل{" "}
      <span className="code">Program.cs</span> از متد مربوط به دیتابیس استفاده
      کنید که آموزش آن نیز در <a href="/app-deploy/dotnet/dbs">لیارا</a> موجود
      است.{" "}
    </p>

    <Link href="/app-deploy/dotnet/tips" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
