import React from "react";

export interface Button{
  name: string
}

export default function Button({ name }: Button) {
  return (
    <>
      <div>{name}</div>
    </>
  );
}
