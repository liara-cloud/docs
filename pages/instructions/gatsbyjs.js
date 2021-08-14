import Head from "next/head"
import Link from "next/link"
import Highlight from "react-highlight"
import Layout from "../../components/Layout"

export default () => (
    <Layout>
        <Head>
            <title>
                استقرار برنامه‌های GatsbyJS - سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/Gatsby.svg"
                alt="GatsbyJS"
            />
            <div className="page-title">
                <h1>استقرار برنامه‌های GatsbyJS</h1>
                <span className="page-description">(GatsbyJS Apps)</span>
            </div>
        </div>

        <p>
            Gatsby یک فریم‌ورک SSG مبتنی بر GraphQL و React است که این امکان را برای شما فراهم می‌کند تا وبسایت‌های خود را سریع‌تر، ایمن‌تر و قدرتمندتر از گذشته توسعه دهید. حال برای استقرار برنامه‌های GatsbyJS در لیارا تنها کافی است که مراحل زیر را دنبال کنید:
        </p>
        <h3>build گرفتن از برنامه</h3>
        <Highlight className="bash">{`$ npm run build`}</Highlight>
        <p>
            با اجرای دستور فوق، فرایند build گرفتن از برنامه‌ی شما شروع خواهد شد و درنهایت تمام فایل‌های استاتیک اعم از فایل‌های HTML/CSS/JS در پوشه‌ی <span className="code">public</span> قرار داده می‌شوند.
        </p>

        <h3>دیپلوی برنامه در پلتفرم استاتیک</h3>
        <p>
            همان‌طور که گفته شد، Gatsby یک فریم‌ورک SSG (Static Site Generator) است بنابراین خروجی نهایی شامل فایل‌های استاتیک HTML، CSS و JavaScript خواهد بود که شما می‌توانید با اجرای دستورهای:
            <Highlight className="bash">
                {`$ cd public
$ liara deploy --platform=static`}
            </Highlight>
            برنامه‌ی خود را مانند برنامه‌های <Link href="/app-deploy/static/getting-started">Static</Link> در لیارا مستقر کنید.
        </p>
    </Layout>
)