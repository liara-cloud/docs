import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";
import Highlight from "react-highlight";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>CI/CD سرویس ابری لیارا | مستندات</title>
    </Head>

    <h1>فرآیند CI/CD</h1>
    <span className="pageDescription">
      (Continuous integration and Continuous Delivery)
    </span>

    <h3>راه‌اندازی CI/CD به وسیله GitHub</h3>
    <p>
      برای راه اندازی CI/CD در GitHub به GitHub Actions نیاز دارید. از{" "}
      <a href="https://github.com/features/actions" target="_blank">
        این‌جا
      </a>{" "}
      میتوانید مستندات این ابزار را مطالعه کنید. در پایین به صورت کلی مراحل
      ایجاد CI/CD به وسیله GitHub آمده است:
    </p>
    <p>
      <b>گام اول)</b> در ابتدا نیاز دارید که در ریشه برنامه‌ی‌تان دایرکتوری
      github. و پوشه workflows را داخل آن ایجاد کنید:
      <span className="code">.github/workflows/</span>. شما در این دایرکتوری
      تمام Action های خود را تعریف میکنید. برای مثال فرض میکنیم فایلی به نام
      liara.yaml را برای استقرار در لیارا در نظر گرفته اید:
    </p>
    <Highlight className="yaml">
      {`name: CD-Example
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
          node-version: "12"
      - name: update-liara
        env:
          LIARA_TOKEN: \${{ secrets.LIARA_API_TOKEN }}\

        run: |
          npm i -g @liara/cli
          liara deploy --api-token="$LIARA_TOKEN" --detach
`}
    </Highlight>
    <Notice variant="info">
      همانطور که میبینید شما در این فایل همه اتفاقات را تعریف میکنید. مثلا در
      فایل بالا ابزار liara cli را ابتدا نصب کرده‌ایم و سپس در ریشه پروژه دستور
      deploy را اجرا کرده‌ایم. در همین فایل میشود Test ها را اجرا کرد و مطمئن شد
      که پروژه‌ سالم است و اجازه آپدیت شدن دارد. GitHub Actions امکانات بسیار
      خوبی برای CI/CD دارد و توصیه میکنیم حتما مستندات آن را مطالعه کنید.
    </Notice>
    <p>
      <b>گام دوم)</b> لیارا برای اجرای دستور deploy نیاز به نام یا همان شناسه
      برنامه و api-token دارد. البته اگر از{" "}
      <span className="code">liara.json</span> استفاده کرده باشید نیازی به بخش
      شناسه نیست. کلید یا همان api-token شما در{" "}
      <a href="https://console.liara.ir/API" target="_blank">
        صفحه API
      </a>{" "}
      در حساب کاربری شما وجود دارد که به راحتی میتوانید آن را کپی کنید. سپس برای
      این که بتوانید از این اطلاعات در <span className="code">liara.yaml</span>{" "}
      استفاده کنید باید این اطلاعات را به بخش Secrets در GitHub منتقل کنید.
      میتوانید درباره این موضوع در{" "}
      <a
        href="https://help.github.com/en/actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow"
        target="_blank"
      >
        مستندات Secrets and Variables
      </a>{" "}
      بیشتر مطالعه کنید. به صورت کلی شما هر key-value ای را که در بخش Secrets
      تعریف کنید، در فایل <span className="code">liara.yaml</span> قابل استفاده
      میشود. مثلا در فایل بالا ما یک Secret با نام‌ LIARA_API_TOKEN داریم.
    </p>
    <p>
      <b>گام سوم)</b> بعد از تعریف کردن همه موارد بالا با Push کردن فایل{" "}
      <span className="code">.github/workflows/liara.yaml</span> پروژه شما وارد
      یک فرایند CI/CD میشود. لیارا از هر Commit Message شما برای توضیح هر
      استقرار استفاده میکند. استفاده از Commit Message های معنادار میتواند به
      شما در کار تیمی برای راحت‌تر فهمیدن علت هر استقرار کمک کند.
    </p>
    <ZoomableImage src="/static/deploy-message.png" />
    <Notice variant="info">
      میتوانید برای دیدن مثالی واقعی از موضوعات گفته شده، پروژه تستی که در این{" "}
      <b>
        <a
          href="https://github.com/liara-cloud/github-cd-example"
          target="_blank"
        >
          لینک
        </a>
      </b>{" "}
      GitHub قرار داده‌ایم را بررسی نمایید.
    </Notice>
  </Layout>
);
