Original link: https://docs.liara.ir/one-click-apps/meilisearch/how-tos/connect/

# اتصال به MeiliSearch

پس از ساخته شدن برنامه Meilisearch یک token به نام `MEILI_MASTER_KEY` برای برنامه، ایجاد می‌شود و  
شما می‌توانید  
[طبق مستندات متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، به این متغیر دسترسی داشته باشید و حتی مقدار آن را تغییر دهید. پس از تغییر مقدار، ممکن است برنامه یک‌بار ری‌استارت شود.

با استفاده از این توکن، می‌توانید برنامه خود را به Meilisearch متصل کنید، در ادامه، قطعه کدی برای اتصال به Meilisearch در زبان برنامه‌نویسی پایتون، آورده شده است:

```py
from meilisearch.client import Client

client = Client('<your-app-url>', '<your-token>')

index = client.index('books')

documents = [
    {'id': 1, 'title': 'Harry Potter', 'author': 'J.K. Rowling'},
    {'id': 2, 'title': 'Lord of the Rings', 'author': 'J.R.R. Tolkien'},
    # Add more documents as needed
]

index.add_documents(documents)


result = index.search('Harry Potter')
for hit in result['hits']:
    print(hit)
```

در قطعه کد فوق، بایستی به جای عبارت `\<your-app-url\>`  
آدرس کامل برنامه MeiliSearch خود را وارد کنید.  
همچنین باید به جای عبارت  
`\<your-token\>` نیز،  
مقدار متغیر محیطی  
`MEILI_MASTER_KEY`  
را وارد کنید.

در نهایت کافیست با استفاده از ابزار [`Liara CLI`](https://docs.liara.ir/references/cli/about) و در جایی که فایل `liara.json` قرار دارد، دستور زیر را اجرا کنید تا برنامه‌تان در لیارا، مستقر شود:

```json
liara deploy
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
