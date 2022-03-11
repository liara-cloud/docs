import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";

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

  const hendlePlay = () => {
    setInterval(() => {
      setCurrentTime(Math.round(firstVideo.current.currentTime), 1000);
    });
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

      <div
        style={{
          marginTop: 30,
          position: "relative",
          height: 600,
        }}
      >
        <video
          width="320"
          height="240"
          controls
          autoPlay
          onPlay={hendlePlay}
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
          controls
          className={`video-deploy ${secondVideo && `show`}`}
        >
          <source
            src="https://61a28e8d420e450011a3a256.iran.liara.space/liara/Screen%20Recording%202022-03-11%20at%2010.31.41%20AM.mov?Content-Disposition=attachment%3B%20filename%3D%22Screen%20Recording%202022-03-11%20at%2010.31.41%20AM.mov%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YU43TVFM5CE9DTWWMDENH%2F20220311%2F%2Fs3%2Faws4_request&X-Amz-Date=20220311T071852Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=cb4df9c4d50beeb9e2f9bb1a70a0927940f66b895ba4358942708ec733cd4943"
            type="video/mp4"
          />
          laira desktop
        </video>
      </div>
    </Layout>
  );
}
