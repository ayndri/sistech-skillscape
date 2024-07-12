import Image from "next/image";
import React, { Children, ReactNode } from "react";

type CompanyCardProps = {
  title: string;
  image: string;
};

function CompanyCard({ title, image }: CompanyCardProps) {
  return (
    <div>
      <Image src={image} alt={title} width={40} height={30} />
    </div>
  );
}

export { CompanyCard };
