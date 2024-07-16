import Image from "next/image";
import React, { Children, ReactNode } from "react";

type LearningListProps = {
    image: string;
    title: string;
    content: string;
};

function LearningList({ image, title, content }: LearningListProps) {
    return (
        <>
            <Image src={image} alt={title} width={300} height={300} />
            <div className="content-video">
                <span>{title}</span>
                <span className="price">{content}</span>
            </div>
        </>);
}

export { LearningList };