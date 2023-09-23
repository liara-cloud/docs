import Link from "next/link";
import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال برنامه‌های وردپرس به ذخیره‌سازی ابری - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="wordpress" />
      <div className="page-title">
        <h1>وردپرس پلاس</h1>
        <span className="page-description">(WordPress plus)</span>
      </div>
    </div>

    <h2>اتصال برنامه‌های وردپرس به ذخیره‌سازی ابری</h2>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/wordpress/wordpress-object-storage.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      برای اتصال برنامه‌ی وردپرس به ذخیره‌سازی ابری لیارا می‌توانید از
      پلاگین‌های موجود مانند{" "}
      <a
        href="https://wordpress.org/plugins/ilab-media-tools/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Media Cloud
      </a>{" "}
      استفاده کنید.
    </p>

    <ZoomableImage src="/static/wp-plus/install-and-activate-media-cloud-plugin.png" />

    <p>
      بعد از نصب و فعال‌سازی این پلاگین تنها کافی است مراحل زیر را دنبال کنید:
    </p>

    <p style={{ direction: "ltr" }}>
      <strong>
        Skip freemius {">"} Next {">"} Choose S3 Compatible Storage Provider{" "}
        {">"} Next {">"} Enter S3 Credentials {">"} Next {">"} Finish & Exit
        Wizard
      </strong>
    </p>

    <Notice variant="info">
      {`در فیلد Custom endpoint باید آدرس https://storage.iran.liara.space را وارد کنید.`}
    </Notice>

    <br />
    {/* <ZoomableImage src="/static/wp-plus/skip-opt-media-cloud-plugin.png" /> */}

    {/* <ZoomableImage src="/static/wp-plus/welcome-to-media-cloud.png" /> */}

    {/* <ZoomableImage src="/static/wp-plus/choose-s3-provider.png" /> */}

    {/* <ZoomableImage src="/static/wp-plus/get-started-media-cloud.png" /> */}

    <ZoomableImage src="/static/wp-plus/config-s3-credentials.png" />

    {/* <ZoomableImage src="/static/wp-plus/test-media-cloud.png" /> */}

    {/* <ZoomableImage src="/static/wp-plus/finish-and-exit-media-cloud.png" /> */}
  </Layout>
);
