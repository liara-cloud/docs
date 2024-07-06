import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌ها در برنامه‌های .Net Core - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="dotnet" />
      <div className="page-title">
        <h1>پلتفرم Net.</h1>
        <span className="page-description">(DotNet Platform)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      به صورت کلی، برای اتصال برنامه‌های Net. به دیتابیس‌های مختلف، نیاز به
      انجام کار خاصی نیست. فقط کافیست تا در ابتدا، پکیج مورد نیاز دیتابیس را نصب
      کنید، اطلاعات اتصال به آن را وارد کنید و با استفاده از ماژول‌های Entity
      Framework موجود در NET.، به دیتابیس مدنظر خود متصل شوید. در نظر داشته
      باشید که برای کار با دیتابیس در برنامه‌های دات‌نت، در ابتدا باید ابزار{" "}
      <b>dotnet-ef</b> و سایر پکیج‌های مربوط به آن را نصب داشته باشید. می‌توانید
      با اجرای دستورات زیر، این موارد را نصب کنید:
    </p>
    <Highlight className="shell">
      {`dotnet tool uninstall --global dotnet-ef
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools`}
    </Highlight>

    <p>در ادامه، نحوه اتصال به دیتابیس‌های مختلف را بررسی خواهیم کرد.</p>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#set-db-envs">تنظیم متغیرهای محیطی دیتابیس</a>
      </li>
      <li>
        <a href="#auto-migrate">اعمال Migration در حین استقرار</a>
      </li>
      <li>
        <a href="#mssql">اتصال به MSSQL</a>
      </li>
      <li>
        <a href="#postgres">اتصال به PostgreSQL</a>
      </li>
      <li>
        <a href="#mysql">اتصال به MySQL/MariaDB</a>
      </li>
      <li>
        <a href="#sqlite">اتصال به SQLite</a>
      </li>
      <li>
        <a href="#tips">توضیحات و نکات تکمیلی</a>
      </li>
    </ul>

    <h4 id="set-db-envs">تنظیم متغیرهای محیطی دیتابیس</h4>
    <p>
      برای اتصال به دیتابیس در محیط Production بهتر است که از متغیرهای محیطی
      استفاده کنید تا اطلاعات مهم اتصال به دیتابیس، از هیچ طریقی، در دسترس
      کاربران قرار نگیرد.
    </p>
    <p>
      برای این‌کار، باید در ابتدا طبق{" "}
      <a href="/app-features/environment-variables">
        مستندات تنظیم متغیرهای محیطی
      </a>
      ، متغیر محیطی مربوط به دیتابیس خود را به برنامه اضافه کنید؛ به عنوان مثال:
    </p>
    <Highlight className="shell">
      {`ConnectionStrings__DefaultConnection=Data Source=etna.liara.cloud,30280;Initial Catalog=myDB;User Id=sa;Password=EJNdMyuBGd8KrCdixJA4DHzS; Encrypt=False`}
    </Highlight>

    <p>
      در ادامه، می‌توانید با استفاده از دستور زیر، به دیتابیس خود متصل شده و از
      آن، استفاده کنید:
    </p>
    <Highlight className="cs">
      {`var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ??
                       throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");`}
    </Highlight>

    <h4 id="auto-migrate">اعمال Migration در حین استقرار</h4>
    <p>
      برای اعمال Migrationها بر روی دیتابیس در حین عملیات استقرار برنامه،
      می‌توانید مشابه قطعه کد زیر را به فایل{" "}
      <span className="code">Program.cs</span> اضافه کنید. با این کار دیگر نیازی
      به اجرای دستور <span className="code">dotnet ef database update</span>{" "}
      نخواهد بود:
    </p>
    <Highlight className="cs">
      {`using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.Migrate();
}`}
    </Highlight>

    <h4 id="mssql">MSSQL</h4>
    <p>
      برای اتصال به{" "}
      <a href="/databases/sqlserver/install">دیتابیس SQL Server</a> در ابتدا
      باید پکیج <b>Microsoft.EntityFrameworkCore.SqlServer</b> را بر روی پروژه
      خود نصب کنید؛ می‌توانید این پکیج را با اجرای دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">
      {`dotnet add package Microsoft.EntityFrameworkCore.SqlServer`}
    </Highlight>
    <p>
      در ادامه، باید در فایل <b>appsettings.json</b> مقدار URI مربوط به دیتابیس
      MSSQL خود را قرار دهید و عبارت <span className="code">Encrypt=False</span>{" "}
      را حتماً در انتهای URI قرار دهید تا در نهایت اتصال درست باشد؛ به عنوان
      مثال اگر که مقدار URI دیتابیس MSSQL شما به شرح زیر باشد:
    </p>
    <Highlight className="shell">
      {`Data Source=etna.liara.cloud,30280;Initial Catalog=myDB;User Id=sa;Password=EJNdMyuBGd8KrCdixJA4DHzS;`}
    </Highlight>

    <p>
      سپس، باید مانند قطعه کد زیر، آن را در فایل <b>appsettings.json</b> قرار
      دهید:
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
    "Production": "Data Source=etna.liara.cloud,30280;Initial Catalog=myDB;User Id=sa;Password=EJNdMyuBGd8KrCdixJA4DHzS; Encrypt=False"
    }
}`}
    </Highlight>

    <p>
      اکنون، می‌توانید در فایل Program.cs، به روش زیر، به دیتابیس SQL Server خود
      متصل شوید:
    </p>
    <Highlight className="csharp">
      {`using Microsoft.EntityFrameworkCore;
using your-project-name.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<your-db-Context>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("Production")));`}
    </Highlight>

    <p>در نهایت، کافیست که با اجرای دستور زیر، دیتابیس خود را آپدیت کنید:</p>
    <Highlight className="shell">{`dotnet ef database update`}</Highlight>

    <Notice variant="warning">
      در نظر داشته باشید که حتماً دستور فوق را در Local و قبل از استقرار برنامه
      در لیارا، اجرا کنید. برای این‌کار، باید از URI شبکه عمومی دیتابیس، استفاده
      کنید. پس از اجرای دستور فوق، می‌توانید در فایل <b>appsettings.json</b>{" "}
      مقدار URI شبکه خصوصی را قرار داده و سپس برنامه خود را در لیارا، مستقر
      کنید.
    </Notice>
    <Notice variant="info">
      یک پروژه آماده استقرار در{" "}
      <Link href="https://github.com/liara-cloud/dotnet-getting-started/tree/ef-core">
        گیت‌هاب لیارا
      </Link>{" "}
      وجود دارد که می‌توانید از آن، استفاده کنید.{" "}
    </Notice>

    <h4 id="postgres">PostgreSQL</h4>
    <p>
      برای اتصال به <a href="/databases/postgresql/install">دیتابیس Postgres</a>{" "}
      در ابتدا باید پکیج <b>Npgsql.EntityFrameworkCore.PostgreSQL</b> را بر روی
      پروژه خود نصب کنید؛ می‌توانید این پکیج را با اجرای دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">
      {`dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 8.0.2`}
    </Highlight>
    <p>
      در ادامه، باید در فایل <b>appsettings.json</b> اطلاعات مربوط به دیتابیس را
      وارد کنید. در نظر داشته باشید که مقادیر <b>connection string</b> زیر فرضی
      است و شما بایستی مقادیر مربوط به host و port و password و database را با
      توجه به اطلاعات دیتابیس‌تان وارد کنید:
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
    "Production": "Host=etna.liara.cloud; Port=31584; Username=root; Password=MGV9V4JyUlRiVlCTZj72Su3U; Database=postgres"
    }
}`}
    </Highlight>

    <p>
      اکنون، می‌توانید در فایل Program.cs، به روش زیر، به دیتابیس PostgreSQL خود
      متصل شوید:
    </p>
    <Highlight className="csharp">
      {`using Microsoft.EntityFrameworkCore;
using your-project-name.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<your-db-Context>(options =>
  options.UseNpgsql(builder.Configuration.GetConnectionString("Production")));`}
    </Highlight>

    <p>در نهایت، کافیست که با اجرای دستور زیر، دیتابیس خود را آپدیت کنید:</p>
    <Highlight className="shell">{`dotnet ef database update`}</Highlight>

    <Notice variant="warning">
      در نظر داشته باشید که حتماً دستور فوق را در Local و قبل از استقرار برنامه
      در لیارا، اجرا کنید. برای این‌کار، باید از اطلاعات شبکه عمومی دیتابیس،
      استفاده کنید. پس از اجرای دستور فوق، می‌توانید در فایل{" "}
      <b>appsettings.json</b> مقدار اطلاعات شبکه خصوصی را قرار داده و سپس برنامه
      خود را در لیارا، مستقر کنید.
    </Notice>

    <h4 id="mysql">MySQL/MariaDB</h4>
    <p>
      برای اتصال به دیتابیس <a href="/databases/mysql/install">MySQL</a> یا{" "}
      <a href="/databases/mariadb/install">MariaDB</a> در ابتدا باید پکیج{" "}
      <b>Pomelo.EntityFrameworkCore.MySql</b> را بر روی پروژه خود نصب کنید؛
      می‌توانید این پکیج را با اجرای دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">
      {`dotnet add package Pomelo.EntityFrameworkCore.MySql --version 8.0.2`}
    </Highlight>
    <p>
      در ادامه، باید در فایل <b>appsettings.json</b> اطلاعات مربوط به دیتابیس را
      وارد کنید. در نظر داشته باشید که مقادیر <b>connection string</b> زیر فرضی
      است و شما بایستی مقادیر مربوط به server و port و password و database را با
      توجه به اطلاعات دیتابیس‌تان وارد کنید:
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
    "Production": "server=etna.liara.cloud; port=34665; user=root; password=H90ZsLcOGp65WSmOnbHYCKsg; database=objective_rubin"
    }
}`}
    </Highlight>

    <p>
      اکنون، می‌توانید در فایل Program.cs، به روش زیر، به دیتابیس MariaDB یا
      MySQL خود متصل شوید:
    </p>
    <Highlight className="csharp">
      {`using Microsoft.EntityFrameworkCore;
using your-project-name.Data;
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("Production");
var serverVersion = ServerVersion.AutoDetect(connectionString);
builder.Services.AddDbContext<your-db-Context>(options =>
  options.UseMySql(connectionString, serverVersion));`}
    </Highlight>

    <p>در نهایت، کافیست که با اجرای دستور زیر، دیتابیس خود را آپدیت کنید:</p>
    <Highlight className="shell">{`dotnet ef database update`}</Highlight>
    <Notice variant="warning">
      در نظر داشته باشید که حتماً دستور فوق را در Local و قبل از استقرار برنامه
      در لیارا، اجرا کنید. برای این‌کار، باید از اطلاعات شبکه عمومی دیتابیس،
      استفاده کنید. پس از اجرای دستور فوق، می‌توانید در فایل{" "}
      <b>appsettings.json</b> مقدار اطلاعات شبکه خصوصی را قرار داده و سپس برنامه
      خود را در لیارا، مستقر کنید.
    </Notice>

    <h4 id="sqlite">SQLite</h4>
    <p>
      استفاده از دیتابیس SQLite در پروژه‌های بزرگ و یا مهم توصیه نمی‌شود؛ اما
      اگر که یک پروژه کوچک یا موقتی دارید، می‌توانید از این دیتابیس بهره ببرید؛
      در ابتدا بایستی پکیج مربوط به آن را با اجرای دستور زیر، نصب کنید:
    </p>
    <Highlight className="shell">
      {`dotnet add package Microsoft.EntityFrameworkCore.SQLite`}
    </Highlight>

    <p>
      در ادامه، باید در فایل <b>appsettings.json</b> اطلاعات مربوط به دیتابیس
      مثل دایرکتوری و نام آن را وارد کنید؛ به عنوان مثال:
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
    "Production": "Data Source=db/MvcMovieContext-69c678d9-0976-406c-9d44-239ed1395d90.db"
    }
}`}
    </Highlight>

    <p>
      سپس، باید دایرکتوری مربوط به دیتابیس را ایجاد کنید تا در حین استقرار، به
      مشکل نخورد؛ در ادامه نیز، باید قطعه کد زیر را در فایل Program.cs وارد
      کنید:
    </p>
    <Highlight className="csharp">
      {`using Microsoft.EntityFrameworkCore;
using your-context.Data;
var builder = WebApplication.CreateBuilder(args);
    builder.Services.AddDbContext<your-context>(options =>
        options.UseSqlite(builder.Configuration.GetConnectionString("Production")));

builder.Services.AddControllersWithViews();
var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<your-context>();
    dbContext.Database.Migrate();  
}`}
    </Highlight>
    <p>
      سپس، در بخش <b>دیسک‌ها</b> در برنامه Net. در لیارا، باید یک دیسک به نام
      database و اندازه مورد نظرتان ایجاد کنید. و پس از آن یک فایل به نام
      liara.json در مسیر اصلی پروژه خود، ایجاد کنید و قطعه کد زیر را، درون آن،
      قرار دهید:
    </p>
    <Highlight className="json">
      {`{
    "disks": [
        {
            "name": "database",
            "mountTo": "db"
        }
    ]
}`}
    </Highlight>
    <p>
      در نهایت با استفاده از دستور liara deploy، برنامه خود را در لیارا مستقر
      کنید و به دیتابیس خود متصل شوید.
    </p>

    <h4 id="tips">توضیحات و نکات تکمیلی</h4>
    <h5>قابلیت Connection Pooling</h5>
    <p>
      در کدهای ارائه داده شده، قابلیت Connection Pooling به صورت خودکار فعال است
      و نیازی نیست که شما تنظیمات خاصی را برای آن، انجام دهید. استفاده از
      Connection Pooling کارایی برنامه را افزایش می‌دهد و تاثیر بسیار زیادی در
      بهینه‌سازی و کاهش منابع مورد استفاده برنامه و دیتابیس دارد.
    </p>

    <br />

    <Link href="/app-deploy/dotnet/disks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
