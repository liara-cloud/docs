import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Layout from '../../components/Layout';

export default () => (
    <Layout>
        <Head>
            <title>
                مستندات پلن‌های سرویس برنامه در رابط خط فرمان لیارا Liara CLI -
                سرویس ابری لیارا
            </title>
        </Head>

        <h1>رابط خط فرمان لیارا</h1>
        <span className="page-description">(Liara CLI)</span>

        <h4>پلن‌های سرویس برنامه</h4>
        <Highlight className="bash">{`$ liara disk:create`}</Highlight>

        <p>
            با اجرای دستور <span className="code">liara plan:list</span> یا به
            اختصار <span className="code">liara plan:ls</span> می‌توانید لیستی
            از پلن‌های سرویس برنامه را مشاهده کنید.
        </p>

        <Link href="/cli/account">متوجه شدم، برو گام بعدی!</Link>
    </Layout>
);
