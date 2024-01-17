import React, { Fragment, useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Dialog, Section } from "..";
import Link from "next/link";
import Notice from "../../../components/Notice";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const Laravel = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
      </Head>

      <button
        style={{ background: "#cccccc11" }}
        className="mb-2 py-1 px-4 rounded-md"
      >
        <Link id="init-a" href={"/tv"}>
          <span>بازگشت</span>
        </Link>
      </button>

      <img
        style={{ borderColor: "#ffffff22", marginLeft: 20 }}
        src="/static/course/docker.png"
      />
      {/* <Section
        name={"صفر تا صد استقرار برنامه‌های Docker در لیارا"}
        style={{ marginTop: 40 }}
        badge={"Docker Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link: "https://files.liara.ir/liara/laravel/cource/e00-intro-to-project.mp4",
          },
          
        ]}
      /> */}
      <br></br>
      <Notice variant="info">به زودی ...</Notice>

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

export default Laravel;
