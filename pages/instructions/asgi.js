import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';
import Notice from '../../components/Notice';
import ProjectIcon from "../../components/ProjectIcon";

export default () => (
    <Layout>
        <Head>
            <title>استقرار برنامه‌های سازگار با ASGI - سرویس ابری لیارا</title>
        </Head>

        <div className="page-head">
            <ProjectIcon platform="docker" />
            <div className="page-title">
                <h1>استقرار برنامه‌های سازگار با ASGI</h1>
                <span className="page-description">(Docker Apps)</span>
            </div>
        </div>

        <p>
            ASGI (Asynchronous Server Gateway Interface) را می‌توان جایگزینی
            برای WSGI دانست که به ما امکان می‌دهد تا علاوه‌بر برنامه‌های وب
            Synchronous، قادر به اجرای برنامه‌های وب Asynchronous در زبان Python
            باشیم.
        </p>

        <Notice>
            توضیحات بیشتر:{' '}
            <a
                href="https://liara.ir/blog/synchronous-%d9%88-asynchronous-%da%86%db%8c%d8%b3%d8%aa%d8%9f/"
                target="_blank"
            >
                Synchronous و Asynchronous چیست؟
            </a>
        </Notice>

        <p>
            برای مثال برنامه‌ی Asynchronous زیر را درنظر بگیرید که Route فعلی را
            در مرورگر چاپ می‌کند.
        </p>
        <Highlight className="python">
            {`#routeprinter.py
async def app(scope, receive, send):
    headers = [(b"content-type", b"text/html")]
    await send({"type": "http.response.start", "status": 200, "headers": headers})
    await send({"type": "http.response.body", "body": scope["raw_path"]})`}
        </Highlight>

        <p>
            برای استقرار این برنامه در لیارا کافیست یک برنامه‌ی{' '}
            <Link href="/app-deploy/docker/getting-started">Docker</Link> تهیه
            کرده و در کنار فایل <span className="code">routeprinter.py</span> که
            قطعه کد فوق را دربرمی‌گیرد، فایلی با نام{' '}
            <span className="code">Dockerfile</span> ایجاد کرده و محتوای زیر را
            در آن قرار دهید.
        </p>
        <Highlight className="dockerfile">
            {`FROM python:3.9

WORKDIR /usr/src/app

COPY . .

RUN python -m pip install --upgrade pip

RUN python -m pip install daphne

CMD [ "daphne","-b","0.0.0.0","-p","80","routeprinter:app" ]`}
        </Highlight>

        <p>
            در Dockerfile فوق می‌توانید مشاهده کنید که در ابتدا کتابخانه‌ی{' '}
            <a href="https://pypi.org/project/daphne/" target="_blank">
                Daphne
            </a>{' '}
            که ASGI server ما محسوب می‌شود را نصب و سپس برنامه‌های{' '}
            <span className="code">routeprinter</span>
            را اجرا کرده‌ایم. حال برای استقرار این برنامه در لیارا کافیست تا طبق
            مستندات <Link href="/app-deploy/docker/deploy">
                اولین استقرار
            </Link>{' '}
            عمل کرده و دستور زیر را در مسیر اصلی پروژه اجرا کنیم.
        </p>

        <Highlight className="bash">
            {`$ liara deploy`}
        </Highlight>
    </Layout>
);
