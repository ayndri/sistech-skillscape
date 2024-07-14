import React, { Children, ReactNode } from "react";
import { CompanyCard } from "./Card/CompanyCard";

type CompanyProps = {
    title: string;
}

const company = [
    { name: 'volkswagen', imageUrl: '/images/volkswagen_logo.svg' },
    { name: 'samsung', imageUrl: '/images/samsung_logo.svg' },
    { name: 'cisco', imageUrl: '/images/cisco.svg' },
    { name: 'vimeo', imageUrl: '/images/vimeo.svg' },
    { name: 'pg', imageUrl: '/images/pg.svg' },
    { name: 'hawlett', imageUrl: '/images/hawlett.svg' },
    { name: 'ericsson', imageUrl: '/images/ericsson.svg' },
];

function Company({ title }: CompanyProps) {
    return (
        <section className="company">
            <h2>{title}</h2>
            <div className="company-container">
            {company.map((comp, index) => (
                <div className="card-company" key={index}>
                    <CompanyCard image={comp.imageUrl} title={comp.name} />
                </div>
            ))}
            </div>
        </section>
    )
}

export { Company };