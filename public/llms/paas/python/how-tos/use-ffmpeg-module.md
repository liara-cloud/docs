Original link: https://docs.liara.ir/paas/python/how-tos/use-ffmpeg-module/

# استفاده از ماژول FFMPEG در Python

[FFMPEG](https://ffmpeg.org/) یک نرم‌افزار متن‌باز برای پردازش چندرسانه‌ای است که قابلیت ضبط، تبدیل، پخش ویدیوی زنده و پخش استریمی (streaming) را دارد. این ابزار بسیار قدرتمند است و برای انواع مختلفی از فرمت‌های صوتی و تصویری، قابلیت‌ها و توابع متنوعی ارائه می‌دهد. 

ماژول FFMPEG به‌صورت پیش‌فرض در برنامه‌های Python نصب است و همچنین متغیرهای محیطی `FFMPEG_PATH` و `FFPROBE_PATH` در این پلتفرم تنظیم شده‌اند.
برای استفاده از FFmpeg در برنامه‌های Python، می‌توانید از کتابخانه‌های پایتون برای تعامل با FFmpeg استفاده کنید. یکی از محبوب‌ترین کتابخانه‌ها برای این کار، `ffmpeg-python` است که می‌توانید با اجرای دستور زیر، آن را نصب کنید:

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

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
