'use client';

import { useState } from 'react';
import s from './ArrivalsSlide.module.scss';

function ArrivalsSlide({ title, urlProduct, urlImg, statusNew, discount, favorite, rating }) {
  const [isfavorite, setIsFavorite] = useState(favorite);
  const styleFavorite = {
    background: isfavorite && '#ff000080',
    opacity: isfavorite && 1,
    fill: isfavorite ? 'white' : '#6C7275',
  };

  return (
    <div className={s.slideWrap}>
      <div className={s.images}>
        <img src={urlImg} alt='product' />
        <div className={s.state}>
          {statusNew && <div className={s.status}>New</div>}
          {discount.isDiscount && <div className={s.discount}>{discount.procent}</div>}
        </div>
        <div
          className={s.favorites}
          style={styleFavorite}
          onClick={() => setIsFavorite(!isfavorite)}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M10.5772 5.76422C10.2547 6.07365 9.7456 6.07365 9.42316 5.76422L8.84616 5.2105C8.1708 4.56239 7.25844 4.16667 6.25016 4.16667C4.17909 4.16667 2.50016 5.8456 2.50016 7.91667C2.50016 9.90219 3.57498 11.5417 5.12663 12.8888C6.67959 14.237 8.53633 15.1312 9.6457 15.5876C9.87766 15.683 10.1227 15.683 10.3546 15.5876C11.464 15.1312 13.3207 14.237 14.8737 12.8888C16.4253 11.5417 17.5002 9.90218 17.5002 7.91667C17.5002 5.8456 15.8212 4.16667 13.7502 4.16667C12.7419 4.16667 11.8295 4.56239 11.1542 5.2105L10.5772 5.76422ZM10.0002 4.00798C9.02692 3.074 7.70557 2.5 6.25016 2.5C3.25862 2.5 0.833496 4.92512 0.833496 7.91667C0.833496 13.2235 6.64211 16.1542 9.01165 17.1289C9.6498 17.3914 10.3505 17.3914 10.9887 17.1289C13.3582 16.1542 19.1668 13.2235 19.1668 7.91667C19.1668 4.92512 16.7417 2.5 13.7502 2.5C12.2948 2.5 10.9734 3.074 10.0002 4.00798Z'
              fill={styleFavorite.fill}
            />
          </svg>
        </div>
        <a href={urlProduct} className={s.addCart}>
          <p>Add to cart</p>
        </a>
      </div>
      <div className={s.bodyContent}>
        <div className={s.rating}>
          <img width={16} height={16} src='/images/Arrivals/ratingIcon.svg' alt='rating' />
          <img width={16} height={16} src='/images/Arrivals/ratingIcon.svg' alt='rating' />
          <img width={16} height={16} src='/images/Arrivals/ratingIcon.svg' alt='rating' />
          <img width={16} height={16} src='/images/Arrivals/ratingIcon.svg' alt='rating' />
          <img width={16} height={16} src='/images/Arrivals/ratingIcon.svg' alt='rating' />
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

export default ArrivalsSlide;
