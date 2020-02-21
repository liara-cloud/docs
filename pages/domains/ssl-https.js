import Layout from '../../components/Layout'
import Head from 'next/head'
import Notice from '../../components/Notice'

export default () => (
  <Layout>
    <Head>
      <title>Liara | تهیه‌ی SSL رایگان - Let's Encrypt Free HTTPS</title>
    </Head>

    <h3>تهیه‌ی SSL رایگان</h3>
    <p>
      لیارا این امکان را به شما می‌دهد که برای دامنه‌ها و زیردامنه‌های اختصاصی‌ای
      که اضافه می‌کنید، با یک کلیک و بدون هیچ تنظیماتی SSL رایگان تهیه کنید.
      تمدید SSL هم در زمان مناسب به صورت خودکار صورت می‌گیرد.
    </p>

    <h3>فعال‌سازی SSL</h3>
    <p>
      بعد از افزودن و فعال‌سازی دامنه، این امکان را دارید که درخواست فعال‌سازی
      SSL
      بدهید. در ویدیوی زیر می‌توانید راهنمای عملی این قابلیت را مشاهده کنید:
    </p>

    <video src="https://files.liara.ir/liara/enable-https.mp4" controls></video>
    <Notice variant="info">
      ویدیو بدون صدا است.
    </Notice>

    {/* <h3>تنظیمات لازم در CDN ها</h3>
    <p> */}
      {/* اگر سرویس‌هایی مانند Cloudflare استفاده می‌کنید،
      باید ابر نارنجی را غیر فعال کنید. */}
      {/* TODO: explain more with pictures */}
    {/* </p> */}

    {/* <h3>تهیه‌ی HTTPS برای Subdomain</h3> */}

    <h3>آیا HTTPS شما معتبر است؟</h3>
    <p>
      ما از سرویس معتبر
      {' '}
      <a href="https://letsencrypt.org/" target="_blank" rel="noopener">
        Let's Encrypt
      </a>
      {' '}
      برای تهیه‌ی خودکار SSL و تمدید آن استفاده می‌کنیم.
      مطابق
      {' '}
      <a href="https://en.wikipedia.org/wiki/Let%27s_Encrypt" target="_blank" rel="noopener">
        ویکی‌پدیا
      </a>:
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
)
