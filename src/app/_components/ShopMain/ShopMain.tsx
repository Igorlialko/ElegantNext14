'use client';

import Filter from '@/app/_components/ShopMain/filter/Filter';
import Goods from '@/app/_components/ShopMain/goods/Goods';
import { useState } from 'react';
import { data } from '../Arrivals/Swiper/data';

import s from './shopWrap.module.scss';

function ShopMain() {
  const [products, setProducts] = useState(data);
  const [active, setActive] = useState<string>('all');
  const [price, setPrice] = useState<number[]>([0, Infinity]);
  const [nameCategories, setNameCategories] = useState<string>('All Rooms');
  const filterDataType = (type: string) => {
    setActive(type);
  };

  const filterDataPrice = (sum: number[]) => {
    setPrice(sum);
  };

  const setNameFilterCategories = (title: string) => {
    setNameCategories(title);
  };

  return (
    <div className='_container'>
      <div className={s.shopWrap}>
        <Filter
          filterDataType={filterDataType}
          active={active}
          filterDataPrice={filterDataPrice}
          setNameFilterCategories={setNameFilterCategories}
        />
        <Goods products={products} active={active} price={price} nameCategories={nameCategories} />
      </div>
    </div>
  );
}

export default ShopMain;
