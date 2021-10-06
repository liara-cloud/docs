import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

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
                <h1> توضیحات و نکات تکمیلی</h1>
                <span className="page-description">(Docker Apps)</span>
            </div>
        </div>

        <h3 id="limits">محدودیت‌ها</h3>
        <p>
            <ol>
                <li>
                    استفاده از <span className="code">VOLUME</span>
                    در Dockerfile:
                    فایل‌سیستم لیارا ReadOnly
                    است و شما نمی‌تونید از دستور
                    <span className="code">VOLUME</span>
                    در Dockerfile
                    استفاده کنید و به‌جای آن باید از قابلیت «دیسک‌ها» استفاده کنید. لازم است که این عبارت را قبل از استقرار حذف کنید.
                    چنانچه از Image‌های
                    DockerHub هم استفاده کنید، باید نظیر به‌نظیر
                    <span className="code">VOLUME</span>
                    هایی که در آن Image
                    تعریف شده، دیسک بسازید و دیسک را در همان مسیر mount
                    کنید.
                    <br />
                    برای مثال، Dockerfile زیر را در نظر بگیرید:
                    <pre>
                        <code>
                            {`FROM ubuntu

RUN echo hello

VOLUME /path/to/data`}
                        </code>
                    </pre>
                    این فایل برای این‌که بتواند در لیارا مستقر شود، باید خطی که در آن
                    <span className="code">VOLUME</span>
                    تعریف شده، حذف شود.
                </li>
                <li>
                    استفاده از <span className="code">EXPOSE</span>
                    در Dockerfile:
                    لیارا از این قسمت از Dockerfile
                    شما صرف‌نظر می‌کند. شما باید حتما پورتی که مدنظرتان است را با پارامتر
                    <span className="code">--port</span>
                    تنظیم کنید.
                </li>
                <li>
                    تنها به‌پورت‌های HTTP
                    می‌توانید از خارج از شبکه‌ی لیارا متصل شوید. برای مثال اگر یک سرویس مانند
                    RabbitMQ
                    را مستقر کنید، به‌این سرویس تنها در شبکه‌ی خصوصی لیارا دسترسی خواهید داشت.
                </li>
            </ol>
        </p>

    </Layout>
);