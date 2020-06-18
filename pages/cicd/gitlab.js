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

    <h3>راه‌اندازی CI/CD به وسیله GitLab</h3>
    <p>
      برای راه اندازی CI/CD در GitLab شما به GitLab CI نیاز دارید. از{" "}
      <a href="https://docs.gitlab.com/ee/ci/" target="_blank">
        این‌جا
      </a>{" "}
      میتوانید مستندات این ابزار را مطالعه کنید. در پایین به صورت کلی مراحل
      ایجاد CI/CD به وسیله GitLab آمده است:
    </p>
    <p>
      <b>گام اول)</b> ابتدا نیاز دارید که فایلی تحت عنوان{" "}
      <span className="code">.gitlab-ci.yml</span> در ریشه پروژه‌ی‌تان تعریف
      کنید. در پایین یک فایل نمونه میبینید:
    </p>
    <Highlight className="yaml">
      {`image: node:12-alpine

stages:
  - update-production

deploy:
  stage: update-production
  only:
    - master  
  before_script:
    - npm install -g @liara/cli
  script:
    - liara deploy --app $PROJECT_NAME --detach --api-token $TOKEN
`}
    </Highlight>
    <Notice variant="info">
      همانطور که میبینید شما در این فایل همه اتفاقات را تعریف میکنید. مثلا در
      فایل بالا ابزار liara cli را ابتدا نصب کرده‌ایم و سپس در ریشه پروژه دستور
      deploy را اجرا کرده‌ایم. در همین فایل میشود Test ها را اجرا کرد و مطمئن شد
      که پروژه‌‍ سالم است و اجازه آپدیت شدن دارد. GitLab CI امکانات بسیار خوبی
      برای CI/CD دارد و توصیه میکنیم حتما مستندات آن را مطالعه کنید.
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
      این که بتوانید از این اطلاعات در{" "}
      <span className="code">.gitlab-ci.yml</span> استفاده کنید باید این اطلاعات
      را به بخش Variables در GitLab منتقل کنید. میتوانید درباره این موضوع در{" "}
      <a
        href="https://gitlab.com/help/ci/variables/README#variables"
        target="_blank"
      >
        مستندات Variables
      </a>{" "}
      بیشتر مطالعه کنید. به صورت کلی شما هر key-value ای را که در بخش Variables
      تعریف کنید، در فایل <span className="code">.gitlab-ci.yml</span> قابل
      استفاده میشود. مثلا در فایل بالا ما دو Variable با نام‌های TOKEN و
      PROJECT_NAME داریم.
    </p>
    <p>
      <b>گام سوم)</b> بعد از تعریف کردن همه موارد بالا با Push کردن فایل{" "}
      <span className="code">.gitlab-ci.yml</span> پروژه شما وارد یک فرایند
      CI/CD میشود. لیارا از هر Commit Message شما برای توضیح هر استقرار استفاده
      میکند. استفاده از Commit Message های معنادار میتواند به شما در کار تیمی
      برای راحت‌تر فهمیدن علت هر استقرار کمک کند.
    </p>
    <ZoomableImage src="/static/deploy-message.png" />
    <Notice variant="info">
      میتوانید برای دیدن مثالی واقعی از موضوعات گفته شده، مقاله{" "}
      <b>
        <a href="https://liara.ir/blog/cicd-example/" target="_blank">
          راهنمای راه اندازی CD به کمک GitLab
        </a>
      </b>{" "}
      را در وبلاگ لیارا مطالعه کنید.
    </Notice>
  </Layout>
);
