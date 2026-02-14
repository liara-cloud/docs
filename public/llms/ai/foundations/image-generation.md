Original link: https://docs.liara.ir/ai/foundations/image-generation/

# نحوه تولید تصویر با هوش مصنوعی

طبق [مستندات موجود در Cloudflare](https://www.cloudflare.com/learning/ai/ai-image-generation/)،
هوش مصنوعی تولید تصویر یا AI image generation نوعی از [هوش مصنوعی مولد](https://docs.liara.ir/ai/foundations/overview/#generative-artificial-intelligence) است که برای خلق محتوای دیداری به کار می‌رود. 

این فناوری با استفاده از تحلیل‌های ریاضی، الگوهای موجود در تصاویر و نگاره‌ها را شناسایی و تکرار می‌کند. به بیان ساده‌تر، هوش مصنوعی تولید تصویر، تصاویر را بر اساس مجموعه‌ای از نمونه‌ها ایجاد می‌کند.

## هوش مصنوعی تولید تصویر چیست؟

خلق تصاویر کاملاً جدید با استفاده از مدل‌های هوش مصنوعی بر اساس توصیفات متنی یا پارامترهای از پیش تعیین‌شده.

## هوش مصنوعی ویرایش تصویر چیست؟

تغییر یا بهبود تصاویر موجود با کمک الگوریتم‌های هوش مصنوعی، مانند اصلاح رنگ، حذف عناصر ناخواسته یا بهبود جزئیات.

## تفاوت هوش مصنوعی تولید تصویر با ویرایش تصویر چیست؟

تولید تصویر خلق چیزی کاملاً جدید است، در حالی که ویرایش تصویر اصلاح و تغییر تصویر موجود است.

## تولید تصویر در زبان‌ها و فریم‌ورک‌های مختلف

### JavaScript

```js
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  baseURL: "<LIARA_BASE_URL>",
  apiKey: "<LIARA_API_KEY>"
});

const prompt = `Tom Cat hugging Spike Bulldog`;

const result = await openai.images.generate({
    model: "openai/gpt-image-1", // choose your model here
    prompt,
});

const image_base64 = result.data[0].b64_json;
const image_bytes = Buffer.from(image_base64, "base64");
fs.writeFileSync("output.png", image_bytes);
```

### Python

```py
from openai import OpenAI
import base64

client = OpenAI(
    base_url="<LIARA_BASE_URL>",
    api_key="<LIARA_API_KEY>"
)

prompt = "Tom Cat hugging Spike Bulldog"

result = client.images.generate(
    model="openai/gpt-image-1",
    prompt=prompt
)

image_base64 = result.data[0].b64_json
image_bytes = base64.b64decode(image_base64)

with open("output.png", "wb") as f:
    f.write(image_bytes)
```

### cURL

```bash
curl <LIARA_BASE_URL>/images/generations \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <LIARA_API_KEY>" \\
  -d '{
  "model": "openai/gpt-image-1-mini",
  "prompt": "A cute baby sea otter",
  "n": 1,
  "size": "1024x1024",
  "quality": "high"
}'
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
