import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";


export default () => (
    <Layout>
        <Head>
            <title>مستندات راه‌اندازی Pusher - سرویس ابری لیارا</title>
        </Head>
        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/pusher.svg"
                alt="pusher"
            />
            <div className="page-title">
                <h1>راه‌اندازی برنامه Pusher</h1>
                <span className="page-description">(Pusher one-click app)</span>
            </div>
        </div>

        <h3>🚀 راه‌اندازی</h3>

        <p><a href="https://pws.soketi.app/" target="_blank">PWS (Pusher Websockets Server)</a> یک جایگزین رایگان و متن‌باز برای سرویس Pusher است که کاملا با پروتکل <a href="https://pusher.com/docs/channels/library_auth_reference/pusher-websockets-protocol/#version-7-2017-11" target="_blank">Pusher v7</a> سازگار شده و به شما در توسعه‌ی برنامه‌های Real-time کمک می‌کند.</p>

        <ZoomableImage src="https://files.liara.ir/docs/pusher/create-new-pusher-one-click-app.gif"></ZoomableImage>
        <p>
            برای راه‌اندازی برنامه‌ی Pusher باید در بخش برنامه‌های کنسول لیارا بر روی دکمه‌ی <b>ایجاد برنامه</b> کلیک کرده و در صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی <b>Pusher</b> را انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی <b>ایجاد برنامه</b> کلیک کنید.
        </p>

        <h4>تنظیم متغیرهای <span className="code">DEFAULT_APP_ID</span>، <span className="code">DEFAULT_APP_KEY</span>، <span className="code">DEFAULT_APP_SECRET</span></h4>
        <p>
            شما در قدم اول به دو متغیر ایمن  برای مقداردهی متغیرهای <span className="code">DEFAULT_APP_KEY</span> و <span className="code">DEFAULT_APP_SECRET</span> نیاز دارید بنابراین وارد صفحه‌ی <a href="https://www.lastpass.com/password-generator">Password Generator</a> وبسایت LastPass شده و گزینه‌ی <b>Easy to read</b> را انتخاب و پسوردی که ایجاد شده را با کلیک بر روی دکمه‌ی <b>Copy Password</b>، کپی کنید.
        </p>
        <ZoomableImage src="https://files.liara.ir/docs/pusher/lastpass-password-generator.png"></ZoomableImage>
        <p>
            در مرحله‌ی بعد وارد تب برنامه‌ها شده و برنامه‌ی Pusher خود را انتخاب کنید. اکنون باید متغیرهای کپی شده را در بخش <b>تنظیمات متغیرها</b> در فیلدهای مربوطه قرار دهید و درنهایت بر روی دکمه‌ی <b>ثبت تغییرات</b> کلیک کنید.
        </p>
        <ZoomableImage src="https://files.liara.ir/docs/pusher/configure-environment-variables-in-pusher-app-settings.gif"></ZoomableImage>

    </Layout>
);