import React, { useEffect, useRef } from "react";
import { AsciinemaPlayer } from "../asciinema-player";

export default function Asciinema({ id }) {
  const ref = useRef();
  useEffect(
    () => {
      AsciinemaPlayer.create(`/casts/${id}.cast`, ref.current);
    },
    [id]
  );
  return <div dir="ltr" ref={ref} id={`cast-${id}`} />;
} // <Asciinema id="296170" />
