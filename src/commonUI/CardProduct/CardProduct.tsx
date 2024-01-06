import { useState } from 'react';
import s from './CardProduct.module.scss';
import Favorites from '@/app/_icons/Favorites';
import StarIcon from '@/app/_icons/StarIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { TViews } from '@/commonUI/ViewSortSelect/views';

interface CardProductProps {
  title: string;
  urlProduct: string;
  urlImg: string;
  statusNew: boolean;
  discount: number;
  isDiscount: boolean;
  favorite: boolean;
  rating: number[];
  viewShowPage?: TViews;
}

function CardProduct({
  title,
  urlProduct,
  urlImg,
  statusNew,
  discount,
  favorite,
  isDiscount,
  rating,
  viewShowPage,
}: CardProductProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(favorite);
  const styleFavorites: { backgroundColor: string; opacity: string } = {
    backgroundColor: isFavorite ? 'rgba(253,46,46,0.78)' : '',
    opacity: isFavorite ? '1' : '',
  };

  return (
    <div
      className={clsx(s.slideWrap, {
        [s.imagesViewBig]: viewShowPage === 'cardBig',
      })}
    >
      <div className={clsx(s.images)}>
        <img src={urlImg} alt='product' width={262} height={349} />
        <div className={s.state}>
          {statusNew && <div className={s.status}>New</div>}
          {isDiscount && <div className={s.discount}>{discount}%</div>}
        </div>
        <div
          className={clsx(s.favorites)}
          onClick={() => setIsFavorite(!isFavorite)}
          style={styleFavorites}
        >
          <Favorites fill={isFavorite ? 'white' : '#6C7275'} />
        </div>
        <Link href={urlProduct} className={s.addCart}>
          <p>Add to cart</p>
        </Link>
      </div>
      <div className={s.bodyContent}>
        <div className={s.rating}>
          {rating.map((key) => (
            <StarIcon key={key} />
          ))}
        </div>
        <div className={s.title}>{title}</div>
        <div className={s.price}>
          <div className={s.priceNew}>$199.00</div>
          <div className={s.priceOld}>$400.00</div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
