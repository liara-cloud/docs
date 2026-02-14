Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/nextjs/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های NextJS

برای استفاده از Object Storage در برنامه‌های NextJS، می‌توانید از  
پکیج‌های `aws-sdk` استفاده کنید که بایستی با دستور زیر، آن‌ها را در پروژه خود، نصب کنید:

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

پس از آن، کافیست تا طبق [مستندات ایجاد کلید](https://docs.liara.ir/object-storage/how-tos/create-key)، یک کلید جدید برای باکت خود بسازید.  
اطلاعات مربوط به ENDPOINT و نام باکت نیز در صفحه **تنظیمات**، در بخش **دسترسی با SDK**،  
برای شما قرار گرفته است.  
در نهایت نیز، بایستی  
اطلاعات مربوط به Object Storage خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
LIARA_ENDPOINT=https://storage.iran.liara.space
LIARA_BUCKET_NAME=my-bucket-name
LIARA_ACCESS_KEY=nieiou08cnbod58p
LIARA_SECRET_KEY=df67ef3e-ccb6-4a25-97ba-3526f33da3fc

```

سپس، می‌توانید در مسیر اصلی پروژه (ریشه پروژه یا اگر که از  دایرکتوری `src` استفاده می‌کنید در داخل این دایرکتوری)، یک فایل جدید به نام `lib/s3.ts` بسازید و کد زیر را در آن قرار دهید:

```ts
// src/lib/s3.ts or /lib/s3.ts
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: "default",
  endpoint: process.env.LIARA_ENDPOINT,
  credentials: {
    accessKeyId: process.env.LIARA_ACCESS_KEY!,
    secretAccessKey: process.env.LIARA_SECRET_KEY!,
  },
  forcePathStyle: true,
});
```

تمامی کارها انجام شده است و اکنون، می‌توانید APIهای مربوط به S3 را در پروژه خود، استفاده کنید. برای استفاده از APIهای مختلف S3، بایستی ساختار پروژه مانند شکل زیر باشد:

```bash
app/api/storage/ 
├── upload/route.ts            
├── list-files/route.ts        
├── download/route.ts          
├── presigned/route.ts         
├── delete/route.ts            
├── list-buckets/route.ts      
```

## نمونه کد آپلود فایل

```ts
// src/app/api/storage/upload/route.ts or /app/api/storage/upload/route.ts
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: process.env.LIARA_BUCKET_NAME,
    Key: file.name,
    Body: buffer,
    ContentType: file.type,
  });

  await s3.send(command);

  return Response.json({ message: "File uploaded" });
}
```

## نمونه کد دریافت لینک موقت فایل

```ts
// src/app/api/storage/presigned/route.ts or /app/api/storage/presigned/route.ts
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "@/lib/s3";

export async function POST(req: Request) {
  const { key } = await req.json();

  const command = new GetObjectCommand({
    Bucket: process.env.LIARA_BUCKET_NAME,
    Key: key,
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

  return Response.json({ url });
}
```

## نمونه کد لیست کردن فایل‌های داخل باکت

```ts
// src/app/api/storage/list-files/route.ts or /app/api/storage/list-files/route.ts
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";

export async function GET() {
  const command = new ListObjectsV2Command({
    Bucket: process.env.LIARA_BUCKET_NAME,
  });

  const data = await s3.send(command);
  return Response.json({ files: data.Contents });
}
```

## نمونه کد لیست کردن باکت‌ها

```ts
// src/app/api/storage/list-buckets/route.ts or /app/api/storage/list-buckets/route.ts
import { ListBucketsCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";

export async function GET() {
  const command = new ListBucketsCommand({});
  const data = await s3.send(command);
  return Response.json({ buckets: data.Buckets });
}
```

## نمونه کد حذف فایل

```ts
// src/app/api/storage/delete/route.ts or /app/api/storage/delete/route.ts
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";

export async function DELETE(req: Request) {
  const { key } = await req.json();

  const command = new DeleteObjectCommand({
    Bucket: process.env.LIARA_BUCKET_NAME,
    Key: key,
  });

  await s3.send(command);

  return Response.json({ message: "File deleted" });
}
```

## ایجاد رابط کاربری برای کار با S3

روش‌های زیادی برای استفاده از S3 وجود دارد. یکی از این راه‌ها، ایجاد رابط کاربری است که می‌توان با استفاده از ابزار `shadcn` یک رابط کاربری زیبا و ساده ایجاد کرد. برای استفاده از این ابزار، در ابتدا، آن را با اجرای دستور زیر، نصب کنید:

```ts
npx shadcn@latest init
```

سپس با اجرای دستور زیر، کامپوننت‌های مورد نیاز برنامه را نصب کنید:

```ts
npx shadcn@latest add button input card
```

در نهایت، در مسیر اصلی پروژه، یک فایل جدید به نام `app/storage/page.tsx` بسازید و کد زیر را در آن قرار دهید:

- Managing Files
- Uploading file
- Download
- Delete

```ts
// src/app/storage/page.tsx or /app/storage/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export default function FileManager() {
  const [files, setFiles] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchFiles = async () => {
    const res = await fetch('/api/storage/list-files');
    const data = await res.json();
    setFiles(data.files || []);
  };

  const uploadFile = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/storage/upload', {
      method: 'POST',
      body: formData,
    });
    setLoading(false);
    if (res.ok) {
      toast.success('Upload Successful');
      fetchFiles();
    } else {
      toast.error('Error uploading file');
    }
  };

  const deleteFile = async (key: string) => {
    const res = await fetch('/api/storage/delete', {
      method: 'DELETE',
      body: JSON.stringify({ key }),
    });
    if (res.ok) {
      toast.success('File deleted successfully');
      fetchFiles();
    } else {
      toast.error('Error deleting file');
    }
  };

  const downloadFile = async (key: string) => {
    const res = await fetch('/api/storage/presigned', {
      method: 'POST',
      body: JSON.stringify({ key }),
    });
    const data = await res.json();
    window.open(data.url, '_blank');
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Managing Files</h1>

      <div className="flex gap-2 mb-4">
        <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <Button onClick={uploadFile} disabled={loading || !file}>
          {loading ? 'Uploading...' : 'Uploading file'}
        </Button>
      </div>

      <div className="grid gap-2">
        {files.map((file) => (
          <Card key={file.Key} className="flex items-center justify-between p-2">
            <CardContent className="flex-1 truncate">{file.Key}</CardContent>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => downloadFile(file.Key)}>Download</Button>
              <Button variant="destructive" onClick={() => deleteFile(file.Key)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

تمامی کارها انجام شده است و شما می‌توانید پس از اجرای پروژه، وارد صفحه `storage/` شوید و فایل‌های خود را در فضای ذخیره‌سازی ابری، مدیریت کنید.

> یک پروژه آماده استقرار در [گیت‌هاب لیارا](https://github.com/liara-cloud/nextjs-getting-started/tree/object-storage) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
