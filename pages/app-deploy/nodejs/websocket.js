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
      <title>مستندات وب سوکت در برنامه‌های NodeJS - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>پلتفرم NodeJS</h1>
        <span className="page-description">(NodeJS Platform)</span>
      </div>
    </div>

    <h3>وب‌سوکت در برنامه‌های NodeJS</h3>

    <p>
      وب‌سوکت یا WebSocket یک فناوری ارتباطی در وب است که به سرور و مرورگر اجازه
      می‌دهد از طریق یک اتصال دوطرفه دائمی، داده‌ها را به صورت تعاملی ارسال و
      دریافت کنند. در واقع مرورگر می‌تواند داده‌ها را بفرستد و دریافت کند بدون
      اینکه نیازی به بارگیری دوباره صفحه وب (refresh) باشد. این ویژگی به
      برنامه‌های تعاملی مانند چت‌های زنده و بازی‌های آنلاین کمک می‌کند.
    </p>

    <p>
      در ادامه، به نحوه ایجاد برنامه WebSocket در پلتفرم NodeJS با استفاده از
      پکیج
      <span className="code">ws</span> و همچنین نحوه استقرار آن در لیارا خواهیم
      پرداخت.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#build-websocket">ساخت برنامه WebSocket در NodeJS</a>
      </li>
      <li>
        <a href="#deploy-websocket">استقرار برنامه NodeJS WebSocket در لیارا</a>
      </li>
    </ul>

    <h3 id="build-websocket">ساخت برنامه WebSocket در NodeJS</h3>
    <p>
      پروژه‌ای که قصد داریم بسازیم، یک چت‌روم تحت وب در پلتفرم NodeJS است که
      کاربران می‌توانند در آن به صورت Realtime (با تکیه بر WebSocket) به گفتگو
      بپردازند.
    </p>

    <p>
      در ابتدا، بایستی پکیج‌های مورد نیاز برنامه را با اجرای دستور زیر با
      استفاده از npm، نصب کنید:
    </p>
    <Highlight className="shell">{`npm install ws serve-handler`}</Highlight>

    <p>
      در ادامه، بایستی یک فایل به نام <span className="code">index.js</span>{" "}
      ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:
    </p>
    <Highlight className="nodejs">
      {`const { createServer } = require('http');
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
    client.send(\`Welcome, \${username}!\`);

    client.on('message', (msg) => {
        const messageToSend = \`[\${username}]: \${msg}\`;
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(messageToSend);
            }
        });
    });

    client.on('close', () => {
        console.log(\`Client \${username} disconnected\`);
    });
});

server.listen(process.argv[2] || 3000, () => {
    console.log(\`Server listening...\`);
});
`}
    </Highlight>

    <p>
      سپس، یک دایرکتوری به نام <span className="code">public</span> ایجاد کنید و
      درون آن، یک فایل به نام <span className="code">index.html</span> بسازید و
      قطعه کد زیر را، درون آن، قرار دهید:
    </p>
    <Highlight className="html">
      {`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimlist chat App</title>
</head>

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
            <p class="msg">Messages:</p>
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
                ws = new WebSocket(\`ws://\${window.document.location.host}?username=\${encodeURIComponent(username)}\`);
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
`}
    </Highlight>

    <p>
      تمامی کارها، انجام شده است و شما می‌توانید با اجرای دستور{" "}
      <span className="code">node index.js</span> برنامه را اجرا کرده و از آن
      استفاده کنید.
    </p>

    <h3 id="deploy-websocket">استقرار برنامه NodeJS WebSocket در لیارا</h3>
    <p>
      برای استقرار برنامه Websocket در لیارا، نیاز به انجام تغییر خاصی در برنامه
      نیست. فقط، بایستی به جای <span className="code">ws</span> برای برقراری
      اتصال، حتماً از <span className="code">wss</span>
      استفاده کنید تا اتصال موفق و ایمن باشد:
    </p>
    <Highlight className="html">
      {`<script type="text/javascript">
    // other codes ...
    // Connect to WebSocket server
    ws = new WebSocket(\`wss://\${window.document.location.host}?username=\${encodeURIComponent(username)}\`);
    // other codes ...
</script>`}
    </Highlight>

    <p>
      همچنین، بایستی در فایل <span className="code">package.json</span> موجود در
      مسیر اصلی پروژه، اسکریپت start را به شکل زیر، تعریف کنید:
    </p>
    <Highlight className="json">
      {`{
  "scripts": {
    "start": "node index.js"
  }
}`}
    </Highlight>

    <Notice variant="info">
      سورس کامل یک برنامه NodeJS WebSocket آماده استقرار در{" "}
      <a href="https://github.com/liara-cloud/nodejs-getting-started/tree/websocket">
        گیت‌هاب لیارا
      </a>{" "}
      موجود است که می‌توانید از آن استفاده کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/nodejs/email" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
