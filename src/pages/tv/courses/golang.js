import React, { Fragment, useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Dialog, Section } from "..";
import Link from "next/link";
import Alert from "@/components/Common/alert";
import Button from "@/components/Common/button";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const flask = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
      </Head>

      <Button className="mb-2 py-1 px-4 rounded-md">
        <Link id="init-a" href={"/tv"}>
          <span>بازگشت</span>
        </Link>
      </Button>

      <img
        style={{ borderColor: "#ffffff22", marginLeft: 20 }}
        src="/static/course/go.png"
      />
      <Section
        name={"صفر تا صد استقرار برنامه‌های Golang در لیارا"}
        style={{ marginTop: 40 }}
        badge={"Golang Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link:
              "https://files.liara.ir/liara/golang/course/e00-intro-to-project.mp4"
          },
          {
            videoTitle: "جلسه 1: اتصال به دیتابیس لیارا از Local",
            link:
              "https://files.liara.ir/liara/golang/course/e01-connect-to-db.mp4"
          },
          {
            videoTitle: "جلسه 2: اتصال برنامه به سرویس‌های Email و DNS لیارا",
            link:
              "https://files.liara.ir/liara/golang/course/e02-email-and-dns.mp4"
          },
          {
            videoTitle: "جلسه 3: اتصال برنامه به باکت در لیارا",
            link:
              "https://files.liara.ir/liara/golang/course/e03-upload-using-bucket.mp4"
          },
          {
            videoTitle: "جلسه 4: استقرار کامل برنامه در لیارا",
            link:
              "https://files.liara.ir/liara/golang/course/e04-deploy-in-liara.mp4"
          },
          {
            videoTitle: "جلسه 5: استفاده از دیسک‌ها در برنامه",
            link: "https://files.liara.ir/liara/golang/course/e05-use-disks.mp4"
          },
          {
            videoTitle: "جلسه 6: مدیریت دیسک‌ها با دسترسی FTP",
            link:
              "https://files.liara.ir/liara/golang/course/e06-manage-disks-using-ftp.mp4"
          },
          {
            videoTitle: "جلسه 7: بازیابی دیتابیس در لیارا",
            link:
              "https://files.liara.ir/liara/golang/course/e07-restore-db.mp4"
          },
          {
            videoTitle: "جلسه 8: فعال‌سازی باکت و ایمیل‌سرور",
            link:
              "https://files.liara.ir/liara/golang/course/e08-enable-bucket-and-email.mp4"
          },
          {
            videoTitle: "جلسه 9: اتصال دامنه به برنامه در لیارا",
            link:
              "https://files.liara.ir/liara/golang/course/e09-connect-domain-to-app.mp4"
          },
          {
            videoTitle: "جلسه 10: راه‌اندازی CI/CD در برنامه",
            link: "https://files.liara.ir/liara/golang/course/e10-cicd.mp4"
          }
        ]}
      />
      <br />
      <Alert variant="info">
        پروژه و کدهای مورد استفاده در دوره فوق در{" "}
        <Link href="https://github.com/liara-cloud/golang-getting-started">
          گیت‌هاب لیارا
        </Link>{" "}
        قابل مشاهده و دسترسی می‌باشد.{" "}
      </Alert>

      {openDialog.isOpen &&
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
            />
          </Dialog>
          <div
            className="bg-disable-dialog"
            onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}
          />
        </Fragment>}
    </Layout>
  );
};

export default flask;
