import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';

export default () => (
    <Layout>
        <Head>
            <title>
                مستندات ورود به حساب کاربری در رابط خط فرمان لیارا Liara CLI -
                سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <div className="page-title">
                <h1>رابط خط فرمان لیارا</h1>
                <span className="page-description">(Liara CLI)</span>
            </div>
        </div>

        <h4>ورود به حساب کاربری</h4>
        <Highlight className="bash">{`$ liara login`}</Highlight>
        <p>
            این دستور از شما موقعیت جغرافیایی، ایمیل و رمز عبوری که با آن در
            لیارا ثبت نام کرده‌اید را می‌پرسد.
        </p>

        <h5>دستور <span className="code">liara login</span> این پارامتر‌ها را می‌پذیرد</h5>
        <ol dir="ltr">
            <li>&nbsp;&nbsp;-e, --email</li>
            <p dir="rtl" className="commandDescription">
                ۱. ایمیل حساب کاربری ایجاد شده در لیارا
            </p>

            <li>&nbsp;&nbsp;-h, --help</li>
            <p dir="rtl" className="commandDescription">
                ۲. نمایش راهنما
            </p>

            <li>&nbsp;&nbsp;-p, --password</li>
            <p dir="rtl" className="commandDescription">
                ۳. رمز عبور حساب کاربری ایجاد شده در لیارا
            </p>

            <li>&nbsp;&nbsp;--api-token=</li>
            <p dir="rtl" className="commandDescription">
                ۴. ورود مستقیم به حساب کاربری ایجاد شده با{' '}
                <a href="https://console.liara.ir/API" target="_blank">
                    api token
                </a>{' '}
                (مناسب ci/cd)
            </p>
            
            <li>&nbsp;&nbsp;--region=iran|germany</li>
            <p dir="rtl" className="commandDescription">
                ۵. مشخص‌کردن موقعیت جغرافیایی (مناسب ci/cd)
            </p>
        </ol>

        <br />
        <Link href="/cli/deploy">متوجه شدم، برو گام بعدی!</Link>

    </Layout>
);
