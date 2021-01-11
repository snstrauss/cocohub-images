import React from "react";
import ModalProvider from "../../context/ModalProvider";
import useImages from "../../hooks/useImages";
import ImageList from "../ImageList/ImageList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import S from "./CocohubImages.module.scss";

export default function CocohubImages() {
  const [images] = useImages();

  return (
    <ModalProvider>
      <div className={S.container}>
        {images.length ? (
          <ImageList images={images} />
        ) : (
          <LoadingSpinner size={3} />
        )}
      </div>
    </ModalProvider>
  );
}
