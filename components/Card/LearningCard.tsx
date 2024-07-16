import Image from "next/image";
import React, { Children, ReactNode } from "react";
import { Button } from "../Button";
import { LearningList } from "./LearningList";

type Course = {
    title: string;
    instructor: string;
    price: number;
    image: string;
}

type LearningCardProps = {
    title: string;
    description: string;
    learning: Course[];
    img: string;
}

function LearningCard({title, description, learning, img }: LearningCardProps) {
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button children={'Explore ' + title} />
            </div>
            <div className="container-video" >
            {learning.map((list:any, index:number) => (
                 <div className="card-video" key={index}>
                    <LearningList image={img} title={list.name} content={list.content} />
                </div>
            ))}
            </div>
        </>
    )
}

export { LearningCard };