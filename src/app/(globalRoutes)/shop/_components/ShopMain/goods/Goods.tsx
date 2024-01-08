import CardProduct from '@/commonUI/CardProduct/CardProduct';
import s from './goods.module.scss';
import ViewSortSelect from '@/app/(globalRoutes)/_components/ViewSortSelect/ViewSortSelect';
import { useState } from 'react';
import { views } from '@/app/(globalRoutes)/_components/ViewSortSelect/views';
import Button from '@/commonUI/Button/Button';

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

function Goods({ products, nameCategories, activeSort, setActiveSort }: IGoodsProps) {
  const [activeView, setActiveView] = useState(views[0]);

  return (
    <div className={s.goodsFlex}>
      <div className={s.flexWrap}>
        <div className={s.title}>{nameCategories}</div>
        <ViewSortSelect
          activeView={activeView}
          setActiveView={setActiveView}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
      </div>
      <div className={s.goodsWrap}>
        {products.map((product) => {
          return (
            <CardProduct
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
