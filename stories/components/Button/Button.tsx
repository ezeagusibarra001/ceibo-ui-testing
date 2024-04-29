import React from "react";

export interface Button{
  text: string
}

export default function Button({ text }: Button) {
  return (
      <button>{text}</button>
  );
}
