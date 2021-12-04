import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';
import Asciinema from '../../components/Asciinema';

export default () => (
    <Layout>
        <Head>
            <title>
                مستندات مدیریت حساب‌های کاربری با استفاده از لیارا CLI -
                سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <div className="page-title">
                <h1>رابط خط فرمان لیارا</h1>
                <span className="page-description">(Liara CLI)</span>
            </div>
        </div>

        <h4>مدیریت حساب‌های کاربری</h4>
        <Highlight className="bash">{`$ liara account`}</Highlight>
        <Asciinema id="452924" />
        <p>
            با اجرای این دستور می‌توانید دستورات مرتبط با مدیریت حساب‌های کاربری را مشاهده کنید.
        </p>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;account:add</li>
            <p dir="rtl" className="commandDescription">
                ۱. <Link href="#add">اضافه کردن یک حساب کاربری جدید</Link>
            </p>

            <li>&nbsp;&nbsp;account:list</li>
            <p dir="rtl" className="commandDescription">
                ۲. <Link href="#list">مشاهده‌ی لیستی از حساب‌های اضافه شده</Link>
            </p>

            <li>&nbsp;&nbsp;account:remove</li>
            <p dir="rtl" className="commandDescription">
                ۳. <Link href="#remove">حذف یکی از حساب‌های اضافه شده</Link>
            </p>

            <li>&nbsp;&nbsp;account:use</li>
            <p dir="rtl" className="commandDescription">
                ۴. <Link href="#use">انتخاب یکی از حساب‌های اضافه شده به‌عنوان حساب اصلی</Link>
            </p>

        </ol>

        <h4 id="add">اضافه کردن یک حساب کاربری جدید</h4>
        <Highlight className="bash">{`$ liara account:add`}</Highlight>
        <Asciinema id="452928" />
        <p>
            این دستور  از شما نام انتخابی، موقعیت مکانی، ایمیل و رمز عبور حساب ایجاد شده را می‌پرسد.
        </p>

        <h5>دستور <span className="code">liara account:add</span> این پارامتر‌ها را می‌پذیرد:</h5>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;-a, --account</li>
            <p dir="rtl" className="commandDescription">
                ۱. نام انتخابی شما
            </p>

            <li>&nbsp;&nbsp;-e, --email</li>
            <p dir="rtl" className="commandDescription">
                ۲. ایمیل حساب کاربری ایجاد شده در لیارا
            </p>

            <li>&nbsp;&nbsp;-h, --help</li>
            <p dir="rtl" className="commandDescription">
                ۳. نمایش راهنما
            </p>

            <li>&nbsp;&nbsp;-p, --password</li>
            <p dir="rtl" className="commandDescription">
                ۴. رمز عبور حساب کاربری ایجاد شده در لیارا
            </p>

            <li>&nbsp;&nbsp;--api-token=</li>
            <p dir="rtl" className="commandDescription">
                ۵. اضافه کردن یک حساب کاربری جدید به کمک{' '}
                <a href="https://console.liara.ir/API" target="_blank">
                    api token
                </a>{' '}
                بدون ورود به حساب کاربری
            </p>

            <li>&nbsp;&nbsp;--region=iran|germany</li>
            <p dir="rtl" className="commandDescription">
                ۶. مشخص‌کردن موقعیت جغرافیایی (مناسب ci/cd)
            </p>
        </ol>

        <h4 id="list">مشاهده‌ی لیستی از حساب‌های اضافه شده</h4>
        <Highlight className="bash">{`$ liara account:list`}</Highlight>
        <Asciinema id="452933" />
        <h5>دستور <span className="code">liara account:list</span> یا به اختصار <span className="code">liara account:ls</span> این پارامتر‌ها را می‌پذیرد:</h5>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;-h, --help</li>
            <p dir="rtl" className="commandDescription">
                ۱. نمایش راهنما
            </p>

            <li>&nbsp;&nbsp;--csv</li>
            <p dir="rtl" className="commandDescription">
                ۲. ارائه خروجی CSV از لیست حساب‌های اضافه شده
            </p>

            <li>&nbsp;&nbsp;--sort</li>
            <p dir="rtl" className="commandDescription">
                ۳. مرتب سازی لیست حساب‌های اضافه شده براساس Name, Email, Region, Current
            </p>

            <li>&nbsp;&nbsp;--region=iran|germany</li>
            <p dir="rtl" className="commandDescription">
                ۴. مشخص‌کردن موقعیت جغرافیایی
            </p>
        </ol>

        <h4 id="remove">حذف یکی از حساب‌های اضافه شده</h4>
        <Highlight className="bash">{`$ liara account:remove`}</Highlight>
        <Asciinema id="452934" />
        <h5>دستور <span className="code">liara account:remove</span> یا به اختصار <span className="code">liara account:rm</span> این پارامتر‌ها را می‌پذیرد:</h5>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;-a, --account</li>
            <p dir="rtl" className="commandDescription">
                ۱. نام حسابی که می‌خواهید آن را حذف کنید
            </p>

            <li>&nbsp;&nbsp;-h, --help</li>
            <p dir="rtl" className="commandDescription">
                ۲. نمایش راهنما
            </p>
        </ol>

        <h4 id="use">انتخاب یکی از حساب‌های اضافه شده به‌عنوان حساب اصلی</h4>
        <Highlight className="bash">{`$ liara account:use`}</Highlight>
        <Asciinema id="452932" />
        <h5>دستور <span className="code">liara account:use</span> این پارامتر‌ها را می‌پذیرد:</h5>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;-a, --account</li>
            <p dir="rtl" className="commandDescription">
                ۱. نام حسابی که می‌خواهید آن را به‌عنوان حساب اصلی استفاده کنید
            </p>

            <li>&nbsp;&nbsp;-h, --help</li>
            <p dir="rtl" className="commandDescription">
                ۲. نمایش راهنما
            </p>
        </ol>

        <br />
        <Link href="/cli/auto-complete">متوجه شدم، برو گام بعدی!</Link>

    </Layout>
);
