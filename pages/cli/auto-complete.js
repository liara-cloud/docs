import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';

export default () => (
    <Layout>
        <Head>
            <title>
                مستندات تکمیل خودکار دستورات در رابط خط فرمان لیارا Liara CLI -
                سرویس ابری لیارا
            </title>
        </Head>

        <div className="page-head">
            <div className="page-title">
                <h1>رابط خط فرمان لیارا</h1>
                <span className="page-description">(Liara CLI)</span>
            </div>
        </div>

        <h4>تکمیل خودکار دستورات</h4>
        <Highlight className="bash">{`$ liara autocomplete`}</Highlight>
        <p>
            با اجرای این دستور می‌توانید راهنمای فعال‌سازی تکمیل خودکار دستورات
            لیارا CLI را در سیستم‌عامل فعلی خود مشاهده کنید.
        </p>
        <Link href="/cli/commands">متوجه شدم، برو گام بعدی!</Link>
    </Layout>
);
