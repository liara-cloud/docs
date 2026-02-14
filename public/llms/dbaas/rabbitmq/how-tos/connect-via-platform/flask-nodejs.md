Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/flask-nodejs/

# اتصال به RabbitMQ در برنامه‌های Flask و NodeJS

[Video link](https://media.liara.ir/rabbitmq/enhanced_rabbitmq-connection.mp4)

در معماری‌های پیام‌محور، producer و consumer نقش‌های کلیدی برای مدیریت ارتباطات بین سرویس‌ها ایفا می‌کنند.  
Producer برنامه یا سرویسی است که پیامی را تولید و به صف پیام (queue) ارسال می‌کند. تولیدکننده اطلاعاتی را که لازم است به برنامه‌های دیگر منتقل شود، به صف وارد می‌کند تا مصرف‌کننده‌ها بتوانند آن را پردازش کنند.

Consumer برنامه یا سرویسی است که پیام‌ها را از صف دریافت و آن‌ها را پردازش می‌کند. مصرف‌کننده‌ها معمولاً به طور پیوسته در حال شنیدن (listening) صف هستند تا هر زمان که پیام جدیدی دریافت شد، آن را پردازش کنند.

قطعه کد زیر می‌تواند یک Producer در Flask به حساب بیاید:

```py
from flask import Flask, jsonify
import pika

app = Flask(__name__)

rabbitmq_url = "some uri"
parameters = pika.URLParameters(rabbitmq_url)

@app.route('/send_message', methods=['POST'])
def send_message():
    connection = pika.BlockingConnection(parameters)
    channel = connection.channel()

    channel.queue_declare(queue='test_queue')

    message = "Hello from Flask producer!"
    channel.basic_publish(exchange='', routing_key='test_queue', body=message)
    connection.close()

    return jsonify({"message": "Message sent to RabbitMQ!"})

if __name__ == "__main__":
    app.run(port=5000)
```

consumer هم می‌تواند مانند قطعه کد زیر در NodeJS باشد:

```nodejs
const amqp = require('amqplib');

const rabbitmqUrl = "some uri";

async function consume() {
  try {
    const connection = await amqp.connect(rabbitmqUrl);
    const channel = await connection.createChannel();

    await channel.assertQueue('test_queue', { durable: false });

    console.log("Waiting for messages in 'test_queue'...");

    channel.consume('test_queue', (msg) => {
      if (msg !== null) {
        console.log("Received:", msg.content.toString());
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

consume();
```

در نظر داشته باشید که در هر دو قطعه کد فوق، مقدار متغیر `rabbitmqUrl` باید یکسان  
و یک Connection URI از پیام‌رسان RabbitMQ باشد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
