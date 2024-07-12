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
}

function LearningCard({title, description, learning }: LearningCardProps) {
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button children={'Explore ' + title} />
            </div>
            {learning.map((list, index) => (
                <div className="container-video" key={index}>
                    <LearningList image={list.image} title={list.title} name={list.instructor} price={list.price} />
                </div>
            ))}
        </>
    )
}

export { LearningCard };