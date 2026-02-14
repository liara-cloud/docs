Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/flask/

# اتصال به ایمیل‌سرور در برنامه‌های Flask

[Video link](https://media.liara.ir/flask/flask-email-server.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/flask-getting-started/tree/email-server) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های Flask، می‌توانید از  
پکیج Flask-Mail استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
pip install Flask-Mail
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=465
MAIL_USER=hopeful_zhukovsky_9daqpv
MAIL_PASSWORD=fbef30d7-f852-428e-9573-bc73381c7d4d
MAIL_FROM_ADDRESS=info@example.com
```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا،  
اقدام به ارسال ایمیل‌های تراکنشی کنید:  

```python
from flask import Flask, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)

# Email configuration from environment variables
MAIL_HOST = os.getenv("MAIL_HOST", "smtp.c1.liara.email")
MAIL_PORT = int(os.getenv("MAIL_PORT", 465))
MAIL_USER = os.getenv("MAIL_USER")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_FROM_ADDRESS = os.getenv("MAIL_FROM_ADDRESS")
MAIL_FROM_NAME = os.getenv("MAIL_FROM_NAME")

@app.route("/", methods=["GET"])
def send_test_email():
    try:
        # Create email message
        msg = MIMEMultipart()
        msg["From"] = f"{MAIL_FROM_NAME} <{MAIL_FROM_ADDRESS}>"
        msg["To"] = "test@example.com"
        msg["Subject"] = "Test Email"
        msg["X-Liara-Tag"] = "test-tag"
        
        # Email body
        body = "This is a test email sent with Flask and forced SSL (TLS)."
        msg.attach(MIMEText(body, "plain"))
        
        # Connect to SMTP server using SSL
        with smtplib.SMTP_SSL(MAIL_HOST, MAIL_PORT) as server:
            server.login(MAIL_USER, MAIL_PASSWORD)
            server.sendmail(MAIL_FROM_ADDRESS, [MAIL_FROM_ADDRESS], msg.as_string())
        
        return jsonify({"message": "Test email sent successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
```

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های Flask، می‌توانید از  
پکیج Flask-Mail استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
pip install Flask-Mail
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USER=hopeful_zhukovsky_9daqpv
MAIL_PASSWORD=fbef30d7-f852-428e-9573-bc73381c7d4d
MAIL_FROM_ADDRESS=info@example.com
```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا،  
اقدام به ارسال ایمیل‌های تراکنشی کنید:  

```python
from flask import Flask, request
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = os.getenv('MAIL_HOST')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = True  # Use STARTTLS for encryption
app.config['MAIL_USE_SSL'] = False  # Don't use SSL, because we are using STARTTLS
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_FROM_ADDRESS')

# Initialize Flask-Mail
mail = Mail(app)

@app.route('/send-test-email', methods=['GET'])
def send_test_email():
    try:
        # Create a message
        msg = Message(subject='Test Email from Flask',
                      recipients=['recipient@example.com'],  # Replace with the recipient's email address
                      body='This is a test email sent from Flask using SMTP on Liara.',
                      extra_headers = {"x-liara-tag": "test_tag"}) # Use liara tag feature

        # Send the email
        mail.send(msg)
        return 'Test email sent successfully!', 200

    except Exception as e:
        return f'Failed to send email. Error: {str(e)}', 500

if __name__ == '__main__':
    app.run(debug=True)
```

{/* > برای ارسال امن‌تر ایمیل‌ها، می‌توانید مقدار Port را بر روی 465 قرار دهید تا
> به جای STARTTLS، از TLS استفاده شود. */}

## HTTP

برای ارسال ایمیل با استفاده از پروتکل HTTP، به [API لیارا](https://docs.liara.ir/references/api/about/) و [آیدی ایمیل‌سرور](https://docs.liara.ir/email-server/details/mail-id)  
و [نشانی ایمیل‌سرور](https://docs.liara.ir/email-server/how-tos/add-account) نیاز خواهید داشت.  
برای این‌کار، اطلاعات مربوطه را مشابه زیر به متغیرهای محیطی برنامه خود، اضافه کنید:

```bash
MAIL_SERVER_ID=***
MAIL_SERVICE_URL=https://mail-service.iran.liara.ir/api/v1/mails
LIARA_API_TOKEN=***
MAIL_FROM_EMAIL=info@example.com
```

> مقدار فیلد `MAIL_FROM_EMAIL` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از پروتکل HTTP، اقدام به ارسال ایمیل‌های تراکنشی کنید:

```bash
from flask import Flask, jsonify, request
import requests # pip install requests
import os

# pip install python-dotenv uncomment these two lines if using .env

# # Load environment variables from .env file
# from dotenv import load_dotenv 
# load_dotenv()

app = Flask(__name__)

MAIL_SERVER_ID = os.getenv("MAIL_SERVER_ID")
MAIL_SERVICE_URL = os.getenv("MAIL_SERVICE_URL")
LIARA_API_TOKEN = os.getenv("LIARA_API_TOKEN")
MAIL_FROM = os.getenv("MAIL_FROM")

def send_email(to, subject, text):
    url = f"{MAIL_SERVICE_URL}/{MAIL_SERVER_ID}/messages"

    headers = {
        "Authorization": f"Bearer {LIARA_API_TOKEN}",
        "Content-Type": "application/json",
        "x-liara-tag": "flask_email"  # Custom tag for tracking
    }

    data = {
        "text": text,
        "subject": subject,
        "to": to,
        "from": MAIL_FROM,
        "attachments": []
    }

    try:
        response = requests.post(url, json=data, headers=headers)
        response.raise_for_status()  # Raises an error for HTTP errors
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

@app.route('/send-email', methods=['POST'])
def send_email_api():
    data = request.get_json()
    to = data.get("to", "receiver@example.com")
    subject = data.get("subject", "Test Email from Flask")
    text = data.get("text", "This is a test email from Flask using Liara Mail Service.")

    response = send_email(to, subject, text)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
```

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
