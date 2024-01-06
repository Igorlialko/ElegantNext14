'use client';

import Filter from '@/app/(globalRoutes)/shop/_components/ShopMain/filter/Filter';
import Goods from '@/app/(globalRoutes)/shop/_components/ShopMain/goods/Goods';
import { useState } from 'react';
import { data } from '../../../_components/Arrivals/Swiper/data';
import s from './shopWrap.module.scss';
import Newsletter from '@/app/(globalRoutes)/_components/Newsletter/Newsletter';

const categories: string[] = [
  'All Rooms',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Bathroom',
  'Dinning',
  'Outdoor',
];
const categoriesSort: string[] = ['Name', 'Discount', 'Price', 'Popularity', "don't sort"];
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
  const [activeSortCategories, setActiveSortCategories] = useState<string>("don't sort");

  const [nameCategories, setNameCategories] = useState<string>('All Rooms');
  const [viewShowPage, setViewShowPage] = useState('all');

  const filterDataType = (type: string) => setActiveCategories(type);
  const filterDataPrice = (sum: string) => setActivePrice(sum);
  const setNameFilterCategories = (title: string) => setNameCategories(title);
  const getActiveSortCategories = (activeSort: string) => setActiveSortCategories(activeSort);
  const getActiveView = (view: string) => setViewShowPage(view);

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
            categoriesSort={categoriesSort}
            activeCategories={activeCategories}
            nameCategories={nameCategories}
            getActiveSortCategories={getActiveSortCategories}
            getActiveView={getActiveView}
            viewShowPage={viewShowPage}
          />
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default ShopMain;
