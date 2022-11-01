import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Label from "../../components/Label";

export default () => (
  <Layout>
    <Head>
      <title>مستندات رکوردهای DNS در سرویس DNS - سرویس ابری لیارا</title>
    </Head>

    <h1>DNS</h1>
    <span className="page-description">(DNS)</span>

    <h3 id="records">رکوردهای DNS</h3>

    <h5>سرویس DNS لیارا از رکوردهای DNS زیر پشتیبانی می‌کند:</h5>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>A</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>TTL</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Contents</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>AAAA</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>TTL</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Contents</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>ALIAS</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>TTL</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Contents</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>CNAME</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>TTL</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Contents</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>MX</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>TTL</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Contents</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Priority</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>SRV</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>TTL</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Contents</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Priority</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Port</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Weight</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>

    <br />

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td colSpan={3}>TXT</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>TTL</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>Contents</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>
  </Layout>
);
