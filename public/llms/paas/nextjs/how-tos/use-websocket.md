Original link: https://docs.liara.ir/paas/nextjs/how-tos/use-websocket/

# راه‌اندازی برنامه Websocket

وب‌سوکت (WebSocket) یک فناوری ارتباطی در وب است که به سرور و مرورگر اجازه می‌دهد از طریق یک اتصال دوطرفه دائمی، داده‌ها را به صورت تعاملی ارسال و دریافت کنند. در واقع مرورگر می‌تواند داده‌ها را بفرستد و دریافت کند بدون اینکه نیازی به بارگیری دوباره صفحه وب (refresh) باشد. این ویژگی به برنامه‌های تعاملی مانند چت‌های زنده و بازی‌های آنلاین کمک می‌کند. در ادامه، به نحوه ایجاد برنامه WebSocket در فریم‌ورک NextJS با استفاده از پکیج `Socket.IO` و همچنین نحوه استقرار آن در لیارا، پرداخته شده است.

## ساخت برنامه WebSocket در NextJS

پروژه‌ در پیش‌رو، یک چت‌روم تحت وب در فریم‌ورک NextJS است که کاربران می‌توانند در آن به صورت Realtime (با تکیه بر WebSocket) به گفتگو بپردازند.  
در ابتدا، بایستی پکیج‌های مورد نیاز برنامه را با اجرای دستور زیر با استفاده از `npm`، نصب کنید:

```bash
npm install express socket.io socket.io-client
```

در ادامه، بایستی در مسیر اصلی پروژه، یک فایل به نام `server.js` ایجاد کنید و محتوای زیر را درون آن قرار دهید. این فایل برای مدیریت برنامه NextJS و سرور Socket.IO به کار می‌رود:

```js
const express = require('express');
const next = require('next');
const http = require('http');
const socketIo = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = socketIo(httpServer, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) => {
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  httpServer.listen(port, (err) => {
    if (err) throw err;
    console.log(`ready on port ${port}`);
  });
});
```

سپس، در مسیر اصلی پروژه، یک دایرکتوری به نام `components` ایجاد کنید و درون آن، یک فایل به نام `Chat.js` بسازید و قطعه کد زیر را، درون آن، قرار دهید:

```js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io();

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
```

پس از انجام کار فوق، کافیست تا در مسیر `pages/index.js` قطعه کد زیر را قرار دهید:

```js
import Head from 'next/head';
import Chat from '../components/Chat';

export default function Home() {
  return (
    <div>
      

      <main>
        <h1>Welcome to the Chat App</h1>
        <Chat />
      </main>
    </div>
  );
}
```

تمامی کارها انجام شده است و شما می‌توانید با اجرای دستور `node server.js` برنامه خود را اجرا کرده و از آن استفاده کنید.

## استقرار برنامه NextJS WebSocket در لیارا

از آنجایی که برنامه WebSocket فوق (یا به صورت کلی، اکثر برنامه‌های مبتنی بر Websocket) به یک سرور برای مدیریت Socket نیاز دارند؛ بنابراین برای استقرار این برنامه در لیارا، بهتر است که از [پلتفرم NodeJS](https://docs.liara.ir/nodejs/getting-started) استفاده شود.  
برای این کار کافیست تا طبق مستندات [ساخت برنامه NodeJS](https://docs.liara.ir/nodejs/how-tos/create-app) یک برنامه NodeJS ایجاد کنید و اسکریپت `start` درون فایل `package.json` خود را به شکل زیر، تغییر دهید:  

```json
{
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "node server.js",
    "lint": "next lint"
  },
        }
```

در نهایت، کافیست تا با اجرای دستور زیر، برنامه خود را در لیارا، مستقر کنید:

```html
liara deploy --port=3000 --platform=node
```

> سورس کامل یک برنامه NextJS WebSocket آماده استقرار در [اینجا](https://github.com/liara-cloud/nextjs-getting-started/tree/websocket) موجود است که می‌توانید از آن استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
