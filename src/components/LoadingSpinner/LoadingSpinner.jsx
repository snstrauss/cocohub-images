import React from "react";
import S from "./LoadingSpinner.module.scss";

export default function LoadingSpinner({ color, size }) {
  return (
    <div className={S.spinner} style={{ "--color": color, "--size": size }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
