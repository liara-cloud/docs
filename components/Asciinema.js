import React from "react";

export default function Asciinema({id}) {
  return (
    <div>
      <iframe
        className="asciinema"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        src={`https://asciinema.org/a/${id}/iframe`}
      ></iframe>
    </div>
  );
}

// examole  =>  <Asciinema id="296170" />