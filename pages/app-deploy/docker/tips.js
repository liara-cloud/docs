import Layout from '../../../components/Layout';
import Notice from '../../../components/Notice';
import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';

export default () => (
    <Layout>
        <Head>
            <title>
                توضیحات و نکات تکمیلی در برنامه‌های Docker - سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/docker.svg"
                alt="docker"
            />
            <div className="page-title">
                <h1>برنامه‌های Docker</h1>
                <span className="page-description">(Docker Apps)</span>
            </div>
        </div>

        <h3> توضیحات و نکات تکمیلی</h3>

        <h3 id="limits">محدودیت‌ها</h3>
        <h4>
            {' '}
            استفاده از <span className="code">VOLUME</span>
            در Dockerfile
        </h4>
        <p>
            <Link href="/app-features/file-system">
                فایل سیستم برنامه‌های لیارا
            </Link>{' '}
            Read-Only است و شما نمی‌تونید از دستور
            <span className="code">VOLUME</span>
            در Dockerfile استفاده کنید و به‌جای آن باید از قابلیت «
            <Link href="/app-deploy/docker/disks">دیسک‌ها</Link>» استفاده کنید.
            لازم است که این عبارت را قبل از استقرار حذف کنید. چنانچه از{' '}
            <Link href="/app-deploy/docker/deploy-image">
                Image‌های DockerHub
            </Link>{' '}
            هم استفاده کنید، باید نظیر به‌نظیر
            <span className="code">VOLUME</span>
            هایی که در آن Image تعریف شده، دیسک بسازید و دیسک را در همان مسیر
            mount کنید.
            <br />
            برای مثال، Dockerfile زیر را در نظر بگیرید:
            <Highlight className="dockerfile">
                {`FROM ubuntu

RUN echo hello

VOLUME /path/to/data`}
            </Highlight>
            این فایل برای این‌که بتواند در لیارا مستقر شود، باید خطی که در آن
            <span className="code">VOLUME</span>
            تعریف شده، حذف شود.
            <h4>
                استفاده از <span className="code">EXPOSE</span>
                در Dockerfile
            </h4>
            لیارا از این قسمت از Dockerfile شما صرف‌نظر می‌کند. شما باید حتما
            پورتی که مدنظرتان است را با پارامتر
            <span className="code">--port</span>
            تنظیم کنید. تنها به‌پورت‌های HTTP می‌توانید از خارج از شبکه‌ی لیارا
            متصل شوید. برای مثال اگر یک سرویس مانند RabbitMQ را مستقر کنید،
            به‌این سرویس تنها در شبکه‌ی خصوصی لیارا دسترسی خواهید داشت.
        </p>
    </Layout>
);
