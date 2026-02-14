Original link: https://docs.liara.ir/paas/nodejs/how-tos/use-websocket/

# راه‌اندازی برنامه Websocket

وب‌سوکت (WebSocket) یک فناوری ارتباطی در وب است که به سرور و مرورگر اجازه می‌دهد از طریق یک اتصال دوطرفه دائمی، داده‌ها را به صورت تعاملی ارسال و دریافت کنند. در واقع مرورگر می‌تواند داده‌ها را بفرستد و دریافت کند بدون اینکه نیازی به بارگیری دوباره صفحه وب (refresh) باشد. این ویژگی به برنامه‌های تعاملی مانند چت‌های زنده و بازی‌های آنلاین کمک می‌کند.  
در ادامه، به نحوه ایجاد برنامه WebSocket در پلتفرم NodeJS با استفاده از پکیج `ws` و همچنین نحوه استقرار آن در لیارا، پرداخته شده است.

## ساخت برنامه WebSocket در NodeJS
پروژه‌ در پیش‌رو، یک چت‌روم تحت وب در پلتفرم NodeJS است که کاربران می‌توانند در آن به صورت Realtime (با تکیه بر WebSocket) به گفتگو بپردازند.  
در ابتدا، بایستی پکیج‌های مورد نیاز برنامه را با اجرای دستور زیر با استفاده از `npm`، نصب کنید:

```bash
npm install ws serve-handler
```

در ادامه، بایستی یک فایل به نام `index.js` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```js
const { createServer } = require('http');
const staticHandler = require('serve-handler');
const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;

const server = createServer((req, res) => {
    return staticHandler(req, res, { public: 'public' });
});

const wss = new WebSocketServer({ server });

wss.on('connection', (client, req) => {
    const urlParams = new URLSearchParams(req.url.slice(1)); 
    const username = urlParams.get('username') || 'Anonymous';

    client.username = username;
    client.send(`Welcome, ${username}!`);

    client.on('message', (msg) => {
        const messageToSend = `[${username}]: ${msg}`;
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(messageToSend);
            }
        });
    });

    client.on('close', () => {
        console.log(`Client ${username} disconnected`);
    });
});

server.listen(process.argv[2] || 3000, () => {
    console.log(`Server listening...`);
});
```

سپس، یک دایرکتوری به نام `public` ایجاد کنید و درون آن، یک فایل به نام `index.html` بسازید و قطعه کد زیر را، درون آن، قرار دهید:

```html
<!DOCTYPE html>
<html lang="en">


<body>
    <!-- Form for entering username -->
    <div id="usernameForm">
        <label for="username">Enter your username:</label>
        <input type="text" id="username" placeholder="Username">
        <button onclick="submitUsername()">Submit</button>
    </div>

    <!-- Chat container -->
    <div id="chatContainer" style="display: none;">
        <div class="container">
            Messages:
            <div id="messages" class="messages"></div>
            <form id="msgForm" class="msgForm">
                <input type="text" placeholder="Send message" id="inputBox" />
                <input type="submit" value="Send">
            </form>
        </div>
    </div>

    <script type="text/javascript">
        let ws;

        function submitUsername() {
            const usernameInput = document.getElementById('username');
            const username = usernameInput.value.trim();
            if (username) {
                // Connect to WebSocket server
                ws = new WebSocket(`ws://${window.document.location.host}?username=${encodeURIComponent(username)}`);
                ws.binaryType = "blob";

                // Handle socket events
                ws.addEventListener("open", event => {
                    console.log("Websocket connection opened");
                    // Show chat container after connection
                    document.getElementById('usernameForm').style.display = 'none';
                    document.getElementById('chatContainer').style.display = 'block';
                });
                ws.addEventListener("close", event => {
                    console.log("Websocket connection closed");
                });

                // Handle incoming messages
                ws.onmessage = function (message) {
                    const msgDiv = document.createElement('div');
                    if (message.data instanceof Blob) {
                        // Handling Blob data
                        reader = new FileReader();
                        reader.onload = () => {
                            msgDiv.innerHTML = reader.result;
                            msgDiv.classList.add('msgCtn'); // Adding class for user's messages
                            document.getElementById('messages').appendChild(msgDiv);
                        };
                        reader.readAsText(message.data);
                    } else {
                        // Handling text data
                        msgDiv.innerHTML = message.data;
                        if (message.sender === 'user') { // Assuming 'user' is the sender's identifier
                            msgDiv.classList.add('msgCtn'); // Adding class for user's messages
                        } else {
                            msgDiv.classList.add('otherMsgCtn'); // Adding class for other users' messages
                        }
                        document.getElementById('messages').appendChild(msgDiv);
                    }
                };

                // Handle form submission
                const form = document.getElementById('msgForm');
                form.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const message = document.getElementById('inputBox').value;
                    ws.send(message);
                    document.getElementById('inputBox').value = ''
                });
            } else {
                alert('Please enter a valid username.');
            }
        }
    </script>
</body>
</html>
```

تمامی کارها، انجام شده است و شما می‌توانید با اجرای دستور `node index.js` برنامه را اجرا کرده و از آن استفاده کنید.

## استقرار برنامه NodeJS WebSocket در لیارا

برای استقرار برنامه Websocket در لیارا، نیاز به انجام تغییر خاصی در برنامه نیست. فقط، بایستی به جای `ws` برای برقراری اتصال، حتماً از `wss` استفاده کنید تا اتصال موفق و ایمن باشد:

```html
<script type="text/javascript">
    // other codes ...
    // Connect to WebSocket server
    ws = new WebSocket(`wss://${window.document.location.host}?username=${encodeURIComponent(username)}`);
    // other codes ...
</script>
```

همچنین، بایستی در فایل `package.json` موجود در مسیر اصلی پروژه، اسکریپت `start` را به شکل زیر، تعریف کنید (با توجه به پروژه، نام فایل اصلی را باید وارد کنید):

```html
{
  "scripts": {
    "start": "node index.js"
  }
}
```

> سورس کامل یک برنامه NodeJS WebSocket آماده استقرار در [https://docs.liara.ir/github.com/liara-cloud/nodejs-getting-started/tree/websocket](https://github.com/liara-cloud/nodejs-getting-started/tree/websocket) موجود است که می‌توانید از آن استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
