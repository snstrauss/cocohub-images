import React from "react";
import S from "./Image.module.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useLoadedImage from "../../hooks/useLoadedImage";

export default function Image({ url, author, onClick }) {
  const dataUrl = useLoadedImage(url);

  return (
    <div className={S.container}>
      {dataUrl ? (
        <img
          src={dataUrl}
          alt={author}
          onClick={(ev) => {
            ev.stopPropagation();
            onClick(url);
          }}
        />
      ) : (
        <LoadingSpinner color={"white"} size={1} />
      )}
    </div>
  );
}
