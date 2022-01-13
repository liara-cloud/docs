import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Asciinema from "../../components/Asciinema";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات نمایش پلن‌های سرویس برنامه با استفاده از لیارا CLI - سرویس ابری
        لیارا
      </title>
    </Head>

    <h1>رابط خط فرمان لیارا</h1>
    <span className="page-description">(Liara CLI)</span>

    <h4>پلن‌های سرویس برنامه</h4>
    <Highlight className="bash">{`$ liara plan:list`}</Highlight>
    <Asciinema id="452913" />
    <p>
      با اجرای دستور <span className="code">liara plan:list</span> یا به اختصار{" "}
      <span className="code">liara plan:ls</span> می‌توانید لیستی از پلن‌های
      سرویس برنامه را مشاهده کنید.
    </p>

    <Link href="/cli/account">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
