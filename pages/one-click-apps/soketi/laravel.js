import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا - مستندات اتصال به Soketi در برنامه‌های Laravel
      </title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="soketi" />
      <div className="page-title">
        <h1>برنامه‌های آماده Soketi</h1>
        <span className="page-description">(Soketi one-click app)</span>
      </div>
    </div>

    <h3>اتصال به Soketi در برنامه‌های Laravel</h3>
    <p>
      به‌طور کلی برای استفاده از سرور Soketi در برنامه‌‌های Laravel باید قطعه کد
      زیر را در فایل <span className="code">config/app.php</span> از comment
      خارج کنید.
    </p>

    <Highlight className="php">
      {`App\\Providers\\BroadcastServiceProvider`}
    </Highlight>

    <p>
      سپس در بخش متغیرهای تنظیمات سرویس تهیه شده، متغیر{" "}
      <span className="code">BROADCAST_DRIVER</span> را برابر با{" "}
      <span className="code">pusher</span> قرار دهید.
    </p>

    <p>
      حال به‌منظور اتصال به Soketi در برنامه‌های Laravel باید درایور زیر را به
      فایل <span className="code">config/broadcasting.php</span> اضافه کرده و
      آدرس برنامه‌ی Soketi را با{" "}
      <span className="code">soketi-app.iran.liara.run</span> جایگزین کنید:{" "}
    </p>
    <Highlight className="php">
      {`'pusher' => [
'driver' => 'pusher',
'key' => env('PUSHER_APP_KEY'),
'secret' => env('PUSHER_APP_SECRET'),
'app_id' => env('PUSHER_APP_ID'),
'options' => [
    'host' => 'soketi-app.iran.liara.run',
    'port' => 443,
    'scheme' => 'https'
    ],
],`}
    </Highlight>
    <p>
      در قدم بعد باید مقادیر <span className="code">PUSHER_APP_KEY</span>،{" "}
      <span className="code">PUSHER_APP_SECRET</span> و{" "}
      <span className="code">PUSHER_APP_ID</span> را براساس موارد تنظیم شده در
      تنظیمات متغیرهای برنامه‌ی Soketi، در تنظیمات متغیرهای برنامه‌ی Laravel
      مقداردهی کنید. در نهایت می‌توانید به شکل زیر در فرانت‌اند برنامه‌ی خود به
      سرور Soketi متصل شوید:{" "}
    </p>
    <Highlight className="javascript">
      {`import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'app-key',
  forceTLS: true,
  wsHost: 'soketi-app.iran.liara.run',
  wsPort: 443,
  disableStats: true,
});`}
    </Highlight>

    <Notice variant="warning">
      توجه داشته باشید که برای مقداردهی key و wsHost در فرانت‌اند برنامه
      به‌هیچ‌وجه از Laravel Mix استفاده نکنید و مقادیر app-key و
      soketi-app.iran.liara.run را به‌طور مستقیم در قطعه کد فوق قرار دهید.
    </Notice>
  </Layout>
);
