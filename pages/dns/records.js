import Head from "next/head";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات رکوردهای DNS در سرویس DNS - لیارا</title>
    </Head>

    <h1>DNS</h1>
    <span className="page-description">(DNS)</span>

    <h3 id="records">رکوردهای DNS</h3>

    <h5>سرویس DNS لیارا از رکوردهای DNS زیر پشتیبانی می‌کند:</h5>
    <ul className="mt-0">
      <li>
        <a href="#a-record">رکورد A</a>
      </li>
      <li>
        <a href="#aaaa-record">رکورد AAAA</a>
      </li>
      <li>
        <a href="#alias-record">رکورد ALIAS</a>
      </li>
      <li>
        <a href="#cname-record">رکورد CNAME</a>
      </li>
      <li>
        <a href="#mx-record">رکورد MX</a>
      </li>
      <li>
        <a href="#srv-record">رکورد SRV</a>
      </li>
      <li>
        <a href="#txt-record">رکورد TXT</a>
      </li>
    </ul>

    <h3 id="a-record">رکورد A</h3>
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
      <tr className="endpoint-inputs__group">
        <td>IPv4</td>
        <td className="endpoint-inputs__description">93.184.216.34</td>
      </tr>
    </table>
    <br />
    <ZoomableImage src="/static/record/a.png" />

    <h3 id="aaaa-record">رکورد AAAA</h3>
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
      <tr className="endpoint-inputs__group">
        <td>IPv6</td>
        <td className="endpoint-inputs__description">
          2606:2800:220:1:248:1893:25c8:1946
        </td>
      </tr>
    </table>
    <br />
    <ZoomableImage src="/static/record/aaaa.png" />

    <h3 id="alias-record">رکورد ALIAS</h3>
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
      <tr className="endpoint-inputs__group">
        <td>Domain</td>
        <td className="endpoint-inputs__description">to.liara.zone</td>
      </tr>
    </table>
    <br />
    <ZoomableImage src="/static/record/alias.png" />

    <h3 id="cname-record">رکورد CNAME</h3>
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
      <tr className="endpoint-inputs__group">
        <td>Domain</td>
        <td className="endpoint-inputs__description">to.liara.zone</td>
      </tr>
    </table>
    <br />
    <ZoomableImage src="/static/record/cname.png" />

    <h3 id="mx-record">رکورد MX</h3>
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
      <tr className="endpoint-inputs__group">
        <td>Domain</td>
        <td className="endpoint-inputs__description">mail.iran.liara.ir</td>
      </tr>
      <tr>
        <td>Priority</td>
        <td className="endpoint-inputs__description">10</td>
      </tr>
    </table>
    <br />
    <ZoomableImage src="/static/record/mx.png" />

    <h3 id="srv-record">رکورد SRV</h3>
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
      <tr className="endpoint-inputs__group">
        <td>Domain</td>
        <td className="endpoint-inputs__description">smtp.liara.ir</td>
      </tr>
      <tr>
        <td>Priority</td>
        <td className="endpoint-inputs__description">0</td>
      </tr>
      <tr className="endpoint-inputs__group">
        <td>Port</td>
        <td className="endpoint-inputs__description">587</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td className="endpoint-inputs__description">5</td>
      </tr>
    </table>
    <br />
    <ZoomableImage src="/static/record/srv.png" />

    <h3 id="txt-record">رکورد TXT</h3>
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
      <tr className="endpoint-inputs__group">
        <td>Content</td>
        <td className="endpoint-inputs__description">
          b4a78b-5dcb70-799744-179f58
        </td>
      </tr>
    </table>
    <br />
    <ZoomableImage src="/static/record/txt.png" />
  </Layout>
);
