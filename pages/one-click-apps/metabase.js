import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

export default () => (
    <Layout>
        <Head>
            <title>
                نصب و راه‌اندازی Metabase - سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/metabase.svg"
                alt="metabase"
            />
            <div className="page-title">
                <h1>هوش تجاری (BI) با Metabase</h1>
                <span className="page-description">(Metabase one-click app)</span>
            </div>
        </div>

        <p>
            Metabase ابزاری متن باز است که بدون نیاز به دانش اولیه برای کار با دیتابیس‌های مختلف به شما کمک می‌کند نمودارهای تحلیلی مورد نیاز خود را در کمترین زمان ممکن از داده‌های خام موجود در دیتابیس تهیه کنید و آن‌ها را با دیگران به‌اشتراک بگذارید.
        </p>

        <h3>دیتابیس‌هایی که Metabase پشتیبانی می‌کند</h3>
        <div dir="ltr">
            <ul>
                <li>
                    <Link href="/databases/mongodb/install">
                        <a>MongoDB (version 3.6 or higher)</a>
                    </Link>
                </li>

                <li>
                    <Link href="/databases/mysql-mariadb/install">
                        <a>MySQL/MariaDB (version 5.7 or higher - version 10.2 or higher)</a>
                    </Link>
                </li>

                <li>
                    <Link href="/databases/postgresql/install">
                        <a>PostgreSQL</a>
                    </Link>
                </li>
                <li>
                    <Link href="/databases/sqlserver/install">
                        <a>SQL Server</a>
                    </Link>
                </li>
                <li>SQLite</li>
                <li>...</li>
            </ul>
        </div>
        <h3>🚀 راه‌اندازی</h3>
        <p>
            در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر ‌را مشاهده کنید.
        </p>
        <ZoomableImage src="https://files.liara.ir/docs/metabase/create-metabase-one-click-app.gif"></ZoomableImage>
        <p>
            برای راه‌اندازی برنامه‌ی آماده Metabase باید در بخش <a href="https://console.liara.ir/apps" target="_blank">برنامه‌های</a> کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Metabase  را انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کنید.
        </p>
        <p>
            پس از راه‌اندازی برنامه، نوبت به پیکربندی Metabase می‌رسد و شما باید دیتابیس مورد نظر خود را در این مرحله به Metabase معرفی کنید.
        </p>
        <ZoomableImage src="https://files.liara.ir/docs/metabase/setup-metabase-app.gif"></ZoomableImage>

    </Layout>
)