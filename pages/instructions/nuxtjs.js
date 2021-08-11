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
            در برنامه‌های NuxtJS همانند به‌شکل بالا است.
            در نهایت دستور
            <span className="code">liara deploy --port 3000</span>
            را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
        </p>
    </Layout>
);
