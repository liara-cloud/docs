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
                <span className="page-description">(Headless Chrome one-click app)</span>
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
    </Layout>
);