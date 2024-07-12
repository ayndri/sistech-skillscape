import Image from "next/image";
import React, { Children, ReactNode } from "react";

type CategoriesListProps = {
    image: string;
    title: string;
};

function CategoriesList({ image, title }: CategoriesListProps) {
    return (
        <>
            <div className="img-categories">
                <Image src={image} alt={title} width={300} height={300} />
            </div>
            <div className="content-video-cat">
                <span>{title}</span>
            </div>
        </>
    );
}

export { CategoriesList };