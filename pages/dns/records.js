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
        <td style={{ direction: "rtl" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description">example.com یا @</td>
      </tr>
      <tr>
        <td>IPv4</td>
        <td className="endpoint-inputs__description">93.184.216.34</td>
      </tr>
    </table>

    <p>
      با استفاده از رکورد AAAA می‌توانید یک و یا چند IPv6 را به یک دامنه اختصاص
      دهید.
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>AAAA record</td>
        <td style={{ direction: "rtl" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description">example.com یا @</td>
      </tr>
      <tr>
        <td>IPv6</td>
        <td className="endpoint-inputs__description">
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
        <td style={{ direction: "rtl" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description">example.com یا @</td>
      </tr>
      <tr>
        <td>Domain</td>
        <td className="endpoint-inputs__description">to.liara.zone</td>
      </tr>
    </table>

    <p>
      با استفاده از رکورد CNAME می‌توانید یک و یا چند نام دامنه را به یک
      ساب‌دامنه اختصاص دهید.
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>CNAME record</td>
        <td style={{ direction: "rtl" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description">www.example.com</td>
      </tr>
      <tr>
        <td>Domain</td>
        <td className="endpoint-inputs__description">to.liara.zone</td>
      </tr>
    </table>

    <p>با استفاده از رکورد MX می‌توانید آدرس ایمیل سرور مقصد را مشخص کنید.</p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>MX record</td>
        <td style={{ direction: "rtl" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description">example.com یا @</td>
      </tr>
      <tr>
        <td>Domain</td>
        <td className="endpoint-inputs__description">mail.iran.liara.ir</td>
      </tr>
      <tr>
        <td>Priority</td>
        <td className="endpoint-inputs__description">10</td>
      </tr>
    </table>

    <p>
      با استفاده از رکورد SRV می‌توانید نام دامنه را به یک سرویس ارتباط دهید.
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>SRV record</td>
        <td style={{ direction: "rtl" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description">example.com یا @</td>
      </tr>
      <tr>
        <td>Domain</td>
        <td className="endpoint-inputs__description">smtp.iran.liara.ir</td>
      </tr>
      <tr>
        <td>Priority</td>
        <td className="endpoint-inputs__description">0</td>
      </tr>
      <tr>
        <td>Port</td>
        <td className="endpoint-inputs__description">587</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td className="endpoint-inputs__description">5</td>
      </tr>
    </table>

    <p>
      با استفاده از رکورد TXT می‌توانید محتوای دلخواه خود را به دامنه نسبت
      دهید..
    </p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        <td>TXT record</td>
        <td style={{ direction: "rtl" }}>مثال</td>
      </tr>
      <tr>
        <td>Name</td>
        <td className="endpoint-inputs__description">liara-challenge</td>
      </tr>
      <tr>
        <td>Content</td>
        <td className="endpoint-inputs__description">
          b4a78b-5dcb70-799744-179f58
        </td>
      </tr>
    </table>
  </Layout>
);
