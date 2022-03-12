import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";

export default function Desktop() {
  const [secondVideo, setSecondVideo] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const firstVideo = useRef();

  useEffect(() => {
    const duration = Math.round(firstVideo.current.duration);
    if (currentTime === duration) {
      setSecondVideo(true);
    }
  }, [currentTime]);

  const handleEndVideo = () => {
    setCurrentTime(Math.round(firstVideo.current.currentTime));
  };

  return (
    <Layout>
      <Head>
        <title>اپلیکیشن لیارا دسکتاپ - سرویس ابری لیارا</title>
      </Head>
      <div className="page-head">
        <div className="page-title">
          <h1>لیارا Desktop</h1>
          <span className="page-description">(لیارا Desktop)</span>
        </div>
      </div>

      <div className="video-desktop-container">
        <video
          width="320"
          height="240"
          onEnded={handleEndVideo}
          autoPlay
          muted
          ref={firstVideo}
          className={`first-video ${secondVideo && `blur`}`}
        >
          <source
            src="https://61a28e8d420e450011a3a256.iran.liara.space/liara/Screen%20Recording%202022-03-11%20at%2010.31.52%20AM.mov?Content-Disposition=attachment%3B%20filename%3D%22Screen%20Recording%202022-03-11%20at%2010.31.52%20AM.mov%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YU43TVFM5CE9DTWWMDENH%2F20220311%2F%2Fs3%2Faws4_request&X-Amz-Date=20220311T071339Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=7254ec17d2967c9094ae8ba3d49ff4775d007dc0d9f64ffe37a2dbea50e7c174"
            type="video/mp4"
          />
          laira desktop
        </video>

        <video
          width="320"
          height="240"
          autoPlay
          muted
          loop
          className={`video-deploy ${secondVideo && `show`}`}
        >
          <source
            src="https://61a28e8d420e450011a3a256.iran.liara.space/liara/Screen%20Recording%202022-03-11%20at%2010.31.41%20AM.mov?Content-Disposition=attachment%3B%20filename%3D%22Screen%20Recording%202022-03-11%20at%2010.31.41%20AM.mov%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YU43TVFM5CE9DTWWMDENH%2F20220311%2F%2Fs3%2Faws4_request&X-Amz-Date=20220311T071852Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=cb4df9c4d50beeb9e2f9bb1a70a0927940f66b895ba4358942708ec733cd4943"
            type="video/mp4"
          />
          laira desktop
        </video>
      </div>
      <section>
        <h1>نصب برنامه</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
          شصت و سه.
        </p>
        <p>
          از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد.{" "}
        </p>
      </section>
      <section className="download">
        <Notice variant="info">
          <h3>لینک های دانلود</h3>
          <span className="alert-text">
            (نسخه مک و لینوکس لیارا دسکتاپ بزودی منتشر میشود)
          </span>
          <br />
          <button className="windows">
            <a href="#link-download">
              <img src="./static/windows.svg" width="20" />
              دانلود برای ویندوز
            </a>
          </button>
        </Notice>
      </section>
    </Layout>
  );
}
