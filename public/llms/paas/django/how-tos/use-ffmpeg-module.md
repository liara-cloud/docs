Original link: https://docs.liara.ir/paas/django/how-tos/use-ffmpeg-module/

# استفاده از ماژول FFMPEG در Django

[FFMPEG](https://ffmpeg.org/) یک نرم‌افزار متن‌باز برای پردازش چندرسانه‌ای است که قابلیت ضبط، تبدیل، پخش ویدیوی زنده و پخش استریمی (streaming) را دارد. این ابزار بسیار قدرتمند است و برای انواع مختلفی از فرمت‌های صوتی و تصویری، قابلیت‌ها و توابع متنوعی ارائه می‌دهد. 

ماژول FFMPEG به‌صورت پیش‌فرض در برنامه‌های Django نصب است و همچنین متغیرهای محیطی `FFMPEG_PATH` و `FFPROBE_PATH` در این پلتفرم تنظیم شده‌اند.  
برای استفاده از FFmpeg در برنامه‌های Django، می‌توانید از کتابخانه‌های پایتون برای تعامل با FFmpeg استفاده کنید. یکی از محبوب‌ترین کتابخانه‌ها برای این کار، `ffmpeg-python` است که می‌توانید با اجرای دستور زیر، آن را نصب کنید:

```bash
pip install ffmpeg-python
```

تمامی کارها انجام شده است و شما می‌توانید از FFMPEG استفاده کنید؛ به عنوان مثال:

```bash
import ffmpeg

def convert_video(input_file_path, output_file_path, codec='libx264'):
    try:
        (
            ffmpeg
            .input(input_file_path)
            .output(output_file_path, vcodec=codec)
            .run(overwrite_output=True)
        )
    except ffmpeg.Error as e:
        print(f"Error: {e.stderr.decode()}")
        raise

```

یا حتی می‌توانید در viewهای Django، از این پکیج استفاده کنید؛ به عنوان مثال:

```python
from django.http import HttpResponse
from .ffmpeg_utils import convert_video

def process_video(request):
    input_file = '/path/to/input/video.mp4'
    output_file = '/path/to/output/video.mp4'
    
    try:
        convert_video(input_file, output_file)
        return HttpResponse("Video processed successfully.")
    except Exception as e:
        return HttpResponse(f"Error processing video: {e}", status=500)

```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
