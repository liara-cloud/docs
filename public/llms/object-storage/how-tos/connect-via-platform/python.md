Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/python/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های Python

[Video link](https://media.liara.ir/python/object-storage.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/python-getting-started/tree/object-storage) قابل مشاهده و دسترسی هستند.

برای استفاده از Object Storage در برنامه‌های Python، می‌توانید از  
پکیج `boto3` استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
pip install boto3
```

پس از آن، کافیست تا طبق [https://docs.liara.ir/object-storage/how-tos/create-key](https://docs.liara.ir/object-storage/how-tos/create-key)، یک کلید جدید برای باکت خود بسازید.  
اطلاعات مربوط به ENDPOINT و نام باکت نیز در صفحه **تنظیمات**، در بخش **دسترسی با SDK**،  
برای شما قرار گرفته است.  
در نهایت نیز، بایستی  
اطلاعات مربوط به Object Storage خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
LIARA_ENDPOINT_URL=https://storage.iran.liara.space
LIARA_ACCESS_KEY=nieiou08cnbod58p
LIARA_SECRET_KEY=ed94d3c3-f076-4d91-88dd-c00ae2ac2bae
BUCKET_NAME=bucket-name
```

تمامی کارها انجام شده است و می‌توانید از Object Storage در برنامه خود، استفاده کنید؛  
در ادامه، مثال‌هایی از نحوه استفاده برای‌تان آورده شده است (با Streamlit).

## ایجاد کلاینت S3 و لیست کردن باکت‌ها

```py
# utils.py
import boto3
from botocore.exceptions import NoCredentialsError, ClientError
import os 

# Initialize S3 client
def get_s3_client():
    try:
        s3_client = boto3.client(
            "s3",
            endpoint_url=os.getenv("LIARA_ENDPOINT_URL"),
            aws_access_key_id=os.getenv("LIARA_ACCESS_KEY"),
            aws_secret_access_key=os.getenv("LIARA_SECRET_KEY")
        )
        return s3_client
    except NoCredentialsError:
        print("Credentials not available.")
        return None

# List all buckets
def list_buckets(s3_client):
    try:
        response = s3_client.list_buckets()
        return [bucket['Name'] for bucket in response.get('Buckets', [])]
    except ClientError as e:
        print(f"Error listing buckets: {e}")
        return []
```

## آپلود فایل

```py
# upload_file.py
import streamlit as st

# Upload a file to a bucket
def upload_file(s3_client, bucket_name, file, file_name):
    try:
        s3_client.upload_fileobj(file, bucket_name, file_name)
        st.success(f"File '{file_name}' uploaded successfully.")
    except Exception as e:
        st.error(f"Error uploading file: {e}")

# Upload file section
def upload_file_section(s3_client, bucket_name):
    st.header("Upload File")
    bucket_name = st.text_input("Enter Bucket Name", value=bucket_name)
    uploaded_file = st.file_uploader("Choose a file to upload")
    if uploaded_file and st.button("Upload"):
        upload_file(s3_client, bucket_name, uploaded_file, uploaded_file.name)
```

## لیست کردن فایل‌ها

```py
# list_files.py
import streamlit as st
from download_file import download_file
from presigned_url import generate_presigned_url
from delete_file import delete_file
import os
# List files in a specific bucket
def list_files(s3_client, bucket_name):
    try:
        response = s3_client.list_objects_v2(Bucket=bucket_name)
        return [obj['Key'] for obj in response.get('Contents', [])]
    except Exception as e:
        st.error(f"Error listing files: {e}")
        return []

# List files section
def list_files_section(s3_client, bucket_name):
    st.header("List Files in Bucket")
    bucket_name = st.text_input("Enter Bucket Name", value=bucket_name)

    # Use session state to persist the file list
    if "files" not in st.session_state:
        st.session_state.files = []

    if st.button("List Files"):
        st.session_state.files = list_files(s3_client, bucket_name)

    if st.session_state.files:
        st.write(f"Files in bucket '{bucket_name}':")
        for file in st.session_state.files:
            col1, col2, col3, col4, col5 = st.columns([3, 2, 2, 2, 2])  # Adjust column widths as needed
            with col1:
                st.write(file)  # Display the file name
            with col2:
                # Download Button
                download_key = f"download_{file}"
                if st.button("Download", key=download_key):
                    download_file(s3_client, bucket_name, file)
            with col3:
                # Pre-Signed URL Button
                presigned_key = f"presigned_{file}"
                if st.button("Pre-Signed URL", key=presigned_key):
                    url = generate_presigned_url(s3_client, bucket_name, file)
                    if url:
                        st.success(f"Pre-Signed URL for '{file}': {url}")
            with col4:
                # Delete Button
                delete_key = f"delete_{file}"
                if st.button("Delete", key=delete_key):
                    delete_file(s3_client, bucket_name, file)
                    st.session_state.files = list_files(s3_client, bucket_name)  # Refresh the file list
                    st.rerun()  # Rerun to reflect changes
            with col5:
                # Permanent URL (if applicable)
                permanent_url = f"{os.getenv('LIARA_ENDPOINT_URL')}/{bucket_name}/{file}"
                st.markdown(f"[Permanent URL]({permanent_url})", unsafe_allow_html=True)
    else:
        st.write(f"No files found in bucket '{bucket_name}'.")
```

## دریافت لینک موقت دانلود فایل

```py
# presigned_url.py
import streamlit as st

# Generate a pre-signed URL for a file
def generate_presigned_url(s3_client, bucket_name, file_name, expiration=3600):
    try:
        url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': bucket_name, 'Key': file_name},
            ExpiresIn=expiration
        )
        return url
    except Exception as e:
        st.error(f"Error generating pre-signed URL: {e}")
        return None
```

## دانلود فایل

```py
# download_file.py
import streamlit as st

# Download a file from a bucket
def download_file(s3_client, bucket_name, file_name):
    try:
        file_path = f"./{file_name}"
        s3_client.download_file(bucket_name, file_name, file_path)
        st.success(f"File '{file_name}' downloaded successfully.")
        return file_path
    except Exception as e:
        st.error(f"Error downloading file: {e}")
        return None
```

## حذف فایل

```py
# delete_file.py
import streamlit as st

# Delete a file from a bucket
def delete_file(s3_client, bucket_name, file_name):
    try:
        s3_client.delete_object(Bucket=bucket_name, Key=file_name)
        st.success(f"File '{file_name}' deleted successfully.")
    except Exception as e:
        st.error(f"Error deleting file: {e}")
```

## کد اصلی برای استفاده از قابلیت‌ها

```py
# main.py
import os
import streamlit as st
from utils import get_s3_client
from list_files import list_files_section
from upload_file import upload_file_section

# Load environment variables
LIARA_ENDPOINT_URL = os.getenv("LIARA_ENDPOINT_URL")
LIARA_ACCESS_KEY = os.getenv("LIARA_ACCESS_KEY")
LIARA_SECRET_KEY = os.getenv("LIARA_SECRET_KEY")
BUCKET_NAME = os.getenv("BUCKET_NAME")

# Initialize S3 client
s3_client = get_s3_client()

# Main Streamlit app
def main():
    st.set_page_config(page_title="Liara S3 File Manager", layout="wide")
    st.title("Liara S3 File Manager")

    # Sidebar navigation
    st.sidebar.title("Navigation")
    page = st.sidebar.radio("Go to", ["Home", "List Buckets", "List Files", "Upload File"])

    if page == "Home":
        st.write("Welcome to the Liara S3 File Manager!")
        st.write("Use the sidebar to navigate to different functionalities.")

    elif page == "List Buckets":
        from utils import list_buckets
        st.header("List Buckets")
        buckets = list_buckets(s3_client)
        if buckets:
            st.write("Available Buckets:")
            for bucket in buckets:
                st.write(bucket)
        else:
            st.write("No buckets found.")

    elif page == "List Files":
        list_files_section(s3_client, BUCKET_NAME)

    elif page == "Upload File":
        upload_file_section(s3_client, BUCKET_NAME)

if __name__ == "__main__":
    main()
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
