import React, { Fragment, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import PlatformIcon from "../../components/PlatformIcon";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const Videos = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
      </Head>

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
        ]}
      />

      <Section
        name={"پلتفرم NextJS"}
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
        ]}
      />

      <Section
        name={"پلتفرم .Net"}
        platform="netcore"
        style={{ marginTop: 40 }}
        badge={".Net Platform"}
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
        ]}
      />

      <Section
        name={"راه اندازی CI/CD"}
        platform="git"
        style={{ marginTop: 40 }}
        badge={"Continuous Integration and Continuous Delivery"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "راه اندازی CI/CD به وسیله GitHub",
            link: "https://files.liara.ir/liara/CICD/cicd-github.mp4",
          },
          {
            videoTitle: "راه اندازی CI/CD به وسیله GitLab",
            link: "https://files.liara.ir/liara/CICD/cicd-gitlab.mp4",
          },
        ]}
      />

      <Section
        name={"راه‌اندازی دیتابیس "}
        style={{ marginTop: 40 }}
        badge={"Databases"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "راه‌اندازی MySQL",
            link: "https://files.liara.ir/liara/mysql/create-mysql.mp4",
            platform: "mysql",
          },
          {
            videoTitle: "راه‌اندازی MariaDB",
            link: "https://files.liara.ir/liara/mariadb/create-mariadb.mp4",
            platform: "mariadb",
          },
          {
            videoTitle: "راه‌اندازی MariaDB",
            link: "https://files.liara.ir/liara/postgresql/create-postgresql.mp4",
            platform: "postgres",
          },
          {
            videoTitle: "راه‌اندازی SQL Server",
            link: "https://files.liara.ir/liara/mssql/create-mssql.mp4",
            platform: "mssql",
          },
          {
            videoTitle: "راه‌اندازی MongoDB",
            link: "https://files.liara.ir/liara/mongodb/create-mongodb.mp4",
            platform: "mongodb",
          },
          {
            videoTitle: "راه‌اندازی Redis",
            link: "https://files.liara.ir/liara/redis/create-redis.mp4",
            platform: "redis",
          },
          {
            videoTitle: "راه‌اندازی Elasticsearch",
            link: "https://files.liara.ir/liara/elastic/create-elastic.mp4",
            platform: "elastic",
          },
        ]}
      />

      {openDialog.isOpen && (
        <Fragment>
          <Dialog>
            <div>
              <button onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}>
                <img src={"static/close.svg"} />
                بستن
              </button>
              {/* <a download="liara-video" href={openDialog.src}>
                    <button>
                        <img src={"static/download-video.svg"} />
                        دانلود
                    </button>
                </a> */}
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

const Section = props => {
  const { name, badge, links, platform, style, setOpenDialog } = props;

  const handleClickButton = src => {
    setOpenDialog({ isOpen: true, src });
  };

  return (
    <Fragment>
      <div style={style} className="page-head">
        <div className="page-title">
          <h1>{name}</h1>
          <span className="page-description">({badge})</span>
        </div>
      </div>
      <div className="platform-videos-container">
        {links.map(item => (
          <div
            onClick={() => handleClickButton(item.link)}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
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

const Dialog = ({ children }) => {
  return <div className="dialog-container">{children}</div>;
};
