import Image, { ImageProps } from "next/image";
import React from "react";

export interface Card {
  image?: ImageProps;
}

export default function Card() {
  // if(!image) return <div>Cargando...</div>
  return (
    <article>
      <Image  src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={'test image'}  width={100}height={100}  />
    </article>
  );
}
