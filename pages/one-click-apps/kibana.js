import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نصب و راه‌اندازی Kibana - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="kibana" />
      <div className="page-title">
        <h1>پلتفرم Kibana</h1>
        <span className="page-description">(Kibana one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://www.elastic.co/kibana/" target="_blank" rel="noopener">
        Kibana
      </a>{" "}
      یک پلتفرم است که با استفاده از آن می‌توان ساز و کارهایی مثل ایجاد گزارش،
      ایجاد نوتیفیکشن، مانیتورینگ بخش‌های مختلف رویدادها و ... را در اختیار
      داشت. داده‌های kibana از طریق beats جمع آوری شده و با logstash به{" "}
      <Link href="/databases/elasticsearch/install">Elasticsearch</Link> منتقل
      می‌شود سپس kibana امکان رصد و مانیتورینگ را می‌دهد.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/kibana/create-kibana-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Kibana باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Kibana را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید. همچنین مشخص کنید
      که برنامه‌ی شما باید به کدام دیتابیس Elastic متصل شود و پلن مورد نظر خود
      را انتخاب کنید. در آخر بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک
      کنید.
    </p>

    <Notice variant="info">
      {`در اولین ورود به Kibana می‌توانید از نام کاربری elastic و رمزعبور دیتابیس Elasticsearch استفاده کنید اما پیشنهاد می‌کنیم بعد از ورود، در آدرس app/management/security/users/ یک کاربر جدید با سطح دسترسی kibana_admin بسازید و از این پس با این کاربر به Kibana وارد شوید.`}
    </Notice>

    <Notice variant="info">
      برای اتصال دامنه‌ی اختصاصی به این برنامه کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کرده و طبق مستندات، دامنه‌ اختصاصی مورد نظرتان را به برنامه متصل
      کنید.
    </Notice>
  </Layout>
);
