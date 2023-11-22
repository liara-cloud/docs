import React, { Fragment, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import PlatformIcon from "../../components/PlatformIcon";
import Link from "next/link";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const PLATFORM_TAGS = [
  { title: "NodeJS", alt: "nodejs" },
  { title: "NuxtJS", alt: "nuxt" },
  { title: "NextJS", alt: "next" },
  { title: "NestJS", alt: "nest" },
  { title: "Laravel", alt: "laravel" },
  { title: "PHP", alt: "php" },
  { title: "Django", alt: "django" },
  { title: "Flask", alt: "flask" },
  { title: "Net.", alt: "netcore" },
  { title: "React", alt: "react" },
  { title: "Angular", alt: "angularjs" },
  { title: "Vue", alt: "vue" },
  { title: "Static", alt: "HTML5" },
  { title: "Docker", alt: "docker" },
  { title: "WP Plus", alt: "wordpress" },
];
const DB_TAGS = [
  { title: "MySQL", alt: "mysql" },
  { title: "MariaDB", alt: "mariadb" },
  { title: "PostgreSQL", alt: "postgres" },
  { title: "SQL Server", alt: "mssql" },
  { title: "MongoDB", alt: "mongodb" },
  { title: "Redis", alt: "redis" },
  { title: "Elastic", alt: "elastic" },
  { title: "RabbitMQ", alt: "rabbitmq" },
];

const Videos = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
      </Head>

      <section>
        <div className="page-head">
          <div className="page-title pb-4">
            <h1>آموزش جامع استقرار</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2  gap-5">
          <Link style={{ border: "none" }} href="/tv/courses/node">
            <img
              style={{ borderColor: "#ffffff22" }}
              src="/static/course/nodejs.png"
            />
          </Link>
          <Link style={{ border: "none" }} href="/tv/courses/laravel">
            <img
              style={{ borderColor: "#ffffff22" }}
              src="/static/course/laravel.png"
            />
          </Link>
        </div>
        <br></br>
        <div className="grid md:grid-cols-3  gap-5">
          <Link style={{ border: "none" }} href="/tv/courses/django">
            <img
              style={{ borderColor: "#ffffff22" }}
              src="/static/course/django.png"
            />
          </Link>
          <Link style={{ border: "none" }} href="/tv/courses/dotnet">
            <img
              style={{ borderColor: "#ffffff22" }}
              src="/static/course/dotnet.png"
            />
          </Link>
          <Link style={{ border: "none" }} href="/tv/courses/flask">
            <img
              style={{ borderColor: "#ffffff22" }}
              src="/static/course/flask.png"
            />
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="page-head">
          <div className="page-title pb-4">
            <h1>پلتفرم‌ها</h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {PLATFORM_TAGS.map(item => (
            <a
              id="tags"
              dir="ltr"
              href={`#${item.alt}`}
              className="flex border border-gray-700 hover:border-gray-600 rounded-md py-1 px-3 text-white items-center"
            >
              <span className="text-gray-400 mr-1">#</span>
              {item.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="page-head">
          <div className="page-title pb-4">
            <h1>دیتابیس‌ها</h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {DB_TAGS.map(item => (
            <a
              id="tags"
              dir="ltr"
              href={`#${item.alt}`}
              className="flex border border-gray-700 hover:border-gray-600 rounded-md py-1 px-3 text-white items-center"
            >
              <span className="text-gray-400 mr-1">#</span>
              {item.title}
            </a>
          ))}
        </div>
      </section>

      <Section
        name={"اضافه کردن دامنه"}
        style={{ marginTop: 40 }}
        badge={"اتصال دامنه"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "سرویس DNS لیارا",
            link: "https://files.liara.ir/liara/domain/dns.mp4",
          },
          {
            videoTitle: "سرویس DNS کلودفلر",
            link: "https://files.liara.ir/liara/domain/domain.mp4",
          },
          {
            videoTitle: "سرویس DNS ابرآروان",
            link: "https://files.liara.ir/liara/domain/arvancloud-dns.mp4",
          },
        ]}
      />

      <Section
        name={"راه اندازی CI/CD"}
        style={{ marginTop: 40 }}
        badge={"Continuous Integration and Continuous Delivery"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "راه اندازی CI/CD به وسیله GitHub",
            link: "https://files.liara.ir/liara/CICD/cicd-github.mp4",
            platform: "github",
          },
          {
            videoTitle: "راه اندازی CI/CD به وسیله GitLab",
            link: "https://files.liara.ir/liara/CICD/cicd-gitlab.mp4",
            platform: "gitlab",
          },
        ]}
      />

      <Section
        name={"پلتفرم NodeJS"}
        platform="nodejs"
        style={{ marginTop: 40 }}
        badge={"NodeJS Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/nodejs/nodejs-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/nodejs/nodejs-desktop.mp4",
          },
          {
            videoTitle: "اتصال به دیتابیس MongoDB",
            link: "https://files.liara.ir/liara/nodejs/nodejs-mongodb.mp4",
          },
          {
            videoTitle: "استفاده از دیسک‌ها",
            link: "https://files.liara.ir/liara/nodejs/nodejs-disks.mp4",
          },
          {
            videoTitle: "اتصال به فضای ذخیره‌سازی ابری",
            link: "https://files.liara.ir/liara/nodejs/nodejs-object-storage.mp4",
          },
          {
            videoTitle: "ارسال ایمیل",
            link: "https://files.liara.ir/liara/nodejs/nodejs-emailserver.mp4",
          },
        ]}
      />

      <Section
        name={"فریم‌ورک NuxtJS"}
        platform="nuxt"
        style={{ marginTop: 40 }}
        badge={"NuxtJS Framework"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/nuxtjs/nuxtjs-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/nuxtjs/nuxtjs-desktop.mp4",
          },
        ]}
      />

      <Section
        name={"فریم‌ورک NextJS"}
        platform="next"
        style={{ marginTop: 40 }}
        badge={"NextJS Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/nextjs/nextjs-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/nextjs/nextjs-desktop.mp4",
          },
        ]}
      />

      <Section
        name={"فریم‌ورک NestJS"}
        platform="nest"
        style={{ marginTop: 40 }}
        badge={"NestJS Framework"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/nestjs/nestjs.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم Laravel"}
        platform="laravel"
        style={{ marginTop: 40 }}
        badge={"Laravel Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/laravel/laravel-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/laravel/laravel-desktop.mp4",
          },
          {
            videoTitle: "اتصال به دیتابیس MariaDB",
            link: "https://files.liara.ir/liara/laravel/laravel-mariadb.mp4",
          },
          {
            videoTitle: "استفاده از دیسک‌ها",
            link: "https://files.liara.ir/liara/laravel/laravel-disks.mp4",
          },
          {
            videoTitle: "اتصال به فضای ذخیره‌سازی ابری",
            link: "https://files.liara.ir/liara/laravel/laravel-object-storage.mp4",
          },
          {
            videoTitle: "ارسال ایمیل",
            link: "https://files.liara.ir/liara/laravel/laravel-email-server.mp4",
          },
          {
            videoTitle: "اتصال به Soketi",
            link: "https://files.liara.ir/liara/soketi/laravel-soketi.mp4",
          },
          {
            videoTitle: "فعال‌سازی SSR با استفاده از Inertia",
            link: "https://files.liara.ir/liara/laravel/laravel-inertia-ssr.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم PHP"}
        platform="php"
        style={{ marginTop: 40 }}
        badge={"PHP Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/php/php-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/php/php-desktop.mp4",
          },
          {
            videoTitle: "اتصال به دیتابیس MariaDB",
            link: "https://files.liara.ir/liara/php/php-mariadb.mp4",
          },
          {
            videoTitle: "استفاده از دیسک‌ها",
            link: "https://files.liara.ir/liara/php/php-disks.mp4",
          },
          {
            videoTitle: "اتصال به فضای ذخیره‌سازی ابری",
            link: "https://files.liara.ir/liara/php/php-object-storage.mp4",
          },
          {
            videoTitle: "ارسال ایمیل",
            link: "https://files.liara.ir/liara/php/php-email-server.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم Django"}
        platform="django"
        style={{ marginTop: 40 }}
        badge={"Django Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/django/django-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/django/django-desktop.mp4",
          },
          {
            videoTitle: "اتصال به دیتابیس SQLite",
            link: "https://files.liara.ir/liara/django/django-sqlite.mp4",
          },
          {
            videoTitle: "اتصال به دیتابیس PostgreSQL",
            link: "https://files.liara.ir/liara/django/django-postgresql.mp4",
          },
          {
            videoTitle: "استفاده از دیسک‌ها",
            link: "https://files.liara.ir/liara/django/django-disks.mp4",
          },
          {
            videoTitle: "اتصال به فضای ذخیره‌سازی ابری",
            link: "https://files.liara.ir/liara/django/django-object-storage.mp4",
          },
          {
            videoTitle: "ارسال ایمیل",
            link: "https://files.liara.ir/liara/django/django-email-server.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم Flask"}
        platform="flask"
        style={{ marginTop: 40 }}
        badge={"Flask Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/flask/flask-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/flask/flask-desktop.mp4",
          },
          {
            videoTitle: "اتصال به فضای ذخیره‌سازی ابری",
            link: "https://files.liara.ir/liara/flask/flask-object-storage.mp4",
          },
          {
            videoTitle: "ارسال ایمیل",
            link: "https://files.liara.ir/liara/flask/flask-email-server.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم Net."}
        platform="netcore"
        style={{ marginTop: 40 }}
        badge={"DotNetCore Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/dotnet/dotnet-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/dotnet/dotnet-desktop.mp4",
          },
          {
            videoTitle: "اتصال به فضای ذخیره‌سازی ابری",
            link: "https://files.liara.ir/liara/dotnet/dotnet-object-storage.mp4",
          },
          {
            videoTitle: "ارسال ایمیل",
            link: "https://files.liara.ir/liara/dotnet/dotnet-email-server.mp4",
          },
          {
            videoTitle: "استفاده از دیسک‌ها",
            link: "https://files.liara.ir/liara/dotnet/dotnet-disks.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم React"}
        platform="react"
        style={{ marginTop: 40 }}
        badge={"React Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/react/react-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/react/react-desktop.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم Angular"}
        platform="angularjs"
        style={{ marginTop: 40 }}
        badge={"Angular Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/angular/angular-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/angular/angular-desktop.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم Vue"}
        platform="vue"
        style={{ marginTop: 40 }}
        badge={"Vue Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/vue/vue-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/vue/vue-desktop.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم Static"}
        platform="HTML5"
        style={{ marginTop: 40 }}
        badge={"Static Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/static/static-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/static/static-desktop.mp4",
          },
        ]}
      />

      <Section
        name={"پلتفرم Docker"}
        platform="docker"
        style={{ marginTop: 40 }}
        badge={"Docker Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "استقرار با Liara CLI",
            link: "https://files.liara.ir/liara/docker/docker-cli.mp4",
          },
          {
            videoTitle: "استقرار با Liara Desktop",
            link: "https://files.liara.ir/liara/docker/docker-desktop.mp4",
          },
          {
            videoTitle: "استقرار image از DockerHub",
            link: "https://files.liara.ir/liara/docker/docker-image.mp4",
          },
          {
            videoTitle: "استقرار Docker Compose",
            link: "https://files.liara.ir/liara/docker/docker-compose.mp4",
          },
        ]}
      />

      <Section
        name={"وردپرس پلاس"}
        platform="wordpress"
        style={{ marginTop: 40 }}
        badge={"WordPress Plus"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "راه اندازی WordPress Plus",
            link: "https://files.liara.ir/liara/wordpress/wordpress-plus.mp4",
          },
          {
            videoTitle: "اتصال به فضای ذخیره‌سازی ابری",
            link: "https://files.liara.ir/liara/wordpress/wordpress-object-storage.mp4",
          },
          {
            videoTitle: "ارسال ایمیل",
            link: "https://files.liara.ir/liara/wordpress/wordpress-email-server.mp4",
          },
          {
            videoTitle: "نصب قالب با استفاده از duplicator  ",
            link: "https://files.liara.ir/liara/wordpress/wordpress-duplicator.mp4",
          },
          {
            videoTitle: "انتقال از cPanel به لیارا",
            link: "https://files.liara.ir/liara/wordpress/wordpress-cpanel.mp4",
          },
        ]}
      />

      <Section
        name={"دیتابیس MySQL"}
        style={{ marginTop: 40 }}
        badge={"MySQL"}
        setOpenDialog={setOpenDialog}
        platform="mysql"
        links={[
          {
            videoTitle: "راه اندازی MySQL",
            link: "https://files.liara.ir/liara/mysql/create-mysql.mp4",
          },
          {
            videoTitle: "اتصال به MySQL با PHPMyAdmin",
            link: "https://files.liara.ir/liara/mysql/mysql-phpmyadmin.mp4",
          },
          {
            videoTitle: "اتصال به MySQL با DBeaver",
            link: "https://files.liara.ir/liara/mysql/mysql-dbeaver.mp4",
          },
          {
            videoTitle: "اتصال به MySQL با MySQL Workbench",
            link: "https://files.liara.ir/liara/mysql/mysql-workbench.mp4",
          },
          {
            videoTitle: "اتصال به MySQL با MySQL CLI",
            link: "https://files.liara.ir/liara/mysql/mysql-cmd.mp4",
          },
        ]}
      />

      <Section
        name={"دیتابیس MariaDB"}
        style={{ marginTop: 40 }}
        badge={"MariaDB"}
        setOpenDialog={setOpenDialog}
        platform="mariadb"
        links={[
          {
            videoTitle: "راه اندازی MariaDB",
            link: "https://files.liara.ir/liara/mariadb/create-mariadb.mp4",
          },
          {
            videoTitle: "اتصال به MariaDB با PHPMyAdmin",
            link: "https://files.liara.ir/liara/mariadb/mariadb-phpmyadmin.mp4",
          },
          {
            videoTitle: "اتصال به MariaDB با DBeaver",
            link: "https://files.liara.ir/liara/mariadb/mariadb-dbeaver.mp4",
          },
          {
            videoTitle: "اتصال به MariaDB با MySQL CLI",
            link: "https://files.liara.ir/liara/mariadb/mariadb-mysqlcmd.mp4",
          },
        ]}
      />

      <Section
        name={"دیتابیس PostgreSQL"}
        style={{ marginTop: 40 }}
        badge={"PostgreSQL"}
        setOpenDialog={setOpenDialog}
        platform="postgres"
        links={[
          {
            videoTitle: "راه اندازی Postgres",
            link: "https://files.liara.ir/liara/postgresql/create-postgresql.mp4",
          },
          {
            videoTitle: "اتصال به Postgres با PGAdmin",
            link: "https://files.liara.ir/liara/postgresql/postgres-pgadmin.mp4",
          },
          {
            videoTitle: "اتصال به Postgres با DBeaver",
            link: "https://files.liara.ir/liara/postgresql/postgres-dbeaver.mp4",
          },
          {
            videoTitle: "اتصال به Postgres با PSQL",
            link: "https://files.liara.ir/liara/postgresql/postgres-psql.mp4",
          },
        ]}
      />

      <Section
        name={"دیتابیس SQL Server"}
        style={{ marginTop: 40 }}
        badge={"Microsoft SQL Server"}
        setOpenDialog={setOpenDialog}
        platform="mssql"
        links={[
          {
            videoTitle: "راه اندازی SQL Server",
            link: "https://files.liara.ir/liara/mssql/create-mssql.mp4",
          },
          {
            videoTitle: "اتصال به SQL Server با MS",
            link: "https://files.liara.ir/liara/mssql/mssql-local.mp4",
          },
          {
            videoTitle: "اتصال به SQL Server با DBeaver",
            link: "https://files.liara.ir/liara/mssql/mssql-dbeaver.mp4",
          },
          {
            videoTitle: "اتصال به SQL Server با Azure",
            link: "https://files.liara.ir/liara/mssql/mssql-azure.mp4",
          },
        ]}
      />

      <Section
        name={"دیتابیس MongoDB"}
        style={{ marginTop: 40 }}
        badge={"MongoDB"}
        setOpenDialog={setOpenDialog}
        platform="mongodb"
        links={[
          {
            videoTitle: "راه اندازی MongoDB",
            link: "https://files.liara.ir/liara/mongodb/create-mongodb.mp4",
          },
          {
            videoTitle: "MongoDB-CLI & MongoDB Compass",
            link: "https://files.liara.ir/liara/mongodb/mongodb-compass.mp4",
          },
        ]}
      />

      <Section
        name={"دیتابیس Redis"}
        style={{ marginTop: 40 }}
        badge={"Redis"}
        setOpenDialog={setOpenDialog}
        platform="redis"
        links={[
          {
            videoTitle: "راه اندازی Redis",
            link: "https://files.liara.ir/liara/redis/create-redis.mp4",
          },
          {
            videoTitle: "Redis-CLI & PHPRedisAdmin",
            link: "https://files.liara.ir/liara/redis/redis-cli.mp4",
          },
        ]}
      />

      <Section
        name={"دیتابیس Elastic"}
        style={{ marginTop: 40 }}
        badge={"Elastic"}
        setOpenDialog={setOpenDialog}
        platform="elastic"
        links={[
          {
            videoTitle: "راه اندازی Elastic",
            link: "https://files.liara.ir/liara/elastic/create-elastic.mp4",
          },
          {
            videoTitle: "اتصال به Elastic با Python",
            link: "https://files.liara.ir/liara/elastic/elastic-python.mp4",
          },
        ]}
      />

      <Section
        name={"RabbitMQ"}
        style={{ marginTop: 40 }}
        badge={"rabbitmq"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "راه اندازی RabbitMQ",
            link: "https://files.liara.ir/liara/rabbitmq/rabbitmq.mp4",
            platform: "rabbitmq",
          },
        ]}
      />

      {openDialog.isOpen && (
        <Fragment>
          <Dialog>
            <div>
              <button onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}>
                <img src={"/static/close.svg"} />
                بستن
              </button>
            </div>
            <video
              autoPlay
              src={openDialog.src}
              controls="controls"
              className="block w-full"
              width="100%"
            ></video>
          </Dialog>
          <div
            className="bg-disable-dialog"
            onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}
          ></div>
        </Fragment>
      )}
    </Layout>
  );
};

export default Videos;

export const Section = props => {
  const { name, badge, links, platform, style, setOpenDialog } = props;

  const handleClickButton = src => {
    setOpenDialog({ isOpen: true, src });
  };

  return (
    <Fragment>
      <div style={style} id={platform} className="page-head">
        <div className="page-title">
          <h1>{name}</h1>
          <span className="page-description">({badge})</span>
        </div>
      </div>
      <div className="platform-videos-container">
        {links.map(item => (
          <div
            onClick={() => handleClickButton(item.link)}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              width: "100%",
            }}
          >
            {platform && (
              <span>
                <PlatformIcon platform={platform} />
              </span>
            )}
            {item.platform && (
              <span>
                <PlatformIcon platform={item.platform} />
              </span>
            )}
            <p style={{ marginRight: 15 }}>{item.videoTitle}</p>
            <button>
              <img src={"/static/play.svg"} />
              ویدیو
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export const Dialog = ({ children }) => {
  return <div className="dialog-container">{children}</div>;
};
