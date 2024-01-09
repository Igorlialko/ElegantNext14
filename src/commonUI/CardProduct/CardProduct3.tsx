import { useState } from 'react';
import s from './CardProduct3.module.scss';
import Favorites from '@/app/_icons/Favorites';
import StarIcon from '@/app/_icons/StarIcon';
import clsx from 'clsx';
import { TViews } from '@/app/(globalRoutes)/_components/ViewSortSelect/views';
import Button from '@/commonUI/Button/Button';

interface ICardProductProps {
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

function CardProduct3({
  title,
  urlProduct,
  urlImg,
  statusNew,
  discount,
  favorite,
  isDiscount,
  rating,
  viewShowPage,
}: ICardProductProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(favorite);
  const styleFavorites: { backgroundColor: string; opacity: string } = {
    backgroundColor: isFavorite ? 'rgba(253,46,46,0.78)' : '',
    opacity: isFavorite ? '1' : '',
  };

  return (
    // <Link href={urlProduct} className={clsx(s.slideWrap)}>
    <div className={s.slideWrap}>
      <div className={clsx(s.images)}>
        <img src={urlImg} alt='product' width={262} height={349} />
        <div className={s.state}>
          {statusNew && <div className={s.status}>New</div>}
          {isDiscount && <div className={s.discount}>{discount}%</div>}
        </div>
      </div>
      <div className={s.bodyContent}>
        <div className={s.rating}>
          {rating.map((key) => (
            <StarIcon key={key} />
          ))}
        </div>
        <div className={s.description}>
          <div className={s.title}>{title} card4</div>
          <div className={s.price}>
            <div className={s.priceNew}>$199.00</div>
            <div className={s.priceOld}>$400.00</div>
          </div>
        </div>
        <p>
          Super-soft cushion cover in off-white with a tactile pattern that enhances the different
          tones in the pile and base. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          ad adipisci, dolore ea ex hic id labore officiis praesentium quia, sint temporibus
          voluptates. Culpa delectus labore placeat sequi voluptate voluptatum.
        </p>
        <Button className={s.addCart}>Add to cart</Button>
        <div className={s.wishlist}>
          <div
            className={clsx(s.favorites)}
            style={styleFavorites}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Favorites fill={isFavorite ? 'white' : '#6C7275'} />
          </div>
          <button onClick={() => setIsFavorite(!isFavorite)}>Wishlist</button>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default CardProduct3;
