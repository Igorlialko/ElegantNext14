import s from './filter.module.scss';
import clsx from 'clsx';
import FilterIcon from '@/app/_icons/FilterIcon';
import CheckBox from '@/commonUI/CheckBox/CheckBox';
import React from 'react';

interface Filter {
  filterDataType: (type: string) => void;
  activeCategories: string;
  filterDataPrice: (type: string) => void;
  setNameFilterCategories: (type: string) => void;
  categories: string[];
  categoriesPrice: { id: number; price: string }[];
}
function Filter({
  filterDataType,
  activeCategories,
  filterDataPrice,
  setNameFilterCategories,
  categories,
  categoriesPrice,
}: Filter) {
  const handleActiveCategories = (type: string, title: string) => {
    filterDataType(type);
    setNameFilterCategories(title);
  };
  const handleCheckboxChange = (price: string) => filterDataPrice(price);

  return (
    <div className={s.filterWrap}>
      <div className={s.title}>
        <FilterIcon />
        <span>Filter</span>
      </div>
      <div className={s.filterName}>
        <div className={s.filterTitle}>CATEGORIES</div>
        <ul className={s.categoriesList}>
          {categories.map((item) => (
            <li
              key={item}
              className={clsx(s.filterItem, activeCategories === item && s.itemActive)}
            >
              <div className={s.item} onClick={() => handleActiveCategories(item, item)}>
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.filterName}>
        <div className={s.filterTitle}>PRICE</div>
        <ul className={s.categoriesListPrice}>
          {categoriesPrice.map((item) => {
            return (
              <li key={item.id} className={clsx(s.filterItem)}>
                <CheckBox optionClassName={s.labelCheckBox}>
                  <span>{item.price}</span>
                </CheckBox>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
