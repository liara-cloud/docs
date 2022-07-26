import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Streamlit - سرویس ابری لیارا</title>
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
      یک پکیج است که با زبان Python توسعه داده شده و به شما کمک می‌کند تا در
      سریع‌ترین زمان ممکن، داده‌ها را به نمایش بگذارید. برای استقرار برنامه‌های
      Streamlit در لیارا ابتدا لازم است که از بخش <strong>برنامه‌ها</strong>، یک
      برنامه <Link href="/app-deploy/docker/getting-started">Docker</Link> با
      نام و پلن دلخواه‌تان بسازید
    </p>
    <p>
      سپس یک فایل با نام
      <span className="code">Dockerfile</span>
      در ریشه‌ی برنامه‌ی‌تان بسازید و قطعه‌کد زیر را در این فایل قرار دهید:
    </p>

    <Highlight className="dockerfile">
      {`FROM python:3.9

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade pip && \\
    pip install --no-cache-dir -r requirements.txt

# streamlit-specific commands
RUN mkdir -p /root/.streamlit
RUN bash -c 'echo -e "\\
[general]\\n\\
email = \\"\\"\\n\\
" > /root/.streamlit/credentials.toml'
RUN bash -c 'echo -e "\\
[server]\\n\\
enableCORS = false\\n\\
" > /root/.streamlit/config.toml'

# exposing default port for streamlit
EXPOSE 8501

COPY . .

CMD [ "streamlit", "run", "main.py"]`}
    </Highlight>

    <p>
      در قدم بعد، یک فایل با نام <span className="code">liara.json</span> در
      مسیر اصلی پروژه ایجاد کرده و قطعه‌کد زیر را در این فایل قرار دهید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "docker",
  "port": 8501
}`}
    </Highlight>

    <p>
      در مرحله‌ی آخر دستور
      <span className="code">liara deploy</span>
      را در مسیر اصلی پروژه‌ی خود اجرا کنید تا برنامه‌ی شما در لیارا مستقر و
      اجرا شود.
    </p>
  </Layout>
);
