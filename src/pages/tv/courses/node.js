import React, { Fragment, useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Dialog, Section } from "..";
import Link from "next/link";
import Button from "@/components/Common/button";
import Alert from "@/components/Common/alert";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const Node = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
        <meta property="og:title" content="مستندات خدمات رایانش ابری لیارا" />
        <meta property="og:description" content="دوره آموزش صفر تا صد استقرار پلتفرم NodeJS"  />
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
        src="/static/course/nodejs.png"
      />
      <Section
        name={"صفر تا صد استقرار برنامه‌های NodeJS در لیارا"}
        style={{ marginTop: 40 }}
        badge={"NodeJS Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link: "https://files.liara.ir/liara/nodejs/cource/e00-intro-to-project.mp4",
          },
          {
            videoTitle: "جلسه 1: اتصال به دیتابیس لیارا از Local",
            link: "https://files.liara.ir/liara/nodejs/cource/e01-connect-to-database.mp4",
          },
          {
            videoTitle: "جلسه 2: اتصال به DNS و Email Server",
            link: "https://files.liara.ir/liara/nodejs/cource/e02-using-dns-and-email-server.mp4",
          },
          {
            videoTitle: "جلسه 3: استقرار پروژه در لیارا",
            link: "https://files.liara.ir/liara/nodejs/cource/e03-deployment-in-liara.mp4",
          },
          {
            videoTitle: "جلسه 4: استفاده از Diskها در پروژه ",
            link: "https://files.liara.ir/liara/nodejs/cource/e04-using-disks.mp4",
          },
          {
            videoTitle: "جلسه 5: استفاده از باکت لیارا به جای دیسک‌ها",
            link: "https://files.liara.ir/liara/nodejs/cource/e05-using-buckets.mp4",
          },
          {
            videoTitle: "جلسه 6: اتصال دامنه به برنامه در لیارا",
            link: "https://files.liara.ir/liara/nodejs/cource/e06-domain.mp4",
          },
          {
            videoTitle: "جلسه 7: راه‌اندازی CI/CD در برنامه",
            link: "https://files.liara.ir/liara/nodejs/cource/e07-cicd-feature.mp4",
          },
        ]}
      />
      <br></br>
      <Alert variant="info">
        پروژه و کدهای مورد استفاده در دوره فوق در{" "}
        <Link href="https://github.com/liara-cloud/nodejs-getting-started/tree/blog">
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

export default Node;