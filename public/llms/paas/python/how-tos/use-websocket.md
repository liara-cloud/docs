Original link: https://docs.liara.ir/paas/python/how-tos/use-websocket/

# راه‌اندازی برنامه Websocket

وب‌سوکت (WebSocket) یک فناوری ارتباطی در وب است که به سرور و مرورگر اجازه می‌دهد از طریق یک اتصال دوطرفه دائمی، داده‌ها را به صورت تعاملی ارسال و دریافت کنند. در واقع مرورگر می‌تواند داده‌ها را بفرستد و دریافت کند بدون اینکه نیازی به بارگیری دوباره صفحه وب (refresh) باشد. این ویژگی به برنامه‌های تعاملی مانند چت‌های زنده و بازی‌های آنلاین کمک می‌کند.  
در ادامه، به نحوه ایجاد برنامه WebSocket در فریم‌ورک Django با استفاده از ماژول `channels` و همچنین نحوه استقرار آن در لیارا، پرداخته شده است.

## ساخت برنامه WebSocket در Django
پروژه‌ در پیش‌رو، یک چت‌روم تحت وب در فریم‌ورک Django است که کاربران می‌توانند در آن به صورت Realtime (با تکیه بر WebSocket) به گفتگو بپردازند.  
در ابتدا، بایستی در محیط مجازی، با اجرای دستور زیر، یک پروژه جدید Django را، ایجاد کنید:

```bash
django-admin startproject ChatApp
```

‌پس از اجرای دستور فوق، کافیست تا دستور زیر را اجرا کنید تا ماژول‌های `channels` و `daphne` برای‌تان نصب شود:

```bash
pip install channels daphne
```

حال، بایستی با استفاده از دستور زیر، یک application جدید به نام chat در پروژه ایجاد کنید:

```js
python manage.py startapp chat
```

پس از اجرای دستورات فوق، کافیست تا برنامه `chat` و ماژول‌های `channels` و `daphne` را به `INSTALLED_APPS` در فایل `settings.py` به شکل زیر، اضافه کنید:

```python
INSTALLED_APPS = [
    'daphne', 
    'chat', 
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'channels',
]
```

پس از انجام کار فوق، باید قطعه کد زیر را در فایل `settings.py` قرار دهید:

```python
ASGI_APPLICATION = 'ChatApp.asgi.application'
```

سپس، فایل‌ها و دایرکتوری‌های زیر را در مسیرهای مشخص شده، ایجاد کنید:

- فایل `chat/urls.py`
- دایرکتوری `chat/templates`
- دایرکتوری `chat/templates/chat`
- فایل‌های `chat/templates/chat/chatPage.html` و `chat/templates/chat/LoginPage.html`
- فایل `chat/routing.py`
- فایل `chat/consumers.py`

اکنون، در فایل `ChatApp/urls.py` قطعه کد زیر را قرار دهید:

```python
from django.contrib import admin
from django.urls import path, include
 
urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("chat.urls")),
]
```

و قطعه کد زیر را نیز در `chat/urls.py` قرار دهید:

```python
from django.urls import path, include
from chat import views as chat_views
from django.contrib.auth.views import LoginView, LogoutView


urlpatterns = [
	path("", chat_views.chatPage, name="chat-page"),

	# login-section
	path("auth/login/", LoginView.as_view
		(template_name="chat/LoginPage.html"), name="login-user"),
	path("auth/logout/", LogoutView.as_view(), name="logout-user"),
]
```

سپس، در `chat/views.py` قطعه کد زیر را قرار دهید:

```python
from django.shortcuts import render, redirect


def chatPage(request, *args, **kwargs):
	if not request.user.is_authenticated:
		return redirect("login-user")
	context = {}
	return render(request, "chat/chatPage.html", context)
```

اکنون، می‌توانید در `chat/templates/chat/chatPage.html` از قطعه کد ساده زیر استفاده کنید:

```html
<!DOCTYPE html>
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
	
	<input type="text" id="id_message_send_input" />
	<button type="submit" id="id_message_send_button">Send Message</button>
	
	
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
```

و همچنین، قطعه کد زیر را در `chat/templates/chat/LoginPage.html` به کار ببرید:

```html
<!DOCTYPE html>
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
```

پس از انجام کارهای فوق، کافیست تا دستورات زیر را اجرا کنید:

```bash
python manage.py makemigrations
python manage.py migrate
```

اکنون، باید قطعه کد زیر را در `chat/routing.py` قرار دهید:

```python
from django.urls import path , include
from chat.consumers import ChatConsumer

# Here, "" is routing to the URL ChatConsumer which 
# will handle the chat functionality.
websocket_urlpatterns = [
	path("" , ChatConsumer.as_asgi()) , 
]
```

و همچنین در `chat/consumers.py` قطعه کد زیر را قرار دهید:

```python
import json
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
```

پس از انجام کارهای فوق، اکنون کافیست تا در `ChatApp/asgi.py` قطعه کد زیر را قرار دهید:

```python
import os
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
```

در ادامه، باید قطعه کد زیر را به فایل `settings.py` اضافه کنید:

```python
CHANNEL_LAYERS = {
	"default": {
		"BACKEND": "channels.layers.InMemoryChannelLayer"
	}
}
```

> در نظر داشته باشید که قطعه کد فوق، مناسب محیط توسعه است و برای استفاده در محیط Production، بهتر است از Redis Channels استفاده کنید. در ادامه، نحوه استفاده از Redis Channels در برنامه‌های جنگو، آموزش داده شده است.

در نهایت، قطعه کد زیر را به انتهای فایل `settings.py` اضافه کنید:

```python
LOGIN_REDIRECT_URL= "chat-page"
LOGOUT_REDIRECT_URL= "login-user"
```

تمام کارها انجام شده است و اکنون می‌توانید با استفاده از دستور زیر؛ کاربران مدنظر خود را ایجاد کنید تا در چت‌روم، با یکدیگر تعامل داشته باشند:

```bash
python manage.py createsuperuser
```

در انتها، با استفاده از دستور زیر، می‌توانید برنامه را اجرا و استفاده کنید:

```bash
python manage.py runserver
```

## استقرار برنامه Django WebSocket در لیارا

برای استقرار برنامه‌های وب‌سوکت جنگو در لیارا، نیازی به انجام تغییر خاصی نیست. صرفاً باید به جای استفاده از آدرس `ws`، عبارت `wss` را به کار ببرید تا اتصال، ایمن و سازگار باشد. همچنین، در فایل `settings.py` باید قطعه کد زیر را حذف کنید:

```python
WSGI_APPLICATION = 'ChatApp.wsgi.application'
```

و به جای آن، از قطعه کد زیر استفاده کنید:

```python
ASGI_APPLICATION = 'ChatApp.asgi.application'
```

> مقدار متغیرهای فوق وابسته به نام پروژه، متغیر هستند و این مقدار در این‌جا، یک مثال برای پروژه‌ای به نام ChatApp می‌باشد.

از آنجایی که استفاده از `InMemoryChannelLayer` در حالت Production، احتمال نشت داده‌ها را بسیار افزایش می‌دهد؛ پس بهتر است به جای آن، از Redis Channels استفاده کنید. برای این کار نیز، کافیست تا در ابتدا ماژول `channels-redis` در پروژه خود، نصب کنید:

```bash
pip install channels-redis
```

پس از نصب ماژول فوق، کافیست تا قطعه کد زیر را از فایل `settings.py` حذف کنید:

```python
CHANNEL_LAYERS = {
	"default": {
		"BACKEND": "channels.layers.InMemoryChannelLayer"
	}
}
```

و قطعه کد زیر را جایگزین آن کنید:

```python
import os
CHANNEL_LAYERS = {
    "default": {
    "BACKEND": "channels_redis.pubsub.RedisPubSubChannelLayer",
    "CONFIG": {
        "hosts":[{
            "address": os.getenv('REDIS_URI'),  
        }]}
    }
}
```

> باید طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، یک متغیر محیطی به نام `REDIS_URI` با مقدار URI دیتابیس Redis خود به برنامه Djangoتان، اضافه کنید.

در انتها، می‌توانید برنامه خود را بدون هیچ مشکل خاصی، در لیارا مستقر کنید.

> سورس کامل یک برنامه Django WebSocket آماده استقرار در [https://github.com/liara-cloud/django-getting-started/tree/asgi](https://github.com/liara-cloud/django-getting-started/tree/asgi) موجود است که می‌توانید از آن استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
