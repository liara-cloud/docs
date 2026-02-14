Original link: https://docs.liara.ir/paas/dotnet/how-tos/use-websocket/

# راه‌اندازی برنامه Websocket در NET. 

وب‌سوکت (WebSocket) یک فناوری ارتباطی در وب است که به سرور و مرورگر اجازه می‌دهد از طریق یک اتصال دوطرفه دائمی، داده‌ها را به صورت تعاملی ارسال و دریافت کنند. در واقع مرورگر می‌تواند داده‌ها را بفرستد و دریافت کند بدون اینکه نیازی به بارگیری دوباره صفحه وب (refresh) باشد. این ویژگی به برنامه‌های تعاملی مانند چت‌های زنده و بازی‌های آنلاین کمک می‌کند.
در ادامه، به نحوه ایجاد برنامه WebSocket در پلتفرم NET. با استفاده از `SignalR` و همچنین نحوه استقرار آن در لیارا خواهیم پرداخت.

## ساخت برنامه WebSocket در NET.
در ابتدا، کافیست تا یک پروژه وب NET. جدید، ایجاد کنید. نام آن‌ `SignalRChat` خواهد بود. برای ایجاد پروژه، کافیست تا دستور زیر را اجرا کنید:

```bash
dotnet new webapp -o SignalRChat
```

در ادامه، باید ابزارهای مربوط به SignalRChat را با اجرای دستورات زیر، نصب کنید:

```bash
dotnet tool uninstall -g Microsoft.Web.LibraryManager.Cli
dotnet tool install -g Microsoft.Web.LibraryManager.Cli
libman install @microsoft/signalr@latest -p unpkg -d wwwroot/js/signalr --files dist/browser/signalr.js
```

سپس، بایستی در مسیر اصلی پروژه، یک دایرکتوری به نام `Hubs` و درون این دایرکتوری، یک فایل به نام `ChatHub.cs` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```dotnet
using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
```

در ادامه، بایستی فایل `Program.cs`درون پروژه را به شکل زیر، تغییر دهید:

```dotnet
using SignalRChat.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddSignalR();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();
app.MapHub<ChatHub>("/chatHub");

app.Run();
```

پس از آن، بایستی محتوای فایل `Pages/Index.cshtml` را با قطعه کد زیر، جایگزین کنید:

```cshtml
@page
<div class="container">
    <div class="row p-1">
        <div class="col-1">User</div>
        <div class="col-5"><input type="text" id="userInput" /></div>
    </div>
    <div class="row p-1">
        <div class="col-1">Message</div>
        <div class="col-5"><input type="text" class="w-100" id="messageInput" /></div>
    </div>
    <div class="row p-1">
        <div class="col-6 text-end">
            <input type="button" id="sendButton" value="Send Message" />
        </div>
    </div>
    <div class="row p-1">
        <div class="col-6">
            
        </div>
    </div>
    <div class="row p-1">
        <div class="col-6">
            <ul id="messagesList"></ul>
        </div>
    </div>
</div>
<script src="~/js/signalr/dist/browser/signalr.js"></script>
<script src="~/js/chat.js"></script>
```

در نهایت، کافیست تا در مسیر `wwwroot/js` یک فایل به نام `chat.js` ایجاد کنید و قطعه کد زیر را، درون آن قرار دهید:

```python
"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `${user} says ${message}`;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
```

تمامی کارها انجام شده است و شما می‌توانید از ChatRoom خود استفاده کنید.

## استقرار برنامه NET. وب‌سوکت در لیارا

برای استقرار برنامه‌های websocket که با پلتفرم NET. توسعه داده شده‌اند؛ نیاز به انجام کار خاصی نیست. تنها کافیست تا یک برنامه NET. در لیارا ایجاد کنید و پروژه websocket خود را، در لیارا، مستقر کنید.

> سورس کامل یک برنامه NET. وب‌سوکت آماده استقرار در [https://github.com/liara-cloud/dotnet-getting-started/tree/websocket](https://github.com/liara-cloud/dotnet-getting-started/tree/websocket) موجود است که می‌توانید از آن استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
