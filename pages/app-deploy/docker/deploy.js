import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات استقرار برنامه‌های Docker - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/docker.svg"
        alt="docker"
      />
      <div className="page-title">
        <h1>اولین استقرار در برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#installing-liara-cli">نصب Liara CLI</a></li>
      <li><a href="#login">ورود به حساب کاربری</a></li>
      <li><a href="#deploy">اولین استقرار</a></li>
      <li><a href="#image-from-dockerhub">استقرار Image از DockerHub</a></li>
      <li><a href="#limits">محدودیت‌ها</a></li>
    </ul>

    <h3 id="installing-liara-cli">نصب Liara CLI</h3>
    <p>
      اگر Liara CLI را نصب ندارید می‌توانید با اجرای دستور زیر آن‌ را به‌راحتی
      نصب کنید:
      {' '}
      <Link href="/cli/install">
        توضیحات بیشتر
      </Link>
    </p>
    <pre>
      <code>{`$ npm install -g @liara/cli`}</code>
    </pre>
    <h3 id="login">ورود به حساب کاربری</h3>
    <p>
      برای ورود به حساب کاربری خود به وسیله Liara CLI کافیست دستور زیر را وارد
      کنید و ایمیل و رمزعبوری که با آن حساب کاربری خود را ایجاد کرده‌اید را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara login`}</code>
    </pre>
    <h3 id="deploy">اولین استقرار</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم DOCKER و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه docker-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> کافیست وارد ریشه برنامه‌ی‌تان شده و سپس دستور زیر را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara deploy`}</code>
    </pre>
    <p>
      Liara CLI در صورتی که یک Dockerfile در ریشه‌ی برنامه‌ی‌تان وجود داشته باشد، تشخیص خواهد داد که برنامه‌ی شما را باید به عنوان
      یک برنامه‌ی Docker اجرا کند و عملیات استقرار را آغاز خواهد کرد. اما اگر
      مشکلی در تشخیص وجود داشت، می‌توانید از دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>{`$ liara deploy --platform=docker`}</code>
    </pre>
    <p>
      بعد از وارد کردن دستور بالا، ابتدا نام برنامه‌ای که قصد دارید استقرار روی آن انجام شود
      پرسیده خواهد شد. سپس، پورتی که قصد دارید
      آن را در معرض دید قرار دهید، پرسیده خواهد شد. این پورت معمولا
      برابر با همان پورت EXPOSE است.
    </p>
    <Notice variant="info">
      برنامه‌ی شما در سرورهای لیارا
      build
      شده و image
      نهایی در registry
      خصوصی شما در لیارا ذخیره خواهد شد.
    </Notice>
    <Notice variant="info">
      توجه داشته باشید که تنها پورت یک وب‌سرور با پروتکل HTTP
      را می‌تونید Expose کنید. برای مثال پورت یک دیتابیس قابل
      دسترسی از بیرون از شبکه‌ی لیارا نیست و تنها بین برنامه‌های اکانت شما در شبکه‌ی خصوصی قابل دسترسی خواهد بود.
    </Notice>
    <p>
      <b>گام سوم و پایانی)</b> بعد از اجرای دستورات گام‌های قبلی، لیارا به
      برنامه شما یک زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن
      شوید که برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این
      آدرس بر اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p>
    <p dir="ltr">https://docker-starter.liara.run</p>

    <h3 id="image-from-dockerhub">استقرار Image از DockerHub</h3>
    <p>
      این امکان هم وجود دارد که Image ای را مستقیما
      از رجیستری‌های عمومی مثل
      DockerHub
      در لیارا مستقر و اجرا کنید. برای این‌کار باید از پارامتر
      <span className="code">--image</span>
      استفاده کنید.
    </p>
    <pre>
      <code>$ liara deploy --image wordpress:5 --app my-blog --port 80</code>
    </pre>
    <p>
      و یا این‌که می‌توانید یک فایل به‌نام
      <span className="code">liara.json</span>
      با محتویات زیر بسازید و بعد از دستور <span className="code">liara deploy</span>
      استفاده کنید:
    </p>
    <Highlight className="json">
      {`{
  "image": "wordpress:5",
  "app": "my-blog",
  "port": 80,
  "disks": [
    {
      "name": "data",
      "mountTo": "/var/www/html"
    }
  ]
}
`}
    </Highlight>
    <p>
      در لیارا به‌جای مفهوم Volume از مفهوم Disk
      استفاده می‌کنیم که کاربردهای آن‌ها کاملا یکسان است. در بخش‌های بعدی در رابطه با دیسک‌ها توضیحات بیشتری را ارائه می‌کنیم.
    </p>
    <Notice variant="warning">
      حتما برای Image هایی که مستقر می‌کنید
      از یک Tag
      مشخص استفاده کنید و سعی کنید که تا حد امکان از
      <span className="code">latest</span>
      استفاده نکنید. چرا که لیارا در زمان‌های مختلف
      Image
      را دوباره دانلود می‌کند که ممکن است باعث تغییر نسخه شده و سرویس‌تان دچار مشکل شود.
    </Notice>

    <h3 id="limits">محدودیت‌ها</h3>
    <p>
      <ol>
        <li>
          استفاده از <span className="code">VOLUME</span>
          در Dockerfile:
          فایل‌سیستم لیارا ReadOnly
          است و شما نمی‌تونید از دستور
          <span className="code">VOLUME</span>
          در Dockerfile
          استفاده کنید و به‌جای آن باید از قابلیت «دیسک‌ها» استفاده کنید. لازم است که این عبارت را قبل از استقرار حذف کنید.
          چنانچه از Image‌های
          DockerHub هم استفاده کنید، باید نظیر به‌نظیر
          <span className="code">VOLUME</span>
          هایی که در آن Image
          تعریف شده، دیسک بسازید و دیسک را در همان مسیر mount
          کنید.
          <br />
          برای مثال، Dockerfile زیر را در نظر بگیرید:
          <pre>
            <code>
              {`FROM ubuntu

RUN echo hello

VOLUME /path/to/data`}
            </code>
          </pre>
          این فایل برای این‌که بتواند در لیارا مستقر شود، باید خطی که در آن
          <span className="code">VOLUME</span>
          تعریف شده، حذف شود.
        </li>
        <li>
          استفاده از <span className="code">EXPOSE</span>
          در Dockerfile:
          لیارا از این قسمت از Dockerfile
          شما صرف‌نظر می‌کند. شما باید حتما پورتی که مدنظرتان است را با پارامتر
          <span className="code">--port</span>
          تنظیم کنید.
        </li>
        <li>
          تنها به‌پورت‌های HTTP
          می‌توانید از خارج از شبکه‌ی لیارا متصل شوید. برای مثال اگر یک سرویس مانند
          RabbitMQ
          را مستقر کنید، به‌این سرویس تنها در شبکه‌ی خصوصی لیارا دسترسی خواهید داشت.
        </li>
      </ol>
    </p>

    <Link href="/app-deploy/docker/logs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
