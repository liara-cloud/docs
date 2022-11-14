import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات بسته نصب آسان (duplicator) - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="wordpress" />
      <div className="page-title">
        <h1>وردپرس پلاس</h1>
        <span className="page-description">(WordPress plus)</span>
      </div>
    </div>

    <h3>بسته نصب آسان (duplicator)</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#installer">آپلود بسته نصب آسان</a>
      </li>
      <li>
        <a href="#config">نصب قالب</a>
      </li>
    </ul>

    <h3 id="installer">آپلود بسته نصب آسان</h3>
    <p></p>

    <h3 id="config">نصب قالب</h3>
    <p></p>
  </Layout>
);
