import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';

export default () => (
    <Layout>
        <Head>
            <title>
                مستندات مدیریت دیسک‌ها در رابط خط فرمان لیارا Liara CLI - سرویس ابری
                لیارا
            </title>
        </Head>

        <h1>رابط خط فرمان لیارا</h1>
        <span className="page-description">(Liara CLI)</span>

        <h4>مدیریت دیسک‌ها</h4>
        <Highlight className="bash">{`$ liara disk`}</Highlight>
        <p>
            با اجرای این دستور می‌توانید دستورات مرتبط با مدیریت دیسک‌ها را مشاهده کنید.
        </p>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;app:create</li>
            <p dir="rtl" className="commandDescription">
                ۱. <Link href="#create">ایجاد یک دیسک جدید</Link>
            </p>
        </ol>

        <h4 id="create">ایجاد یک دیسک جدید</h4>
        <Highlight className="bash">{`$ liara disk:create`}</Highlight>

        <p>
            این دستور از شما شناسه برنامه، نام و اندازه دیسک مورد نیاز را می‌پرسد.
        </p>

        <h5>
            دستور <span className="code">liara disk:create</span> این پارامتر‌ها
            را می‌پذیرد:
        </h5>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;-a, --app</li>
            <p dir="rtl" className="commandDescription">
                ۱. شناسه برنامه‌ای که قصد دارید دیسک مورد نظر را در آن ایجاد کنید
            </p>

            <li>&nbsp;&nbsp;-h, --help</li>
            <p dir="rtl" className="commandDescription">
                ۲. نمایش راهنما
            </p>

            <li>&nbsp;&nbsp;-n, --name</li>
            <p dir="rtl" className="commandDescription">
                ۳. نام دیسک
            </p>

            <li>&nbsp;&nbsp;-s, --size</li>
            <p dir="rtl" className="commandDescription">
                ۴. اندازه‌ی دلخواه به گیگابایت
            </p>

            <li>&nbsp;&nbsp;--api-token=</li>
            <p dir="rtl" className="commandDescription">
                ۵. اجرای آنی عملیات ایجاد دیسک به کمک{' '}
                <a href="https://console.liara.ir/API" target="_blank">
                    api token
                </a>{' '}
                بدون ورود به حساب کاربری (مناسب ci/cd)
            </p>

            <li>&nbsp;&nbsp;--region=iran|germany</li>
            <p dir="rtl" className="commandDescription">
                ۶. مشخص‌کردن موقعیت جغرافیایی (مناسب ci/cd)
            </p>
        </ol>

        <Link href="/cli/app">متوجه شدم، برو گام بعدی!</Link>
    </Layout>
);
