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
      <title>مستندات وب سوکت در برنامه‌های dotnet - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="dotnet" />
      <div className="page-title">
        <h1>پلتفرم NET.</h1>
        <span className="page-description">(DotNet Platform)</span>
      </div>
    </div>

    <h3>وب‌سوکت در برنامه‌های NET.</h3>

    <p>
      وب‌سوکت یا WebSocket یک فناوری ارتباطی در وب است که به سرور و مرورگر اجازه
      می‌دهد از طریق یک اتصال دوطرفه دائمی، داده‌ها را به صورت تعاملی ارسال و
      دریافت کنند. در واقع مرورگر می‌تواند داده‌ها را بفرستد و دریافت کند بدون
      اینکه نیازی به بارگیری دوباره صفحه وب (refresh) باشد. این ویژگی به
      برنامه‌های تعاملی مانند چت‌های زنده و بازی‌های آنلاین کمک می‌کند.
    </p>

    <p>
      در ادامه، به نحوه ایجاد برنامه WebSocket در پلتفرم NET. با استفاده از
      <span className="code">SignalR</span> و همچنین نحوه استقرار آن در لیارا
      خواهیم پرداخت.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#build-websocket">ساخت برنامه WebSocket در NET.</a>
      </li>
      <li>
        <a href="#deploy-websocket">استقرار برنامه DotNet WebSocket در لیارا</a>
      </li>
    </ul>

    <h3 id="build-websocket">ساخت برنامه WebSocket در NET.</h3>
    <p>
      در ابتدا، کافیست تا یک پروژه وب NET. جدید، ایجاد کنید. ما نام آن‌را{" "}
      <span className="code">SignalRChat</span>
      خواهیم گذاشت. برای ایجاد پروژه، کافیست تا دستور زیر را اجرا کنید:{" "}
    </p>

    <Highlight className="shell">
      {`dotnet new webapp -o SignalRChat`}
    </Highlight>

    <p>
      در ادامه، باید ابزارهای مربوط به SignalRChat را با اجرای دستورات زیر، نصب
      کنیم:
    </p>
    <Highlight className="shell">
      {`dotnet tool uninstall -g Microsoft.Web.LibraryManager.Cli
dotnet tool install -g Microsoft.Web.LibraryManager.Cli
libman install @microsoft/signalr@latest -p unpkg -d wwwroot/js/signalr --files dist/browser/signalr.js
`}
    </Highlight>

    <p>
      سپس، بایستی در مسیر اصلی پروژه، یک دایرکتوری به نام{" "}
      <span className="code">Hubs</span>و درون این دایرکتوری، یک فایل به نام{" "}
      <span className="code">ChatHub.cs</span> ایجاد کنیم و قطعه کد زیر را، درون
      آن، قرار دهیم:
    </p>
    <Highlight className="dotnet">
      {`using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}`}
    </Highlight>

    <p>
      در ادامه، بایستی فایل <span className="code">Program.cs</span> درون پروژه
      را به شکل زیر، تغییر دهیم:
    </p>
    <Highlight className="dotnet">
      {`using SignalRChat.Hubs;

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

app.Run();`}
    </Highlight>

    <p>
      پس از آن، بایستی محتوای فایل{" "}
      <span className="code">Pages/Index.cshtml</span> را با قطعه کد زیر،
      جایگزین کنیم:{" "}
    </p>
    <Highlight className="html">
      {`@page
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
            <hr />
        </div>
    </div>
    <div class="row p-1">
        <div class="col-6">
            <ul id="messagesList"></ul>
        </div>
    </div>
</div>
<script src="~/js/signalr/dist/browser/signalr.js"></script>
<script src="~/js/chat.js"></script>`}
    </Highlight>

    <p>
      در نهایت، کافیست تا در مسیر <span className="code">wwwroot/js</span> یک
      فایل به نام <span className="code">chat.js</span> ایجاد کنیم و قطعه کد زیر
      را، درون آن قرار دهیم:
    </p>
    <Highlight className="dotnet">
      {`"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = \`\${user} says \${message}\`;
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
});`}
    </Highlight>
    <p>
      تمامی کارها انجام شده است و شما می‌توانید از ChatRoom خود استفاده کنید.
    </p>

    <h3 id="deploy-websocket">استقرار برنامه DotNet WebSocket در لیارا</h3>
    <p>
      برای استقرار برنامه‌های websocket که با پلتفرم DotNet توسعه داده شده‌اند؛
      نیاز به انجام کار خاص یا تغییر چیزی نیست. تنها کافیست تا یک{" "}
      <b>برنامه NET.</b> در لیارا ایجاد کنید و پروژه websocket خود را، در لیارا،
      مستقر کنید.
    </p>
    <Notice variant="info">
      سورس کامل یک برنامه DotNet WebSocket آماده استقرار در{" "}
      <a href="https://github.com/liara-cloud/dotnet-getting-started/tree/websocket">
        گیت‌هاب لیارا
      </a>{" "}
      موجود است که می‌توانید از آن استفاده کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/dotnet/email" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
