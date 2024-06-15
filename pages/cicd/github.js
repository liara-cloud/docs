import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات CI/CD در GitHub - لیارا</title>
    </Head>

    <h1>فرآیند CI/CD</h1>
    <span className="page-description">
      (Continuous integration and Continuous Delivery)
    </span>

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
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/CICD/cicd-github.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

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
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - name: update-liara
        env:
          LIARA_TOKEN: \${{ secrets.LIARA_API_TOKEN }}\

        run: |
          npm i -g @liara/cli@6
          liara deploy --app="APP_NAME" --api-token="$LIARA_TOKEN" --no-app-logs
`}
    </Highlight>
    <Notice variant="info">
      در مثال فوق باید مقدار APP_NAME را با شناسه‌ی برنامه‌تان در لیارا جایگزین
      کنید.
    </Notice>
    <Notice variant="info">
      در صورت نیاز به تنظیم پورتی مانند ۳۰۰۰ که برنامه‌ی شما روی آن اجرا می‌شود
      لازم است پارامتر
      <span className="code">--port=3000</span>
      را هم برای دستور
      <span className="code">liara deploy</span>
      تنظیم کنید.
    </Notice>
    <Notice variant="warning">
      توجه داشته باشید، که اگر branch پیش فرض ریپازیتوری‌تان برابر با main است،
      باید آن را در فایل liara.yaml تغییر دهید در غیر اینصورت branch پیش فرض‌تان
      را برابر با master قرار دهید.
    </Notice>
    <p>
      همان‌طور که مشاهده می کنید، در قطعه‌کد فوق تمام مراحل لازم برای استقرار یک
      پروژه در لیارا تعریف شده است. در ابتدا ابزار{" "}
      <Link href="/cli/install">Liara CLI</Link> نصب شده و سپس دستور{" "}
      <span className="code">liara deploy</span> اجرا می‌شود.
    </p>
    <p>
      پس از شخصی‌سازی مقدار APP_NAME در فایل <strong>liara.yaml</strong> باید{" "}
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

    <h3>راه‌اندازی CI/CD به ازای هر branch</h3>
    <p>
      در برخی موارد، شاید لازم باشد چند محیط جداگانه برای برنامه‌تان ایجاد کنید.
      به عنوان مثال ممکن است برنامه‌تان در سه محیط test, staging و production
      قرارداشته باشد و بخواهید برای هر محیط یک CI/CD جدا راه‌اندازی کنید. در این
      صورت، ابتدا باید سه اپ و سه branch جدا ایجاد کنید. در این حالت، هر branch
      به یک اپ اشاره دارد. سپس می‌بایست فایل{" "}
      <span className="code">.github/workflows/liara.yaml</span> را به شکل زیر
      تغییر دهید:
    </p>
    <Highlight className="yaml">
      {`name: CD-Liara

on:
  push:
    branches:
      - main
      - test
      - staging

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install Liara CLI
        run: npm i -g @liara/cli@5

      - name: Deploy
        env:
          LIARA_TOKEN: \${{ secrets.LIARA_API_TOKEN }}
        run: |
          if [ \${{ github.ref }} == 'refs/heads/master' ]; then
            liara deploy --app="my-production-app" --api-token="$LIARA_TOKEN" --no-app-logs
          elif [ \${{ github.ref }} == 'refs/heads/test' ]; then
            liara deploy --app="my-test-app" --api-token="$LIARA_TOKEN" --no-app-logs
          elif [ \${{ github.ref }} == 'refs/heads/staging' ]; then
            liara deploy --app="my-staging-app" --api-token="$LIARA_TOKEN" --no-app-logs
          fi
`}
    </Highlight>
    <Notice variant="info">
      توجه داشته باشید که در این مثال، branch های master, test و staging به
      ترتیب برای محیط‌های production, test و staging انتخاب‌شده اند. شما
      می‌توانید با توجه به اپ خود، نام branch ها را تغییر دهید.
    </Notice>
    <Notice variant="info">
      در سه دستور <span className="code">liara deploy</span> نام اپ‌ها برای
      محیط‌های production, test و staging به ترتیب my-production-app,
      my-test-app و my-staging-app انتخاب‌‌شده است. شما باید با توجه برنامه‌‌های
      خود، نام اپ‌ها را تغییر دهید.
    </Notice>
  </Layout>
);
