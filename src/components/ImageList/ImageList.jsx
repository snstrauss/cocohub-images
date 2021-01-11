import React, { useContext, useState } from "react";
import S from "./ImageList.module.scss";
import Image from "../Image/Image";
import ImageModal from "../ImageModal/ImageModal";
import { ModalContext } from "../../context/ModalProvider";

export default function ImageList({ images }) {
  const { showModal } = useContext(ModalContext);

  function showImage(url) {
    showModal(url);
  }

  return (
    <div className={S.container}>
      {images.map(({ download_url, author, id }) => (
        <Image
          key={id}
          url={download_url}
          author={author}
          onClick={showImage}
        />
      ))}
    </div>
  );
}
