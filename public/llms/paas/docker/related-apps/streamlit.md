Original link: https://docs.liara.ir/paas/docker/related-apps/streamlit/

# استقرار برنامه‌های Streamlit

[Video link](https://media.liara.ir/streamlit/streamlit.mp4)

[Streamlit](https://streamlit.io/) یک ابزار توسعه وب بسیار قدرتمند برای ساخت وب اپلیکیشن‌های داده محور با استفاده از Python است. این ابزار به شما امکان می‌دهد تا به راحتی و با استفاده از کتابخانه‌های محبوبی مانند Pandas و Matplotlib و Plotly و ....، اپلیکیشن‌های داده‌محور خود را طراحی کنید.

شما می‌توانید برنامه‌های Streamlit خود را با [ایجاد برنامه‌های Docker](../../how-tos/create-app) در لیارا، مستقر کنید.  
برای این‌کار، کافیست تا  
در Local یک دایرکتوری با نام دلخواه بسازید، وارد دایرکتوری شوید و در آن یک فایل به نام `Dockerfile` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```dockerfile
# Use Python 3.9 slim as the base image
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
ENTRYPOINT ["streamlit", "run", "streamlit_app.py", "--server.port=8501", "--server.address=0.0.0.0"]
```

حال، بایستی در کنار `Dockerfile`، یک فایل دیگر به نام `liara.json` ایجاد کنید و درون این فایل،  
قطعه کد زیر را، قرار دهید:

```json
{
    "port": 8501,
    "platform": "docker",
    "disks":[
        {
            "name": "data",
            "mountTo": "/app/"
        }
    ]
}
```

سپس، بایستی در برنامه داکری که ایجاد کرده‌اید، طبق [مستندات ساخت دیسک](https://docs.liara.ir/paas/disks/create)، یک دیسک به نام `data` با حداقل فضای 2GB، ایجاد کنید. در نهایت نیز، کافیست تا دستور زیر را اجرا کنید تا برنامه‌تان در لیارا، مستقر شود:

```bash
liara deploy
```

> برای شخصی‌سازی فایل `streamlit_app.py`، می‌توانید از [دسترسی FTP](https://docs.liara.ir/paas/disks/ftp-access)، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
