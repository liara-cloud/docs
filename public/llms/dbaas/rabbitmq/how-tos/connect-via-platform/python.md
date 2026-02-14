Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/python/

# اتصال به دیتابیس RabbitMQ در برنامه‌های Python

برای اتصال به RabbitMQ در برنامه‌های Python، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install pika
```

در ادامه، بایستی متغیر محیطی مربوط به RabbitMQ را، به برنامه اضافه کنید؛ به عنوان مثال:

```bash
RABBITMQ_URI=amqp://root:MDNAi5e5KxMW8fMdUwLwpx5x@monte-rosa.liara.cloud:30602
```

در نهایت، می‌توانید مشابه قطعه کد زیر، به RabbitMQ متصل شده و از آن، استفاده کنید:

```python
import os
import pika

# Retrieve RabbitMQ URI from environment variables
rabbitmq_uri = os.getenv("RABBITMQ_URI")

# Create a connection to RabbitMQ
params = pika.URLParameters(rabbitmq_uri)
connection = pika.BlockingConnection(params)

# Create a channel
channel = connection.channel()

# Declare a queue (if it doesn’t exist, it will be created)
queue_name = "test_queue"
channel.queue_declare(queue=queue_name)

# Function to publish a message to the queue
def publish_message(message):
    channel.basic_publish(exchange="", routing_key=queue_name, body=message)
    print(f"Message sent: {message}")

# Example usage
publish_message("Hello, This is RabbitMQ on Liara!")

# Close the connection
connection.close()
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
