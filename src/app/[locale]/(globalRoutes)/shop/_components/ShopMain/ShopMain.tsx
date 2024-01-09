'use client';

import Filter from '@/app/[locale]/(globalRoutes)/shop/_components/ShopMain/filter/Filter';
import Goods from '@/app/[locale]/(globalRoutes)/shop/_components/ShopMain/goods/Goods';
import { useState } from 'react';
import { data } from '../../../_components/Arrivals/Swiper/data';
import s from './shopWrap.module.scss';
import Newsletter from '@/app/[locale]/(globalRoutes)/_components/Newsletter/Newsletter';

const categories: string[] = [
  'All Rooms',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Bathroom',
  'Dinning',
  'Outdoor',
];
const categoriesPrice: { id: number; price: string }[] = [
  { id: 1, price: 'All Price' },
  { id: 2, price: '$0.00 - 99.99' },
  { id: 3, price: '$100.00 - 199.99' },
  { id: 4, price: '$200.00 - 299.99' },
  { id: 5, price: '$300.00 - 399.99' },
  { id: 6, price: '$400.00+' },
];

function ShopMain() {
  const [products, setProducts] = useState(data);

  const [activeCategories, setActiveCategories] = useState<string>('All Rooms');
  const [activePrice, setActivePrice] = useState<string>();
  const [activeSortCategories, setActiveSortCategories] = useState('');

  const [nameCategories, setNameCategories] = useState<string>('All Rooms');

  const filterDataType = (type: string) => setActiveCategories(type);
  const filterDataPrice = (sum: string) => setActivePrice(sum);
  const setNameFilterCategories = (title: string) => setNameCategories(title);

  return (
    <>
      <div className='_container'>
        <div className={s.shopWrap}>
          <Filter
            filterDataType={filterDataType}
            filterDataPrice={filterDataPrice}
            setNameFilterCategories={setNameFilterCategories}
            activeCategories={activeCategories}
            categories={categories}
            categoriesPrice={categoriesPrice}
          />
          <Goods
            products={products}
            nameCategories={nameCategories}
            setActiveSort={setActiveSortCategories}
            activeSort={activeSortCategories}
          />
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default ShopMain;
