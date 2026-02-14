Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/python/

# اتصال به ایمیل‌سرور در برنامه‌های Python

[Video link](https://media.liara.ir/python/python-email.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [https://github.com/liara-cloud/python-getting-started/tree/emailServer](https://github.com/liara-cloud/python-getting-started/tree/emailServer) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های Python،  
کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
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
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from ssl import create_default_context

# Environment variables
MAIL_HOST = os.getenv("MAIL_HOST", "smtp.c1.liara.email")
MAIL_PORT = int(os.getenv("MAIL_PORT", 465))
MAIL_USER = os.getenv("MAIL_USER")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_FROM_ADDRESS = os.getenv("MAIL_FROM_ADDRESS")
MAIL_FROM_NAME = os.getenv("MAIL_FROM_NAME")

def send_email(to_address, subject, body):
    try:
        # Enforce TLS
        context = create_default_context()

        # Connect to the server
        with smtplib.SMTP_SSL(MAIL_HOST, MAIL_PORT, context=context) as server:
            server.login(MAIL_USER, MAIL_PASSWORD)

            # Prepare the email
            msg = MIMEMultipart()
            msg['From'] = f"{MAIL_FROM_NAME} <{MAIL_FROM_ADDRESS}>"
            msg['To'] = to_address
            msg['Subject'] = subject
            msg.add_header('x-liara-tag', 'test-tag')  # Add custom header
            msg.attach(MIMEText(body, 'plain'))

            # Send the email
            server.sendmail(MAIL_FROM_ADDRESS, to_address, msg.as_string())
            print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email: {e}")

# Example usage
if __name__ == "__main__":
    recipient = "recipient@example.com"
    subject = "Test Email"
    body = "This is a test email sent from my Python app using TLS."
    send_email(recipient, subject, body)
```

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های Python،  
کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
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
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Read email configuration from environment variables
MAIL_HOST = os.getenv('MAIL_HOST')
MAIL_PORT = int(os.getenv('MAIL_PORT', 587))
MAIL_USER = os.getenv('MAIL_USER')
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
MAIL_FROM_ADDRESS = os.getenv('MAIL_FROM_ADDRESS')

def send_email(to_address, subject, body):
    # Create the email message
    msg = MIMEMultipart()
    msg['From'] = MAIL_FROM_ADDRESS
    msg['To'] = to_address
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Connect to the SMTP server
        server = smtplib.SMTP(MAIL_HOST, MAIL_PORT)
        server.starttls()  # Secure the connection with STARTTLS
        server.login(MAIL_USER, MAIL_PASSWORD)  # Login to the SMTP server
        server.send_message(msg)  # Send the email
        print("Email sent successfully")
    except Exception as e:
        print("Failed to send email:", e)
    finally:
        server.quit()  # Close the connection to the server

# Send an email to the specified recipient
to_address = 'recipient@example.com'
subject = 'Test Email'
body = 'This is a test email sent from Python using environment variables.'

send_email(to_address, subject, body)
```

## HTTP

برای ارسال ایمیل با استفاده از پروتکل HTTP، به [API لیارا](https://docs.liara.ir/references/api/about/) و [آیدی ایمیل‌سرور](https://docs.liara.ir/email-server/details/mail-id)  
و [نشانی ایمیل‌سرور](https://docs.liara.ir/email-server/how-tos/add-account) نیاز خواهید داشت.  
برای این‌کار، اطلاعات مربوطه را مشابه زیر به متغیرهای محیطی برنامه خود، اضافه کنید:

```bash
MAIL_SERVER_ID=***
MAIL_SERVICE_URL=https://mail-service.iran.liara.ir/api/v1/mails
LIARA_API_TOKEN=***
```

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از پروتکل HTTP، اقدام به ارسال ایمیل‌های تراکنشی کنید:

```bash
import requests # Install using \`pip install requests\`
import os

# from dotenv import load_dotenv # Uncomment if you use .env file
# load_dotenv()

MAIL_SERVER_ID = os.getenv("MAIL_SERVER_ID")
MAIL_SERVICE_URL = os.getenv("MAIL_SERVICE_URL")
LIARA_API_TOKEN = os.getenv("LIARA_API_TOKEN")

def send_email(to, subject, text):
    url = f"{MAIL_SERVICE_URL}/{MAIL_SERVER_ID}/messages"
    
    headers = {
        "Authorization": f"Bearer {LIARA_API_TOKEN}",
        "Content-Type": "application/json",
        "x-liara-tag": "test_email"  # Custom tag
    }
    
    data = {
        "text": text,
        "subject": subject,
        "to": to,
        "from": "sender@example.com",  # Change to your sender email
        "attachments": []
    }
    
    try:
        response = requests.post(url, json=data, headers=headers)
        response.raise_for_status()  # Raises an error for HTTP errors
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

# Example Usage
if __name__ == "__main__":
    result = send_email("receiver@example.com", "Test Email", "This is a test email from Python!")
    print(result)
```

> مقدار فیلد `from` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
