import Link from "next/link";
import React from "react";

export interface LinkComponent {
  text?: string;
  href?: string;
}

export default function LinkComponent({ text, href }: LinkComponent) {
  if(!text || !href) return <div>Cargando...</div>
  return (
    <Link target="_blank" href={href}>
      {text}
    </Link>
  );
}
