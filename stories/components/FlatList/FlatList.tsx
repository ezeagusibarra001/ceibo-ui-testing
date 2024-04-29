import React from "react";

interface FlatList {
  render: (e: string) => React.ReactNode;
  elements: string[];
}

export default function FlatList({ render, elements }: FlatList) {
  return elements.map((e) => render(e));
}
