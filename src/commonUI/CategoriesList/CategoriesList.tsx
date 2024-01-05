import s from './categoriesList.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';

interface ICategoriesList {
  categories: { category: string; id: number }[];
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  className?: string;
}

const CategoriesList = ({ categories, onClick, className }: ICategoriesList) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  function changeActiveCategory(index: number) {
    setActiveCategory(categories[index].id);
  }

  return (
    <ul className={clsx(s.categoriesList, className)}>
      {categories.map((item, index) => {
        return (
          <li key={item.id} className={item.id === activeCategory ? s.categoryActive : undefined}>
            <button
              type='button'
              onClick={(e) => {
                // onClick(e);
                changeActiveCategory(index);
              }}
            >
              {item.category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
