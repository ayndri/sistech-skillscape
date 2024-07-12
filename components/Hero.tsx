import React, { Children, ReactNode } from "react";
import { Button } from "./Button";

type HeroProps = {
    topText: string;
    title: string;
    desciprion: string;
}

function Hero({ topText, title, desciprion }: HeroProps) {
    return (
        <section className="hero">
            <span className="small-title">{topText}</span>
            <h1>{title}</h1>
            <div className="title-bawah">
                <p>{desciprion}</p>
            </div>
            <Button children="Get Started" />
        </section>
    )
}

export { Hero };