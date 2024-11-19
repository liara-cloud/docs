import React, { Fragment, useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Dialog, Section } from "..";
import Link from "next/link";
import Button from "@/components/Common/button";
import Alert from "@/components/Common/alert";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const flask = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
        <meta property="og:title" content="مستندات خدمات رایانش ابری لیارا" />
        <meta property="og:description" content="دوره آموزش صفر تا صد استقرار پلتفرم Flask"  />
        <meta property="og:image" content="https://files.liara.ir/liara/logos/liara-poster.jpg" />
      </Head>

      <Button
        className="mb-2 py-1 px-4 rounded-md"
      >
        <Link id="init-a" href={"/tv"}>
          <span>بازگشت</span>
        </Link>
      </Button>

      <img
        style={{ borderColor: "#ffffff22", marginLeft: 20 }}
        src="/static/course/flask.png"
      />
      <Section
        name={"صفر تا صد استقرار برنامه‌های Flask در لیارا"}
        style={{ marginTop: 40 }}
        badge={"flask Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link: "https://files.liara.ir/liara/flask/course/e00-intro-to-project.mp4",
          },
          {
            videoTitle: "جلسه 1: اتصال به دیتابیس لیارا از local",
            link: "https://files.liara.ir/liara/flask/course/e01-connect-db-locally.mp4",
          },
          {
            videoTitle: "جلسه 2: اتصال به سرویس DNS و ایمیل سرور",
            link: "https://files.liara.ir/liara/flask/course/e02-email-and-dns.mp4",
          },
          {
            videoTitle: "جلسه 3: بازیابی دیتابیس از فایل پشتیبان",
            link: "https://files.liara.ir/liara/flask/course/e03-restore-db.mp4",
          },
          {
            videoTitle: "جلسه 4: اتصال به فضای ذخیره‌سازی ابری لیار",
            link: "https://files.liara.ir/liara/flask/course/e04-use-bucket.mp4",
          },
          {
            videoTitle: "جلسه 5: استقرار کامل برنامه در لیارا",
            link: "https://files.liara.ir/liara/flask/course/e05-deployment-in-liara.mp4",
          },
          {
            videoTitle: "جلسه 6: مدیریت دیسک‌ها با استفاده از FTP Access",
            link: "https://files.liara.ir/liara/flask/course/e07-ftp-access-to-disks.mp4",
          },
          {
            videoTitle: "جلسه 7: اتصال دامنه خریداری شده به برنامه",
            link: "https://files.liara.ir/liara/flask/course/e08-connect-domain-to-app.mp4",
          },
          {
            videoTitle: "جلسه 8: راه‌اندازی CI/CD در برنامه",
            link: "https://files.liara.ir/liara/flask/course/e09-cicd-feature.mp4",
          },
        ]}
      />

      <br></br>
      <Alert variant="info">
        پروژه و کدهای مورد استفاده در دوره فوق در{" "}
        <Link href="https://github.com/liara-cloud/flask-getting-started/tree/blog">
          گیت‌هاب لیارا
        </Link>{" "}
        قابل مشاهده و دسترسی می‌باشد.{" "}
      </Alert>

      {openDialog.isOpen && (
        <Fragment>
          <Dialog>
            <div>
              <button onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}>
                <img src={"/static/close.svg"} />
                بستن
              </button>
            </div>
            <video
              autoPlay
              src={openDialog.src}
              controls="controls"
              className="block w-full"
              width="100%"
            ></video>
          </Dialog>
          <div
            className="bg-disable-dialog"
            onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}
          ></div>
        </Fragment>
      )}
    </Layout>
  );
};

export default flask;