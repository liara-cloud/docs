import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات CI/CD در GitLab - سرویس ابری لیارا</title>
    </Head>

    <h1>فرآیند CI/CD</h1>
    <span className="page-description">
      (Continuous integration and Continuous Delivery)
    </span>

    <Notice variant="warning">
      از این پس برای کاربران جدید GitLab امکان راه‌اندازی فرایند CI/CD نیست زیرا
      برای استفاده از Shared runnerهای رایگان این سرویس باید حساب کاربری خود را
      تایید کنید. به‌همین علت توصیه می‌کنیم پروژه‌ی خود را به سرویس GitHub
      انتقال داده و فرایند CI/CD را با استفاده از GitHub Actions راه‌اندازی
      کنید. <Link href="/cicd/github">توضیحات بیشتر...</Link>
    </Notice>

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

    <h3>راه‌اندازی CI/CD به وسیله GitLab</h3>
    <p>
      برای راه اندازی CI/CD در GitLab شما به GitLab CI نیاز دارید. از{" "}
      <a href="https://docs.gitlab.com/ee/ci/" target="_blank">
        این‌جا
      </a>{" "}
      می‌توانید مستندات این ابزار را مطالعه کنید. در پایین به صورت کلی مراحل
      ایجاد CI/CD به وسیله GitLab آمده است:
    </p>
    <p>
      <b>گام اول)</b> ابتدا نیاز دارید که فایلی تحت عنوان{" "}
      <span className="code">.gitlab-ci.yml</span> در ریشه برنامه‌ی‌تان تعریف
      کنید. در پایین یک فایل نمونه می‌بینید:
    </p>
    <Highlight className="yaml">
      {`image: node:16-alpine

stages:
  - update-production

deploy:
  stage: update-production
  only:
    - master
  script:
    - npm i -g @liara/cli@2
    - export http_proxy=http://proxy.liara.ir:6666
    - liara deploy --app $APP_NAME --detach --region iran --api-token $TOKEN
`}
    </Highlight>
    <p>
      همانطور که می‌بینید شما در این فایل همه اتفاقات را تعریف می‌کنید. مثلا در
      فایل بالا ابزار Liara CLI را ابتدا نصب کرده‌ایم و سپس در ریشه برنامه دستور
      deploy را اجرا کرده‌ایم. در همین فایل می‌شود Test ها را اجرا کرد و مطمئن
      شد که برنامه‌‍ سالم است و اجازه آپدیت شدن دارد. GitLab CI امکانات بسیار
      خوبی برای CI/CD دارد و توصیه می‌کنیم حتما مستندات آن را مطالعه کنید.
    </p>
    <Notice variant="info">
      سرویس GitLab ایران را به‌لیست تحریم خود اضافه کرده و بنابراین برای
      دیپلوی‌کردن در موقعیت ایران، لازم است که از پروکسی‌ای که در نمونه‌ی بالا
      قرار داده شده حتما استفاده کنید. برای دیپلوی در موقعیت آلمان نیازی
      به‌پروکسی نیست. همچنین اگر از GitLab.com استفاده نمی‌کنید و GitLab را
      به‌صورت خصوصی در شرکت خودتان راه‌اندازی کرده‌اید، نیازی به‌پروکسی ندارید.
    </Notice>
    <Notice variant="info">
      در نمونه‌ی بالا، موقعیت جغرافیایی «ایران» در نظر گرفته شده‌است. اگر شما از
      موقعیت آلمان استفاده می‌کنید، لازم است که{" "}
      <span className="code">germany</span>
      را در پارامتر <span className="code">--region</span>
      تنظیم کنید.
    </Notice>
    <p>
      <b>گام دوم)</b> لیارا برای اجرای دستور deploy نیاز به نام یا همان شناسه
      برنامه و api-token دارد. البته اگر از{" "}
      <span className="code">liara.json</span> استفاده کرده باشید نیازی به بخش
      شناسه نیست. کلید یا همان api-token شما در{" "}
      <a href="https://console.liara.ir/API" target="_blank">
        صفحه API
      </a>{" "}
      در حساب کاربری شما وجود دارد که به راحتی می‌توانید آن را کپی کنید. سپس
      برای این که بتوانید از این اطلاعات در{" "}
      <span className="code">.gitlab-ci.yml</span> استفاده کنید باید این اطلاعات
      را به بخش Variables در GitLab منتقل کنید. می‌توانید درباره این موضوع در{" "}
      <a
        href="https://gitlab.com/help/ci/variables/README#variables"
        target="_blank"
      >
        مستندات Variables
      </a>{" "}
      بیشتر مطالعه کنید. به صورت کلی شما هر key-value ای را که در بخش Variables
      تعریف کنید، در فایل <span className="code">.gitlab-ci.yml</span> قابل
      استفاده می‌شود. مثلا در فایل بالا ما دو Variable با نام‌های TOKEN و
      APP_NAME داریم.
    </p>
    <p>
      <b>گام سوم)</b> بعد از تعریف کردن همه موارد بالا با Push کردن فایل{" "}
      <span className="code">.gitlab-ci.yml</span> برنامه شما وارد یک فرایند
      CI/CD می‌شود. لیارا از هر Commit Message شما برای توضیح هر استقرار استفاده
      می‌کند. استفاده از Commit Message های معنادار می‌تواند به شما در کار تیمی
      برای راحت‌تر فهمیدن علت هر استقرار کمک کند.
    </p>
    <ZoomableImage src="/static/deploy-message.png" />
  </Layout>
);
