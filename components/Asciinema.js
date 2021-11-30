import React, { useEffect, useRef, useState } from "react";

export default function Asciinema({ id }) {
  const [poster, setPoster] = useState(true);
  const handlePoster = () => {
    setPoster(false);
  };

  const display = poster ? "block" : "none";
  return (
    <div>
      <div className="asciinema_box">
        <img
          onClick={handlePoster}
          style={{ display: display }}
          className="asciinema_poster"
          src={`https://asciinema.org/a/${id}.svg`}
        />
      </div>
      <iframe
        className="asciinema_video"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        src={`https://asciinema.org/a/${id}/iframe`}
      ></iframe>
    </div>
  );
}

// examole  =>  <Asciinema id="296170" />
