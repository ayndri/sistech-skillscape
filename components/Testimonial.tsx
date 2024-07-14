import React, { Children, ReactNode } from "react";
import { TestimonialList } from "./Card/TestimonialList";

type TestimonialProps = {
    title: string
};

const testimonials = [
    {
        name: 'Will A',
        text: 'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
        initial: 'WA',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
    {
        name: 'Will A',
        text: 'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
        initial: 'WA',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
    {
        name: 'Will A',
        text: 'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
        initial: 'WA',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
    {
        name: 'Will A',
        text: 'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
        initial: 'WA',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
    {
        name: 'Will A',
        text: 'I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.',
        initial: 'WA',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
];

function Testimonial({ title }: TestimonialProps) {
    return (
        <section className="testimonial">
            <div>
                <h2>{title}</h2>
            </div>
            <div className="wrapper">
                <i id="left" className="fa-solid fa-angle-left">{"<"}</i>
                <div className="carousel">
                    {testimonials.map((testimonial, index) => (
                        <div className="card" key={index}>
                            <TestimonialList description={testimonial.text} name={testimonial.name} initial={testimonial.initial} video={testimonial.video} />
                        </div>
                    ))}
                </div>

                <i id="right" className="fa-solid fa-angle-right">{">"}</i>
            </div>

        </section>
    )
}

export { Testimonial };
