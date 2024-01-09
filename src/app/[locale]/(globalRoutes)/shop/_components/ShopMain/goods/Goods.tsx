import CardProduct from '@/modules/product/ui/CardProduct/CardProduct';
import s from './goods.module.scss';
import ViewSortSelect from '@/app/[locale]/(globalRoutes)/_components/ViewSortSelect/ViewSortSelect';
import { views } from '@/app/[locale]/(globalRoutes)/_components/ViewSortSelect/views';
import Button from '@/commonUI/Button/Button';
import CardProduct1 from '@/modules/product/ui/CardProduct/CardProduct1';
import React, { useState } from 'react';
import CardProduct2 from '@/modules/product/ui/CardProduct/CardProduct2';
import CardProduct3 from '@/modules/product/ui/CardProduct/CardProduct3';

interface IGoodsTypeData {
  discount: number;
  isDiscount: boolean;
  rating: number | null;
  urlProduct: string;
  urlImg: string;
  title: string;
  statusNew: boolean;
  favorite: boolean;
  categories: string;
  price: number;
  id?: number;
}

interface IGoodsProps {
  products: IGoodsTypeData[];
  nameCategories: string;
  activeSort: string;
  setActiveSort: (activeSort: string) => void;
}

const cards = [CardProduct, CardProduct1, CardProduct2, CardProduct3];

function Goods({ products, nameCategories, activeSort, setActiveSort }: IGoodsProps) {
  const [activeView, setActiveView] = useState(views[0]);

  let ActiveCard: React.ComponentType<any>;
  if (activeView === views[0]) {
    ActiveCard = CardProduct;
  }
  if (activeView === views[1]) {
    ActiveCard = CardProduct1;
  }
  if (activeView === views[2]) {
    ActiveCard = CardProduct2;
  }
  if (activeView === views[3]) {
    ActiveCard = CardProduct3;
  }
  return (
    <div className={s.goodsFlex}>
      <div className={s.flexWrap}>
        <div className={s.title}>{nameCategories}</div>
        <ViewSortSelect
          className={s.displayNone}
          activeView={activeView}
          setActiveView={setActiveView}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
      </div>
      <div className={s.goodsWrap}>
        {products.map((product) => {
          return (
            <ActiveCard
              key={product.id}
              title={product.title}
              urlProduct={product.urlProduct}
              urlImg={product.urlImg}
              statusNew={product.statusNew}
              discount={product.discount}
              isDiscount={product.isDiscount}
              favorite={product.favorite}
              rating={[1, 2, 3, 4, 5]}
              viewShowPage={activeView}
            />
          );
        })}
      </div>
      <Button className={s.showMore} roundedButton>
        Show more
      </Button>
    </div>
  );
}

export default Goods;
