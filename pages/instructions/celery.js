import Notice from '../../components/Notice';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Highlight from 'react-highlight';

export default () => (
    <Layout>
        <Head>
            <title>
                مستندات شروع به کار Celery در برنامه‌های Django - سرویس ابری
                لیارا
            </title>
        </Head>

        <div className="page-head">
            <img
                className="page-icon"
                src="/static/platformicons/celery.svg"
                alt="celery"
            />
            <div className="page-title">
                <h1>Celery</h1>
                <span className="page-description">
                    (Distributed Task Queue)
                </span>
            </div>
        </div>

        <p>
            <a href="https://docs.celeryproject.org/en/stable/" target="_blank">
                Celery
            </a>{' '}
            یک Distributed Task Queue ساده و انعطاف‌‌پذیر است که ارتباط بین
            Producer و Consumer را با استفاده از یک Message Broker مانند{' '}
            <Link href="/databases/redis/install">Redis</Link> و یا{' '}
            <Link href="/instructions/rabbitmq">RabbitMQ</Link> ساده‌تر می‌کند.
        </p>

        <h4>فهرست عناوین:</h4>
        <ul className="mt-0">
            <li>
                <a href="#django">Celery در برنامه‌های Django</a>
            </li>
        </ul>

        <h4 id="django">Celery در برنامه‌های Django</h4>
        <p>
            طبق مستندات{' '}
            <a
                href="https://docs.celeryproject.org/en/stable/django/first-steps-with-django.html"
                target="_blank"
            >
                شروع به کار Celery در برنامه‌های Django
            </a>{' '}
            اگر شما برنامه‌ای با ساختار زیر داشته باشید:
        </p>
        <Highlight className="plaintext">
            {`- proj/
  - manage.py
  - proj/
    - __init__.py
    - settings.py
    - urls.py`}
        </Highlight>

        <p>
            توصیه می‌شود در ابتدا یک ماژول جدید با نام{' '}
            <strong>celery.py</strong> در مسیر <strong>proj/proj</strong> ایجاد
            کنید:
        </p>

        <Highlight className="python">
            {`# file: proj/proj/celery.py
import os
from celery import Celery
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'proj.settings')

app = Celery('proj')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')`}
        </Highlight>

        <p>
            حال برای اطمینان از import شدن ماژول <strong>celery.py</strong> در
            زمان اجرای
            <span className="code">shared_task</span> توسط فریم‌ورک Django،
            ماژول <strong>__init__.py</strong> را در مسیر{' '}
            <strong>proj/proj</strong> ایجاد کرده و قطعه کد زیر را در این فایل
            قرار دهید:
        </p>

        <Highlight className="python">
            {`from .celery import app as celery_app

__all__ = ('celery_app',)`}
        </Highlight>

        <p>
            در قدم بعد باید پیکربندی‌های مورد نیاز برای راه‌اندازی Celery را در
            انتهای فایل <strong>settings.py</strong> پروژه وارد کنید:
        </p>

        <Highlight className="python">
            {`# Celery Configuration Options

BROKER_URL = 'redis://:a*********3t@tommy.iran.liara.ir:34470/0'
CELERY_RESULT_BACKEND = 'redis://:a*********3t@tommy.iran.liara.ir:34470/0'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'Asia/Tehran'`}
        </Highlight>

        <p>
            با قرار داشتن قطعه کد{' '}
            <span className="code">app.autodiscover_tasks()</span> در فایل{' '}
            <strong>proj/proj/celery.py</strong> این امکان برای شما فراهم است که taskهای
            مورد نظر خود را در فایل <strong>tasks.py</strong> هر App به‌صورت
            جداگانه تعریف کنید:
        </p>

        <Highlight className="plaintext">
            {`- app1/
    - tasks.py
    - models.py
- app2/
    - tasks.py
    - models.py`}
        </Highlight>

        <p>
            برای مثال می‌توانید با استفاده از دکوریتور{' '}
            <span className="code">@shared_task</span> به‌شکل زیر taskهای خود را
            تعریف کنید:
        </p>

        <Highlight className="python">
            {`# app1/tasks.py

from celery import shared_task

@shared_task
def add(x, y):
    return x + y`}
        </Highlight>

        <p>
            درنهایت قبل از استقرار این پروژه در لیارا نیاز است که فایل{' '}
            <strong>supervisor.conf</strong> را در مسیر اصلی پروژه ایجاد کرده و
            پیکربندی زیر را در این فایل قرار دهید:
        </p>

        <Highlight className="ini">
            {`[program:celery-worker]
process_name=%(program_name)s_%(process_num)02d
command=celery -A proj worker -l INFO
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
startsecs=10
stopwaitsecs=600
redirect_stderr=true
stdout_logfile=/tmp/worker.log`}
        </Highlight>
    </Layout>
);
