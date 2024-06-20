import React, { useEffect, useRef } from "react";
import { AsciinemaPlayer } from "../asciinema-player";

export default function Asciinema({ id }) {
  const ref = useRef();
  useEffect(
    () => {
      AsciinemaPlayer.create(
        `/casts/${id}.cast`,
        document.getElementById(`${ref.current.id}`)
      );
    },
    [id]
  );
  return <div dir="ltr" ref={ref} id={`cast-${id}`} />;
} // <Asciinema id="296170" />
