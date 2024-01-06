import CardProduct from '@/commonUI/CardProduct/CardProduct';
import s from './goods.module.scss';
import ViewSortSelect from '@/commonUI/ViewSortSelect/ViewSortSelect';
import { useState } from 'react';
import { views } from '@/commonUI/ViewSortSelect/views';

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
  activeCategories: string;
  activePrice?: string;
  nameCategories: string;
  categoriesSort: string[];
  getActiveSortCategories: (activeSort: string) => void;
}

function Goods({ products, nameCategories, categoriesSort, getActiveSortCategories }: IGoodsProps) {
  const [activeView, setActiveView] = useState(views[0]);

  return (
    <div className={s.goodsFlex}>
      <div className={s.flexWrap}>
        <div className={s.title}>{nameCategories}</div>
        <ViewSortSelect
          categoriesSort={categoriesSort}
          getActiveSortCategories={getActiveSortCategories}
          activeView={activeView}
          setActiveView={setActiveView}
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
      <div className={s.showMore}>
        <div className={s.showMoreText}>Show more</div>
      </div>
    </div>
  );
}

export default Goods;
