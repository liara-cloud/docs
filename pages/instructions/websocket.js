import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>ارتباط از طریق WebSocket - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <div className="page-title">
        <h1>WebSocket</h1>
      </div>
    </div>

    <p>
      WebSocket یکی دیگر از پروتکل‌های ارتباطی موجود در کامپیوترها است و می‌توان
      از این پروتکل برای توسعه‌ی برنامه‌های Realtime استفاده کرد زیرا پروتکل
      WebSocket یک Channel ارتباطی دوطرفه بین کلاینت و سرور به‌وجود می‌آورد.
    </p>

    <p>
      لیارا از پروتکل WebSocket پشتیبانی می‌کند و شما در برنامه‌های خود
      می‌توانید بدون مشکل از پکیج{" "}
      <a
        href="https://www.npmjs.com/package/socket.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        socket.io
      </a>{" "}
      یا{" "}
      <a
        href="https://www.npmjs.com/package/ws"
        target="_blank"
        rel="noopener noreferrer"
      >
        ws
      </a>{" "}
      استفاده کنید. برای مثال اگر یک برنامه <strong>Express</strong> داشته باشید
      و از پکیج <strong>ws</strong> استفاده می‌کنید، می‌توانید به‌شکل زیر
      برنامه‌ی خود را بر روی یک پورت اجرا کنید:
    </p>

    <Highlight className="javascript">
      {`const app = express();
const server = app.listen(3000, () => {
  console.log('Running');
});
const wss = new WebSocketServer({ server });`}
    </Highlight>
  </Layout>
);
