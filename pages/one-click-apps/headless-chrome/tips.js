import Head from "next/head";
import Layout from "../../../components/Layout";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
    <Layout>
        <Head>
            <title>
                توضیحات و نکات تکمیلی در برنامه‌های Headless Chrome - سرویس ابری لیارا
            </title>
        </Head>
        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/chrome.svg"
                alt="chrome"
            />
            <div className="page-title">
                <h1>برنامه‌ی Headless Chrome</h1>
                <span className="page-description">(Headless Chrome Apps)</span>
            </div>
        </div>

        <h3>🎯 توضیحات و نکات تکمیلی</h3>
        <h4 id="add-token">اضافه کردن توکن و اتصال امن به Headless Chrome</h4>
        <p>
            شما در قدم اول به یک توکن ایمن نیاز دارید بنابراین وارد صفحه‌ی <a href="https://www.lastpass.com/password-generator">Password Generator</a> وبسایت LastPass شده و گزینه‌ی <b>Easy to read</b> را انتخاب و پسوردی که ایجاد شده را با کلیک بر روی دکمه‌ی <b>Copy Password</b>، کپی کنید.
        </p>
        <ZoomableImage src="https://files.liara.ir/docs/headless-chrome/lastpass-password-generator.png"></ZoomableImage>
        <p>
            در مرحله‌ی بعد وارد تب برنامه‌ها شده و برنامه‌ی Headless Chrome خود را انتخاب کنید. اکنون باید پسورد کپی شده را در بخش <b>تنظیمات متغیرها</b> در فیلد <b>Value</b> متغیر <b>TOKEN</b> قرار دهید و درنهایت بر روی دکمه‌ی <b>ثبت تغییرات</b> کلیک کنید.
        </p>
        <ZoomableImage src="https://files.liara.ir/docs/headless-chrome/add-new-token-to-headless-chrome-app.gif"></ZoomableImage>

        <h4>غیرفعال کردن Debugger</h4>
        <p>اگر پس از ایجاد برنامه‌ی Headless Chrome، آدرس برنامه را در مرورگر خود باز کنید، با Debugger این برنامه روبرو خواهید شد که به‌صورت لایو می‌تواند مراحل کار را به شما نشان دهد. </p>
        <ZoomableImage src="https://files.liara.ir/docs/headless-chrome/headless-chrome-debugger.png"></ZoomableImage>
        <p>اما این قابلیت وجود دارد که <b>Debugger</b> را غیرفعال کنید. برای این کار باید وارد <b>تنظیمات متغیرهای</b> برنامه شده و مقدار <b>ENABLE_DEBUGGER</b> را برابر با <b>false</b> قرار دهید و درنهایت بر روی دکمه‌ی <b>ثبت تغییرات</b> کلیک کنید.</p>
        <ZoomableImage src="https://files.liara.ir/docs/headless-chrome/disable-debugger-in-headless-chrome.gif"></ZoomableImage>
    </Layout>
);