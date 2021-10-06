import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

export default () => (
    <Layout>
        <Head>
            <title></title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/docker.svg"
                alt="docker"
            />
            <div className="page-title">
                <h1>استقرار Image از DockerHub</h1>
                <span className="page-description">(Docker Apps)</span>
            </div>
        </div>

        <p>
            در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
            ‌را مشاهده کنید.
        </p>
        <video
            src="https://files.liara.ir/liara/docker-image.mp4"
            controls="controls"
            className="block w-full"
            width="100%"
        ></video>
        <p>

            برای استقرار مستقیم imageهای build شده از DockerHub یا هر رجیستری‌های عمومی دیگر در لیارا تنها کافیست که به شکل زیر از پارامتر <span className="code">--image</span> در زمان اجرای دستور <span className="code">liara deploy</span> استفاده کنید:
        </p>
        <Highlight className="bash">
            {`$ liara deploy --image getmeili/meilisearch:v0.22 --app search-app --port 7700`}
        </Highlight>

        <Notice variant="warning">
            توصیه می‌کنیم حتما در زمان استقرار image از تگ مشخصی استفاده کرده و تا حد امکان از تگ <span className="code">latest</span> استفاده نکنید چون با تغییر نسخه‌ی image ممکن است برنامه‌ی شما دچار مشکل شود.
        </Notice>

        <p>
            روش دیگر این است که یک فایل با نام <Link href="/app-deploy/docker/liarajson">liara.json</Link> در مسیر اصلی پروژه ایجاد کرده و پس از تنظیم مشخصه‌های مورد نیاز مانند قطعه کد زیر، دستور <span className="code">liara deploy</span>
            را اجرا کنید:
        </p>
        <Highlight className="json">
            {`{
  "image": "getmeili/meilisearch:v0.22",
  "app": "search-app",
  "port": 7700,
  "disks": [
    {
      "name": "data",
      "mountTo": "/data.ms"
    }
  ]
}
`}
        </Highlight>
        <p>
            توجه داشته باشید که در لیارا به‌جای مفهوم Volume از مفهوم Disk
            استفاده می‌کنیم که کاربردهای آن‌ها کاملا یکسان است.
            {' '}
            <Link href="/app-deploy/docker/disks">
                توضیحات بیشتر
            </Link>
        </p>
        <Link href="/app-deploy/docker/envs">متوجه شدم، برو گام بعدی!</Link>
    </Layout>
);