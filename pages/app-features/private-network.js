import Head from "next/head";
import Layout from "../../components/Layout";
import Highlight from "react-highlight";
import ZoomableImage from "../../components/ZoomableImage";
import Notice from "../../components/Notice";


export default () => (
  <Layout>
    <Head>
      <title>مستندات شبکه‌ی خصوصی - سرویس ابری لیارا</title>
    </Head>

    <h1>شبکه‌ی خصوصی</h1>
    <span className="page-description">(Private Network)</span>

    <p>
      شبکه‌ی خصوصی در لیارا این امکان را فراهم آورده تا برنامه‌های شما با سرعت و امنیت بیشتری بدون وجود محدودیت در پروتکل‌ها با هم ارتباط برقرار کنند. همچنین قابل ذکر است که هر حساب کاربری، شبکه‌ی خصوصی مختص به خود را دارد.
    </p>

    <h3></h3>

    <h3>نحوه‌ی اتصال دو برنامه به یکدیگر در شبکه‌ی خصوصی</h3>
    <p>
      فرض کنید برای ارائه‌ی پیشنهاد‌های بهتر به مشتریان فروشگاه اینترنتی خود تصمیم گرفته‌اید مشخصات کاربران را به‌منظور تحلیل در اختیار برنامه‌ای دیگر قرار دهید. بنابراین این نیاز به‌وجود خواهد آمد که فروشگاه شما اطلاعات کاربران را به‌صورت ایمن و با سرعت بالا در اختیار برنامه‌ای دیگر قرار دهد و به همین شکل نتیجه‌ی تحلیل‌ها را دریافت کند.
    </p>
    <p>
      فروشگاه فرضی ما با Node.js و برنامه‌‌ای که اطلاعات کاربران را تحلیل می‌کند با Python توسعه داده شده است و به‌ترتیب شناسه‌‌های برنامه‌های ما، <span className="code">market</span> و <span className="code">market-ai</span> هستند. حال براساس سناریو فعلی نیاز داریم که مشخصات کاربران را از فروشگاه به برنامه market-ai ارسال کنیم و این کار به شکل زیر انجام خواهد شد:
    </p>
    <Highlight className="javascript">
      {`const axios = require('axios')

axios
  .post('http://market-ai:2597/analyze', {
    age: '26',
    weight: '110',
    height: '190'
  })
  .then(res => {
    console.log(\`statusCode: \${res.status}\`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })`}
    </Highlight>

    <Notice variant="info">
      توجه داشته باشید که برای دسترسی به برنامه‌ای دیگر در شبکه‌ی خصوصی تنها کافی است که شناسه‌‌ی برنامه به‌عنوان host وارد شود و همچنین فراموش نکنید که مقادیر port و endpoint را مشخص کنید.
    </Notice>
    <h3>نحوه‌ی اتصال برنامه به دیتابیس در شبکه‌ی خصوصی</h3>
    <p>
      فرض کنید سرعت و امنیت از شاخصه‌های کلیدی برنامه‌‌های شما هستند و به همین منظور می‌خواهید فقط برنامه‌‌های شما به دیتابیس‌هایتان دسترسی داشته باشند. بنابراین در قدم اول باید دسترسی از طریق شبکه‌ی عمومی را در زمان راه‌اندازی دیتابیس غیرفعال کنید.
    </p>

    <ZoomableImage src="/static/disable-database-access-from-public-network.png" alt="غیرفعال کردن دسترسی از طریق شبکه‌ی عمومی در زمان راه‌اندازی دیتابیس"></ZoomableImage>

    <br />
    <p>
      درنهایت پس از راه‌اندازی دیتابیس می‌توانید وارد بخش <b>نحوه‌ی اتصال</b> دیتابیس شده و از آن اطلاعات برای اتصال به دیتابیس خود استفاده کنید.
    </p>

    <ZoomableImage src="/static/how-to-connect-database-from-private-network.png" alt="غیرفعال کردن دسترسی از طریق شبکه‌ی عمومی در زمان راه‌اندازی دیتابیس"></ZoomableImage>

  </Layout>
);