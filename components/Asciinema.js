import React from "react";

export default function Asciinema({ id }) {
  return (
    <iframe
      className="asciinema_video"
      allowFullScreen={true}
      src={`https://asciinema.org/a/${id}/iframe`}
    ></iframe>
  );
}

// <Asciinema id="296170" />
