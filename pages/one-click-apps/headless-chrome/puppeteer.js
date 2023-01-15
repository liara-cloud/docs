import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>لیارا - مستندات اتصال به Headless Chrome از طریق Puppeteer</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="chrome" />
      <div className="page-title">
        <h1>اتصال از طریق Puppeteer به برنامه‌ی Headless Chrome</h1>
        <span className="page-description">
          (Headless Chrome one-click app)
        </span>
      </div>
    </div>
    <p>
      برای اتصال از طریق Puppeteer به برنامه‌ی Headless Chrome باید تغییری در
      کدهای قبلی خود ایجاد کنیم. برای مثال قطعه کد زیر را درنظر بگیرید که ما با
      استفاده از آن مرورگر Chrome را برای انجام کارهای مورد نیاز خود راه‌اندازی
      می‌کردیم:
    </p>
    <Highlight className="javascript">
      {`const browser = await puppeteer.launch();`}
    </Highlight>
    <p>
      اما شما برای انجام این کار در لیارا باید به شکل زیر به برنامه‌ی Headless
      Chrome خود متصل شوید:
    </p>

    <Highlight className="javascript">
      {`const browser = await puppeteer.connect({
    browserWSEndpoint: \`wss://<liara-chrome-app-url>?token=<your-env-token>\`,
});`}
    </Highlight>

    <Notice variant="info">
      شما برای{" "}
      <a href="/one-click-apps/headless-chrome/tips#add-token">اتصال ایمن</a> به
      برنامه‌ی Headless Chrome خود به یک توکن نیاز خواهید داشت که می‌توانید
      آموزش اضافه کردن آن را در صفحه‌ی توضیحات و نکات تکمیلی مشاهده کنید.
    </Notice>
  </Layout>
);
