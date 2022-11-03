import Head from "next/head";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>مستندات رکوردهای DNS در سرویس DNS - سرویس ابری لیارا</title>
    </Head>

    <h1>DNS</h1>
    <span className="page-description">(DNS)</span>

    <h3 id="records">رکوردهای DNS</h3>

    <h5>سرویس DNS لیارا از رکوردهای DNS زیر پشتیبانی می‌کند:</h5>

    <p>
      با استفاده از رکورد A می‌توانید یک و یا چند IPv4 را به یک دامنه اختصاص
      دهید.
    </p>
    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>A record</td>
        <td style={{ textAlign: "center" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          example.com یا @
        </td>
      </tr>
      <tr>
        <td>Contents</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          93.184.216.34
        </td>
      </tr>
    </table>

    <p>
      با استفاده از رکورد AAAA می‌توانید یک و یا چند IPv6 را به یک دامنه اختصاص
      دهید.
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>AAAA record</td>
        <td style={{ textAlign: "center" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          example.com یا @
        </td>
      </tr>
      <tr>
        <td>Contents</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          2606:2800:220:1:248:1893:25c8:1946
        </td>
      </tr>
    </table>

    <p>
      با استفاده از رکورد ALIAS می‌توانید یک و یا چند نام دامنه را به ریشه‌ی
      دامنه و یا ساب‌دامنه اختصاص دهید.
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>ALIAS record</td>
        <td style={{ textAlign: "center" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          example.com یا @
        </td>
      </tr>
      <tr>
        <td>Contents</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          to.liara.zone
        </td>
      </tr>
    </table>

    <p>
      با استفاده از رکورد CNAME می‌توانید یک و یا چند نام دامنه را به یک
      ساب‌دامنه اختصاص دهید.
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>CNAME record</td>
        <td style={{ textAlign: "center" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          www.example.com یا @
        </td>
      </tr>
      <tr>
        <td>Contents</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          to.liara.zone
        </td>
      </tr>
    </table>

    <p>با استفاده از رکورد MX می‌توانید آدرس ایمیل سرور مقصد را مشخص کنید.</p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>MX record</td>
        <td>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
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

    <p>
      با استفاده از رکورد SRV می‌توانید نام دامنه را به یک سرویس ارتباط دهید.
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>SRV record</td>
        <td style={{ textAlign: "center" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
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

    <p>
      با استفاده از رکورد TXT می‌توانید محتوای دلخواه خود را به دامنه نسبت
      دهید..
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>TXT record</td>
        <td style={{ textAlign: "center" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          liara-challenge
        </td>
      </tr>
      <tr>
        <td>Contents</td>
        <td
          className="endpoint-inputs__description"
          style={{ direction: "ltr", textAlign: "center" }}
        >
          b4a78b-5dcb70-799744-179f58
        </td>
      </tr>
    </table>
  </Layout>
);
