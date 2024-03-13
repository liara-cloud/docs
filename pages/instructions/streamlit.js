import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Streamlit - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="streamlit" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Streamlit</h1>
        <span className="page-description">(Streamlit Apps)</span>
      </div>
    </div>

    <p>
      <a href="https://streamlit.io/" target="_blank" rel="noopener noreferrer">
        Streamlit
      </a>{" "}
      یک ابزار توسعه وب بسیار قدرتمند برای ساخت وب اپلیکیشن‌های داده محور با
      استفاده از Python است. این ابزار به شما امکان می‌دهد تا به راحتی و با
      استفاده از کتابخانه‌های محبوبی مانند Pandas و Matplotlib و Plotly و ....،
      اپلیکیشن‌های داده‌محور خود را طراحی کنید.
    </p>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید:
    </p>
    <video
      src="https://files.liara.ir/liara/streamlit/streamlit.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      برای استقرار برنامه‌های Streamlit در لیارا ابتدا لازم است که از بخش{" "}
      <strong>برنامه‌ها</strong>، یک برنامه{" "}
      <Link href="/app-deploy/docker/getting-started">Docker</Link> با نام و پلن
      دلخواه‌تان بسازید.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که برای شخصی‌سازی برنامه Streamlit، پلن انتخابی‌تان باید
      شامل فضای دیسک باشد.
    </Notice>

    <p>
      پس از این‌کار ، کافیست در برنامه داکری که ایجاد کرده‌اید، دربخش{" "}
      <strong>دیسک‌ها</strong> بر روی <strong>ایجاد دیسک</strong> کلیک کرده و یک
      دیسک با نام <span className="code">data</span> و میزان فضای{" "}
      <span className="code">2GB</span> ایجاد کنید.
    </p>

    <p>
      پس از ساخت برنامه و دیسک مذکور، در لوکال در یک دایرکتوری خالی، یک فایل با
      نام
      <span className="code">Dockerfile</span>
      بسازید و قطعه‌کد زیر را در این فایل قرار دهید:
    </p>

    <Highlight className="dockerfile">
      {`# Use Python 3.9 slim as the base image
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# Install necessary packages
RUN apt-get update && apt-get install -y \\
    build-essential \\
    curl \\
    software-properties-common \\
    git \\
    && rm -rf /var/lib/apt/lists/*

# Clone the Streamlit example repository
RUN git clone https://github.com/streamlit/streamlit-example.git .

# Install Python dependencies
RUN pip3 install -r requirements.txt

# Healthcheck to verify the application is running
HEALTHCHECK CMD curl --fail http://localhost:8501/_stcore/health

# Entry point command to start the Streamlit application
ENTRYPOINT ["streamlit", "run", "streamlit_app.py", "--server.port=8501", "--server.address=0.0.0.0"]`}
    </Highlight>

    <p>
      در قدم بعد، یک فایل با نام <span className="code">liara.json</span> در
      کنار <span className="code">Dockerfile</span> ایجاد کرده و قطعه‌کد زیر را
      در این فایل قرار دهید:
    </p>
    <Highlight className="json">
      {`{
    "port": 8501,
    "disks":[
        {
            "name": "data",
            "mountTo": "/app/"
        }
    ]
}`}
    </Highlight>

    <p>
      در مرحله‌ی آخر دستور
      <span className="code">liara deploy</span>
      را در مسیر اصلی پروژه‌ی خود اجرا کنید تا برنامه‌ی شما در لیارا مستقر و
      اجرا شود.
    </p>

    <Notice variant="info">
      در نظر داشته باشید که برای شخصی‌سازی فایل{" "}
      <span className="code">streamlit_app.py</span> باید برای دیسک یک{" "}
      <Link href="/storage/disks/ftp/">دسترسی FTP</Link> ایجاد کنید و با استفاده
      از برنامه‌هایی مثل Filezilla یا WinSCP به دیسک متصل شوید و تغییرات
      مدنظرتان را در فایل مذکور اعمال نمایید.
    </Notice>
  </Layout>
);
