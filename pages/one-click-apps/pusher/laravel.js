import Head from "next/head";
import Layout from "../../../components/Layout";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
    <Layout>
        <Head>
            <title>
                سرویس ابری لیارا - مستندات اتصال به Pusher در برنامه‌های Laravel
            </title>
        </Head>
        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/pusher.png"
                alt="pusher"
            />
            <div className="page-title">
                <h1>مستندات اتصال به Pusher در برنامه‌های Laravel</h1>
                <span className="page-description">(Pusher one-click app)</span>
            </div>
        </div>


        <p>
            به‌طور کلی برای استفاده از سرور Pusher در برنامه‌‌های Laravel باید قطعه کد زیر را در فایل <span className="code">config/app.php</span> از comment خارج کنید.
        </p>

        <Highlight className="php">
            {`App\\Providers\\BroadcastServiceProvider`}
        </Highlight>

        <p>سپس در بخش متغیرهای تنظیمات سرویس تهیه شده، متغیر <span className="code">BROADCAST_DRIVER</span> را برابر با <span className="code">pusher</span> قرار دهید.</p>

        <p>حال به‌منظور اتصال به Pusher در برنامه‌های Laravel باید درایور زیر را به فایل <span className="code">config/broadcasting.php</span> اضافه کرده و آدرس برنامه‌ی Pusher را با <span className="code">pusher-app-address</span> جایگزین کنید: </p>
        <Highlight className="php">
            {`'pusher' => [
'driver' => 'pusher',
'key' => env('PUSHER_APP_KEY'),
'secret' => env('PUSHER_APP_SECRET'),
'app_id' => env('PUSHER_APP_ID'),
'options' => [
    'host' => 'pusher-app.iran.liara.run',
    'port' => 443,
    'scheme' => 'https'
    ],
],`}
        </Highlight>
        <p>در قدم بعد باید مقادیر <span className="code">PUSHER_APP_KEY</span>، <span className="code">PUSHER_APP_SECRET</span> و <span className="code">PUSHER_APP_ID</span> را براساس موارد تنظیم شده در زمان راه‌اندازی برنامه‌ی Pusher در فایل <span className="code">.env</span> مقداردهی کنید و در نهایت می‌توانید به شکل زیر در فرانت‌اند برنامه‌ی خود به سرور Pusher متصل شوید: </p>
        <Highlight className="javascript">
            {`import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'app-key',
  forceTLS: true,
  wsHost: 'pusher-app.iran.liara.run',
  wsPort: 443,
  disableStats: true,
});`}
        </Highlight>

        <Notice variant="warning">
            توجه داشته باشید که برای مقداردهی key و wsHost در فرانت‌اند برنامه به‌هیچ‌وجه از Laravel Mix استفاده نکنید و مقادیر app-key و pusher-app-address را به‌طور مستقیم در قطعه کد فوق قرار دهید.
        </Notice>

    </Layout>
);
