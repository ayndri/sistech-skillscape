import Image from "next/image";
import React, { Children, ReactNode } from "react";

type LogoProps = {
    image: string;
    width: number;
    height: number;
}

function Logo({ image, width, height }: LogoProps) {
    return (
        <Image src={image} width={width} height={height} alt="Logo" />
    )
}

export { Logo };