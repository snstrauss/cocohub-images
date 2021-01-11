import React, { useContext } from "react";
import S from "./ImageList.module.scss";
import Image from "../Image/Image";
import { ModalContext } from "../../context/ModalProvider";

export default function ImageList({ images }) {
  const { showModal } = useContext(ModalContext);

  return (
    <div className={S.container}>
      {images.map(({ download_url, author, id }) => (
        <Image
          key={id}
          url={download_url}
          author={author}
          onClick={showModal}
        />
      ))}
    </div>
  );
}
