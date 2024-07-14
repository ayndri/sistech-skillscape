import Image from "next/image";
import React, { Children, ReactNode } from "react";

type CompanyCardProps = {
  title: string;
  image: string;
};

function CompanyCard({ title, image }: CompanyCardProps) {
  return (
    <Image src={image} alt={title} width={60} height={40} />
  );
}

export { CompanyCard };
