import { useEffect, useState } from "react";

export default function useLoadedImage(url) {

    const [dataUrl, setDataUrl] = useState();

    useEffect(() => {
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
                const urlFromBlob = URL.createObjectURL(blob);
                setDataUrl(urlFromBlob);
            });
    }, [url]);

    return dataUrl;

}