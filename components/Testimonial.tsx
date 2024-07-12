import React, { Children, ReactNode } from "react";
import { TestimonialList } from "./Card/TestimonialList";

type TestimonialProps = {
    title: string
};

const testimonials = [
    {
        name: 'John Doe',
        text: 'This platform has changed my life. The courses are amazing and the instructors are top-notch.',
        initial: 'JD',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
    {
        name: 'John Doe',
        text: 'This platform has changed my life. The courses are amazing and the instructors are top-notch.',
        initial: 'JD',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
    {
        name: 'John Doe',
        text: 'This platform has changed my life. The courses are amazing and the instructors are top-notch.',
        initial: 'JD',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
    {
        name: 'John Doe',
        text: 'This platform has changed my life. The courses are amazing and the instructors are top-notch.',
        initial: 'JD',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
    {
        name: 'John Doe',
        text: 'This platform has changed my life. The courses are amazing and the instructors are top-notch.',
        initial: 'JD',
        video: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2022'
    },
];

function Testimonial ({title}: TestimonialProps) {
    return (
        <section className="testimonials">
            <h2>{title}</h2>
            {testimonials.map((testimonial, index) => (
                <div className="card-testimonial" key={index}>
                    <TestimonialList description={testimonial.text} name={testimonial.name} initial={testimonial.initial} video={testimonial.video} />
                </div>
            ))}
        </section>
    )
}

export { Testimonial };
