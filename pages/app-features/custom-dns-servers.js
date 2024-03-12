import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات DNS Server - لیارا</title>
    </Head>

    <h1>تنظیم DNS Server</h1>
    <span className="page-description">(DNS Server)</span>

    <p>
      شاید بارها برای شما پیش آمده باشد که قصد داشته باشید درون برنامه خود از
      API یا ویژگی‌های خاص دیگری استفاده کنید؛ اما به هر نحوی (مانند تحریم‌های
      ظالمانه) نتوانسته‌اید ارتباط موفقی را در کانتینر (سرتاسر برنامه) خود شکل
      دهید. در این صورت شما بایستی که DNS خاصی را بر روی برنامه خود تنظیم کنید و
      ممکن است این کار، به خودی خود، کمی سخت و حوصله سربر باشد. لیارا، این مشکل
      را برایتان حل کرده است.
    </p>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید:
    </p>
    <ZoomableImage
      src="https://files.liara.ir/docs/set-dns/set-dns.gif"
      alt="تنظیم دی‌ان‌اس بر روی برنامه در لیارا"
    />

    <p>
      شما می‌توانید پس از ایجاد برنامه خود، در بخش{" "}
      <strong>تنظیمات، تنظیم DNS Server</strong>، دی‌ان‌اس مد نظر خود را بر روی
      کل برنامه، تنظیم کنید.
    </p>
    <ZoomableImage
      src="/static/set-dns-server.png"
      alt="تنظیم دی‌ان‌اس بر روی برنامه در لیارا"
    />

    <Notice variant="warning">
      دقت داشته باشید که شما می‌توانید حداکثر 4 دی‌ان‌اس را بر روی برنامه خود،
      تنظیم کنید.
    </Notice>

    <p>
      پس از آنکه دی‌ان‌اس‌ها را در قسمت <strong>تنظیم DNS Server</strong> به
      درستی قرار دادید؛ کافیست که بر روی گزینه <strong>ثبت تغییرات</strong>،
      کلیک کنید.
    </p>

    <Notice variant="info">
      در نظر داشته باشید که ممکن است پس از ثبت تغییرات، برنامه شما یکبار
      ری‌استارت شود.
    </Notice>
  </Layout>
);
