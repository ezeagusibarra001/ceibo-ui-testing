import Image, { ImageProps } from "next/image";
import React from "react";

export interface Card {
  image?: ImageProps;
}

export default function Card({ image }: Card) {
  if(!image) return <div>Cargando...</div>
  return (
    <article>
      <Image {...image} />
    </article>
  );
}
