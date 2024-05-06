import Head from "next/head";
import Highlight from "react-highlight";

import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>تعیین موقعیت build</title>
    </Head>

    <h3>تعیین موقعیت build</h3>
    <p>
      گاهی اوقات ممکن است بخواهید پکیج‌هایی که در موقعیت ایران در دسترس نیستند
      را دانلود کنید یا نیاز داشته باشید که فرایند push کردن ایمیج‌ها به{" "}
      <a href="/app-features/private-registry/">رجیستری خصوصی</a>، با سرعت
      بیشتری انجام شود. برای این موارد می‌توانید موقعیت build ایمیج برنامه‌تان
      را با یکی از سه روش زیر مشخص کنید:
    </p>

    <p>
      1) در استقرار با Liara CLI یک فایل با نام
      <span className="code">liara.json</span>
      در ریشه‌ پروژه‌تان ایجاد کرده و قطعه‌کد زیر را درون این فایل قرار بدید:
    </p>

    <Highlight className="json">
      {`{
  "build": {
     "location": "germany"
  }
}
`}
    </Highlight>

    <p>
      2) در استقرار با Liara CLI در دستور
      <span className="code">liara deploy</span>
      موقعیت build را با پارامتر
      <span className="code">--build-location</span>
      مشخص کنید.
    </p>

    <Highlight className="bash">
      {`liara deploy --build-location="germany"`}
    </Highlight>

    <p>
      3) در استقرار با مرورگر، موقعیت build را در بخش{" "}
      <strong>تنظیمات build</strong> به شکل زیر انتخاب کنید:
    </p>
    <ZoomableImage src="/static/set-build-location.png"></ZoomableImage>

    <p>در حال حاضر موقعیت‌های زیر در دسترس هستند:</p>
    <ul>
      <li>iran</li>
      <li>germany</li>
    </ul>
    <Notice variant="info">
      با انجام عملیات build در موقعیت germany، دانلود پکیج‌ها هیچ محدودیتی ندارد
      ولی فرایند push کردن ایمیج‌ها کند می‌باشد. در مقابل عملیات build در موقعیت
      iran محدودیت دانلود پکیج‌ها را دارد ولی سرعت push کردن ایمیج‌ها بیشتر است.
    </Notice>
  </Layout>
);
