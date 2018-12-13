import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>Liara | کنسول - ssh - console</title>
    </Head>

    <h1>کنسول</h1>
    <p>
      در اکثر پروژه‌ها، لازم است که بعد از مستقر کردن روی سرور، یک سری کارها انجام شود.
      برای مثال ممکن است بخواهید دیتابیس را با داده‌های اولیه پر کنید و یا ساختار جداول را ایجاد کنید (migrations).
      کنسول بهترین جایی است که می‌توانید دستوراتی که معمولا یک بار لازم است اجرا شوند را اجرا کنید.
    </p>

    <h3>دسترسی به کنسول</h3>
    <p>
      با مراجعه به فهرست «پروژه‌ها»، روی پروژه‌ی مورد نظرتان کلیک کنید.
      <br />
      سپس روی گزینه‌ی کنسول از فهرست سمت راست کلیک کنید تا وارد صفحه‌ی کنسول شوید.
    </p>
    <ZoomableImage src="/static/console1.png" alt="صفحه‌ی کنسول" />
    <p>
    در این صفحه، با کلیک کردن روی دکمه‌ی «اتصال»، به کنسول متصل شده و یک ترمینال برای‌تان اجرا خواهد شد.
    <br />
    این ترمینال،
    <span className="code">/bin/bash</span>
    را اجرا می‌کند.
    بنابراین می‌توانید هر دستوری که در
    bash
    قابل اجرا است را وارد نمایید.
    </p>
    <ZoomableImage src="/static/console2.png" alt="ترمینال" />
  </Layout>
)