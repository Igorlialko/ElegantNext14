'use client';

import { Scrollbar, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CadrProduct from '../../../../../../modules/product/ui/CardProduct/CardProduct';
import { data } from './data';
import clsx from 'clsx';

import s from './ArrivalsSwiper.module.scss';

function ArrivalsSwiper() {
  return (
    <div className={clsx(s.swiper, s.swiperScroll, s.swiperSlide)}>
      <Swiper
        modules={[Scrollbar, Mousewheel]}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 30,
          },
          487: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          625: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        direction={'horizontal'}
        mousewheel
        speed={400}
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <CadrProduct
              title={product.title}
              urlProduct={product.urlProduct}
              urlImg={product.urlImg}
              statusNew={product.statusNew}
              discount={product.discount}
              isDiscount={product.isDiscount}
              favorite={product.favorite}
              rating={[1, 2, 3, 4, 5]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ArrivalsSwiper;
