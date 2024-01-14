import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های NextJS - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="next" />
      <div className="page-title">
        <h1>پلتفرم NextJS</h1>
        <span className="page-description">(NextJS Platform)</span>
      </div>
    </div>

    <h3>اتصال به ذخیره‌سازی ابری</h3>

    <p>
      بدون شک اتصال برنامه به یک{" "}
      <Link href="/buckets/about">ذخیره‌سازی ابری</Link> مطمئن برای نگهداری و
      ارائه فایل‌های استاتیک وب‌سایت یا داده‌های آپلود شده توسط کاربران، باعث
      اطمینان خاطر صاحبان کسب و کار و بهبود عملکرد برنامه‌ می‌شود.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#install-aws-sdk">نصب AWS SDK</a>
      </li>
      <li>
        <a href="#set-keys">تنظیم کلیدها</a>
      </li>
      <li>
        <a href="#how-to-use">نحوه استفاده</a>
      </li>
    </ul>

    <h3 id="install-aws-sdk">نصب AWS SDK</h3>
    <p>
      از آنجا که ذخیره‌سازی ابری لیارا یک سرویس Object storage سازگار با پروتکل
      S3 است، شما می‌توانید با استفاده از AWS SDK‌، در زبان‌ها و فریم‌ورک‌های
      مختلفی این فضای ذخیره‌سازی را مدیریت کنید. حال برای اتصال به ذخیره‌سازی
      ابری در NextJS باید با اجرای دستور زیر، پکیج{" "}
      <a
        href="https://www.npmjs.com/package/aws-sdk"
        target="_blank"
        rel="noopener noreferrer"
      >
        aws-sdk
      </a>{" "}
      را نصب کنید.
    </p>
    <Highlight className="shell">{`npm install aws-sdk`}</Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      اگر باکت شما خصوصی باشد، برای دسترسی به باکت، نیاز به کلید دارید. برای
      ساخت کلید، به صفحه ذخیره‌سازی ابری بروید و طبق عکس‌ها کلید‌خود را بسازید.
    </p>
    <p>به قسمت کلیدها رفته:</p>
    <ZoomableImage src="/static/flask/get_key1.png" />
    <p>یک کلید جدید بسازید.</p>
    <ZoomableImage src="/static/flask/get_key2.png" />
    <p>
      کلید‌های ساخته‌شده را کپی کنید. توجه داشته‌باشید که SECRET_KEY تنها یک بار
      نمایش داده می‌شود و پس از آن باید کلید را درجایی مطمئن ذخیره کنید.
    </p>
    <ZoomableImage src="/static/flask/get_key3.png" />
    <h3 id="set-env">تنظیم متغیر های محیطی</h3>
    <p>
      در این مرحله باید کلیدها، نام باکت و endpoint لیارا را در فایل env. ذخیره
      کنید:
    </p>
    <Highlight className="plaintext">
      {`LIARA_ENDPOINT=https://<Liara Bucket Endpoint>
LIARA_BUCKET_NAME=<Bucket Name>
LIARA_ACCESS_KEY=<Access Key>
LIARA_SECRET_KEY=<Secret Key>`}
    </Highlight>

    <h3 id="how-to-use">نحوه استفاده</h3>

    <p>
      قطعه کد نمونه‌ای در ادامه برای شما تهیه شده است، که با آن،می‌توانید با
      استفاده از دسترسی S3 به باکت خود متصل شوید و آن را مدیریت کنید:
    </p>
    <Highlight className="javascript">
      {`import React, { useState, useEffect } from 'react';
import { S3 } from 'aws-sdk';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadLink, setUploadLink] = useState(null);
  const [permanentLink, setPermanentLink] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [allFiles, setAllFiles] = useState([]);
  const [buckets, setBuckets] = useState([]);
  
  const ACCESSKEY = 'your-access-key';                    // or process.env.LIARA_ACCESS_KEY;
  const SECRETKEY = 'your-secret-ky';                    //  or process.env.LIARA_SECRET_KEY;
  const ENDPOINT  = 'https://storage.iran.liara.space'; //   or process.env.LIARA_ENDPOINT;
  const BUCKET    = 'your-bucket-name';                //    or process.env.LIARA_BUCKET_NAME;
  
  const fetchBuckets = async () => {
    const s3 = new S3({
      accessKeyId: ACCESSKEY,
      secretAccessKey: SECRETKEY,
      endpoint: ENDPOINT,
    });
    try {
      const response = await s3.listBuckets().promise();
      setBuckets(response.Buckets);
    } catch (error) {
      console.error('Error fetching buckets: ', error);
    }
  };

  const fetchAllFiles = async () => {
    const s3 = new S3({
      accessKeyId: ACCESSKEY,
      secretAccessKey: SECRETKEY,
      endpoint: ENDPOINT,
    });

    try {
      const response = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
      setAllFiles(response.Contents);
    } catch (error) {
      console.error('Error fetching files: ', error);
    }
  };

  useEffect(() => {
    fetchBuckets();
    fetchAllFiles();
  }, [uploadLink]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError(null);
    setUploadLink(null);
    setPermanentLink(null);
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        setError('Please select a file');
        return;
      }

      const s3 = new S3({
        accessKeyId: ACCESSKEY,
        secretAccessKey: SECRETKEY,
        endpoint: ENDPOINT,
      });

      const params = {
        Bucket: BUCKET,
        Key: file.name,
        Body: file,
      };

      const response = await s3.upload(params).promise();
      const signedUrl = s3.getSignedUrl('getObject', {
        Bucket: BUCKET,
        Key: file.name,
        Expires: 3600,
      });

      setUploadLink(signedUrl);

      // Get permanent link
      const permanentSignedUrl = s3.getSignedUrl('getObject', {
        Bucket: BUCKET,
        Key: file.name,
        Expires: 31536000, // 1 year
      });
      setPermanentLink(permanentSignedUrl);

      // Update list of uploaded files
      setUploadedFiles((prevFiles) => [...prevFiles, response]);

      // Update list of all files
      fetchAllFiles();

      console.log('File uploaded successfully');
    } catch (error) {
      setError('Error uploading file: ' + error.message);
    }
  };

  const handleShowFiles = () => {
    console.log('List of uploaded files:', uploadedFiles);
  };

  const handleDeleteFile = async (file) => {
    try {
      const s3 = new S3({
        accessKeyId: ACCESSKEY,
        secretAccessKey: SECRETKEY,
        endpoint: ENDPOINT,
      });

      await s3.deleteObject({ Bucket: BUCKET, Key: file.Key }).promise();

      // Update the list of uploaded files
      setUploadedFiles((prevFiles) =>
        prevFiles.filter((uploadedFile) => uploadedFile.Key !== file.Key)
      );

      // Update list of all files
      fetchAllFiles();

      console.log('File deleted successfully');
    } catch (error) {
      console.error('Error deleting file: ', error);
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload File to S3</h1>
      <input type="file" onChange={handleFileChange} />
      <button className="upload-button" onClick={handleUpload} disabled={!file}>
        Upload
      </button>
      {uploadLink && (
        <h3 className="success-message">
          File uploaded successfully. Temporary Link:{' '}
          <a href={uploadLink} target="_blank" rel="noopener noreferrer">
            Temporary Link
          </a>
        </h3>
      )}
      {permanentLink && (
        <h3 className="success-message">
          Permanent Link:{' '}
          <a href={permanentLink} target="_blank" rel="noopener noreferrer">
            Permanent Link
          </a>
        </h3>
      )}
      <button className="show-files-button" onClick={handleShowFiles}>
        Show Uploaded Files
      </button>
      {uploadedFiles.length > 0 && (
        <div>
          <h2>Uploaded Files:</h2>
          <ul>
            {uploadedFiles.map((uploadedFile) => {
              const s3 = new S3({
                accessKeyId: ACCESSKEY,
                secretAccessKey: SECRETKEY,
                endpoint: ENDPOINT,
              });

              return (
                <li key={uploadedFile.Key}>
                  {uploadedFile.Key}{' '}
                  <a
                    href={s3.getSignedUrl('getObject', {
                      Bucket: BUCKET,
                      Key: uploadedFile.Key,
                      Expires: 3600,
                    })}
                    download
                  >
                    Download
                  </a>{' '}
                  <button onClick={() => handleDeleteFile(uploadedFile)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {allFiles.length > 0 && (
        <div>
          <h2>All Files:</h2>
          <ul>
            {allFiles.map((file) => {
              const s3 = new S3({
                accessKeyId: ACCESSKEY,
                secretAccessKey: SECRETKEY,
                endpoint: ENDPOINT,
              });

              return (
                <li key={file.Key}>
                  {file.Key}{' '}
                  <a
                    href={s3.getSignedUrl('getObject', {
                      Bucket: BUCKET,
                      Key: file.Key,
                      Expires: 3600,
                    })}
                    download
                  >
                    Download
                  </a>{' '}
                  <button onClick={() => handleDeleteFile(file)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      <div>
        <h2>Buckets:</h2>
        <ul>
          {buckets.map((bucket) => (
            <li key={bucket.Name}>{bucket.Name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Upload;
`}
    </Highlight>
    <p>
      با استفاده از قطعه کد فوق، شما قادر خواهید بود که فایل‌های خود را درون
      باکت آپلود کنید، دانلود کنید، با استفاده از لینک‌های موقت و یا دائمی (در
      صورتی که سطح دسترسی باکت عمومی باشد)، فایل‌های خود را به اشتراک بگذارید و
      یا آن‌ها را حذف کنید.
    </p>

    <p>
      شما می‌توانید برای کسب اطلاعات بیشتر،{" "}
      <a
        href="https://vercel.com/templates/next.js/aws-s3-image-upload-nextjs"
        rel="noopener noreferrer"
        target="_blank"
      >
        مثال‌ها و مستندات این پکیج
      </a>{" "}
      را مطالعه کنید.
    </p>

    <Link href="/app-deploy/nextjs/email" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
