Original link: https://docs.liara.ir/paas/nodejs/fix-common-errors/cors-error/expressjs/

# رفع خطای CORS در فریم‌ورک Express JS

برای رفع این خطا در فریم‌ورک Express JS، در ابتدا باید ماژول `cors` را با اجرای دستور زیر، نصب کنید:

```bash
npm install cors
```

در نهایت، می‌توانید در برنامه خود، مانند قطعه کد زیر، عمل کنید:

```js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
