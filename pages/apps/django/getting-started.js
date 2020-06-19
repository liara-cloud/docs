import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>Django سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Django</h1>
    <span className="pageDescription">(Django Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/django.mp4"
      controls="controls"
      className="block w-full"
    ></video>

    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه Django ای‌
      که نوشتید را روی بستر ابری لیارا مستقر کنید. برای راحتی شما با یک مثال
      واقعی تمام مراحل را پیش میبریم. میتونید این پروژه را از github دریافت
      کنید: (البته بدون در نظرگرفتن این پروژه تستی نیز میتوانید نحوه استقرار
      برنامه‌ی‌تان را یاد بگیرید.)
    </p>
    <pre>
      <code>
        {`$ git clone https://github.com/liara-cloud/django-getting-started
$ cd django-getting-started`}
      </code>
    </pre>
    <p>
      و درنهایت داخل مرورگر پروژه را با آدرس
      <span className="code">http://127.0.0.1:8000</span> باز کنید. اگر همه چیز
      درست بود یعنی آماد‌ه‌اید که برنامه را روی لیارا مستقر کنید.
    </p>
    <pre>
      <code>
        {`$ python3 -m pip install -r requirements.txt --user
$ python3 manage.py runserver`}
      </code>
    </pre>

    <Link href="/apps/django/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
