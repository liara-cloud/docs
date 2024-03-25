import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات وب سوکت در برنامه‌های Django - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
      </div>
    </div>

    <h3>وب‌سوکت در برنامه‌های Django</h3>

    <p>
      وب‌سوکت یا WebSocket یک فناوری ارتباطی در وب است که به سرور و مرورگر اجازه
      می‌دهد از طریق یک اتصال دوطرفه دائمی، داده‌ها را به صورت تعاملی ارسال و
      دریافت کنند. در واقع مرورگر می‌تواند داده‌ها را بفرستد و دریافت کند بدون
      اینکه نیازی به بارگیری دوباره صفحه وب (refresh) باشد. این ویژگی به
      برنامه‌های تعاملی مانند چت‌های زنده و بازی‌های آنلاین کمک می‌کند.
    </p>

    <p>
      در ادامه، به نحوه ایجاد برنامه WebSocket در پلتفرم جنگو با استفاده از
      ماژول
      <span className="code">channels</span> و همچنین نحوه استقرار آن در لیارا
      خواهیم پرداخت.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#build-websocket">ساخت برنامه WebSocket در جنگو</a>
      </li>
      <li>
        <a href="#deploy-websocket">استقرار برنامه Django WebSocket در لیارا</a>
      </li>
    </ul>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/django/django-websocket.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h3 id="build-websocket">ساخت برنامه WebSocket در جنگو</h3>
    <p>
      در ابتدا، باید با استفاده از دستور زیر، در یک محیط مجازی، یک پروژه Django
      جدید ایجاد کنید. پروژه ما، یک چت‌روم ساده است که بر اصول WebSocket تکیه
      کرده است:
    </p>

    <Highlight className="shell">
      {`django-admin startproject ChatApp`}
    </Highlight>

    <p>
      ‌پس از اجرای دستور فوق، کافیست تا دستور زیر را اجرا کنید تا ماژول‌های{" "}
      <span className="code">channels</span> و{" "}
      <span className="code">daphne</span> برای‌تان نصب شود:
    </p>
    <Highlight className="shell">{`pip install channels daphne`}</Highlight>

    <p>
      حال، بایستی با استفاده از دستور زیر، یک application جدید به نام chat در
      پروژه ایجاد کنید:
    </p>
    <Highlight className="shell">{`python manage.py startapp chat`}</Highlight>

    <p>
      پس از اجرای دستورات فوق، کافیست تا برنامه{" "}
      <span className="code">chat</span> و ماژول‌های{" "}
      <span className="code">channels</span> و{" "}
      <span className="code">daphne</span> را به{" "}
      <span className="code">INSTALLED_APPS</span> در فایل{" "}
      <span className="code">settings.py</span> به شکل زیر، اضافه کنید:
    </p>
    <Highlight className="python">
      {`INSTALLED_APPS = [
    'daphne', 
    'chat', 
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'channels',
]`}
    </Highlight>

    <p>
      پس از انجام کار فوق، باید قطعه کد زیر را در فایل{" "}
      <span className="code">settings.py</span> قرار دهید:
    </p>

    <Highlight className="shell">
      {`ASGI_APPLICATION = 'ChatApp.asgi.application'`}
    </Highlight>

    <p>سپس، فایل‌ها و دایرکتوری‌های زیر را در مسیرهای مشخص شده، ایجاد کنید:</p>
    <ul className="mt-0">
      <li>فایل chat/urls.py</li>
      <li>دایرکتوری chat/templates</li>
      <li>دایرکتوری chat/templates/chat</li>
      <li>
        فایل‌های chat/templates/chat/chatPage.html و
        chat/templates/chat/LoginPage.html
      </li>
      <li>فایل chat/routing.py</li>
      <li>فایل chat/consumers.py</li>
    </ul>

    <p>
      اکنون، در فایل <span className="code">ChatApp/urls.py</span> قطعه کد زیر
      را قرار دهید:
    </p>
    <Highlight className="python">
      {`from django.contrib import admin
from django.urls import path, include
 
urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("chat.urls")),
]`}
    </Highlight>
    <p>
      و قطعه کد زیر را نیز در <span className="code">chat/urls.py</span> قرار
      دهید:
    </p>
    <Highlight className="python">
      {`from django.urls import path, include
from chat import views as chat_views
from django.contrib.auth.views import LoginView, LogoutView


urlpatterns = [
	path("", chat_views.chatPage, name="chat-page"),

	# login-section
	path("auth/login/", LoginView.as_view
		(template_name="chat/LoginPage.html"), name="login-user"),
	path("auth/logout/", LogoutView.as_view(), name="logout-user"),
]
`}
    </Highlight>
    <p>
      سپس، در <span className="code">chat/views.py</span> قطعه کد زیر را قرار
      دهید:
    </p>
    <Highlight className="python">
      {`from django.shortcuts import render, redirect


def chatPage(request, *args, **kwargs):
	if not request.user.is_authenticated:
		return redirect("login-user")
	context = {}
	return render(request, "chat/chatPage.html", context)
`}
    </Highlight>
    <p>
      اکنون، می‌توانید در{" "}
      <span className="code">chat/templates/chat/chatPage.html</span> از قطعه کد
      ساده زیر استفاده کنید:
    </p>
    <Highlight className="html">
      {`<!DOCTYPE html>
<html>
<body>
	<center><h1>Welcome to chat site! {{request.user}}</h1></center>
	<br>
	{% if request.user.is_authenticated %}
	<center> Logout the chat Page <a href = "{% url 'logout-user' %}">Logout</a></center>
	{% endif %}
	<div
	class="chat__item__container"
	id="id_chat_item_container"
	style="font-size: 20px"
	>
	<br />
	<input type="text" id="id_message_send_input" />
	<button type="submit" id="id_message_send_button">Send Message</button>
	<br />
	<br />
	</div>
	<script>
	const chatSocket = new WebSocket("ws://" + window.location.host + "/");
	chatSocket.onopen = function (e) {
		console.log("The connection was setup successfully !");
	};
	chatSocket.onclose = function (e) {
		console.log("Something unexpected happened !");
	};
	document.querySelector("#id_message_send_input").focus();
	document.querySelector("#id_message_send_input").onkeyup = function (e) {
		if (e.keyCode == 13) {
		document.querySelector("#id_message_send_button").click();
		}
	};
	document.querySelector("#id_message_send_button").onclick = function (e) {
		var messageInput = document.querySelector(
		"#id_message_send_input"
		).value;
		chatSocket.send(JSON.stringify({ message: messageInput, username : "{{request.user.username}}"}));
	};
	chatSocket.onmessage = function (e) {
		const data = JSON.parse(e.data);
		var div = document.createElement("div");
		div.innerHTML = data.username + " : " + data.message;
		document.querySelector("#id_message_send_input").value = "";
		document.querySelector("#id_chat_item_container").appendChild(div);
	};
	</script>
</body>
</html>
`}
    </Highlight>
    <p>
      و همچنین، قطعه کد زیر را در{" "}
      <span className="code">chat/templates/chat/LoginPage.html</span> به کار
      ببرید:
    </p>
    <Highlight className="html">
      {`<!DOCTYPE html>
<html>
<body>
	<form method ="post">
		{% csrf_token %}
		{{form.as_p}}
		<br>
		<button type = "submit">Login</button>
	</form>
</body>
</html>
`}
    </Highlight>

    <p>پس از انجام کارهای فوق، کافیست تا دستورات زیر را اجرا کنید:</p>
    <Highlight className="shell">
      {`python manage.py makemigrations
python manage.py migrate`}
    </Highlight>

    <p>
      اکنون، باید قطعه کد زیر را در{" "}
      <span className="code">chat/routing.py</span> قرار دهید:
    </p>
    <Highlight className="python">
      {`from django.urls import path , include
from chat.consumers import ChatConsumer

# Here, "" is routing to the URL ChatConsumer which 
# will handle the chat functionality.
websocket_urlpatterns = [
	path("" , ChatConsumer.as_asgi()) , 
]
`}
    </Highlight>

    <p>
      و همچنین در <span className="code">chat/consumers.py</span> قطعه کد زیر را
      قرار دهید:
    </p>

    <Highlight className="python">
      {`import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatConsumer(AsyncWebsocketConsumer):
	async def connect(self):
		self.roomGroupName = "group_chat_gfg"
		await self.channel_layer.group_add(
			self.roomGroupName ,
			self.channel_name
		)
		await self.accept()
	async def disconnect(self , close_code):
		await self.channel_layer.group_discard(
			self.roomGroupName , 
			self.channel_layer 
		)
	async def receive(self, text_data):
		text_data_json = json.loads(text_data)
		message = text_data_json["message"]
		username = text_data_json["username"]
		await self.channel_layer.group_send(
			self.roomGroupName,{
				"type" : "sendMessage" ,
				"message" : message , 
				"username" : username ,
			})
	async def sendMessage(self , event) : 
		message = event["message"]
		username = event["username"]
		await self.send(text_data = json.dumps({"message":message ,"username":username}))
`}
    </Highlight>

    <p>
      پس از انجام کارهای فوق، اکنون کافیست تا در{" "}
      <span className="code">ChatApp/asgi.py</span> قطعه کد زیر را قرار دهید:
    </p>

    <Highlight className="python">
      {`import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ChatApp.settings')

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter , URLRouter
from chat import routing

application = ProtocolTypeRouter(
	{
		"http" : get_asgi_application() , 
		"websocket" : AuthMiddlewareStack(
			URLRouter(
				routing.websocket_urlpatterns
			) 
		)
	}
)
`}
    </Highlight>
    <p>
      در ادامه، باید قطعه کد زیر را به فایل{" "}
      <span className="code">settings.py</span> اضافه کنید:
    </p>
    <Highlight className="python">
      {`CHANNEL_LAYERS = {
	"default": {
		"BACKEND": "channels.layers.InMemoryChannelLayer"
	}
}
`}
    </Highlight>
    <Notice variant="warning">
      در نظر داشته باشید که قطعه کد فوق، مناسب محیط توسعه است و برای استفاده در
      محیط Production، بهتر است از Redis Channels استفاده کنید. در ادامه، نحوه
      استفاده از Redis Channels در برنامه‌های جنگو، آموزش داده شده است.
    </Notice>
    <p>
      در نهایت، قطعه کد زیر را به انتهای فایل{" "}
      <span className="code">settings.py</span> اضافه کنید:
    </p>
    <Highlight className="python">
      {`LOGIN_REDIRECT_URL= "chat-page"
LOGOUT_REDIRECT_URL= "login-user"`}
    </Highlight>

    <p>
      تمام کارها انجام شده است و اکنون می‌توانید با استفاده از دستور زیر؛
      کاربران مدنظر خود را ایجاد کنید تا در چت‌روم، با یکدیگر تعامل داشته باشند:
    </p>
    <Highlight className="shell">
      {`python manage.py createsuperuser`}
    </Highlight>
    <p>
      در انتها، با استفاده از دستور زیر، می‌توانید برنامه را اجرا و استفاده
      کنید:
    </p>
    <Highlight className="shell">{`python manage.py runserver`}</Highlight>

    <h3 id="deploy-websocket">استقرار برنامه Django WebSocket در لیارا</h3>
    <p>
      برای استقرار برنامه‌های وب‌سوکت جنگو در لیارا، نیازی به انجام تغییر خاصی
      نیست. صرفاً باید به جای استفاده از آدرس <span className="code">ws</span>،
      عبارت <span className="code">wss</span> را به کار ببرید تا اتصال، ایمن و
      سازگار باشد. همچنین، در فایل <span className="code">settings.py</span>{" "}
      باید قطعه کد زیر را حذف کنید:
    </p>

    <Highlight className="python">
      {`WSGI_APPLICATION = 'ChatApp.wsgi.application'`}
    </Highlight>
    <p>و به جای آن، از قطعه کد زیر استفاده کنید:</p>
    <Highlight className="python">
      {`ASGI_APPLICATION = 'ChatApp.asgi.application'`}
    </Highlight>

    <Notice variant="info">
      در نظر داشته باشید که مقدار متغیرهای فوق وابسته به نام پروژه، متغیر هستند
      و در اینجا، یک مثال برای پروژه‌ای به نام ChatApp می‌باشند.
    </Notice>

    <p>
      از آنجایی که استفاده از <span className="code">InMemoryChannelLayer</span>{" "}
      در حالت Production، احتمال نشت داده‌ها را بسیار افزایش می‌دهد؛ پس بهتر است
      به جای آن، از Redis Channels استفاده کنید. برای این کار نیز، کافیست تا در
      ابتدا ماژول <span className="code">channels-redis</span> در پروژه خود، نصب
      کنید:
    </p>
    <Highlight className="python">{`pip install channels-redis`}</Highlight>

    <p>
      پس از نصب ماژول فوق، کافیست تا قطعه کد زیر را از فایل{" "}
      <span className="code">settings.py</span>
      حذف کنید:
    </p>
    <Highlight className="python">
      {`CHANNEL_LAYERS = {
	"default": {
		"BACKEND": "channels.layers.InMemoryChannelLayer"
	}
}`}
    </Highlight>

    <p>و قطعه کد زیر را جایگزین آن کنید:</p>
    <Highlight className="python">
      {`import os
CHANNEL_LAYERS = {
    "default": {
    "BACKEND": "channels_redis.pubsub.RedisPubSubChannelLayer",
    "CONFIG": {
        "hosts":[{
            "address": os.getenv('REDIS_URI'),  
        }]}
    }
}`}
    </Highlight>

    <Notice variant="warning">
      توجه داشته باشید که باید در بخش <strong>تنظیمات، متغیرهای محیطی</strong>{" "}
      برنامه جنگو خود، یک متغیر محیطی به نام{" "}
      <span className="code">REDIS_URI</span> ایجاد کنید و مقدار آن را نیز با
      توجه به URI دیتابیس Redis خود وارد کنید. برای ساخت{" "}
      <a href="/databases/redis/install">دیتابیس Redis</a> کلیک کنید.
    </Notice>

    <p>
      در انتها، می‌توانید برنامه خود را بدون هیچ مشکل خاصی، در لیارا مستقر کنید.
    </p>
    <Notice variant="info">
      سورس کامل یک برنامه Django WebSocket آماده استقرار در{" "}
      <a href="https://github.com/liara-cloud/django-getting-started/tree/asgi">
        گیت‌هاب لیارا
      </a>{" "}
      موجود است که می‌توانید از آن استفاده کنید.
    </Notice>

    <br></br>
    <Link href="/app-deploy/django/email" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
