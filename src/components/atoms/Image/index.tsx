import * as React from "react";

import "./style.scss";

interface IImageProps {
    src: string;
    alt: string;
}
const Image = ({ src, alt }: IImageProps) => (
    <img className="image" src={src} alt={alt} />
);

export default Image;
