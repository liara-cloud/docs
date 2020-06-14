import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات دامنه‌ها</title>
    </Head>

    <h1>دامنه‌ها</h1>
    <span className="pageDescription">(Domain Management)</span>

    <h3>تهیه‌ی SSL رایگان</h3>
    <p>
      لیارا این امکان را به شما می‌دهد که برای دامنه‌ها و زیردامنه‌های
      اختصاصی‌ای که اضافه می‌کنید، با یک کلیک و بدون هیچ تنظیماتی SSL رایگان
      تهیه کنید. تمدید SSL هم در زمان مناسب به صورت خودکار صورت می‌گیرد.
    </p>

    <h3>فعال‌سازی SSL</h3>
    <p>
      بعد از افزودن و فعال‌سازی دامنه، این امکان را دارید که درخواست فعال‌سازی
      بدهید. فقط کافیست به صفحه مدیریت دامنه مورد نظرتان بروید و روی دکمه{" "}
      <b>تهیه گواهی SSL</b> کلیک کنید. بعد از فعال شدن موفقیت آمیز گواهی SSL،
      سایت شما با <span className="code">https://</span> روی دامنه اختصاصی‌‌تان
      نیز قابل دسترس میشود.
    </p>
    <ZoomableImage src="/static/ssl.png" />

    <h3>فعال‌سازی HTTPS همراه با CDN</h3>
    <p>
      چنانچه از سرویس‌های CDN مانند Cloudflare استفاده می‌کنید، باید SSL را هم
      در سمت همان سرویس CDN فعال کنید و در سمت لیارا، SSL باید غیرفعال شود.
    </p>

    <Notice variant="info">
      در سرویس Cloudflare، تنظیمات SSL را همیشه روی Flexible تنظیم کنید.
    </Notice>

    <h3>آیا HTTPS شما معتبر است؟</h3>
    <p>
      ما از سرویس معتبر{" "}
      <a href="https://letsencrypt.org/" target="_blank" rel="noopener">
        Let's Encrypt
      </a>{" "}
      برای تهیه‌ی خودکار SSL و تمدید آن استفاده می‌کنیم. مطابق{" "}
      <a
        href="https://en.wikipedia.org/wiki/Let%27s_Encrypt"
        target="_blank"
        rel="noopener"
      >
        ویکی‌پدیا
      </a>
      :
    </p>
    <pre>
      <code>
        {`Let's Encrypt is a non-profit certificate authority run by
Internet Security Research Group (ISRG) that provides
X.509 certificates for Transport Layer Security (TLS) encryption
at no charge.`}
      </code>
    </pre>

    {/* <h3>چه تفاوتی بین HTTPS رایگان و غیر رایگان وجود دارد؟</h3> */}
  </Layout>
);
