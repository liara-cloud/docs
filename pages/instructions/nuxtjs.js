import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

export default () => (
    <Layout>
        <Head>
            <title>
                استقرار برنامه‌های NuxtJS - سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/nuxt.svg"
                alt="nuxtjs"
            />
            <div className="page-title">
                <h1>استقرار برنامه‌های NuxtJS</h1>
                <span className="page-description">(NuxtJS Apps)</span>
            </div>
        </div>
        <p>
            NuxtJS یک فریم‌ورک مبتنی بر Vue است که بسیاری از قابلیت‌ها مانند SSR را برای شما به ارمغان می‌آورد و شما می‌توانید برنامه‌های NuxtJS خود را با ایجاد برنامه‌های <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link> بر روی لیارا دیپلوی کنید.
        </p>
        <p>
            توجه داشته باشید که برای دیپلوی برنامه‌های NuxtJs نیازی به ایجاد تغییر در فایل <span className="code">package.json</span> نیست و لیارا به‌طور کامل از این فریم‌ورک پشتیبانی می‌کند بنابراین تغییری در بخش <span className="code">scripts</span> ایجاد نکنید.
        </p>
        <Highlight className="json">{`"scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start"
},`}</Highlight>

        <p>
            حالت استاندارد npm scripts
            در برنامه‌های NuxtJS به‌شکل بالا است.
            در نهایت دستور
            <span className="code">liara deploy --port 3000</span>
            را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
        </p>

        <h3>Static Site Generation</h3>
        <p>
            Static Site Generation این امکان را فراهم کرده تا شما از برنامه‌های NuxtJS خود، خروجی استاتیک بگیرید و دیگر نیازی به سرور NodeJS نخواهید داشت.
        </p>

        <p>
            برای گرفتن خروجی استاتیک در برنامه‌های NuxtJS بایستی مقدار <span className="code">target</span> را در فایل <span className="code">nuxt.config.js</span> برابر با <span className="code">static</span> قرار دهید:
        </p>
        <Highlight className="javascript">
            {`export default {
  target: 'static'
}`}
        </Highlight>

        <p>
            درنهایت با هر بار اجرای دستور <span className="code">nuxt generate</span>، خروجی استاتیک برنامه‌ی شما اعم از فایل‌های HTML، CSS و JavaScript در مسیر <span className="code">dist</span> قرار خواهد گرفت. همچنین توجه داشته باشید که در این روش تمام درخواست‌های مورد نیاز برای دریافت اطلاعات از APIها در زمان اجرای دستور <span className="code">nuxt generate</span> ارسال شده و اطلاعات دریافت شده نیز در پوشه‌ای با نام <span className="code">static</span> در مسیر <span className="code">dist</span> قرار داده می‌شود.
        </p>
        <p>
            حال برای استقرار خروجی نهایی در لیارا کافیست که یک برنامه‌ی <Link href="/app-deploy/static/getting-started">Static</Link> در پنل کاربری خود ایجاد کرده و برنامه‌ی خود را با اجرای دستور <span className="code">liara deploy --path dist</span> بر روی لیارا مستقر کنید.
        </p>
    </Layout>
);
