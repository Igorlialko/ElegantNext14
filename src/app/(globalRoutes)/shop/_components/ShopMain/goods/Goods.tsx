import ArrivalsSlide from '@/app/(globalRoutes)/_components/Arrivals/Slide/ArrivalsSlide';

import s from './goods.module.scss';
import HeaderView from '@/app/(globalRoutes)/shop/_components/ShopMain/goods/headerView/HeaderView';

interface goodsTypeData {
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
interface GoodsProps {
  products: goodsTypeData[];
  active: string;
  price: number[];
  nameCategories: string;
}

function Goods({ products, active, price, nameCategories }: GoodsProps) {
  return (
    <div className={s.goodsFlex}>
      <HeaderView nameCategories={nameCategories} />
      <div className={s.goodsWrap}>
        {active !== 'all'
          ? products
              .filter(
                (product) =>
                  product.categories === active &&
                  product.price >= price[0] &&
                  product.price <= price[1]
              )
              .map((product) => {
                console.log(product);
                return (
                  <ArrivalsSlide
                    key={product.id}
                    title={product.title}
                    urlProduct={product.urlProduct}
                    urlImg={product.urlImg}
                    statusNew={product.statusNew}
                    discount={product.discount}
                    isDiscount={product.isDiscount}
                    favorite={product.favorite}
                    rating={[1, 2, 3, 4, 5]}
                  />
                );
              })
          : products
              .filter((product) => product.price >= price[0] && product.price <= price[1])
              .map((product) => (
                <ArrivalsSlide
                  key={product.id}
                  title={product.title}
                  urlProduct={product.urlProduct}
                  urlImg={product.urlImg}
                  statusNew={product.statusNew}
                  discount={product.discount}
                  isDiscount={product.isDiscount}
                  favorite={product.favorite}
                  rating={[1, 2, 3, 4, 5]}
                />
              ))}
      </div>
      <div className={s.showMore}>
        <div className={s.showMoreText}>Show more</div>
      </div>
    </div>
  );
}
export default Goods;
