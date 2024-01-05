import React, { useState } from 'react';
import s from './ArrivalsSlide.module.scss';
import Favorites from '@/app/_icons/Favorites';
import StarIcon from '@/app/_icons/StarIcon';
import Button from '@/commonUI/Button/Button';
import Link from 'next/link';

interface IArrivalsSlide {
  title: string;
  urlProduct: string;
  urlImg: string;
  statusNew: boolean;
  discount: number;
  isDiscount: boolean;
  favorite: boolean;
  rating: number[];
}

function ArrivalsSlide({
  title,
  urlProduct,
  urlImg,
  statusNew,
  discount,
  favorite,
  isDiscount,
  rating,
}: IArrivalsSlide) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  type StyleFavorite = {
    background?: string;
    opacity?: number;
    fill: string;
  };
  const styleFavorite: StyleFavorite = {
    background: isFavorite ? '#ff000080' : undefined,
    opacity: isFavorite ? 1 : undefined,
    fill: isFavorite ? 'white' : '#6C7275',
  };

  return (
    <Link href={urlProduct} className={s.slideWrap}>
      <div className={s.images}>
        <img src={urlImg} alt='product' />
        <div className={s.state}>
          {statusNew && <div className={s.status}>New</div>}
          {isDiscount && <div className={s.discount}>{discount}%</div>}
        </div>
        <div
          className={s.favorites}
          style={styleFavorite}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Favorites fill={styleFavorite.fill} />
        </div>
        <Button typeButton='button' className={s.addCart}>
          Add to cart
        </Button>
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
    </Link>
  );
}

export default ArrivalsSlide;
