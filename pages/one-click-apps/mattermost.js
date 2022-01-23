import Head from "next/head";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Mattermost - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mattermost" />
      <div className="page-title">
        <h1>نرم‌افزار چت و ارتباطات تیمی Mattermost</h1>
        <span className="page-description">(Mattermost one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://mattermost.com/" target="_blank" rel="noopener">
        Mattermost
      </a>{" "}
      نرم‌افزاری برای چت و گفتگوی درون تیمی است که می‌تواند جایگزین خوبی برای
      Slack باشد.
    </p>

    <h3>🚀 راه‌اندازی</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/mattermost/create-mattermost-one-click-app.gif"></ZoomableImage>
  </Layout>
);
