import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات آبجکت‌استوریج</title>
    </Head>

    <h1>آبجکت استوریج</h1>
    <span className="pageDescription">(Object Storage)</span>

    <h3>استاندارد S3</h3>
    <p>
      از آنجایی که Object Storage لیارا با S3 سازگار است، به راحتی میتوانید با
      هر زبانی به وسیله کتابخانه‌های موجود در آن زبان برای S3 به Object Storage
      متصل شوید. برای نمونه چند کتابخانه‌ در زبان‌ها و فریم‌ورک‌های مختلف در
      پایین معرفی کرده‌ایم و همچنین نحوه‌ اتصال آن‌ها به لیارا را نیز آورده‌ایم:
    </p>
    <Notice variant="info">
      در این مثال‌ها فقط نحوه اتصال و نمایش لیست باکت‌ها قرار گرفته است. لینک
      مستندات و گیت‌هاب هر کتابخانه برای مطالعه بیشتر قرار گرفته است.
    </Notice>
    <ul dir="ltr">
      <li>
        <b>
          PHP:{" "}
          <a href="https://github.com/aws/aws-sdk-php" target="_blank">
            aws-sdk-php
          </a>
        </b>
      </li>

      <Highlight className="php">
        {`$ composer require aws/aws-sdk-php

<?php
require 'vendor/autoload.php';
use Aws\S3\S3Client;
$client = new S3Client([
    'region' => 'us-east-1',
    'version' => '2006-03-01',
    'endpoint' => "https://".API_ENDPOINT,
    'credentials' => [
        'key' => ACCESS_KEY
        'secret' => SECRET_KEY
    ],
    'use_path_style_endpoint' => true
]);
$listResponse = $client->listBuckets();
print_r($listResponse);`}
      </Highlight>
      <br />

      <li>
        <b>
          Nodejs:{" "}
          <a href="https://github.com/aws/aws-sdk-js" target="_blank">
            aws-sdk-js
          </a>
        </b>
      </li>

      <Highlight className="javascript">
        {`$ npm install aws-sdk

var AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
    endpoint: API_ENDPOINT,
    s3ForcePathStyle: true
});
 
s3.listBuckets(function(err, data) {
    if (err) console.log(err, err.stack);
    else     console.log(data);
});`}
      </Highlight>
      <br />

      <li>
        <b>
          Python:{" "}
          <a href="https://github.com/boto/boto3" target="_blank">
            boto3
          </a>
        </b>
      </li>

      <Highlight className="python">
        {`$ pip install boto3

import boto3

s3 = boto3.resource('s3', endpoint_url='https://'+API_ENDPOINT,
                  aws_access_key_id=ACCESS_KEY,
                  aws_secret_access_key=SECRET_KEY)

for bucket in s3.buckets.all():
    print(bucket.name)`}
      </Highlight>
      <br />

      <li>
        <b>
          Laravel:{" "}
          <a href="https://laravel.com/docs/master/filesystem" target="_blank">
            «File Storage» documents
          </a>
        </b>
      </li>
      <br />
      <li>
        <b>
          Django:{" "}
          <a
            href="https://django-storages.readthedocs.io/en/latest/index.html"
            target="_blank"
          >
            «django-storages» documents
          </a>
        </b>
      </li>
      <br />
      <li>
        <b>
          .Net Core:{" "}
          <a href="https://www.nuget.org/packages/AWSSDK.S3/" target="_blank">
            «AWSSDK.S3 3» library
          </a>
        </b>
      </li>
    </ul>
    <Notice variant="info">
      کتابخانه‌های معرفی شده در بالا صرفا مثال‌هایی برای S3 در هر زبان بودند که
      اکثر آن‌ها کتابخانه‌های رسمی AWS S3 میباشد. شما میتوانید از هر
      کتابخانه‌‌ای که S3 compatible باشد استفاده کنید. همچنین خود تیم MinIO نیز
      SDK هایی برای کار با S3 ارائه کرده است که میتوانید در مستندات آن‌ها و در
      بخش{" "}
      <a href="https://docs.min.io/" target="_blank">
        MinIO SDKs
      </a>{" "}
      درباره آن‌ها بیشتر بخوانید.
    </Notice>
  </Layout>
);
