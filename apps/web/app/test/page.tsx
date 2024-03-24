"use client";
import DropZone from "@repo/ui/button";

export default function Page() {
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <DropZone key={12}></DropZone>
    </div>
  );
}
