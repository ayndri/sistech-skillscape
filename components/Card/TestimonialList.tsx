import Image from "next/image";
import React, { Children, ReactNode } from "react";

type TestimonialListProps = {
    description: string;
    initial: string;
    name: string;
    video: string;
};

function TestimonialList({ description, initial, name, video }: TestimonialListProps) {
    return (
        <>
            <div className="img">
                <Image src="/images/quote.svg" alt="quote" width={10} height={10} />
            </div>
            <p>{description}</p>
            <div className="people">
                <div className="initial">
                    <span>{initial}</span>
                </div>
                <span className="name">{name}</span>
            </div>
            <hr />
            <div className="choose">
                <div className="choose-img">
                    <Image
                        src="/images/play.png"
                        alt="play"
                        width={10}
                        height={10}
                    />
                </div>
                <span>{video}</span>
            </div>
        </>
    );
}

export { TestimonialList };
