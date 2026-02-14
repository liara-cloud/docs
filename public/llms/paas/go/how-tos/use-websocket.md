Original link: https://docs.liara.ir/paas/go/how-tos/use-websocket/

# راه‌اندازی برنامه Websocket

وب‌سوکت (WebSocket) یک فناوری ارتباطی در وب است که به سرور و مرورگر اجازه می‌دهد از طریق یک اتصال دوطرفه دائمی، داده‌ها را به صورت تعاملی ارسال و دریافت کنند. در واقع مرورگر می‌تواند داده‌ها را بفرستد و دریافت کند بدون اینکه نیازی به بارگیری دوباره صفحه وب (refresh) باشد. این ویژگی به برنامه‌های تعاملی مانند چت‌های زنده و بازی‌های آنلاین کمک می‌کند.
در ادامه، به نحوه ایجاد برنامه WebSocket در  go با استفاده از ماژول `websocket` و همچنین نحوه استقرار آن در لیارا، پرداخته شده است.

## ساخت برنامه WebSocket در Go
پروژه‌ در پیش‌رو، یک چت‌روم تحت وب در  go است که کاربران می‌توانند در آن به صورت Realtime (با تکیه بر WebSocket) به گفتگو بپردازند.
در ابتدا، بایستی با اجرای دستور زیر، یک پروژه جدید go را، ایجاد کنید:

```bash
go mod init realtime-chat
```

‌پس از اجرای دستور فوق، کافیست تا دستور زیر را اجرا کنید تا ماژول‌ `websocket` برای‌تان نصب شود:

```bash
go get -u github.com/gorilla/websocket
```

حال، بایستی یک فایل به نام `main.go` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```go
package main

import (
	"log"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
)

// WebSocket upgrader
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// Client structure
type Client struct {
	ID       string
	Username string
	Conn     *websocket.Conn
}

// Message structure
type Message struct {
	SenderID string `json:"senderID"`
	Username string `json:"username"`
	Text     string `json:"text"`
}

var (
	clients   = make(map[string]*Client)
	clientsMu sync.Mutex
	broadcast = make(chan Message)
)

// Handle WebSocket connections
func handleConnections(w http.ResponseWriter, r *http.Request) {
	// Upgrade the HTTP connection to WebSocket
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("Error upgrading connection: %v", err)
		return
	}
	defer conn.Close()

	// Receive the username as the first message
	var initMessage Message
	err = conn.ReadJSON(&initMessage)
	if err != nil {
		log.Printf("Error reading initial message: %v", err)
		return
	}

	client := &Client{
		ID:       conn.RemoteAddr().String(),
		Username: initMessage.Username,
		Conn:     conn,
	}

	// Add the client to the list
	clientsMu.Lock()
	clients[client.ID] = client
	clientsMu.Unlock()

	log.Printf("New client connected: %s (%s)", client.ID, client.Username)

	// Listen for messages from the client
	for {
		var msg Message
		err := conn.ReadJSON(&msg)
		if err != nil {
			log.Printf("Error reading JSON: %v", err)
			break
		}
		msg.SenderID = client.ID
		msg.Username = client.Username
		broadcast <- msg
	}

	// Remove the client from the list when disconnected
	clientsMu.Lock()
	delete(clients, client.ID)
	clientsMu.Unlock()
	log.Printf("Client disconnected: %s (%s)", client.ID, client.Username)
}

// Broadcast messages to all clients
func handleMessages() {
	for {
		msg := <-broadcast
		clientsMu.Lock()
		for _, client := range clients {
			err := client.Conn.WriteJSON(msg)
			if err != nil {
				log.Printf("Error sending message: %v", err)
				client.Conn.Close()
				delete(clients, client.ID)
			}
		}
		clientsMu.Unlock()
	}
}

func main() {
	// Serve static files (like index.html)
	http.Handle("/", http.FileServer(http.Dir("./static")))

	// WebSocket handler
	http.HandleFunc("/ws", handleConnections)

	// Start the server
	log.Println("Server started on :8080")
	go handleMessages()
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
```

در ادامه، کافیست تا در مسیر اصلی پروژه، یک دایرکتوری به اسم `static` ایجاد کرده و درون این دایرکتوری، یک فایل به نام `index.html` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```html
<!DOCTYPE html>
<html lang="en">

<body>
    <!-- Login Section -->
    <div id="login-container">
        ## Welcome to Chat
        <input type="text" id="username" placeholder="Enter your username" />
        <button onclick="joinChat()">Join Chat</button>
    </div>

    <!-- Chat Section -->
    <div id="chat-container">
        <div id="messages"></div>
        <div id="message-input">
            <input type="text" id="message" placeholder="Type a message..." />
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>

    <script>
        let socket;
        let username;

        // Join Chat
        function joinChat() {
            username = document.getElementById("username").value.trim();
            if (!username) {
                alert("Please enter a username!");
                return;
            }

            // Connect to WebSocket
            socket = new WebSocket("ws://localhost:8080/ws");

            // Send initial message with username
            socket.onopen = () => {
                socket.send(JSON.stringify({ username }));
                document.getElementById("login-container").style.display = "none";
                document.getElementById("chat-container").style.display = "flex";
            };

            // Handle incoming messages
            socket.onmessage = (event) => {
                const msg = JSON.parse(event.data);
                const msgDiv = document.createElement("div");
                msgDiv.classList.add("message", msg.senderID === username ? "sent" : "received");

                // Create the username section
                const usernameDiv = document.createElement("div");
                usernameDiv.classList.add("username");
                usernameDiv.textContent = msg.username;

                // Create the message text section
                const textDiv = document.createElement("div");
                textDiv.textContent = msg.text;

                msgDiv.appendChild(usernameDiv);
                msgDiv.appendChild(textDiv);
                document.getElementById("messages").appendChild(msgDiv);
                document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
            };
        }

        // Send Message
        function sendMessage() {
            const input = document.getElementById("message");
            if (input.value.trim()) {
                socket.send(JSON.stringify({ text: input.value }));
                input.value = "";
            }
        }
    </script>
</body>
</html>
```

تمامی کارها انجام شده است و اکنون می‌توانید با اجرای دستور زیر، برنامه‌تان را اجرا کرده و از آن استفاده کنید:

```go
go run main.go
```

## استقرار برنامه Go WebSocket در لیارا

برای استقرار برنامه‌های وب‌سوکت Go در لیارا، نیازی به انجام تغییر خاصی نیست. صرفاً باید به جای استفاده از آدرس `ws`، عبارت `wss` را به کار ببرید تا اتصال، ایمن و سازگار باشد.

> سورس کامل یک برنامه Go WebSocket آماده استقرار در [اینجا](https://github.com/liara-cloud/go-getting-started/tree/webSocket) موجود است که می‌توانید از آن استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
