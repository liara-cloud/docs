import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات CI/CD در GitHub - سرویس ابری لیارا</title>
    </Head>

    <h1>فرآیند CI/CD</h1>
    <span className="page-description">
      (Continuous integration and Continuous Delivery)
    </span>

    <Notice variant="info">
      برای مشاهده‌ی نمونه‌ای واقعی از موضوعات گفته شده در زیر، مقاله{" "}
      <b>
        <a
          href="https://liara.ir/blog/%d8%b1%d8%a7%d9%87%e2%80%8c%d8%a7%d9%86%d8%af%d8%a7%d8%b2%db%8c-ci-cd-%d8%a8%d9%87-%d9%88%d8%b3%db%8c%d9%84%d9%87-gitlab-%d9%88-github-%d8%af%d8%b1-%d9%84%db%8c%d8%a7%d8%b1%d8%a7/"
          target="_blank"
        >
          راه‌اندازی CI/CD به وسیله GitLab و GitHub در لیارا
        </a>
      </b>{" "}
      را در وبلاگ لیارا مطالعه کنید.
    </Notice>

    <Notice variant="info">
      ریپازیتوری{" "}
      <b>
        <a
          href="https://github.com/liara-cloud/github-cd-example"
          target="_blank"
        >
          liara-cloud/github-cd-example
        </a>
      </b>{" "}
      شامل یک نمونه برنامه‌ی کامل است که می‌تواند از طریق CI/CD در لیارا مستقر
      شود.
    </Notice>

    <h3>راه‌اندازی CI/CD به وسیله GitHub</h3>
    <p>
      برای راه‌اندازی CI/CD در GitHub از قابلیت{" "}
      <a href="https://github.com/features/actions" target="_blank">
        GitHub Actions
      </a>{" "}
      استفاده خواهیم کرد و شما نیز باید مراحل زیر را دنبال کنید.
    </p>
    <p>
      در ابتدا یک پوشه با نام <strong>github.</strong> در مسیر اصلی پروژه‌‌تان
      ایجاد کرده و سپس پوشه‌ی دیگری با نام <strong>workflows</strong> را داخل آن
      ایجاد کنید تا مسیر <span className="code">.github/workflows</span> در
      پروژه‌ی شما شکل بگیرد. در این مسیر می‌توان Actionهای مورد نظر را تعریف کرد
      بنابراین یک فایل با نام <strong>liara.yaml</strong> را در این مسیر ایجاد
      کرده و قطعه‌کد زیر را در این فایل قرار دهید:
    </p>
    <Highlight className="yaml">
      {`name: CD-Liara
on:
  push:
    branches: [master]
jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "16"
      - name: update-liara
        env:
          LIARA_TOKEN: \${{ secrets.LIARA_API_TOKEN }}\

        run: |
          npm i -g @liara/cli@3
          liara deploy --app="APP_NAME" --api-token="$LIARA_TOKEN" --detach
`}
    </Highlight>
    <Notice variant="warning">
      ۱) در مثال فوق باید مقدار APP_NAME را با شناسه‌ی برنامه‌تان در لیارا
      جایگزین کنید.
      <hr />
      ۲) همچنین موقعیت جغرافیایی پیش‌فرض، <strong>iran</strong> درنظر گرفته شده
      است و اگر برنامه‌ی شما در موقعیت آلمان میزبانی شده باشد باید مقدار{" "}
      <strong>germany</strong> را در پارامتر{" "}
      <span className="code">--region</span> تنظیم کنید.
    </Notice>
    <p>
      همان‌طور که مشاهده می کنید، در قطعه‌کد فوق تمام مراحل لازم برای استقرار یک
      پروژه در لیارا تعریف شده است. در ابتدا ابزار{" "}
      <Link href="/cli/install">Liara CLI</Link> نصب شده و سپس دستور{" "}
      <span className="code">liara deploy</span> اجرا می‌شود.
    </p>
    <p>
      پس از شخصی‌سازی مقدار APP_NAME و مشخص کردن موقعیت جغرافیایی در فایل{" "}
      <strong>liara.yaml</strong> باید{" "}
      <a href="https://console.liara.ir/API" target="_blank">
        کلید دسترسی به API
      </a>{" "}
      حساب‌تان را در بخش Secret تنظیمات ریپازیتوری GitHub اضافه کنید.
    </p>
    <p>
      برای این کار وارد تنظیمات ریپازیتوری شوید و از منوی{" "}
      <strong>Secrets</strong>، روی گزینه‌ی <strong>Actions</strong> کلیک کنید.
    </p>
    <ZoomableImage src="/static/github-action-secrets-setting.png" />
    <p>
      سپس برای تعریف یک Secret جدید، روی گزینه‌ی{" "}
      <strong>New repository secret</strong> کلیک کنید. نام این Secret را{" "}
      <strong>LIARA_API_TOKEN</strong> و مقدار آن را از صفحه‌ی{" "}
      <a href="https://console.liara.ir/API" target="_blank">
        کلید دسترسی به API
      </a>{" "}
      کپی کرده و در بخش Value قرار داده و بر روی گزینه‌ی{" "}
      <strong>Add secret</strong> کلیک کنید.
    </p>
    <ZoomableImage src="/static/add-new-secret-in-github-action.png" />
    <p>
      در آخر با Push کردن فایل{" "}
      <span className="code">.github/workflows/liara.yaml</span> در ریپازیتوری
      GitHub متوجه خواهید شد که یک Pipeline به‌صورت خودکار در تب Action
      ریپازیتوری شما اجرا شده است و شما نیز می‌توانید مراحل استقرار پروژه‌ی خود
      را در صفحه‌ی <strong>تاریخچه</strong> دنبال کنید.
    </p>
  </Layout>
);
