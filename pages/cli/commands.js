import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';

export default () => (
    <Layout>
        <Head>
            <title>
                مستندات خلاصه دستورات لیارا CLI - سرویس ابری لیارا
            </title>
        </Head>

        <h1>رابط خط فرمان لیارا</h1>
        <span className="page-description">(Liara CLI)</span>

        <h3>مشاهده‌ی راهنمای دستورات Liara CLI</h3>
        <Highlight className="plaintext">{`$ liara help`}</Highlight>

        <h3>نسخه‌ی Liara CLI</h3>
        <Highlight className="plaintext">{`$ liara -v`}</Highlight>

        <h3>ورود به حساب کاربری</h3>
        <Highlight className="plaintext">{`$ liara login`}</Highlight>
        <p>
            این دستور از شما موقعیت جغرافیایی، نام کاربری و رمزعبوری که با آن در
            لیارا ثبت نام کرده‌اید را می‌پرسد.{' '}
        </p>
        <h5>دستور <span className="code">liara login</span> این پارامتر‌ها را می‌پذیرد:</h5>
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

        <h3>استقرار برنامه</h3>
        <Highlight className="plaintext">{`$ liara deploy`}</Highlight>
        <p>
            این دستور از شما شناسه برنامه‌ای که قصد دارید پروژه‌تان در آن مستقر
            شود را می‌پرسد.
        </p>
        <h5>دستور <span className="code">liara deploy</span> این پارامتر‌ها را می‌پذیرد:</h5>
        <ol dir="ltr">
            <li>&nbsp;&nbsp;-a, --app</li>
            <p dir="rtl" className="commandDescription">
                ۱. شناسه برنامه‌ای که قصد دارید پروژه‌تان در آن مستقر شود
            </p>

            <li>&nbsp;&nbsp;-d, --disks</li>
            <p dir="rtl" className="commandDescription">
                ۲. اتصال یک یا چند دیسک به مسیرهای مورد نظر، برای مثال:
                disk-name:/var/www/html
            </p>

            <li>&nbsp;&nbsp;-h, --help</li>
            <p dir="rtl" className="commandDescription">
                ۳. نمایش راهنما
            </p>

            <li>&nbsp;&nbsp;-i, --image</li>
            <p dir="rtl" className="commandDescription">
                ۴. استقرار مستقیم Image از DockerHub
            </p>

            <li>&nbsp;&nbsp;-m, --message</li>
            <p dir="rtl" className="commandDescription">
                ۵. در نظر گرفتن پیامی برای این استقرار، مثلا fix the user login
                bug
            </p>

            <li>&nbsp;&nbsp;--api-token=</li>
            <p dir="rtl" className="commandDescription">
                ۶. اجرای آنی عملیات استقرار به کمک{' '}
                <a href="https://console.liara.ir/API" target="_blank">
                    api token
                </a>{' '}
                بدون ورود به حساب کاربری (مناسب ci/cd)
            </p>

            <li>&nbsp;&nbsp;--detach</li>
            <p dir="rtl" className="commandDescription">
                ۶. عدم نمایش لاگ‌ها بعد از هر استقرار
            </p>

            <li>&nbsp;&nbsp;--path</li>
            <p dir="rtl" className="commandDescription">
                ۷. آدرس ریشه پروژه‌ای که قصد استقرار آن را دارید
            </p>

            <li>&nbsp;&nbsp;--platform</li>
            <p dir="rtl" className="commandDescription">
                ۸. مشخص کردن پلتفرم [node, laravel, php, django, flask,
                netcore, react, angular, vue, static, docker]
            </p>

            <li>&nbsp;&nbsp;--port=port</li>
            <p dir="rtl" className="commandDescription">
                ۹. مشخص کردن port ای که برنامه شما به آن گوش می‌دهد.
            </p>

            <li>&nbsp;&nbsp;--region=iran|germany</li>
            <p dir="rtl" className="commandDescription">
                ۱۰. مشخص‌کردن موقعیت جغرافیایی (مناسب ci/cd)
            </p>
        </ol>

        <h3>ایجاد دیسک</h3>
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

        <h3>مدیریت برنامه‌ها</h3>
        <Highlight className="plaintext">{`$ liara app`}</Highlight>
        <p>
            با اجرای این دستور می‌توانید دستورات مرتبط با مدیریت برنامه‌ها را
            مشاهده کنید.
        </p>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;app:create</li>
            <p dir="rtl" className="commandDescription">
                ۱. <Link href="/cli/app/#create">ایجاد یک برنامه جدید</Link>
            </p>

            <li>&nbsp;&nbsp;app:delete</li>
            <p dir="rtl" className="commandDescription">
                ۲. <Link href="/cli/app/#delete">حذف یک برنامه</Link>
            </p>

            <li>&nbsp;&nbsp;app:logs</li>
            <p dir="rtl" className="commandDescription">
                ۳. <Link href="/cli/app/#logs">مشاهده‌ی لاگ‌های برنامه</Link>
            </p>

            <li>&nbsp;&nbsp;app:restart</li>
            <p dir="rtl" className="commandDescription">
                ۴. <Link href="/cli/app/#restart">ری‌استارت کردن برنامه</Link>
            </p>

            <li>&nbsp;&nbsp;app:shell</li>
            <p dir="rtl" className="commandDescription">
                ۵. <Link href="/cli/app/#shell">اتصال مستقیم به خط فرمان برنامه</Link>
            </p>

            <li>&nbsp;&nbsp;app:start</li>
            <p dir="rtl" className="commandDescription">
                ۶. <Link href="/cli/app/#start">روشن کردن برنامه</Link>
            </p>

            <li>&nbsp;&nbsp;app:stop</li>
            <p dir="rtl" className="commandDescription">
                ۷. <Link href="/cli/app/#stop">خاموش کردن برنامه</Link>
            </p>
        </ol>

        <h3>مدیریت متغیرهای محیطی</h3>
        <Highlight className="plaintext">{`$ liara env`}</Highlight>
        <p>
            با اجرای این دستور می‌توانید دستورات مرتبط با مدیریت متغیرهای محیطی برنامه‌ها را
            مشاهده کنید.
        </p>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;env:list</li>
            <p dir="rtl" className="commandDescription">
                ۱. <Link href="/cli/env/#list">مشاهده‌ی لیستی از متغیرهای محیطی تنظیم شده</Link>
            </p>

            <li>&nbsp;&nbsp;env:set</li>
            <p dir="rtl" className="commandDescription">
                ۲. <Link href="/cli/env/#set">تنظیم و یا ویرایش متغیر محیطی</Link>
            </p>

            <li>&nbsp;&nbsp;env:unset</li>
            <p dir="rtl" className="commandDescription">
                ۳. <Link href="/cli/env/#unset">حذف متغیر محیطی</Link>
            </p>
        </ol>

        <h3>پلن‌های سرویس برنامه</h3>
        <Highlight className="bash">{`$ liara plan:list`}</Highlight>

        <p>
            با اجرای دستور <span className="code">liara plan:list</span> یا به
            اختصار <span className="code">liara plan:ls</span> می‌توانید لیستی
            از پلن‌های سرویس برنامه را مشاهده کنید.
        </p>

        <h3>مدیریت حساب‌های کاربری</h3>
        <Highlight className="plaintext">{`$ liara account`}</Highlight>
        <p>
            با اجرای این دستور می‌توانید دستورات مرتبط با مدیریت حساب‌های کاربری
            را مشاهده کنید.
        </p>

        <ol dir="ltr">
            <li>&nbsp;&nbsp;account:add</li>
            <p dir="rtl" className="commandDescription">
                ۱.{' '}
                <Link href="/cli/account/#add">
                    اضافه کردن یک حساب کاربری جدید
                </Link>
            </p>

            <li>&nbsp;&nbsp;account:list</li>
            <p dir="rtl" className="commandDescription">
                ۲.{' '}
                <Link href="/cli/account/#list">
                    مشاهده‌ی لیستی از حساب‌های اضافه شده
                </Link>
            </p>

            <li>&nbsp;&nbsp;account:remove</li>
            <p dir="rtl" className="commandDescription">
                ۳.{' '}
                <Link href="/cli/account/#remove">
                    حذف یکی از حساب‌های اضافه شده
                </Link>
            </p>

            <li>&nbsp;&nbsp;account:use</li>
            <p dir="rtl" className="commandDescription">
                ۴.{' '}
                <Link href="/cli/account/#use">
                    انتخاب یکی از حساب‌های اضافه شده به‌عنوان حساب اصلی
                </Link>
            </p>
        </ol>

        <h3>تکمیل خودکار دستورات</h3>
        <Highlight className="bash">{`$ liara autocomplete`}</Highlight>
        <p>
            با اجرای این دستور می‌توانید راهنمای فعال‌سازی تکمیل خودکار دستورات
            لیارا CLI را در سیستم‌عامل فعلی خود مشاهده کنید.
        </p>
    </Layout>
);
