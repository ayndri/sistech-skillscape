import React, { Children, ReactNode } from "react";
import { CategoriesList } from "./Card/CategoriesList";

type CategoriesProps = {
  title: string
};

const categories = [
  { name: 'Design', imageUrl: '/images/categories/design.jpg' },
  { name: 'Development', imageUrl: '/images/categories/development.jpg' },
  { name: 'Marketing', imageUrl: '/images/categories/marketing.jpg' },
  { name: 'IT and Software', imageUrl: '/images/categories/it.jpg' },
  { name: 'Personal Development', imageUrl: '/images/categories/personal.jpg' },
  { name: 'Business', imageUrl: '/images/categories/business.jpg' },
  { name: 'Photography', imageUrl: '/images/categories/photography.jpg' },
  { name: 'Music', imageUrl: '/images/categories/music.jpg' },
];

function Categories({ title }: CategoriesProps) {
  return (
    <section className="categories">
      <h2>{title}</h2>
      <div className="container-categories">
        {categories.map((category, index) => (
          <div className="card-categories" key={index}>
            <CategoriesList image={category.imageUrl} title={category.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export { Categories };
