import Image from "next/image";
import React, { Children, ReactNode } from "react";

type LearningListProps = {
    image: string;
    title: string;
    name: string;
    price: number;
};

function LearningList({ image, title, name, price }: LearningListProps) {
    return (
        <>
            <Image src={image} alt={title} width={300} height={300} />
            <div className="content-video">
                <span>{title}</span>
                <small>{name}</small>
                <span className="price">{'Rp' + price}</span>
            </div>
        </>);
}

export { LearningList };