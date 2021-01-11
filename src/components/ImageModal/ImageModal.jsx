import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalProvider";
import Image from "../Image/Image";
import S from "./ImageModal.module.scss";

export default function ImageModal({ url, animationState, animationDuration }) {
  const { hideModal } = useContext(ModalContext);

  const className = `${S.container} ${animationState && S[animationState]}`;

  return (
    <div
      className={className}
      style={{ "--animation-duration": `${animationDuration}ms` }}
    >
      <Image url={url} onClick={hideModal} />
    </div>
  );
}
