import { useEffect, useState } from "react"

export default function useImages() {
    const [images, setImages] = useState([]);

    useEffect(getNewImages, []);

    function getNewImages() {
        fetch('https://picsum.photos/v2/list')
            .then(res => res.json())
            .then(setImages);
    }

    return [images, getNewImages];
}