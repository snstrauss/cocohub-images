import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalProvider";
import Image from "../Image/Image";
import S from "./ImageModal.module.scss";

export default function ImageModal({ url, animationState }) {
  const { hideModal } = useContext(ModalContext);

  const className = `${S.container} ${animationState && S[animationState]}`;

  return (
    // <div className={S.container}>
    <div className={className}>
      <Image url={url} onClick={hideModal} />
    </div>
  );
}
